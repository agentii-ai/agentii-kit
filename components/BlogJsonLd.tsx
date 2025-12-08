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
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
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
