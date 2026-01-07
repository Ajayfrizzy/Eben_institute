// app/(marketing)/about/page.js
import LayoutWrapper from '@/components/layout/LayoutWrapper'
import MissionSection from '@/components/sections/MissionSection'
import { ShieldCheck, Users, Lightbulb, Sprout, Heart, Rocket } from 'lucide-react'

export default function AboutPage() {
  return (
    <LayoutWrapper>
      {/* Hero */}
      <section className="bg-linear-to-r from-[#5fa336] to-[#487d2c] text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl max-w-3xl mx-auto text-white/90">
             A transformed mind, a transformed people, a transformed society.
          </p>
        </div>
      </section>
        
        {/* Introduction */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Introduction</h2>
              <div className="prose prose-lg text-gray-600 space-y-5">
                <p>
                  Founded in 2018, the Eben Institute was built on the powerful vision of creating opportunity where it is needed most. We have grown from a small community initiative into a respected organization dedicated to transformation. Our mission is to shape the next generation of leaders by equipping them with the right knowledge, resources, and strategic networks they need to thrive and make a meaningful impact.
                </p>
                <p>
                 Our name, "Eben," meaning "stone of help" in Hebrew, reflects our commitment to being a solid foundation for this work. We believe in the power of a transformed mind to empower a transformed people, and ultimately, to build a transformed society. Through holistic programs in education, skill development, and economic empowerment, we address immediate needs while building sustainable systems for long-term growth and community resilience.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Vision & Mission */}
        <MissionSection />
        
        {/* Values */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Our Core Values
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: 'Integrity',
                  description: 'We operate with transparency, honesty, and accountability in all our actions.',
                  icon: <ShieldCheck className="w-8 h-8 text-[#5fa336]" />
                },
                {
                  title: 'Community First',
                  description: 'Our decisions are guided by what\'s best for the communities we serve.',
                  icon: <Users className="w-8 h-8 text-[#5fa336]" />
                },
                {
                  title: 'Innovation',
                  description: 'We embrace creative solutions to address complex social challenges.',
                  icon: <Lightbulb className="w-8 h-8 text-[#5fa336]" />
                },
                {
                  title: 'Sustainability',
                  description: 'We build programs that create lasting impact beyond our involvement.',
                  icon: <Sprout className="w-8 h-8 text-[#5fa336]" />
                },
                {
                  title: 'Inclusion',
                  description: 'We ensure everyone has equal access to opportunities and resources.',
                  icon: <Heart className="w-8 h-8 text-[#5fa336]" />
                },
                {
                  title: 'Collaboration',
                  description: 'We believe in the power of partnerships to amplify our impact.',
                  icon: <Rocket className="w-8 h-8 text-[#5fa336]" />
                },
              ].map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="w-14 h-14 bg-[#94de61]/20 rounded-xl flex items-center justify-center mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </LayoutWrapper>
  )
}