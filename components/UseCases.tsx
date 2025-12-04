"use client";

import * as React from "react";
import { Code, Layout, Scale, DollarSign, Sparkles } from "lucide-react";

export function UseCases() {
  return (
    <section className="py-12 mb-12">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Built for Every Discipline
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From developers to product managers, our spec-kits empower teams
            across all disciplines
          </p>
        </div>

        {/* Metrics Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="text-center p-8 border border-border rounded-lg bg-card hover:border-primary/40 transition-colors">
            <div className="text-4xl font-bold text-primary mb-2">17+</div>
            <div className="text-sm text-muted-foreground">
              Production-Ready Spec Kits
            </div>
          </div>
          <div className="text-center p-8 border border-border rounded-lg bg-card hover:border-primary/40 transition-colors">
            <div className="text-4xl font-bold text-accent mb-2">7</div>
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
          {/* Developer Kits */}
          <div className="group relative overflow-hidden rounded-lg border border-border bg-card hover:border-blue-500/40 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative p-6 space-y-4">
              <div className="h-12 w-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <Code className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                Developer Kits
              </h3>
              <p className="text-sm text-muted-foreground">
                Component generators, API docs, database schemas, and more for
                engineering teams
              </p>
              <div className="pt-2">
                <span className="text-xs font-semibold text-blue-400">
                  3 Kits Available
                </span>
              </div>
            </div>
          </div>

          {/* Product Management */}
          <div className="group relative overflow-hidden rounded-lg border border-border bg-card hover:border-purple-500/40 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative p-6 space-y-4">
              <div className="h-12 w-12 rounded-lg bg-purple-500/10 flex items-center justify-center">
                <Layout className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                Product Management
              </h3>
              <p className="text-sm text-muted-foreground">
                Spec generators, sprint planning, roadmap builders for product
                teams
              </p>
              <div className="pt-2">
                <span className="text-xs font-semibold text-purple-400">
                  3 Kits Available
                </span>
              </div>
            </div>
          </div>

          {/* Legal & Compliance */}
          <div className="group relative overflow-hidden rounded-lg border border-border bg-card hover:border-amber-500/40 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative p-6 space-y-4">
              <div className="h-12 w-12 rounded-lg bg-amber-500/10 flex items-center justify-center">
                <Scale className="h-6 w-6 text-amber-400" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                Legal & Compliance
              </h3>
              <p className="text-sm text-muted-foreground">
                Contract templates, privacy policies, compliance documentation
              </p>
              <div className="pt-2">
                <span className="text-xs font-semibold text-amber-400">
                  2 Kits Available
                </span>
              </div>
            </div>
          </div>

          {/* Finance */}
          <div className="group relative overflow-hidden rounded-lg border border-border bg-card hover:border-green-500/40 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative p-6 space-y-4">
              <div className="h-12 w-12 rounded-lg bg-green-500/10 flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                Finance
              </h3>
              <p className="text-sm text-muted-foreground">
                Financial models, budget planning, forecasting tools for finance
                teams
              </p>
              <div className="pt-2">
                <span className="text-xs font-semibold text-green-400">
                  2 Kits Available
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            And more categories including Marketing, Design, and Operations
          </p>
        </div>
      </div>
    </section>
  );
}
