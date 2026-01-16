// components/layout/Navbar.js
'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
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
    { name: 'Become a Volunteer', href: '/marketing/volunteer' },
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
            whileHover={{ scale: 1.02 }}
          >
            <Link href="/marketing" className="flex items-center" onClick={() => setIsOpen(false)}>
              <Image
                src="/eben-logo.png"
                alt="Eben Institute Logo"
                width={150}
                height={56}
                className="h-20 w-auto object-contain"
                priority
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                <Link
                  href={item.href}
                  className={`font-medium transition-all duration-300 relative group ${
                    isActive(item.href)
                      ? 'text-[#5fa336]'
                      : 'text-gray-700 hover:text-[#5fa336]'
                  }`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#5fa336] transition-all duration-300 ${
                    isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/marketing/membership"
                className="bg-linear-to-r from-[#94de61] to-[#5fa336] text-white px-5 py-2.5 rounded-lg font-semibold hover:from-[#7bc94a] hover:to-[#487d2c] transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Join Waitlist
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="lg:hidden py-4 border-t border-gray-100"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col space-y-2">
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
                      className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 block ${
                        isActive(item.href)
                          ? 'bg-[#f4fce9] text-[#5fa336] border-l-4 border-[#5fa336]'
                          : 'text-gray-700 hover:bg-[#f4fce9] hover:text-[#5fa336] hover:pl-6'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.35 }}
                  className="pt-2"
                >
                  <Link
                    href="/marketing/membership"
                    onClick={() => setIsOpen(false)}
                    className="bg-linear-to-r from-[#94de61] to-[#5fa336] text-white px-6 py-3 rounded-lg font-semibold hover:from-[#7bc94a] hover:to-[#487d2c] text-center block shadow-md"
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