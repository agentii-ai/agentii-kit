import React from 'react'
import Link from 'next/link'
import { formatDate } from '@/lib/utils/date'

/**
 * PostCard Component
 * Displays a blog post preview card with gradient placeholder
 * Supports light and dark modes
 *
 * Props:
 * - title: Post title
 * - description: Post meta description
 * - slug: URL slug for the post
 * - date: Publication date
 * - tags: Array of tags for categorization
 * - cover: Optional cover image path
 */

interface PostCardProps {
  title: string
  description: string
  slug: string
  date: string
  tags: string[]
  cover?: string
}

const gradients = [
  'from-gray-100 to-gray-200 dark:from-slate-700 dark:to-slate-900',
  'from-blue-100 to-blue-200 dark:from-blue-500 dark:to-purple-700',
  'from-green-100 to-emerald-200 dark:from-emerald-600 dark:to-teal-600',
]

export function PostCard({
  title,
  description,
  slug,
  date,
  tags,
  cover,
}: PostCardProps) {
  // Use consistent gradient based on slug hash
  const gradientIndex = slug.charCodeAt(0) % gradients.length
  const gradient = gradients[gradientIndex]

  return (
    <article className="group">
      <Link href={`/blog/posts/${slug}`}>
        <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-black hover:border-gray-300 dark:hover:border-white/20 transition-all duration-300 shadow-card hover:shadow-elevated dark:hover:shadow-lg dark:hover:shadow-primary/10">
          {/* Card Image/Gradient Area */}
          <div
            className={`relative h-48 bg-gradient-to-br ${gradient} overflow-hidden flex items-center justify-center`}
          >
            {cover ? (
              <img
                src={cover}
                alt={title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <div className="text-gray-400 dark:text-white/20 text-6xl font-bold group-hover:text-gray-500 dark:group-hover:text-white/30 transition-colors duration-300">
                {title.charAt(0)}
              </div>
            )}
          </div>

          {/* Card Content */}
          <div className="p-6">
            {/* Date & Primary Tag */}
            <div className="flex items-center justify-between gap-3 mb-3">
              <div className="inline-block">
                <span className="inline-block bg-primary text-white text-xs font-semibold uppercase px-3 py-1 rounded">
                  {tags[0] || 'Article'}
                </span>
              </div>
              <span className="text-gray-600 dark:text-white/50 text-xs font-medium">
                {formatDate(date)}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-gray-900 dark:text-white text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
              {title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 dark:text-white/70 text-sm line-clamp-2 mb-4">
              {description}
            </p>

            {/* Tags (additional) */}
            {tags.length > 1 && (
              <div className="flex flex-wrap gap-2">
                {tags.slice(1).map((tag) => (
                  <span
                    key={tag}
                    className="inline-block text-gray-700 dark:text-white/60 text-xs px-2 py-1 rounded border border-gray-300 dark:border-white/10 hover:border-primary dark:hover:border-white/30 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* CTA */}
            <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-primary font-semibold text-sm">
                Read more →
              </span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  )
}
