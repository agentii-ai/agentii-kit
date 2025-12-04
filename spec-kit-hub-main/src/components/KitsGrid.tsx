import KitCard, { Kit } from "./KitCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

interface KitsGridProps {
  kits: Kit[];
  searchQuery: string;
  selectedCategories: string[];
  currentPage?: number;
  onPageChange?: (page: number) => void;
  itemsPerPage?: number;
}

const KitsGrid = ({ 
  kits, 
  searchQuery, 
  selectedCategories,
  currentPage = 1,
  onPageChange,
  itemsPerPage = 9
}: KitsGridProps) => {
  const filteredKits = kits.filter((kit) => {
    const matchesSearch =
      searchQuery === "" ||
      kit.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      kit.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(kit.categoryColor);

    return matchesSearch && matchesCategory;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredKits.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedKits = filteredKits.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    if (onPageChange && page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }
    return pages;
  };

  return (
    <section id="kits" className="flex-1">
      {/* Results header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-foreground">
          Available Kits
          <span className="ml-2 text-sm font-normal text-text-muted">
            ({filteredKits.length} results)
          </span>
        </h2>
      </div>

      {/* Grid */}
      {paginatedKits.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {paginatedKits.map((kit, index) => (
            <div
              key={kit.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <KitCard kit={kit} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-card border border-border rounded-lg">
          <p className="text-text-secondary mb-2">No kits found</p>
          <p className="text-sm text-text-muted">
            Try adjusting your search or filters
          </p>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && onPageChange && (
        <div className="flex items-center justify-center gap-2 mt-8">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="text-text-muted hover:text-foreground disabled:opacity-50"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Previous
          </Button>

          <div className="flex items-center gap-1">
            {getPageNumbers().map((page, index) => (
              typeof page === 'number' ? (
                <Button
                  key={index}
                  variant={currentPage === page ? "default" : "ghost"}
                  size="sm"
                  onClick={() => handlePageChange(page)}
                  className={
                    currentPage === page 
                      ? "bg-primary text-primary-foreground min-w-[36px]" 
                      : "text-text-muted hover:text-foreground min-w-[36px]"
                  }
                >
                  {page}
                </Button>
              ) : (
                <span key={index} className="px-2 text-text-muted">
                  {page}
                </span>
              )
            ))}
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="text-text-muted hover:text-foreground disabled:opacity-50"
          >
            Next
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      )}
    </section>
  );
};

export default KitsGrid;
