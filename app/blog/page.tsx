import React from "react";
import { ArticleCard } from "@/components/ArticleCard";
import { BlogHero } from "@/components/BlogHero";
import {
  getFeaturedPosts,
  getRecentPosts,
  getPublishedPosts,
} from "@/lib/content/blog-loader";

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
    getRecentPosts(12),
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
  }));

  return (
    <main className="min-h-screen bg-background">
      {/* Blog Hero Section */}
      <BlogHero featuredArticles={heroPosts} />

      {/* Articles Grid Section */}
      <section id="articles" className="py-16 border-b border-border">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-2">
              All Articles
            </h2>
            <p className="text-text-secondary">
              Browse all our articles and guides
            </p>
          </div>

          {articlePosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articlePosts.map((post) => (
                <ArticleCard key={post.slug} {...post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-text-secondary">No articles yet</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default BlogIndexPage;
