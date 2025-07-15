import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllPostSlugs, getPostData } from '../../../lib/posts'
import { format } from 'date-fns'

type Props = {
  params: { slug: string }
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map((item) => ({
    slug: item.params.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const post = await getPostData(params.slug)
    return {
      title: `${post.title} - Peter Blanco`,
      description: post.excerpt || post.title,
    }
  } catch (error) {
    return {
      title: 'Post Not Found - Peter Blanco',
      description: 'The blog post you are looking for does not exist.',
    }
  }
}

export default async function BlogPostPage({ params }: Props) {
  let post
  try {
    post = await getPostData(params.slug)
  } catch (error) {
    notFound()
  }

  return (
    <>
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
    </>
  )
}