// components/sections/MissionSection.js
'use client'

import { motion } from 'framer-motion'
import { Lightbulb, Users, Globe } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
}

export default function MissionSection() {
  const missionPoints = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Advocate Transformation',
      description: 'Advocate for a renewed mind for a transformed society.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Build Community',
      description: 'Connect students across disciplines with each other and opportunities.'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Africa Campaign',
      description: 'Preserve African heritage — language, food, dance, artistry.'
    }
  ]

  return (
    <section className="section-padding bg-linear-to-r from-[#f4fce9] to-[#e5f8c9]">
      <div className="container-custom">
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Vision & Mission
          </h2>
          <p className="text-gray-600 text-lg">
            Guided by our core principles to create meaningful impact
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div 
            className="bg-white rounded-2xl p-8 shadow-lg border border-[#94de61]/20"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-16 h-16 bg-[#94de61]/20 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-[#5fa336]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 text-lg">
              To raise daring students who can rise to solve real-world problems in Africa.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-white rounded-2xl p-8 shadow-lg border border-[#94de61]/20"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-16 h-16 bg-[#94de61]/20 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-[#5fa336]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              We are committed to empowering the next generation of African leaders through:
            </p>
          </motion.div>
        </div>

        {/* Mission Points */}
        <motion.div 
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {missionPoints.map((point, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md border border-[#94de61]/20 hover:shadow-lg transition-shadow"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-[#94de61] rounded-xl flex items-center justify-center mb-4 text-white">
                {point.icon}
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">{point.title}</h4>
              <p className="text-gray-600">{point.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}