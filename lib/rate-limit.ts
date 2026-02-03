import { NextRequest, NextResponse } from "next/server"

// Simple in-memory rate limiting (for production, use Redis or similar)
const requestMap = new Map<string, number[]>()

export function rateLimit(
  request: NextRequest,
  options: {
    interval: number // milliseconds
    maxRequests: number
  }
): { success: boolean; remaining: number } {
  const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown"
  const now = Date.now()
  const windowStart = now - options.interval

  let requests = requestMap.get(ip) || []
  requests = requests.filter((timestamp) => timestamp > windowStart)

  if (requests.length >= options.maxRequests) {
    return { success: false, remaining: 0 }
  }

  requests.push(now)
  requestMap.set(ip, requests)

  // Cleanup old entries periodically
  if (Math.random() < 0.01) {
    for (const [key, timestamps] of requestMap.entries()) {
      const validTimestamps = timestamps.filter((timestamp) => timestamp > windowStart)
      if (validTimestamps.length === 0) {
        requestMap.delete(key)
      } else {
        requestMap.set(key, validTimestamps)
      }
    }
  }

  return { success: true, remaining: options.maxRequests - requests.length }
}
