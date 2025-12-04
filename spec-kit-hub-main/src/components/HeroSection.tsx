import { ArrowRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import FloatingTags from "./FloatingTags";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Floating tags - top rows */}
      <div className="absolute top-24 left-0 right-0 space-y-4 opacity-60">
        <FloatingTags direction="left" speed="normal" />
        <FloatingTags direction="right" speed="slow" />
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 animate-fade-in-up">
          <span className="text-primary">agentii-kit</span>
          <span className="text-foreground"> — Power Your</span>
          <br />
          <span className="text-foreground">AI Agents</span>
        </h1>
        
        <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          Curated <span className="text-primary">spec-kits</span> with working principles, plans, and tasking methods — 
          <br className="hidden md:block" />
          helping millions build with{" "}
          <span className="text-warning">Claude Code</span>,{" "}
          <span className="text-success">Cursor</span>, and beyond.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <Button variant="primary" size="lg">
            Browse Kits
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button variant="ghost" size="lg">
            <Github className="w-4 h-4 mr-2" />
            View on GitHub
          </Button>
        </div>
      </div>

      {/* Floating tags - bottom rows */}
      <div className="absolute bottom-16 left-0 right-0 space-y-4 opacity-60">
        <FloatingTags direction="right" speed="normal" variant="alt" />
        <FloatingTags direction="left" speed="slow" variant="alt" />
      </div>

      {/* Accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default HeroSection;
