'use client'

import React from 'react'
import Link from 'next/link'

/**
 * Related Posts Component
 * Displays 3-5 related blog posts based on tag overlap
 * Uses Jaccard similarity for relevance ranking
 *
 * Props:
 * - posts: Array of related posts with slug, title, description
 * - maxPosts: Maximum number of posts to display (default: 5)
 */

export interface RelatedPost {
  slug: string
  title: string
  description: string
  date: string
  tags: string[]
  cover?: string
}

interface RelatedPostsProps {
  posts: RelatedPost[]
  maxPosts?: number
}

export function RelatedPosts({ posts, maxPosts = 5 }: RelatedPostsProps) {
  const displayPosts = posts.slice(0, maxPosts)

  if (displayPosts.length === 0) {
    return null
  }

  return (
    <section className="py-12 border-t border-gray-200 dark:border-white/10">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
          Related Articles
        </h2>
        <p className="text-gray-600 dark:text-white/60 mt-2">
          Posts that match your interests based on topic tags
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/posts/${post.slug}`}
            className="group block p-6 border border-gray-200 dark:border-white/10 rounded-lg hover:border-blue-500 dark:hover:border-primary hover:shadow-lg dark:hover:shadow-primary/10 transition-all"
          >
            {/* Post Image/Placeholder */}
            {post.cover ? (
              <div className="mb-4 overflow-hidden rounded bg-gray-200 dark:bg-gray-900 h-40">
                <img
                  src={post.cover}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
            ) : (
              <div className="mb-4 h-40 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-slate-700 dark:to-slate-900 rounded flex items-center justify-center">
                <span className="text-gray-400 dark:text-gray-600 text-sm">No cover image</span>
              </div>
            )}

            {/* Title */}
            <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-primary transition-colors mb-2 line-clamp-2">
              {post.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 dark:text-white/60 mb-4 line-clamp-2">
              {post.description}
            </p>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-1 mb-4">
                {post.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="inline-block px-2 py-1 bg-blue-100 dark:bg-primary/20 text-blue-700 dark:text-primary text-xs rounded"
                  >
                    {tag}
                  </span>
                ))}
                {post.tags.length > 2 && (
                  <span className="inline-block px-2 py-1 text-gray-600 dark:text-white/60 text-xs">
                    +{post.tags.length - 2}
                  </span>
                )}
              </div>
            )}

            {/* Date and Link */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-white/10">
              <time className="text-xs text-gray-500 dark:text-white/40">
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: '2-digit',
                })}
              </time>
              <span className="text-sm font-semibold text-blue-600 dark:text-primary group-hover:translate-x-1 transition-transform">
                Read →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default RelatedPosts
