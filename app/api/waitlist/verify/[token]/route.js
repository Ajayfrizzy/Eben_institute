// app/api/waitlist/verify/[token]/route.js
import { prisma } from '@/lib/db'
import { sendWelcomeEmail } from '@/lib/email'

export async function GET(request, { params }) {
  try {
    const { token } = await params
    
    // Find waitlist entry
    const waitlistEntry = await prisma.waitlist.findUnique({
      where: { verificationToken: token }
    })
    
    if (!waitlistEntry) {
      return Response.json(
        { error: 'Invalid or expired verification token' },
        { status: 400 }
      )
    }
    
    // Check if token is expired
    if (new Date() > waitlistEntry.tokenExpires) {
      return Response.json(
        { error: 'Verification token has expired' },
        { status: 400 }
      )
    }
    
    // Check if already verified
    if (waitlistEntry.isVerified) {
      return Response.json(
        { error: 'Email is already verified' },
        { status: 400 }
      )
    }
    
    // Update verification status
    await prisma.waitlist.update({
      where: { verificationToken: token },
      data: {
        isVerified: true,
        verifiedAt: new Date(),
        verificationToken: null,
        tokenExpires: null
      }
    })
    
    // Send welcome email
    await sendWelcomeEmail(waitlistEntry.email, waitlistEntry.name)
    
    return Response.json({
      success: true,
      message: 'Email verified successfully! Welcome to Eben Institute.'
    })
    
  } catch (error) {
    console.error('Verification error:', error)
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}