"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { KitCard } from "./KitCard";
import { sortKitsByDate, mockKits } from "@/data/kits";

export function LatestKits() {
  // Get 3 most recently updated kits
  const latestKits = React.useMemo(() => {
    return sortKitsByDate(mockKits, false).slice(0, 3);
  }, []);

  return (
    <section className="py-16 bg-surface">
      <div className="container mx-auto px-4">
        {/* Section Header - matching screenshot */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-foreground">
            Latest <span className="text-primary">Kits</span>
          </h2>
          <Link
            href="/kits"
            className="hidden md:flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            View All Kits
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Subtitle */}
        <p className="text-muted-foreground mb-8">
          Check out our latest spec-kits and summaries.
        </p>

        {/* Latest Kits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestKits.map((kit) => (
            <KitCard key={kit.id} kit={kit} />
          ))}
        </div>

        {/* Mobile View All Link */}
        <div className="flex justify-center mt-8 md:hidden">
          <Link
            href="/kits"
            className="flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors"
          >
            View All Kits
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
