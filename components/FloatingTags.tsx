"use client";

import * as React from "react";

interface FloatingTagsProps {
  tags: string[];
  direction?: "left" | "right";
  speed?: "normal" | "slow";
  className?: string;
}

export function FloatingTags({
  tags,
  direction = "left",
  speed = "normal",
  className = "",
}: FloatingTagsProps) {
  // Duplicate tags for seamless loop
  const duplicatedTags = [...tags, ...tags];

  const animationClass =
    direction === "left"
      ? speed === "slow"
        ? "animate-scroll-left-slow"
        : "animate-scroll-left"
      : speed === "slow"
      ? "animate-scroll-right-slow"
      : "animate-scroll-right";

  return (
    <div
      className={`tag-row relative w-full overflow-hidden fade-edges ${className}`}
      aria-hidden="true"
    >
      <div className={`flex gap-3 ${animationClass}`}>
        {duplicatedTags.map((tag, index) => (
          <span
            key={`${tag}-${index}`}
            className="tag-pill inline-flex items-center whitespace-nowrap rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium text-text-secondary hover:bg-surface-hover hover:border-primary/40 hover:text-foreground transition-all duration-200 cursor-pointer"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
