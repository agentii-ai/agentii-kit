"use client";

import Link from "next/link";
import { Badge } from "./ui/badge";

interface ArticleCardProps {
  slug: string;
  title: string;
  excerpt: string;
  tags?: string[];
  date: string;
  author?: string;
  gradient?: string;
}

export function ArticleCard({
  slug,
  title,
  excerpt,
  tags = [],
  date,
  author,
  gradient = "from-primary to-primary/60",
}: ArticleCardProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <div className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/40 transition-colors cursor-pointer h-full flex flex-col">
        {/* Header Gradient */}
        <div className={`h-32 bg-gradient-to-r ${gradient}`} />

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          {/* Title */}
          <h3 className="text-lg font-semibold text-foreground mb-3 line-clamp-2 flex-1">
            {title}
          </h3>

          {/* Excerpt */}
          <p className="text-text-secondary text-sm mb-4 line-clamp-3">
            {excerpt}
          </p>

          {/* Meta */}
          <div className="flex items-center justify-between text-xs text-text-muted pt-4 border-t border-border">
            <span>{date}</span>
            {author && <span>{author}</span>}
          </div>
        </div>
      </div>
    </Link>
  );
}
