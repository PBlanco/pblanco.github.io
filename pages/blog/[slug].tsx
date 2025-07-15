import Layout from '../../components/Layout'
import Link from 'next/link'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getAllPostSlugs, getPostData, PostData } from '../../lib/posts'
import { format } from 'date-fns'

interface PostProps {
  post: PostData
}

export default function Post({ post }: PostProps) {
  return (
    <Layout title={`${post.title} - Peter Blanco`} description={post.excerpt}>
      <Link href="/blog" className="back-link">
        ← Back to Blog
      </Link>
      
      <article>
        <h1>{post.title}</h1>
        <div className="blog-post-date">
          {format(new Date(post.date), 'MMMM d, yyyy')}
        </div>
        <div className="prose-custom" dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostSlugs()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPostData(params?.slug as string)
  return {
    props: {
      post
    }
  }
}