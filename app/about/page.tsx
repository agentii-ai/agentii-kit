"use client";

import { Github, Linkedin, Twitter, Star, GitFork, ExternalLink, Sparkles, Layers, FileText, GitBranch, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  // GitHub repos - Built On (spec-kit foundation)
  const builtOnRepos = [
    {
      name: "github/spec-kit",
      description: "The original Spec-Driven Development toolkit by GitHub",
      stars: "2.1k",
      url: "https://github.com/github/spec-kit",
      badge: "🌱 Foundation",
      color: "text-emerald-400 bg-emerald-400/10 border-emerald-400/30",
    },
  ];

  // GitHub repos - Our Projects
  const ourRepos = [
    {
      name: "agentii-ai",
      description: "Organization home for agentic intelligence tools",
      stars: "—",
      url: "https://github.com/agentii-ai",
      badge: "🏠 Org",
      color: "text-primary bg-primary/10 border-primary/30",
    },
    {
      name: "agentii-ai/agentii-kit",
      description: "Curated spec-kits for AI agent workflows",
      stars: "128",
      url: "https://github.com/agentii-ai/agentii-kit",
      badge: "📦 Main",
      color: "text-amber-400 bg-amber-400/10 border-amber-400/30",
    },
    {
      name: "agentii-ai/pmf-kit",
      description: "Product-Market Fit specification templates",
      stars: "45",
      url: "https://github.com/agentii-ai/pmf-kit",
      badge: "🎯 PMF",
      color: "text-purple-400 bg-purple-400/10 border-purple-400/30",
    },
  ];

  // Spec-Kit 4-file architecture
  const specKitArchitecture = [
    { file: "constitution.md", purpose: "The Laws", description: "Immutable rules & constraints", icon: Layers, color: "text-emerald-400" },
    { file: "spec.md", purpose: "The Goal", description: "Detailed requirements", icon: FileText, color: "text-sky-400" },
    { file: "plan.md", purpose: "The Strategy", description: "High-level phases", icon: GitBranch, color: "text-amber-400" },
    { file: "tasks.md", purpose: "The Execution", description: "Checkable steps", icon: CheckCircle2, color: "text-purple-400" },
  ];

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
      {/* Hero About Section */}
      <section className="relative py-20 border-b border-border overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Decorative glows */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-20 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl" />

        <div className="relative container mx-auto px-4 max-w-5xl">
          {/* Badge */}
          <div className="flex items-center gap-2 mb-6">
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
              Open Source by agentii.ai
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            About <span className="text-primary">agentii-kit</span>
          </h1>

          <div className="max-w-3xl space-y-6">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              <span className="text-primary font-semibold">agentii-kit</span> is an open-source ecosystem
              built on <span className="text-amber-400 font-medium">Spec-Driven Development</span>—a methodology
              inspired by <a href="https://github.com/github/spec-kit" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">spec-kit</a>
              that makes <span className="text-emerald-400 font-medium">specifications executable</span>,
              not just documentation.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Our mission is to empower <span className="text-foreground font-medium">developers</span>,{" "}
              <span className="text-foreground font-medium">product managers</span>,{" "}
              <span className="text-foreground font-medium">designers</span>, and teams with battle-tested 
              kits. Whether you're building with{" "}
              <span className="text-purple-400 font-medium">Claude Code</span>,{" "}
              <span className="text-sky-400 font-medium">Cursor</span>, or{" "}
              <span className="text-amber-400 font-medium">Windsurf</span>—we provide the structure you need.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              We serve teams across <span className="text-emerald-400">development</span>,{" "}
              <span className="text-amber-400">product</span>,{" "}
              <span className="text-pink-400">marketing</span>,{" "}
              <span className="text-blue-400">legal</span>,{" "}
              <span className="text-purple-400">finance</span>, and{" "}
              <span className="text-orange-400">operations</span>—because great AI agents require 
              perspectives from all disciplines.
            </p>
          </div>
        </div>
      </section>

      {/* GitHub Repos Section */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Built On - Spec Kit */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="w-5 h-5 text-emerald-400" />
                <h3 className="text-xl font-semibold text-foreground">Built On</h3>
              </div>
              <div className="space-y-3">
                {builtOnRepos.map((repo) => (
                  <a
                    key={repo.name}
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-4 p-4 bg-card border border-border rounded-lg hover:border-emerald-400/50 hover:bg-card/80 transition-all"
                  >
                    <div className="p-2 rounded-lg bg-[#161B22] border border-[#30363d]">
                      <Github className="w-5 h-5 text-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`px-2 py-0.5 text-xs font-medium rounded border ${repo.color}`}>
                          {repo.badge}
                        </span>
                      </div>
                      <p className="font-mono text-sm text-primary group-hover:underline">{repo.name}</p>
                      <p className="text-sm text-muted-foreground mt-1">{repo.description}</p>
                      <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Star className="w-3 h-3" /> {repo.stars}
                        </span>
                        <span className="flex items-center gap-1 text-emerald-400">
                          <ExternalLink className="w-3 h-3" /> View on GitHub
                        </span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Our Projects */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Github className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">Our Projects</h3>
              </div>
              <div className="space-y-3">
                {ourRepos.map((repo) => (
                  <a
                    key={repo.name}
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary/50 hover:bg-card/80 transition-all"
                  >
                    <div className="p-2 rounded-lg bg-[#161B22] border border-[#30363d]">
                      <Github className="w-5 h-5 text-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`px-2 py-0.5 text-xs font-medium rounded border ${repo.color}`}>
                          {repo.badge}
                        </span>
                      </div>
                      <p className="font-mono text-sm text-primary group-hover:underline">{repo.name}</p>
                      <p className="text-sm text-muted-foreground mt-1">{repo.description}</p>
                      <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Star className="w-3 h-3" /> {repo.stars}
                        </span>
                        <span className="flex items-center gap-1 text-primary">
                          <ExternalLink className="w-3 h-3" /> View on GitHub
                        </span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spec-Driven Development Section */}
      <section className="py-16 border-b border-border bg-gradient-to-b from-amber-500/5 to-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/20 mb-4">
              🌱 Spec-Driven Development
            </span>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              The <span className="text-amber-400">4-File Architecture</span> from <a href="https://github.com/github/spec-kit" target="_blank" rel="noopener noreferrer" className="hover:underline">spec-kit</a>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every agentii-kit uses a structured file-based workflow that forces AI to{" "}
              <span className="text-emerald-400 font-medium">"think" before it acts</span>.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {specKitArchitecture.map((item) => (
              <div
                key={item.file}
                className="group p-5 bg-card border border-border rounded-lg hover:border-amber-400/50 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-amber-400/10">
                    <item.icon className={`w-4 h-4 ${item.color}`} />
                  </div>
                  <span className={`text-xs font-mono ${item.color}`}>{item.file}</span>
                </div>
                <h3 className="text-base font-semibold text-foreground mb-1">{item.purpose}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
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
