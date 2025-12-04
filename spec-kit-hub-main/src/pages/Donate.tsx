import { Heart, Coffee, CreditCard, Github, ExternalLink, Star, Users, Code } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";

const Donate = () => {
  const donationTiers = [
    { amount: "$5", label: "Coffee", description: "Buy us a coffee" },
    { amount: "$15", label: "Supporter", description: "Support development" },
    { amount: "$50", label: "Sponsor", description: "Become a sponsor" },
    { amount: "Custom", label: "Custom", description: "Choose your amount" },
  ];

  const paymentMethods = [
    { 
      name: "GitHub Sponsors", 
      icon: Github, 
      description: "Support us directly through GitHub",
      url: "#",
      primary: true
    },
    { 
      name: "Buy Me a Coffee", 
      icon: Coffee, 
      description: "Quick one-time donations",
      url: "#",
      primary: false
    },
    { 
      name: "Open Collective", 
      icon: Users, 
      description: "Transparent community funding",
      url: "#",
      primary: false
    },
    { 
      name: "PayPal", 
      icon: CreditCard, 
      description: "Direct payment via PayPal",
      url: "#",
      primary: false
    },
  ];

  const stats = [
    { label: "GitHub Stars", value: "2.4k" },
    { label: "Contributors", value: "48" },
    { label: "Downloads", value: "15k+" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - About the Project */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Heart className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-medium">Support Open Source</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-semibold mb-4">
                <span className="text-foreground">Help Keep </span>
                <span className="text-primary">agentii-kit</span>
                <span className="text-foreground"> Free & Open</span>
              </h1>
              
              <p className="text-lg text-text-secondary leading-relaxed">
                agentii-kit is a free, open-source collection of spec-kits for AI agents. 
                We believe in making AI development accessible to everyone—developers, 
                product managers, and teams of all sizes.
              </p>
            </div>

            {/* Project Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div 
                  key={stat.label}
                  className="bg-surface rounded-lg p-4 border border-border"
                >
                  <div className="text-2xl font-semibold text-foreground">{stat.value}</div>
                  <div className="text-sm text-text-muted">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* What Your Donation Supports */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">
                What Your Donation Supports
              </h2>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Code className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Active Development</h3>
                    <p className="text-sm text-text-secondary">New spec-kits, bug fixes, and feature improvements</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Users className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Community Support</h3>
                    <p className="text-sm text-text-secondary">Documentation, tutorials, and community resources</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Star className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Infrastructure Costs</h3>
                    <p className="text-sm text-text-secondary">Hosting, CDN, and keeping the platform running</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Back Link */}
            <Link 
              to="/"
              className="inline-flex items-center gap-2 text-text-secondary hover:text-foreground transition-colors"
            >
              ← Back to Home
            </Link>
          </div>

          {/* Right Side - Donation Options */}
          <div className="space-y-8">
            {/* Donation Amount Selection */}
            <div className="bg-card rounded-xl border border-border p-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Choose an Amount
              </h2>
              
              <div className="grid grid-cols-2 gap-3 mb-6">
                {donationTiers.map((tier) => (
                  <button
                    key={tier.label}
                    className="group relative bg-surface hover:bg-surface-hover border border-border hover:border-primary/50 rounded-lg p-4 text-left transition-all duration-200"
                  >
                    <div className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {tier.amount}
                    </div>
                    <div className="text-sm text-text-secondary">{tier.description}</div>
                  </button>
                ))}
              </div>

              {/* Custom Amount Input */}
              <div className="mb-6">
                <label className="block text-sm text-text-secondary mb-2">
                  Or enter a custom amount
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted">$</span>
                  <input
                    type="number"
                    placeholder="0"
                    min="1"
                    className="w-full bg-surface border border-border rounded-lg py-3 pl-8 pr-4 text-foreground placeholder:text-text-muted focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="bg-card rounded-xl border border-border p-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Payment Methods
              </h2>
              
              <div className="space-y-3">
                {paymentMethods.map((method) => (
                  <a
                    key={method.name}
                    href={method.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center gap-4 p-4 rounded-lg border transition-all duration-200 ${
                      method.primary 
                        ? 'bg-primary/10 border-primary/30 hover:bg-primary/20 hover:border-primary/50' 
                        : 'bg-surface border-border hover:bg-surface-hover hover:border-primary/30'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      method.primary ? 'bg-primary/20' : 'bg-muted'
                    }`}>
                      <method.icon className={`w-5 h-5 ${method.primary ? 'text-primary' : 'text-text-secondary'}`} />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-foreground flex items-center gap-2">
                        {method.name}
                        {method.primary && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary">
                            Recommended
                          </span>
                        )}
                      </div>
                      <div className="text-sm text-text-secondary">{method.description}</div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-text-muted group-hover:text-foreground transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Crypto Notice */}
            <div className="bg-surface rounded-lg border border-border p-4">
              <p className="text-sm text-text-secondary">
                <span className="font-medium text-foreground">Prefer crypto?</span>{" "}
                We also accept donations in ETH, BTC, and other cryptocurrencies. 
                Contact us at{" "}
                <a href="mailto:donate@agentii-kit.dev" className="text-primary hover:underline">
                  donate@agentii-kit.dev
                </a>
              </p>
            </div>

            {/* Thank You Note */}
            <div className="text-center text-text-secondary text-sm">
              <Heart className="w-4 h-4 inline-block text-primary mr-1" />
              Every contribution helps keep agentii-kit free and open for everyone.
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Donate;
