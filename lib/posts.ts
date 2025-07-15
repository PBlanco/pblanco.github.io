import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import { format } from 'date-fns'

const postsDirectory = path.join(process.cwd(), '_posts')

export interface PostData {
  slug: string
  title: string
  date: string
  content: string
  excerpt?: string
  categories?: string[]
}

export function getSortedPostsData(): PostData[] {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '').replace(/\.markdown$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    return {
      slug,
      title: matterResult.data.title,
      date: matterResult.data.date,
      categories: matterResult.data.categories ? [matterResult.data.categories] : [],
      content: matterResult.content,
      excerpt: matterResult.content.substring(0, 200) + '...'
    }
  })

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, '').replace(/\.markdown$/, '')
      }
    }
  })
}

export async function getPostData(slug: string): Promise<PostData> {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  let fileContents = ''
  
  try {
    fileContents = fs.readFileSync(fullPath, 'utf8')
  } catch (error) {
    // Try with .markdown extension
    const markdownPath = path.join(postsDirectory, `${slug}.markdown`)
    fileContents = fs.readFileSync(markdownPath, 'utf8')
  }

  const matterResult = matter(fileContents)
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  return {
    slug,
    title: matterResult.data.title,
    date: matterResult.data.date,
    categories: matterResult.data.categories ? [matterResult.data.categories] : [],
    content: contentHtml
  }
}