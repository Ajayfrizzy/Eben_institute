// components/sections/VisionSection.js
'use client'

import { Target, Globe, Users } from 'lucide-react'
import { motion } from 'framer-motion'

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

export default function VisionSection() {
  return (
    <section className="py-16 bg-linear-to-br from-[#5fa336] to-[#487d2c] text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Vision for the Future
          </h2>
          <p className="text-xl text-[#cdf19a]">
            To raise daring students who can rise to solve real-world problems in Africa
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">Global Reach</h3>
            <p className="text-[#cdf19a]">
              Expand our impact to reach 100+ communities across 20+ countries by 2030, 
              creating a global network of empowered individuals.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">Sustainable Systems</h3>
            <p className="text-[#cdf19a]">
              Develop self-sustaining community models that continue to grow and 
              thrive long after our direct involvement ends.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">Community Leadership</h3>
            <p className="text-[#cdf19a]">
              Empower 10,000+ community leaders with the skills and resources 
              needed to drive change within their own communities.
            </p>
          </motion.div>
        </motion.div>

        <motion.div 
          className="mt-12 pt-12 border-t border-white/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-6">Our 5-Year Goals</h3>
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div 
                className="text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-3xl font-bold mb-2">50K+</div>
                <div className="text-sm text-[#cdf19a]">Lives Impacted</div>
              </motion.div>
              <motion.div 
                className="text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-sm text-[#cdf19a]">Community Projects</div>
              </motion.div>
              <motion.div 
                className="text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-3xl font-bold mb-2">100+</div>
                <div className="text-sm text-[#cdf19a]">Strategic Partners</div>
              </motion.div>
              <motion.div 
                className="text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-3xl font-bold mb-2">$10M+</div>
                <div className="text-sm text-[#cdf19a]">Community Investment</div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}