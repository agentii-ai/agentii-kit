import React from 'react'
import Link from 'next/link'
import { formatDate, formatReadingTime, getReadingTime } from '@/lib/utils/date'

/**
 * FeaturedPost Component
 * Displays a featured blog post with large hero image and prominent placement
 * Supports light and dark modes
 *
 * Props:
 * - title: Post title
 * - description: Post meta description
 * - slug: URL slug for the post
 * - date: Publication date
 * - author: Post author name
 * - tags: Array of tags for categorization
 * - cover: Optional cover image path
 * - content: Full post content (for reading time calculation)
 */

interface FeaturedPostProps {
  title: string
  description: string
  slug: string
  date: string
  author: string
  tags: string[]
  cover?: string
  content?: string
}

export function FeaturedPost({
  title,
  description,
  slug,
  date,
  author,
  tags,
  cover,
  content = '',
}: FeaturedPostProps) {
  const readingTime = getReadingTime(content)

  return (
    <article className="group">
      <Link href={`/blog/posts/${slug}`}>
        <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-white/20 bg-white dark:bg-black hover:border-primary/50 transition-all duration-300 shadow-elevated hover:shadow-xl dark:hover:shadow-xl dark:hover:shadow-primary/10">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left: Content */}
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-between">
              {/* Badge & Meta */}
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <span className="inline-block bg-gradient-to-r from-primary to-primary/70 text-white text-xs font-bold uppercase px-4 py-1 rounded-full">
                    Featured
                  </span>
                  <span className="text-gray-600 dark:text-white/60 text-xs font-medium">{formatDate(date)}</span>
                </div>

                {/* Title */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary transition-colors duration-300">
                  {title}
                </h2>

                {/* Description */}
                <p className="text-base md:text-lg text-gray-700 dark:text-white/80 leading-relaxed mb-6">
                  {description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block text-gray-700 dark:text-white/70 text-xs px-3 py-1 rounded border border-gray-300 dark:border-white/20 hover:border-primary hover:text-primary transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Meta: Author, Reading Time */}
                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-white/60">
                  <span>By {author}</span>
                  <span>•</span>
                  <span>{formatReadingTime(readingTime)}</span>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="inline-flex items-center gap-2 text-primary font-semibold">
                  Read Full Article →
                </span>
              </div>
            </div>

            {/* Right: Hero Image/Gradient */}
            <div className="relative h-64 lg:h-full min-h-96 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-slate-700 dark:to-slate-900 overflow-hidden flex items-center justify-center">
              {cover ? (
                <img
                  src={cover}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="text-gray-400 dark:text-white/20 text-7xl font-bold">
                  {title.charAt(0)}
                </div>
              )}
            </div>
          </div>
        </div>
      </Link>
    </article>
  )
}
