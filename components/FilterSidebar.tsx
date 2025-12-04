"use client";

import * as React from "react";
import { Search, Filter, ChevronDown } from "lucide-react";
import { KitCategory, categoryMetadata } from "@/data/kits";

// Sort options matching screenshot
type SortOption = "popular" | "recent" | "stars" | "name";

interface FilterSidebarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategories: KitCategory[];
  onCategoryChange: (category: KitCategory, checked: boolean) => void;
  onClearFilters: () => void;
  sortBy?: SortOption;
  onSortChange?: (sort: SortOption) => void;
}

const sortOptions: { value: SortOption; label: string }[] = [
  { value: "popular", label: "Most Popular" },
  { value: "recent", label: "Recently Updated" },
  { value: "stars", label: "Most Stars" },
  { value: "name", label: "Name (A-Z)" },
];

export function FilterSidebar({
  searchQuery,
  onSearchChange,
  selectedCategories,
  onCategoryChange,
  onClearFilters,
  sortBy = "popular",
  onSortChange,
}: FilterSidebarProps) {
  const categories = Object.values(KitCategory);
  const [expandedCategories, setExpandedCategories] = React.useState(true);

  return (
    <aside className="w-full md:w-64 space-y-6">
      {/* Search Input - matching screenshot */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search kits..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full h-10 rounded-lg border border-border bg-surface pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
        />
      </div>

      {/* Filters Header */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Filter className="h-4 w-4" />
        <span>Filters</span>
      </div>

      {/* Categories Section */}
      <div className="space-y-3">
        <button
          onClick={() => setExpandedCategories(!expandedCategories)}
          className="flex items-center justify-between w-full text-sm font-medium text-foreground"
        >
          <span>Categories</span>
          <ChevronDown className={`h-4 w-4 transition-transform ${expandedCategories ? "rotate-180" : ""}`} />
        </button>
        
        {expandedCategories && (
          <div className="space-y-1">
            {categories.map((category) => {
              const isChecked = selectedCategories.includes(category);
              const count = getKitCountForCategory(category);

              return (
                <label
                  key={category}
                  className="flex items-center gap-3 py-1.5 cursor-pointer group"
                >
                  {/* Square checkbox - matching screenshot */}
                  <div
                    className={`w-4 h-4 rounded-sm border-2 flex items-center justify-center transition-colors ${
                      isChecked
                        ? "bg-primary border-primary"
                        : "border-muted-foreground/50 group-hover:border-muted-foreground"
                    }`}
                    onClick={() => onCategoryChange(category, !isChecked)}
                  >
                    {isChecked && (
                      <svg className="w-3 h-3 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  <span className="flex-1 text-sm text-foreground">{category}</span>
                  <span className="text-xs text-muted-foreground">{count}</span>
                </label>
              );
            })}
          </div>
        )}
      </div>

      {/* Sort By Section - clickable options matching screenshot */}
      <div className="space-y-3">
        <span className="text-sm font-medium text-foreground">Sort By</span>
        <div className="space-y-1">
          {sortOptions.map((option) => {
            const isActive = sortBy === option.value;
            return (
              <button
                key={option.value}
                onClick={() => onSortChange?.(option.value)}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                  isActive
                    ? "bg-primary text-primary-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-surface"
                }`}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
}

// Helper function to get kit count per category - matching screenshot counts
function getKitCountForCategory(category: KitCategory): number {
  const counts: Record<KitCategory, number> = {
    [KitCategory.DEV]: 27,
    [KitCategory.PM]: 11,
    [KitCategory.MARKETING]: 8,
    [KitCategory.LEGAL]: 6,
    [KitCategory.FINANCE]: 4,
    [KitCategory.DESIGN]: 11,
    [KitCategory.OPS]: 5,
  };
  return counts[category] || 0;
}
