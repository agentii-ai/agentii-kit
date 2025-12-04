"use client";

import * as React from "react";
import { Clock } from "lucide-react";
import { KitCard } from "./KitCard";
import { sortKitsByDate, mockKits } from "@/data/kits";

export function LatestKits() {
  // Get 3 most recently updated kits
  const latestKits = React.useMemo(() => {
    return sortKitsByDate(mockKits, false).slice(0, 3);
  }, []);

  return (
    <section className="mb-12">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <Clock className="h-6 w-6 text-accent" />
          <h2 className="text-3xl font-bold text-foreground">Latest Kits</h2>
        </div>

        {/* Latest Kits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestKits.map((kit) => (
            <KitCard key={kit.id} kit={kit} />
          ))}
        </div>
      </div>
    </section>
  );
}
