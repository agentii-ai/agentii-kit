import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ExternalLink, Github, Briefcase, GraduationCap, Mail, Phone, FileText, Twitter, Linkedin } from "lucide-react";

const About = () => {
  const education = [
    "Computer Science, MIT",
    "Machine Learning, Stanford",
    "Systems Design, Berkeley",
  ];

  const workHistory = [
    { company: "Google", year: "2014" },
    { company: "Amazon", year: "2018" },
    { company: "Microsoft", year: "2022" },
  ];

  const portfolio = [
    {
      title: "Agent Framework",
      description: "A comprehensive toolkit for building autonomous AI agents with modular architecture.",
      tags: ["AI", "Python", "Framework"],
    },
    {
      title: "Kit Manager",
      description: "CLI tool for managing and deploying agentii-kits across multiple environments.",
      tags: ["CLI", "DevOps", "Go"],
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
                  <h1 className="text-3xl font-semibold text-foreground">About</h1>
                </div>
              </div>

              {/* Right Column - Content */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <p className="text-text-secondary leading-relaxed">
                    Agentii-kit is an open-source ecosystem of curated templates, specifications, and 
                    toolkits designed to accelerate the development of AI-powered agents. Built by 
                    developers, for developers—but <span className="text-foreground font-medium">accessible 
                    to product managers, designers, and technical writers</span> who want to understand 
                    and contribute to agent-based systems.
                  </p>
                  <p className="text-text-secondary leading-relaxed">
                    Our mission is to <span className="text-foreground font-medium">democratize agent 
                    development</span> by providing battle-tested patterns, clear documentation, and a 
                    community-driven approach to building the next generation of intelligent software. 
                    Whether you're building <span className="text-foreground font-medium">autonomous 
                    workflows, conversational interfaces, or complex multi-agent systems</span>, 
                    agentii-kit provides the foundation you need.
                  </p>
                </div>

                {/* Education */}
                <div className="pt-6 border-t border-border">
                  <div className="flex items-center gap-2 mb-4">
                    <GraduationCap className="w-4 h-4 text-text-muted" />
                    <h2 className="text-lg font-semibold text-foreground">Education</h2>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {education.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1.5 text-sm text-text-secondary bg-surface border border-border rounded-lg"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Work History */}
                <div className="pt-6 border-t border-border">
                  <div className="flex items-center gap-2 mb-4">
                    <Briefcase className="w-4 h-4 text-text-muted" />
                    <h2 className="text-lg font-semibold text-foreground">Work history</h2>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    {workHistory.map((item) => (
                      <span
                        key={item.company}
                        className="px-3 py-1.5 text-sm text-text-secondary bg-surface border border-border rounded-lg"
                      >
                        {item.company} • {item.year}
                      </span>
                    ))}
                    <Button variant="outline" size="sm" className="rounded-lg">
                      See all
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Portfolio Section */}
          <section>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Column - Title */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <h2 className="text-3xl font-semibold text-foreground">Portfolio</h2>
                </div>
              </div>

              {/* Right Column - Description */}
              <div className="space-y-4">
                <p className="text-text-secondary leading-relaxed">
                  Explore our featured projects and contributions to the agent ecosystem. Each project 
                  represents <span className="text-foreground font-medium">months of research, 
                  development, and community feedback</span> to ensure the highest quality tooling 
                  for agent development.
                </p>
              </div>
            </div>

            {/* Portfolio Cards */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              {portfolio.map((project) => (
                <div
                  key={project.title}
                  className="group relative overflow-hidden rounded-lg border border-border bg-surface hover:border-primary/50 transition-all duration-200"
                >
                  {/* Card Header */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-md">
                      {project.title}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 pt-16 min-h-[280px] flex flex-col justify-end bg-gradient-to-b from-surface via-surface to-surface-hover">
                    <p className="text-text-secondary text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs font-mono text-text-muted bg-background rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Hover Actions */}
                    <div className="flex gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button variant="outline" size="sm" className="flex-1">
                        <ExternalLink className="w-3 h-3 mr-2" />
                        View Project
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Github className="w-4 h-4" />
                      </Button>
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
