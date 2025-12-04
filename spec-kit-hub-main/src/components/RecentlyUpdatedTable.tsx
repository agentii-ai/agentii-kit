import { Star, ExternalLink } from "lucide-react";
import { mockKits } from "@/data/mockKits";

const RecentlyUpdatedTable = () => {
  // Take 5 kits for the table
  const recentKits = mockKits.slice(0, 5);

  const getCategoryLabel = (category: string) => {
    const labels: Record<string, string> = {
      "DEV-KIT": "Development",
      "PM-KIT": "Product",
      "LEGAL-KIT": "Legal",
      "MARKETING-KIT": "Marketing",
      "DESIGN-KIT": "Design",
      "OPS-KIT": "Operations",
      "FINANCE-KIT": "Finance",
    };
    return labels[category] || category;
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-semibold text-foreground mb-6">
          Recently updated
        </h2>
        
        <div className="bg-card border border-border rounded-xl overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 px-6 py-3 border-b border-border text-sm text-text-muted">
            <div className="col-span-5 md:col-span-4">Kit</div>
            <div className="col-span-3 md:col-span-3 hidden sm:block">Discipline</div>
            <div className="col-span-2 md:col-span-2">Stars</div>
            <div className="col-span-2 md:col-span-2 hidden md:block">Updated</div>
            <div className="col-span-4 sm:col-span-2 md:col-span-1 text-right">
              <span className="sr-only">Actions</span>
            </div>
          </div>
          
          {/* Table Body */}
          <div className="divide-y divide-border">
            {recentKits.map((kit) => (
              <div 
                key={kit.id}
                className="grid grid-cols-12 gap-4 px-6 py-4 items-center hover:bg-surface-dark/50 transition-colors"
              >
                {/* Kit Name */}
                <div className="col-span-5 md:col-span-4">
                  <span className="font-medium text-foreground font-mono text-sm">
                    {kit.title}
                  </span>
                </div>
                
                {/* Discipline */}
                <div className="col-span-3 md:col-span-3 hidden sm:block">
                  <span className="text-text-secondary text-sm">
                    {getCategoryLabel(kit.category)}
                  </span>
                </div>
                
                {/* Stars */}
                <div className="col-span-2 md:col-span-2">
                  <span className="flex items-center gap-1.5 text-text-secondary text-sm">
                    <Star className="w-4 h-4" />
                    {kit.stars.toLocaleString()}
                  </span>
                </div>
                
                {/* Updated */}
                <div className="col-span-2 md:col-span-2 hidden md:block">
                  <span className="text-text-secondary text-sm">
                    {kit.lastUpdated}
                  </span>
                </div>
                
                {/* View Link */}
                <div className="col-span-4 sm:col-span-2 md:col-span-1 text-right">
                  <a 
                    href={`https://github.com/${kit.repo}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                  >
                    View
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentlyUpdatedTable;
