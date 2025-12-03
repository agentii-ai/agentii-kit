import React from 'react'
import { PostCard } from '@/components/PostCard'
import { getPublishedPosts } from '@/lib/content/blog-loader'

/**
 * Date-Based Archive Page
 * Displays posts published in a specific month
 */

interface ArchivePageProps {
  params: {
    year: string
    month: string
  }
}

// Generate static params for all year/month combinations
export async function generateStaticParams() {
  const posts = await getPublishedPosts()
  const params = new Set<string>()

  for (const post of posts) {
    const date = new Date(post.frontmatter.date)
    const year = date.getFullYear().toString()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    params.add(`${year}-${month}`)
  }

  return Array.from(params).map((param) => {
    const [year, month] = param.split('-')
    return { year, month }
  })
}

export async function generateMetadata({ params }: ArchivePageProps) {
  const monthName = new Date(`${params.year}-${params.month}-01`).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  })

  return {
    title: `Posts from ${monthName}`,
    description: `Browse articles published in ${monthName}`,
    openGraph: {
      type: 'website',
      title: `${monthName} - Agentii Blog Archive`,
      description: `Articles from ${monthName}`,
      url: `/archive/${params.year}/${params.month}`,
    },
  }
}

export const revalidate = 3600 // Revalidate every hour

export default async function ArchivePage({ params }: ArchivePageProps) {
  const allPosts = await getPublishedPosts()

  // Filter posts by year and month
  const archivePosts = allPosts.filter((post) => {
    const date = new Date(post.frontmatter.date)
    const postYear = date.getFullYear().toString()
    const postMonth = String(date.getMonth() + 1).padStart(2, '0')
    return postYear === params.year && postMonth === params.month
  })

  // Get all years and months for sidebar
  const dateMap = new Map<string, number>()
  for (const post of allPosts) {
    const date = new Date(post.frontmatter.date)
    const year = date.getFullYear().toString()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const key = `${year}-${month}`
    dateMap.set(key, (dateMap.get(key) || 0) + 1)
  }

  // Format month name for display
  const monthName = new Date(`${params.year}-${params.month}-01`).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  })

  // Sort dates in reverse chronological order
  const sortedDates = Array.from(dateMap.entries()).sort((a, b) => {
    const [yearA, monthA] = a[0].split('-')
    const [yearB, monthB] = b[0].split('-')
    const dateA = new Date(`${yearA}-${monthA}-01`)
    const dateB = new Date(`${yearB}-${monthB}-01`)
    return dateB.getTime() - dateA.getTime()
  })

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      {/* Hero Section */}
      <section className="border-b border-gray-200 dark:border-white/10 py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-4">
            <div>
              <nav className="flex items-center gap-2 text-sm text-gray-600 dark:text-white/60 mb-4">
                <a href="/blog" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                  Blog
                </a>
                <span>/</span>
                <a href="/archive" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                  Archive
                </a>
                <span>/</span>
                <span className="text-gray-900 dark:text-white">{monthName}</span>
              </nav>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                {monthName}
              </h1>
              <p className="text-xl text-gray-600 dark:text-white/70">
                {archivePosts.length === 0
                  ? 'No posts published this month.'
                  : `${archivePosts.length} ${archivePosts.length === 1 ? 'post' : 'posts'} published`}
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="px-6 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {archivePosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {archivePosts.map((post) => (
                  <PostCard
                    key={post.slug}
                    title={post.frontmatter.title}
                    description={post.frontmatter.description}
                    slug={post.slug}
                    date={post.frontmatter.date}
                    tags={post.frontmatter.tags}
                    cover={post.frontmatter.cover}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 dark:text-white/60 text-lg mb-6">
                  No posts published in {monthName}. Try browsing other months.
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

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 dark:bg-white/5 rounded-lg p-6 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Browse Archive</h3>
              <div className="space-y-2">
                {sortedDates.map(([dateKey, count]) => {
                  const [year, month] = dateKey.split('-')
                  const isActive = year === params.year && month === params.month
                  const dateLabel = new Date(`${year}-${month}-01`).toLocaleDateString('en-US', {
                    month: 'short',
                    year: 'numeric',
                  })

                  return (
                    <a
                      key={dateKey}
                      href={`/archive/${year}/${month}`}
                      className={`block px-3 py-2 rounded transition-colors ${
                        isActive
                          ? 'bg-blue-600 dark:bg-primary text-white dark:text-black font-semibold'
                          : 'text-gray-700 dark:text-white/80 hover:bg-gray-200 dark:hover:bg-white/10'
                      }`}
                    >
                      <span>{dateLabel}</span>
                      <span className={`ml-2 text-sm ${isActive ? 'text-white dark:text-black' : 'text-gray-600 dark:text-white/60'}`}>
                        ({count})
                      </span>
                    </a>
                  )
                })}
              </div>

              {/* Archive Stats */}
              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-white/10">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Archive Stats</h4>
                <div className="space-y-2 text-sm text-gray-600 dark:text-white/60">
                  <div>
                    <span className="font-semibold">Total Periods:</span> {dateMap.size}
                  </div>
                  <div>
                    <span className="font-semibold">Posts This Month:</span> {archivePosts.length}
                  </div>
                  {archivePosts.length > 0 && (
                    <>
                      <div>
                        <span className="font-semibold">Latest:</span>{' '}
                        {new Date(archivePosts[0]!.frontmatter.date).toLocaleDateString()}
                      </div>
                      <div>
                        <span className="font-semibold">Oldest:</span>{' '}
                        {new Date(archivePosts[archivePosts.length - 1]!.frontmatter.date).toLocaleDateString()}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
