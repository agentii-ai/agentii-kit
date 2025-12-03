#!/usr/bin/env ts-node

/**
 * Content Validation Script
 * Validates all markdown files in the content/blog directory
 * Checks frontmatter schema, file naming, and content structure
 */

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { validateBlogPostFrontmatter } from '../lib/schemas/blog-post'

interface ValidationResult {
  file: string
  isValid: boolean
  errors: Array<{ field: string; message: string }>
  warnings: string[]
}

function validateFile(filePath: string): ValidationResult {
  const fileName = path.basename(filePath)
  const result: ValidationResult = {
    file: fileName,
    isValid: true,
    errors: [],
    warnings: [],
  }

  // Validate filename format (YYYY-MM-DD-slug.md)
  if (!/^\d{4}-\d{2}-\d{2}-/.test(fileName)) {
    result.errors.push({
      field: 'filename',
      message: 'File must follow naming convention: YYYY-MM-DD-slug.md',
    })
    result.isValid = false
  }

  try {
    const content = fs.readFileSync(filePath, 'utf-8')
    const { data, content: markdown } = matter(content)

    // Validate frontmatter
    const validation = validateBlogPostFrontmatter(data)
    if (!validation.isValid) {
      result.errors.push(...validation.errors)
      result.isValid = false
    }

    // Check content
    if (!markdown || markdown.trim().length === 0) {
      result.warnings.push('File has no content body')
    }

    // Check word count
    const wordCount = markdown.trim().split(/\s+/).length
    if (wordCount < 100) {
      result.warnings.push(`Content is very short (${wordCount} words). Consider adding more detail.`)
    }

    // Check for missing frontmatter fields
    if (!data.title) {
      result.errors.push({ field: 'title', message: 'Title is required' })
      result.isValid = false
    }
  } catch (error) {
    result.errors.push({
      field: 'file',
      message: `Failed to parse file: ${error instanceof Error ? error.message : 'Unknown error'}`,
    })
    result.isValid = false
  }

  return result
}

async function validateAllPosts(): Promise<void> {
  const contentDir = path.join(process.cwd(), 'content', 'blog')

  if (!fs.existsSync(contentDir)) {
    console.log(`✓ Content directory not found: ${contentDir}`)
    console.log('Run this script after creating content files.')
    return
  }

  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith('.md'))

  if (files.length === 0) {
    console.log('ℹ No markdown files found in content/blog')
    return
  }

  console.log(`\n📝 Validating ${files.length} blog post(s)...\n`)

  const results = files.map((file) => validateFile(path.join(contentDir, file)))

  let validCount = 0
  let invalidCount = 0

  for (const result of results) {
    if (result.isValid) {
      console.log(`✓ ${result.file}`)
      validCount++
    } else {
      console.log(`✗ ${result.file}`)
      invalidCount++
      for (const error of result.errors) {
        console.log(`  ❌ ${error.field}: ${error.message}`)
      }
    }

    for (const warning of result.warnings) {
      console.log(`  ⚠️  ${warning}`)
    }
  }

  console.log(`\n${'='.repeat(50)}`)
  console.log(`Total: ${files.length} | Valid: ${validCount} | Invalid: ${invalidCount}`)

  if (invalidCount > 0) {
    console.log(`\n❌ Validation failed. Please fix the errors above.`)
    process.exit(1)
  } else {
    console.log(`\n✅ All files passed validation!`)
    process.exit(0)
  }
}

validateAllPosts().catch((error) => {
  console.error('Validation script error:', error)
  process.exit(1)
})
