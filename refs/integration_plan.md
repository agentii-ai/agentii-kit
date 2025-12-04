# Integration Plan: Primary Frontend Redesign

## Executive Summary

This document outlines the strategy to **redesign the primary Nextra-based frontend** to adopt the visual design, UI components, and content structure from the **secondary frontend** (`spec-kit-hub-main`), while preserving the Nextra blog/docs infrastructure and Vercel deployment.

**Goal:** The website will remain a Nextra blog/docs project, but visually match the `spec-kit-hub-main` design system — dark-first, GitHub-like, with spec-kit gallery sections.

---

## 1. Current State Analysis

### 1.1 Primary Frontend (Nextra-based) — TO KEEP

| Aspect | Current Implementation |
|--------|----------------------|
| **Framework** | Next.js 14 + Nextra 4.6 |
| **Deployment** | Vercel (`kits.agentii.ai`) |
| **Content** | MDX files in `content/blog/` and `content/docs/` |
| **Routing** | Next.js App Router + Nextra content routing |
| **Blog System** | `app/blog/page.tsx`, `app/blog/[slug]/`, `content/blog/*.md` |
| **Docs System** | `app/docs/page.tsx`, `content/docs/**/*.mdx` |
| **Search** | Pagefind client-side search |
| **SEO** | Comprehensive meta tags, sitemap, RSS |
| **Styling** | TailwindCSS with "Wall Street Classic" theme |
| **Components** | `Navigation`, `Footer`, `PostCard`, `FeaturedPost`, `MarkdownRenderer` |

### 1.2 Secondary Frontend (spec-kit-hub-main) — DESIGN SOURCE

| Aspect | Implementation |
|--------|---------------|
| **Framework** | Vite + React 18 + TypeScript |
| **Design System** | Dark-first "GitHub Geek with a Twist" from `graphic_designs.md` |
| **UI Library** | shadcn-ui + Radix UI primitives |
| **Routing** | react-router-dom (SPA) |
| **Data** | Mock data (`mockKits.ts`, `mockArticles.ts`) |
| **Key Components** | `Navbar`, `HeroSection`, `FeaturedKits`, `LatestKits`, `KitsGrid`, `KitCard`, `FilterSidebar`, `RecentlyUpdatedTable`, `Testimonials`, `UseCases`, `BlogHero`, `FloatingTags` |
| **Theme Tokens** | CSS variables for `background`, `foreground`, `surface`, `card`, `primary`, `text-primary/secondary/muted`, etc. |

---

## 2. Integration Strategy

### 2.1 What to Keep (Primary Frontend)

- ✅ **Next.js 14 + Nextra** framework and configuration
- ✅ **Vercel deployment** pipeline and `vercel.json`
- ✅ **Content files** in `content/blog/` and `content/docs/` (MDX with frontmatter)
- ✅ **Nextra blog loader** (`lib/content/blog-loader.ts`) for reading MDX posts
- ✅ **App Router structure** (`app/blog/`, `app/docs/`, `app/page.tsx`)
- ✅ **SEO infrastructure** (metadata, sitemap, RSS, Open Graph)
- ✅ **Pagefind search** integration
- ✅ **TypeScript configuration**
- ✅ **Package dependencies** (nextra, nextra-theme-blog, nextra-theme-docs, etc.)

### 2.2 What to Replace (Design & UI)

- 🔄 **Color palette** → Dark-first theme from `graphic_designs.md`
- 🔄 **Typography** → `Inter` + `JetBrains Mono` fonts
- 🔄 **`tailwind.config.cjs`** → Adopt design tokens from secondary frontend
- 🔄 **`styles/globals.css`** → Dark theme CSS variables and base styles
- 🔄 **`app/page.tsx`** → Recreate as `Index.tsx` visual (HeroSection + sections)
- 🔄 **`components/Navigation.tsx`** → Match `Navbar.tsx` design
- 🔄 **`components/Footer.tsx`** → Match secondary footer pattern
- 🔄 **`app/blog/page.tsx`** → BlogHero + ArticleCard grid using Nextra content
- 🔄 **`components/PostCard.tsx`** → Redesign as ArticleCard with gradient headers
- 🔄 **`components/FeaturedPost.tsx`** → Carousel-style featured article

### 2.3 New Components to Create

