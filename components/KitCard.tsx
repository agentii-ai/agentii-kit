"use client";

import * as React from "react";
import { Star, Github, Clock } from "lucide-react";
import { Kit, categoryMetadata } from "@/data/kits";

interface KitCardProps {
  kit: Kit;
}

// Category badge color mapping to match screenshot
const categoryBadgeStyles: Record<string, string> = {
  green: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  amber: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  pink: "bg-pink-500/20 text-pink-400 border-pink-500/30",
  blue: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  purple: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  orange: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  violet: "bg-violet-500/20 text-violet-400 border-violet-500/30",
};

export function KitCard({ kit }: KitCardProps) {
  const categoryMeta = categoryMetadata[kit.category];
  const badgeStyle = categoryBadgeStyles[categoryMeta.color] || categoryBadgeStyles.blue;

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 7) {
      return `${diffDays}d ago`;
    } else if (diffDays < 30) {
      return `${Math.floor(diffDays / 7)}w ago`;
    } else if (diffDays < 365) {
      return `${Math.floor(diffDays / 30)}mo ago`;
    } else {
      return `${Math.floor(diffDays / 365)}y ago`;
    }
  };

  // Get GitHub URL (prefer new githubUrl field, fallback to legacy github field)
  const githubLink = kit.githubUrl || kit.github || `https://github.com/agentii-ai/${kit.slug}`;

  // Extract repo name from GitHub URL for display
  const repoName = githubLink.split("/").slice(-2).join("/");

  return (
    <a href={githubLink} target="_blank" rel="noopener noreferrer" className="block h-full">
      <article className="h-full border border-border rounded-lg bg-card p-5 hover:border-primary/50 transition-all duration-300 flex flex-col">
        {/* Category Badge - matching screenshot pill style */}
        <div className="mb-4">
          <span className={`inline-flex items-center px-2.5 py-1 text-xs font-medium rounded border ${badgeStyle}`}>
            {kit.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base font-semibold text-foreground mb-2 line-clamp-1">
          {kit.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 flex-grow line-clamp-2">
          {kit.description}
        </p>

        {/* Meta Row - matching screenshot exactly */}
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          {/* GitHub Repo */}
          <div className="flex items-center gap-1.5 min-w-0">
            <Github className="h-3.5 w-3.5 shrink-0" />
            <span className="truncate">{repoName}</span>
          </div>
          {/* Stars */}
          <div className="flex items-center gap-1 shrink-0">
            <Star className="h-3 w-3 fill-amber-500 text-amber-500" />
            <span>{kit.stars.toLocaleString()}</span>
          </div>
          {/* Last Updated */}
          <div className="flex items-center gap-1 shrink-0">
            <Clock className="h-3 w-3" />
            <span>{formatDate(kit.lastUpdated)}</span>
          </div>
        </div>
      </article>
    </a>
  );
}
