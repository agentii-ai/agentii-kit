# Implementation Plan: Primary Frontend Redesign with Secondary Frontend Design

**Branch**: `001-redesign-primary-frontend` | **Date**: 2025-12-04 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-redesign-primary-frontend/spec.md`

## Summary

Redesign the primary Nextra-based frontend (currently deployed at kits.agentii.ai) to adopt the visual design, component structure, and content organization from the secondary frontend (spec-kit-hub-main/) while preserving the Nextra + Next.js 14 infrastructure and Vercel deployment pipeline. The redesigned website will showcase spec-kits for different roles (developers, PMs, legal, marketing, etc.) with a GitHub-inspired dark theme, replacing the current blog-focused layout. Key pages include: (1) Landing page with hero, featured kits, filtering, and use cases, (2) Blog listing and article pages using existing Nextra content, (3) Kits catalog page, (4) About and Donate pages. The implementation maintains all SEO optimizations, static site generation, and Git-based publishing workflow mandated by the project constitution.

## Technical Context

**Language/Version**: TypeScript 5.3+ with Next.js 14 (App Router) and React 18
**Primary Dependencies**: Nextra 4.6, nextra-theme-blog 4.6, Tailwind CSS 3.3, MDX 3.0, lucide-react, clsx, gray-matter
**Storage**: Static files (MDX content in content/blog/, mock data in data/kits.ts)
**Testing**: Type checking (tsc --noEmit), linting (eslint), content validation (validate-frontmatter, check-links)
**Target Platform**: Vercel static export (Next.js SSG), browser (modern ES2020+)
**Project Type**: Web application (frontend only, static site generation)
**Performance Goals**: Lighthouse score ≥90, LCP <2.5s, FID <100ms, CLS <0.1, build time <60s
**Constraints**: Must preserve Nextra infrastructure, maintain existing SEO (meta tags, sitemap, RSS), no backend API, dark theme by default
**Scale/Scope**: 5 main pages (home, /blog, /blog/[slug], /kits, /about, /donate), 30+ components, 30 functional requirements, 90% visual consistency with secondary frontend

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

### Principle Compliance

✅ **I. Content-First (Markdown & Git-Driven)**
- **Status**: COMPLIANT
- **Evidence**: Design preserves existing MDX blog content in `content/blog/` and continues using Nextra's markdown processing. No web UI for publishing—all changes via Git PR workflow.
- **Impact**: Blog articles will use ArticleCard visual design but load from existing Nextra content via blog-loader.ts.

✅ **II. SEO-Obsessed (Highest Priority - FR-2)**
- **Status**: COMPLIANT
- **Evidence**: FR-026 mandates "Website MUST maintain all existing SEO optimizations (meta tags, sitemap, RSS feed, JSON-LD schema) from the original Nextra setup." Success criteria SC-009 requires passing existing validation checks.
- **Impact**: All meta tags, Open Graph, Twitter Card, JSON-LD, XML sitemap, and RSS feed generation remain intact.

✅ **III. Static Site Generation (Security & Performance)**
- **Status**: COMPLIANT
- **Evidence**: FR-025 requires "Website MUST build as a static site compatible with Vercel deployment without changing the Nextra/Next.js infrastructure." No backend APIs or server-side rendering introduced.
- **Impact**: Build continues to `next build` → `.next/out/` static HTML.

✅ **IV. Admin-Only Publishing (Code Review Workflow)**
- **Status**: COMPLIANT
- **Evidence**: Redesign is purely visual/structural. No changes to content authoring workflow. All content changes flow through Git PR + validation + review + merge to main → auto-deploy.
- **Impact**: No new publishing mechanisms introduced.

✅ **V. Design Reference Separation (Two-Frontend Architecture)**
- **Status**: COMPLIANT
- **Evidence**: Spec explicitly states "The secondary frontend's stack (Vite + React + TypeScript + shadcn-ui) serves as a **design reference only**. The primary frontend maintains its Nextra + Next.js + Tailwind stack." No automatic sync or framework migration.
- **Impact**: Components from secondary frontend will be manually ported/recreated using Nextra-compatible patterns.

### Technology Stack Compliance

| Component | Constitution Mandate | Implementation Plan | Compliance |
|-----------|---------------------|---------------------|------------|
| Framework | Next.js ^14.0.0 | Keep Next.js 14 with App Router | ✅ |
| React | React ^18.2.0 | Keep React 18.2 | ✅ |
| Content | Nextra ^4.6.0 | Keep Nextra 4.6 for blog/docs | ✅ |
| Styling | Tailwind CSS ^3.3.0 | Keep Tailwind 3.3, extend theme | ✅ |
| Search | Pagefind ^1.0.0 | Keep Pagefind (not affected by redesign) | ✅ |
| Markdown | @mdx-js ^3.0.0 | Keep MDX 3.0 for content rendering | ✅ |
| Highlighting | rehype-highlight ^7.0.0 | Keep existing (already in package.json) | ✅ |
| RSS | rss ^1.2.0+ | Keep existing RSS generation | ✅ |
| TypeScript | TypeScript ^5.3.0 | Keep TypeScript 5.3 | ✅ |
| Package Manager | npm (per user input) | Use npm (package.json uses npm) | ✅ |

### Performance Requirements Compliance

| Target | Constitution | Plan | Compliance |
|--------|-------------|------|------------|
| Lighthouse Score | ≥90 | SC-008: ≥90 on all pages | ✅ |
| LCP | <2.5s | SC-008: <2.5s | ✅ |
| FID | <100ms | SC-008: <100ms | ✅ |
| CLS | <0.1 | SC-008: <0.1 | ✅ |
| Build Time | <60s | Constitution mandate, SC-007 monitors | ✅ |

### Validation Gates

✅ **Pre-merge validation commands remain unchanged:**
- `npm run validate-frontmatter`
- `npm run check-links`
- `npm run type-check`
- `npm run lint`
- `npm run build`

✅ **No prohibited technologies introduced:**
- No server-side rendering for dynamic content
- No database engines (static files only)
- No third-party analytics cookies (Plausible remains if configured)
- No backend API server

### Re-check After Phase 1 Design

*To be completed after Phase 1 artifacts (data-model.md, contracts/) are generated.*

**Action items for re-check:**
1. Verify no backend APIs added to contracts/
2. Confirm data-model.md uses only static file structures (no DB schemas)
3. Validate quickstart.md preserves Git-based workflow
4. Ensure no new external dependencies violate constitution (check package.json changes)

## Project Structure

### Documentation (this feature)

```text
specs/001-redesign-primary-frontend/
├── spec.md                     # Feature specification (completed)
├── plan.md                     # This file (/speckit.plan command output)
├── research.md                 # Phase 0 output (/speckit.plan command)
├── data-model.md               # Phase 1 output (/speckit.plan command)
├── quickstart.md               # Phase 1 output (/speckit.plan command)
├── contracts/                  # Phase 1 output (empty for static frontend)
│   └── README.md               # Explanation of why no API contracts needed
├── checklists/
│   └── requirements.md         # Spec quality checklist (completed)
└── tasks.md                    # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)

