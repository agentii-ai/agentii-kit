# Data Model: Primary Frontend Redesign

**Feature**: Primary Frontend Redesign with Secondary Frontend Design
**Branch**: `001-redesign-primary-frontend`
**Date**: 2025-12-04
**Purpose**: Define data structures for kits, articles, and supporting entities

---

## Overview

This document defines the data model for the redesigned primary frontend. Since this is a **static site** with no database, all data is stored in:
1. **TypeScript files** (`data/kits.ts`) - Mock data for spec-kits
2. **MDX files** (`content/blog/*.mdx`) - Blog articles managed by Nextra

---

## Entity Definitions

### 1. Kit

**Description**: Represents a spec-kit for a specific role or discipline (development, product management, legal, etc.).

**Fields**:

| Field | Type | Required | Constraints | Description |
|-------|------|----------|-------------|-------------|
| `id` | `string` | Yes | Unique | Unique identifier for the kit |
| `title` | `string` | Yes | 10-100 characters | Display name of the kit |
| `description` | `string` | Yes | 20-500 characters | Short description of the kit's purpose |
| `category` | `KitCategory` | Yes | Enum (7 values) | Discipline category (DEV-KIT, PM-KIT, etc.) |
| `categoryColor` | `CategoryColor` | Yes | Enum (7 values) | Color theme identifier for category |
| `repo` | `string` | Yes | Format: `owner/name` | GitHub repository path |
| `stars` | `number` | Yes | Integer ≥ 0 | GitHub star count (social proof) |
| `lastUpdated` | `string` | Yes | ISO 8601 date (`YYYY-MM-DD`) | Last modification date |

