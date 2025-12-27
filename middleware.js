// middleware.js - Rate limiting for API routes
import { NextResponse } from 'next/server'

const RATE_LIMIT = {
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
}

const ipRequests = new Map()

export function middleware(request) {
  const ip = request.headers.get('x-forwarded-for') || 'unknown'
  const now = Date.now()
  
  // Clean up old entries
  for (const [key, data] of ipRequests.entries()) {
    if (now - data.timestamp > RATE_LIMIT.windowMs) {
      ipRequests.delete(key)
    }
  }
  
  const ipData = ipRequests.get(ip) || { count: 0, timestamp: now }
  
  if (now - ipData.timestamp > RATE_LIMIT.windowMs) {
    ipData.count = 1
    ipData.timestamp = now
  } else {
    ipData.count++
  }
  
  ipRequests.set(ip, ipData)
  
  if (ipData.count > RATE_LIMIT.max) {
    return new NextResponse('Too Many Requests', { status: 429 })
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: '/api/:path*',
}