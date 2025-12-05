"use client";

import * as React from "react";
import { Star, ExternalLink } from "lucide-react";
import { Badge } from "./ui/badge";
import { sortKitsByDate, allKits, categoryMetadata } from "@/data/kits";

interface RecentlyUpdatedTableProps {
  maxItems?: number;
}

export function RecentlyUpdatedTable({ maxItems = 8 }: RecentlyUpdatedTableProps) {
  // Get recently updated kits
  const recentKits = React.useMemo(() => {
    return sortKitsByDate(allKits, false).slice(0, maxItems);
  }, [maxItems]);

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  // Get category display name
  const getCategoryName = (categoryKey: string) => {
    return categoryKey.replace("-KIT", "");
  };

  return (
    <section className="mb-12">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">
            Recently Updated
          </h2>
          <p className="text-muted-foreground">
            Stay up to date with the latest spec kit updates
          </p>
        </div>

        {/* Table */}
        <div className="border border-border rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-surface border-b border-border">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-foreground uppercase tracking-wider">
                    Kit Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-foreground uppercase tracking-wider hidden md:table-cell">
                    Discipline
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-foreground uppercase tracking-wider hidden lg:table-cell">
                    Stars
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-foreground uppercase tracking-wider hidden sm:table-cell">
                    Last Updated
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-semibold text-foreground uppercase tracking-wider">
                    View
                  </th>
                </tr>
              </thead>
              <tbody className="bg-card divide-y divide-border">
                {recentKits.map((kit) => {
                  const categoryMeta = categoryMetadata[kit.category];
                  const colorVariant = categoryMeta.color as any;

                  return (
                    <tr
                      key={kit.id}
                      className="hover:bg-surface transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="flex flex-col">
                          <span className="font-mono text-sm text-foreground">
                            {kit.name}
                          </span>
                          <span className="text-xs text-muted-foreground mt-1 md:hidden">
                            {getCategoryName(kit.category)}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 hidden md:table-cell">
                        <Badge variant={colorVariant}>
                          {getCategoryName(kit.category)}
                        </Badge>
                      </td>
                      <td className="px-6 py-4 hidden lg:table-cell">
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                          <span>{kit.stars.toLocaleString()}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-muted-foreground hidden sm:table-cell">
                        {formatDate(kit.lastUpdated)}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <a
                          href={kit.githubUrl || kit.github || `https://github.com/agentii-ai/${kit.slug}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-primary hover:text-accent transition-colors"
                        >
                          <span className="hidden sm:inline">View</span>
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
