"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Github } from "lucide-react";
import { Button } from "./ui/button";
import { FloatingTags } from "./FloatingTags";

// Tags matching the screenshot exactly - row 1 (top)
const topTagsRow1 = [
  "spec-driven", "spec-kit", "job-kits", "constitution-engineering", "ai-agents",
  "claude-code", "cursor", "windsurf", "agent-ready", "pm-kit",
  "marketing-kit", "startup-kit", "edu-kit", "legal-kit", "seo-kit",
  "launch-kit", "lecture-kit", "research-kit"
];

// Tags matching the screenshot exactly - row 2
const topTagsRow2 = [
  "pmf-kit", "blog-tech-kit", "twitter-init-kit", "product-management", "product-design",
  "roadmap", "sprint-planning", "backlog", "experimentation", "growth-loops",
  "content-strategy", "twitter-campaigns", "blog-workflow", "founder-ops", "growth-marketing",
  "user-research", "persona-mapping", "kpi-tracking"
];

// Tags matching the screenshot exactly - row 3 (bottom area)
const bottomTagsRow1 = [
  "spec.md", "plan.md", "tasks.md", "constitution.md", "slash-commands",
  "workflow-design", "multi-agent", "prompt-architecture", "memory", "refs",
  "templates", "cli-tooling", "project-setup", "quality-gates", "pdca-cycles",
  "agentic-workflows"
];

// Tags matching the screenshot exactly - row 4
const bottomTagsRow2 = [
  "pmf-discovery", "market-research", "campaign-briefs", "launch-checklists", "spec-review",
  "feature-specs", "gtm-plan", "onboarding-flows", "support-runbooks", "ops-playbooks",
  "design-system-kits", "data-pipelines", "incident-response", "analytics-instrumentation",
  "documentation-kits", "team-handbooks"
];

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-16">
      {/* Background gradient - dark to slightly lighter */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating tags - top area (two rows) */}
      <div className="absolute top-20 left-0 right-0 space-y-3 opacity-60">
        <FloatingTags tags={topTagsRow1} direction="left" speed="normal" />
        <FloatingTags tags={topTagsRow2} direction="right" speed="slow" />
      </div>

      {/* Main content - centered */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Main Headline - matching screenshot typography */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 animate-fade-in-up">
          <span className="text-primary">agentii-kit</span>
          <span className="text-foreground"> — Power Your</span>
          <br />
          <span className="text-foreground">AI Agents</span>
        </h1>

        {/* Subcopy with colored highlights - matching screenshot exactly */}
        <p
          className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-2 animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          Curated <a
            href="https://github.com/github/spec-kit"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >spec-kits</a> with working principles, plans, and tasking methods
        </p>
        
        {/* Secondary line with colored tool names */}
        <p 
          className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-8 animate-fade-in-up"
          style={{ animationDelay: "0.15s" }}
        >
          — helping millions build with{" "}
          <span className="text-warning">Claude Code</span>,{" "}
          <span className="text-success">Cursor</span>, and beyond.
        </p>

        {/* CTA Buttons - matching screenshot layout */}
        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/25" asChild>
            <Link href="/kits">
              Browse Kits
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button variant="ghost" size="lg" className="gap-2 text-muted-foreground hover:text-foreground" asChild>
            <a
              href="https://github.com/agentii-ai"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4" />
              View on GitHub
            </a>
          </Button>
        </div>
      </div>

      {/* Floating tags - bottom area (two rows) */}
      <div className="absolute bottom-12 left-0 right-0 space-y-3 opacity-60">
        <FloatingTags tags={bottomTagsRow1} direction="right" speed="normal" />
        <FloatingTags tags={bottomTagsRow2} direction="left" speed="slow" />
      </div>

      {/* Accent glow effect in center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
