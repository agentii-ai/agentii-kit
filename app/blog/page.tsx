import React from 'react'
import { PostCard } from '@/components/PostCard'
import { FeaturedPost } from '@/components/FeaturedPost'
import { getFeaturedPosts, getRecentPosts, getPublishedPosts } from '@/lib/content/blog-loader'
import type { BlogPost } from '@/lib/content/blog-loader'

/**
 * Blog Index Page
 * Displays featured articles and latest blog posts with beautiful card layout
 * Loads content from markdown files in content/blog directory
 */

// Cache revalidation time (in seconds)
export const revalidate = 3600 // Revalidate every hour

export const metadata = {
  title: 'Blog',
  description: 'Insights on AI-powered financial analysis, product updates, and technical deep dives from Agentii.',
  openGraph: {
    type: 'website',
    title: 'Agentii Blog',
    description: 'Latest articles and insights from the Agentii team',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
  },
}

async function BlogIndexPage() {
  // Load featured posts and recent posts
  const [featuredPosts, allPosts] = await Promise.all([
    getFeaturedPosts(1),
    getRecentPosts(10),
  ])

  // Debug logging
  console.log('[Blog Page] Featured posts:', featuredPosts.length)
  console.log('[Blog Page] All posts:', allPosts.length)
  if (allPosts.length > 0) {
    console.log('[Blog Page] First post:', allPosts[0].slug, allPosts[0].frontmatter.title)
  }

  // Get featured post - prioritize the newest featured post
  // Sort featured posts by date (newest first) to ensure latest featured post is shown
  const sortedFeaturedPosts = featuredPosts.sort((a, b) => {
    return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
  })
  const featuredPost = sortedFeaturedPosts[0] || allPosts[0]

  // Get other posts to display in grid (excluding featured)
  // These will be shown in "Latest Articles" section
  const gridPosts = featuredPost
    ? allPosts.filter((post) => post.slug !== featuredPost.slug).slice(0, 6)
    : allPosts.slice(0, 6)

  // Get total post count for stats
  const totalPosts = await getPublishedPosts()
  const totalCount = totalPosts.length
  
  console.log('[Blog Page] Grid posts:', gridPosts.length)
  console.log('[Blog Page] Total published:', totalCount)

  // Convert blog posts for display
  const displayFeaturedPost = featuredPost
    ? {
        title: featuredPost.frontmatter.title,
        description: featuredPost.frontmatter.description,
        slug: featuredPost.slug,
        date: featuredPost.frontmatter.date,
        author: featuredPost.frontmatter.author,
        tags: featuredPost.frontmatter.tags,
        cover: featuredPost.frontmatter.cover,
        content: featuredPost.content,
      }
    : null

  const displayBlogPosts = gridPosts.map((post) => ({
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    slug: post.slug,
    date: post.frontmatter.date,
    author: post.frontmatter.author,
    tags: post.frontmatter.tags,
    cover: post.frontmatter.cover,
  }))


  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/blog/hero_bkgd.jpg')"
          }}
        />
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            The Sky Is Clearer When Your Finances Make Sense.
              </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light">
            Cut through the noise. Connect with people, not profiles.
          </p>
          <div className="flex justify-center mb-16">
            <a
              href="#featured"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300 text-lg"
            >
              Explore Articles
            </a>
            </div>

          {/* Partner Logos */}
          <div className="border-t border-white/20 pt-8">
            <p className="text-sm text-white/70 mb-6">Our partners</p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60">
              <div className="text-white font-semibold text-lg">stripe</div>
              <div className="text-white font-semibold text-lg">Canva</div>
              <div className="text-white font-semibold text-lg">HubSpot</div>
              <div className="text-white font-semibold text-lg">GitHub</div>
              <div className="text-white font-semibold text-lg">Microsoft</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post Section */}
      {displayFeaturedPost && (
        <section id="featured" className="py-16 md:py-24 px-6 border-b border-gray-200">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Featured Article</h2>
            <FeaturedPost {...displayFeaturedPost} />
          </div>
        </section>
      )}

      {/* Latest Posts Grid */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Articles</h2>
            <p className="text-gray-600">
              Discover all our published content, organized by category and publication date.
            </p>
          </div>

          {displayBlogPosts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayBlogPosts.map((post) => (
                  <PostCard
                    key={post.slug}
                    {...post}
                    cover={post.cover}
                  />
                ))}
              </div>

              {/* Load More */}
              {totalCount > displayBlogPosts.length && (
                <div className="mt-16 flex justify-center">
                  <button className="px-8 py-3 border border-primary text-primary font-semibold hover:bg-blue-50 transition-colors duration-300 rounded-lg">
                    Load More Articles
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No published articles yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-24 px-6 bg-gradient-to-r from-blue-50 to-blue-100 border-t border-gray-200">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Stay Updated with Agentii Insights
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for weekly updates on AI-powered financial analysis, product releases, and industry trends.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder:text-gray-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-blue-200"
            />
            <button className="px-8 py-3 bg-primary text-white font-semibold hover:bg-blue-700 transition-colors duration-300 rounded-lg">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>
    </div>
  )
}

export default BlogIndexPage
