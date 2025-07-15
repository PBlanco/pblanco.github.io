import { Metadata } from 'next'
import Link from 'next/link'
import { getSortedPostsData } from '../../lib/posts'
import { format } from 'date-fns'

export const metadata: Metadata = {
  title: 'Blog - Peter Blanco',
  description: 'Tech, travel, and product management insights',
}

export default async function BlogPage() {
  const posts = getSortedPostsData()

  return (
    <>
      <Link href="/" className="back-link">
        ← Back to Home
      </Link>
      
      <h1>Blog</h1>
      
      <div>
        {posts.map((post) => (
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