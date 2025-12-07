"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

// Map tags to gradient colors
const tagGradients: Record<string, string> = {
  development: "from-emerald-500 via-teal-500 to-cyan-500",
  product: "from-amber-500 via-orange-500 to-yellow-500",
  marketing: "from-pink-500 via-rose-500 to-red-500",
  design: "from-purple-500 via-violet-500 to-indigo-500",
  legal: "from-sky-500 via-blue-500 to-indigo-500",
  operations: "from-orange-500 via-red-500 to-rose-500",
  ai: "from-primary via-emerald-400 to-sky-400",
  tutorial: "from-violet-500 via-purple-500 to-fuchsia-500",
  guide: "from-teal-500 via-cyan-500 to-sky-500",
};

// Map tags to badge colors
const tagColors: Record<string, { bg: string; text: string }> = {
  development: { bg: "bg-emerald-400/10", text: "text-emerald-400" },
  product: { bg: "bg-amber-400/10", text: "text-amber-400" },
  marketing: { bg: "bg-pink-400/10", text: "text-pink-400" },
  design: { bg: "bg-purple-400/10", text: "text-purple-400" },
  legal: { bg: "bg-sky-400/10", text: "text-sky-400" },
  operations: { bg: "bg-orange-400/10", text: "text-orange-400" },
  ai: { bg: "bg-primary/10", text: "text-primary" },
  tutorial: { bg: "bg-violet-400/10", text: "text-violet-400" },
  guide: { bg: "bg-cyan-400/10", text: "text-cyan-400" },
};

function getGradient(tags: string[]): string {
  for (const tag of tags) {
    const key = tag.toLowerCase();
    if (tagGradients[key]) return tagGradients[key];
  }
  return "from-primary via-emerald-500 to-sky-500";
}

function getTagColor(tag: string): { bg: string; text: string } {
  const key = tag.toLowerCase();
  return tagColors[key] || { bg: "bg-primary/10", text: "text-primary" };
}

interface ArticleCardProps {
  slug: string;
  title: string;
  excerpt: string;
  tags?: string[];
  date: string;
  author?: string;
  gradient?: string;
  cover?: string;
  coverAlt?: string;
}

export function ArticleCard({
  slug,
  title,
  excerpt,
  tags = [],
  date,
  author,
  cover,
  coverAlt,
}: ArticleCardProps) {
  const cardGradient = getGradient(tags);

  return (
    <Link href={`/blog/${slug}`}>
      <div className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all cursor-pointer h-full flex flex-col">
        {/* Header Image or Gradient */}
        <div className="relative h-44 w-full overflow-hidden bg-gradient-to-br md:h-52">
          {cover ? (
            <Image
              src={cover}
              alt={coverAlt || title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className={`absolute inset-0 bg-gradient-to-br ${cardGradient}`}>
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                  backgroundSize: "16px 16px",
                }}
              />
            </div>
          )}
          {/* Hover arrow */}
          <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <ArrowUpRight className="w-4 h-4 text-white" />
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex-1 flex flex-col">
          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {tags.slice(0, 3).map((tag) => {
                const colors = getTagColor(tag);
                return (
                  <span
                    key={tag}
                    className={`text-xs font-medium px-2 py-0.5 rounded-md ${colors.bg} ${colors.text}`}
                  >
                    {tag}
                  </span>
                );
              })}
            </div>
          )}

          {/* Title */}
          <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>

          {/* Excerpt */}
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-1">
            {excerpt}
          </p>

          {/* Meta */}
          <div className="flex items-center justify-between text-xs text-muted-foreground pt-3 border-t border-border">
            <span>{date}</span>
            {author && (
              <span className="flex items-center gap-1">
                <span className="w-5 h-5 rounded-full bg-gradient-to-br from-primary to-emerald-400 flex items-center justify-center text-white text-[10px] font-medium">
                  {author.charAt(0)}
                </span>
                {author}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
