import { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Peter Blanco',
  description: 'Product Manager focused on AI and Big Data. Senior PM at ActionIQ/Uniphore. Writing about tech, travel, and product management.',
  icons: {
    icon: [
      { url: '/assets/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/assets/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/assets/favicons/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/assets/favicons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    type: 'website',
    url: 'https://www.peterblanco.com',
    title: 'Peter Blanco',
    description: 'Product Manager focused on AI and Big Data. Senior PM at ActionIQ/Uniphore. Writing about tech, travel, and product management.',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@blancotech',
    title: 'Peter Blanco',
    description: 'Product Manager focused on AI and Big Data. Senior PM at ActionIQ/Uniphore. Writing about tech, travel, and product management.',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body 
        style={{ 
          minHeight: '100vh',
          backgroundColor: 'var(--color-background)',
          color: 'var(--color-text-primary)',
          fontFamily: 'var(--font-sans)',
          margin: 0,
          padding: 0,
        }}
      >
        <main className="container-custom">
          {children}
        </main>
      </body>
    </html>
  )
}