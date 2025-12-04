import { mockKits } from "@/data/mockKits";
import KitCard from "./KitCard";

const FeaturedKits = () => {
  // Get top 3 featured kits (by stars)
  const featuredKits = [...mockKits]
    .sort((a, b) => b.stars - a.stars)
    .slice(0, 3);

  return (
    <section className="py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">
          <span className="text-foreground">Featured </span>
          <span className="text-primary">Kits</span>
        </h2>
      </div>
      
      <p className="text-text-secondary mb-8">
        Our most popular and highly-rated spec-kits.
      </p>
      
      {/* Kits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredKits.map((kit, index) => (
          <div
            key={kit.id}
            className="animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <KitCard kit={kit} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedKits;
