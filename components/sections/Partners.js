// components/sections/Partners.js
export default function Partners() {
  const partners = [
    { name: 'UNESCO', logo: '🏛️' },
    { name: 'Local Community Org', logo: '🤝' },
    { name: 'Tech for Good', logo: '💻' },
    { name: 'Education First', logo: '📚' },
    { name: 'Sustainable Dev Corp', logo: '🌱' },
  ]
  
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Partner With Us
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Join hands with us to create greater impact. Together, we can achieve more.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 flex flex-col items-center justify-center hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="text-3xl mb-3">{partner.logo}</div>
                <div className="text-center font-medium text-gray-700">
                  {partner.name}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:partnerships@ebeninstitute.org"
                className="btn-primary"
              >
                Become a Partner
              </a>
              <a
                href="#"
                className="btn-secondary"
              >
                Support Our Mission
              </a>
            </div>
            <p className="mt-4 text-gray-500 text-sm">
              Corporate partnerships • NGO collaborations • Community sponsorships
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}