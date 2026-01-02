// components/sections/WaitlistForm.js
'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'react-hot-toast'
import { motion } from 'framer-motion'

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
    <motion.div 
      className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
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
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#94de61] focus:border-transparent transition"
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
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#94de61] focus:border-transparent transition"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <motion.button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-linear-to-r from-[#94de61] to-[#5fa336] text-gray-900 py-3 px-4 rounded-lg font-semibold hover:from-[#7bc94a] hover:to-[#487d2c] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin h-5 w-5 mr-3 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </span>
          ) : (
            'Join Waitlist'
          )}
        </motion.button>
      </form>

      <div className="mt-8 pt-8 border-t border-gray-200">
        <h4 className="font-semibold text-gray-800 mb-4">Why Join Our Waitlist?</h4>
        <ul className="space-y-3 text-gray-600">
          <li className="flex items-start">
            <svg className="w-5 h-5 text-[#5fa336] mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Priority access to programs and events
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-[#5fa336] mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Exclusive resources and content
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-[#5fa336] mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Community networking opportunities
          </li>
        </ul>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-200">
        <h4 className="font-semibold text-gray-800 mb-4">Join Our Community</h4>
        <div className="grid grid-cols-2 gap-3">
          <motion.a
            href="https://t.me/Eben_Institute"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 bg-[#f4fce9] text-[#5fa336] py-3 px-4 rounded-lg hover:bg-[#e5f8c9] transition-colors"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.111c-.183 2.042-1.02 7.006-1.44 9.29-.178.944-.53 1.26-1.017 1.292-.764.049-1.344-.504-2.083-.985-1.16-.77-1.816-1.25-2.941-2.002-1.312-.875-.461-1.357.286-2.146.196-.205 4.578-4.197 4.666-4.555.01-.043.02-.202-.077-.285-.095-.084-.235-.055-.337-.033-.143.03-2.416 1.538-6.82 4.515-.645.45-1.23.668-1.874.658-.615-.01-1.8-.348-2.68-.636-1.08-.355-1.94-.542-1.865-1.145.038-.304.455-.615 1.25-.935 4.357-1.93 7.27-3.219 8.745-3.87 4.172-1.893 5.036-2.22 5.603-2.234.131-.002.425.031.616.188.17.14.216.33.238.464.022.134.045.44.023.678z"/>
            </svg>
            <span>Telegram</span>
          </motion.a>
          <motion.a
            href="https://www.instagram.com/eben_institute?igsh=dXRpYjE4dnNjbTV6"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 bg-pink-50 text-pink-600 py-3 px-4 rounded-lg hover:bg-pink-100 transition-colors"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span>Instagram</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}