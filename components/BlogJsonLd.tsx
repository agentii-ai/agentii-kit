import React from 'react'

/**
 * BlogJsonLd Component
 * Generates JSON-LD structured data for blog articles
 * Implements schema.org/BlogPosting for rich search results
 */

interface BlogJsonLdProps {
  title: string
  description: string
  datePublished: string
  dateModified?: string
  authorName: string
  authorUrl?: string
  publisherName?: string
  publisherLogoUrl?: string
  imageUrl?: string
  url: string
  keywords?: string[]
  articleBody?: string
}

// Helper to ensure dates include a time and timezone for validators
// Accepts dates in YYYY-MM-DD or full ISO format and always returns
// an ISO 8601 datetime string with timezone information.
function toIsoDateTime(date: string): string {
  if (!date) return ''

  // If the string already contains a time or timezone, use it as-is
  if (date.includes('T')) {
    return date
  }

  // Interpret plain dates as midnight UTC
  return `${date}T00:00:00Z`
}

export default function BlogJsonLd({
  title,
  description,
  datePublished,
  dateModified,
  authorName,
  authorUrl = 'https://kits.agentii.ai/about',
  publisherName = 'Agentii Kit',
  publisherLogoUrl = 'https://kits.agentii.ai/logo.png',
  imageUrl,
  url,
  keywords = [],
  articleBody,
}: BlogJsonLdProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: description,
    image: imageUrl || 'https://kits.agentii.ai/default-og-image.png',
    datePublished: toIsoDateTime(datePublished),
    dateModified: toIsoDateTime(dateModified || datePublished),
    author: {
      '@type': 'Person',
      name: authorName,
      url: authorUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: publisherName,
      logo: {
        '@type': 'ImageObject',
        url: publisherLogoUrl,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    keywords: keywords.join(', '),
    ...(articleBody && { articleBody }),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