- ➕ **`components/ui/`** — Port shadcn-ui primitives (`Button`, `Input`, `Checkbox`, `Badge`, etc.)
- ➕ **`components/HeroSection.tsx`** — Landing hero with floating tags and CTAs
- ➕ **`components/FloatingTags.tsx`** — Animated tag marquee
- ➕ **`components/KitCard.tsx`** — Spec-kit card with category badge, meta row, hover actions
- ➕ **`components/KitsGrid.tsx`** — Filterable, paginated kit listing
- ➕ **`components/FilterSidebar.tsx`** — Category filters and search
- ➕ **`components/FeaturedKits.tsx`** — Top kits by stars
- ➕ **`components/LatestKits.tsx`** — Recent kits section
- ➕ **`components/RecentlyUpdatedTable.tsx`** — Table-style kit listing
- ➕ **`components/Testimonials.tsx`** — Quote + avatar testimonial section
- ➕ **`components/UseCases.tsx`** — Metrics + use case cards
- ➕ **`components/BlogHero.tsx`** — Blog landing hero with carousel
- ➕ **`components/ArticleCard.tsx`** — Blog post card with gradient header

### 2.4 Content Mapping

| Secondary Frontend | Primary Frontend (Nextra) |
|-------------------|--------------------------|
| `mockKits.ts` | New `data/kits.ts` or fetch from API |
| `mockArticles.ts` | **Nextra blog content** (`content/blog/*.md`) via `blog-loader.ts` |
| `/blog/:slug` route | `app/blog/[slug]/page.tsx` (already exists) |
| `/kits` route | New `app/kits/page.tsx` |
| `/about` route | New `app/about/page.tsx` |
| `/donate` route | New `app/donate/page.tsx` |

---

## 3. Implementation Phases

### Phase 1: Design System Migration (Foundation)

**Goal:** Establish the dark-first design system in the Nextra project.

#### 1.1 Update `tailwind.config.cjs`

Replace the current "Wall Street Classic" theme with the secondary frontend's design tokens:

```javascript
// Key changes:
module.exports = {
  darkMode: ['class'],
  content: [...],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        // CSS variable-driven tokens
        border: 'hsl(var(--border))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        surface: 'hsl(var(--surface))',
        'surface-hover': 'hsl(var(--surface-hover))',
        'text-primary': 'hsl(var(--text-primary))',
        'text-secondary': 'hsl(var(--text-secondary))',
        'text-muted': 'hsl(var(--text-muted))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        success: 'hsl(var(--success))',
        warning: 'hsl(var(--warning))',
        error: 'hsl(var(--error))',
      },
      keyframes: {
        'fade-in': { '0%': { opacity: '0', transform: 'translateY(10px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        'fade-in-up': { '0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        'scale-in': { '0%': { opacity: '0', transform: 'scale(0.95)' }, '100%': { opacity: '1', transform: 'scale(1)' } },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'scale-in': 'scale-in 0.3s ease-out forwards',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('tailwindcss-animate')],
}
```

#### 1.2 Update `styles/globals.css`

