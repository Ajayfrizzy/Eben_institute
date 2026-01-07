// components/layout/Footer.js
'use client'

import Link from 'next/link'
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <motion.div 
          className="grid md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-[#94de61] rounded-lg flex items-center justify-center">
                <span className="text-gray-900 font-bold text-xl">EI</span>
              </div>
              <span className="text-xl font-bold">Eben Institute</span>
            </div>
            <p className="text-gray-400">
              Empowering communities through education, opportunity, and sustainable development.
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/marketing" className="text-gray-400 hover:text-[#94de61] transition-colors">Home</Link></li>
              <li><Link href="/marketing/about" className="text-gray-400 hover:text-[#94de61] transition-colors">About Us</Link></li>
              <li><Link href="/marketing/blog" className="text-gray-400 hover:text-[#94de61] transition-colors">Blog</Link></li>
              <li><Link href="/marketing/membership" className="text-gray-400 hover:text-[#94de61] transition-colors">Become a Member</Link></li>
            </ul>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-[#94de61] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#94de61] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#94de61] transition-colors">Cookie Policy</a></li>
            </ul>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: hello@ebeninstitute.org</li>
                    {/* <li>Phone: +1 (234) 567-8900</li>
                    <li>Address: 123 Impact Street, Community City</li> */}
            </ul>
            <div className="mt-4 flex space-x-3">
              <motion.a 
                href="https://t.me/Eben_Institute" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#94de61]/20 hover:bg-[#94de61] rounded-lg flex items-center justify-center text-[#94de61] hover:text-gray-900 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
              </motion.a>
              <motion.a 
                href="https://www.tiktok.com/@eben.institute?_r=1&_t=ZS-92RJENWdxPo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#94de61]/20 hover:bg-[#94de61] rounded-lg flex items-center justify-center text-[#94de61] hover:text-gray-900 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
              </motion.a>
              <motion.a 
                href="https://www.instagram.com/eben_institute?igsh=dXRpYjE4dnNjbTV6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#94de61]/20 hover:bg-[#94de61] rounded-lg flex items-center justify-center text-[#94de61] hover:text-gray-900 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p>© {currentYear} Eben Institute. All rights reserved.</p>
          <p className="mt-2 text-sm">
            A registered non-profit organization. Tax ID: 12-3456789
          </p>
        </motion.div>
      </div>
    </footer>
  )
}