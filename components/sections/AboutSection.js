// components/sections/AboutSection.js
import Image from 'next/image'
import Link from 'next/link'

export default function AboutSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About Eben Institute
            </h2>
            
            <p className="text-gray-600 mb-6 text-lg">
              Founded with a vision to transform communities through sustainable development, 
              Eben Institute is a non-profit organization dedicated to creating opportunities 
              where they are needed most.
            </p>
            
            <p className="text-gray-600 mb-8 text-lg">
              We believe in the power of education, skill development, and community 
              engagement to break cycles of poverty and create lasting change.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="shrink-0 mt-1">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                    <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <p className="ml-3 text-gray-700">
                  Community-centered approach to development
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="shrink-0 mt-1">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                    <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <p className="ml-3 text-gray-700">
                  Sustainable and scalable programs
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="shrink-0 mt-1">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                    <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <p className="ml-3 text-gray-700">
                  Partnerships with local organizations
                </p>
              </div>
            </div>
            
            <Link
              href="/marketing/about"
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
            >
              Learn more about us
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
          
          <div className="relative">
            <div className="bg-linear-to-br from-blue-500 to-purple-600 rounded-2xl p-1">
              <div className="bg-white rounded-xl p-6 h-full">
                <div className="aspect-video bg-linear-to-br from-blue-50 to-indigo-100 rounded-lg flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-5xl mb-4">🌟</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Our Impact</h3>
                    <p className="text-gray-600">
                      Transforming lives through sustainable community initiatives
                    </p>
                  </div>
                </div>
                
                <div className="mt-6 grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">5+</div>
                    <div className="text-sm text-gray-600">Years</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">15+</div>
                    <div className="text-sm text-gray-600">Projects</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">1000+</div>
                    <div className="text-sm text-gray-600">Lives Impacted</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}