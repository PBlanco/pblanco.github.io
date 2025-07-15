import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Page Not Found - Peter Blanco',
  description: 'The page you are looking for does not exist.',
}

export default function NotFound() {
  return (
    <>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <Link href="/" className="back-link">
        ← Back to Home
      </Link>
    </>
  )
}