// components/sections/SocialLinks.js
'use client'

import { Instagram, Youtube, Linkedin, Twitter, MessageSquare, BookOpen, Mail } from 'lucide-react'

export default function SocialLinks() {
  const socials = [
    {
      name: 'Instagram',
      icon: <Instagram className="w-5 h-5" />,
      url: 'https://instagram.com/ebeninstitute',
      color: 'hover:bg-pink-50 hover:text-pink-600',
      bgColor: 'bg-pink-50 text-pink-600'
    },
    {
      name: 'TikTok',
      icon: '🎵',
      url: 'https://tiktok.com/@ebeninstitute',
      color: 'hover:bg-gray-900 hover:text-white',
      bgColor: 'bg-gray-900 text-white'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      url: 'https://linkedin.com/company/ebeninstitute',
      color: 'hover:bg-blue-50 hover:text-blue-700',
      bgColor: 'bg-blue-50 text-blue-700'
    },
    {
      name: 'YouTube',
      icon: <Youtube className="w-5 h-5" />,
      url: 'https://youtube.com/@ebeninstitute',
      color: 'hover:bg-red-50 hover:text-red-600',
      bgColor: 'bg-red-50 text-red-600'
    },
    {
      name: 'X (Twitter)',
      icon: <Twitter className="w-5 h-5" />,
      url: 'https://twitter.com/ebeninstitute',
      color: 'hover:bg-gray-800 hover:text-white',
      bgColor: 'bg-gray-800 text-white'
    },
    {
      name: 'Threads',
      icon: <MessageSquare className="w-5 h-5" />,
      url: 'https://threads.net/@ebeninstitute',
      color: 'hover:bg-gray-200 hover:text-gray-900',
      bgColor: 'bg-gray-200 text-gray-900'
    },
    {
      name: 'Medium',
      icon: <BookOpen className="w-5 h-5" />,
      url: 'https://medium.com/@ebeninstitute',
      color: 'hover:bg-gray-800 hover:text-white',
      bgColor: 'bg-gray-800 text-white'
    },
    {
      name: 'Contact Us',
      icon: <Mail className="w-5 h-5" />,
      url: 'mailto:contact@ebeninstitute.org',
      color: 'hover:bg-blue-50 hover:text-blue-600',
      bgColor: 'bg-blue-50 text-blue-600'
    }
  ]

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Connect With Us</h2>
        <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
          Stay updated with our latest news, events, and initiatives across all platforms
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-300 ${social.bgColor} ${social.color} shadow-sm hover:shadow-md`}
            >
              <div className="text-2xl mb-2">
                {social.icon}
              </div>
              <span className="text-sm font-medium text-center">{social.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}