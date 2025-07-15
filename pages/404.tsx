import Layout from '../components/Layout'
import Link from 'next/link'

export default function Custom404() {
  return (
    <Layout title="Page Not Found - Peter Blanco" description="The page you're looking for doesn't exist">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <Link href="/" className="back-link">
        ← Back to Home
      </Link>
    </Layout>
  )
}