#!/usr/bin/env ts-node

/**
 * Frontmatter Validation Script
 * Lightweight wrapper used by CI (seo-check.yml)
 * Validates blog post frontmatter using the shared schema.
 */

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { validateBlogPostFrontmatter } from '../lib/schemas/blog-post'

interface ValidationResult {
  file: string
  isValid: boolean
  errors: Array<{ field: string; message: string }>
}

function validateFile(filePath: string): ValidationResult {
  const fileName = path.basename(filePath)
  const content = fs.readFileSync(filePath, 'utf-8')
  const { data } = matter(content)

  const result: ValidationResult = {
    file: fileName,
    isValid: true,
    errors: [],
  }

  const validation = validateBlogPostFrontmatter(data)
  if (!validation.isValid) {
    result.errors.push(...validation.errors)
    result.isValid = false
  }

  return result
}

function getBlogDir(): string {
  return path.join(process.cwd(), 'content', 'blog')
}

async function main(): Promise<void> {
  const blogDir = getBlogDir()

  if (!fs.existsSync(blogDir)) {
    console.log(`✓ Blog directory not found: ${blogDir}`)
    console.log('Run this script after creating content files.')
    return
  }

  const files = fs.readdirSync(blogDir).filter((f) => f.endsWith('.md'))

  if (files.length === 0) {
    console.log('ℹ No markdown files found in content/blog')
    return
  }

  console.log(`\n🔍 Validating frontmatter for ${files.length} blog post(s)...\n`)

  const results = files.map((file) => validateFile(path.join(blogDir, file)))

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
  }

  console.log(`\n${'='.repeat(50)}`)
  console.log(`Total: ${files.length} | Valid: ${validCount} | Invalid: ${invalidCount}`)

  if (invalidCount > 0) {
    console.log('\n❌ Frontmatter validation failed. See errors above.')
    process.exit(1)
  } else {
    console.log('\n✅ All frontmatter passed validation!')
    process.exit(0)
  }
}

main().catch((error) => {
  console.error('Frontmatter validation script error:', error)
  process.exit(1)
})
