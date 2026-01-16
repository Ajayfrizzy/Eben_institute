// components/sections/MissionSection.js
'use client'

import { motion } from 'framer-motion'
import { Lightbulb, Users, Globe } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
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
  const missionPillars = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Advocate Transformation',
      description: 'Advocate for a renewed mind for a transformed society.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Build Community',
      description: 'Connect students to work together to solve real world problems and create opportunities.'
    },
    {
      icon: <Globe className="w-6 h-6" />,
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
        
        {/* Vision Section - Displayed First */}
        <motion.div 
          className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-[#94de61]/20 mb-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="shrink-0">
              <div className="w-16 h-16 bg-[#94de61]/20 rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-[#5fa336]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Vision</h3>
              <p className="text-gray-600 text-lg">
                To raise daring students who can rise to solve real-world problems in Africa.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Mission Section - With Three Pillars Inside */}
        <motion.div 
          className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-[#94de61]/20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
            <div className="shrink-0">
              <div className="w-16 h-16 bg-[#94de61]/20 rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-[#5fa336]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-600 text-lg">
                We are committed to empowering the next generation of African leaders through:
              </p>
            </div>
          </div>

          {/* Mission Pillars - Inside Mission Card */}
          <motion.div 
            className="grid md:grid-cols-3 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {missionPillars.map((pillar, index) => (
              <motion.div
                key={index}
                className="bg-[#f4fce9] rounded-xl p-5 hover:bg-[#e5f8c9] transition-colors"
                variants={itemVariants}
                whileHover={{ y: -3 }}
              >
                <div className="w-10 h-10 bg-[#94de61] rounded-lg flex items-center justify-center mb-3 text-white">
                  {pillar.icon}
                </div>
                <h4 className="text-base font-bold text-gray-900 mb-2">{pillar.title}</h4>
                <p className="text-gray-600 text-sm">{pillar.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}