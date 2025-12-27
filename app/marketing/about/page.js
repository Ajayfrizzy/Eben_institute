// app/(marketing)/about/page.js
import LayoutWrapper from '@/components/layout/LayoutWrapper'
import MissionSection from '@/components/sections/MissionSection'
import VisionSection from '@/components/sections/VisionSection'

export default function AboutPage() {
  return (
    <LayoutWrapper>
      {/* Hero */}
      <section className="bg-linear-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Learn about our journey, values, and commitment to creating positive change
          </p>
        </div>
      </section>
        
        {/* Introduction */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Introduction</h2>
              <div className="prose prose-lg text-gray-600">
                <p>
                  Eben Institute was founded in 2018 with a simple yet powerful vision: 
                  to create opportunities where they are needed most. What started as a 
                  small community initiative has grown into a respected non-profit 
                  organization impacting thousands of lives.
                </p>
                <p>
                  Our name "Eben" comes from the Hebrew word meaning "stone of help," 
                  reflecting our commitment to being a solid foundation for communities 
                  in need. We believe that lasting change comes from empowering 
                  individuals with education, skills, and opportunities.
                </p>
                <p>
                  Today, we work across multiple communities, focusing on education, 
                  skill development, economic empowerment, and community building. 
                  Our approach is holistic, addressing immediate needs while building 
                  sustainable systems for long-term growth.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Vision & Mission */}
        <VisionSection />
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
                  icon: '✅'
                },
                {
                  title: 'Community First',
                  description: 'Our decisions are guided by what\'s best for the communities we serve.',
                  icon: '🤝'
                },
                {
                  title: 'Innovation',
                  description: 'We embrace creative solutions to address complex social challenges.',
                  icon: '💡'
                },
                {
                  title: 'Sustainability',
                  description: 'We build programs that create lasting impact beyond our involvement.',
                  icon: '🌱'
                },
                {
                  title: 'Inclusion',
                  description: 'We ensure everyone has equal access to opportunities and resources.',
                  icon: '🌈'
                },
                {
                  title: 'Collaboration',
                  description: 'We believe in the power of partnerships to amplify our impact.',
                  icon: '🚀'
                },
              ].map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="text-3xl mb-4">{value.icon}</div>
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