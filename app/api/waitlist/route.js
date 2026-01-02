// app/api/waitlist/route.js
import { waitlistDb } from '@/lib/database'
import { sendVerificationEmail } from '@/lib/email'
import { z } from 'zod'

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
    const existing = await waitlistDb.checkEmailExists(email)
    
    if (existing) {
      if (existing.is_verified) {
        return Response.json(
          { error: 'Email is already subscribed and verified' },
          { status: 400 }
        )
      }
      
      // If not verified, update and resend verification
      const verificationToken = Math.random().toString(36).substring(2) + Date.now().toString(36)
      await waitlistDb.updateVerificationToken(email, verificationToken)
      
      await sendVerificationEmail(email, name, verificationToken)
      
      return Response.json({
        message: 'Verification email resent. Please check your inbox.',
        requiresVerification: true
      })
    }
    
    // Create new waitlist entry
    const { verificationToken } = await waitlistDb.subscribe(email, name)
    
    // Send verification email
    await sendVerificationEmail(email, name, verificationToken)
    
    return Response.json({
      message: 'Please check your email to verify your subscription.',
      requiresVerification: true
    })
    
  } catch (error) {
    console.error('Waitlist subscription error:', error)
    
    if (error.message === 'EMAIL_EXISTS') {
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
    const count = await waitlistDb.getCount()
    return Response.json({ count })
  } catch (error) {
    console.error('Error getting waitlist count:', error)
    return Response.json({ count: 0 })
  }
}