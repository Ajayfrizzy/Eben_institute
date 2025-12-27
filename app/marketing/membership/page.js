// app/(marketing)/membership/page.js
import LayoutWrapper from '@/components/layout/LayoutWrapper'
import WaitlistForm from '@/components/sections/WaitlistForm'
import SocialLinks from '@/components/sections/SocialLinks'

export default function MembershipPage() {
  return (
    <LayoutWrapper>
      {/* Hero */}
      <section className="bg-linear-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Become a Member</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Join our community of changemakers and be part of something bigger
          </p>
        </div>
      </section>

        {/* Why Join */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
              Why Join Eben Institute?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Global Network</h3>
                <p className="text-gray-600">
                  Connect with professionals, volunteers, and organizations from around the world.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Verified Opportunities</h3>
                <p className="text-gray-600">
                  Get access to verified volunteer opportunities, internships, and career positions.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Skill Development</h3>
                <p className="text-gray-600">
                  Access training programs, workshops, and resources to enhance your skills.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Waitlist Form */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Join Our Waitlist</h2>
                <p className="text-lg text-gray-600">
                  Be the first to know when membership applications open
                </p>
              </div>
              <WaitlistForm />
            </div>
          </div>
        </section>

        {/* Community Channels */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Join Our Adhoc Community
              </h2>
              <p className="text-gray-600 mb-10">
                Connect with our community on these platforms for real-time updates and discussions
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <a
                  href="https://t.me/ebeninstitute"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white p-6 rounded-2xl hover:bg-blue-600 transition-colors flex items-center justify-center space-x-3"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.111c-.183 2.042-1.02 7.006-1.44 9.29-.178.944-.53 1.26-1.017 1.292-.764.049-1.344-.504-2.083-.985-1.16-.77-1.816-1.25-2.941-2.002-1.312-.875-.461-1.357.286-2.146.196-.205 4.578-4.197 4.666-4.555.01-.043.02-.202-.077-.285-.095-.084-.235-.055-.337-.033-.143.03-2.416 1.538-6.82 4.515-.645.45-1.23.668-1.874.658-.615-.01-1.8-.348-2.68-.636-1.08-.355-1.94-.542-1.865-1.145.038-.304.455-.615 1.25-.935 4.357-1.93 7.27-3.219 8.745-3.87 4.172-1.893 5.036-2.22 5.603-2.234.131-.002.425.031.616.188.17.14.216.33.238.464.022.134.045.44.023.678z"/>
                  </svg>
                  <div className="text-left">
                    <div className="font-bold text-lg">Telegram Community</div>
                    <div className="text-blue-100">Join discussions and get updates</div>
                  </div>
                </a>
                
                <a
                  href="https://whatsapp.com/channel/ebeninstitute"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white p-6 rounded-2xl hover:bg-green-600 transition-colors flex items-center justify-center space-x-3"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.89 16.117c-.264.742-1.462 1.358-2.02 1.439-.541.08-1.225.107-1.913.105-.94-.003-3.47-.395-4.926-1.455-2.54-1.846-2.699-4.136-2.786-4.67-.087-.534-.07-1.006.022-1.324.092-.317.304-.585.592-.788.275-.194.644-.314 1.008-.314.241 0 .456.035.647.102.191.067.543.286.78.417.238.13.39.193.558.193.143 0 .286-.045.427-.137.14-.09.585-.477 1.155-1.156.57-.68.968-1.14 1.127-1.24.16-.1.32-.15.48-.15.12 0 .224.027.317.082.092.054.174.13.246.23.072.1.14.26.204.48.064.22.124.478.18.775.056.297.104.573.144.828.04.255.058.446.058.574 0 .128-.02.254-.06.38-.04.126-.095.225-.166.298-.07.073-.16.11-.27.11-.16 0-.34-.06-.54-.18-.2-.12-.435-.27-.705-.45-.27-.18-.54-.36-.81-.54-.27-.18-.437-.29-.5-.33-.064-.04-.14-.09-.23-.15-.09-.06-.15-.09-.18-.11-.03-.02-.06-.05-.09-.08-.03-.03-.05-.06-.07-.09-.02-.03-.03-.07-.03-.11 0-.04.01-.09.03-.14.02-.05.06-.11.12-.18.06-.07.14-.15.24-.23.1-.08.22-.17.36-.26.14-.09.29-.18.45-.27.16-.09.33-.18.51-.27.18-.09.36-.17.54-.25.18-.08.36-.15.54-.21.18-.06.35-.09.51-.09.32 0 .57.1.75.3.18.2.33.48.45.84.12.36.22.79.3 1.29.08.5.12 1.05.12 1.65 0 .6-.07 1.21-.21 1.83z"/>
                  </svg>
                  <div className="text-left">
                    <div className="font-bold text-lg">WhatsApp Channel</div>
                    <div className="text-green-100">Get announcements and updates</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Social Links */}
        <SocialLinks />
    </LayoutWrapper>
  )
}