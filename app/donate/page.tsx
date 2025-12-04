"use client";

import { Github, Users, Download, Heart, Code, Users2, DollarSign, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DonatePage() {
  const stats = [
    {
      label: "GitHub Stars",
      value: "2,400+",
      icon: Github,
    },
    {
      label: "Contributors",
      value: "120+",
      icon: Users,
    },
    {
      label: "Downloads/Month",
      value: "15K+",
      icon: Download,
    },
  ];

  const benefits = [
    {
      title: "Active Development",
      description: "Funding supports ongoing feature development, bug fixes, and maintenance.",
      icon: Code,
    },
    {
      title: "Community Support",
      description: "Help us maintain responsive community support and documentation.",
      icon: Users2,
    },
    {
      title: "Infrastructure Costs",
      description: "Keep our servers running, CI/CD pipelines, and hosting services.",
      icon: DollarSign,
    },
  ];

  const donationTiers = [
    {
      name: "Coffee",
      amount: "$5",
      description: "Fuel an hour of development",
    },
    {
      name: "Meal",
      amount: "$25",
      description: "Support a full day of work",
    },
    {
      name: "Month",
      amount: "$100",
      description: "Sponsor a month of development",
    },
    {
      name: "Quarter",
      amount: "$500",
      description: "Sponsor a quarter of development",
    },
  ];

  const paymentMethods = [
    {
      name: "GitHub Sponsors",
      url: "https://github.com/sponsors/agentii-kit",
      icon: Github,
      description: "Support directly on GitHub",
    },
    {
      name: "Buy Me a Coffee",
      url: "https://buymeacoffee.com/agentii-kit",
      icon: Heart,
      description: "One-time or recurring donations",
    },
    {
      name: "Open Collective",
      url: "https://opencollective.com/agentii-kit",
      icon: Users2,
      description: "Transparent and community-driven",
    },
    {
      name: "PayPal",
      url: "https://paypal.me/agentii-kit",
      icon: DollarSign,
      description: "Direct payment option",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-5xl font-bold text-foreground mb-6">Support agentii-kit</h1>
          <p className="text-text-secondary text-lg leading-relaxed">
            agentii-kit is built and maintained by passionate developers who believe in open-source innovation. Your support directly funds development, community support, and infrastructure that keeps this project thriving.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="text-center">
                  <Icon className="h-8 w-8 text-primary mx-auto mb-4" />
                  <p className="text-text-secondary text-sm mb-2">{stat.label}</p>
                  <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Support Section */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-12">What Your Donation Supports</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="bg-card border border-border rounded-lg p-6 hover:border-primary/40 transition-colors"
                >
                  <Icon className="h-6 w-6 text-primary mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-text-secondary text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Donation Tiers Section */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-12">Donation Tiers</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {donationTiers.map((tier) => (
              <div
                key={tier.name}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/40 transition-colors"
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">{tier.name}</h3>
                <p className="text-2xl font-bold text-primary mb-2">{tier.amount}</p>
                <p className="text-text-secondary text-sm">{tier.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods Section */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-12">Choose Your Payment Method</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {paymentMethods.map((method) => {
              const Icon = method.icon;
              return (
                <div
                  key={method.name}
                  className="bg-card border border-border rounded-lg p-6 hover:border-primary/40 transition-colors flex flex-col"
                >
                  <div className="flex items-center mb-4">
                    <Icon className="h-6 w-6 text-primary mr-3" />
                    <h3 className="text-lg font-semibold text-foreground">{method.name}</h3>
                  </div>
                  <p className="text-text-secondary text-sm mb-4 flex-1">{method.description}</p>
                  <Button
                    variant="primary"
                    size="sm"
                    asChild
                  >
                    <a
                      href={method.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center"
                    >
                      Donate via {method.name}
                      <ExternalLink className="h-3 w-3 ml-2" />
                    </a>
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Thank You Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Thank you for your support
          </h2>
          <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
            Whether you donate or not, we're grateful for your interest in agentii-kit. Every star, share, and contribution makes a difference.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="primary" size="lg" asChild>
              <a href="https://github.com/agentii-kit" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                Star on GitHub
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/">Back to Home</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
