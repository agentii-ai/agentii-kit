import { useState } from "react";
import Navbar from "@/components/Navbar";
import FilterSidebar from "@/components/FilterSidebar";
import KitsGrid from "@/components/KitsGrid";
import FeaturedKits from "@/components/FeaturedKits";
import { mockKits } from "@/data/mockKits";

const Kits = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        {/* Featured Kits Section */}
        <FeaturedKits />
        
        {/* Divider */}
        <div className="border-t border-border my-8" />
        
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
              <a href="/about" className="hover:text-foreground transition-colors">About</a>
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

export default Kits;
