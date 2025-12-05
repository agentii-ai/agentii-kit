/**
 * Kit Utilities & Query Helpers
 *
 * Provides type-safe query and validation functions for kit data.
 * This module serves as the single source of truth for accessing kit data,
 * allowing future migration from file-based to API-based sources without
 * changing consuming code.
 *
 * SOURCE OF TRUTH: data/kits.ts (allKits export)
 * VALIDATION CONTRACTS: specs/002-kits-data-update/contracts/kit-schema.ts
 *
 * USAGE:
 * ```typescript
 * import { getFeaturedKits, getKitById, getKitsByDomain } from '@/lib/kit-utils';
 *
 * // Get all featured kits
 * const featured = getFeaturedKits();
 *
 * // Get specific kit by ID
 * const kit = getKitById('pmf-kit');
 *
 * // Get kits by domain
 * const pmfKits = getKitsByDomain('pmf');
 * ```
 */

import {
  Kit,
  KitDomain,
  KitStatus,
  validateKit,
  validateKitIdUniqueness,
  validateShortTagline,
} from '@/specs/002-kits-data-update/contracts/kit-schema';
import { allKits } from '@/data/kits';

// ============================================================================
// Data Loading (Abstraction Layer for Future API Migration)
// ============================================================================

/**
 * Load all kits from data source
 *
 * ABSTRACTION LAYER: This function allows swapping data sources:
 * - Phase 2: Load from static TypeScript file (allKits)
 * - Phase 4+: Load from Vercel API endpoint (with automatic GitHub updates)
 *
 * Consuming code uses this function, not direct allKits import.
 * This allows future migration to API-based sources without code changes.
 *
 * @returns Promise that resolves to array of all kits
 */
export async function loadKits(): Promise<Kit[]> {
  // PHASE 2: Load from static file
  return Promise.resolve(allKits);

  // FUTURE (Phase 4): Uncomment when API is ready
  // const response = await fetch('/api/kits');
  // if (!response.ok) throw new Error('Failed to load kits');
  // return response.json();
}

/**
 * Get all kits (synchronous convenience function for Phase 2)
 *
 * @returns Array of all kits
 */
export function getAllKits(): Kit[] {
  return allKits;
}

// ============================================================================
// Query Functions (Read-Only, Type-Safe)
// ============================================================================

/**
 * Get kit by unique ID
 *
 * O(n) complexity - iterates through allKits
 * Future optimization: Use Map<id, Kit> for O(1) lookup
 *
 * @param id - Kit unique identifier (e.g., 'pmf-kit')
 * @returns Kit object if found, undefined otherwise
 *
 * @example
 * ```typescript
 * const kit = getKitById('pmf-kit');
 * if (kit) {
 *   console.log(`Found kit: ${kit.name}`);
 * }
 * ```
 */
export function getKitById(id: string): Kit | undefined {
  return allKits.find((kit) => kit.id === id);
}

/**
 * Get kit by legacy slug (backward compatibility)
 *
 * @deprecated Use getKitById instead. Slug field is legacy.
 *
 * @param slug - URL slug (e.g., 'pmf-kit')
 * @returns Kit object if found, undefined otherwise
 */
export function getKitBySlug(slug: string): Kit | undefined {
  return allKits.find((kit) => kit.slug === slug);
}

/**
 * Get all featured kits
 *
 * Returns kits with status='featured' (new field) or legacy featured=true flag
 *
 * @returns Array of featured kits
 *
 * @example
 * ```typescript
 * const featured = getFeaturedKits();
 * featured.forEach(kit => console.log(kit.name));
 * ```
 */
export function getFeaturedKits(): Kit[] {
  return allKits.filter((kit) => kit.status === 'featured' || kit.featured);
}

/**
 * Get kits by domain (new interface)
 *
 * Filters kits by their domain category
 *
 * @param domain - Kit domain (e.g., 'pmf', 'blog', 'twitter')
 * @returns Array of kits in specified domain
 *
 * @example
 * ```typescript
 * const blogKits = getKitsByDomain('blog');
 * const pmfKits = getKitsByDomain('pmf');
 * ```
 */
export function getKitsByDomain(domain: KitDomain | undefined): Kit[] {
  if (!domain) return [];
  return allKits.filter((kit) => kit.domain === domain);
}

/**
 * Get kits by visibility status
 *
 * @param status - Kit status ('featured', 'experimental', 'archived')
 * @returns Array of kits with specified status
 *
 * @example
 * ```typescript
 * const experimental = getKitsByStatus('experimental');
 * const archived = getKitsByStatus('archived');
 * ```
 */
export function getKitsByStatus(status: KitStatus): Kit[] {
  return allKits.filter((kit) => kit.status === status);
}

