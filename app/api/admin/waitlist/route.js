// app/api/admin/waitlist/route.js
import { prisma } from '@/lib/db'

// Middleware to check for admin authentication
function isAdmin(request) {
  // In production, implement proper authentication
  const authHeader = request.headers.get('authorization')
  
  // Simple check for demo - replace with proper auth in production
  if (!authHeader || authHeader !== `Bearer ${process.env.ADMIN_TOKEN}`) {
    return false
  }
  
  return true
}

// GET all waitlist subscribers (admin only)
export async function GET(request) {
  try {
    // Check admin authentication
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
    
    const skip = (page - 1) * limit
    
    // Build filter conditions
    const where = {}
    
    if (verified !== null) {
      where.isVerified = verified === 'true'
    }
    
    if (search) {
      where.OR = [
        { email: { contains: search, mode: 'insensitive' } },
        { name: { contains: search, mode: 'insensitive' } }
      ]
    }
    
    // Get subscribers with pagination
    const [subscribers, total] = await Promise.all([
      prisma.waitlist.findMany({
        where,
        skip,
        take: limit,
        orderBy: { subscribedAt: 'desc' },
        select: {
          id: true,
          email: true,
          name: true,
          subscribedAt: true,
          isVerified: true,
          verifiedAt: true
        }
      }),
      prisma.waitlist.count({ where })
    ])
    
    // Get statistics
    const stats = await prisma.waitlist.aggregate({
      where: { isVerified: true },
      _count: true,
      _min: { subscribedAt: true },
      _max: { subscribedAt: true }
    })
    
    return Response.json({
      subscribers,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit)
      },
      stats: {
        totalSubscribers: await prisma.waitlist.count(),
        verifiedSubscribers: stats._count,
        firstSubscription: stats._min.subscribedAt,
        latestSubscription: stats._max.subscribedAt
      }
    })
    
  } catch (error) {
    console.error('Admin waitlist error:', error)
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// DELETE a subscriber (admin only)
export async function DELETE(request) {
  try {
    // Check admin authentication
    if (!isAdmin(request)) {
      return Response.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }
    
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    const email = searchParams.get('email')
    
    if (!id && !email) {
      return Response.json(
        { error: 'ID or email is required' },
        { status: 400 }
      )
    }
    
    const where = id ? { id } : { email }
    
    const deleted = await prisma.waitlist.delete({
      where
    })
    
    return Response.json({
      success: true,
      message: 'Subscriber deleted successfully',
      data: deleted
    })
    
  } catch (error) {
    console.error('Delete subscriber error:', error)
    
    if (error.code === 'P2025') {
      return Response.json(
        { error: 'Subscriber not found' },
        { status: 404 }
      )
    }
    
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// POST to resend verification email (admin only)
export async function POST(request) {
  try {
    // Check admin authentication
    if (!isAdmin(request)) {
      return Response.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }
    
    const { email } = await request.json()
    
    if (!email) {
      return Response.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }
    
    const subscriber = await prisma.waitlist.findUnique({
      where: { email }
    })
    
    if (!subscriber) {
      return Response.json(
        { error: 'Subscriber not found' },
        { status: 404 }
      )
    }
    
    // Generate new verification token
    const crypto = await import('crypto')
    const verificationToken = crypto.randomBytes(32).toString('hex')
    const tokenExpires = new Date(Date.now() + 24 * 60 * 60 * 1000)
    
    await prisma.waitlist.update({
      where: { email },
      data: {
        verificationToken,
        tokenExpires
      }
    })
    
    // Import email function
    const { sendVerificationEmail } = await import('@/lib/email')
    await sendVerificationEmail(email, subscriber.name, verificationToken)
    
    return Response.json({
      success: true,
      message: 'Verification email resent successfully'
    })
    
  } catch (error) {
    console.error('Resend verification error:', error)
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}