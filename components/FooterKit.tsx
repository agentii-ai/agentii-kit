import Link from "next/link";
import { Github, Twitter, Heart } from "lucide-react";

export function FooterKit() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "/kits", label: "Browse Kits" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
    { href: "/donate", label: "Donate" },
  ];

  const resourceLinks = [
    { href: "/getting-started", label: "Getting Started" },
    { href: "/contribute", label: "Contribute" },
    { href: "/changelog", label: "Changelog" },
    { href: "/roadmap", label: "Roadmap" },
  ];

  const legalLinks = [
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
    { href: "/license", label: "License" },
  ];

  return (
    <footer className="w-full border-t border-border bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold text-foreground">
                agentii-kit
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Open source from{" "}
              <a href="https://agentii.ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                agentii.ai
              </a>
              {" "}— <br></br>The first agentic-native intelligence platform built for institutional investors

            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/agentii-ai"
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
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Resources
            </h3>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Support
            </h3>
            <p className="text-sm text-muted-foreground">
              Help us maintain and grow the agentii-kit community.
            </p>
            <Link
              href="/donate"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/90 transition-colors"
            >
              <Heart className="h-4 w-4" />
              Support Us
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} agentii-kit. Open source under MIT License.
            </p>
            <div className="flex items-center gap-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
