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
      className={`relative w-full overflow-hidden py-4 ${className}`}
      aria-hidden="true"
    >
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
      <div className="flex gap-4">
        <div className={`flex gap-4 ${animationClass}`}>
          {duplicatedTags.map((tag, index) => (
            <div
              key={`${tag}-${index}`}
              className="inline-flex items-center whitespace-nowrap rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium text-muted-foreground"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
