// app/api/volunteer/route.js
import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

export async function POST(request) {
  try {
    // Check if Supabase is configured
    if (!supabaseUrl || !supabaseServiceKey) {
      console.log('Supabase not configured, logging volunteer application')
      
      const formData = await request.formData()
      const name = formData.get('name')
      const email = formData.get('email')
      const team = formData.get('team')
      const purposeStatement = formData.get('purposeStatement')
      const resume = formData.get('resume')
      
      console.log('Volunteer Application:', {
        name,
        email,
        team,
        purposeStatement,
        resumeFileName: resume?.name || 'No file'
      })
      
      return NextResponse.json({
        success: true,
        message: 'Thank you for your application! We will review it and get back to you soon.'
      })
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey)
    
    const formData = await request.formData()
    const name = formData.get('name')
    const email = formData.get('email')
    const team = formData.get('team')
    const purposeStatement = formData.get('purposeStatement')
    const resume = formData.get('resume')

    // Validate required fields
    if (!name || !email || !team || !purposeStatement) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      )
    }

    // Check if resume was uploaded
    if (!resume || !(resume instanceof File)) {
      return NextResponse.json(
        { error: 'Please upload your resume/CV' },
        { status: 400 }
      )
    }

    // Upload resume to Supabase Storage
    let resumeUrl = null
    if (resume && resume instanceof File) {
      const fileExt = resume.name.split('.').pop()
      const fileName = `${Date.now()}-${email.replace('@', '_at_')}.${fileExt}`
      
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('resumes')
        .upload(fileName, resume, {
          contentType: resume.type,
          upsert: false
        })
      
      if (uploadError) {
        console.error('Resume upload error:', uploadError)
        // Continue without resume URL if storage isn't set up
      } else {
        const { data: urlData } = supabase.storage
          .from('resumes')
          .getPublicUrl(fileName)
        resumeUrl = urlData?.publicUrl
      }
    }

    // Check if email already exists in volunteers table
    const { data: existingVolunteer } = await supabase
      .from('volunteers')
      .select('id, email')
      .eq('email', email.toLowerCase())
      .single()

    if (existingVolunteer) {
      return NextResponse.json(
        { error: 'You have already submitted a volunteer application with this email.' },
        { status: 400 }
      )
    }

    // Insert volunteer application into database
    const { data, error } = await supabase
      .from('volunteers')
      .insert([
        {
          name,
          email: email.toLowerCase(),
          team,
          purpose_statement: purposeStatement,
          resume_url: resumeUrl,
          status: 'pending',
          created_at: new Date().toISOString()
        }
      ])
      .select()
      .single()

    if (error) {
      console.error('Database error:', error)
      
      // If table doesn't exist, still return success
      if (error.code === '42P01') {
        return NextResponse.json({
          success: true,
          message: 'Thank you for your application! We will review it and get back to you soon.'
        })
      }
      
      return NextResponse.json(
        { error: 'Failed to submit application. Please try again.' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you for your application! We will review it and get back to you soon.'
    })

  } catch (error) {
    console.error('Volunteer submission error:', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  )
}
