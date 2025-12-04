# Secondary Frontend – Tech Stack & Architecture

## 1. Overview

The `spec-kit-hub-main` folder is a **Vite + React + TypeScript** single-page application that implements the public-facing website for **agentii-kit**: a GitHub-like gallery of “spec-kits” for different roles (dev, PM, legal, marketing, etc.).

The frontend is structured around:

- **React Router** for client-side navigation between main pages.
- **shadcn-ui + Radix** primitives wrapped in TailwindCSS for consistent, token-based design.
- **TailwindCSS** with a custom theme that encodes your dark-first, GitHub-inspired visual system from `graphic_designs.md`.
- **Mock data** for kits and articles, which drives cards, tables, and blog content.

This document explains the **tech stack**, **routing**, and **page/section/component architecture** so you can reliably extend or re-skin the site.

---

## 2. Tech Stack

### 2.1 Core Framework & Tooling

- **Build tool:** Vite (`vite.config.ts`)
  - React SWC plugin: `@vitejs/plugin-react-swc` for fast HMR and compilation.
  - Path alias: `@` → `./src`, used for imports like `"@/components/Navbar"`.
  - Dev server: IPv6 host, port 8080.

- **Framework:** React 18 + TypeScript
  - Strongly typed components and props (e.g., `Kit` in `KitCard.tsx`, `Article` in `mockArticles.ts`).
  - SPA behavior; assumed single HTML entry (`index.html`) with React mounting `src/main.tsx`.

- **Router:** `react-router-dom`
  - Defined in `src/App.tsx`.
  - Routes:
    - `/` → `Index` (Home / landing).
    - `/blog` → `Blog` (article listing).
    - `/blog/:slug` → `Article` (article detail, slug based).
    - `/about` → `About` (project & pseudo-founder profile page).
    - `/kits` → `Kits` (kits index, filterable/paginated).
    - `/donate` → `Donate` (donation options and stats).
    - `*` → `NotFound` (404 fallback).

- **Data fetching & async state:** `@tanstack/react-query`
  - Configured in `App.tsx` via `QueryClientProvider` but currently unused; ready for future API integration.

