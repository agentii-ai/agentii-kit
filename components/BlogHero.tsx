"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Code, Briefcase, Scale, Megaphone, Palette, Zap, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

const categories = [
  { label: "Leadership", slug: "leadership", icon: Briefcase, color: "text-amber-400", bg: "bg-amber-400/10", border: "border-amber-400/30", hover: "hover:border-amber-400/50" },
  { label: "Organizational Transformation", slug: "organizational-transformation", icon: Scale, color: "text-sky-400", bg: "bg-sky-400/10", border: "border-sky-400/30", hover: "hover:border-sky-400/50" },
  { label: "Agentic AI", slug: "ai-agents", icon: Zap, color: "text-orange-400", bg: "bg-orange-400/10", border: "border-orange-400/30", hover: "hover:border-orange-400/50" },
  { label: "Spec-Driven Development", slug: "spec-driven-development", icon: Code, color: "text-emerald-400", bg: "bg-emerald-400/10", border: "border-emerald-400/30", hover: "hover:border-emerald-400/50" },
  { label: "Workflow Automation", slug: "business-process", icon: Megaphone, color: "text-pink-400", bg: "bg-pink-400/10", border: "border-pink-400/30", hover: "hover:border-pink-400/50" },
  { label: "Professional Tools", slug: "development-tools", icon: Palette, color: "text-purple-400", bg: "bg-purple-400/10", border: "border-purple-400/30", hover: "hover:border-purple-400/50" },
];

interface BlogHeroProps {
  featuredArticles?: Array<{
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    author?: string;
    tags?: string[];
    cover?: string;
    coverAlt?: string;
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
    <section className="relative pt-24 pb-16 border-b border-border overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
      
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Decorative glows */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-4">
        {/* Main Hero Row */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left: Text Content */}
          <div className="max-w-xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Blog & Insights</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
              <span className="text-foreground">Insights for </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-400 to-sky-400">every agent.</span>
            </h1>

            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Guides, case studies, and troubleshooting tips for autonomous AI agents. Learn how to build and deploy spec-kits with{" "}
              <span className="text-purple-400 font-medium">Claude Code</span>,{" "}
              <span className="text-sky-400 font-medium">Cursor</span>, and modern development tools.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="lg" className="shadow-lg shadow-primary/25" asChild>
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
              <Link
                href={`/blog/${currentArticle.slug}`}
                className="block bg-card border border-border rounded-xl overflow-hidden shadow-xl shadow-primary/5 hover:shadow-primary/10 transition-shadow"
              >
                {/* Hero Image or Gradient */}
                <div className="relative h-64 w-full overflow-hidden md:h-80">
                  {currentArticle.cover ? (
                    <Image
                      src={currentArticle.cover}
                      alt={currentArticle.coverAlt || currentArticle.title}
                      fill
                      priority
                      className="object-cover"
                    />
                  ) : (
                    <div className={`h-full w-full bg-gradient-to-br ${
                      activeIndex === 0
                        ? "from-primary via-emerald-500 to-sky-500"
                        : activeIndex === 1
                        ? "from-purple-500 via-pink-500 to-rose-500"
                        : "from-amber-500 via-orange-500 to-red-500"
                    }`}>
                      <div
                        className="w-full h-full opacity-20"
                        style={{
                          backgroundImage:
                            "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                          backgroundSize: "20px 20px",
                        }}
                      />
                    </div>
                  )}
                </div>

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
              </Link>

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
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-2xl font-semibold text-foreground">Browse by topic</h2>
            <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-muted text-muted-foreground">
              {categories.length} categories
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Link
                  key={category.label}
                  href={`/blog?tag=${category.slug}`}
                  className={`group bg-card border rounded-lg p-4 text-center transition-all cursor-pointer ${category.border} ${category.hover} hover:shadow-lg`}
                >
                  <div className={`w-10 h-10 rounded-lg ${category.bg} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                    <Icon className={`h-5 w-5 ${category.color}`} />
                  </div>
                  <p className="text-sm font-medium text-foreground">{category.label}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