**Current Structure (Nextra + Next.js 14):**

```text
/Users/frank/X/agentii-kit/
├── app/                        # Next.js 14 App Router
│   ├── layout.tsx              # Root layout (TO MODIFY: dark theme, fonts)
│   ├── page.tsx                # Landing page (TO REPLACE: new hero + sections)
│   ├── blog/
│   │   ├── layout.tsx          # Blog layout (TO MODIFY: new Navbar/Footer)
│   │   ├── page.tsx            # Blog listing (TO REPLACE: BlogHero + ArticleCard grid)
│   │   └── [slug]/page.tsx     # Article detail (TO MODIFY: dark theme prose, share buttons)
│   ├── docs/                   # TO REMOVE: No docs page needed (per user input)
│   ├── archive/                # TO KEEP: May need style updates
│   ├── tags/                   # TO KEEP: May need style updates
│   └── rss.xml/route.ts        # TO KEEP: RSS generation
├── components/                 # React components
│   ├── Navigation.tsx          # TO REPLACE: with Navbar.tsx (secondary frontend design)
│   ├── Footer.tsx              # TO REPLACE: with new Footer (secondary frontend design)
│   ├── PostCard.tsx            # TO REPLACE: with ArticleCard.tsx (gradient header design)
│   ├── FeaturedPost.tsx        # TO REPLACE: with carousel-style featured article
│   ├── MarkdownRenderer.tsx    # TO KEEP: Update prose classes for dark theme
│   ├── ThemeProvider.tsx       # TO MODIFY: Default to dark theme
│   ├── ThemeToggle.tsx         # TO REMOVE or HIDE: Dark theme only
│   └── ui/                     # TO CREATE: shadcn-ui primitives
│       ├── button.tsx
│       ├── input.tsx
│       ├── checkbox.tsx
│       ├── badge.tsx
│       ├── card.tsx
│       ├── avatar.tsx
│       ├── separator.tsx
│       └── tooltip.tsx
├── content/                    # MDX content
│   ├── blog/                   # TO KEEP: Existing blog posts (no changes)
│   └── docs/                   # TO REMOVE: Docs not needed (per user input)
├── data/                       # TO CREATE: Mock data for kits
│   └── kits.ts                 # Kit definitions with schema
├── lib/                        # Utilities
│   ├── content/
│   │   └── blog-loader.ts      # TO KEEP: Nextra blog content loader
│   ├── metadata/               # TO KEEP: SEO metadata helpers
│   └── validation/             # TO KEEP: Frontmatter validation
├── public/                     # Static assets
│   ├── images/                 # TO EXTEND: Add kit/about/donate images
│   └── og-images/              # TO KEEP: Social share images
├── scripts/                    # Build scripts
│   ├── validate-frontmatter.ts # TO KEEP: Content validation
│   ├── check-links.ts          # TO KEEP: Link validation
│   └── generate-sitemap.ts     # TO KEEP: Sitemap generation
├── styles/
│   └── globals.css             # TO REPLACE: Dark theme CSS variables
├── tailwind.config.cjs         # TO MODIFY: Design tokens from secondary frontend
├── next.config.js              # TO KEEP: Nextra configuration
├── theme.config.jsx            # TO MODIFY: Update colors, branding
├── package.json                # TO MODIFY: Add tailwindcss-animate, class-variance-authority
└── tsconfig.json               # TO KEEP: TypeScript config
```

