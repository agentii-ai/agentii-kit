"use client";

import * as React from "react";
import Link from "next/link";
import { Heart, Code, Users2, Server, Github, Coffee, Users, CreditCard, ExternalLink, ArrowLeft } from "lucide-react";

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = React.useState<string>("$5");
  const [customAmount, setCustomAmount] = React.useState<string>("");
  const [selectedMethod, setSelectedMethod] = React.useState<string>("github");

  const amounts = [
    { value: "$5", label: "Buy us a coffee" },
    { value: "$15", label: "Support development" },
    { value: "$50", label: "Become a sponsor" },
    { value: "Custom", label: "Choose your amount" },
  ];

  const paymentMethods = [
    {
      id: "github",
      name: "GitHub Sponsors",
      description: "Support us directly through GitHub",
      icon: Github,
      url: "https://github.com/sponsors/agentii-ai",
      recommended: true,
      accentBg: "bg-emerald-500/15",
      accentText: "text-emerald-400",
    },
    {
      id: "coffee",
      name: "Buy Me a Coffee",
      description: "Quick one-time donations",
      icon: Coffee,
      url: "https://buymeacoffee.com/agentii",
      recommended: false,
      accentBg: "bg-amber-500/15",
      accentText: "text-amber-400",
    },
    {
      id: "collective",
      name: "Open Collective",
      description: "Transparent community funding",
      icon: Users,
      url: "https://opencollective.com/agentii",
      recommended: false,
      accentBg: "bg-pink-500/15",
      accentText: "text-pink-400",
    },
    {
      id: "paypal",
      name: "PayPal",
      description: "Direct payment via PayPal",
      icon: CreditCard,
      url: "https://paypal.me/agentii",
      recommended: false,
      accentBg: "bg-sky-500/15",
      accentText: "text-sky-400",
    },
  ];

  const supports = [
    {
      icon: Code,
      title: "Active Development",
      description: "New spec-kits, bug fixes, and feature improvements",
      borderColor: "border-emerald-500/40",
      badgeBg: "bg-emerald-500/15",
      iconColor: "text-emerald-400",
    },
    {
      icon: Users2,
      title: "Community Support",
      description: "Documentation, tutorials, and community resources",
      borderColor: "border-sky-500/40",
      badgeBg: "bg-sky-500/15",
      iconColor: "text-sky-400",
    },
    {
      icon: Server,
      title: "Infrastructure Costs",
      description: "Hosting, CDN, and keeping the platform running",
      borderColor: "border-amber-500/40",
      badgeBg: "bg-amber-500/15",
      iconColor: "text-amber-400",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#020617] via-primary/10 to-background">
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Left Side - Info Section */}
        <div className="relative p-8 lg:p-12 xl:p-16 flex flex-col">
          <div className="pointer-events-none absolute inset-0 opacity-[0.35] bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.10),_transparent_60%),radial-gradient(circle_at_bottom_left,_rgba(34,197,94,0.12),_transparent_55%)]" />
          <div className="relative">
          {/* Badge */}
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/15 text-emerald-300 text-sm font-medium border border-emerald-400/40 shadow-sm shadow-emerald-500/30">
              <Heart className="w-4 h-4" />
              Support Open Source
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Help Keep <span className="text-primary">agentii-kit</span> Free & Open
          </h1>

          {/* Description */}
          <p className="text-muted-foreground mb-8 leading-relaxed max-w-xl">
            agentii-kit is a free, open-source collection of spec-kits for AI agents. We 
            believe in making AI development accessible to everyone—developers, 
            product managers, and teams of all sizes.
          </p>

          {/* What Your Donation Supports */}
          <div className="mb-auto">
            <h2 className="text-lg font-semibold text-foreground mb-4">
              What Your Donation Supports
            </h2>
            <div className="space-y-3">
              {supports.map((item) => (
                <div
                  key={item.title}
                  className={`flex items-start gap-3 rounded-lg border bg-[#020617]/60 px-3 py-3 ${item.borderColor}`}
                >
                  <div className={`mt-0.5 p-2 rounded-md ${item.badgeBg}`}>
                    <item.icon className={`w-4 h-4 ${item.iconColor}`} />
                  </div>
                  <div>
                    <div className="font-medium text-foreground text-sm">{item.title}</div>
                    <div className="text-xs text-muted-foreground">{item.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Back to Home */}
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mt-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          </div>
        </div>

        {/* Right Side - Donation Card */}
        <div className="bg-[#050816] border-l border-border/80 p-8 lg:p-12 xl:p-16 flex flex-col shadow-[0_0_40px_rgba(15,23,42,0.9)]">
          {/* Choose an Amount */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-foreground mb-4">Choose an Amount</h2>
            <div className="grid grid-cols-2 gap-3">
              {amounts.map((amount) => (
                <button
                  key={amount.value}
                  onClick={() => setSelectedAmount(amount.value)}
                  className={`p-4 rounded-lg border text-left transition-all duration-200 ${
                    selectedAmount === amount.value
                      ? "border-primary bg-primary/10 text-primary shadow-[0_0_25px_rgba(56,189,248,0.25)]"
                      : "border-border bg-[#020617] hover:border-primary/40 hover:bg-primary/5"
                  }`}
                >
                  <div className="font-semibold text-foreground">{amount.value}</div>
                  <div className="text-xs text-muted-foreground">{amount.label}</div>
                </button>
              ))}
            </div>

            {/* Custom Amount Input */}
            <div className="mt-4">
              <label className="text-sm text-muted-foreground mb-2 block">
                Or enter a custom amount
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                <input
                  type="number"
                  placeholder="0"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    if (e.target.value) setSelectedAmount("Custom");
                  }}
                  className="w-full pl-7 pr-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                />
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-foreground mb-4">Payment Methods</h2>
            <div className="space-y-2">
              {paymentMethods.map((method) => (
                <a
                  key={method.id}
                  href={method.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setSelectedMethod(method.id)}
                  className={`flex items-center gap-4 p-4 rounded-lg border transition-all duration-200 ${
                    method.recommended || selectedMethod === method.id
                      ? "border-primary bg-primary/10 shadow-[0_0_25px_rgba(56,189,248,0.22)]"
                      : "border-border bg-[#020617] hover:border-muted-foreground/60 hover:bg-surface/40"
                  }`}
                >
                  <div className={`p-2 rounded-lg ${method.recommended || selectedMethod === method.id ? "bg-primary/20" : "bg-muted/60"}`}>
                    <method.icon className={`w-5 h-5 ${method.recommended || selectedMethod === method.id ? "text-primary" : "text-muted-foreground"}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-foreground">{method.name}</span>
                      {method.recommended && (
                        <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-primary text-primary-foreground shadow-sm shadow-primary/40">
                          Recommended
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-muted-foreground">{method.description}</div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                </a>
              ))}
            </div>
          </div>

          {/* Crypto Note */}
          <div className="bg-[#020617] border border-primary/20 rounded-lg p-4 mb-8">
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Prefer crypto?</span>{" "}
              We also accept donations in ETH, BTC, and other cryptocurrencies. Contact 
              us at{" "}
              <a href="mailto:donate@agentii-kit.dev" className="text-primary hover:underline">
                donate@agentii-kit.dev
              </a>
            </p>
          </div>

          {/* Footer Message */}
          <div className="mt-auto text-center">
            <p className="text-sm text-muted-foreground inline-flex items-center gap-2">
              <Heart className="w-4 h-4 text-pink-500" />
              Every contribution helps keep agentii-kit free and open for everyone.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
