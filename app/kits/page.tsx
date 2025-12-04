"use client";

import * as React from "react";
import { Navbar } from "@/components/Navbar";
import { FooterKit } from "@/components/FooterKit";
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

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Navbar spacing */}
      <div className="h-16" />

      {/* Page Header */}
      <section className="border-b border-border px-4 py-16 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <h1 className="text-5xl font-bold text-foreground mb-4">
            Specification Kits Catalog
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Browse our complete collection of specification kits designed to standardize your development workflows across development, product, marketing, legal, finance, design, and operations.
          </p>
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

      {/* Footer */}
      <FooterKit />
    </div>
  );
}
