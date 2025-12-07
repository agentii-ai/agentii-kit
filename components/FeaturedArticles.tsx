"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface Article {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author?: string | null;
  cover?: string | null;
  coverAlt?: string | null;
}

export function FeaturedArticles() {
  const [articles, setArticles] = React.useState<Article[]>([]);

  React.useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch("/api/blog/latest");
        if (!res.ok) return;
        const data: Article[] = await res.json();
        if (!cancelled) {
          // Sort by date just in case API changes
          const sorted = [...data].sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          );
          setArticles(sorted.slice(0, 3));
        }
      } catch (e) {
        console.error("Failed to load latest articles", e);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);
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

        {/* Articles Grid - cards with hero images matching blog cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(articles.length > 0 ? articles : []).map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group"
            >
              <article className="border border-border rounded-lg bg-card overflow-hidden hover:border-primary/40 transition-all duration-300">
                {/* Hero Image or gradient fallback (1200x630 ratio) */}
                <div className="relative w-full aspect-[1200/630] overflow-hidden bg-gradient-to-br from-primary via-emerald-500 to-sky-500">
                  {article.cover ? (
                    <Image
                      src={article.cover}
                      alt={article.coverAlt || article.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : null}
                </div>

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
                    <span>
                      {new Date(article.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                    {article.author && <span>{article.author}</span>}
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
