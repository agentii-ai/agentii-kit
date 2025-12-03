/**
 * Content Validation Utilities
 * Validates blog post frontmatter and markdown structure
 */

export interface BlogPostFrontmatter {
  title: string
  description: string
  date: string
  author: string
  tags: string[]
  cover?: string
  featured?: boolean
  draft?: boolean
  slug?: string
  canonical?: string
  updatedAt?: string
}

export interface ValidationError {
  field: string
  message: string
  severity: 'error' | 'warning'
}

/**
 * Validate frontmatter against schema
 */
export function validateFrontmatter(frontmatter: unknown): ValidationError[] {
  const errors: ValidationError[] = []
  const fm = frontmatter as Record<string, unknown>

  // Required fields
  if (!fm.title || typeof fm.title !== 'string') {
    errors.push({
      field: 'title',
      message: 'Title is required and must be a string',
      severity: 'error',
    })
  } else if (fm.title.length < 10 || fm.title.length > 60) {
    errors.push({
      field: 'title',
      message: 'Title must be between 10 and 60 characters',
      severity: 'error',
    })
  }

  if (!fm.description || typeof fm.description !== 'string') {
    errors.push({
      field: 'description',
      message: 'Description is required and must be a string',
      severity: 'error',
    })
  } else if (fm.description.length < 50 || fm.description.length > 160) {
    errors.push({
      field: 'description',
      message: 'Description must be between 50 and 160 characters (optimal SEO length)',
      severity: 'error',
    })
  }

  if (!fm.date || typeof fm.date !== 'string') {
    errors.push({
      field: 'date',
      message: 'Date is required in YYYY-MM-DD format',
      severity: 'error',
    })
  } else if (!isValidDate(fm.date)) {
    errors.push({
      field: 'date',
      message: 'Date must be valid and in YYYY-MM-DD format',
      severity: 'error',
    })
  } else if (new Date(fm.date) > new Date()) {
    errors.push({
      field: 'date',
      message: 'Publication date cannot be in the future',
      severity: 'warning',
    })
  }

  if (!fm.author || typeof fm.author !== 'string') {
    errors.push({
      field: 'author',
      message: 'Author is required',
      severity: 'error',
    })
  }

  // Tags validation
  if (!fm.tags || !Array.isArray(fm.tags) || fm.tags.length === 0) {
    errors.push({
      field: 'tags',
      message: 'At least one tag is required',
      severity: 'error',
    })
  } else if (fm.tags.length > 5) {
    errors.push({
      field: 'tags',
      message: 'Maximum 5 tags allowed',
      severity: 'warning',
    })
  } else {
    fm.tags.forEach((tag, index) => {
      if (typeof tag !== 'string') {
        errors.push({
          field: `tags[${index}]`,
          message: 'Each tag must be a string',
          severity: 'error',
        })
      } else if (!/^[a-z0-9-]+$/.test(tag)) {
        errors.push({
          field: `tags[${index}]`,
          message: 'Tags must be lowercase alphanumeric with hyphens only',
          severity: 'error',
        })
      }
    })
  }

  // Optional fields validation
  if (fm.draft !== undefined && typeof fm.draft !== 'boolean') {
    errors.push({
      field: 'draft',
      message: 'Draft must be a boolean',
      severity: 'error',
    })
  }

  if (fm.featured !== undefined && typeof fm.featured !== 'boolean') {
    errors.push({
      field: 'featured',
      message: 'Featured must be a boolean',
      severity: 'error',
    })
  }

  if (fm.slug && typeof fm.slug === 'string' && !/^[a-z0-9-]+$/.test(fm.slug)) {
    errors.push({
      field: 'slug',
      message: 'Slug must be lowercase alphanumeric with hyphens only',
      severity: 'error',
    })
  }

  if (fm.canonical && typeof fm.canonical === 'string' && !isValidUrl(fm.canonical)) {
    errors.push({
      field: 'canonical',
      message: 'Canonical must be a valid URL',
      severity: 'error',
    })
  }

  if (fm.updatedAt && typeof fm.updatedAt === 'string' && !isValidDate(fm.updatedAt)) {
    errors.push({
      field: 'updatedAt',
      message: 'Updated date must be in YYYY-MM-DD format',
      severity: 'error',
    })
  }

  return errors
}

/**
 * Validate markdown content structure
 */
