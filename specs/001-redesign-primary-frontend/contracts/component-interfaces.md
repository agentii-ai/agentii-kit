# Component Interfaces

**Feature**: Primary Frontend Redesign with Secondary Frontend Design
**Branch**: `001-redesign-primary-frontend`
**Date**: 2025-12-04
**Purpose**: Define TypeScript interfaces for component props and internal data contracts

---

## Overview

This document defines the TypeScript interfaces used throughout the redesigned frontend components. These interfaces serve as internal contracts between components, ensuring type safety and consistency.

---

## Core Data Interfaces

### Kit Interface

**Location**: `data/kits.ts`

```typescript
export type KitCategory =
  | 'DEV-KIT'
  | 'PM-KIT'
  | 'MARKETING-KIT'
  | 'LEGAL-KIT'
  | 'FINANCE-KIT'
  | 'DESIGN-KIT'
  | 'OPS-KIT';

export type CategoryColor =
  | 'dev'
  | 'pm'
  | 'marketing'
  | 'legal'
  | 'finance'
  | 'design'
  | 'ops';

export interface Kit {
  id: string;
  title: string;
  description: string;
  category: KitCategory;
  categoryColor: CategoryColor;
  repo: string;  // GitHub repo (e.g., "agentii-ai/dev-kit")
  stars: number;
  lastUpdated: string;  // ISO 8601 date string
}
```

### Article Interface

**Location**: `lib/types/article.ts` (or inline in components)

```typescript
export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  content: string;  // Markdown content
  tags: string[];
  author: string;
  date: string;  // ISO 8601 date string
  stars?: number;  // Social proof metric (optional)
  gradient?: string;  // CSS gradient for header (e.g., "from-blue-500 to-purple-500")
  coverImage?: string;
  featured?: boolean;
}
```

### Category Metadata Interface

**Location**: `data/kits.ts`

```typescript
export interface CategoryMetadata {
  label: string;  // Human-readable name (e.g., "Development")
  color: string;  // Tailwind gradient classes (e.g., "from-blue-500 to-cyan-500")
}

export const categoryMetadata: Record<CategoryColor, CategoryMetadata> = {
  dev: { label: "Development", color: "from-blue-500 to-cyan-500" },
  pm: { label: "Product Management", color: "from-purple-500 to-pink-500" },
  marketing: { label: "Marketing", color: "from-orange-500 to-yellow-500" },
  legal: { label: "Legal & Compliance", color: "from-gray-500 to-slate-500" },
  finance: { label: "Finance", color: "from-green-500 to-emerald-500" },
  design: { label: "Design", color: "from-pink-500 to-rose-500" },
  ops: { label: "Operations", color: "from-indigo-500 to-violet-500" },
};
```

---

## Component Props Interfaces

### KitCard Component

**Location**: `components/KitCard.tsx`

```typescript
export interface KitCardProps {
  kit: Kit;
  onViewSpec?: () => void;
  onViewGithub?: () => void;
  className?: string;
}
```

**Usage**:
```typescript
<KitCard
  kit={kit}
  onViewSpec={() => window.open(`/${kit.repo}/spec.md`, '_blank')}
  onViewGithub={() => window.open(`https://github.com/${kit.repo}`, '_blank')}
/>
```

### KitsGrid Component

**Location**: `components/KitsGrid.tsx`

```typescript
export interface KitsGridProps {
  kits: Kit[];
  searchQuery: string;
  selectedCategories: string[];
  currentPage: number;
  onPageChange: (page: number) => void;
  itemsPerPage?: number;  // Default: 9
  className?: string;
}
```

**Usage**:
```typescript
<KitsGrid
  kits={allKits}
  searchQuery={searchQuery}
  selectedCategories={selectedCategories}
  currentPage={currentPage}
  onPageChange={setCurrentPage}
  itemsPerPage={9}
/>
```

### FilterSidebar Component

**Location**: `components/FilterSidebar.tsx`

```typescript
export interface FilterSidebarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategories: string[];
  onCategoryChange: (categories: string[]) => void;
  sortBy?: 'popular' | 'recent' | 'alphabetical';
  onSortChange?: (sort: 'popular' | 'recent' | 'alphabetical') => void;
  className?: string;
}
```

**Usage**:
```typescript
<FilterSidebar
  searchQuery={searchQuery}
  onSearchChange={setSearchQuery}
  selectedCategories={selectedCategories}
  onCategoryChange={setSelectedCategories}
  sortBy={sortBy}
  onSortChange={setSortBy}
