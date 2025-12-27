// components/sections/Hero.js
'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-blue-50 to-indigo-100 pt-24 pb-20 md:pt-32 md:pb-28">
      <div className="absolute inset-0 bg-grid-slate-100 mask-[linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Empowering Communities Through
            <span className="block gradient-text">Education & Opportunity</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Join Eben Institute in our mission to create lasting positive change through 
            education, skill development, and community empowerment initiatives.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/marketing/membership"
              className="btn-primary text-lg px-8 py-4"
            >
              Join Our Waitlist
            </Link>
            
            <Link
              href="/marketing/about"
              className="btn-secondary text-lg px-8 py-4"
            >
              Learn About Us
            </Link>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600">500+</div>
              <div className="text-gray-600">Community Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">50+</div>
              <div className="text-gray-600">Programs Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">10+</div>
              <div className="text-gray-600">Partner Organizations</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">100%</div>
              <div className="text-gray-600">Community Focused</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}