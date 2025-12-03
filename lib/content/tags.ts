/**
 * Tag Extraction and Indexing System
 * Automatically extracts, validates, and indexes tags from blog posts
 * for categorization and archive functionality
 */

import type { BlogPostFrontmatter } from '@/lib/schemas/blog-post'

export interface TagMetadata {
  tag: string
  count: number
  posts: string[] // Array of post slugs with this tag
  description?: string
  color?: string // Optional color for tag badge
}

export interface TagIndex {
  tags: Map<string, TagMetadata>
  lastUpdated: Date
  totalPosts: number
  totalTags: number
}

/**
 * Extract unique tags from all posts
 */
export function extractUniqueTags(
  posts: Array<{
    slug: string
    frontmatter: BlogPostFrontmatter
    draft?: boolean
  }>
): Set<string> {
  const tags = new Set<string>()

  for (const post of posts) {
    // Skip draft posts
    if (post.draft) continue

    if (post.frontmatter.tags && Array.isArray(post.frontmatter.tags)) {
      for (const tag of post.frontmatter.tags) {
        // Validate tag format
        if (typeof tag === 'string' && /^[a-z0-9-]+$/.test(tag)) {
          tags.add(tag)
        }
      }
    }
  }

  return tags
}

/**
 * Build complete tag index from all posts
 */
export function buildTagIndex(
  posts: Array<{
    slug: string
    frontmatter: BlogPostFrontmatter
    draft?: boolean
  }>
): TagIndex {
  const tagMap = new Map<string, TagMetadata>()

  for (const post of posts) {
    // Skip draft posts from indexing
    if (post.draft) continue

    if (!post.frontmatter.tags || !Array.isArray(post.frontmatter.tags)) {
      continue
    }

    for (const tag of post.frontmatter.tags) {
      if (typeof tag !== 'string' || !/^[a-z0-9-]+$/.test(tag)) {
        continue
      }

      if (!tagMap.has(tag)) {
        tagMap.set(tag, {
          tag,
          count: 0,
          posts: [],
          description: getDefaultTagDescription(tag),
        })
      }

      const metadata = tagMap.get(tag)!
      metadata.count += 1
      metadata.posts.push(post.slug)
    }
  }

  // Sort posts within each tag by date (newest first)
  for (const metadata of tagMap.values()) {
    metadata.posts.sort((a, b) => {
      const postA = posts.find((p) => p.slug === a)
      const postB = posts.find((p) => p.slug === b)
      if (!postA || !postB) return 0
      return (
        new Date(postB.frontmatter.date).getTime() -
        new Date(postA.frontmatter.date).getTime()
      )
    })
  }

  return {
    tags: tagMap,
    lastUpdated: new Date(),
    totalPosts: posts.filter((p) => !p.draft).length,
    totalTags: tagMap.size,
  }
}

/**
 * Get posts with specific tag
 */
export function getPostsByTag(
  index: TagIndex,
  tag: string,
  posts: Array<{
    slug: string
    frontmatter: BlogPostFrontmatter
    draft?: boolean
  }>
): Array<{
  slug: string
  frontmatter: BlogPostFrontmatter
}> {
  const metadata = index.tags.get(tag)
  if (!metadata) return []

  return metadata.posts
    .map((slug) => {
      const post = posts.find((p) => p.slug === slug && !p.draft)
      return post ? { slug: post.slug, frontmatter: post.frontmatter } : null
    })
    .filter((post): post is { slug: string; frontmatter: BlogPostFrontmatter } =>
      Boolean(post)
    )
}

/**
 * Get related posts based on tag overlap
 */