/>
```

### ArticleCard Component

**Location**: `components/ArticleCard.tsx`

```typescript
export interface ArticleCardProps {
  article: Omit<Article, 'content'>;  // Content not needed for card
  className?: string;
}
```

**Usage**:
```typescript
<ArticleCard
  article={{
    slug: article.slug,
    title: article.title,
    excerpt: article.excerpt,
    tags: article.tags,
    author: article.author,
    date: article.date,
    gradient: article.gradient,
  }}
/>
```

### BlogHero Component

**Location**: `components/BlogHero.tsx`

```typescript
export interface BlogHeroProps {
  featuredArticles: Article[];  // Expects 3-5 articles
  className?: string;
}
```

**Usage**:
```typescript
<BlogHero
  featuredArticles={featuredArticles.slice(0, 3)}
/>
```

### HeroSection Component

**Location**: `components/HeroSection.tsx`

```typescript
export interface HeroSectionProps {
  headline?: string;  // Default: "agentii-kit — Power Your AI Agents"
  subheadline?: string;
  onBrowseKits?: () => void;  // Default: scroll to #kits
  onViewGithub?: () => void;  // Default: open GitHub repo
  className?: string;
}
```

**Usage**:
```typescript
<HeroSection
  onBrowseKits={() => document.getElementById('kits')?.scrollIntoView({ behavior: 'smooth' })}
  onViewGithub={() => window.open('https://github.com/agentii-ai/agentii-kit', '_blank')}
/>
```

### FloatingTags Component

**Location**: `components/FloatingTags.tsx`

```typescript
export interface FloatingTagsProps {
  tags: string[];
  direction?: 'left' | 'right';  // Default: 'left'
  speed?: 'normal' | 'slow';  // Default: 'normal'
  className?: string;
}
```

**Usage**:
```typescript
<FloatingTags
  tags={['DEV-KIT', 'PM-KIT', 'CURSOR', 'CLAUDE', 'AGENTIC']}
  direction="left"
  speed="normal"
/>
```

### FeaturedKits Component

**Location**: `components/FeaturedKits.tsx`

```typescript
export interface FeaturedKitsProps {
  kits: Kit[];  // Expects top 3 kits by stars
  className?: string;
}
```

**Usage**:
```typescript
import { sortKitsByStars } from '@/data/kits';

<FeaturedKits
  kits={sortKitsByStars(allKits).slice(0, 3)}
/>
```

### LatestKits Component

**Location**: `components/LatestKits.tsx`

```typescript
export interface LatestKitsProps {
  kits: Kit[];  // Expects 3-6 recent kits
  className?: string;
}
```

**Usage**:
```typescript
import { sortKitsByDate } from '@/data/kits';

<LatestKits
  kits={sortKitsByDate(allKits).slice(0, 3)}
/>
```

### RecentlyUpdatedTable Component

**Location**: `components/RecentlyUpdatedTable.tsx`

```typescript
export interface RecentlyUpdatedTableProps {
  kits: Kit[];  // Expects 5-10 kits
  className?: string;
}
```

**Usage**:
```typescript
import { sortKitsByDate } from '@/data/kits';

<RecentlyUpdatedTable
  kits={sortKitsByDate(allKits).slice(0, 10)}
/>
```

### Testimonials Component

**Location**: `components/Testimonials.tsx`

```typescript
export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  avatar?: string;
  company?: string;
}

export interface TestimonialsProps {
  testimonials: TestimonialItem[];
  className?: string;
}
```

**Usage**:
```typescript
<Testimonials
  testimonials={[
    {
      quote: "agentii-kit transformed how we build AI agents...",
      author: "Jane Doe",
      role: "Lead AI Engineer",
      company: "Tech Corp",
    },
    // ... more testimonials
  ]}
/>
```

### UseCases Component

**Location**: `components/UseCases.tsx`

```typescript
export interface UseCaseItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  categoryColor: CategoryColor;
}

export interface Metric {
  label: string;
  value: string | number;
  icon: React.ReactNode;
}

export interface UseCasesProps {
  metrics: Metric[];
  useCases: UseCaseItem[];
  className?: string;
}
```

**Usage**:
```typescript
import { Code, Briefcase, Scale } from 'lucide-react';

<UseCases
  metrics={[
    { label: "Spec Kits", value: 15, icon: <Code size={24} /> },
    { label: "GitHub Stars", value: "12K", icon: <Star size={24} /> },
  ]}
  useCases={[
    {
      title: "Developer Kits",
      description: "Build AI agents with Claude and Cursor...",
      icon: <Code size={32} />,
      categoryColor: "dev",
    },
    // ... more use cases
  ]}
