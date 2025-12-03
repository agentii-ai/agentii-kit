/**
 * Blog Post Frontmatter Schema
 * Validates and types YAML frontmatter for blog posts
 * Ensures consistent metadata across all published content
 */

export interface BlogPostFrontmatter {
  // Required fields
  title: string
  description: string
  date: string // ISO 8601 format: YYYY-MM-DD
  author: string
  tags: string[]

  // Optional fields
  draft?: boolean // If true, post won't be published
  featured?: boolean // If true, post appears in featured section
  slug?: string // Custom URL slug (auto-generated if not provided)
  canonical?: string // Canonical URL for syndicated content
  updated_at?: string // Last update date in ISO 8601 format

  // Content metadata
  cover?: string // Cover image path relative to public/
  cover_alt?: string // Alt text for cover image
  excerpt?: string // Custom excerpt (uses description if not provided)
  reading_time?: number // Auto-calculated reading time in minutes

  // SEO metadata
  keywords?: string[] // Additional SEO keywords
  og_image?: string // OpenGraph image (defaults to cover)
  twitter_handle?: string // Author Twitter handle for cards

  // Organization
  category?: string // Primary category (blog | docs | announcement | etc)
  series?: string // Series name if part of a series
  series_index?: number // Position in series
}

/**
 * Validate frontmatter schema
 * Returns array of validation errors, empty if valid
 */
export function validateBlogPostFrontmatter(
  frontmatter: unknown
): {
  isValid: boolean
  errors: Array<{ field: string; message: string }>
} {
  const errors: Array<{ field: string; message: string }> = []

  if (!frontmatter || typeof frontmatter !== 'object') {
    return {
      isValid: false,
      errors: [{ field: 'root', message: 'Frontmatter must be an object' }],
    }
  }

  const fm = frontmatter as Record<string, unknown>

  // Required fields validation
  if (!fm.title || typeof fm.title !== 'string') {
    errors.push({
      field: 'title',
      message: 'Title is required and must be a string (10-120 characters)',
    })
  } else if (fm.title.length < 10 || fm.title.length > 120) {
    errors.push({
      field: 'title',
      message: 'Title must be between 10 and 120 characters',
    })
  }

  if (!fm.description || typeof fm.description !== 'string') {
    errors.push({
      field: 'description',
      message: 'Description is required and must be a string (50-160 characters)',
    })
  } else if (fm.description.length < 50 || fm.description.length > 160) {
    errors.push({
      field: 'description',
      message: 'Description must be between 50 and 160 characters (optimal for search results)',
    })
  }

  if (!fm.date || typeof fm.date !== 'string') {
    errors.push({
      field: 'date',
      message: 'Date is required in YYYY-MM-DD format',
    })
  } else if (!isValidISO8601Date(fm.date)) {
    errors.push({
      field: 'date',
      message: 'Date must be valid ISO 8601 format (YYYY-MM-DD)',
    })
  } else if (new Date(fm.date) > new Date()) {
    errors.push({
      field: 'date',
      message: 'Publication date cannot be in the future',
    })
  }

  if (!fm.author || typeof fm.author !== 'string') {
    errors.push({
      field: 'author',
      message: 'Author is required and must be a string',
    })
  } else if (fm.author.length < 2) {
    errors.push({
      field: 'author',
      message: 'Author name must be at least 2 characters',
    })
  }

  // Tags validation
  if (!fm.tags || !Array.isArray(fm.tags) || fm.tags.length === 0) {
    errors.push({
      field: 'tags',
      message: 'At least one tag is required',
    })
  } else if (fm.tags.length > 8) {
    errors.push({
      field: 'tags',
      message: 'Maximum 8 tags allowed',
    })
  } else {
    fm.tags.forEach((tag, index) => {
      if (typeof tag !== 'string') {
        errors.push({
          field: `tags[${index}]`,
          message: 'Each tag must be a string',
        })
      } else if (!/^[a-z0-9-]+$/.test(tag)) {
        errors.push({
          field: `tags[${index}]`,
          message: 'Tags must be lowercase alphanumeric with hyphens only',
        })
      } else if (tag.length < 2 || tag.length > 30) {
        errors.push({
          field: `tags[${index}]`,
          message: 'Each tag must be 2-30 characters',
        })
      }
    })
  }

  // Optional fields validation
  if (fm.draft !== undefined && typeof fm.draft !== 'boolean') {
    errors.push({
      field: 'draft',
      message: 'Draft must be a boolean (true/false)',
    })
  }

  if (fm.featured !== undefined && typeof fm.featured !== 'boolean') {
    errors.push({
      field: 'featured',
      message: 'Featured must be a boolean (true/false)',
    })
  }

  if (fm.slug && typeof fm.slug !== 'string') {
    errors.push({
      field: 'slug',
      message: 'Slug must be a string',
    })
  } else if (fm.slug && typeof fm.slug === 'string' && !/^[a-z0-9-]+$/.test(fm.slug)) {
    errors.push({
      field: 'slug',
      message: 'Slug must be lowercase alphanumeric with hyphens only',
    })
  }

  if (fm.canonical && typeof fm.canonical !== 'string') {
    errors.push({
      field: 'canonical',
      message: 'Canonical must be a valid URL string',
    })
  } else if (fm.canonical && typeof fm.canonical === 'string' && !isValidUrl(fm.canonical)) {
    errors.push({
      field: 'canonical',
      message: 'Canonical must be a valid URL',
    })
  }

  if (fm.updated_at && typeof fm.updated_at !== 'string') {
    errors.push({
      field: 'updated_at',
      message: 'Updated_at must be a date string in YYYY-MM-DD format',
    })
  } else if (fm.updated_at && typeof fm.updated_at === 'string' && !isValidISO8601Date(fm.updated_at)) {
    errors.push({
      field: 'updated_at',
      message: 'Updated_at must be valid ISO 8601 format',
    })
  }

  if (fm.og_image && typeof fm.og_image !== 'string') {
    errors.push({
      field: 'og_image',
      message: 'OG image must be a string path',
    })
  }

  if (fm.keywords !== undefined) {
    if (!Array.isArray(fm.keywords)) {
      errors.push({
        field: 'keywords',
        message: 'Keywords must be an array of strings',
      })
    } else if (fm.keywords.length > 10) {
      errors.push({
        field: 'keywords',
        message: 'Maximum 10 keywords allowed',
      })
    }
  }

  if (fm.series_index !== undefined && typeof fm.series_index !== 'number') {
    errors.push({
      field: 'series_index',
      message: 'Series index must be a number',
    })
  }

  return {
    isValid: errors.length === 0,
    errors,
  }
}

