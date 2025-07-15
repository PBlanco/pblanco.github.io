import Layout from '../components/Layout'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { getSortedPostsData, PostData } from '../lib/posts'
import { format } from 'date-fns'

interface TravelGuidesProps {
  posts: PostData[]
}

export default function TravelGuides({ posts }: TravelGuidesProps) {
  return (
    <Layout title="Travel Guides - Peter Blanco" description="Travel guides and tips from my adventures">
      <Link href="/" className="back-link">
        ← Back to Home
      </Link>
      
      <h1>Travel Guides</h1>
      
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
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = getSortedPostsData()
  // Filter posts that belong to travel-guides category
  const travelPosts = allPosts.filter(post => 
    post.categories?.includes('travel-guides')
  )
  
  return {
    props: {
      posts: travelPosts
    }
  }
}