/>
```

### Navbar Component

**Location**: `components/Navbar.tsx`

```typescript
export interface NavigationLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface NavbarProps {
  links?: NavigationLink[];  // Optional: override default links
  className?: string;
}
```

**Usage**:
```typescript
<Navbar
  links={[
    { label: "Kits", href: "/kits" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "GitHub", href: "https://github.com/agentii-ai/agentii-kit", external: true },
  ]}
/>
```

### Footer Component

**Location**: `components/Footer.tsx`

```typescript
export interface FooterProps {
  links?: NavigationLink[];  // Optional: override default links
  className?: string;
}
```

**Usage**:
```typescript
<Footer
  links={[
    { label: "About", href: "/about" },
    { label: "Contribute", href: "/contribute" },
    { label: "GitHub", href: "https://github.com/agentii-ai/agentii-kit", external: true },
    { label: "License", href: "/license" },
  ]}
/>
```

---

## State Management Interfaces

### Filter State

```typescript
export interface FilterState {
  searchQuery: string;
  selectedCategories: string[];
  sortBy: 'popular' | 'recent' | 'alphabetical';
}
```

**Usage**:
```typescript
const [filterState, setFilterState] = useState<FilterState>({
  searchQuery: '',
  selectedCategories: [],
  sortBy: 'popular',
});
```

### Pagination State

```typescript
export interface PaginationState {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
}

export interface PaginationHelpers {
  totalPages: number;
  startIndex: number;
  endIndex: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}
```

**Usage**:
```typescript
const [pagination, setPagination] = useState<PaginationState>({
  currentPage: 1,
  itemsPerPage: 9,
  totalItems: kits.length,
});

const helpers: PaginationHelpers = {
  totalPages: Math.ceil(pagination.totalItems / pagination.itemsPerPage),
  startIndex: (pagination.currentPage - 1) * pagination.itemsPerPage,
  endIndex: pagination.currentPage * pagination.itemsPerPage,
  hasNextPage: pagination.currentPage < Math.ceil(pagination.totalItems / pagination.itemsPerPage),
  hasPrevPage: pagination.currentPage > 1,
};
```

---

## UI Component Interfaces

### Button Component

**Location**: `components/ui/button.tsx`

```typescript
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'secondary' | 'ghost' | 'outline' | 'destructive';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  asChild?: boolean;
}
```

### Badge Component

**Location**: `components/ui/badge.tsx`

```typescript
export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline';
}
```

### Input Component

**Location**: `components/ui/input.tsx`

```typescript
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // Extends native input props
}
```

### Checkbox Component

**Location**: `components/ui/checkbox.tsx`

```typescript
export interface CheckboxProps extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  // Extends Radix Checkbox props
}
```

---

## Helper Type Definitions

### Color Utilities

```typescript
export type TailwindGradient = `from-${string}-${number} to-${string}-${number}`;
export type HSLColor = `${number} ${number}% ${number}%`;
```

### Date Utilities

```typescript
export type ISODate = `${number}-${number}-${number}`;  // YYYY-MM-DD

export function formatDate(isoDate: ISODate): string {
  const date = new Date(isoDate);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function isValidISODate(date: string): date is ISODate {
  return /^\d{4}-\d{2}-\d{2}$/.test(date);
}
```

---

## Validation Utilities

### Type Guards

```typescript
export function isKit(obj: unknown): obj is Kit {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    'id' in obj &&
    'title' in obj &&
    'category' in obj
  );
}

export function isArticle(obj: unknown): obj is Article {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    'slug' in obj &&
    'title' in obj &&
    'excerpt' in obj &&
    'content' in obj
  );
}
```

---

## Export Organization

**Recommended file structure for types**:

```text
lib/types/
├── kit.ts           # Kit, KitCategory, CategoryColor
├── article.ts       # Article interface
├── category.ts      # CategoryMetadata
├── navigation.ts    # NavigationLink
├── filter.ts        # FilterState, PaginationState
└── index.ts         # Re-export all types
```

**Example `lib/types/index.ts`**:
```typescript
export * from './kit';
export * from './article';
export * from './category';
export * from './navigation';
export * from './filter';
```

**Usage**:
```typescript
import { Kit, Article, FilterState } from '@/lib/types';
```

---

## Related Documentation

- [data-model.md](../data-model.md) - Entity definitions and validation rules
- [research.md](../research.md) - Component port strategy and decisions
- [plan.md](../plan.md) - Implementation phases and component breakdown