export function getRelatedPostsByTags(
  currentPostTags: string[],
  posts: Array<{
    slug: string
    frontmatter: BlogPostFrontmatter
    draft?: boolean
  }>,
  currentPostSlug: string,
  maxResults: number = 5
): Array<{
  slug: string
  frontmatter: BlogPostFrontmatter
  relevance: number
}> {
  const currentTagSet = new Set(currentPostTags)
  const relatedPosts: Array<{
    slug: string
    frontmatter: BlogPostFrontmatter
    relevance: number
  }> = []

  for (const post of posts) {
    // Skip current post and drafts
    if (post.slug === currentPostSlug || post.draft) continue

    if (!post.frontmatter.tags || !Array.isArray(post.frontmatter.tags)) {
      continue
    }

    // Calculate tag overlap (Jaccard similarity)
    const postTagSet = new Set(post.frontmatter.tags)
    const intersection = new Set(
      [...currentTagSet].filter((tag) => postTagSet.has(tag))
    )
    const union = new Set([...currentTagSet, ...postTagSet])

    if (intersection.size === 0) continue // No tag overlap

    const relevance = intersection.size / union.size

    relatedPosts.push({
      slug: post.slug,
      frontmatter: post.frontmatter,
      relevance,
    })
  }

  // Sort by relevance (highest first), then by date
  relatedPosts.sort((a, b) => {
    const relevanceDiff = b.relevance - a.relevance
    if (relevanceDiff !== 0) return relevanceDiff

    return (
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
    )
  })

  return relatedPosts.slice(0, maxResults)
}

/**
 * Get tag statistics
 */
export function getTagStatistics(
  index: TagIndex
): Array<{
  tag: string
  count: number
  percentage: number
}> {
  return Array.from(index.tags.values())
    .map((metadata) => ({
      tag: metadata.tag,
      count: metadata.count,
      percentage: (metadata.count / index.totalPosts) * 100,
    }))
    .sort((a, b) => b.count - a.count)
}

/**
 * Get popular tags (top N)
 */
export function getPopularTags(
  index: TagIndex,
  limit: number = 10
): Array<{ tag: string; count: number }> {
  return Array.from(index.tags.values())
    .sort((a, b) => b.count - a.count)
    .slice(0, limit)
    .map((metadata) => ({
      tag: metadata.tag,
      count: metadata.count,
    }))
}

/**
 * Validate tag format
 */
export function isValidTag(tag: string): boolean {
  if (typeof tag !== 'string') return false
  if (tag.length < 2 || tag.length > 30) return false
  return /^[a-z0-9-]+$/.test(tag)
}

/**
 * Get default description for common tags
 * Can be extended with custom descriptions from config
 */
function getDefaultTagDescription(tag: string): string {
  const descriptions: Record<string, string> = {
    'ai-research': 'Research and innovations in artificial intelligence',
    'financial-analysis': 'Financial data analysis and insights',
    'technical': 'Technical deep dives and implementation guides',
    'tutorial': 'Step-by-step tutorials and how-to guides',
    'case-study': 'Real-world case studies and applications',
    'announcement': 'Product announcements and company news',
    'integration': 'Integration guides and API documentation',
    'performance': 'Performance optimization and benchmarks',
    'best-practices': 'Industry best practices and recommendations',
    'security': 'Security considerations and best practices',
  }

  return descriptions[tag] || `Posts about ${tag.replace(/-/g, ' ')}`
}

/**
 * Generate tag slug for URLs
 */
export function generateTagSlug(tag: string): string {
  // Tags already use slug format, just lowercase ensure
  return tag.toLowerCase()
}

/**
 * Parse tags from string (comma or space separated)
 */
export function parseTagsFromString(input: string): string[] {
  return input
    .split(/[,\s]+/)
    .map((tag) => tag.toLowerCase().trim())
    .filter((tag) => isValidTag(tag))
}

/**
 * Autocomplete suggestions for tags
 */
export function getTagSuggestions(
  index: TagIndex,
  input: string,
  limit: number = 5
): string[] {
  const normalized = input.toLowerCase()

  return Array.from(index.tags.keys())
    .filter((tag) => tag.includes(normalized))
    .sort((a, b) => {
      // Prioritize tags that start with the input
      const aStarts = a.startsWith(normalized)
      const bStarts = b.startsWith(normalized)
      if (aStarts && !bStarts) return -1
      if (!aStarts && bStarts) return 1

      // Then by post count
      const countA = index.tags.get(a)?.count || 0
      const countB = index.tags.get(b)?.count || 0
      return countB - countA
    })
    .slice(0, limit)
}
