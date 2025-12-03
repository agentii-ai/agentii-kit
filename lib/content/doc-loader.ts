import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const docsBasePath = path.join(process.cwd(), 'content/docs')

export interface DocPage {
  slug: string
  section: string
  content: string
  frontmatter: {
    title?: string
    description?: string
    [key: string]: any
  }
  readingTime?: number
}

/**
 * Get all documentation pages
 */
export async function getAllDocPages(): Promise<DocPage[]> {
  if (!fs.existsSync(docsBasePath)) {
    return []
  }

  const pages: DocPage[] = []
  const sections = fs.readdirSync(docsBasePath, { withFileTypes: true })

  for (const section of sections) {
    if (!section.isDirectory() || section.name.startsWith('.')) continue

    const sectionPath = path.join(docsBasePath, section.name)
    const files = fs.readdirSync(sectionPath)

    for (const file of files) {
      if (!file.endsWith('.md') && !file.endsWith('.mdx')) continue
      if (file === '_meta.json') continue

      const filePath = path.join(sectionPath, file)
      const fileContent = fs.readFileSync(filePath, 'utf-8')
      const { data: frontmatter, content } = matter(fileContent)

      const slug = file.replace(/\.(md|mdx)$/, '')

      // Calculate reading time (approximate: 200 words per minute)
      const wordCount = content.split(/\s+/).length
      const readingTime = Math.ceil(wordCount / 200)

      pages.push({
        slug,
        section: section.name,
        content,
        frontmatter: frontmatter || {},
        readingTime,
      })
    }
  }

  return pages
}

/**
 * Get a documentation page by section and slug
 */
export async function getDocPageBySlug(section: string, slug: string): Promise<DocPage | null> {
  const filePath = path.join(docsBasePath, section, `${slug}.md`)
  const mdxPath = path.join(docsBasePath, section, `${slug}.mdx`)

  let actualPath: string | null = null
  if (fs.existsSync(filePath)) {
    actualPath = filePath
  } else if (fs.existsSync(mdxPath)) {
    actualPath = mdxPath
  } else {
    return null
  }

  const fileContent = fs.readFileSync(actualPath, 'utf-8')
  const { data: frontmatter, content } = matter(fileContent)

  // Calculate reading time
  const wordCount = content.split(/\s+/).length
  const readingTime = Math.ceil(wordCount / 200)

  return {
    slug,
    section,
    content,
    frontmatter: frontmatter || {},
    readingTime,
  }
}

/**
 * Get all documentation pages in a section
 */
export async function getDocPagesBySection(section: string): Promise<DocPage[]> {
  const sectionPath = path.join(docsBasePath, section)
  
  if (!fs.existsSync(sectionPath)) {
    return []
  }

  const pages: DocPage[] = []
  const files = fs.readdirSync(sectionPath)

  for (const file of files) {
    if (!file.endsWith('.md') && !file.endsWith('.mdx')) continue
    if (file === '_meta.json') continue

    const filePath = path.join(sectionPath, file)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data: frontmatter, content } = matter(fileContent)

    const slug = file.replace(/\.(md|mdx)$/, '')
    const wordCount = content.split(/\s+/).length
    const readingTime = Math.ceil(wordCount / 200)

    pages.push({
      slug,
      section,
      content,
      frontmatter: frontmatter || {},
      readingTime,
    })
  }

  return pages
}

