"use client";

import * as React from "react";
import Image from "next/image";
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
                "PMF Kit transformed how we validate product-market fit. Instead of 
                wandering through vague user research, the /pmfkit.pmf workflow forced us to 
                define personas, jobs-to-be-done, and success metrics upfront. We ran 
                structured discovery interviews and had evidence-backed go/no-go decisions 
                in weeks, not months. Spec-driven development isn't just for code—it's an 
                operating system for any knowledge work."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg">
                  HL
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    Harvey Lau
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Founder & CEO, AI DevTools Startup
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
                <div className="h-80 w-80 md:h-96 md:w-96 rounded-2xl bg-gradient-to-br from-primary/20 via-accent/20 to-purple-500/20 border border-border flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/testimonial.jpg"
                    alt="Testimonial portrait"
                    width={256}
                    height={256}
                    className="h-full w-full object-cover"
                  />
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
