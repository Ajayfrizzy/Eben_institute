// components/sections/AboutSection.js
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export default function AboutSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About Eben Institute
            </h2>
            
            <p className="text-gray-600 mb-6 text-lg">
              We exist to shape the next generation of leaders by equipping them with the right 
              knowledge, resources, and strategic networks they need to thrive and make meaningful impact.
            </p>
            
            <motion.p 
              className="text-[#5fa336] font-semibold mb-8 text-lg italic"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              A transformed mind, a transformed people, a transformed society.
            </motion.p>
            
            <div className="space-y-4 mb-8">
              <motion.div 
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <div className="shrink-0 mt-1">
                  <div className="w-6 h-6 rounded-full bg-[#94de61]/30 flex items-center justify-center">
                    <svg className="w-3 h-3 text-[#5fa336]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <p className="ml-3 text-gray-700">
                  Covers major SDG alignments especially 4, 8, 9 and 17
                </p>
              </motion.div>
              
              <motion.div 
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <div className="shrink-0 mt-1">
                  <div className="w-6 h-6 rounded-full bg-[#94de61]/30 flex items-center justify-center">
                    <svg className="w-3 h-3 text-[#5fa336]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <p className="ml-3 text-gray-700">
                  Community-centered approach
                </p>
              </motion.div>
              
              <motion.div 
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <div className="shrink-0 mt-1">
                  <div className="w-6 h-6 rounded-full bg-[#94de61]/30 flex items-center justify-center">
                    <svg className="w-3 h-3 text-[#5fa336]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <p className="ml-3 text-gray-700">
                  Local and International Partnerships
                </p>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <Link
                href="/marketing/about"
                className="inline-flex items-center text-[#5fa336] font-semibold hover:text-[#487d2c] transition-colors"
              >
                Learn more about us
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-linear-to-br from-[#94de61] to-[#5fa336] rounded-2xl p-1">
              <div className="bg-white rounded-xl p-6 h-full">
                <div className="aspect-video bg-linear-to-br from-[#f4fce9] to-[#e5f8c9] rounded-lg flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 bg-[#94de61]/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Sparkles className="w-8 h-8 text-[#5fa336]" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Our Impact</h3>
                    <p className="text-gray-600">
                      Transforming lives through sustainable community initiatives
                    </p>
                  </div>
                </div>
                
                <div className="mt-6 grid grid-cols-3 gap-4">
                  <motion.div 
                    className="text-center p-4 bg-[#f4fce9] rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="text-2xl font-bold text-[#5fa336]">5+</div>
                    <div className="text-sm text-gray-600">Years</div>
                  </motion.div>
                  <motion.div 
                    className="text-center p-4 bg-[#e5f8c9] rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="text-2xl font-bold text-[#5fa336]">15+</div>
                    <div className="text-sm text-gray-600">Projects</div>
                  </motion.div>
                  <motion.div 
                    className="text-center p-4 bg-[#cdf19a] rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="text-2xl font-bold text-[#487d2c]">1000+</div>
                    <div className="text-sm text-gray-600">Lives Impacted</div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}