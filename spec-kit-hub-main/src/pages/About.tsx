import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Github, Briefcase, Mail, Phone, FileText, Twitter, Linkedin, Zap, Database, BarChart3, Bot, Layers, GitBranch, CheckCircle2, Sparkles } from "lucide-react";

const About = () => {
  // Spec-Kit categories from the overview
  const specKitTypes = [
    { name: "PM-Kit", description: "Product Management workflows for launching products and finding PMF", icon: "📊" },
    { name: "Marketing-Kit", description: "Campaign operations and brand management for growth teams", icon: "📢" },
    { name: "Legal-Kit", description: "Contract review and compliance automation", icon: "⚖️" },
    { name: "Startup-Kit", description: "Founder workflows from idea to funding", icon: "🚀" },
    { name: "Edu-Kit", description: "Course creation and educational content development", icon: "🎓" },
    { name: "Dev-Kit", description: "Software development specifications and workflows", icon: "💻" },
  ];

  // Spec-Kit 4-file architecture
  const specKitArchitecture = [
    { file: "constitution.md", purpose: "The Laws", description: "Immutable rules, standards, and constraints", icon: Layers },
    { file: "spec.md", purpose: "The Goal", description: "Detailed requirements for your project", icon: FileText },
    { file: "plan.md", purpose: "The Strategy", description: "High-level phases and research notes", icon: GitBranch },
    { file: "tasks.md", purpose: "The Execution", description: "Granular, checkable implementation steps", icon: CheckCircle2 },
  ];

  // Supported AI Agents
  const supportedAgents = [
    "Claude Code", "Cursor", "GitHub Copilot", "Windsurf", "Gemini CLI", "Codex CLI", "Qoder CLI", "Roo Code"
  ];

  // agentii.ai core capabilities from branding_uvp.md
  const agentiiCapabilities = [
    {
      title: "Agentic Analytics",
      description: "Human-like iterative search & reasoning. The system approaches each question like a senior analyst—breaking it down, searching intelligently, and refining until the answer is decision-ready.",
      icon: Bot,
    },
    {
      title: "Smart Data Unification",
      description: "Unify public info and proprietary data into one harmonized layer. Captures signals from reports, transcripts, spreadsheets, and videos—automatically contextualized and ranked.",
      icon: Database,
    },
    {
      title: "Multi-Agent Orchestration",
      description: "Planner, Retriever, Extractor, Verifier, and Synthesizer Agents coordinate in real time to produce clear, trustworthy outputs.",
      icon: Zap,
    },
    {
      title: "Smart Synthesis",
      description: "Turn inputs into insightful narratives & interactive dashboards. Combine insights across documents into crisp summaries for IC meetings and portfolio reviews.",
      icon: BarChart3,
    },
  ];

  const testimonials = [
    {
      name: "Andrew Polit",
      initials: "AP",
      quote: "Agentii-kit transformed how our team approaches AI agent development. The templates are battle-tested and the documentation is exceptional. We shipped our first agent in half the time.",
    },
    {
      name: "Sutasoma Asmoro",
      initials: "SA",
      quote: "As a product manager, I finally have tools that let me understand and contribute to our agent architecture. The specs are clear enough for non-engineers to review and provide feedback.",
    },
    {
      name: "Asura Jikitama",
      initials: "AJ",
      quote: "The community around agentii-kit is incredible. Every question gets answered, and the contributors are constantly improving the ecosystem. This is open-source done right.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* About Section */}
          <section className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Column - Title */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <h1 className="text-3xl font-semibold text-foreground">About agentii-kit</h1>
                </div>
                <p className="text-sm text-primary font-medium">
                  Open Source by agentii.ai
                </p>
              </div>

              {/* Right Column - Content */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <p className="text-text-secondary leading-relaxed">
                    <span className="text-primary font-semibold">agentii-kit</span> is an open-source 
                    ecosystem of curated templates built on{" "}
                    <span className="text-amber-400 font-medium">Spec-Driven Development (SDD)</span>
                    —a methodology that <span className="text-emerald-400 font-medium">flips the script</span> on 
                    traditional software development. Built by{" "}
                    <a href="https://agentii.ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
                      agentii.ai
                    </a>.
                  </p>
                  <p className="text-text-secondary leading-relaxed">
                    For decades, code has been king—specifications were just scaffolding. SDD changes this: 
                    <span className="text-sky-400 font-medium"> specifications become executable</span>, 
                    directly generating working implementations rather than just guiding them.
                  </p>
                  <p className="text-text-secondary leading-relaxed">
                    All kits are based on{" "}
                    <a href="https://github.com/github/spec-kit" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline font-medium">
                      GitHub's Spec Kit
                    </a>
                    —an open-source toolkit that lets you focus on{" "}
                    <span className="text-foreground font-medium">product scenarios</span> and{" "}
                    <span className="text-foreground font-medium">predictable outcomes</span> instead of 
                    vibe coding from scratch.
                  </p>
                </div>

                {/* Spec-Kit Types */}
                <div className="pt-6 border-t border-border">
                  <div className="flex items-center gap-2 mb-4">
                    <Briefcase className="w-4 h-4 text-text-muted" />
                    <h2 className="text-lg font-semibold text-foreground">Available Spec-Kits</h2>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {specKitTypes.map((kit) => (
                      <div
                        key={kit.name}
                        className="px-3 py-2 text-sm bg-surface border border-border rounded-lg"
                      >
                        <span className="mr-2">{kit.icon}</span>
                        <span className="text-foreground font-medium">{kit.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Spec-Driven Development Section */}
          <section className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Column - Title */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  <h2 className="text-3xl font-semibold text-foreground">Spec-Driven Development</h2>
                </div>
                <p className="text-text-secondary">
                  The <span className="text-amber-400 font-medium">4-file architecture</span> that powers every kit.
                </p>
              </div>

              {/* Right Column - Description */}
              <div className="space-y-4">
                <p className="text-text-secondary leading-relaxed">
                  Every agentii-kit project uses a structured <span className="text-foreground font-medium">file-based workflow</span> that 
                  forces AI to <span className="text-emerald-400 font-medium">"think" before it acts</span>. 
                  Instead of chat-based improvisation, the AI reads and writes to specific context files.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  Works with <span className="text-purple-400 font-medium">Claude Code</span>,{" "}
                  <span className="text-sky-400 font-medium">Cursor</span>,{" "}
                  <span className="text-emerald-400 font-medium">GitHub Copilot</span>,{" "}
                  <span className="text-amber-400 font-medium">Windsurf</span>, and 15+ other AI agents.
                </p>
              </div>
            </div>

            {/* 4-File Architecture Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              {specKitArchitecture.map((item, index) => (
                <div
                  key={item.file}
                  className="group relative overflow-hidden rounded-lg border border-border bg-surface hover:border-amber-400/50 transition-all duration-200 p-5"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-amber-400/10">
                      <item.icon className="w-4 h-4 text-amber-400" />
                    </div>
                    <span className="text-xs font-mono text-amber-400">{item.file}</span>
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-1">
                    {item.purpose}
                  </h3>
                  <p className="text-text-secondary text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Supported Agents */}
            <div className="mt-8 p-4 rounded-lg bg-surface border border-border">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">Supported AI Agents</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {supportedAgents.map((agent) => (
                  <span
                    key={agent}
                    className="px-2 py-1 text-xs font-medium rounded-md bg-primary/10 text-primary border border-primary/20"
                  >
                    {agent}
                  </span>
                ))}
                <span className="px-2 py-1 text-xs font-medium rounded-md bg-text-muted/10 text-text-muted">
                  +8 more
                </span>
              </div>
            </div>
          </section>

          {/* agentii.ai Capabilities Section */}
          <section className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Column - Title */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <h2 className="text-3xl font-semibold text-foreground">Powered by agentii.ai</h2>
                </div>
                <p className="text-text-secondary">
                  The agentic intelligence platform redefining investment research for institutions.
                </p>
              </div>

              {/* Right Column - Description */}
              <div className="space-y-4">
                <p className="text-text-secondary leading-relaxed">
                  agentii.ai is <span className="text-foreground font-medium">the first agentic-native 
                  intelligence platform</span> built for institutional investors. We help analysts see 
                  market shifts before they happen with AI-powered research.
                </p>
              </div>
            </div>

            {/* Capabilities Cards */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              {agentiiCapabilities.map((capability) => (
                <div
                  key={capability.title}
                  className="group relative overflow-hidden rounded-lg border border-border bg-surface hover:border-primary/50 transition-all duration-200 p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <capability.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {capability.title}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {capability.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="mt-20">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Column - Title */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <h2 className="text-3xl font-semibold text-foreground">Testimonials</h2>
                </div>
              </div>

              {/* Right Column - Content */}
              <div className="space-y-6">
                <p className="text-text-secondary leading-relaxed">
                  Hear from developers, product managers, and technical leads who have{" "}
                  <span className="text-foreground font-medium">integrated agentii-kit into their workflows</span>.
                  Our community spans startups to enterprise teams.
                </p>

                {/* Testimonial Cards */}
                <div className="space-y-6">
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={testimonial.name}
                      className={`py-6 ${index !== testimonials.length - 1 ? "border-b border-border" : ""}`}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <Avatar className="w-10 h-10 bg-surface border border-border">
                          <AvatarFallback className="text-sm font-medium text-text-secondary bg-surface">
                            {testimonial.initials}
                          </AvatarFallback>
                        </Avatar>
                        <span className="font-medium text-foreground">{testimonial.name}</span>
                      </div>
                      <p className="text-text-secondary leading-relaxed text-sm">
                        {testimonial.quote}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="mt-20 pt-12 border-t border-border">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              {/* Left Column - Headline */}
              <div>
                <h2 className="text-3xl lg:text-4xl font-semibold text-foreground leading-tight">
                  Let's create something<br />beautiful together
                </h2>
              </div>

              {/* Right Column - Contact Info */}
              <div className="flex flex-wrap items-center gap-6 text-sm">
                <a
                  href="tel:+17348123162"
                  className="flex items-center gap-2 text-text-secondary hover:text-foreground transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  (+1) 734 812 3162
                </a>
                <a
                  href="mailto:hello@agentii-kit.dev"
                  className="flex items-center gap-2 text-text-secondary hover:text-foreground transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  hello@agentii-kit.dev
                </a>
                <a
                  href="#legal"
                  className="flex items-center gap-2 text-text-secondary hover:text-foreground transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  Legal page
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-6">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Left - Branding */}
            <div className="flex items-center gap-2 text-sm text-text-muted">
              <span>Powered by</span>
              <span className="font-semibold text-foreground">agentii-kit</span>
            </div>

            {/* Center - Social Links */}
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="rounded-lg">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              <Button variant="outline" size="sm" className="rounded-lg">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
              <Button variant="outline" size="sm" className="rounded-lg">
                <Twitter className="w-4 h-4 mr-2" />
                Twitter
              </Button>
              <Button variant="default" size="sm" className="rounded-lg">
                Contact Me
              </Button>
            </div>

            {/* Right - Copyright */}
            <div className="text-sm text-text-muted">
              © 2025 agentii-kit. All rights reserved
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
