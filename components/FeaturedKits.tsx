"use client";

import * as React from "react";
import { Sparkles } from "lucide-react";
import { KitCard } from "./KitCard";
import { sortKitsByStars, mockKits } from "@/data/kits";

export function FeaturedKits() {
  // Get top 3 kits by star count
  const featuredKits = React.useMemo(() => {
    return sortKitsByStars(mockKits, false).slice(0, 3);
  }, []);

  return (
    <section className="mb-12 border-b border-border pb-12">
      <div className="container mx-auto px-4">


        {/* Featured Kits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredKits.map((kit) => (
            <KitCard key={kit.id} kit={kit} />
          ))}
        </div>
      </div>
    </section>
  );
}
