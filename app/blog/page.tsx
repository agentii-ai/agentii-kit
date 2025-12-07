import React from "react";
import { ArticleCard } from "@/components/ArticleCard";
import { BlogHero } from "@/components/BlogHero";
import { getFeaturedPosts, getPublishedPosts } from "@/lib/content/blog-loader";

export const revalidate = 3600; // Revalidate every hour

export const metadata = {
  title: "Blog - agentii-kit",
  description:
    "Insights and guides for building AI agents with agentii-kit specification templates.",
  openGraph: {
    type: "website",
    title: "Blog - agentii-kit",
    description: "Latest articles and insights for AI agent development",
  },
};

async function BlogIndexPage() {
  // Load featured posts and recent posts
  const [featuredPosts, allPosts] = await Promise.all([
    getFeaturedPosts(3),
    getPublishedPosts(),
  ]);

  // Convert blog posts for BlogHero (top 3 featured)
  const heroPosts = featuredPosts.slice(0, 3).map((post) => ({
    slug: post.slug,
    title: post.frontmatter.title,
    excerpt: post.frontmatter.description,
    date: new Date(post.frontmatter.date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    author: post.frontmatter.author,
    tags: post.frontmatter.tags || [],
    cover: post.frontmatter.cover,
    coverAlt: (post.frontmatter as any).cover_alt || post.frontmatter.title,
  }));

  // Convert all posts for article grid
  const articlePosts = allPosts.map((post) => ({
    slug: post.slug,
    title: post.frontmatter.title,
    excerpt: post.frontmatter.description,
    date: new Date(post.frontmatter.date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    author: post.frontmatter.author,
    tags: post.frontmatter.tags || [],
    cover: post.frontmatter.cover,
    coverAlt: (post.frontmatter as any).cover_alt || post.frontmatter.title,
  }));

  return (
    <main className="min-h-screen bg-background">
      {/* Blog Hero Section */}
      <BlogHero featuredArticles={heroPosts} />

      {/* Articles Grid Section */}
      <section id="articles" className="relative py-16 border-b border-border overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-500/5 to-background" />
        
        {/* Decorative glow */}
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

        <div className="relative container mx-auto px-4 max-w-7xl">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-purple-400/10 text-purple-400 border border-purple-400/20">
                Blogs and Insights
              </span>
              <span className="text-sm text-muted-foreground">
                {articlePosts.length} articles
              </span>
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-2">
              All <span className="text-purple-400">Articles</span>
            </h2>
            <p className="text-muted-foreground">
              Browse all our <span className="text-primary">articles</span> and <span className="text-emerald-400">guides</span>
            </p>
          </div>

          {articlePosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articlePosts.map((post) => (
                <ArticleCard key={post.slug} {...post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-card border border-border rounded-xl">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📝</span>
              </div>
              <p className="text-muted-foreground text-lg">No articles yet</p>
              <p className="text-sm text-muted-foreground mt-2">Check back soon for new content!</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default BlogIndexPage;
