import { ArrowRight } from "lucide-react";
import { mockKits } from "@/data/mockKits";
import KitCard from "./KitCard";

const LatestKits = () => {
  const latestKits = mockKits.slice(0, 3);

  return (
    <section className="bg-card py-16 border-t border-border">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">
            <span className="text-foreground">Latest </span>
            <span className="text-primary">Kits</span>
          </h2>
          <button className="flex items-center gap-2 px-4 py-2 border border-border rounded-md text-sm text-text-secondary hover:text-foreground hover:border-primary/40 transition-colors">
            View All Kits
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        
        <p className="text-text-secondary mb-8">
          Check out our latest spec-kits and summaries.
        </p>
        
        {/* Kits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestKits.map((kit, index) => (
            <div
              key={kit.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <KitCard kit={kit} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestKits;
