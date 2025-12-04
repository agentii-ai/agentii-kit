"use client";

import { Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  const education = ["MIT", "Stanford", "Berkeley"];
  const experience = ["Google", "Amazon", "Microsoft", "OpenAI"];

  const portfolio = [
    {
      title: "Agent Framework",
      description: "Open-source framework for building autonomous AI agents with Cursor and Claude Code",
      tags: ["AI", "TypeScript", "React"],
    },
    {
      title: "Spec-Kit Hub",
      description: "Centralized repository for specification templates across different disciplines",
      tags: ["Spec", "Templates", "Documentation"],
    },
    {
      title: "agentii-kit",
      description: "Comprehensive toolkit for developers, PMs, and teams to standardize workflows",
      tags: ["Toolkit", "Open Source", "Community"],
    },
  ];

  const testimonials = [
    {
      quote: "agentii-kit revolutionized how our team approaches AI agent development. Highly recommended.",
      author: "Jane Smith",
      role: "CTO, TechCorp",
    },
    {
      quote: "The spec templates are production-ready and follow industry best practices.",
      author: "John Davis",
      role: "Engineering Manager, Innovate Labs",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* About Section */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-5xl font-bold text-foreground mb-8">About agentii-kit</h1>

          <div className="prose prose-invert max-w-none mb-12">
            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              agentii-kit is an open-source initiative dedicated to standardizing specification templates for AI agent development. We believe that well-structured, documented specifications are the foundation of robust AI systems.
            </p>

            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              Our mission is to empower developers, product managers, designers, and entire teams with battle-tested specification kits that can be immediately applied to real-world projects. Whether you're building with Claude Code, Cursor, or other modern development tools, agentii-kit provides the structure you need.
            </p>

            <p className="text-text-secondary text-lg leading-relaxed">
              We serve teams across development, product management, marketing, legal, finance, design, and operations — because great AI agents require perspectives from all disciplines.
            </p>
          </div>

          {/* Education & Experience */}
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Education</h3>
              <div className="flex flex-wrap gap-3">
                {education.map((school) => (
                  <span
                    key={school}
                    className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium text-foreground"
                  >
                    {school}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Experience</h3>
              <div className="flex flex-wrap gap-3">
                {experience.map((company) => (
                  <span
                    key={company}
                    className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium text-foreground"
                  >
                    {company}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-12">Featured Projects</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {portfolio.map((project) => (
              <div
                key={project.title}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/40 transition-colors"
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-text-secondary text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-primary/10 text-primary rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-12">What People Say</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author} className="bg-card border border-border rounded-lg p-6">
                <p className="text-text-secondary mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="text-foreground font-semibold">{testimonial.author}</p>
                  <p className="text-text-secondary text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Let's create something beautiful together
          </h2>

          <p className="text-text-secondary text-lg mb-12 max-w-2xl mx-auto">
            Have questions about agentii-kit? Want to contribute? Let's connect.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="primary" size="lg" asChild>
              <a href="mailto:contact@agentii-kit.com">Get in Touch</a>
            </Button>

            <Button variant="outline" size="lg" asChild>
              <a href="https://github.com/agentii-kit" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </a>
            </Button>

            <Button variant="outline" size="lg" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </a>
            </Button>

            <Button variant="outline" size="lg" asChild>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-4 w-4 mr-2" />
                Twitter
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
