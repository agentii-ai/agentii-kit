/**
 * Blog Post Content Loader
 * Loads and parses markdown blog posts from content/blog directory
 */

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { BlogPostFrontmatter } from '@/lib/schemas/blog-post'
import { validateBlogPostFrontmatter, typedFrontmatter, generateSlug, estimateReadingTime } from '@/lib/schemas/blog-post'
import { processMarkdown } from '@/lib/markdown-processor'

export interface BlogPost {
  slug: string
  frontmatter: BlogPostFrontmatter
  content: string
  processedContent?: string // HTML processed with syntax highlighting
  readingTime: number
  draft?: boolean
}

export interface BlogPostWithMetadata extends BlogPost {
  excerpt: string
  wordCount: number
}

/**
 * Get the content directory path
 */
function getContentDir(): string {
  return path.join(process.cwd(), 'content', 'blog')
}

/**
 * Check if a file is a valid markdown blog post
 */
function isValidBlogFile(filename: string): boolean {
  return filename.endsWith('.md') && /^\d{4}-\d{2}-\d{2}-/.test(filename)
}

/**
 * Extract slug from filename (YYYY-MM-DD-slug.md -> slug)
 */
function getSlugFromFilename(filename: string): string {
  // Remove .md extension and date prefix
  return filename.replace(/\.md$/, '').replace(/^\d{4}-\d{2}-\d{2}-/, '')
}

/**
 * Load all blog posts from content directory
 */
export async function getAllBlogPosts(includeDrafts: boolean = false): Promise<BlogPost[]> {
  const contentDir = getContentDir()

  // Check if content directory exists
  if (!fs.existsSync(contentDir)) {
    console.warn(`Content directory not found: ${contentDir}`)
    return []
  }

  const files = fs.readdirSync(contentDir)
  const validFiles = files.filter(isValidBlogFile)
  
  console.log(`[Blog Loader] Found ${validFiles.length} valid blog files:`, validFiles)

  const posts: BlogPost[] = []

  for (const file of validFiles) {
    try {
      const filePath = path.join(contentDir, file)
      const fileContent = fs.readFileSync(filePath, 'utf-8')

      // Parse frontmatter and content
      const { data, content } = matter(fileContent)

      // Validate frontmatter
      const validation = validateBlogPostFrontmatter(data)
      if (!validation.isValid) {
        console.error(`[Blog Loader] Invalid frontmatter in ${file}:`, validation.errors)
        continue
      }
      
      console.log(`[Blog Loader] Successfully loaded: ${file}`)

      // Type the frontmatter
      let frontmatter = typedFrontmatter(data as Record<string, unknown>)

      // Skip drafts unless explicitly included
      if (frontmatter.draft && !includeDrafts) {
        console.log(`[Blog Loader] Skipping draft: ${file}`)
        continue
      }

      // Generate slug if not provided
      if (!frontmatter.slug) {
        frontmatter.slug = generateSlug(frontmatter.title)
      }

      // Calculate reading time
      const readingTime = estimateReadingTime(content)

      const slug = getSlugFromFilename(file)

      // Process markdown with syntax highlighting (async, but we'll do it synchronously for now)
      let processedContent: string | undefined
      try {
        processedContent = await processMarkdown(content)
      } catch (error) {
        console.error(`[Blog Loader] Error processing markdown for ${file}:`, error)
        // Fall back to raw content if processing fails
        processedContent = undefined
      }

      posts.push({
        slug,
        frontmatter,
        content,
        processedContent,
        readingTime,
        draft: frontmatter.draft || false,
      })
    } catch (error) {
      console.error(`[Blog Loader] Error parsing blog post ${file}:`, error)
      continue
    }
  }

  // Sort by date, newest first
  posts.sort((a, b) => {
    return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
  })

  console.log(`[Blog Loader] Returning ${posts.length} posts`)
  return posts
}

/**
 * Get a single blog post by slug
 */
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await getAllBlogPosts(true) // Include drafts for direct access

  return posts.find((post) => post.slug === slug) || null
}

/**
 * Get published posts only (non-draft)
 */
export async function getPublishedPosts(): Promise<BlogPost[]> {
  return getAllBlogPosts(false)
}

/**
 * Get featured posts
 * Returns featured posts sorted by date (newest first)
 */
export async function getFeaturedPosts(limit: number = 3): Promise<BlogPost[]> {
  const posts = await getPublishedPosts()
  const featured = posts.filter((post) => post.frontmatter.featured)
  // Sort by date, newest first, to ensure latest featured post is prioritized
  featured.sort((a, b) => {
    return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
  })
  return featured.slice(0, limit)
}

/**
 * Get recent posts
 */
export async function getRecentPosts(limit: number = 10): Promise<BlogPost[]> {
  const posts = await getPublishedPosts()
  return posts.slice(0, limit)
}

/**
 * Get posts by tag
 */
export async function getPostsByTag(tag: string): Promise<BlogPost[]> {
  const posts = await getPublishedPosts()
  return posts.filter((post) => post.frontmatter.tags?.includes(tag) || false)
}

/**
 * Get posts by category
 */
export async function getPostsByCategory(category: string): Promise<BlogPost[]> {
  const posts = await getPublishedPosts()
  return posts.filter((post) => post.frontmatter.category === category)
}

/**
 * Get posts from a specific date range
 */
export async function getPostsByDateRange(startDate: Date, endDate: Date): Promise<BlogPost[]> {
  const posts = await getPublishedPosts()
  return posts.filter((post) => {
    const postDate = new Date(post.frontmatter.date)
    return postDate >= startDate && postDate <= endDate
  })
}

/**
 * Search posts by title and description
 */
export async function searchPosts(query: string): Promise<BlogPost[]> {
  const posts = await getPublishedPosts()
  const normalizedQuery = query.toLowerCase()

  return posts.filter(
    (post) =>
      post.frontmatter.title.toLowerCase().includes(normalizedQuery) ||
      post.frontmatter.description.toLowerCase().includes(normalizedQuery) ||
      post.frontmatter.tags?.some((tag) => tag.toLowerCase().includes(normalizedQuery))
  )
}

/**
 * Get blog post with full metadata for display
 */
export async function getBlogPostWithMetadata(slug: string): Promise<BlogPostWithMetadata | null> {
  const post = await getBlogPostBySlug(slug)
  if (!post) return null

  const wordCount = post.content.trim().split(/\s+/).length
  const excerpt = post.frontmatter.excerpt || post.frontmatter.description

  return {
    ...post,
    excerpt,
    wordCount,
  }
}

/**
 * Get all unique tags from posts
 */
export async function getAllTags(): Promise<string[]> {
  const posts = await getPublishedPosts()
  const tagSet = new Set<string>()

  for (const post of posts) {
    if (Array.isArray(post.frontmatter.tags)) {
      for (const tag of post.frontmatter.tags) {
        tagSet.add(tag)
      }
    }
  }

  return Array.from(tagSet).sort()
}

/**
 * Get tag statistics
 */
export async function getTagStatistics(): Promise<Array<{ tag: string; count: number }>> {
  const posts = await getPublishedPosts()
  const tagCounts = new Map<string, number>()

  for (const post of posts) {
    if (Array.isArray(post.frontmatter.tags)) {
      for (const tag of post.frontmatter.tags) {
        tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1)
      }
    }
  }

  return Array.from(tagCounts.entries())
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count)
}
