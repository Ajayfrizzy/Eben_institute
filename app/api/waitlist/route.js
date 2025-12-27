// app/api/waitlist/route.js
import { prisma } from '@/lib/db'
import { sendVerificationEmail } from '@/lib/email'
import { z } from 'zod'
import crypto from 'crypto'

const waitlistSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  name: z.string().min(2, 'Name must be at least 2 characters').optional()
})

export async function POST(request) {
  try {
    const body = await request.json()
    
    // Validate input
    const validationResult = waitlistSchema.safeParse(body)
    if (!validationResult.success) {
      return Response.json(
        { error: validationResult.error.errors[0].message },
        { status: 400 }
      )
    }
    
    const { email, name } = validationResult.data
    
    // Check if email already exists
    const existing = await prisma.waitlist.findUnique({
      where: { email }
    })
    
    if (existing) {
      if (existing.isVerified) {
        return Response.json(
          { error: 'Email is already subscribed and verified' },
          { status: 400 }
        )
      }
      
      // If not verified, update and resend verification
      const verificationToken = crypto.randomBytes(32).toString('hex')
      const tokenExpires = new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 hours
      
      await prisma.waitlist.update({
        where: { email },
        data: {
          verificationToken,
          tokenExpires
        }
      })
      
      await sendVerificationEmail(email, name, verificationToken)
      
      return Response.json({
        message: 'Verification email resent. Please check your inbox.',
        requiresVerification: true
      })
    }
    
    // Create new waitlist entry
    const verificationToken = crypto.randomBytes(32).toString('hex')
    const tokenExpires = new Date(Date.now() + 24 * 60 * 60 * 1000)
    
    await prisma.waitlist.create({
      data: {
        email,
        name,
        verificationToken,
        tokenExpires
      }
    })
    
    // Send verification email
    await sendVerificationEmail(email, name, verificationToken)
    
    return Response.json({
      message: 'Please check your email to verify your subscription.',
      requiresVerification: true
    })
    
  } catch (error) {
    console.error('Waitlist subscription error:', error)
    
    if (error.code === 'P2002') {
      return Response.json(
        { error: 'Email is already subscribed' },
        { status: 400 }
      )
    }
    
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Get waitlist count (public)
export async function GET() {
  try {
    const count = await prisma.waitlist.count({
      where: { isVerified: true }
    })
    
    return Response.json({ count })
  } catch (error) {
    console.error('Error getting waitlist count:', error)
    return Response.json({ count: 0 })
  }
}