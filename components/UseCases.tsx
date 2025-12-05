"use client";

import * as React from "react";
import { Target, Megaphone, Code, TrendingUp } from "lucide-react";
import { allKits, KitCategory } from "@/data/kits";

export function UseCases() {
  // Calculate real counts from data
  const totalKits = allKits.length;
  const pmKits = allKits.filter(k => k.category === KitCategory.PM).length;
  const marketingKits = allKits.filter(k => k.category === KitCategory.MARKETING).length;
  const totalCategories = Object.values(KitCategory).length;

  return (
    <section className="py-12 mb-12">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Spec-Driven Kits for Every Job
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From product-market fit discovery to content marketing, our spec-kits
            power AI agents across professional disciplines
          </p>
        </div>

        {/* Metrics Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="text-center p-8 border border-border rounded-lg bg-card hover:border-primary/40 transition-colors">
            <div className="text-4xl font-bold text-primary mb-2">{totalKits}</div>
            <div className="text-sm text-muted-foreground">
              Production-Ready Spec Kits
            </div>
          </div>
          <div className="text-center p-8 border border-border rounded-lg bg-card hover:border-primary/40 transition-colors">
            <div className="text-4xl font-bold text-accent mb-2">{totalCategories}</div>
            <div className="text-sm text-muted-foreground">
              Discipline Categories
            </div>
          </div>
          <div className="text-center p-8 border border-border rounded-lg bg-card hover:border-primary/40 transition-colors">
            <div className="text-4xl font-bold text-success mb-2">100%</div>
            <div className="text-sm text-muted-foreground">
              Open Source & Free
            </div>
          </div>
        </div>

        {/* Use Case Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Product Management - PMF Kit */}
          <a
            href="https://github.com/agentii-ai/pmf-kit"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-lg border border-border bg-card hover:border-purple-500/40 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative p-6 space-y-4">
              <div className="h-12 w-12 rounded-lg bg-purple-500/10 flex items-center justify-center">
                <Target className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                🎯 PMF Kit
              </h3>
              <p className="text-sm text-muted-foreground">
                Systematic product-market fit discovery and validation for AI SaaS founders and PMs
              </p>
              <div className="pt-2">
                <span className="text-xs font-semibold text-purple-400">
                  {pmKits} Kit{pmKits !== 1 ? 's' : ''} • PM-KIT
                </span>
              </div>
            </div>
          </a>

          {/* Marketing - Blog-Tech-Kit */}
          <a
            href="https://github.com/agentii-ai/blog-tech-kit"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-lg border border-border bg-card hover:border-pink-500/40 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative p-6 space-y-4">
              <div className="h-12 w-12 rounded-lg bg-pink-500/10 flex items-center justify-center">
                <Megaphone className="h-6 w-6 text-pink-400" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                📝 Blog-Tech-Kit
              </h3>
              <p className="text-sm text-muted-foreground">
                Build authority blogs faster with structured content strategy and AI-native editorial workflows
              </p>
              <div className="pt-2">
                <span className="text-xs font-semibold text-pink-400">
                  {marketingKits} Kits • MARKETING-KIT
                </span>
              </div>
            </div>
          </a>

          {/* Marketing - Twitter-Init-Kit */}
          <a
            href="https://github.com/agentii-ai/twitter-init-kit"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-lg border border-border bg-card hover:border-blue-500/40 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative p-6 space-y-4">
              <div className="h-12 w-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <svg className="h-6 w-6 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                🐦 Twitter-Init-Kit
              </h3>
              <p className="text-sm text-muted-foreground">
                Launch your AI product on Twitter with spec-driven campaigns, growth loops, and founder-led content
              </p>
              <div className="pt-2">
                <span className="text-xs font-semibold text-blue-400">
                  Featured • MARKETING-KIT
                </span>
              </div>
            </div>
          </a>

          {/* Coming Soon */}
          <div className="group relative overflow-hidden rounded-lg border border-dashed border-border bg-card/50 transition-all duration-300">
            <div className="relative p-6 space-y-4">
              <div className="h-12 w-12 rounded-lg bg-muted/50 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-muted-foreground">
                🚀 More Coming Soon
              </h3>
              <p className="text-sm text-muted-foreground">
                Growth-Hacking-Kit, Sales-Kit, SEO-Kit, and more spec-driven kits in development
              </p>
              <div className="pt-2">
                <span className="text-xs font-semibold text-muted-foreground">
                  DEV • LEGAL • FINANCE • OPS
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            All kits support Claude Code, Cursor, Windsurf, and other AI coding agents
          </p>
        </div>
      </div>
    </section>
  );
}
