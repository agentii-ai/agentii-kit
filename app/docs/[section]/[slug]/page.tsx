import React from 'react'
import { notFound } from 'next/navigation'
import { getDocPageBySlug, getAllDocPages } from '@/lib/content/doc-loader'
import { getDocsStructure } from '@/lib/docs-structure'
import MarkdownRenderer from '@/components/MarkdownRenderer'
import Link from 'next/link'

/**
 * Dynamic Documentation Page
 * Displays individual documentation page with content and navigation
 */

interface DocPageProps {
  params: {
    section: string
    slug: string
  }
}

// Generate static params for all doc pages
export async function generateStaticParams() {
  const pages = await getAllDocPages()
  return pages.map((page) => ({
    section: page.section,
    slug: page.slug,
  }))
}

export async function generateMetadata({ params }: DocPageProps) {
  const docPage = await getDocPageBySlug(params.section, params.slug)

  if (!docPage) {
    return {
      title: 'Documentation Not Found',
      description: 'The documentation page you are looking for does not exist.',
    }
  }

  const title = docPage.frontmatter.title || docPage.slug
  const description = docPage.frontmatter.description || `Documentation for ${title}`

  return {
    title: `${title} - Agentii Documentation`,
    description,
    openGraph: {
      type: 'article',
      title,
      description,
      url: `/docs/${params.section}/${params.slug}`,
    },
  }
}

export const revalidate = 3600 // Revalidate every hour

export default async function DocPage({ params }: DocPageProps) {
  const docPage = await getDocPageBySlug(params.section, params.slug)

  if (!docPage) {
    notFound()
  }

  // Get docs structure for navigation
  const docsStructure = getDocsStructure()
  const currentSection = docsStructure.find(s => s.slug === params.section)
  
  // Get current page index and next/prev pages
  let currentIndex = -1
  let nextPage: { title: string; href: string } | null = null
  let prevPage: { title: string; href: string } | null = null

  if (currentSection) {
    currentIndex = currentSection.items.findIndex(item => item.slug === params.slug)
    
    // Find previous page (in same section or previous section)
    if (currentIndex > 0) {
      prevPage = {
        title: currentSection.items[currentIndex - 1].title,
        href: currentSection.items[currentIndex - 1].href,
      }
    } else {
      // Look in previous section
      const sectionIndex = docsStructure.findIndex(s => s.slug === params.section)
      if (sectionIndex > 0) {
        const prevSection = docsStructure[sectionIndex - 1]
        if (prevSection.items.length > 0) {
          const lastItem = prevSection.items[prevSection.items.length - 1]
          prevPage = {
            title: lastItem.title,
            href: lastItem.href,
          }
        }
      }
    }

    // Find next page (in same section or next section)
    if (currentIndex < currentSection.items.length - 1) {
      nextPage = {
        title: currentSection.items[currentIndex + 1].title,
        href: currentSection.items[currentIndex + 1].href,
      }
    } else {
      // Look in next section
      const sectionIndex = docsStructure.findIndex(s => s.slug === params.section)
      if (sectionIndex < docsStructure.length - 1) {
        const nextSection = docsStructure[sectionIndex + 1]
        if (nextSection.items.length > 0) {
          nextPage = {
            title: nextSection.items[0].title,
            href: nextSection.items[0].href,
          }
        }
      }
    }
  }

  const title = docPage.frontmatter.title || docPage.slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
  const description = docPage.frontmatter.description

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <div className="border-b border-gray-200 px-6 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-600 mb-6">
            <Link href="/docs" className="hover:text-primary transition-colors">
              Documentation
            </Link>
            <span>/</span>
            {currentSection && (
              <>
                <Link href={currentSection.href} className="hover:text-primary transition-colors">
                  {currentSection.title}
                </Link>
                <span>/</span>
              </>
            )}
            <span className="text-gray-900">{title}</span>
          </nav>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h1>

          {/* Description */}
          {description && (
            <p className="text-xl text-gray-600 mb-6">
              {description}
            </p>
          )}

          {/* Meta Info */}
          {docPage.readingTime && (
            <div className="text-sm text-gray-500">
              {docPage.readingTime} min read
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <article className="prose prose-lg prose-gray max-w-none prose-headings:text-gray-900 prose-a:text-primary hover:prose-a:text-blue-700 prose-code:text-amber-700 prose-pre:bg-gray-100 prose-ul:pl-0 prose-ul:ml-6">
            <MarkdownRenderer
              content={docPage.content}
              processedContent={undefined}
              className=""
            />
          </article>
        </div>
      </div>

      {/* Navigation */}
      <div className="border-t border-gray-200 px-6 py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center gap-4">
            {prevPage ? (
              <Link
                href={prevPage.href}
                className="flex-1 p-6 border border-gray-200 rounded-lg hover:border-primary hover:shadow-md transition-all group"
              >
                <div className="text-sm text-gray-500 mb-2">Previous</div>
                <div className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors">
                  ← {prevPage.title}
                </div>
              </Link>
            ) : (
              <div className="flex-1" />
            )}

            {nextPage ? (
              <Link
                href={nextPage.href}
                className="flex-1 p-6 border border-gray-200 rounded-lg hover:border-primary hover:shadow-md transition-all group text-right"
              >
                <div className="text-sm text-gray-500 mb-2">Next</div>
                <div className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors">
                  {nextPage.title} →
                </div>
              </Link>
            ) : (
              <div className="flex-1" />
            )}
          </div>

          {/* Back to Docs */}
          <div className="mt-8 text-center">
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-colors rounded-lg"
            >
              ← Back to Documentation
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

