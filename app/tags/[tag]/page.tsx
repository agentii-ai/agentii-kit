import React from 'react'
import { PostCard } from '@/components/PostCard'
import { getPublishedPosts, getAllTags } from '@/lib/content/blog-loader'

/**
 * Tag Archive Page
 * Displays all posts associated with a specific tag
 */

interface TagArchivePageProps {
  params: {
    tag: string
  }
}

// Generate static params for all tags
export async function generateStaticParams() {
  const tags = await getAllTags()
  return tags.map((tag) => ({
    tag: tag,
  }))
}

export async function generateMetadata({ params }: TagArchivePageProps) {
  const tagName = params.tag.replace(/-/g, ' ')
  return {
    title: `Posts tagged with "${tagName}"`,
    description: `Browse all articles tagged with ${tagName} on the Agentii blog`,
    openGraph: {
      type: 'website',
      title: `${tagName} - Agentii Blog`,
      description: `Articles about ${tagName}`,
      url: `/tags/${params.tag}`,
    },
  }
}

export const revalidate = 3600 // Revalidate every hour

export default async function TagArchivePage({ params }: TagArchivePageProps) {
  const allPosts = await getPublishedPosts()

  // Filter posts by tag
  const tagPosts = allPosts.filter((post) => post.frontmatter.tags?.includes(params.tag) || false)

  // Get all tags for sidebar
  const allTags = await getAllTags()

  // Format tag name for display
  const tagName = params.tag.replace(/-/g, ' ')
  const tagCapitalized = tagName.charAt(0).toUpperCase() + tagName.slice(1)

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
                <a href="/tags" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                  Tags
                </a>
                <span>/</span>
                <span className="text-gray-900 dark:text-white">{tagCapitalized}</span>
              </nav>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                #{tagCapitalized}
              </h1>
              <p className="text-xl text-gray-600 dark:text-white/70">
                {tagPosts.length === 0
                  ? 'No posts found with this tag.'
                  : `${tagPosts.length} ${tagPosts.length === 1 ? 'post' : 'posts'} found`}
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="px-6 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {tagPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {tagPosts.map((post) => (
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
                  No posts found with this tag. Try exploring other tags or browsing the full blog.
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
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Browse Tags</h3>
              <div className="flex flex-wrap gap-2">
                {allTags.map((tag) => {
                  const isActive = tag === params.tag
                  return (
                    <a
                      key={tag}
                      href={`/tags/${tag}`}
                      className={`inline-block px-3 py-1 rounded-full text-sm transition-colors ${
                        isActive
                          ? 'bg-blue-600 dark:bg-primary text-white dark:text-black font-semibold'
                          : 'bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-white/80 hover:bg-gray-300 dark:hover:bg-white/20'
                      }`}
                    >
                      {tag}
                    </a>
                  )
                })}
              </div>

              {/* Quick Stats */}
              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-white/10">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Tag Stats</h4>
                <div className="space-y-2 text-sm text-gray-600 dark:text-white/60">
                  <div>
                    <span className="font-semibold">Posts:</span> {tagPosts.length}
                  </div>
                  {tagPosts.length > 0 && (
                    <>
                      <div>
                        <span className="font-semibold">Latest:</span>{' '}
                        {new Date(tagPosts[0]!.frontmatter.date).toLocaleDateString()}
                      </div>
                      <div>
                        <span className="font-semibold">Oldest:</span>{' '}
                        {new Date(tagPosts[tagPosts.length - 1]!.frontmatter.date).toLocaleDateString()}
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