**New Files to Create:**

```text
/Users/frank/X/agentii-kit/
├── app/
│   ├── kits/
│   │   └── page.tsx            # NEW: Kits catalog page
│   ├── about/
│   │   └── page.tsx            # NEW: About page
│   └── donate/
│       └── page.tsx            # NEW: Donate page
├── components/
│   ├── Navbar.tsx              # NEW: Dark-themed fixed navbar (replaces Navigation.tsx)
│   ├── HeroSection.tsx         # NEW: Landing hero with gradient + floating tags
│   ├── FloatingTags.tsx        # NEW: Animated tag marquee
│   ├── KitCard.tsx             # NEW: Spec-kit card with category badge
│   ├── KitsGrid.tsx            # NEW: Filterable, paginated kit grid
│   ├── FilterSidebar.tsx       # NEW: Search + category filters
│   ├── FeaturedKits.tsx        # NEW: Top 3 kits by stars
│   ├── LatestKits.tsx          # NEW: Recent kits section
│   ├── RecentlyUpdatedTable.tsx # NEW: Table-style kit listing
│   ├── Testimonials.tsx        # NEW: Quote + avatar testimonials
│   ├── UseCases.tsx            # NEW: Metrics + use case cards
│   ├── BlogHero.tsx            # NEW: Blog landing hero with carousel
│   ├── ArticleCard.tsx         # NEW: Blog post card with gradient header
│   └── FeaturedArticles.tsx    # NEW: Featured articles section for homepage
└── data/
    └── kits.ts                 # NEW: Kit data with TypeScript interfaces
```

