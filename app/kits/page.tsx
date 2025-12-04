"use client";

import * as React from "react";
import { FeaturedKits } from "@/components/FeaturedKits";
import { FilterSidebar } from "@/components/FilterSidebar";
import { KitsGrid } from "@/components/KitsGrid";
import { mockKits, KitCategory } from "@/data/kits";

export default function KitsPage() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedCategories, setSelectedCategories] = React.useState<KitCategory[]>([]);
  const [currentPage, setCurrentPage] = React.useState(1);

  const handleCategoryChange = (category: KitCategory, checked: boolean) => {
    setSelectedCategories((prev) => {
      if (checked) {
        return [...prev, category];
      } else {
        return prev.filter((c) => c !== category);
      }
    });
    // Reset to page 1 when filters change
    setCurrentPage(1);
  };

  const handleClearFilters = () => {
    setSearchQuery("");
    setSelectedCategories([]);
    setCurrentPage(1);
  };

  // Category pills for visual interest
  const categoryPills = [
    { name: "DEV-KIT", color: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" },
    { name: "PM-KIT", color: "bg-amber-500/20 text-amber-400 border-amber-500/30" },
    { name: "MARKETING-KIT", color: "bg-pink-500/20 text-pink-400 border-pink-500/30" },
    { name: "LEGAL-KIT", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
    { name: "FINANCE-KIT", color: "bg-purple-500/20 text-purple-400 border-purple-500/30" },
    { name: "DESIGN-KIT", color: "bg-orange-500/20 text-orange-400 border-orange-500/30" },
  ];

  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section for Kits Page */}
      <section className="relative overflow-hidden border-b border-border">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Decorative glow elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />

        {/* Content */}
        <div className="relative container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          {/* Breadcrumb / Tag */}
          <div className="flex items-center gap-2 mb-6">
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
              📦 Catalog
            </span>
            <span className="text-sm text-muted-foreground">
              {mockKits.length}+ production-ready kits
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 max-w-3xl">
            Specification{" "}
            <span className="text-primary">Kits</span>{" "}
            Catalog
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
            Curated templates and workflows for{" "}
            <span className="text-foreground font-medium">developers</span>,{" "}
            <span className="text-foreground font-medium">product managers</span>,{" "}
            <span className="text-foreground font-medium">marketers</span>, and more.
          </p>

          {/* Category tags preview */}
          <div className="flex flex-wrap gap-2">
            {categoryPills.map((pill) => (
              <span
                key={pill.name}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg border cursor-pointer hover:scale-105 transition-transform ${pill.color}`}
              >
                {pill.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Kits Section */}
      <section className="border-b border-border px-4 py-16 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-2">
              Featured Kits
            </h2>
            <p className="text-muted-foreground">
              Our most popular and highly-rated specification templates
            </p>
          </div>
          <FeaturedKits />
        </div>
      </section>

      {/* Browse All Kits with Filtering */}
      <section className="border-b border-border px-4 py-16 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-2">
              All Kits
            </h2>
            <p className="text-muted-foreground">
              Search and filter to find the perfect kit for your needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Filter Sidebar */}
            <div className="lg:col-span-1">
              <FilterSidebar
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                selectedCategories={selectedCategories}
                onCategoryChange={handleCategoryChange}
                onClearFilters={handleClearFilters}
              />
            </div>

            {/* Kits Grid */}
            <div className="lg:col-span-3">
              <KitsGrid
                kits={mockKits}
                searchQuery={searchQuery}
                selectedCategories={selectedCategories}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
                itemsPerPage={12}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
