"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Article {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  author: string;
  gradient: string;
}

// Articles matching screenshot design with large gradient images
const mockArticles: Article[] = [
  {
    id: "1",
    title: "Building Autonomous PM Agents with Claude",
    excerpt:
      "A comprehensive guide on creating spec-kits that help product managers automate routine tasks while maintaining strategic control.",
    slug: "building-autonomous-pm-agents",
    date: "Jun 1, 2025",
    author: "agentii.ai",
    gradient: "from-emerald-400 via-green-500 to-teal-500",
  },
  {
    id: "2",
    title: "How We Designed the Legal-Kit Framework",
    excerpt:
      "With the help of Claude and Cursor, we built a compliance-first approach to autonomous legal document review.",
    slug: "legal-kit-framework-design",
    date: "Jun 25, 2025",
    author: "agentii.ai",
    gradient: "from-cyan-400 via-teal-400 to-emerald-400",
  },
  {
    id: "3",
    title: "Troubleshooting: Agent Memory Persistence",
    excerpt:
      "Common issues and solutions when implementing long-term memory in your autonomous agents using spec-kits.",
    slug: "troubleshooting-agent-memory",
    date: "Jun 28, 2025",
    author: "agentii.ai",
    gradient: "from-yellow-300 via-amber-400 to-orange-400",
  },
];

export function FeaturedArticles() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Section Header - matching screenshot */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-foreground">
            Latest <span className="text-primary">Articles</span>
          </h2>
          <Link
            href="/blog"
            className="hidden md:flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground border border-border rounded-lg px-4 py-2 transition-colors"
          >
            View All Articles
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Subtitle */}
        <p className="text-muted-foreground mb-8">
          Fresh insights and lessons from our recent explorations.
        </p>

        {/* Articles Grid - cards with large gradient images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockArticles.map((article) => (
            <Link
              key={article.id}
              href={`/blog/${article.slug}`}
              className="group"
            >
              <article className="border border-border rounded-lg bg-card overflow-hidden hover:border-primary/40 transition-all duration-300">
                {/* Large Gradient Image Area - matching screenshot */}
                <div
                  className={`h-40 bg-gradient-to-br ${article.gradient} opacity-90 group-hover:opacity-100 transition-opacity`}
                />

                {/* Content */}
                <div className="p-5 space-y-3">
                  {/* Title */}
                  <h3 className="text-base font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {article.excerpt}
                  </p>

                  {/* Meta - Date and Author */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground pt-3">
                    <span>{article.date}</span>
                    <span>{article.author}</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="flex justify-center mt-8 md:hidden">
          <Link
            href="/blog"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground border border-border rounded-lg px-4 py-2 transition-colors"
          >
            View All Articles
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
