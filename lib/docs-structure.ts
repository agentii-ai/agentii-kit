import fs from 'fs'
import path from 'path'

// Get docs base path - works in both dev and build contexts
function getDocsBasePath(): string {
  const cwd = process.cwd()
  const docsPath = path.join(cwd, 'content/docs')
  
  // If not found in current directory, try parent (for monorepo setups)
  if (!fs.existsSync(docsPath)) {
    const altPath = path.join(cwd, 'frontend-blog', 'content', 'docs')
    if (fs.existsSync(altPath)) {
      return altPath
    }
  }
  
  return docsPath
}

const docsBasePath = getDocsBasePath()

export interface DocItem {
  title: string
  href: string
  slug: string
  description?: string
}

export interface DocSection {
  title: string
  slug: string
  href: string
  description?: string
  items: DocItem[]
}

/**
 * Read _meta.json file from a directory
 */
function readMetaFile(dirPath: string): Record<string, any> | null {
  const metaPath = path.join(dirPath, '_meta.json')
  if (!fs.existsSync(metaPath)) {
    return null
  }
  try {
    const content = fs.readFileSync(metaPath, 'utf-8')
    return JSON.parse(content)
  } catch (error) {
    console.error(`Error reading meta file ${metaPath}:`, error)
    return null
  }
}

/**
 * Convert slug to title (e.g., "agent-invocation" -> "Agent Invocation")
 */
function slugToTitle(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

/**
 * Get all markdown files in a directory
 */
function getMarkdownFiles(dirPath: string): string[] {
  if (!fs.existsSync(dirPath)) {
    return []
  }
  
  const files = fs.readdirSync(dirPath)
  return files
    .filter(file => file.endsWith('.md') || file.endsWith('.mdx'))
    .map(file => file.replace(/\.(md|mdx)$/, ''))
}

/**
 * Build documentation structure from content/docs directory
 */
export function getDocsStructure(): DocSection[] {
  if (!fs.existsSync(docsBasePath)) {
    console.warn(`Docs base path does not exist: ${docsBasePath}`)
    return []
  }

  const sections: DocSection[] = []
  const dirs = fs.readdirSync(docsBasePath, { withFileTypes: true })

  // Read root _meta.json for section ordering
  const rootMeta = readMetaFile(docsBasePath)
  const orderedSections: string[] = rootMeta ? Object.keys(rootMeta) : []

  // Process each directory
  for (const dir of dirs) {
    if (!dir.isDirectory()) continue
    
    const dirName = dir.name
    // Skip hidden directories and special directories
    if (dirName.startsWith('.') || dirName === 'node_modules') continue

    const dirPath = path.join(docsBasePath, dirName)
    const sectionMeta = readMetaFile(dirPath)
    
    // Get section title from root meta or generate from directory name
    let sectionTitle = rootMeta?.[dirName]?.title || slugToTitle(dirName)
    const sectionSlug = dirName

    const items: DocItem[] = []
    
    if (sectionMeta) {
      // Use _meta.json to get ordered items
      for (const [slug, meta] of Object.entries(sectionMeta)) {
        const itemTitle = typeof meta === 'string' ? meta : (meta as any)?.title || slugToTitle(slug)
        const itemDescription = typeof meta === 'object' && meta !== null ? (meta as any)?.description : undefined
        
        // Check if file exists
        const mdFile = path.join(dirPath, `${slug}.md`)
        const mdxFile = path.join(dirPath, `${slug}.mdx`)
        
        if (fs.existsSync(mdFile) || fs.existsSync(mdxFile)) {
          items.push({
            title: itemTitle,
            slug: slug,
            href: `/docs/${sectionSlug}/${slug}`,
            description: itemDescription,
          })
        }
      }
    } else {
      // Fallback: scan for markdown files
      const mdFiles = getMarkdownFiles(dirPath)
      for (const slug of mdFiles) {
        items.push({
          title: slugToTitle(slug),
          slug: slug,
          href: `/docs/${sectionSlug}/${slug}`,
        })
      }
    }

    if (items.length > 0) {
      sections.push({
        title: sectionTitle,
        slug: sectionSlug,
        href: `/docs/${sectionSlug}`,
        items: items,
      })
    }
  }

  // Sort sections according to root meta order, then alphabetically
  sections.sort((a, b) => {
    const aIndex = orderedSections.indexOf(a.slug)
    const bIndex = orderedSections.indexOf(b.slug)
    
    if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex
    if (aIndex !== -1) return -1
    if (bIndex !== -1) return 1
    return a.title.localeCompare(b.title)
  })

  return sections
}

/**
 * Get all documentation items as a flat list
 */
export function getAllDocs(): DocItem[] {
  const sections = getDocsStructure()
  return sections.flatMap(section => 
    section.items.map(item => ({
      ...item,
      section: section.title,
    }))
  )
}