- **Linting:** `eslint.config.js`
  - Uses `@eslint/js`, `typescript-eslint`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`.
  - Targets `**/*.{ts,tsx}`.

### 2.2 UI Library & Design Tokens

- **shadcn-ui / Radix UI** components under `src/components/ui/`
  - Examples: `button`, `input`, `checkbox`, `accordion`, `dialog`, `navigation-menu`, `tooltip`, `toaster`, etc.
  - Provide accessible primitives used across pages (`Button`, `Input`, `Checkbox`, etc.).

- **Icons:** `lucide-react`
  - Used for navigation icons, statistics, category marks, social links, and CTAs.

- **Fonts:**
  - `Inter` and `JetBrains Mono` via `@fontsource` packages.
  - Mirrored in Tailwind `fontFamily` config (`sans`, `mono`), aligning to `graphic_designs.md` guidance.

- **Styling:** TailwindCSS (`tailwind.config.ts` + `src/index.css`)
  - Dark-mode first (`darkMode: ["class"]`).
  - `content` includes `./src/**/*.{ts,tsx}` and supporting directories.
  - Custom theme tokens mapped to CSS variables:
    - `background`, `foreground`, `surface`, `surface-hover`.
    - `text-primary`, `text-secondary`, `text-muted`.
    - `primary`, `secondary`, `destructive`, `accent`, `muted`, `card`, `sidebar`, etc.
    - Status colors: `success`, `warning`, `error`.
  - Extended **border radii** based on `--radius` to stay consistent across components.
  - Custom **keyframes & animations**:
    - `accordion-down`, `accordion-up` → Radix accordions.
    - `fade-in`, `fade-in-up`, `scale-in`, `pulse` → used for hero, cards, and metric sections.
  - Plugins: `tailwindcss-animate` for composable animation utilities.

### 2.3 Notifications & Tooling

- **Toast systems:**
  - `@/components/ui/toaster` and `sonner` (`@/components/ui/sonner`) combined in `App.tsx`.
- **Theming:** `next-themes` dependency is available but not wired in here; current theme is CSS-variable driven.

---

## 3. High-Level Layout & Routing

### 3.1 Application Shell (`src/App.tsx`)

- Wraps the entire app with:
  - `QueryClientProvider` (React Query).
  - `TooltipProvider` (Radix tooltip context from shadcn).
  - `Toaster` and `Sonner` for notifications.
  - `BrowserRouter` with a `Routes` tree.

**Key pattern:** Application-level providers and cross-cutting concerns live here, while each page owns its content and layout variations (e.g., hero vs. no-hero, background sections, etc.).

### 3.2 Shared Layout Elements

- **Navbar (`Navbar.tsx`)**
  - Fixed top bar with blurred background, dark-themed, GitHub-like.
  - Left: mini logomark (`AK` in a rounded square) + `agentii-kit` wordmark.
  - Center/right: nav links (`Kits`, `Blog`, `About`, external `GitHub`).
    - Internal routes rendered as `Link`.
    - External route as `<a>` with `target="_blank"`.
  - Right actions:
    - Search button with `⌘K` hint (future command palette hook).
    - `Donate` button (shadcn `Button` variant).
  - Responsive behavior:
    - Mobile menu toggled with `Menu`/`X` icons.
    - Mobile nav renders same links plus a block-level `Donate` button.

- **Footer pattern**
  - Variants in `Index`, `Kits`, `Blog`, `Article`, `About` pages.
  - Common pieces:
    - Small `AK` logomark.
    - Tagline: `agentii-kit — Open source spec-kits for AI agents`.
    - Simple nav for `About`, `Contribute`, `GitHub`, `License` or page-specific links.
  - Styling: border-top with `border-border`, `bg-card` background, flex layout.

---

## 4. Pages & Major Sections

### 4.1 Home / Index Page (`pages/Index.tsx`)

The **home page** acts as a marketing + discovery surface for spec-kits, blending hero, content marketing, and product listing.

**State:**

- `searchQuery`, `selectedCategories`, `currentPage` — drive the kit grid below via `FilterSidebar` and `KitsGrid`.

**Sections:**

- **Navbar**
- **HeroSection**
  - Large central headline: `agentii-kit — Power Your AI Agents`.
  - Subcopy highlights `spec-kits` and popular tools (Claude Code, Cursor).
  - Primary CTA: `Browse Kits` (styled button, later can scroll to kits section).
  - Secondary CTA: `View on GitHub`.
  - Visuals:
    - Background gradient and grid pattern (CSS inline backgroundImage).
    - Floating tag rows (`FloatingTags` component) to hint at categories / technology keywords.

- **FeaturedArticles** (component not detailed here but conceptually a blog teaser section).

- **LatestKits**
  - Pulls from `mockKits` and shows the latest 3 in a card grid using `KitCard`.
  - CTA: `View All Kits` button.

- **Main Kits Section** (inside container)
  - **FilterSidebar** (left):
    - Search field with icon.
    - Category checkboxes (DEV-KIT, PM-KIT, etc.) mapped to `categoryColor` ids.
    - Sort options (currently local state only; sorting is not yet wired into `KitsGrid`).
    - `Clear all filters` action.
  - **KitsGrid** (right):
    - Accepts `kits`, `searchQuery`, `selectedCategories`, `currentPage`, `onPageChange`, `itemsPerPage`.
    - Performs search and category filtering.
    - Implements client-side pagination with page-number condensation (`1 … 4 5 6 … 12`).

- **RecentlyUpdatedTable**
  - Table showing subset of `mockKits` as rows, with columns for:
    - Kit name (monospace title).
    - Discipline mapping (e.g., `DEV-KIT` → `Development`).
    - Stars (with icon and `toLocaleString()` formatting).
    - Last updated.
    - `View` link to GitHub repo.

- **Testimonials**
  - Split layout: quote + social links on left, stylized avatar tile on right.

- **UseCases**
  - Metrics row (Spec Kits count, GitHub stars, contributors, satisfaction).
  - Use case cards (Developer Kits, Product Management, Legal & Compliance, etc.) using color-coded abbr blocks.

- **Footer**

### 4.2 Kits Page (`pages/Kits.tsx`)

Dedicated **catalog view** for kits with emphasis on filtering & pagination.

- Shares most logic with the home kits section:
  - `searchQuery`, `selectedCategories`, `currentPage` state.
  - `FilterSidebar` and `KitsGrid` composition.

- Additional section:
  - **FeaturedKits** at top (sorted `mockKits` by stars, top 3).
  - Divider (`border-t`) between featured and main grid.

- Footer variant similar to home.

### 4.3 Blog Listing Page (`pages/Blog.tsx`)

- **Navbar**.
- **BlogHero**
  - Left side: explanation of blog purpose (guides, case studies, troubleshooting for AI agents & spec-kits).
  - Primary CTA: scroll to `#articles`.
  - Secondary CTA: link back to kits/home.
  - Right side: carousel-like card driven by top 3 `mockArticles`.
    - Uses `activeIndex` state with an interval-based auto-rotation.
    - Card shows tag pill, title, description, and meta (stars, author), linking to `/blog/:slug`.
    - Dot navigation for manual selection.
  - `Browse by topic` grid of categories (Development, Product, Marketing, etc.), each a card with icon.

