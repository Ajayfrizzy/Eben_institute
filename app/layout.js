// app/layout.js
import './globals.css'
import { Inter } from 'next/font/google'
import ToastProvider from '@/components/ui/ToastProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Eben Institute - Empowering Communities',
  description: 'Join Eben Institute in our mission to create positive change through education, empowerment, and community development.',
  keywords: 'NGO, non-profit, community, education, empowerment, Africa',
  openGraph: {
    title: 'Eben Institute',
    description: 'Empowering Communities Through Education',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastProvider>
          {children}
        </ToastProvider>
      </body>
    </html>
  )
}