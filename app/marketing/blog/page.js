// app/(marketing)/blog/page.js
import LayoutWrapper from '@/components/layout/LayoutWrapper'
import BlogSection from '@/components/sections/BlogSection'

export default function BlogPage() {
  return (
    <LayoutWrapper>
      {/* Hero */}
      <section className="bg-linear-to-r from-[#5fa336] to-[#487d2c] text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold mb-6">Our Blog</h1>
          <p className="text-xl max-w-3xl mx-auto text-white/90">
            Insights, stories, and updates from our journey of creating impact
          </p>
        </div>
      </section>
        
        {/* Blog Section */}
        <BlogSection />
        
        {/* Medium Integration */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Read More on Medium
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              For more in-depth articles, case studies, and thought leadership pieces, 
              visit our Medium publication.
            </p>
            
            <a
              href="https://medium.com/@ebeninstitute"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
              </svg>
              Visit Our Medium Page
            </a>
          </div>
        </section>
    </LayoutWrapper>
  )
}