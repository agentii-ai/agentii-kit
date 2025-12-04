import { Search, Filter, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

interface FilterSidebarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategories: string[];
  onCategoryChange: (categories: string[]) => void;
}

const categories = [
  { id: "dev", label: "DEV-KIT", count: 24 },
  { id: "pm", label: "PM-KIT", count: 18 },
  { id: "marketing", label: "MARKETING-KIT", count: 12 },
  { id: "legal", label: "LEGAL-KIT", count: 8 },
  { id: "finance", label: "FINANCE-KIT", count: 6 },
  { id: "design", label: "DESIGN-KIT", count: 15 },
  { id: "ops", label: "OPS-KIT", count: 10 },
];

const sortOptions = [
  { id: "popular", label: "Most Popular" },
  { id: "recent", label: "Recently Updated" },
  { id: "stars", label: "Most Stars" },
  { id: "name", label: "Name (A-Z)" },
];

const FilterSidebar = ({
  searchQuery,
  onSearchChange,
  selectedCategories,
  onCategoryChange,
}: FilterSidebarProps) => {
  const [categoriesExpanded, setCategoriesExpanded] = useState(true);
  const [sortExpanded, setSortExpanded] = useState(true);
  const [selectedSort, setSelectedSort] = useState("popular");

  const toggleCategory = (categoryId: string) => {
    if (selectedCategories.includes(categoryId)) {
      onCategoryChange(selectedCategories.filter((c) => c !== categoryId));
    } else {
      onCategoryChange([...selectedCategories, categoryId]);
    }
  };

  return (
    <aside className="w-64 shrink-0 sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto pr-4 hidden lg:block">
      {/* Search */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search kits..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 bg-surface border-border focus:border-primary"
          />
        </div>
      </div>

      {/* Filter header */}
      <div className="flex items-center gap-2 text-sm text-text-secondary mb-4">
        <Filter className="w-4 h-4" />
        <span className="font-medium">Filters</span>
      </div>

      {/* Categories */}
      <div className="mb-6">
        <button
          onClick={() => setCategoriesExpanded(!categoriesExpanded)}
          className="flex items-center justify-between w-full text-sm font-medium text-foreground mb-3 hover:text-primary transition-colors"
        >
          Categories
          {categoriesExpanded ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </button>
        {categoriesExpanded && (
          <div className="space-y-2 animate-fade-in">
            {categories.map((category) => (
              <label
                key={category.id}
                className="flex items-center gap-3 text-sm cursor-pointer group"
              >
                <Checkbox
                  checked={selectedCategories.includes(category.id)}
                  onCheckedChange={() => toggleCategory(category.id)}
                  className="border-border data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                />
                <span className="text-text-secondary group-hover:text-foreground transition-colors flex-1">
                  {category.label}
                </span>
                <span className="text-text-muted text-xs font-mono">
                  {category.count}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Sort */}
      <div className="mb-6">
        <button
          onClick={() => setSortExpanded(!sortExpanded)}
          className="flex items-center justify-between w-full text-sm font-medium text-foreground mb-3 hover:text-primary transition-colors"
        >
          Sort By
          {sortExpanded ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </button>
        {sortExpanded && (
          <div className="space-y-2 animate-fade-in">
            {sortOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setSelectedSort(option.id)}
                className={`block w-full text-left text-sm px-3 py-2 rounded-md transition-colors ${
                  selectedSort === option.id
                    ? "bg-primary/10 text-primary"
                    : "text-text-secondary hover:text-foreground hover:bg-surface"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Clear filters */}
      {selectedCategories.length > 0 && (
        <button
          onClick={() => onCategoryChange([])}
          className="text-sm text-primary hover:text-primary/80 transition-colors"
        >
          Clear all filters
        </button>
      )}
    </aside>
  );
};

export default FilterSidebar;
