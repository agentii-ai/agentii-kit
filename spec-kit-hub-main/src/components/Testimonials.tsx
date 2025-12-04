import { Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "./ui/button";

const Testimonials = () => {
  return (
    <section className="py-16 bg-surface-dark">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-2 h-2 rounded-full bg-primary" />
          <h2 className="text-xl font-semibold text-foreground">
            What teams are saying
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left Content */}
          <div className="bg-gradient-to-br from-card to-surface-hover border border-border rounded-xl p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl lg:text-3xl font-semibold text-foreground leading-tight mb-6">
                "agentii-kit transformed how our team builds AI agents with{" "}
                <span className="text-primary">5 years of experience</span>{" "}
                distilled into spec-kits"
              </h3>
              <p className="text-text-secondary text-sm lg:text-base leading-relaxed mb-8">
                The structured approach cut our development time in half. Finally, a resource 
                that bridges the gap between technical specs and business requirements. Our PMs 
                and developers now speak the same language.
              </p>
              <Button 
                variant="outline" 
                className="border-border text-foreground hover:bg-surface-hover hover:border-primary/30 transition-all duration-200"
              >
                CONTACT US
              </Button>
            </div>
            
            <div className="flex items-center gap-6 mt-8 pt-6 border-t border-border">
              <a 
                href="#" 
                className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors text-sm"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a 
                href="#" 
                className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors text-sm"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a 
                href="#" 
                className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors text-sm"
              >
                <Twitter className="w-4 h-4" />
                <span>Twitter</span>
              </a>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="bg-card border border-border rounded-xl overflow-hidden min-h-[400px] lg:min-h-[500px]">
            <div className="w-full h-full bg-gradient-to-br from-primary/20 via-surface-hover to-card flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-24 h-24 rounded-full bg-primary/20 border-2 border-primary/40 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary">SC</span>
                </div>
                <p className="font-semibold text-foreground text-lg">Sarah Chen</p>
                <p className="text-text-muted text-sm">Engineering Lead</p>
                <p className="text-primary text-sm font-mono">TechFlow AI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
