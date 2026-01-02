// lib/database.js
import { supabase, supabaseAdmin } from './supabase'

// Waitlist functions
export const waitlistDb = {
  // Add to waitlist
  async subscribe(email, name = null) {
    // Generate a simple verification token
    const verificationToken = Math.random().toString(36).substring(2) + 
                             Date.now().toString(36)
    const tokenExpires = new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 hours
    
    const { data, error } = await supabase
      .from('waitlist')
      .insert({
        email: email.toLowerCase().trim(),
        name,
        verification_token: verificationToken,
        token_expires: tokenExpires.toISOString()
      })
      .select()
      .single()
    
    if (error) {
      if (error.code === '23505') { // Unique violation
        throw new Error('EMAIL_EXISTS')
      }
      throw error
    }
    
    return { ...data, verificationToken }
  },
  
  // Verify email
  async verifyToken(token) {
    const { data, error } = await supabase
      .from('waitlist')
      .update({
        is_verified: true,
        verified_at: new Date().toISOString(),
        verification_token: null,
        token_expires: null
      })
      .eq('verification_token', token)
      .gt('token_expires', new Date().toISOString()) // Check if not expired
      .select()
      .single()
    
    if (error || !data) {
      throw new Error('INVALID_TOKEN')
    }
    
    return data
  },
  
  // Check if email exists
  async checkEmailExists(email) {
    const { data, error } = await supabase
      .from('waitlist')
      .select('email, is_verified')
      .eq('email', email.toLowerCase().trim())
      .maybeSingle() // Returns null instead of throwing error
    
    return data
  },
  
  // Update verification token
  async updateVerificationToken(email, token) {
    const tokenExpires = new Date(Date.now() + 24 * 60 * 60 * 1000)
    
    const { data, error } = await supabase
      .from('waitlist')
      .update({
        verification_token: token,
        token_expires: tokenExpires.toISOString()
      })
      .eq('email', email.toLowerCase().trim())
      .select()
      .single()
    
    if (error) {
      throw error
    }
    
    return data
  },
  
  // Get waitlist count (public)
  async getCount() {
    const { count, error } = await supabase
      .from('waitlist')
      .select('*', { count: 'exact', head: true })
      .eq('is_verified', true)
    
    if (error) {
      console.error('Error getting count:', error)
      return 0
    }
    
    return count
  },
  
  // ADMIN: Get all subscribers
  async getAllSubscribers(page = 1, limit = 20, filters = {}) {
    const start = (page - 1) * limit
    
    let query = supabaseAdmin()
      .from('waitlist')
      .select('*', { count: 'exact' })
    
    // Apply filters
    if (filters.verified !== undefined) {
      query = query.eq('is_verified', filters.verified)
    }
    
    if (filters.search) {
      query = query.or(`email.ilike.%${filters.search}%,name.ilike.%${filters.search}%`)
    }
    
    // Add pagination and ordering
    const { data, count, error } = await query
      .order('subscribed_at', { ascending: false })
      .range(start, start + limit - 1)
    
    if (error) {
      throw error
    }
    
    return {
      subscribers: data || [],
      total: count || 0,
      page,
      limit,
      totalPages: Math.ceil((count || 0) / limit)
    }
  },
  
  // ADMIN: Delete subscriber
  async deleteSubscriber(id) {
    const { error } = await supabaseAdmin()
      .from('waitlist')
      .delete()
      .eq('id', id)
    
    if (error) {
      throw error
    }
    
    return true
  },
  
  // ADMIN: Get statistics
  async getStats() {
    try {
      // Get total count
      const { count: total } = await supabaseAdmin()
        .from('waitlist')
        .select('*', { count: 'exact', head: true })
      
      // Get verified count
      const { count: verified } = await supabaseAdmin()
        .from('waitlist')
        .select('*', { count: 'exact', head: true })
        .eq('is_verified', true)
      
      // Get first subscription
      const { data: firstSub } = await supabaseAdmin()
        .from('waitlist')
        .select('subscribed_at')
        .order('subscribed_at', { ascending: true })
        .limit(1)
        .single()
        .catch(() => ({ data: null }))
      
      // Get latest subscription
      const { data: latestSub } = await supabaseAdmin()
        .from('waitlist')
        .select('subscribed_at')
        .order('subscribed_at', { ascending: false })
        .limit(1)
        .single()
        .catch(() => ({ data: null }))
      
      return {
        total: total || 0,
        verified: verified || 0,
        firstSubscription: firstSub?.subscribed_at,
        latestSubscription: latestSub?.subscribed_at
      }
    } catch (error) {
      console.error('Error getting stats:', error)
      return {
        total: 0,
        verified: 0,
        firstSubscription: null,
        latestSubscription: null
      }
    }
  }
}

// Contact form functions
export const contactDb = {
  async submitMessage({ name, email, subject, message }) {
    const { data, error } = await supabase
      .from('contact_messages')
      .insert({
        name: name.trim(),
        email: email.toLowerCase().trim(),
        subject: subject.trim(),
        message: message.trim()
      })
      .select()
      .single()
    
    if (error) {
      throw error
    }
    
    return data
  }
}