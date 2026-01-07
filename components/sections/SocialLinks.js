// components/sections/SocialLinks.js
'use client'

import { motion } from 'framer-motion'
import { Instagram, Send } from 'lucide-react'

// TikTok icon component
const TikTokIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
)

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

export default function SocialLinks() {
  const socials = [
    {
      name: 'Telegram',
      icon: <Send className="w-5 h-5" />,
      url: 'https://t.me/Eben_Institute',
      color: 'hover:bg-[#f4fce9] hover:text-[#5fa336]',
      bgColor: 'bg-[#f4fce9] text-[#5fa336]'
    },
    {
      name: 'TikTok',
      icon: <TikTokIcon className="w-5 h-5" />,
      url: 'https://www.tiktok.com/@eben.institute?_r=1&_t=ZS-92RJENWdxPo',
      color: 'hover:bg-gray-900 hover:text-white',
      bgColor: 'bg-gray-900 text-white'
    },
    {
      name: 'Instagram',
      icon: <Instagram className="w-5 h-5" />,
      url: 'https://www.instagram.com/eben_institute?igsh=dXRpYjE4dnNjbTV6',
      color: 'hover:bg-pink-50 hover:text-pink-600',
      bgColor: 'bg-pink-50 text-pink-600'
    },
    // Commented out social media platforms not in use
    // {
    //   name: 'LinkedIn',
    //   icon: <Linkedin className="w-5 h-5" />,
    //   url: 'https://linkedin.com/company/ebeninstitute',
    //   color: 'hover:bg-blue-50 hover:text-blue-700',
    //   bgColor: 'bg-blue-50 text-blue-700'
    // },
    // {
    //   name: 'YouTube',
    //   icon: <Youtube className="w-5 h-5" />,
    //   url: 'https://youtube.com/@ebeninstitute',
    //   color: 'hover:bg-red-50 hover:text-red-600',
    //   bgColor: 'bg-red-50 text-red-600'
    // },
    // {
    //   name: 'X (Twitter)',
    //   icon: <Twitter className="w-5 h-5" />,
    //   url: 'https://twitter.com/ebeninstitute',
    //   color: 'hover:bg-gray-800 hover:text-white',
    //   bgColor: 'bg-gray-800 text-white'
    // },
    // {
    //   name: 'Threads',
    //   icon: <MessageSquare className="w-5 h-5" />,
    //   url: 'https://threads.net/@ebeninstitute',
    //   color: 'hover:bg-gray-200 hover:text-gray-900',
    //   bgColor: 'bg-gray-200 text-gray-900'
    // },
    // {
    //   name: 'Medium',
    //   icon: <BookOpen className="w-5 h-5" />,
    //   url: 'https://medium.com/@ebeninstitute',
    //   color: 'hover:bg-gray-800 hover:text-white',
    //   bgColor: 'bg-gray-800 text-white'
    // },
    // {
    //   name: 'Contact Us',
    //   icon: <Mail className="w-5 h-5" />,
    //   url: 'mailto:contact@ebeninstitute.org',
    //   color: 'hover:bg-blue-50 hover:text-blue-600',
    //   bgColor: 'bg-blue-50 text-blue-600'
    // }
  ]

  return (
    <div className="py-12 bg-[#f4fce9]">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center text-gray-800 mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Connect With Us
        </motion.h2>
        <motion.p 
          className="text-gray-600 text-center mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Stay updated with our latest news, events, and initiatives across all platforms
        </motion.p>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {socials.map((social) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center justify-center p-6 rounded-xl transition-all duration-300 ${social.bgColor} ${social.color} shadow-sm hover:shadow-md min-w-[120px]`}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-2xl mb-2">
                {social.icon}
              </div>
              <span className="text-sm font-medium text-center">{social.name}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  )
}