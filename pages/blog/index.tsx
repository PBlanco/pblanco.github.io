import Layout from '../../components/Layout'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { getSortedPostsData, PostData } from '../../lib/posts'
import { format } from 'date-fns'

interface BlogProps {
  posts: PostData[]
}

export default function Blog({ posts }: BlogProps) {
  return (
    <Layout title="Blog - Peter Blanco" description="Tech, travel, and product management insights">
      <Link href="/" className="back-link">
        ← Back to Home
      </Link>
      
      <h1>Blog</h1>
      
      <div>
        {posts.map((post) => (
          <div key={post.slug} className="blog-post">
            <h2>
              <Link href={`/blog/${post.slug}`}>
                {post.title}
              </Link>
            </h2>
            <div className="date">
              {format(new Date(post.date), 'MMMM d, yyyy')}
            </div>
            {post.excerpt && (
              <div className="excerpt">
                {post.excerpt}
              </div>
            )}
            <Link href={`/blog/${post.slug}`}>
              Read more →
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getSortedPostsData()
  return {
    props: {
      posts
    }
  }
}