- **Articles Grid Section** (`#articles`)
  - Uses `mockArticles` from `src/data/mockArticles.ts`.
  - `ArticleCard` sub-component:
    - Gradient header (`article.gradient`) as color band.
    - Tag pills, title, excerpt, meta row.
    - Whole card is a `Link` to `/blog/:slug`.

- **Footer**
  - Includes quick internal links (`Home`, `Blog`) plus external `GitHub`.

### 4.4 Article Detail Page (`pages/Article.tsx`)

- Reads `slug` from route params; uses `getArticleBySlug` to look up data.
  - If not found → `Navigate` back to `/blog`.

- Layout:
  - **Back link** to `/blog` with arrow icon.
  - **Header**:
    - Title (H1), accent line, date, author (monospace label).
  - **Tag & Share Row**:
    - Tag pills from `article.tags`.
    - Share controls:
      - Copy link to clipboard using `navigator.clipboard.writeText(window.location.href)`.
      - Open share URLs for Twitter/X, LinkedIn, and email in new tabs.
  - **Content**:
    - `MarkdownRenderer` used to render `article.content` (markdown with code blocks, headings, etc.).
    - Styled via `prose-custom` class, likely defined in `index.css` with Tailwind Typography.
  - **Footer** similar to Blog.

### 4.5 About Page (`pages/About.tsx`)

This page acts as a narrative **about/portfolio** and doubles as a personal-brand landing page.

- **About section**:
  - Explanation of agentii-kit mission, inclusive language for devs, PMs, designers, writers.
  - Education chips (`MIT`, `Stanford`, `Berkeley`) and work history chips (`Google`, `Amazon`, `Microsoft`).

- **Portfolio section**:
  - High-level intro text.
  - Cards for example projects like `Agent Framework`, `Kit Manager` with tags and hover actions.

- **Testimonials section**:
  - Inline testimonials with `Avatar` and quotes.

- **Contact section**:
  - Prominent headline `Let's create something beautiful together`.
  - Contact methods: phone, email, `Legal page` anchor.

- **Footer**:
  - `Powered by agentii-kit` text.
  - Social button row using `Button` components (GitHub, LinkedIn, Twitter, Contact Me).

### 4.6 Donate Page (`pages/Donate.tsx`)

The donation page aligns content, metrics, and payment methods.

- Left column:
  - `Support Open Source` pill with heart icon.
  - Headline `Help Keep agentii-kit Free & Open`.
  - Project description text aligned with mission.
  - Stats row (GitHub Stars, Contributors, Downloads) as card-like tiles.
  - "What Your Donation Supports" list: each item with icon and description (Active Development, Community Support, Infrastructure Costs).
  - Back-to-home link.

- Right column:
  - `Choose an Amount` card with pre-set tiers and custom amount input.
  - `Payment Methods` card listing GitHub Sponsors, Buy Me a Coffee, Open Collective, PayPal.
  - `Crypto Notice` card.
  - `Thank You` note with heart icon.

### 4.7 Not Found Page (`pages/NotFound.tsx`)

- Simple full-screen centered 404 message on muted background.
- Logs an error to the console including `location.pathname`.
- Provides link back to `/`.

---

## 5. Data & Content Model

### 5.1 Kits (`src/data/mockKits.ts` + `KitCard.tsx`)

- **Interface** `Kit` (exported from `KitCard.tsx`):
  - `id`, `title`, `description`, `category`, `categoryColor`, `repo`, `stars`, `lastUpdated`.

- `mockKits` array encodes your cross-discipline story:
  - Categories map to job families: `DEV-KIT`, `PM-KIT`, `MARKETING-KIT`, `LEGAL-KIT`, `FINANCE-KIT`, `DESIGN-KIT`, `OPS-KIT`.
  - Each includes realistic descriptions aligned with real-world spec-kits.

- **KitCard** architecture:
  - Top: category pill styled via `categoryStyles` keyed by `categoryColor` using Tailwind classes and theme tokens.
  - Middle: title, description with `line-clamp` to maintain card height.
  - Meta row: GitHub repo (monospace), stars, lastUpdated with icons.
  - Bottom: hover-only action row:
    - `View Spec` (primary button).
    - `GitHub` secondary button.
  - Visuals: `bg-card`, `border-border`, `card-hover` class (defined in `index.css`), subtle hover states and text color transitions.

### 5.2 Articles (`src/data/mockArticles.ts` + Blog/Article pages)

- **Interface** `Article` includes metadata and raw markdown content.