export function validateMarkdownContent(content: string): ValidationError[] {
  const errors: ValidationError[] = []

  if (!content || content.trim().length === 0) {
    errors.push({
      field: 'content',
      message: 'Post content cannot be empty',
      severity: 'error',
    })
    return errors
  }

  // Check heading hierarchy
  const headingRegex = /^(#{1,6})\s+/gm
  let match
  let lastLevel = 0
  const headings: Array<{ level: number; text: string }> = []

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length
    const headingLine = content
      .substring(match.index, content.indexOf('\n', match.index))
      .replace(/^#+\s+/, '')

    headings.push({ level, text: headingLine })

    // Check for skipped levels
    if (level > lastLevel + 1 && lastLevel > 0) {
      errors.push({
        field: `heading[${headings.length}]`,
        message: `Heading hierarchy skipped from H${lastLevel} to H${level}`,
        severity: 'warning',
      })
    }
    lastLevel = level
  }

  // Check for multiple H1s
  const h1Count = headings.filter((h) => h.level === 1).length
  if (h1Count === 0) {
    errors.push({
      field: 'content',
      message: 'Post should start with an H1 heading',
      severity: 'warning',
    })
  } else if (h1Count > 1) {
    errors.push({
      field: 'content',
      message: 'Multiple H1 headings found; only one H1 is recommended per post',
      severity: 'warning',
    })
  }

  // Check for images with alt text
  const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)/g
  const imagesWithoutAlt: string[] = []

  while ((match = imageRegex.exec(content)) !== null) {
    const altText = match[1]
    const imagePath = match[2]

    if (!altText || altText.trim().length === 0) {
      imagesWithoutAlt.push(imagePath)
    }
  }

  if (imagesWithoutAlt.length > 0) {
    errors.push({
      field: 'content',
      message: `${imagesWithoutAlt.length} image(s) missing alt text: ${imagesWithoutAlt.join(', ')}`,
      severity: 'warning',
    })
  }

  // Check for code blocks with language specification
  const codeBlockRegex = /```([a-z]*)\n/g
  let codeBlockCount = 0

  while ((match = codeBlockRegex.exec(content)) !== null) {
    codeBlockCount++
    const language = match[1]

    if (!language || language.trim().length === 0) {
      errors.push({
        field: 'content',
        message: `Code block #${codeBlockCount} is missing language specification`,
        severity: 'warning',
      })
    }
  }

  return errors
}

/**
 * Check if a string is a valid ISO date (YYYY-MM-DD)
 */
export function isValidDate(dateString: string): boolean {
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/
  if (!dateRegex.test(dateString)) return false

  const date = new Date(dateString + 'T00:00:00Z')
  return date instanceof Date && !isNaN(date.getTime())
}

/**
 * Check if a string is a valid URL
 */
export function isValidUrl(urlString: string): boolean {
  try {
    new URL(urlString)
    return true
  } catch {
    return false
  }
}

/**
 * Parse and validate YAML frontmatter from markdown
 */
export function parseFrontmatter(content: string): {
  frontmatter: BlogPostFrontmatter | null
  bodyContent: string
  errors: ValidationError[]
} {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/
  const match = content.match(frontmatterRegex)

  if (!match) {
    return {
      frontmatter: null,
      bodyContent: content,
      errors: [
        {
          field: 'frontmatter',
          message: 'No valid frontmatter found. Content must start with ---',
          severity: 'error',
        },
      ],
    }
  }

  try {
    const fmText = match[1]
    const bodyContent = match[2]

    // Simple YAML parser for basic key: value pairs
    const frontmatter: Record<string, unknown> = {}

    fmText.split('\n').forEach((line) => {
      if (!line.trim() || line.startsWith('#')) return

      const colonIndex = line.indexOf(':')
      if (colonIndex === -1) return

      const key = line.substring(0, colonIndex).trim()
      const value = line.substring(colonIndex + 1).trim()

      // Parse value
      if (value === 'true') {
        frontmatter[key] = true
      } else if (value === 'false') {
        frontmatter[key] = false
      } else if (value.startsWith('[') && value.endsWith(']')) {
        // Parse array
        frontmatter[key] = value
          .slice(1, -1)
          .split(',')
          .map((v) => v.trim().replace(/^["']|["']$/g, ''))
      } else {
        // Remove quotes if present
        frontmatter[key] = value.replace(/^["']|["']$/g, '')
      }
    })

    const errors = validateFrontmatter(frontmatter)

    return {
      frontmatter: frontmatter as unknown as BlogPostFrontmatter,
      bodyContent,
      errors,
    }
  } catch (error) {
    return {
      frontmatter: null,
      bodyContent: content,
      errors: [
        {
          field: 'frontmatter',
          message: `Failed to parse frontmatter: ${error instanceof Error ? error.message : 'Unknown error'}`,
          severity: 'error',
        },
      ],
    }
  }
}

/**
 * Generate validation report
 */
export function generateValidationReport(errors: ValidationError[]): string {
  if (errors.length === 0) {
    return '✓ All validations passed!'
  }

  const errorsByField = errors.reduce(
    (acc, err) => {
      if (!acc[err.field]) {
        acc[err.field] = []
      }
      acc[err.field].push(err)
      return acc
    },
    {} as Record<string, ValidationError[]>,
  )

  const report: string[] = []

  Object.entries(errorsByField).forEach(([field, fieldErrors]) => {
    report.push(`\n${field}:`)
    fieldErrors.forEach((err) => {
      const icon = err.severity === 'error' ? '✗' : '⚠'
      report.push(`  ${icon} ${err.message}`)
    })
  })

  return report.join('\n')
}
