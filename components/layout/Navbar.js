// components/layout/Navbar.js
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: 'Home', href: '/marketing' },
    { name: 'About Us', href: '/marketing/about' },
    { name: 'Blog', href: '/marketing/blog' },
    { name: 'Become a Member', href: '/marketing/membership' },
    { name: 'Contact', href: '/marketing/contact' },
  ]

  const isActive = (path) => {
    if (path === '/marketing' && pathname === '/marketing') return true
    if (path !== '/marketing' && pathname.startsWith(path)) return true
    return false
  }

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/marketing" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
              <div className="w-8 h-8 bg-linear-to-br from-[#94de61] to-[#5fa336] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">EI</span>
              </div>
              <span className="text-xl font-bold bg-linear-to-r from-[#5fa336] to-[#487d2c] bg-clip-text text-transparent">
                Eben Institute
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className={`font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-gray-900 border-b-2 border-[#5fa336] pb-1'
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/marketing/membership"
                className="bg-linear-to-r from-[#94de61] to-[#5fa336] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#487d2c] hover:text-[#1a4a01] transition-all duration-300 shadow-sm hover:shadow-md"
              >
                Join Waitlist
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="md:hidden py-4 border-t border-gray-100"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col space-y-3">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`px-3 py-2 rounded-lg font-medium transition-colors block ${
                        isActive(item.href)
                          ? 'bg-gray-100 text-gray-900 border-l-4 border-[#5fa336]'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  <Link
                    href="/marketing/membership"
                    onClick={() => setIsOpen(false)}
                    className="bg-linear-to-r from-[#94de61] to-[#5fa336] text-white px-6 py-3 rounded-lg font-semibold hover:from-[#7bc94a] hover:to-[#487d2c] text-center block"
                  >
                    Join Waitlist
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}