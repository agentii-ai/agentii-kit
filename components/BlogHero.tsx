"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight, Code, Briefcase, Scale, Megaphone, Palette, Zap } from "lucide-react";
import { Button } from "./ui/button";

const categories = [
  { label: "Development", icon: Code },
  { label: "Product", icon: Briefcase },
  { label: "Marketing", icon: Megaphone },
  { label: "Design", icon: Palette },
  { label: "Legal", icon: Scale },
  { label: "Operations", icon: Zap },
];

interface BlogHeroProps {
  featuredArticles?: Array<{
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    author?: string;
    tags?: string[];
  }>;
}

export function BlogHero({ featuredArticles = [] }: BlogHeroProps) {
  const [activeIndex, setActiveIndex] = React.useState(0);

  // Auto-rotate carousel every 5 seconds
  React.useEffect(() => {
    if (featuredArticles.length === 0) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % featuredArticles.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [featuredArticles.length]);

  const currentArticle = featuredArticles[activeIndex] || null;

  const handlePrev = () => {
    if (featuredArticles.length === 0) return;
    setActiveIndex((prev) => (prev - 1 + featuredArticles.length) % featuredArticles.length);
  };

  const handleNext = () => {
    if (featuredArticles.length === 0) return;
    setActiveIndex((prev) => (prev + 1) % featuredArticles.length);
  };

  return (
    <section className="pt-24 pb-16 border-b border-border">
      <div className="container mx-auto px-4">
        {/* Main Hero Row */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left: Text Content */}
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
              <span className="text-foreground">Insights for </span>
              <span className="text-primary">every agent.</span>
            </h1>

            <p className="text-text-secondary text-lg mb-8 leading-relaxed">
              Guides, case studies, and troubleshooting tips for autonomous AI agents. Learn how to build and deploy spec-kits with Claude Code, Cursor, and modern development tools.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="lg" asChild>
                <a href="#articles">Browse articles</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/kits">Explore kits</a>
              </Button>
            </div>
          </div>

          {/* Right: Featured Article Carousel */}
          {currentArticle && (
            <div className="relative">
              {/* Article Card */}
              <div className="bg-card border border-border rounded-lg overflow-hidden">
                {/* Header Gradient */}
                <div className="h-32 bg-gradient-to-r from-primary to-primary/60" />

                {/* Content */}
                <div className="p-6">
                  {/* Tags */}
                  {currentArticle.tags && currentArticle.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {currentArticle.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium px-2 py-1 rounded bg-primary/10 text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-foreground mb-3 line-clamp-2">
                    {currentArticle.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                    {currentArticle.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-xs text-text-muted">
                    <span>{currentArticle.date}</span>
                    {currentArticle.author && <span>by {currentArticle.author}</span>}
                  </div>
                </div>
              </div>

              {/* Carousel Controls */}
              <div className="flex items-center justify-between mt-6">
                <div className="flex gap-2">
                  {featuredArticles.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveIndex(idx)}
                      className={`h-2 rounded-full transition-all ${
                        idx === activeIndex
                          ? "w-8 bg-primary"
                          : "w-2 bg-muted hover:bg-muted/80"
                      }`}
                      aria-label={`Go to article ${idx + 1}`}
                    />
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handlePrev}
                    disabled={featuredArticles.length === 0}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleNext}
                    disabled={featuredArticles.length === 0}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Browse by Topic */}
        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-8">Browse by topic</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.label}
                  className="bg-card border border-border rounded-lg p-4 text-center hover:border-primary/40 transition-colors cursor-pointer"
                >
                  <Icon className="h-6 w-6 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium text-foreground">{category.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