Define CSS variables for the dark theme (from `graphic_designs.md`):

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* Dark theme by default */
    --background: 220 13% 5%;      /* #0D1117 */
    --foreground: 220 9% 91%;      /* #E5E7EB */
    --surface: 220 13% 10%;        /* #161B22 */
    --surface-hover: 220 13% 15%;  /* #1F2933 */
    --card: 220 13% 10%;
    --card-foreground: 220 9% 91%;
    --border: 220 13% 15%;
    --primary: 158 64% 52%;        /* #36D399 (teal accent) */
    --primary-foreground: 0 0% 100%;
    --text-primary: 220 9% 91%;
    --text-secondary: 220 9% 64%;  /* #9CA3AF */
    --text-muted: 220 9% 46%;      /* #6B7280 */
    --success: 142 71% 45%;
    --warning: 38 92% 50%;
    --error: 0 84% 60%;
    --radius: 0.5rem;
  }

  body {
    @apply bg-background text-foreground;
    font-family: 'Inter', system-ui, sans-serif;
  }
}
```

#### 1.3 Install Additional Dependencies

```bash
npm install tailwindcss-animate @fontsource/inter @fontsource/jetbrains-mono clsx class-variance-authority
```

#### 1.4 Update `app/layout.tsx`

- Import fonts via `@fontsource` or Google Fonts.
- Set dark theme as default.
- Update metadata to reflect new branding.

---

### Phase 2: Core UI Components

**Goal:** Port essential shadcn-ui components and create shared layouts.

#### 2.1 Create `components/ui/` Directory

Port the following from secondary frontend (adapt from shadcn-ui patterns):

| Component | Priority | Notes |
|-----------|----------|-------|
| `button.tsx` | High | Primary, secondary, ghost, outline variants |
| `input.tsx` | High | Search and form inputs |
| `checkbox.tsx` | Medium | Filter checkboxes |
| `badge.tsx` | High | Category pills, tag pills |
| `card.tsx` | High | Kit cards, article cards |
| `avatar.tsx` | Medium | Testimonials |
| `tooltip.tsx` | Low | Hover hints |
| `separator.tsx` | Low | Dividers |

#### 2.2 Create Shared Layout Components

**`components/Navbar.tsx`** (replace existing Navigation):
- Fixed top bar with `bg-background/80 backdrop-blur-md`
- Left: `AK` logomark + `agentii-kit` wordmark
- Center: nav links (Kits, Blog, Docs, GitHub)
- Right: Search button with `⌘K`, Donate button
- Mobile: hamburger menu with slide-down nav

**`components/Footer.tsx`** (replace existing):
- Simple footer with logomark, tagline, nav links
- `border-t border-border bg-card` styling

---

### Phase 3: Landing Page Redesign

**Goal:** Recreate `app/page.tsx` to visually match `spec-kit-hub-main/src/pages/Index.tsx`.

#### 3.1 New Sections for Landing Page

```tsx
// app/page.tsx structure:
<main className="min-h-screen bg-background">
  <Navbar />
  <HeroSection />
  <FeaturedArticles />      {/* Uses Nextra blog content */}
  <LatestKits />
  <section className="container mx-auto px-4 py-12">
    <FilterSidebar ... />
    <KitsGrid ... />
  </section>
  <RecentlyUpdatedTable />
  <Testimonials />
  <UseCases />
  <Footer />
</main>
```

#### 3.2 Component Implementation

**`components/HeroSection.tsx`:**
- Background gradient + grid pattern
- `FloatingTags` rows (top and bottom)
- Headline: `agentii-kit — Power Your AI Agents`
- Subcopy mentioning spec-kits, Claude Code, Cursor
- Primary CTA: `Browse Kits` → scrolls to `#kits`
- Secondary CTA: `View on GitHub`

**`components/FloatingTags.tsx`:**
- Horizontal scrolling tag marquee
- Tags: `DEV-KIT`, `PM-KIT`, `CURSOR`, `CLAUDE`, etc.
- CSS animation for infinite scroll effect

**`components/KitCard.tsx`:**
- Category badge (styled by `categoryColor`)
- Title, description (2-line clamp)
- Meta row: repo name, stars, last updated
- Hover: reveal action buttons (View Spec, GitHub)

**`components/KitsGrid.tsx`:**
- Receives kits array, search query, selected categories
- Filters and paginates client-side
- Uses `KitCard` for rendering

**`components/FilterSidebar.tsx`:**
- Search input with icon
- Category checkboxes (DEV-KIT, PM-KIT, etc.)
- Sort options (Most Popular, Recently Updated, etc.)
- Clear filters button

---

### Phase 4: Blog Integration

**Goal:** Redesign blog pages to use Nextra content with new visual style.

#### 4.1 Blog Landing Page (`app/blog/page.tsx`)

**Structure:**
```tsx
<main className="min-h-screen bg-background">
  <Navbar />
  <BlogHero featuredArticles={featuredPosts} />
  <section id="articles" className="py-16 border-t border-border">
    <div className="container mx-auto px-4">
      <h2>All Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map(post => <ArticleCard key={post.slug} {...post} />)}
      </div>
    </div>
  </section>
  <Footer />
</main>
```

**`components/BlogHero.tsx`:**
- Left: headline "Insights for every agent", description, CTAs
- Right: carousel-style featured article card (auto-rotates)
- Below: "Browse by topic" category grid

**`components/ArticleCard.tsx`:**
- Gradient header band (can derive from tags or use random gradients)
- Tag pills
- Title, description (3-line clamp)
- Meta row: date, author
- Entire card is a Link to `/blog/[slug]`

#### 4.2 Article Detail Page (`app/blog/[slug]/page.tsx`)

- Keep Nextra's MDX rendering
- Update styling:
  - Back link to `/blog`
  - Header: title, accent line, date, author
  - Tag row + share buttons
  - Content: `prose-custom` class for dark theme typography
- Add Footer

#### 4.3 Content Compatibility

