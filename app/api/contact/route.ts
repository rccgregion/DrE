import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import { contactFormSchema } from "@/lib/validation"
import { rateLimit } from "@/lib/rate-limit"

const resend = new Resend(process.env.RESEND_API_KEY)
const CONTACT_EMAIL = process.env.CONTACT_EMAIL_RECIPIENT || "noreply@example.com"

export async function POST(request: NextRequest) {
  try {
    // Rate limiting: 5 requests per minute per IP
    const { success, remaining } = rateLimit(request, {
      interval: 60 * 1000, // 1 minute
      maxRequests: 5,
    })

    if (!success) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429, headers: { "Retry-After": "60" } }
      )
    }

    const body = await request.json()

    // Validate input with Zod schema
    const validatedData = contactFormSchema.parse(body)

    // Log contact form submission (without sensitive details in production)
    console.log("[Contact] New form submission from:", validatedData.email)

    // Send email using Resend if API key exists
    if (process.env.RESEND_API_KEY) {
      await resend.emails.send({
        from: "Contact Form <onboarding@resend.dev>",
        to: CONTACT_EMAIL,
        subject: `New Contact Form Submission from ${validatedData.firstName} ${validatedData.lastName}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${validatedData.firstName} ${validatedData.lastName}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          <p><strong>Phone:</strong> ${validatedData.phone || "Not provided"}</p>
          <p><strong>Service Interest:</strong> ${validatedData.service || "Not specified"}</p>
          <p><strong>Message:</strong></p>
          <p>${validatedData.message.replace(/\n/g, "<br/>")}</p>
          <hr />
          <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
        `,
      })
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been sent successfully. We'll get back to you within 24-48 hours.",
      },
      { status: 200, headers: { "X-RateLimit-Remaining": remaining.toString() } }
    )
  } catch (error) {
    // Log error but don't expose details to client
    console.error("[Contact] Form error:", error instanceof Error ? error.message : "Unknown error")

    // Distinguish between validation errors and server errors
    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json(
        { error: "Invalid input. Please check your form and try again." },
        { status: 400 }
      )
    }

    return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 })
  }
}
