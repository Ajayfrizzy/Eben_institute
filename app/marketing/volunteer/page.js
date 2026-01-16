// app/marketing/volunteer/page.js
'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'react-hot-toast'
import { motion } from 'framer-motion'
import { Users, Heart, Loader2, Upload, CheckCircle2 } from 'lucide-react'
import LayoutWrapper from '@/components/layout/LayoutWrapper'

const volunteerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  team: z.string().min(1, 'Please select a team'),
  purposeStatement: z.string().min(50, 'Purpose statement must be at least 50 characters')
})

const teams = [
  { value: 'operations', label: 'Operations Team' },
  { value: 'content', label: 'Content/Publication/Research Team' },
  { value: 'social', label: 'Social Management Team' },
  { value: 'creative', label: 'Creative Team' },
  { value: 'legal', label: 'Legal Compliance Team' },
  { value: 'accounting', label: 'Accounting Team' }
]

export default function VolunteerPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [resumeFile, setResumeFile] = useState(null)
  const [resumeError, setResumeError] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: zodResolver(volunteerSchema)
  })

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    setResumeError('')
    
    if (file) {
      // Check file type (PDF, DOC, DOCX)
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
      if (!allowedTypes.includes(file.type)) {
        setResumeError('Please upload a PDF or Word document')
        setResumeFile(null)
        return
      }
      
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setResumeError('File size must be less than 5MB')
        setResumeFile(null)
        return
      }
      
      setResumeFile(file)
    }
  }

  const onSubmit = async (data) => {
    if (!resumeFile) {
      setResumeError('Please upload your resume/CV')
      return
    }

    setIsSubmitting(true)

    try {
      // Create FormData for file upload
      const formData = new FormData()
      formData.append('name', data.name)
      formData.append('email', data.email)
      formData.append('team', data.team)
      formData.append('purposeStatement', data.purposeStatement)
      formData.append('resume', resumeFile)

      const response = await fetch('/api/volunteer', {
        method: 'POST',
        body: formData
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Something went wrong')
      }

      toast.success(result.message || 'Application submitted successfully!')
      setIsSubmitted(true)
      reset()
      setResumeFile(null)
    } catch (error) {
      toast.error(error.message || 'Failed to submit application. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <LayoutWrapper>
        <section className="min-h-[70vh] flex items-center justify-center bg-linear-to-br from-[#f4fce9] to-[#e5f8c9] py-20">
          <motion.div
            className="text-center max-w-lg mx-auto px-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-20 h-20 bg-[#94de61] rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Submitted!</h2>
            <p className="text-gray-600 mb-8">
              Thank you for your interest in volunteering with Eben Institute. We&apos;ve received your application and will review it shortly. You&apos;ll hear from us soon!
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="bg-linear-to-r from-[#94de61] to-[#5fa336] text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Submit Another Application
            </button>
          </motion.div>
        </section>
      </LayoutWrapper>
    )
  }

  return (
    <LayoutWrapper>
      {/* Hero */}
      <section className="bg-linear-to-r from-[#5fa336] to-[#487d2c] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Become a Volunteer</h1>
            <p className="text-xl max-w-3xl mx-auto text-white/90">
              Join our team of passionate individuals making a difference in Africa. Your skills and dedication can help transform lives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Volunteer */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="grid md:grid-cols-2 gap-8 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-[#f4fce9] rounded-2xl p-8">
                <div className="w-14 h-14 bg-[#94de61]/30 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-7 h-7 text-[#5fa336]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Join Our Community</h3>
                <p className="text-gray-600">
                  Connect with like-minded individuals who share your passion for creating positive change in Africa.
                </p>
              </div>
              <div className="bg-[#f4fce9] rounded-2xl p-8">
                <div className="w-14 h-14 bg-[#94de61]/30 rounded-xl flex items-center justify-center mb-4">
                  <Heart className="w-7 h-7 text-[#5fa336]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Make an Impact</h3>
                <p className="text-gray-600">
                  Your contribution, no matter how small, helps us achieve our mission of raising the next generation of African leaders.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-linear-to-br from-[#f4fce9] to-[#e5f8c9]">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Volunteer Application</h2>
              <p className="text-gray-600">Fill out the form below to apply</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Team Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Team *
                </label>
                <select
                  {...register('team')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#94de61] focus:border-transparent transition bg-white"
                >
                  <option value="">Choose a team...</option>
                  {teams.map((team) => (
                    <option key={team.value} value={team.value}>
                      {team.label}
                    </option>
                  ))}
                </select>
                {errors.team && (
                  <p className="mt-1 text-sm text-red-600">{errors.team.message}</p>
                )}
              </div>

              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  {...register('name')}
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#94de61] focus:border-transparent transition"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
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

              {/* Resume/CV Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Resume/CV *
                </label>
                <div className="relative">
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                    id="resume-upload"
                  />
                  <label
                    htmlFor="resume-upload"
                    className="flex items-center justify-center w-full px-4 py-4 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-[#94de61] transition-colors"
                  >
                    {resumeFile ? (
                      <div className="flex items-center text-[#5fa336]">
                        <CheckCircle2 className="w-5 h-5 mr-2" />
                        <span className="font-medium">{resumeFile.name}</span>
                      </div>
                    ) : (
                      <div className="flex items-center text-gray-500">
                        <Upload className="w-5 h-5 mr-2" />
                        <span>Upload PDF or Word document (max 5MB)</span>
                      </div>
                    )}
                  </label>
                </div>
                {resumeError && (
                  <p className="mt-1 text-sm text-red-600">{resumeError}</p>
                )}
              </div>

              {/* Purpose Statement */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Purpose Statement *
                </label>
                <textarea
                  {...register('purposeStatement')}
                  rows={5}
                  placeholder="Tell us why you want to volunteer with Eben Institute and what you hope to contribute..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#94de61] focus:border-transparent transition resize-none"
                />
                {errors.purposeStatement && (
                  <p className="mt-1 text-sm text-red-600">{errors.purposeStatement.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-linear-to-r from-[#94de61] to-[#5fa336] text-white py-4 rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Submit Application'
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </LayoutWrapper>
  )
}
