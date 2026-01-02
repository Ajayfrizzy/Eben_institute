// components/layout/Header.js
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '/marketing' },
    { name: 'About Us', href: '/marketing/about' },
    { name: 'Blog', href: '/marketing/blog' },
    { name: 'Become a Member', href: '/marketing/membership' },
    { name: 'Contact', href: '/marketing/contact' }
  ]

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/marketing" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-linear-to-br from-[#94de61] to-[#5fa336] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">EI</span>
            </div>
            <span className="text-2xl font-bold text-green-900">Eben Institute</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-green-900 hover:border-b-2 hover:border-[#5fa336] hover:text-[#1a4a01] font-medium transition-all"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/marketing/membership"
              className="bg-linear-to-r from-[#94de61] to-[#5fa336] text-white px-6 py-2 font-semibold rounded-lg hover:bg-[#487d2c] hover:text-[#1a4a01] transition-all"
            >
              Join Waitlist
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-gray-900 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/marketing/membership"
                className="bg-linear-to-r from-[#94de61] to-[#5fa336] text-white px-6 py-2 rounded-lg hover:from-[#7bc94a] hover:to-[#487d2c] text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Join Waitlist
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}