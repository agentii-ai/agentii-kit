import { redirect } from 'next/navigation'

/**
 * Redirect route for old blog post URLs
 * Redirects /blog/{slug} to /blog/posts/{slug}
 */
interface BlogSlugRedirectProps {
  params: {
    slug: string
  }
}

export default function BlogSlugRedirect({ params }: BlogSlugRedirectProps) {
  // Redirect to the correct path with /posts/
  redirect(`/blog/posts/${params.slug}`)
}

