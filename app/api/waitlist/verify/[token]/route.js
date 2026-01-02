import { waitlistDb } from '@/lib/database'
import { sendWelcomeEmail } from '@/lib/email'

export async function GET(request, { params }) {
  try {
    const { token } = await params
    
    // Verify token and update status
    const subscriber = await waitlistDb.verifyToken(token)
    
    // Send welcome email
    await sendWelcomeEmail(subscriber.email, subscriber.name)
    
    return Response.json({
      success: true,
      message: 'Email verified successfully! Welcome to Eben Institute.'
    })
    
  } catch (error) {
    console.error('Verification error:', error)
    
    if (error.message === 'INVALID_TOKEN') {
      return Response.json(
        { error: 'Invalid or expired verification token' },
        { status: 400 }
      )
    }
    
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}