**Structure Decision**:

This is a **web application** (Next.js 14 App Router with static export). The structure follows Next.js App Router conventions:
- `app/` contains pages and layouts (file-based routing)
- `components/` contains reusable React components
- `content/` contains MDX blog posts (Nextra-managed)
- `data/` contains static mock data (TypeScript files)
- `lib/` contains utilities and helpers
- `styles/` contains global CSS and Tailwind config

The design preserves the existing Nextra infrastructure while adding new pages (/kits, /about, /donate) and replacing/extending components to match the secondary frontend's visual design.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

*No violations identified.* All constitutional principles and technology stack requirements are met. The redesign is purely visual/structural and does not introduce prohibited technologies (SSR for dynamic content, databases, backend APIs, analytics cookies).

## Phase 0: Outline & Research

### Unknowns Identified from Technical Context

*All technical context items are now resolved. No NEEDS CLARIFICATION markers remain.*

### Research Tasks

1. **Dark Theme Design Tokens Extraction**
   - **Goal**: Extract exact color values, font configurations, spacing tokens, and animation timings from secondary frontend's `tailwind.config.ts` and `index.css`
   - **Scope**: CSS variables, Tailwind theme extensions, keyframes, animation utilities
   - **Output**: Complete dark theme specification ready for `styles/globals.css` and `tailwind.config.cjs`

2. **Component Port Strategy**
   - **Goal**: Determine how to port shadcn-ui + Radix UI components from Vite/React (secondary) to Nextra/Next.js (primary)
   - **Scope**: Identify component dependencies, assess Nextra compatibility, plan adaptation strategies for router conflicts (react-router-dom vs Next.js router)
   - **Output**: Component port checklist with adaptation notes for each UI primitive

3. **Nextra Custom Page Integration**
   - **Goal**: Research how to create custom pages (/kits, /about, /donate) in Nextra without breaking blog/docs functionality
   - **Scope**: Nextra App Router integration, custom layouts, sidebar suppression for non-blog pages
   - **Output**: Pattern for creating custom pages that coexist with Nextra-managed content routes

4. **Mock Data Schema Design**
   - **Goal**: Define TypeScript interfaces for Kit and Article data based on secondary frontend's mockKits.ts and mockArticles.ts
   - **Scope**: Fields, relationships, category enums, validation rules
   - **Output**: Data model specification for data/kits.ts

