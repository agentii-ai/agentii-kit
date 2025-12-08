import { MetadataRoute } from 'next'
import { getAllBlogPosts } from '@/lib/content/blog-loader'

/**
 * Sitemap generator for Agentii site
 * Includes core static pages and all published blog posts
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://kits.agentii.ai'

  const staticRoutes: MetadataRoute.Sitemap = [
    '',
    '/blog',
    '/about',
    '/kits',
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }))

  const posts = await getAllBlogPosts(false)

  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/posts/${post.slug}`,
    lastModified: new Date(post.frontmatter.updated_at || post.frontmatter.date),
  }))

  return [...staticRoutes, ...blogRoutes]
}
