// components/sections/BlogSection.js
'use client'

import Link from 'next/link'
import { Calendar, Clock, ArrowRight, Monitor, BarChart3, Handshake, Rocket } from 'lucide-react'
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

export default function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: 'Empowering Youth Through Digital Skills Training',
      excerpt: 'How our digital literacy program is transforming opportunities for young people in underserved communities.',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'Education',
      icon: <Monitor className="w-8 h-8 text-[#5fa336]" />
    },
    {
      id: 2,
      title: 'Sustainable Community Development: Our 5-Year Impact Report',
      excerpt: 'A comprehensive look at the positive changes we\'ve helped create in communities across the region.',
      date: '2024-01-10',
      readTime: '8 min read',
      category: 'Impact',
      icon: <BarChart3 className="w-8 h-8 text-[#5fa336]" />
    },
    {
      id: 3,
      title: 'Partnering for Change: Collaboration Strategies That Work',
      excerpt: 'Learn how strategic partnerships have amplified our impact and created sustainable solutions.',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Partnerships',
      icon: <Handshake className="w-8 h-8 text-[#5fa336]" />
    },
    {
      id: 4,
      title: 'The Future of NGO Work in the Digital Age',
      excerpt: 'Exploring how technology is reshaping non-profit work and creating new opportunities for impact.',
      date: '2023-12-28',
      readTime: '7 min read',
      category: 'Innovation',
      icon: <Rocket className="w-8 h-8 text-[#5fa336]" />
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest From Our Blog
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Insights, stories, and updates from our journey of creating positive change
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="p-6">
                <div className="w-14 h-14 bg-[#94de61]/20 rounded-xl flex items-center justify-center mb-4">{post.icon}</div>
                <span className="inline-block px-3 py-1 text-xs font-semibold text-[#5fa336] bg-[#f4fce9] rounded-full mb-3">
                  {post.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center text-[#5fa336] font-semibold hover:text-[#487d2c] group"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
            <a
              href="https://medium.com/@ebeninstitute"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
              </svg>
              Read on Medium
            </a>
            <Link
              href="/marketing/blog"
              className="inline-flex items-center text-[#5fa336] font-semibold hover:text-[#487d2c]"
            >
              View All Articles
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}