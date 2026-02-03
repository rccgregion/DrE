import { z } from "zod"

// Simple HTML escape function
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

// Email validation schema - RFC 5322 compliant
const emailSchema = z
  .string()
  .min(5, "Email must be at least 5 characters")
  .max(254, "Email must not exceed 254 characters")
  .email("Invalid email address")

// Sanitize input to prevent XSS
export function sanitizeInput(input: string): string {
  return escapeHtml(input.trim()).slice(0, 1000) // Limit to 1000 chars
}

export const contactFormSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .max(100, "First name must not exceed 100 characters")
    .transform(sanitizeInput),
  lastName: z
    .string()
    .min(1, "Last name is required")
    .max(100, "Last name must not exceed 100 characters")
    .transform(sanitizeInput),
  email: emailSchema,
  phone: z
    .string()
    .max(20, "Phone must not exceed 20 characters")
    .optional()
    .transform((val) => (val ? sanitizeInput(val) : "")),
  service: z
    .string()
    .max(200, "Service must not exceed 200 characters")
    .optional()
    .transform((val) => (val ? sanitizeInput(val) : "")),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(5000, "Message must not exceed 5000 characters")
    .transform(sanitizeInput),
})

export const subscribeFormSchema = z.object({
  email: emailSchema,
})

export type ContactFormInput = z.infer<typeof contactFormSchema>
export type SubscribeFormInput = z.infer<typeof subscribeFormSchema>
