import { Metadata } from 'next'
import Link from 'next/link'
import { getSortedPostsData } from '../../lib/posts'
import { format } from 'date-fns'

export const metadata: Metadata = {
  title: 'Travel Guides - Peter Blanco',
  description: 'Travel guides and tips from my adventures',
}

export default async function TravelGuidesPage() {
  const allPosts = getSortedPostsData()
  // Filter posts that belong to travel-guides category
  const travelPosts = allPosts.filter(post => 
    post.categories?.includes('travel-guides')
  )

  return (
    <>
      <Link href="/" className="back-link">
        ← Back to Home
      </Link>
      
      <h1>Travel Guides</h1>
      
      <div>
        {travelPosts.map((post) => (
          <div key={post.slug} className="blog-post-item">
            <h2 className="blog-post-title">
              <Link href={`/blog/${post.slug}`}>
                {post.title}
              </Link>
            </h2>
            <div className="blog-post-date">
              {format(new Date(post.date), 'MMMM d, yyyy')}
            </div>
            {post.excerpt && (
              <div className="blog-post-excerpt">
                {post.excerpt}
              </div>
            )}
            <Link href={`/blog/${post.slug}`} style={{ color: 'var(--color-primary)' }} className="hover:opacity-80 transition-opacity">
              Read more →
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}