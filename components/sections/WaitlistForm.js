// components/sections/WaitlistForm.js
'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'react-hot-toast'

const waitlistSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').optional(),
  email: z.string().email('Please enter a valid email address')
})

export default function WaitlistForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: zodResolver(waitlistSchema)
  })

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Something went wrong')
      }

      toast.success(result.message || 'Successfully joined waitlist!')
      reset()
    } catch (error) {
      toast.error(error.message || 'Failed to join waitlist')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-8">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-gray-800 mb-2">Join Our Waitlist</h3>
        <p className="text-gray-600">Be the first to know about our programs and events</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Name (Optional)
          </label>
          <input
            {...register('name')}
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            {...register('email')}
            type="email"
            placeholder="you@example.com"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-linear-to-r from-blue-600 to-blue-700 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </span>
          ) : (
            'Join Waitlist'
          )}
        </button>
      </form>

      <div className="mt-8 pt-8 border-t border-gray-200">
        <h4 className="font-semibold text-gray-800 mb-4">Why Join Our Waitlist?</h4>
        <ul className="space-y-3 text-gray-600">
          <li className="flex items-start">
            <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Priority access to programs and events
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Exclusive resources and content
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Community networking opportunities
          </li>
        </ul>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-200">
        <h4 className="font-semibold text-gray-800 mb-4">Join Our Community</h4>
        <div className="grid grid-cols-2 gap-3">
          <a
            href="https://t.me/ebeninstitute"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 bg-blue-50 text-blue-600 py-3 px-4 rounded-lg hover:bg-blue-100 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.111c-.183 2.042-1.02 7.006-1.44 9.29-.178.944-.53 1.26-1.017 1.292-.764.049-1.344-.504-2.083-.985-1.16-.77-1.816-1.25-2.941-2.002-1.312-.875-.461-1.357.286-2.146.196-.205 4.578-4.197 4.666-4.555.01-.043.02-.202-.077-.285-.095-.084-.235-.055-.337-.033-.143.03-2.416 1.538-6.82 4.515-.645.45-1.23.668-1.874.658-.615-.01-1.8-.348-2.68-.636-1.08-.355-1.94-.542-1.865-1.145.038-.304.455-.615 1.25-.935 4.357-1.93 7.27-3.219 8.745-3.87 4.172-1.893 5.036-2.22 5.603-2.234.131-.002.425.031.616.188.17.14.216.33.238.464.022.134.045.44.023.678z"/>
            </svg>
            <span>Telegram</span>
          </a>
          <a
            href="https://whatsapp.com/channel/ebeninstitute"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 bg-green-50 text-green-600 py-3 px-4 rounded-lg hover:bg-green-100 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.89 16.117c-.264.742-1.462 1.358-2.02 1.439-.541.08-1.225.107-1.913.105-.94-.003-3.47-.395-4.926-1.455-2.54-1.846-2.699-4.136-2.786-4.67-.087-.534-.07-1.006.022-1.324.092-.317.304-.585.592-.788.275-.194.644-.314 1.008-.314.241 0 .456.035.647.102.191.067.543.286.78.417.238.13.39.193.558.193.143 0 .286-.045.427-.137.14-.09.585-.477 1.155-1.156.57-.68.968-1.14 1.127-1.24.16-.1.32-.15.48-.15.12 0 .224.027.317.082.092.054.174.13.246.23.072.1.14.26.204.48.064.22.124.478.18.775.056.297.104.573.144.828.04.255.058.446.058.574 0 .128-.02.254-.06.38-.04.126-.095.225-.166.298-.07.073-.16.11-.27.11-.16 0-.34-.06-.54-.18-.2-.12-.435-.27-.705-.45-.27-.18-.54-.36-.81-.54-.27-.18-.437-.29-.5-.33-.064-.04-.14-.09-.23-.15-.09-.06-.15-.09-.18-.11-.03-.02-.06-.05-.09-.08-.03-.03-.05-.06-.07-.09-.02-.03-.03-.07-.03-.11 0-.04.01-.09.03-.14.02-.05.06-.11.12-.18.06-.07.14-.15.24-.23.1-.08.22-.17.36-.26.14-.09.29-.18.45-.27.16-.09.33-.18.51-.27.18-.09.36-.17.54-.25.18-.08.36-.15.54-.21.18-.06.35-.09.51-.09.32 0 .57.1.75.3.18.2.33.48.45.84.12.36.22.79.3 1.29.08.5.12 1.05.12 1.65 0 .6-.07 1.21-.21 1.83z"/>
            </svg>
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  )
}