/**
 * Get kits by legacy category (backward compatibility)
 *
 * @deprecated Use getKitsByDomain for new code
 *
 * @param category - Legacy category string
 * @returns Array of kits in specified category
 */
export function getKitsByCategory(category: string): Kit[] {
  return allKits.filter((kit) => kit.category === category);
}

/**
 * Get all unique tags from all kits
 *
 * Collects and sorts all tags across all kits
 *
 * @returns Sorted array of unique tag strings
 *
 * @example
 * ```typescript
 * const allTags = getAllTags();
 * console.log(allTags); // ['api', 'blog', 'cli', ...]
 * ```
 */
export function getAllTags(): string[] {
  const tags = new Set<string>();
  allKits.forEach((kit) => {
    if (kit.tags) {
      kit.tags.forEach((tag) => tags.add(tag));
    }
  });
  return Array.from(tags).sort();
}

/**
 * Get all unique domains from kits
 *
 * Collects and sorts all domains represented in the kit collection
 *
 * @returns Sorted array of unique domain strings
 *
 * @example
 * ```typescript
 * const domains = getAllDomains();
 * console.log(domains); // ['blog', 'pmf', 'twitter', ...]
 * ```
 */
export function getAllDomains(): KitDomain[] {
  const domains = new Set<KitDomain>();
  allKits.forEach((kit) => {
    if (kit.domain) {
      domains.add(kit.domain);
    }
  });
  return Array.from(domains).sort();
}

/**
 * Search kits by name, description, or tags
 *
 * Case-insensitive substring search across multiple fields
 *
 * @param query - Search query string
 * @returns Array of kits matching the query
 *
 * @example
 * ```typescript
 * const results = searchKits('blog');
 * // Returns: [blog-tech-kit, twitter-init-kit, ...]
 * ```
 */
export function searchKits(query: string): Kit[] {
  const lowercaseQuery = query.toLowerCase();
  return allKits.filter(
    (kit) =>
      kit.name.toLowerCase().includes(lowercaseQuery) ||
      (kit.longDescription || '').toLowerCase().includes(lowercaseQuery) ||
      (kit.shortTagline || '').toLowerCase().includes(lowercaseQuery) ||
      (kit.description || '').toLowerCase().includes(lowercaseQuery) ||
      kit.tags?.some((tag) => tag.toLowerCase().includes(lowercaseQuery))
  );
}

// ============================================================================
// Sorting Functions
// ============================================================================

/**
 * Sort kits by GitHub star count
 *
 * @param kits - Array of kits to sort
 * @param ascending - If true, sort ascending (low to high). Default: descending
 * @returns New sorted array (does not mutate input)
 *
 * @example
 * ```typescript
 * const sorted = sortKitsByStars(allKits); // High to low (default)
 * const ascending = sortKitsByStars(allKits, true); // Low to high
 * ```
 */
export function sortKitsByStars(kits: Kit[], ascending = false): Kit[] {
  return [...kits].sort((a, b) => {
    const starsA = a.stars ?? 0;
    const starsB = b.stars ?? 0;
    return ascending ? starsA - starsB : starsB - starsA;
  });
}

/**
 * Sort kits by last updated date
 *
 * @param kits - Array of kits to sort
 * @param ascending - If true, sort ascending (oldest first). Default: descending (newest first)
 * @returns New sorted array (does not mutate input)
 *
 * @example
 * ```typescript
 * const newest = sortKitsByDate(allKits); // Newest first (default)
 * const oldest = sortKitsByDate(allKits, true); // Oldest first
 * ```
 */
export function sortKitsByDate(kits: Kit[], ascending = false): Kit[] {
  return [...kits].sort((a, b) => {
    const dateA = a.lastUpdated ? new Date(a.lastUpdated).getTime() : 0;
    const dateB = b.lastUpdated ? new Date(b.lastUpdated).getTime() : 0;
    return ascending ? dateA - dateB : dateB - dateA;
  });
}

// ============================================================================
// Validation Functions
// ============================================================================

/**
 * Validate kit data against schema
 *
 * Type guard function that validates an object conforms to Kit interface
 * Can be used for runtime validation of imported or fetched data
 *
 * @param kit - Object to validate
 * @returns true if object is valid Kit, false otherwise
 *
 * @example
 * ```typescript
 * const data = await importKitData();
 * if (isValidKit(data)) {
 *   addKitToCollection(data);
 * } else {
 *   console.error('Invalid kit data');
 * }
 * ```
 */
export function isValidKit(kit: unknown): kit is Kit {
  return validateKit(kit);
}

