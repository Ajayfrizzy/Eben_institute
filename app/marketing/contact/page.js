// app/(marketing)/contact/page.js
import LayoutWrapper from '@/components/layout/LayoutWrapper'
import ContactSection from '@/components/sections/ContactSection'
import SocialLinks from '@/components/sections/SocialLinks'
import { SectionWrapper, SectionHeader } from '@/components/ui/SectionWrapper'

export default function ContactPage() {
  return (
    <LayoutWrapper>
      {/* Hero Section */}
      <SectionWrapper background="primary" padding="lg">
        <SectionHeader
          title="Contact Us"
          description="Get in touch with our team. We're here to help and collaborate."
          align="center"
        />
      </SectionWrapper>

      {/* Contact Form & Info */}
      <ContactSection />

      {/* Social Links */}
      <SocialLinks />

      {/* FAQ Section */}
      <SectionWrapper background="gray" padding="lg">
        <SectionHeader
          title="Frequently Asked Questions"
          description="Find quick answers to common questions"
          align="center"
        />
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {[
              {
                question: "How can I partner with Eben Institute?",
                answer: "We welcome partnerships with organizations that share our vision. Please email partnerships@ebeninstitute.org with your proposal."
              },
              {
                question: "How can I support your mission?",
                answer: "You can support us by joining our waitlist, volunteering your skills, or making a donation. Visit our membership page for more options."
              },
              {
                question: "Do you offer internship opportunities?",
                answer: "Yes! We offer internships in various departments. Send your CV and cover letter to careers@ebeninstitute.org."
              },
              {
                question: "How can I stay updated with your work?",
                answer: "Follow us on social media, join our Telegram/WhatsApp communities, and subscribe to our newsletter for regular updates."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </LayoutWrapper>
  )
}