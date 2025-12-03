import React from 'react'
import { getPublishedPosts } from '@/lib/content/blog-loader'

/**
 * Archive Index Page
 * Lists all available months with post counts
 */

export const metadata = {
  title: 'Blog Archive',
  description: 'Browse articles by publication date',
}

export const revalidate = 3600 // Revalidate every hour

export default async function ArchiveIndexPage() {
  const posts = await getPublishedPosts()

  // Group posts by year and month
  const archive = new Map<string, { month: number; posts: number }>()

  for (const post of posts) {
    const date = new Date(post.frontmatter.date)
    const year = date.getFullYear().toString()
    const month = date.getMonth() + 1
    const key = `${year}-${month.toString().padStart(2, '0')}`

    if (!archive.has(key)) {
      archive.set(key, { month, posts: 0 })
    }
    const entry = archive.get(key)!
    entry.posts += 1
  }

  // Sort by date (newest first)
  const sortedEntries = Array.from(archive.entries()).sort((a, b) => {
    return b[0].localeCompare(a[0])
  })

  // Group by year
  const byYear = new Map<string, Array<{ key: string; month: number; posts: number }>>()

  for (const [key, data] of sortedEntries) {
    const year = key.split('-')[0]
    if (!byYear.has(year)) {
      byYear.set(year, [])
    }
    byYear.get(year)!.push({ key, month: data.month, posts: data.posts })
  }

  // Sort years
  const sortedYears = Array.from(byYear.keys()).sort((a, b) => Number(b) - Number(a))

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      {/* Hero Section */}
      <section className="border-b border-gray-200 dark:border-white/10 py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-4">
            <nav className="flex items-center gap-2 text-sm text-gray-600 dark:text-white/60 mb-4">
              <a href="/blog" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                Blog
              </a>
              <span>/</span>
              <span className="text-gray-900 dark:text-white">Archive</span>
            </nav>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Blog Archive
            </h1>
            <p className="text-xl text-gray-600 dark:text-white/70">
              Browse all articles by publication date. {posts.length} total posts across {archive.size} months.
            </p>
          </div>
        </div>
      </section>

      {/* Archive Content */}
      <div className="px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {sortedYears.map((year) => (
            <div key={year} className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b border-gray-200 dark:border-white/10">
                {year}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {byYear.get(year)!.map(({ key, month, posts: postCount }) => {
                  const monthDate = new Date(`${year}-${month.toString().padStart(2, '0')}-01`)
                  const monthName = monthDate.toLocaleDateString('en-US', { month: 'long' })
                  const monthKey = month.toString().padStart(2, '0')

                  return (
                    <a
                      key={key}
                      href={`/archive/${year}/${monthKey}`}
                      className="group p-6 border border-gray-200 dark:border-white/10 rounded-lg hover:border-blue-500 dark:hover:border-primary hover:shadow-lg dark:hover:shadow-primary/10 transition-all"
                    >
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-primary transition-colors mb-2">
                        {monthName}
                      </h3>
                      <p className="text-gray-600 dark:text-white/60">
                        {postCount} {postCount === 1 ? 'post' : 'posts'}
                      </p>
                      <div className="text-sm text-blue-600 dark:text-primary font-semibold mt-3">
                        Browse →
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>
          ))}

          {/* Empty State */}
          {archive.size === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-white/60 text-lg mb-6">
                No posts in the archive yet. Check back soon!
              </p>
              <a
                href="/blog"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 dark:bg-primary text-white dark:text-black font-semibold hover:bg-blue-700 dark:hover:bg-primary/90 transition-colors rounded-lg"
              >
                Back to Blog
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
