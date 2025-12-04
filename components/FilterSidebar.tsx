"use client";

import * as React from "react";
import { Search, X } from "lucide-react";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import { KitCategory, categoryMetadata } from "@/data/kits";

interface FilterSidebarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategories: KitCategory[];
  onCategoryChange: (category: KitCategory, checked: boolean) => void;
  onClearFilters: () => void;
}

export function FilterSidebar({
  searchQuery,
  onSearchChange,
  selectedCategories,
  onCategoryChange,
  onClearFilters,
}: FilterSidebarProps) {
  const categories = Object.values(KitCategory);

  const hasActiveFilters = searchQuery.length > 0 || selectedCategories.length > 0;

  return (
    <aside className="w-full md:w-64 md:sticky md:top-4 space-y-6">
      {/* Search Input */}
      <div className="space-y-2">
        <label className="text-sm font-semibold text-foreground">Search</label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search kits..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 pr-10"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Clear search"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      {/* Category Filters */}
      <div className="space-y-3">
        <label className="text-sm font-semibold text-foreground">
          Categories
        </label>
        <div className="space-y-2">
          {categories.map((category) => {
            const meta = categoryMetadata[category];
            const isChecked = selectedCategories.includes(category);

            return (
              <div key={category} className="flex items-center space-x-2">
                <Checkbox
                  id={`category-${category}`}
                  checked={isChecked}
                  onCheckedChange={(checked) =>
                    onCategoryChange(category, checked as boolean)
                  }
                />
                <label
                  htmlFor={`category-${category}`}
                  className="text-sm text-foreground cursor-pointer select-none flex-1"
                >
                  {category.replace("-KIT", "")}
                </label>
                <span className="text-xs text-muted-foreground">
                  ({getKitCountForCategory(category)})
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Sort Dropdown (Placeholder) */}
      <div className="space-y-2">
        <label className="text-sm font-semibold text-foreground">Sort By</label>
        <select
          className="w-full h-10 rounded-md border border-border bg-surface px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
          defaultValue="popular"
        >
          <option value="popular">Popular</option>
          <option value="recent">Recent</option>
          <option value="alphabetical">Alphabetical</option>
        </select>
      </div>

      {/* Clear Filters Button */}
      {hasActiveFilters && (
        <Button
          variant="outline"
          size="sm"
          onClick={onClearFilters}
          className="w-full gap-2"
        >
          <X className="h-4 w-4" />
          Clear all filters
        </Button>
      )}
    </aside>
  );
}

// Helper function to get kit count per category
function getKitCountForCategory(category: KitCategory): number {
  // This would ideally come from the kits data
  // For now, return placeholder counts based on the mock data
  const counts: Record<KitCategory, number> = {
    [KitCategory.DEV]: 3,
    [KitCategory.PM]: 3,
    [KitCategory.MARKETING]: 3,
    [KitCategory.LEGAL]: 2,
    [KitCategory.FINANCE]: 2,
    [KitCategory.DESIGN]: 2,
    [KitCategory.OPS]: 2,
  };
  return counts[category] || 0;
}
