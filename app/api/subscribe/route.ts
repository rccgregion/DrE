import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import { subscribeFormSchema } from "@/lib/validation"
import { rateLimit } from "@/lib/rate-limit"

const resend = new Resend(process.env.RESEND_API_KEY)
const CONTACT_EMAIL = process.env.CONTACT_EMAIL_RECIPIENT || "noreply@example.com"

export async function POST(request: NextRequest) {
  try {
    // Rate limiting: 10 requests per minute per IP
    const { success, remaining } = rateLimit(request, {
      interval: 60 * 1000, // 1 minute
      maxRequests: 10,
    })

    if (!success) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429, headers: { "Retry-After": "60" } }
      )
    }

    const body = await request.json()

    // Validate input with Zod schema
    const validatedData = subscribeFormSchema.parse(body)

    // Log subscription (without sensitive details in production)
    console.log("[Newsletter] New subscription from:", validatedData.email)

    // Send notification email using Resend
    if (process.env.RESEND_API_KEY) {
      await resend.emails.send({
        from: "Newsletter <onboarding@resend.dev>",
        to: CONTACT_EMAIL,
        subject: "New Newsletter Subscription",
        html: `
          <h2>New Newsletter Subscription</h2>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          <p><strong>Subscribed at:</strong> ${new Date().toLocaleString()}</p>
        `,
      })
    }

    return NextResponse.json(
      {
        success: true,
        message: "Subscribed successfully! You will receive healthcare strategy insights from Dr. Ekaette.",
      },
      { status: 200, headers: { "X-RateLimit-Remaining": remaining.toString() } }
    )
  } catch (error) {
    // Log error but don't expose details to client
    console.error("[Newsletter] Subscription error:", error instanceof Error ? error.message : "Unknown error")

    // Distinguish between validation errors and server errors
    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json({ error: "Invalid email address. Please try again." }, { status: 400 })
    }

    return NextResponse.json({ error: "Failed to subscribe. Please try again." }, { status: 500 })
  }
}
