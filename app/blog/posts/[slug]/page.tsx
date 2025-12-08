import React from 'react'
import { notFound } from 'next/navigation'
import { getBlogPostBySlug, getAllBlogPosts } from '@/lib/content/blog-loader'
import { buildTagIndex, getRelatedPostsByTags } from '@/lib/content/tags'
import MarkdownRenderer from '@/components/MarkdownRenderer'
import BlogJsonLd from '@/components/BlogJsonLd'

/**
 * Dynamic Blog Post Page
 * Displays individual blog post with metadata, content, and related posts
 */

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = await getAllBlogPosts(false)
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = await getBlogPostBySlug(params.slug)

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The blog post you are looking for does not exist.',
    }
  }

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    openGraph: {
      type: 'article',
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      publishedTime: post.frontmatter.date,
      modifiedTime: post.frontmatter.updated_at,
      authors: [post.frontmatter.author],
      tags: post.frontmatter.tags,
      images: post.frontmatter.og_image ? [{ url: post.frontmatter.og_image }] : undefined,
      url: `/blog/posts/${params.slug}`,
    },
    keywords: post.frontmatter.keywords,
  }
}

export const revalidate = 3600 // Revalidate every hour

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  // Get all posts for tag-based related posts
  const allPosts = await getAllBlogPosts(false)

  // Build tag index for related posts
  const tagIndex = buildTagIndex(
    allPosts.map((p) => ({
      slug: p.slug,
      frontmatter: p.frontmatter,
      draft: p.draft,
    }))
  )

  // Get related posts
  const relatedPosts = getRelatedPostsByTags(
    post.frontmatter.tags || [],
    allPosts.map((p) => ({
      slug: p.slug,
      frontmatter: p.frontmatter,
      draft: p.draft,
    })),
    post.slug,
    3
  )

  // Format date
  const publishDate = new Date(post.frontmatter.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const updateDate = post.frontmatter.updated_at
    ? new Date(post.frontmatter.updated_at).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : null

  return (
    <>
      {/* JSON-LD Structured Data for SEO */}
      <BlogJsonLd
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        datePublished={post.frontmatter.date}
        dateModified={post.frontmatter.updated_at}
        authorName={post.frontmatter.author}
        imageUrl={post.frontmatter.cover || post.frontmatter.og_image}
        url={`https://agentii.ai/blog/posts/${params.slug}`}
        keywords={post.frontmatter.keywords || []}
        articleBody={post.content}
      />

      <article className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      {/* Hero Section with Cover Image */}
      {post.frontmatter.cover && (
        <div className="relative w-full h-96 bg-gray-200 dark:bg-gray-900 overflow-hidden">
          <img
            src={post.frontmatter.cover}
            alt={post.frontmatter.cover_alt || post.frontmatter.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
      )}

      {/* Article Header */}
      <div className={`${post.frontmatter.cover ? '' : 'pt-12'} px-6 py-12 border-b border-gray-200 dark:border-white/10`}>
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-600 dark:text-white/60 mb-6">
            <a href="/blog" className="hover:text-gray-900 dark:hover:text-white transition-colors">
              Blog
            </a>
            <span>/</span>
            <span className="text-gray-900 dark:text-white">{post.frontmatter.title}</span>
          </nav>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            {post.frontmatter.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-white/60 mb-8">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-900 dark:text-white">{post.frontmatter.author}</span>
            </div>
            <div>•</div>
            <time dateTime={post.frontmatter.date}>{publishDate}</time>
            {updateDate && (
              <>
                <div>•</div>
                <span>Updated {updateDate}</span>
              </>
            )}
            <div>•</div>
            <span>{post.readingTime} min read</span>
          </div>

          {/* Tags */}
          {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.frontmatter.tags.map((tag) => (
                <a
                  key={tag}
                  href={`/tags/${tag}`}
                  className="inline-block px-3 py-1 bg-blue-100 dark:bg-primary/20 text-blue-700 dark:text-primary text-sm rounded-full hover:bg-blue-200 dark:hover:bg-primary/30 transition-colors"
                >
                  #{tag}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Article Content */}
      <div className="px-6 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Render markdown content with proper formatting */}
          <MarkdownRenderer
            content={post.content}
            processedContent={post.processedContent}
            className="prose prose-lg prose-gray dark:prose-invert max-w-none prose-p:max-w-none prose-headings:max-w-none"
          />
        </div>
      </div>

      {/* Author Bio */}
      <div className="px-6 py-12 border-t border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5">
        <div className="max-w-3xl mx-auto">
          <div className="flex gap-4 items-start">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex-shrink-0" />
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-1">{post.frontmatter.author}</h3>
              <p className="text-gray-600 dark:text-white/60">
                Expert contributor to the Agentii blog sharing insights on AI-powered financial analysis and automation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="px-6 py-12 border-t border-gray-200 dark:border-white/10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Related Articles</h2>
            <div className="grid gap-6">
              {relatedPosts.map((relatedPost) => (
                <a
                  key={relatedPost.slug}
                  href={`/blog/posts/${relatedPost.slug}`}
                  className="group p-6 border border-gray-200 dark:border-white/10 rounded-lg hover:border-blue-500 dark:hover:border-primary hover:shadow-lg dark:hover:shadow-primary/10 transition-all"
                >
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-primary transition-colors mb-2">
                    {relatedPost.frontmatter.title}
                  </h3>
                  <p className="text-gray-600 dark:text-white/60 mb-4">{relatedPost.frontmatter.description}</p>
                  <div className="text-sm text-blue-600 dark:text-primary font-semibold">
                    Read More →
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="px-6 py-12 border-t border-gray-200 dark:border-white/10">
        <div className="max-w-3xl mx-auto">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 border border-blue-600 dark:border-primary text-blue-600 dark:text-primary font-semibold hover:bg-blue-50 dark:hover:bg-primary/10 transition-colors rounded-lg"
          >
            ← Back to Blog
          </a>
        </div>
      </div>
    </article>
    </>
  )
}
