// components/layout/Footer.js
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">EI</span>
              </div>
              <span className="text-xl font-bold">Eben Institute</span>
            </div>
            <p className="text-gray-400">
              Empowering communities through education, opportunity, and sustainable development.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/marketing" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/marketing/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/marketing/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/marketing/membership" className="text-gray-400 hover:text-white transition-colors">Become a Member</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: contact@ebeninstitute.org</li>
              <li>Phone: +1 (234) 567-8900</li>
              <li>Address: 123 Impact Street, Community City</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {currentYear} Eben Institute. All rights reserved.</p>
          <p className="mt-2 text-sm">
            A registered non-profit organization. Tax ID: 12-3456789
          </p>
        </div>
      </div>
    </footer>
  )
}