The existing MDX blog posts in `content/blog/` will work as-is because:
- Frontmatter schema remains compatible (`title`, `description`, `date`, `author`, `tags`, `cover`)
- `blog-loader.ts` continues to read and parse posts
- Only the visual presentation changes

---

### Phase 5: Additional Pages

#### 5.1 Kits Page (`app/kits/page.tsx`)

Dedicated kits catalog:
```tsx
<main className="min-h-screen bg-background">
  <Navbar />
  <div className="container mx-auto px-4 py-8">
    <FeaturedKits />
    <Divider />
    <div className="flex gap-8">
      <FilterSidebar ... />
      <KitsGrid ... />
    </div>
  </div>
  <Footer />
</main>
```

#### 5.2 About Page (`app/about/page.tsx`)

Port design from secondary frontend:
- About section with mission text
- Portfolio section with project cards
- Testimonials section
- Contact section

#### 5.3 Donate Page (`app/donate/page.tsx`)

Port design from secondary frontend:
- Left: project description, stats, "What Your Donation Supports"
- Right: amount selection, payment methods

---

### Phase 6: Data Layer

#### 6.1 Kits Data

Create `data/kits.ts` with kit definitions:
```typescript
export interface Kit {
  id: string;
  title: string;
  description: string;
  category: string;
  categoryColor: 'dev' | 'pm' | 'marketing' | 'legal' | 'finance' | 'design' | 'ops';
  repo: string;
  stars: number;
  lastUpdated: string;
}

export const kits: Kit[] = [
  // ... kit data
];
```

#### 6.2 Articles Data

Use existing Nextra blog loader:
```typescript
import { getRecentPosts, getFeaturedPosts } from '@/lib/content/blog-loader';

// In page components:
const posts = await getRecentPosts(10);
const featured = await getFeaturedPosts(3);
```

---

### Phase 7: Documentation Pages

#### 7.1 Keep Nextra Docs Theme

The `/docs` routes will continue using `nextra-theme-docs` for:
- Sidebar navigation
- Table of contents
- Search integration
- MDX content rendering

#### 7.2 Style Adjustments

Update `app/docs/layout.tsx` to:
- Use new Navbar component
- Apply dark theme styling
- Use consistent Footer

---

## 4. File Changes Summary

### Files to Modify

| File | Changes |
|------|---------|
| `tailwind.config.cjs` | Replace theme with dark-first tokens |
| `styles/globals.css` | New CSS variables, dark base styles |
| `app/layout.tsx` | Font imports, dark theme default |
| `app/page.tsx` | Complete redesign with new sections |
| `app/blog/page.tsx` | BlogHero + ArticleCard grid |
| `app/blog/layout.tsx` | Dark theme, new Navbar/Footer |
| `app/blog/[slug]/page.tsx` | Dark prose styling, share buttons |
| `app/docs/layout.tsx` | Dark theme adaptation |
| `components/Navigation.tsx` | Redesign as `Navbar.tsx` |
| `components/Footer.tsx` | Simpler dark-themed footer |
| `components/PostCard.tsx` | Redesign as `ArticleCard.tsx` |
| `components/FeaturedPost.tsx` | Carousel-style with dark theme |
| `theme.config.jsx` | Update colors, branding |
| `package.json` | Add new dependencies |

### New Files to Create

| File | Purpose |
|------|---------|
| `components/ui/button.tsx` | Button component variants |
| `components/ui/input.tsx` | Input component |
| `components/ui/checkbox.tsx` | Checkbox component |
| `components/ui/badge.tsx` | Badge/pill component |
| `components/ui/card.tsx` | Card component |
| `components/HeroSection.tsx` | Landing hero section |
| `components/FloatingTags.tsx` | Animated tag marquee |
| `components/KitCard.tsx` | Spec-kit card |
| `components/KitsGrid.tsx` | Filterable kit grid |
| `components/FilterSidebar.tsx` | Category filters |
| `components/FeaturedKits.tsx` | Featured kits section |
| `components/LatestKits.tsx` | Latest kits section |
| `components/RecentlyUpdatedTable.tsx` | Table-style kit listing |
| `components/Testimonials.tsx` | Testimonials section |
| `components/UseCases.tsx` | Use cases + metrics |
| `components/BlogHero.tsx` | Blog landing hero |
| `components/ArticleCard.tsx` | Blog post card |
| `data/kits.ts` | Kit data definitions |
| `app/kits/page.tsx` | Kits catalog page |
| `app/about/page.tsx` | About page |
| `app/donate/page.tsx` | Donate page |