- Articles are used in:
  - `BlogHero` (featured subset with rotation).
  - `Blog` grid (`mockArticles.map`).
  - `Article` detail page via slug lookup.

- Markdown content includes headings, blockquotes, code blocks, and lists – all styled via `MarkdownRenderer` + prose classes.

---

## 6. Component Architecture & Patterns

### 6.1 Layout & Grids

- Consistent use of `container mx-auto px-4` and responsive grids:
  - 2-column layouts for hero sections, about/portfolio, donate page, etc.
  - 3–4 column grids for cards (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`).

- Side-by-side layout pattern:
  - `FilterSidebar` (sticky) + `KitsGrid` for browsing.
  - `Testimonials` and `UseCases` follow similar panel + supporting visual pattern.

### 6.2 Reusable UI Patterns

- **Tag pills & chips**
  - Used for categories, tags, metrics, and education/work history.
  - Implemented through Tailwind classes (rounded, border, text-xs) and sometimes custom classes like `tag-pill` in `index.css`.

- **Cards**
  - All core content surfaces (kits, articles, testimonials, portfolio projects, use cases) are card-based.
  - Common traits:
    - `bg-card` or `bg-surface` background.
    - `border border-border` with hover border color (`hover:border-primary/40` or variant).
    - `rounded-lg` or `rounded-xl`.
    - Enter animations using `animate-fade-in` with inline `animationDelay` for stagger effects.

- **Tables as responsive grids**
  - `RecentlyUpdatedTable` uses CSS grid for table layout, with responsive hiding/showing of columns.

### 6.3 Filtering & Pagination

- **FilterSidebar**
  - Encapsulates search bar, category filters, sort options, and clear action.
  - Exposes `searchQuery`, `selectedCategories` and callbacks; it is purely presentational + local sort UI state.

- **KitsGrid**
  - Contains the core filtering + pagination logic.
  - Takes pure data and control props, making it reusable in both `Index` and `Kits` pages.

### 6.4 Animation & Motion

- Animations use Tailwind’s `animate-*` classes wired to custom keyframes defined in `tailwind.config.ts`.

- Applied to:
  - Hero headings and paragraphs (`animate-fade-in-up` with slight delays).
  - Card entry transitions in `FeaturedKits`, `LatestKits`, `KitsGrid`, and `Blog`.
  - Mobile menus and dropdowns.

This respects your `graphic_designs.md` guidance: subtle hover & motion, 150–250ms durations, calm but responsive interface.

---

## 7. Design System Alignment with `graphic_designs.md`

Although the exact hex values are encoded as CSS variables, the implementation closely follows the **“GitHub Geek with a Twist”** spec:

- **Dark-first palette**
  - Overall background is dark (`bg-background`, `bg-card`, `bg-surface` tokens), echoing GitHub’s dark theme.
  - Panels, cards, and tables sit on slightly elevated surfaces (`surface`, `surface-hover`).

- **Typography**
  - `Inter` as primary sans.
  - `JetBrains Mono` for code-like labels and IDs (kit titles, repo names, meta tags).
  - Clear hierarchy via Tailwind font-size & weight utilities (H1–H3, body, meta text).

- **Kit card design**
  - Card structure in `KitCard` mirrors your spec:
    - Category badge (pill, uppercase monospaced label).
    - Title & short description.
    - Meta row (GitHub repo, stars, last updated) with icons.
    - Hover: subtle border/foreground changes and reveal of actions.

- **Navigation & Layout**
  - Fixed top nav, consistent container widths, and 12-column-ish grid through Tailwind utilities.
  - Accent indicators (small colored dots, accent underlines) before headings.

- **Microinteractions**
  - Hover states on cards, buttons, nav items, and links use higher contrast and accent colors.
  - Animated hero and floating tags add a light “spec-lab” feel without being visually noisy.

---

## 8. How to Extend This Frontend

When adding new features or reskinning:

- **New page**
  - Create `src/pages/MyPage.tsx`.
  - Add route in `App.tsx` above the `"*"` catch-all.
  - Reuse `Navbar` and an appropriate footer.

- **New section**
  - Model it as a standalone component under `src/components/`.
  - Use `container`, `grid`, `bg-card`, and tokens like `text-text-secondary` to stay on-brand.

- **New kit category**
  - Update `categories` in `FilterSidebar.tsx` and extend `categoryStyles` in `KitCard.tsx`.
  - Add entries in `mockKits.ts`.

- **Integrate real API**
  - Replace `mockKits` / `mockArticles` with React Query hooks that fetch from backend.
  - Handle loading and error states with `sonner` or `Toaster` notifications.

This structure gives you a clear, modular frontend that can be driven by real data while still respecting the visual and UX language outlined in `graphic_designs.md`.
