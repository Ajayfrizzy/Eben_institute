// components/sections/VisionSection.js
import { Target, Globe, Users } from 'lucide-react'

export default function VisionSection() {
  return (
    <section className="py-16 bg-linear-to-br from-blue-600 to-indigo-700 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Vision for the Future
          </h2>
          <p className="text-xl text-blue-100">
            Building a world where every community has the tools to thrive
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">Global Reach</h3>
            <p className="text-blue-100">
              Expand our impact to reach 100+ communities across 20+ countries by 2030, 
              creating a global network of empowered individuals.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">Sustainable Systems</h3>
            <p className="text-blue-100">
              Develop self-sustaining community models that continue to grow and 
              thrive long after our direct involvement ends.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">Community Leadership</h3>
            <p className="text-blue-100">
              Empower 10,000+ community leaders with the skills and resources 
              needed to drive change within their own communities.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-12 border-t border-white/20">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-6">Our 5-Year Goals</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">50K+</div>
                <div className="text-sm text-blue-200">Lives Impacted</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-sm text-blue-200">Community Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">100+</div>
                <div className="text-sm text-blue-200">Strategic Partners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">$10M+</div>
                <div className="text-sm text-blue-200">Community Investment</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}