/**
 * Generate slug from title if not provided
 */
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .replace(/^-+|-+$/g, '') // Remove leading/trailing hyphens
}

/**
 * Validate ISO 8601 date format
 */
function isValidISO8601Date(dateString: string): boolean {
  const iso8601Regex = /^\d{4}-\d{2}-\d{2}$/
  if (!iso8601Regex.test(dateString)) return false

  const date = new Date(dateString + 'T00:00:00Z')
  return date instanceof Date && !isNaN(date.getTime())
}

/**
 * Validate URL format
 */
function isValidUrl(urlString: string): boolean {
  try {
    new URL(urlString)
    return true
  } catch {
    return false
  }
}

/**
 * Generate reading time estimate (200 words per minute)
 */
export function estimateReadingTime(content: string): number {
  const wordCount = content.trim().split(/\s+/).length
  return Math.ceil(wordCount / 200)
}

/**
 * Cast unknown frontmatter to typed BlogPostFrontmatter
 */
export function typedFrontmatter(
  frontmatter: Record<string, unknown>
): BlogPostFrontmatter {
  return {
    title: frontmatter.title as string,
    description: frontmatter.description as string,
    date: frontmatter.date as string,
    author: frontmatter.author as string,
    tags: frontmatter.tags as string[],
    draft: (frontmatter.draft as boolean | undefined) ?? false,
    featured: (frontmatter.featured as boolean | undefined) ?? false,
    slug: frontmatter.slug as string | undefined,
    canonical: frontmatter.canonical as string | undefined,
    updated_at: frontmatter.updated_at as string | undefined,
    cover: frontmatter.cover as string | undefined,
    cover_alt: frontmatter.cover_alt as string | undefined,
    excerpt: frontmatter.excerpt as string | undefined,
    keywords: frontmatter.keywords as string[] | undefined,
    og_image: frontmatter.og_image as string | undefined,
    twitter_handle: frontmatter.twitter_handle as string | undefined,
    category: frontmatter.category as string | undefined,
    series: frontmatter.series as string | undefined,
    series_index: frontmatter.series_index as number | undefined,
  }
}