5. **Blog Content Integration**
   - **Goal**: Determine how to use existing Nextra blog content (content/blog/*.mdx) with new ArticleCard and BlogHero designs
   - **Scope**: blog-loader.ts integration, frontmatter compatibility, featured article selection logic
   - **Output**: Integration pattern for Nextra content → new visual components

### Research Execution

*Research findings will be documented in `research.md` (see Phase 0 Output below).*

### Phase 0 Output: research.md

*File: `/Users/frank/X/agentii-kit/specs/001-redesign-primary-frontend/research.md`*

**Structure**:
1. Dark Theme Design Tokens
   - Decision: Exact HSL color values, font imports, keyframe definitions
   - Rationale: Why these colors/fonts chosen for GitHub-inspired dark theme
   - Alternatives considered: Other dark palettes, font combinations

2. Component Port Strategy
   - Decision: Adapt shadcn-ui components to Nextra context (Link vs next/link, layout patterns)
   - Rationale: Maintain Nextra's routing, avoid react-router-dom conflicts
   - Alternatives considered: Full migration to Vite (rejected per constitution)

3. Nextra Custom Pages
   - Decision: Use Next.js App Router `app/kits/page.tsx` pattern, disable Nextra sidebar via layout prop
   - Rationale: Nextra 4.6 supports custom App Router pages alongside content routes
   - Alternatives considered: Separate Next.js apps (rejected, violates simplicity)

4. Mock Data Schema
   - Decision: TypeScript interfaces with enums for categories, validation via Zod (optional)
   - Rationale: Type safety, matches secondary frontend data structure
   - Alternatives considered: JSON files (rejected, no type checking)

5. Blog Content Integration
   - Decision: Use blog-loader.ts to fetch posts, map to ArticleCard props, select featured by `featured: true` frontmatter
   - Rationale: Preserves existing content, no migration needed
   - Alternatives considered: Rewrite all blog posts (rejected, unnecessary)

---

## Phase 1: Design & Contracts

### Prerequisites

✅ `research.md` complete (generated in Phase 0)

### Design Artifacts

#### 1. Data Model (`data-model.md`)

**Entities**:

- **Kit**: Spec-kit definition
  - Fields: id, title, description, category, categoryColor, repo, stars, lastUpdated
  - Validation: Title 10-100 chars, category must be valid enum, stars ≥0
  - Relationships: None (flat structure)

- **Article**: Blog post (derived from Nextra content)
  - Fields: slug, title, excerpt, content, tags, author, date, coverImage, featured
  - Validation: Title 10-60 chars, description 150-160 chars (per constitution)
  - Relationships: None (file-based)

- **Category**: Kit category
  - Fields: id (enum), label, color
  - Validation: Must be one of 7 defined categories
  - Relationships: One-to-many with Kit

**State Transitions**: N/A (static data, no lifecycle)

**File**: `/Users/frank/X/agentii-kit/specs/001-redesign-primary-frontend/data-model.md`

#### 2. API Contracts (`/contracts/`)

**Decision**: No API contracts needed. This is a static site with client-side data.

**File**: `/Users/frank/X/agentii-kit/specs/001-redesign-primary-frontend/contracts/README.md`

**Content**:
```markdown
# API Contracts

This feature does not require API contracts because:

1. **Static Site Architecture**: The website is built as a Nextra static site (SSG) with no backend API.
2. **Data Sources**: All data comes from:
   - MDX files in `content/blog/` (managed by Nextra)
   - Static TypeScript files in `data/kits.ts` (imported directly in components)
3. **No External APIs**: No third-party API integrations required for this redesign.

If future enhancements require backend APIs (e.g., dynamic kit data from GitHub API), contracts will be added here following OpenAPI 3.0 specification.
```

#### 3. Component Contracts (Internal Interfaces)

**File**: `/Users/frank/X/agentii-kit/specs/001-redesign-primary-frontend/contracts/component-interfaces.md`

**Content** (excerpt):
```typescript
// Kit Component Interfaces
export interface Kit {
  id: string;
  title: string;
  description: string;
  category: 'DEV-KIT' | 'PM-KIT' | 'MARKETING-KIT' | 'LEGAL-KIT' | 'FINANCE-KIT' | 'DESIGN-KIT' | 'OPS-KIT';
  categoryColor: 'dev' | 'pm' | 'marketing' | 'legal' | 'finance' | 'design' | 'ops';
  repo: string;  // GitHub repo name (e.g., "agentii-ai/dev-kit")
  stars: number;
  lastUpdated: string;  // ISO date string
}

export interface KitCardProps {
  kit: Kit;
  onViewSpec?: () => void;
  onViewGithub?: () => void;
}

// Article Component Interfaces
export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  content: string;  // Markdown content
  tags: string[];
  author: string;
  date: string;  // ISO date string
  stars?: number;  // Social proof metric
  gradient?: string;  // CSS gradient for header (e.g., "from-blue-500 to-purple-500")
  coverImage?: string;
  featured?: boolean;
}

export interface ArticleCardProps {
  article: Omit<Article, 'content'>;  // Content not needed for card
}

// Filter/Grid Interfaces
export interface FilterState {
  searchQuery: string;
  selectedCategories: string[];
  sortBy: 'popular' | 'recent' | 'alphabetical';
}

export interface PaginationState {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
}
```

#### 4. Quickstart Guide (`quickstart.md`)

**File**: `/Users/frank/X/agentii-kit/specs/001-redesign-primary-frontend/quickstart.md`

**Purpose**: Guide developers through setting up the redesigned frontend locally and understanding the new component structure.

**Outline**:
1. Prerequisites (Node.js 18+, npm)
2. Clone and install dependencies
3. Understanding the new structure (app/, components/, data/)
4. Running the dev server
5. Adding new kits to data/kits.ts
6. Customizing the dark theme (styles/globals.css, tailwind.config.cjs)
7. Creating new pages
8. Testing and validation (npm run validate-frontmatter, npm run check-links, npm run build)
9. Deploying to Vercel

### Agent Context Update

**Command**: `.specify/scripts/bash/update-agent-context.sh claude`

**New Technologies to Add** (from this implementation plan):
- Tailwind CSS animations (tailwindcss-animate plugin)
- Class variance authority (clsx alternative for component variants)
- shadcn-ui component patterns (Radix UI primitives adapted for Nextra)
- Dark-first design system (HSL CSS variables, Inter + JetBrains Mono fonts)

**Preserved Technologies** (already in context):
- Next.js 14 App Router
- Nextra 4.6
- TypeScript 5.3
- Tailwind CSS 3.3
- MDX 3.0
- React 18

### Constitution Re-check After Phase 1

✅ **No backend APIs added**: contracts/README.md confirms static architecture
✅ **Data model uses static files**: data-model.md specifies TypeScript files, no DB schemas
✅ **Quickstart preserves Git workflow**: Git PR + review + merge to main → auto-deploy
✅ **No prohibited dependencies**: Only adding tailwindcss-animate and clsx (allowed utilities)

**Result**: Constitution compliance maintained. All gates passed.

---

## Implementation Phases (High-Level Overview)

*Detailed task breakdown will be generated by `/speckit.tasks` command.*

### Phase 2: Foundation & Design System Migration (Tasks 1-10)

**Goal**: Establish the dark-first design system in the Nextra project.

**Key Tasks**:
1. Update `tailwind.config.cjs` with dark theme tokens from research.md
2. Update `styles/globals.css` with CSS variables
3. Install new dependencies (tailwindcss-animate, class-variance-authority)
4. Update `app/layout.tsx` for dark theme default and font imports
5. Create `components/ui/` directory structure
6. Port button, input, checkbox, badge, card UI primitives
7. Update `theme.config.jsx` with new branding
8. Create `data/kits.ts` with Kit interface and mock data
9. Test build process (npm run build)
10. Validate Lighthouse score on dev server

### Phase 3: Core Layout Components (Tasks 11-15)

**Goal**: Replace existing Navigation and Footer with new dark-themed designs.

**Key Tasks**:
11. Create `components/Navbar.tsx` (fixed top bar, mobile menu)
12. Create `components/Footer.tsx` (simple footer with logomark)
13. Update `app/layout.tsx` to use new Navbar
14. Remove or hide `components/ThemeToggle.tsx` (dark theme only)
15. Test navigation across pages

### Phase 4: Landing Page Redesign (Tasks 16-30)

**Goal**: Recreate `app/page.tsx` to match secondary frontend's Index.tsx.

**Key Tasks**:
16. Create `components/HeroSection.tsx` (hero with gradient, CTAs)
17. Create `components/FloatingTags.tsx` (animated tag marquee)
18. Create `components/KitCard.tsx` (category badge, hover actions)
19. Create `components/KitsGrid.tsx` (filterable grid with pagination)
20. Create `components/FilterSidebar.tsx` (search, category checkboxes)
21. Create `components/FeaturedKits.tsx` (top 3 kits by stars)
22. Create `components/LatestKits.tsx` (recent kits section)
23. Create `components/RecentlyUpdatedTable.tsx` (table-style kit list)
24. Create `components/Testimonials.tsx` (split layout testimonials)
25. Create `components/UseCases.tsx` (metrics + use case cards)
26. Create `components/FeaturedArticles.tsx` (blog teaser section)
27. Rewrite `app/page.tsx` to compose all sections
28. Test landing page visual consistency (side-by-side comparison)
29. Test filtering and pagination
30. Test mobile responsiveness

### Phase 5: Blog Integration (Tasks 31-40)

**Goal**: Redesign blog pages with new visual style using Nextra content.

**Key Tasks**:
31. Create `components/BlogHero.tsx` (hero with carousel)
32. Create `components/ArticleCard.tsx` (gradient header blog card)
33. Update `app/blog/page.tsx` (BlogHero + ArticleCard grid)
34. Update `app/blog/[slug]/page.tsx` (dark prose, share buttons)
35. Update `app/blog/layout.tsx` (new Navbar/Footer)
36. Update `components/MarkdownRenderer.tsx` (dark theme prose classes)
37. Test blog with existing MDX content
38. Test featured article carousel auto-rotation
39. Test share buttons (copy link, Twitter, LinkedIn, email)
40. Test blog navigation and back links

### Phase 6: Additional Pages (Tasks 41-50)

**Goal**: Create new pages for kits catalog, about, and donate.

**Key Tasks**:
41. Create `app/kits/page.tsx` (dedicated kits catalog)
42. Test kits page filtering and pagination
43. Create `app/about/page.tsx` (mission, portfolio, testimonials, contact)
44. Test about page layout and sections
45. Create `app/donate/page.tsx` (stats, donation tiers, payment methods)
46. Test donate page external links
47. Add new pages to Navbar navigation
48. Update Footer links to include new pages
49. Test navigation between all pages
50. Test mobile responsiveness on all new pages

### Phase 7: Content & Polish (Tasks 51-60)

**Goal**: Finalize content, visual polish, and comprehensive testing.

**Key Tasks**:
51. Add real kit data to `data/kits.ts` (15+ kits across all categories)
52. Add placeholder images to `public/images/` for kits, about, donate
53. Remove `app/docs/` directory and related files (per user input)
54. Update `next.config.js` if needed for static export
55. Run full validation suite (validate-frontmatter, check-links, type-check, lint)
56. Run full build (npm run build)
57. Test Vercel preview deployment
58. Run Lighthouse audit on all pages
59. Visual QA: side-by-side comparison with secondary frontend (90% consistency target)
60. Fix any Lighthouse or visual consistency issues

---

## Risk Mitigation

| Risk | Impact | Probability | Mitigation Strategy | Status |
|------|--------|-------------|---------------------|--------|
| Nextra page routing conflicts with custom pages (/kits, /about, /donate) | High - Could block key pages | Medium | Research Nextra 4.6 App Router integration early in Phase 0; test custom page pattern before building components | Phase 0 research task |
| Tailwind animations from secondary frontend don't work in Nextra | Medium - Degrades visual polish | Low | Test tailwindcss-animate plugin in isolated Nextra environment during Phase 2; fallback to CSS transitions | Phase 2 task 3 |
| Mock data structure changes break components | Medium - Requires refactoring | Low | Define TypeScript interfaces upfront in Phase 1 data-model.md; validate mock data against interfaces | Phase 1 output |
| Lighthouse performance drops below 90 | High - Violates constitution | Medium | Run Lighthouse tests incrementally after each phase; optimize images and code splitting if scores drop | Phase 7 task 58 |
| Vercel build fails due to Nextra config | High - Blocks deployment | Low | Test full build locally in Phase 7 before pushing; verify static export compatibility | Phase 7 task 56 |
| Visual design doesn't match secondary frontend (< 90%) | Medium - Reduces UX consistency | Medium | Implement pixel-perfect comparison tool; iterate on spacing/colors until 90% match target | Phase 7 task 59 |
| Mobile responsive breaks due to CSS conflicts | Medium - Affects mobile users | Medium | Test on multiple mobile viewports during development; use Tailwind responsive utilities consistently | Phases 4-6 mobile tasks |
| Markdown rendering breaks existing blog content | High - Could corrupt content | Low | Preserve existing Nextra markdown rendering; add custom prose classes without overriding defaults; test with existing posts | Phase 5 task 37 |

---

## Dependencies & Sequencing

### Critical Path

1. **Phase 0 (Research)** → Unblocks Phase 1
2. **Phase 1 (Design Artifacts)** → Unblocks Phase 2
3. **Phase 2 (Foundation)** → Unblocks Phases 3-6 (can run in parallel after Phase 2)
4. **Phase 7 (Polish)** → Final phase, depends on Phases 2-6 completion

### Parallel Work Opportunities

After Phase 2 completes:
- **Phase 3 (Core Layout)** can run concurrently with **Phase 4 (Landing Page)**
- **Phase 5 (Blog)** can run concurrently with **Phase 6 (Additional Pages)**

### External Dependencies

- **Secondary frontend codebase** (`spec-kit-hub-main/`): Required for Phase 0 research (design token extraction)
- **Existing Nextra blog content** (`content/blog/`): Required for Phase 5 testing
- **Vercel deployment configuration**: Required for Phase 7 deployment testing

---

## Success Criteria (from spec.md)

- ✅ **SC-001**: Visitors see all visual sections on homepage without layout breaks
- ✅ **SC-002**: Navigation across pages completes in <1 second
- ✅ **SC-003**: Kit filtering updates instantly (<200ms)
- ✅ **SC-004**: Kit card hover effects reveal in 150-250ms
- ✅ **SC-005**: Blog articles render markdown correctly with working share buttons
- ✅ **SC-006**: Mobile menu toggles smoothly
- ✅ **SC-007**: Website builds successfully (npm run build)
- ✅ **SC-008**: Lighthouse score ≥90, LCP <2.5s, FID <100ms, CLS <0.1
- ✅ **SC-009**: SEO validations pass (validate-frontmatter, check-links)
- ✅ **SC-010**: 90% visual consistency with secondary frontend
- ✅ **SC-011**: Primary task flows complete in <30 seconds
- ✅ **SC-012**: Blog carousel auto-rotates every 5 seconds

**Validation Gates**:
- After Phase 2: SC-007, SC-008
- After Phase 4: SC-001, SC-003, SC-004, SC-010
- After Phase 5: SC-005, SC-012
- After Phase 6: SC-002, SC-011
- After Phase 7: SC-006, SC-009, all criteria

---

## Timeline Estimate

| Phase | Duration | Dependencies | Parallelizable |
|-------|----------|--------------|----------------|
| Phase 0: Research | 0.5 days | None | No |
| Phase 1: Design | 0.5 days | Phase 0 | No |
| Phase 2: Foundation | 1 day | Phase 1 | No |
| Phase 3: Core Layout | 1 day | Phase 2 | Yes (with Phase 4) |
| Phase 4: Landing Page | 2 days | Phase 2 | Yes (with Phase 3) |
| Phase 5: Blog | 1 day | Phase 2 | Yes (with Phase 6) |
| Phase 6: Additional Pages | 1 day | Phase 2 | Yes (with Phase 5) |
| Phase 7: Polish & QA | 1 day | Phases 2-6 | No |
| **Total** | **~7-8 days** | | |

**Critical Path**: Phase 0 → Phase 1 → Phase 2 → Phase 4 (longest individual phase) → Phase 7

**Optimized Timeline with Parallelization**: ~6 days (if Phase 3/4 and Phase 5/6 run concurrently)

---

## Next Steps

1. **Review this plan** with stakeholders for approval
2. **Run `/speckit.tasks`** to generate detailed task breakdown (`tasks.md`)
3. **Begin Phase 0 research** (generate `research.md`)
4. **Generate Phase 1 artifacts** (data-model.md, contracts/, quickstart.md)
5. **Update agent context** (run `.specify/scripts/bash/update-agent-context.sh claude`)
6. **Start implementation** following task order in `tasks.md`

---

## References

- **Feature Specification**: [spec.md](./spec.md)
- **Constitution**: `/.specify/memory/constitution.md`
- **Integration Plan**: `/refs/integration_plan.md`
- **Secondary Frontend Stack**: `/refs/frontend_stacks.md`
- **Secondary Frontend Source**: `/spec-kit-hub-main/`
- **Primary Frontend README**: `/README.md`
