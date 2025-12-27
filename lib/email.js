// lib/email.js
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendVerificationEmail(email, name, token) {
  const verificationLink = `${process.env.NEXT_PUBLIC_APP_URL}/verify/${token}`
  
  try {
    const { data, error } = await resend.emails.send({
      from: 'Eben Institute <noreply@ebeninstitute.org>',
      to: [email],
      subject: 'Verify Your Waitlist Subscription - Eben Institute',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Welcome to Eben Institute!</h2>
          <p>Hello ${name || 'there'},</p>
          <p>Thank you for joining our waitlist. We're excited to have you on board!</p>
          <p>Please verify your email address by clicking the button below:</p>
          <div style="text-align: center; margin: 30px 0;">
            <a href="${verificationLink}" style="background-color: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold;">
              Verify Email Address
            </a>
          </div>
          <p>This verification link will expire in 24 hours.</p>
          <p>If you didn't request to join our waitlist, please ignore this email.</p>
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
          <p style="color: #6b7280; font-size: 14px;">
            Best regards,<br>
            The Eben Institute Team
          </p>
        </div>
      `
    })
    
    if (error) {
      console.error('Resend error:', error)
      return { success: false, error }
    }
    
    return { success: true, data }
  } catch (error) {
    console.error('Email send error:', error)
    return { success: false, error }
  }
}

export async function sendWelcomeEmail(email, name) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Eben Institute <welcome@ebeninstitute.org>',
      to: [email],
      subject: 'Welcome to Eben Institute Waitlist!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #10b981;">Welcome to the Eben Institute Community! 🎉</h2>
          <p>Hello ${name || 'Valued Member'},</p>
          <p>Your email has been verified successfully. You're now officially part of our waitlist!</p>
          
          <h3 style="color: #374151; margin-top: 30px;">What's Next?</h3>
          <ul style="color: #4b5563;">
            <li>You'll receive priority notifications about our programs</li>
            <li>Get exclusive access to our resources</li>
            <li>Be the first to know about upcoming events</li>
            <li>Join our community discussions</li>
          </ul>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 25px 0;">
            <h4 style="color: #374151; margin-top: 0;">Join Our Community Channels:</h4>
            <p>
              <a href="https://t.me/ebeninstitute" style="color: #2563eb;">🔗 Telegram Community</a><br>
              <a href="https://whatsapp.com/channel/ebeninstitute" style="color: #2563eb;">🔗 WhatsApp Channel</a>
            </p>
          </div>
          
          <p>Thank you for believing in our mission!</p>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
          <p style="color: #6b7280; font-size: 14px;">
            Best regards,<br>
            <strong>The Eben Institute Team</strong><br>
            <a href="https://ebeninstitute.org" style="color: #2563eb;">ebeninstitute.org</a>
          </p>
        </div>
      `
    })
    
    if (error) {
      console.error('Resend error:', error)
      return { success: false, error }
    }
    
    return { success: true, data }
  } catch (error) {
    console.error('Welcome email error:', error)
    return { success: false, error }
  }
}