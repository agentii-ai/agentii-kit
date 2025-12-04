import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedArticles from "@/components/FeaturedArticles";
import LatestKits from "@/components/LatestKits";
import FilterSidebar from "@/components/FilterSidebar";
import KitsGrid from "@/components/KitsGrid";
import RecentlyUpdatedTable from "@/components/RecentlyUpdatedTable";
import Testimonials from "@/components/Testimonials";
import UseCases from "@/components/UseCases";
import { mockKits } from "@/data/mockKits";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Featured Articles Section */}
        <FeaturedArticles />

        {/* Latest Kits Section */}
        <LatestKits />

        {/* Main Content with Sidebar */}
        <section className="container mx-auto px-4 py-12">
          <div className="flex gap-8">
            {/* Filter Sidebar */}
            <FilterSidebar
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              selectedCategories={selectedCategories}
              onCategoryChange={setSelectedCategories}
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
        </section>

        {/* Recently Updated Table */}
        <RecentlyUpdatedTable />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Use Cases & Key Metrics Section */}
        <UseCases />
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-primary flex items-center justify-center">
                <span className="font-mono font-semibold text-primary-foreground text-xs">AK</span>
              </div>
              <span className="text-sm text-text-secondary">
                agentii-kit — Open source spec-kits for AI agents
              </span>
            </div>
            <div className="flex items-center gap-6 text-sm text-text-muted">
              <a href="#" className="hover:text-foreground transition-colors">About</a>
              <a href="#" className="hover:text-foreground transition-colors">Contribute</a>
              <a href="#" className="hover:text-foreground transition-colors">GitHub</a>
              <a href="#" className="hover:text-foreground transition-colors">License</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
