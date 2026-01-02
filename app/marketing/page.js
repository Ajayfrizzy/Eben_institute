// app/(marketing)/page.js
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import AboutSection from '@/components/sections/AboutSection'
import MissionSection from '@/components/sections/MissionSection'
import WaitlistForm from '@/components/sections/WaitlistForm'
import SocialLinks from '@/components/sections/SocialLinks'
import Partners from '@/components/sections/Partners'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* About Section */}
        <AboutSection />
        
        {/* Mission & Vision */}
        <MissionSection />
        
        {/* Partners */}
        <Partners />
        
        {/* Waitlist CTA */}
        <section className="py-20 bg-linear-to-br from-[#f4fce9] to-[#e5f8c9]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold text-gray-800 mb-6">
                    Join Our Community of Changemakers
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Be part of a growing community dedicated to creating positive impact. 
                    Join our waitlist to get early access to programs, events, and resources.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Priority registration for all programs</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Exclusive content and resources</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Network with like-minded individuals</span>
                    </div>
                  </div>
                </div>
                <WaitlistForm />
              </div>
            </div>
          </div>
        </section>
        
        {/* Social Links */}
        <SocialLinks />
      </main>
      <Footer />
    </>
  )
}