/**
 * Validate kit ID is unique across collection
 *
 * @param id - Kit ID to check
 * @param existingIds - Set of existing IDs (or omit to check against allKits)
 * @returns true if ID is unique, false if duplicate
 *
 * @example
 * ```typescript
 * const isUnique = isKitIdUnique('new-kit');
 * const existing = new Set(allKits.map(k => k.id));
 * const isUnique2 = isKitIdUnique('new-kit', existing);
 * ```
 */
export function isKitIdUnique(id: string, existingIds?: Set<string>): boolean {
  const ids = existingIds ?? new Set(allKits.map((k) => k.id));
  return !ids.has(id.toLowerCase());
}

/**
 * Validate kit short tagline for SEO meta descriptions
 *
 * @param tagline - Tagline to validate
 * @returns true if valid, false otherwise
 *
 * @example
 * ```typescript
 * if (isValidShortTagline(tagline)) {
 *   console.log('Good for meta description');
 * } else {
 *   console.log('Too long or contains invalid characters');
 * }
 * ```
 */
export function isValidShortTagline(tagline: string | undefined): boolean {
  return validateShortTagline(tagline);
}

// ============================================================================
// Bulk Validation (Build-Time Checks)
// ============================================================================

/**
 * Validate entire kit collection
 *
 * Run comprehensive validation on all kits in the collection.
 * Used during build time (`npm run type-check`) to catch errors early.
 *
 * @returns Object with validation results and error details
 *
 * CHECKS PERFORMED:
 * - All kits conform to Kit interface schema
 * - All kit IDs are unique
 * - All shortTaglines are ≤120 characters
 * - Status values are valid enums
 * - GitHub URLs (when present) are valid
 *
 * @example
 * ```typescript
 * const results = validateKitCollection();
 * if (!results.valid) {
 *   console.error('Validation errors:', results.errors);
 *   process.exit(1);
 * }
 * ```
 */
export function validateKitCollection(): {
  valid: boolean;
  errors: string[];
  warnings: string[];
  stats: {
    total: number;
    featured: number;
    experimental: number;
    archived: number;
  };
} {
  const errors: string[] = [];
  const warnings: string[] = [];
  const seenIds = new Set<string>();

  let featured = 0;
  let experimental = 0;
  let archived = 0;

  for (const kit of allKits) {
    // Validate kit schema
    const kitId = kit.id;
    if (!isValidKit(kit)) {
      errors.push(`Kit '${kitId}' is invalid against schema`);
      continue;
    }

    // Check unique ID
    if (seenIds.has(kit.id)) {
      errors.push(`Duplicate kit ID: '${kit.id}'`);
    } else {
      seenIds.add(kit.id);
    }

    // Validate shortTagline
    if (kit.shortTagline && !isValidShortTagline(kit.shortTagline)) {
      errors.push(`Kit '${kit.id}': shortTagline exceeds 120 characters`);
    }

    // Validate status
    if (kit.status && !['featured', 'experimental', 'archived'].includes(kit.status)) {
      errors.push(`Kit '${kit.id}': invalid status '${kit.status}'`);
    }

    // Count by status
    if (kit.status === 'featured' || kit.featured) featured++;
    if (kit.status === 'experimental') experimental++;
    if (kit.status === 'archived') archived++;

    // Validate GitHub URL (if present)
    if (kit.githubUrl && !kit.githubUrl.startsWith('https://github.com/')) {
      errors.push(`Kit '${kit.id}': githubUrl must be HTTPS GitHub URL`);
    }

    // Warn about missing new fields (Phase 2 transition)
    if (!kit.emoji) {
      warnings.push(`Kit '${kit.id}': missing emoji (required for Phase 3+)`);
    }
    if (!kit.shortTagline) {
      warnings.push(`Kit '${kit.id}': missing shortTagline (required for Phase 3+)`);
    }
    if (!kit.domain) {
      warnings.push(`Kit '${kit.id}': missing domain (required for Phase 3+)`);
    }
    if (!kit.cli) {
      warnings.push(`Kit '${kit.id}': missing cli config (required for Phase 3+)`);
    }
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings,
    stats: {
      total: allKits.length,
      featured,
      experimental,
      archived,
    },
  };
}

// ============================================================================
// Type Exports (For consumers to import types)
// ============================================================================

export type {
  Kit,
  KitDomain,
  KitStatus,
};

// ============================================================================
// TODO: Phase 4 - Future Enhancements
// ============================================================================

// TODO: Phase 4 feature - switch loadKits() to fetch from /api/cron/update-stars endpoint
// This will enable automatic star count updates without code changes

// TODO: Phase 4 feature - implement Kit cache with TTL for performance
// export function withKitCache(ttl: number = 3600) { ... }

// TODO: Phase 4 feature - implement kit metadata diff tracking
// export function getKitDiff(oldKit: Kit, newKit: Kit): KitDiff { ... }
