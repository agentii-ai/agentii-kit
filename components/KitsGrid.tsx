"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { KitCard } from "./KitCard";
import { Button } from "./ui/button";
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
        kit.description.toLowerCase().includes(query) ||
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
      {/* Results count */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Showing {startIndex + 1}-{Math.min(endIndex, filteredKits.length)} of{" "}
          {filteredKits.length} kits
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedKits.map((kit) => (
          <KitCard key={kit.id} kit={kit} />
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 pt-8">
          {/* Previous Button */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="gap-1"
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only md:not-sr-only">Previous</span>
          </Button>

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
                <Button
                  key={pageNum}
                  variant={isActive ? "primary" : "outline"}
                  size="sm"
                  onClick={() => onPageChange(pageNum)}
                  className={`min-w-[40px] ${
                    isActive ? "pointer-events-none" : ""
                  }`}
                >
                  {pageNum}
                </Button>
              );
            })}
          </div>

          {/* Next Button */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="gap-1"
          >
            <span className="sr-only md:not-sr-only">Next</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
}
