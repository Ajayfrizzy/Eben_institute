// components/sections/ContactSection.js
'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'react-hot-toast'
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react'
import { motion } from 'framer-motion'
import Input from '@/components/ui/Input'
import TextArea from '@/components/ui/TextArea'
import Button from '@/components/ui/Button'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters')
})

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: zodResolver(contactSchema)
  })

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    
    try {
      // Here you would integrate with your contact form API
      // For now, simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      toast.success('Message sent successfully! We\'ll get back to you soon.')
      reset()
    } catch (error) {
      toast.error('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            Have questions or want to collaborate? We&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-8">
              <motion.div 
                className="flex items-start space-x-4"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-12 h-12 bg-[#94de61]/20 rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-[#5fa336]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                  <p className="text-gray-700">hello@ebeninstitute.org</p>
                  {/* <p className="text-gray-700">info@ebeninstitute.org</p> */}
                </div>
              </motion.div>

              {/* Phone number section commented out */}
              {/* <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#94de61]/20 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-[#5fa336]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Call Us</h3>
                  <p className="text-gray-700">+1 (234) 567-8900</p>
                  <p className="text-gray-700">Mon-Fri, 9AM-5PM EST</p>
                </div>
              </div> */}

              {/* <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#94de61]/20 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-[#5fa336]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Visit Us</h3>
                  <p className="text-gray-700">123 Impact Street</p>
                  <p className="text-gray-700">Community City, CC 10001</p>
                </div>
              </div> */}

              <motion.div 
                className="bg-linear-to-br from-[#f4fce9] to-[#e5f8c9] rounded-2xl p-6"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h4 className="font-bold text-gray-900 mb-3">Response Time</h4>
                <p className="text-gray-700 mb-2">
                  We typically respond within 24-48 hours during business days.
                </p>
                <p className="text-sm text-gray-600">
                  For partnership inquiries, please allow 3-5 days.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl border border-[#94de61]/30 p-8 shadow-sm">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    label="Your Name *"
                    type="text"
                    placeholder="John Doe"
                    {...register('name')}
                    error={errors.name?.message}
                    required
                  />
                  
                  <Input
                    label="Email Address *"
                    type="email"
                    placeholder="john@example.com"
                    {...register('email')}
                    error={errors.email?.message}
                    required
                  />
                </div>

                <Input
                  label="Subject *"
                  type="text"
                  placeholder="How can we help?"
                  {...register('subject')}
                  error={errors.subject?.message}
                  required
                />

                <TextArea
                  label="Message *"
                  placeholder="Tell us about your inquiry or collaboration idea..."
                  rows={6}
                  {...register('message')}
                  error={errors.message?.message}
                  required
                />

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full md:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