---

## 5. Migration Checklist

### Pre-Migration
- [ ] Backup current codebase
- [ ] Create feature branch `redesign/spec-kit-theme`
- [ ] Document current functionality to preserve

### Phase 1: Design System
- [ ] Update `tailwind.config.cjs` with new tokens
- [ ] Update `styles/globals.css` with CSS variables
- [ ] Install new dependencies
- [ ] Update `app/layout.tsx` fonts and theme
- [ ] Verify build passes

### Phase 2: UI Components
- [ ] Create `components/ui/` directory
- [ ] Port button, input, checkbox, badge, card components
- [ ] Create new `Navbar.tsx`
- [ ] Create new `Footer.tsx`
- [ ] Test components in isolation

### Phase 3: Landing Page
- [ ] Create `HeroSection.tsx`
- [ ] Create `FloatingTags.tsx`
- [ ] Create `KitCard.tsx`
- [ ] Create `KitsGrid.tsx`
- [ ] Create `FilterSidebar.tsx`
- [ ] Create `FeaturedKits.tsx`, `LatestKits.tsx`
- [ ] Create `RecentlyUpdatedTable.tsx`
- [ ] Create `Testimonials.tsx`, `UseCases.tsx`
- [ ] Rewrite `app/page.tsx`
- [ ] Test landing page

### Phase 4: Blog
- [ ] Create `BlogHero.tsx`
- [ ] Create `ArticleCard.tsx`
- [ ] Rewrite `app/blog/page.tsx`
- [ ] Update `app/blog/[slug]/page.tsx` styling
- [ ] Test blog with existing MDX content

### Phase 5: Additional Pages
- [ ] Create `app/kits/page.tsx`
- [ ] Create `app/about/page.tsx`
- [ ] Create `app/donate/page.tsx`
- [ ] Add routes to navigation

### Phase 6: Data Layer
- [ ] Create `data/kits.ts`
- [ ] Verify blog loader integration
- [ ] Test filtering and pagination

### Phase 7: Documentation
- [ ] Update `app/docs/layout.tsx`
- [ ] Verify docs navigation works
- [ ] Test search functionality

### Post-Migration
- [ ] Full visual QA against secondary frontend
- [ ] Test all links and navigation
- [ ] Verify SEO meta tags
- [ ] Test mobile responsiveness
- [ ] Deploy to Vercel preview
- [ ] Get stakeholder approval
- [ ] Merge to main

---

## 6. Risk Mitigation

| Risk | Mitigation |
|------|------------|
| **Nextra theme conflicts** | Keep nextra-theme-docs for `/docs` only; custom layouts for other routes |
| **MDX styling breaks** | Use scoped prose classes; test with existing content |
| **Build size increase** | Tree-shake unused shadcn components; audit imports |
| **Search functionality** | Verify Pagefind indexing after style changes |
| **RSS feed breaks** | Keep existing RSS generation script; test output |
| **SEO regression** | Maintain all meta tags; verify structured data |

---

## 7. Success Criteria

- ✅ Landing page visually matches `spec-kit-hub-main/src/pages/Index.tsx`
- ✅ Blog uses Nextra content with new ArticleCard design
- ✅ Documentation pages retain full functionality
- ✅ Dark theme applied consistently across all pages
- ✅ Search, RSS, and sitemap continue to work
- ✅ Mobile responsiveness maintained
- ✅ Vercel deployment succeeds
- ✅ Lighthouse score ≥90 maintained

---

## 8. Timeline Estimate

| Phase | Duration | Dependencies |
|-------|----------|--------------|
| Phase 1: Design System | 1 day | None |
| Phase 2: UI Components | 2 days | Phase 1 |
| Phase 3: Landing Page | 2 days | Phase 2 |
| Phase 4: Blog Integration | 1 day | Phase 2 |
| Phase 5: Additional Pages | 1 day | Phase 3 |
| Phase 6: Data Layer | 0.5 days | Phase 3 |
| Phase 7: Documentation | 0.5 days | Phase 1 |
| QA & Polish | 1 day | All phases |
| **Total** | **~9 days** | |

---

## 9. References

- **Primary Frontend README:** `/README.md`
- **Secondary Frontend Stack:** `/refs/frontend_stacks.md`
- **Visual Design Spec:** `/refs/graphic_designs.md`
- **Secondary Frontend Source:** `/spec-kit-hub-main/`
