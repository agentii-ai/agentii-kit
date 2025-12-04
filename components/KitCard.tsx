"use client";

import * as React from "react";
import Link from "next/link";
import { Star, Github, FileText } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Kit, categoryMetadata, CategoryColor } from "@/data/kits";

interface KitCardProps {
  kit: Kit;
}

export function KitCard({ kit }: KitCardProps) {
  const [isHovered, setIsHovered] = React.useState(false);
  const categoryMeta = categoryMetadata[kit.category];
  const colorVariant = categoryMeta.color as keyof typeof categoryColorMap;

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

  // Extract repo name from GitHub URL or use kit slug
  const repoName = kit.github
    ? kit.github.split("/").slice(-2).join("/")
    : `agentii-kit/${kit.slug}`;

  return (
    <Card
      className="relative h-full border-border bg-card hover:border-primary/40 transition-all duration-300 overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-6 h-full flex flex-col">
        {/* Category Badge */}
        <div className="mb-3">
          <Badge variant={colorVariant}>{kit.category}</Badge>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">
          {kit.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 flex-grow line-clamp-3">
          {kit.description}
        </p>

        {/* Meta Row */}
        <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-border pt-3">
          <div className="flex items-center gap-3">
            <span className="font-mono truncate max-w-[120px]">{repoName}</span>
            <div className="flex items-center gap-1">
              <Star className="h-3 w-3 fill-amber-500 text-amber-500" />
              <span>{kit.stars.toLocaleString()}</span>
            </div>
          </div>
          <span>{formatDate(kit.lastUpdated)}</span>
        </div>

        {/* Hover Action Buttons */}
        <div
          className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-card via-card to-transparent p-6 pt-12 flex gap-2 transition-all duration-300 ${
            isHovered
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4 pointer-events-none"
          }`}
        >
          <Button size="sm" className="flex-1 gap-2" asChild>
            <Link href={`/kits/${kit.slug}`}>
              <FileText className="h-4 w-4" />
              View Spec
            </Link>
          </Button>
          {kit.github && (
            <Button
              size="sm"
              variant="outline"
              className="flex-1 gap-2"
              asChild
            >
              <a
                href={kit.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

// Map category colors to badge variants
const categoryColorMap = {
  blue: "blue",
  purple: "purple",
  pink: "pink",
  amber: "amber",
  green: "green",
  violet: "violet",
  orange: "orange",
} as const;
