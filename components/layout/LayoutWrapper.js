// components/layout/LayoutWrapper.js
import Header from './Header'
import Footer from './Footer'
import Navbar from './Navbar'

export default function LayoutWrapper({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Use either Header or Navbar - Navbar is more modern */}
      <Navbar />
      <main className="grow">
        {children}
      </main>
      <Footer />
    </div>
  )
}