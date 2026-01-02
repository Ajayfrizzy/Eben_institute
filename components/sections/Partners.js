// components/sections/Partners.js
'use client'

import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4
    }
  }
}

export default function Partners() {
  const partners = [
    { name: 'UNESCO', logo: '🏛️' },
    { name: 'Local Community Org', logo: '🤝' },
    { name: 'Tech for Good', logo: '💻' },
    { name: 'Education First', logo: '📚' },
    { name: 'Sustainable Dev Corp', logo: '🌱' },
  ]
  
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Partner With Us
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Join hands with us to create greater impact. Together, we can achieve more.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                className="bg-[#f4fce9] rounded-xl p-6 flex flex-col items-center justify-center hover:bg-[#e5f8c9] transition-colors duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-3xl mb-3">{partner.logo}</div>
                <div className="text-center font-medium text-gray-700">
                  {partner.name}
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <motion.a
                href="mailto:partnerships@ebeninstitute.org"
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Become a Partner
              </motion.a>
              <motion.a
                href="#"
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Support Our Mission
              </motion.a>
            </div>
            <p className="mt-4 text-gray-500 text-sm">
              Corporate partnerships • NGO collaborations • Community sponsorships
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}