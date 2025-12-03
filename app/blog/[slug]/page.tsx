import { redirect } from 'next/navigation'
import { getAllBlogPosts } from '@/lib/content/blog-loader'

/**
 * Redirect route for old blog post URLs
 * Redirects /blog/{slug} to /blog/posts/{slug}
 */
interface BlogSlugRedirectProps {
  params: {
    slug: string
  }
}

// Generate static params for all blog posts (required for output: 'export')
export async function generateStaticParams() {
  const posts = await getAllBlogPosts(false)
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogSlugRedirect({ params }: BlogSlugRedirectProps) {
  // Redirect to the correct path with /posts/
  redirect(`/blog/posts/${params.slug}`)
}

