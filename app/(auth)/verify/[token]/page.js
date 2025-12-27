// app/(auth)/verify/[token]/page.js
'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { CheckCircle, XCircle, Loader2 } from 'lucide-react'

export default function VerifyPage({ params }) {
  const router = useRouter()
  const [status, setStatus] = useState('loading')
  const [message, setMessage] = useState('')
  
  useEffect(() => {
    const verifyToken = async () => {
      try {
        const response = await fetch(`/api/waitlist/verify/${params.token}`)
        const data = await response.json()
        
        if (response.ok) {
          setStatus('success')
          setMessage(data.message)
          // Redirect to home after 5 seconds
          setTimeout(() => {
            router.push('/')
          }, 5000)
        } else {
          setStatus('error')
          setMessage(data.error)
        }
      } catch (error) {
        setStatus('error')
        setMessage('An unexpected error occurred')
      }
    }
    
    verifyToken()
  }, [params.token, router])
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
        {status === 'loading' && (
          <>
            <Loader2 className="w-16 h-16 text-blue-600 animate-spin mx-auto mb-6" />
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Verifying your email...
            </h1>
            <p className="text-gray-600">
              Please wait while we verify your email address.
            </p>
          </>
        )}
        
        {status === 'success' && (
          <>
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Email Verified Successfully!
            </h1>
            <p className="text-gray-600 mb-6">{message}</p>
            <p className="text-sm text-gray-500 mb-6">
              You will be redirected to the homepage in a few seconds...
            </p>
            <Link
              href="/"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Go to Homepage
            </Link>
          </>
        )}
        
        {status === 'error' && (
          <>
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <XCircle className="w-10 h-10 text-red-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Verification Failed
            </h1>
            <p className="text-gray-600 mb-6">{message}</p>
            <div className="space-y-3">
              <Link
                href="/marketing/membership"
                className="block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Try Joining Again
              </Link>
              <Link
                href="/marketing"
                className="block text-blue-600 font-semibold hover:text-blue-700"
              >
                Go to Homepage
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  )
}