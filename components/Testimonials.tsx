"use client";

import * as React from "react";
import { Quote, Github, Twitter, Linkedin } from "lucide-react";

export function Testimonials() {
  return (
    <section className="py-12 mb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Quote Section */}
            <div className="space-y-6">
              <Quote className="h-12 w-12 text-primary opacity-50" />
              <blockquote className="text-xl md:text-2xl font-medium text-foreground leading-relaxed">
                "agentii-kit has revolutionized how we build AI agents. The
                spec-kits are production-ready and save us weeks of development
                time. It's become an essential part of our workflow."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg">
                  SC
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    Sarah Chen
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Senior Engineering Lead, TechCorp
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 pt-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://x.com/agentii_ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Avatar Section */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="h-64 w-64 rounded-2xl bg-gradient-to-br from-primary/20 via-accent/20 to-purple-500/20 border border-border flex items-center justify-center">
                  <div className="h-48 w-48 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-6xl">
                    SC
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 h-16 w-16 rounded-full bg-primary/20 blur-xl" />
                <div className="absolute -bottom-4 -left-4 h-20 w-20 rounded-full bg-accent/20 blur-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
