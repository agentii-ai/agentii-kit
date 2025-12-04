"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Github } from "lucide-react";
import { Button } from "./ui/button";
import { FloatingTags } from "./FloatingTags";

const topTags = [
  "Claude Code",
  "Cursor",
  "Windsurf",
  "React",
  "TypeScript",
  "Next.js",
  "Python",
  "API Design",
  "Database",
  "DevOps",
];

const bottomTags = [
  "Product Management",
  "Marketing",
  "Legal",
  "Finance",
  "Design Systems",
  "SEO",
  "Content",
  "Operations",
  "Infrastructure",
  "Analytics",
];

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[600px] bg-gradient-to-b from-background to-card overflow-hidden">
      {/* Subtle Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Accent Glow Effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      {/* Top Floating Tags */}
      <FloatingTags tags={topTags} direction="left" speed="normal" />

      {/* Hero Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight animate-fade-in-up">
            <span className="block mb-2">agentii-kit —</span>
            <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Power Your AI Agents
            </span>
          </h1>

          {/* Subtitle with Highlights */}
          <p
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.1s", animationFillMode: "both" }}
          >
            Curated{" "}
            <span className="text-foreground font-semibold">spec-kits</span> for{" "}
            <span className="text-foreground font-semibold">Claude Code</span>,{" "}
            <span className="text-foreground font-semibold">Cursor</span>, and
            modern dev tools. Production-ready workflows for developers, PMs,
            designers, and more.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.2s", animationFillMode: "both" }}
          >
            <Button size="lg" className="gap-2" asChild>
              <Link href="/kits">
                Browse Kits
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="gap-2" asChild>
              <a
                href="https://github.com/agentii-kit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                View on GitHub
              </a>
            </Button>
          </div>

          {/* Stats or Social Proof */}
          <div
            className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 pt-8 text-sm text-muted-foreground animate-fade-in-up"
            style={{ animationDelay: "0.3s", animationFillMode: "both" }}
          >
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <span>17+ Production Kits</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-blue-500" />
              <span>7 Categories</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-purple-500" />
              <span>Open Source</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Floating Tags */}
      <FloatingTags tags={bottomTags} direction="right" speed="slow" />
    </section>
  );
}
