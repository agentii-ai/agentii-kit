"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { KitCard } from "./KitCard";
import { Kit, KitCategory } from "@/data/kits";

interface KitsGridProps {
  kits: Kit[];
  searchQuery: string;
  selectedCategories: KitCategory[];
  currentPage: number;
  onPageChange: (page: number) => void;
  itemsPerPage?: number;
}

export function KitsGrid({
  kits,
  searchQuery,
  selectedCategories,
  currentPage,
  onPageChange,
  itemsPerPage = 9,
}: KitsGridProps) {
  // Filter kits by search query
  const searchFilteredKits = React.useMemo(() => {
    if (!searchQuery.trim()) return kits;

    const query = searchQuery.toLowerCase();
    return kits.filter(
      (kit) =>
        kit.name.toLowerCase().includes(query) ||
        (kit.description?.toLowerCase() || '').includes(query) ||
        kit.tags.some((tag) => tag.toLowerCase().includes(query))
    );
  }, [kits, searchQuery]);

  // Filter kits by selected categories
  const filteredKits = React.useMemo(() => {
    if (selectedCategories.length === 0) return searchFilteredKits;

    return searchFilteredKits.filter((kit) =>
      selectedCategories.includes(kit.category)
    );
  }, [searchFilteredKits, selectedCategories]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredKits.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedKits = filteredKits.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  React.useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      onPageChange(1);
    }
  }, [filteredKits.length, currentPage, totalPages, onPageChange]);

  // Generate page numbers with condensation (1 ... 4 5 6 ... 12)
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 7) {
      // Show all pages if 7 or fewer
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);

      if (currentPage <= 3) {
        // Near the start
        pages.push(2, 3, 4, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        // Near the end
        pages.push("...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        // In the middle
        pages.push("...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
      }
    }

    return pages;
  };

  // Empty state
  if (filteredKits.length === 0) {
    return (
      <div className="flex-1">
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-foreground mb-2">
            No kits match your search
          </h3>
          <p className="text-muted-foreground">
            Try adjusting your filters or search query
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 space-y-6">
      {/* Section Header - matching screenshot */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">
          Available Kits{" "}
          <span className="text-muted-foreground font-normal text-base">
            ({filteredKits.length} results)
          </span>
        </h2>
      </div>

      {/* Grid - 3 columns matching screenshot */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {paginatedKits.map((kit) => (
          <KitCard key={kit.id} kit={kit} />
        ))}
      </div>

      {/* Pagination Controls - matching screenshot style */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-1 pt-8">
          {/* Previous Button */}
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="flex items-center gap-1 px-3 py-2 text-sm text-muted-foreground hover:text-foreground disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Previous</span>
          </button>

          {/* Page Numbers */}
          <div className="flex items-center gap-1">
            {getPageNumbers().map((page, index) => {
              if (page === "...") {
                return (
                  <span
                    key={`ellipsis-${index}`}
                    className="px-2 text-muted-foreground"
                  >
                    ...
                  </span>
                );
              }

              const pageNum = page as number;
              const isActive = pageNum === currentPage;

              return (
                <button
                  key={pageNum}
                  onClick={() => onPageChange(pageNum)}
                  disabled={isActive}
                  className={`min-w-[36px] h-9 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-surface"
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}
          </div>

          {/* Next Button */}
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="flex items-center gap-1 px-3 py-2 text-sm text-muted-foreground hover:text-foreground disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <span className="hidden sm:inline">Next</span>
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
}
