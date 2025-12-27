// app/page.js
import { redirect } from 'next/navigation'

export default function Home() {
  // Redirect to marketing home page
  redirect('/marketing')
}