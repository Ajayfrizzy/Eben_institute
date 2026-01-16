// components/sections/Hero.js
'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
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

const statVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5
    }
  }
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-[#f4fce9] to-[#cdf19a] pt-24 pb-20 md:pt-32 md:pb-28">
      <div className="absolute inset-0 bg-grid-slate-100 mask-[linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
      
      <div className="container-custom relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            variants={itemVariants}
          >
            Transforming Africa, Raising The Next Generation of&nbsp;
            <span className="block gradient-text">Problem Solvers</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Join Eben Institute in our mission to create lasting positive change through 
            education, skill development, and Community Empowerment initiatives.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/marketing/membership"
                className="btn-primary text-lg px-8 py-4 inline-block"
              >
                Join Our Waitlist
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/marketing/about"
                className="btn-secondary text-lg px-8 py-4 inline-block"
              >
                Learn About Us
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={statVariants} whileHover={{ y: -5 }}>
              <div className="text-3xl font-bold text-[#5fa336]">500+</div>
              <div className="text-gray-700">Community Members</div>
            </motion.div>
            <motion.div variants={statVariants} whileHover={{ y: -5 }}>
              <div className="text-3xl font-bold text-[#5fa336]">50+</div>
              <div className="text-gray-700">Programs Completed</div>
            </motion.div>
            <motion.div variants={statVariants} whileHover={{ y: -5 }}>
              <div className="text-3xl font-bold text-[#5fa336]">10+</div>
              <div className="text-gray-700">Partner Organizations</div>
            </motion.div>
            <motion.div variants={statVariants} whileHover={{ y: -5 }}>
              <div className="text-3xl font-bold text-[#5fa336]">100%</div>
              <div className="text-gray-700">Community Focused</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}