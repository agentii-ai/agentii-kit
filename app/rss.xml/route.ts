import { getPublishedPosts } from '@/lib/content/blog-loader'

export const revalidate = 3600 // Revalidate every hour

// Helper function to escape XML special characters
function escapeXml(str: string): string {
  const replacements: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;',
  }
  return str.replace(/[&<>"']/g, (char) => replacements[char] || char)
}

export async function GET() {
  const posts = await getPublishedPosts()

  // Generate RSS feed
  const siteUrl = process.env.SITE_URL || 'https://blog.agentii.ai'
  const baseUrl = siteUrl.endsWith('/') ? siteUrl.slice(0, -1) : siteUrl

  const rssContent = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Agentii Blog</title>
    <link>${baseUrl}/blog</link>
    <description>Insights on AI-powered financial analysis, product announcements, and technical deep dives from Agentii</description>
    <language>en-us</language>
    <copyright>(c) ${new Date().getFullYear()} Agentii Inc. All rights reserved.</copyright>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <image>
      <url>${baseUrl}/logo.png</url>
      <title>Agentii Blog</title>
      <link>${baseUrl}/blog</link>
    </image>
    ${posts
      .slice(0, 50) // Limit to 50 most recent posts
      .map(
        (post) => `
    <item>
      <title>${escapeXml(post.frontmatter.title)}</title>
      <link>${baseUrl}/blog/posts/${post.slug}</link>
      <guid>${baseUrl}/blog/posts/${post.slug}</guid>
      <description>${escapeXml(post.frontmatter.description)}</description>
      <author>${escapeXml(post.frontmatter.author)}</author>
      <pubDate>${new Date(post.frontmatter.date).toUTCString()}</pubDate>
      ${
        post.frontmatter.tags && post.frontmatter.tags.length > 0
          ? post.frontmatter.tags.map((tag) => `      <category>${escapeXml(tag)}</category>`).join('\n')
          : ''
      }
      ${
        post.frontmatter.og_image
          ? `      <image>
        <url>${baseUrl}${post.frontmatter.og_image}</url>
        <title>${escapeXml(post.frontmatter.title)}</title>
        <link>${baseUrl}/blog/posts/${post.slug}</link>
      </image>`
          : ''
      }
      <content:encoded><![CDATA[
        ${escapeXml(post.frontmatter.description)}
        <p><a href="${baseUrl}/blog/posts/${post.slug}">Read more →</a></p>
      ]]></content:encoded>
    </item>`
      )
      .join('\n')}
  </channel>
</rss>`

  return new Response(rssContent, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  })
}
