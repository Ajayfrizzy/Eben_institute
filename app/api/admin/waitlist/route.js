// app/api/admin/waitlist/route.js
import { waitlistDb } from '@/lib/database'

// Simple admin check
function isAdmin(request) {
  const authHeader = request.headers.get('authorization')
  const adminToken = process.env.ADMIN_TOKEN || 'temp-admin-token-12345'
  
  return authHeader === `Bearer ${adminToken}`
}

// GET all waitlist subscribers
export async function GET(request) {
  try {
    if (!isAdmin(request)) {
      return Response.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }
    
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '20')
    const verified = searchParams.get('verified')
    const search = searchParams.get('search')
    
    const filters = {}
    if (verified !== null) filters.verified = verified === 'true'
    if (search) filters.search = search
    
    const result = await waitlistDb.getAllSubscribers(page, limit, filters)
    const stats = await waitlistDb.getStats()
    
    return Response.json({
      subscribers: result.subscribers,
      pagination: {
        page: result.page,
        limit: result.limit,
        total: result.total,
        totalPages: result.totalPages
      },
      stats
    })
    
  } catch (error) {
    console.error('Admin waitlist error:', error)
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// DELETE subscriber
export async function DELETE(request) {
  try {
    if (!isAdmin(request)) {
      return Response.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }
    
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    
    if (!id) {
      return Response.json(
        { error: 'ID is required' },
        { status: 400 }
      )
    }
    
    await waitlistDb.deleteSubscriber(id)
    
    return Response.json({
      success: true,
      message: 'Subscriber deleted successfully'
    })
    
  } catch (error) {
    console.error('Delete subscriber error:', error)
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}