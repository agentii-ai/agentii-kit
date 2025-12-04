"use client";

import * as React from "react";
import { Navbar } from "@/components/Navbar";
import { FooterKit } from "@/components/FooterKit";
import { HeroSection } from "@/components/HeroSection";
import { FeaturedArticles } from "@/components/FeaturedArticles";
import { LatestKits } from "@/components/LatestKits";
import { FilterSidebar } from "@/components/FilterSidebar";
import { KitsGrid } from "@/components/KitsGrid";
import { RecentlyUpdatedTable } from "@/components/RecentlyUpdatedTable";
import { Testimonials } from "@/components/Testimonials";
import { UseCases } from "@/components/UseCases";
import { mockKits, KitCategory } from "@/data/kits";

export default function HomePage() {
  // State for search and filtering
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedCategories, setSelectedCategories] = React.useState<
    KitCategory[]
  >([]);
  const [currentPage, setCurrentPage] = React.useState(1);

  // Handle category filter change
  const handleCategoryChange = (category: KitCategory, checked: boolean) => {
    setSelectedCategories((prev) => {
      if (checked) {
        return [...prev, category];
      } else {
        return prev.filter((c) => c !== category);
      }
    });
    setCurrentPage(1); // Reset to first page when filters change
  };

  // Handle clear all filters
  const handleClearFilters = () => {
    setSearchQuery("");
    setSelectedCategories([]);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Navbar spacing */}
      <div className="h-16" />

      {/* Hero Section */}
      <HeroSection />

      {/* Featured Articles Section */}
      <FeaturedArticles />

      {/* Latest Kits Section */}
      <LatestKits />

      {/* Main Kits Section with Filters */}
      <section className="py-12 mb-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-2">
              Explore All Kits
            </h2>
            <p className="text-muted-foreground">
              Browse our complete collection of production-ready spec-kits
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Filter Sidebar */}
            <FilterSidebar
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              selectedCategories={selectedCategories}
              onCategoryChange={handleCategoryChange}
              onClearFilters={handleClearFilters}
            />

            {/* Kits Grid */}
            <KitsGrid
              kits={mockKits}
              searchQuery={searchQuery}
              selectedCategories={selectedCategories}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
              itemsPerPage={9}
            />
          </div>
        </div>
      </section>

      {/* Recently Updated Table */}
      <RecentlyUpdatedTable maxItems={8} />

      {/* Testimonials */}
      <Testimonials />

      {/* Use Cases */}
      <UseCases />

      {/* Footer */}
      <FooterKit />
    </div>
  );
}
