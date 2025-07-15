import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

interface LayoutProps {
  children: React.ReactNode
  title?: string
  description?: string
}

export default function Layout({ 
  children, 
  title = 'Peter Blanco', 
  description = 'Product Manager focused on AI and Big Data. Senior PM at ActionIQ/Uniphore. Writing about tech, travel, and product management.'
}: LayoutProps) {
  return (
    <div className="container">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicons/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/assets/favicons/android-chrome-512x512.png" />
        
        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.peterblanco.com" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@blancotech" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Head>
      
      <main>{children}</main>
      
      <style jsx global>{`
        /* Global Styles */
        :root {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            "Helvetica Neue", Arial, sans-serif;
          font-size: 16px;
          --primary: #0070f3;
          --text-primary: #111827;
          --text-secondary: #4b5563;
          --background: #ffffff;
          --surface: #ffffff;
          --border: #e5e7eb;
        }

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          padding: 0;
          background-color: var(--background);
          color: var(--text-primary);
          line-height: 1.6;
        }

        .container {
          max-width: 720px;
          margin: 0 auto;
          padding: 48px 24px;
          line-height: 1.7;
          background-color: var(--surface);
        }

        h1 {
          font-size: 2.5em;
          letter-spacing: -0.03em;
          margin-top: 0;
          color: var(--text-primary);
          font-weight: 700;
        }

        h2 {
          font-size: 1.875em;
          letter-spacing: -0.02em;
          color: var(--text-primary);
          font-weight: 700;
          margin-top: 2rem;
        }

        h3 {
          font-size: 1.5em;
          color: var(--text-primary);
          font-weight: 600;
          margin-top: 1.5rem;
        }

        p {
          color: var(--text-secondary);
          font-size: 1.1rem;
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }

        a {
          color: var(--primary);
          text-decoration: none;
          transition: opacity 0.2s;
        }

        a:hover {
          opacity: 0.8;
        }

        ul, ol {
          color: var(--text-secondary);
          font-size: 1.1rem;
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }

        code {
          background-color: #f3f4f6;
          padding: 0.2em 0.4em;
          border-radius: 3px;
          font-family: "SF Mono", Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
          font-size: 0.85em;
        }

        pre {
          background-color: #f3f4f6;
          padding: 1rem;
          border-radius: 8px;
          overflow-x: auto;
          margin: 1.5rem 0;
        }

        pre code {
          background-color: transparent;
          padding: 0;
        }

        blockquote {
          border-left: 4px solid var(--primary);
          padding-left: 1rem;
          margin: 1.5rem 0;
          font-style: italic;
          color: var(--text-secondary);
        }

        img {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
          margin: 1.5rem 0;
        }

        .intro {
          margin-bottom: 3rem;
        }

        .intro-greeting {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        .wave {
          display: inline-block;
          animation: wave 2s infinite;
        }

        @keyframes wave {
          0% { transform: rotate(0deg); }
          10% { transform: rotate(14deg); }
          20% { transform: rotate(-8deg); }
          30% { transform: rotate(14deg); }
          40% { transform: rotate(-4deg); }
          50% { transform: rotate(10deg); }
          60% { transform: rotate(0deg); }
          100% { transform: rotate(0deg); }
        }

        .intro-name {
          font-weight: 700;
          color: var(--text-primary);
        }

        .intro-desc {
          font-size: 1.1rem;
          color: var(--text-secondary);
          line-height: 1.7;
        }

        .intro-highlight {
          color: var(--text-primary);
          font-weight: 600;
        }

        .intro-muted {
          color: var(--text-secondary);
          opacity: 0.7;
        }

        .intro-img {
          border-radius: 12px;
          width: 100%;
          margin: 2rem 0;
        }

        .blog-post {
          margin-bottom: 2rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid var(--border);
        }

        .blog-post:last-child {
          border-bottom: none;
        }

        .blog-post h2 {
          margin-top: 0;
          margin-bottom: 0.5rem;
        }

        .blog-post .date {
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }

        .blog-post .excerpt {
          color: var(--text-secondary);
          margin-bottom: 1rem;
        }

        .back-link {
          display: inline-block;
          margin-bottom: 2rem;
          color: var(--primary);
          text-decoration: none;
          font-weight: 500;
        }

        .back-link:hover {
          opacity: 0.8;
        }

        @media (max-width: 768px) {
          .container {
            padding: 24px 16px;
          }
          
          h1 {
            font-size: 2rem;
          }
          
          h2 {
            font-size: 1.5rem;
          }
          
          .intro-greeting {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </div>
  )
}