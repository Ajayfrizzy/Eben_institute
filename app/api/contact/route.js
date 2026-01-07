// app/api/contact/route.js
import { Resend } from 'resend'

export async function POST(request) {
  try {
    // Check for API key
    if (!process.env.RESEND_API_KEY) {
      console.error('Missing RESEND_API_KEY environment variable')
      return Response.json(
        { error: 'Email service not configured. Please contact the administrator.' },
        { status: 500 }
      )
    }

    const resend = new Resend(process.env.RESEND_API_KEY)
    
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return Response.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return Response.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      )
    }

    // Send email to the organization
    // Note: Using RESEND test domain only allows sending to your Resend account email
    // Change this to your actual email when domain is verified
    const recipientEmail = process.env.CONTACT_EMAIL || 'delivered@resend.dev'
    
    const { data, error } = await resend.emails.send({
      from: 'Eben Institute Contact <onboarding@resend.dev>',
      to: [recipientEmail],
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #5fa336;">New Contact Form Submission</h2>
          
          <div style="background-color: #f4fce9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>From:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px;">
            <h3 style="color: #374151; margin-top: 0;">Message:</h3>
            <p style="white-space: pre-wrap; color: #4b5563;">${message}</p>
          </div>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
          <p style="color: #6b7280; font-size: 12px;">
            This message was sent from the Eben Institute contact form.
          </p>
        </div>
      `
    })

    if (error) {
      console.error('Resend error:', error)
      return Response.json(
        { error: 'Failed to send message. Please try again.' },
        { status: 500 }
      )
    }

    // Send confirmation email to the sender
    await resend.emails.send({
      from: 'Eben Institute <onboarding@resend.dev>',
      to: [email],
      subject: 'We received your message - Eben Institute',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #5fa336;">Thank You for Reaching Out!</h2>
          
          <p>Hello ${name},</p>
          
          <p>We have received your message and will get back to you within 24-48 hours during business days.</p>
          
          <div style="background-color: #f4fce9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Your message:</strong></p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p style="white-space: pre-wrap; color: #4b5563;">${message}</p>
          </div>
          
          <p>For partnership inquiries, please allow 3-5 business days for a response.</p>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
          <p style="color: #6b7280; font-size: 14px;">
            Best regards,<br>
            <strong>The Eben Institute Team</strong><br>
            <a href="https://ebeninstitute.org" style="color: #5fa336;">ebeninstitute.org</a>
          </p>
        </div>
      `
    })

    return Response.json({
      success: true,
      message: 'Message sent successfully! We\'ll get back to you soon.'
    })

  } catch (error) {
    console.error('Contact form error:', error)
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
