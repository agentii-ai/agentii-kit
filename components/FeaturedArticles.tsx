"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

interface Article {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  author: string;
  category: string;
  gradientFrom: string;
  gradientTo: string;
}

const mockArticles: Article[] = [
  {
    id: "1",
    title: "Building Production-Ready AI Agents with Spec-Kits",
    excerpt:
      "Learn how to leverage agentii-kit's spec-kits to build robust, production-ready AI agents in days instead of weeks.",
    slug: "building-production-ready-ai-agents",
    date: "2025-01-10",
    author: "Sarah Chen",
    category: "Tutorial",
    gradientFrom: "from-blue-500",
    gradientTo: "to-purple-500",
  },
  {
    id: "2",
    title: "The Future of AI-Powered Development Tools",
    excerpt:
      "Explore how Claude Code, Cursor, and Windsurf are transforming the way developers build software with AI assistance.",
    slug: "future-of-ai-powered-development",
    date: "2025-01-08",
    author: "Alex Kumar",
    category: "Insights",
    gradientFrom: "from-purple-500",
    gradientTo: "to-pink-500",
  },
  {
    id: "3",
    title: "5 Spec-Kits Every Product Manager Should Know",
    excerpt:
      "Discover the essential spec-kits that can streamline your product management workflow and improve team collaboration.",
    slug: "spec-kits-for-product-managers",
    date: "2025-01-05",
    author: "Maya Patel",
    category: "Guide",
    gradientFrom: "from-green-500",
    gradientTo: "to-teal-500",
  },
];

export function FeaturedArticles() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <section className="py-12 mb-12">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">
              Latest from Our Blog
            </h2>
            <p className="text-muted-foreground">
              Insights, tutorials, and updates from the agentii-kit team
            </p>
          </div>
          <Button variant="outline" className="gap-2 hidden md:flex" asChild>
            <Link href="/blog">
              View All
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockArticles.map((article) => (
            <article
              key={article.id}
              className="group border border-border rounded-lg bg-card overflow-hidden hover:border-primary/40 transition-all duration-300"
            >
              {/* Gradient Header Bar */}
              <div
                className={`h-2 bg-gradient-to-r ${article.gradientFrom} ${article.gradientTo}`}
              />

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Category Badge */}
                <Badge variant="outline">{article.category}</Badge>

                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-muted-foreground pt-4 border-t border-border">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{formatDate(article.date)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-3.5 w-3.5" />
                    <span>{article.author}</span>
                  </div>
                </div>

                {/* Read More Link */}
                <Link
                  href={`/blog/${article.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors group"
                >
                  Read More
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="flex justify-center mt-8 md:hidden">
          <Button variant="outline" className="gap-2" asChild>
            <Link href="/blog">
              View All Articles
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