**TypeScript Definition**:

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
  repo: string;
  stars: number;
  lastUpdated: string;
}
```

**Validation Rules**:
- `title`: Length 10-100 chars (ensures card layout consistency)
- `description`: Length 20-500 chars (sufficient for 2-3 line truncation with `line-clamp`)
- `category`: Must match one of 7 predefined categories
- `categoryColor`: Must correspond to `category` (enforced by categoryMetadata)
- `repo`: Must match GitHub format (`^[a-z0-9-]+/[a-z0-9-]+$`, case-insensitive)
- `stars`: Non-negative integer (0 for new kits)
- `lastUpdated`: ISO 8601 date format (YYYY-MM-DD)

**Relationships**: None (flat structure)

**State Transitions**: N/A (static data, no lifecycle)

**Example**:

```typescript
{
  id: "1",
  title: "AI Agent Dev Kit",
  description: "Complete toolkit for building AI agents with Claude, OpenAI, and LangChain. Includes prompt templates, testing frameworks, and deployment guides.",
  category: "DEV-KIT",
  categoryColor: "dev",
  repo: "agentii-ai/dev-kit",
  stars: 1234,
  lastUpdated: "2025-11-20"
}
```

---

### 2. Article

**Description**: Represents a blog post or article about AI agents, spec-kits, or related topics. Derived from Nextra MDX files.

**Fields**:

| Field | Type | Required | Constraints | Description |
|-------|------|----------|-------------|-------------|
| `slug` | `string` | Yes | URL-friendly, unique | URL path segment for the article |
| `title` | `string` | Yes | 10-60 characters | Article title (per constitution) |
| `excerpt` | `string` | Yes | 150-160 characters | Short summary (per constitution) |
| `content` | `string` | Yes | Markdown/MDX | Full article content |
| `tags` | `string[]` | Yes | 1-5 tags, lowercase-hyphenated | Category tags |
| `author` | `string` | Yes | Non-empty | Author name |
| `date` | `string` | Yes | ISO 8601 date (`YYYY-MM-DD`) | Publication date |
| `stars` | `number` | No | Integer ≥ 0 | Social proof metric (optional, mock) |
| `gradient` | `string` | No | Tailwind gradient classes | CSS gradient for card header |
| `coverImage` | `string` | No | URL or path | Cover image URL |
| `featured` | `boolean` | No | Default: `false` | Whether article is featured |

**TypeScript Definition**:

```typescript
export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  tags: string[];
  author: string;
  date: string;
  stars?: number;
  gradient?: string;
  coverImage?: string;
  featured?: boolean;
}
```

**Validation Rules**:
- `title`: Length 10-60 chars (constitution requirement for SEO)
- `excerpt`: Length 150-160 chars (optimal meta description length)
- `tags`: Lowercase, hyphenated format (e.g., `agentic-framework`, not `Agentic Framework`)
- `date`: ISO 8601 date format (YYYY-MM-DD)
- `slug`: Derived from filename, alphanumeric + hyphens only
- `featured`: Only 3-5 articles should be featured at a time (for carousel)

**Relationships**: None (file-based)

**State Transitions**: N/A (content managed via Git, no runtime state changes)

**Example**:

```typescript
{
  slug: "building-ai-agents-with-claude",
  title: "Building AI Agents with Claude: A Complete Guide",
  excerpt: "Learn how to build production-ready AI agents using Claude and the Agent Dev Kit. Covers prompt engineering, error handling, and deployment strategies.",
  content: "# Building AI Agents with Claude...", // MDX content
  tags: ["development", "agentic-framework", "claude"],
  author: "Agentii Team",
  date: "2025-11-23",
  stars: 543,
  gradient: "from-blue-500 to-cyan-500",
  coverImage: "/images/blog/2025/11/claude-agents.png",
  featured: true
}
```

---

### 3. Category

**Description**: Metadata for kit categories, used for filtering and visual styling.

**Fields**:

| Field | Type | Required | Constraints | Description |
|-------|------|----------|-------------|-------------|
| `id` | `CategoryColor` | Yes | Enum (7 values) | Category identifier |
| `label` | `string` | Yes | Non-empty | Human-readable category name |
| `color` | `string` | Yes | Tailwind gradient classes | Gradient classes for visual styling |

**TypeScript Definition**:

```typescript
export interface CategoryMetadata {
  label: string;
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

**Validation Rules**:
- `id`: Must match one of 7 predefined CategoryColor enum values
- `label`: Non-empty string, title case
- `color`: Valid Tailwind gradient classes (format: `from-{color}-{shade} to-{color}-{shade}`)

**Relationships**: One-to-many with Kit (one category → many kits)

**State Transitions**: N/A (static metadata)

---

### 4. Author (Optional)

**Description**: Author profile for blog posts (if needed for future expansion).

**Fields**:

| Field | Type | Required | Constraints | Description |
|-------|------|----------|-------------|-------------|
| `name` | `string` | Yes | Non-empty | Author name |
| `avatar` | `string` | No | URL or path | Avatar image URL |
| `bio` | `string` | No | Max 200 characters | Short biography |
| `twitter` | `string` | No | Twitter handle (no @) | Twitter profile |
| `github` | `string` | No | GitHub username | GitHub profile |

**TypeScript Definition**:

```typescript
export interface Author {
  name: string;
  avatar?: string;
  bio?: string;
  twitter?: string;
  github?: string;
}
```

**Note**: Currently not used (articles only have `author: string`). Included for future expansion if rich author profiles are needed.

---

### 5. NavigationLink (Internal)

**Description**: Represents a navigation link in Navbar or Footer.

**Fields**:

| Field | Type | Required | Constraints | Description |
|-------|------|----------|-------------|-------------|
| `label` | `string` | Yes | Non-empty | Link text |
| `href` | `string` | Yes | URL or path | Link destination |
| `external` | `boolean` | No | Default: `false` | Whether link opens in new tab |

**TypeScript Definition**:

```typescript
export interface NavigationLink {
  label: string;
  href: string;
  external?: boolean;
}
```

**Example**:

```typescript
const navLinks: NavigationLink[] = [
  { label: "Kits", href: "/kits", external: false },
  { label: "Blog", href: "/blog", external: false },
  { label: "About", href: "/about", external: false },
  { label: "GitHub", href: "https://github.com/agentii-ai/agentii-kit", external: true },
];
```

---

## Data Access Patterns

### Kit Queries

**Get all kits**:
```typescript
import { kits } from '@/data/kits';
const allKits = kits;
```

**Filter by category**:
```typescript
import { getKitsByCategory } from '@/data/kits';
const devKits = getKitsByCategory('DEV-KIT');
```

**Search kits**:
```typescript
import { searchKits } from '@/data/kits';
const results = searchKits('agent framework');
```

**Sort by popularity**:
```typescript
import { sortKitsByStars } from '@/data/kits';
const popularKits = sortKitsByStars(kits);
```

**Sort by recency**:
```typescript
import { sortKitsByDate } from '@/data/kits';
const recentKits = sortKitsByDate(kits);
```

**Get featured kits** (top N by stars):
```typescript
import { sortKitsByStars } from '@/data/kits';
const featuredKits = sortKitsByStars(kits).slice(0, 3);
```

### Article Queries

**Get all articles**:
```typescript
import { getAllPosts } from '@/lib/content/blog-loader';
const articles = await getAllPosts();
```

**Get featured articles**:
```typescript
import { getFeaturedPosts } from '@/lib/content/blog-loader';
const featuredArticles = await getFeaturedPosts(3);
```

**Get recent articles**:
```typescript
import { getRecentPosts } from '@/lib/content/blog-loader';
const recentArticles = await getRecentPosts(10);
```

**Get article by slug**:
```typescript
import { getPostBySlug } from '@/lib/content/blog-loader';
const article = await getPostBySlug('building-ai-agents-with-claude');
```

---

## Data Validation

### Optional: Zod Schemas

If runtime validation is needed (e.g., for user-submitted data in future), use Zod:

```typescript
import { z } from 'zod';

export const KitSchema = z.object({
  id: z.string(),
  title: z.string().min(10).max(100),
  description: z.string().min(20).max(500),
  category: z.enum(['DEV-KIT', 'PM-KIT', 'MARKETING-KIT', 'LEGAL-KIT', 'FINANCE-KIT', 'DESIGN-KIT', 'OPS-KIT']),
  categoryColor: z.enum(['dev', 'pm', 'marketing', 'legal', 'finance', 'design', 'ops']),
  repo: z.string().regex(/^[a-z0-9-]+\/[a-z0-9-]+$/i, "Invalid GitHub repo format"),
  stars: z.number().int().min(0),
  lastUpdated: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format (use YYYY-MM-DD)"),
});

export const ArticleSchema = z.object({
  slug: z.string().regex(/^[a-z0-9-]+$/, "Invalid slug format"),
  title: z.string().min(10).max(60),
  excerpt: z.string().min(150).max(160),
  content: z.string(),
  tags: z.array(z.string().regex(/^[a-z0-9-]+$/, "Tags must be lowercase-hyphenated")).min(1).max(5),
  author: z.string().min(1),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format"),
  stars: z.number().int().min(0).optional(),
  gradient: z.string().optional(),
  coverImage: z.string().optional(),
  featured: z.boolean().optional(),
});

// Validate kit data
function validateKit(kit: unknown): Kit {
  return KitSchema.parse(kit);
}

// Validate article data
function validateArticle(article: unknown): Article {
  return ArticleSchema.parse(article);
}
```

**Note**: Validation is optional for this phase since all data is statically defined in TypeScript files. Add if dynamic data sources are introduced.

---

## Data Storage

### File Locations

| Entity | Storage Location | Format | Managed By |
|--------|------------------|--------|------------|
| Kit | `data/kits.ts` | TypeScript | Manual (developers) |
| Article | `content/blog/YYYY/MM/slug.mdx` | MDX with frontmatter | Nextra + Git workflow |
| Category | `data/kits.ts` (metadata object) | TypeScript | Manual (developers) |
| Author | `content/blog/authors/*.json` (future) | JSON | Manual (developers) |

### Data Initialization

**Kits**: Initialize with 15-20 sample kits across all 7 categories in `data/kits.ts`:

```typescript
export const kits: Kit[] = [
  // DEV-KIT (3 kits)
  {
    id: "1",
    title: "AI Agent Dev Kit",
    description: "Complete toolkit for building AI agents with Claude, OpenAI, and LangChain...",
    category: "DEV-KIT",
    categoryColor: "dev",
    repo: "agentii-ai/dev-kit",
    stars: 1234,
    lastUpdated: "2025-11-20"
  },
  {
    id: "2",
    title: "Cursor IDE Spec Kit",
    description: "Optimized specs and templates for Cursor IDE users building AI applications...",
    category: "DEV-KIT",
    categoryColor: "dev",
    repo: "agentii-ai/cursor-kit",
    stars: 987,
    lastUpdated: "2025-11-18"
  },
  // ... (continue for all categories)
];
```

**Articles**: Existing MDX blog posts in `content/blog/` require no migration. New articles follow Nextra frontmatter format:

```yaml
---
title: "Building AI Agents with Claude"
description: "Learn how to build production-ready AI agents using Claude and the Agent Dev Kit."
date: 2025-11-23
author: Agentii Team
tags: [development, agentic-framework, claude]
cover: /images/blog/2025/11/claude-agents.png
featured: true
draft: false
---
```

---

## Data Relationships

```text
┌──────────────┐
│   Category   │
│  (metadata)  │
└──────┬───────┘
       │ 1:N
       ▼
┌──────────────┐
│     Kit      │
│   (static)   │
└──────────────┘

┌──────────────┐
│   Article    │
│ (MDX files)  │
└──────────────┘
    (no relationships)
```

- **Category → Kit**: One-to-many (one category has many kits)
- **Article**: Standalone (no relationships)

---

## Data Constraints Summary

| Entity | Unique Fields | Required Fields | Enum Fields | Date Fields |
|--------|---------------|-----------------|-------------|-------------|
| Kit | `id`, `repo` | All fields | `category`, `categoryColor` | `lastUpdated` |
| Article | `slug` | `slug`, `title`, `excerpt`, `content`, `tags`, `author`, `date` | None | `date` |
| Category | `id` | `id`, `label`, `color` | `id` | None |

---

## Future Considerations

1. **Dynamic Kit Data**: If kits are fetched from GitHub API in future, replace `data/kits.ts` with API calls in server components
2. **Author Profiles**: If rich author pages are needed, extend Author entity and create `content/blog/authors/*.json` files
3. **Kit Versioning**: If kits have versions, add `version: string` field to Kit interface
4. **Article Series**: If articles form series, add `series?: string` and `seriesOrder?: number` to Article
5. **Comments**: If comments are added, create separate Comment entity (likely external service like Disqus/Giscus)

---

## References

- **Feature Specification**: [spec.md](./spec.md)
- **Research Document**: [research.md](./research.md)
- **Implementation Plan**: [plan.md](./plan.md)
- **Constitution**: `/.specify/memory/constitution.md` (content validation requirements)
