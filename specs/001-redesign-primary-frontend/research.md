# Research Document: Primary Frontend Redesign

**Feature**: Primary Frontend Redesign with Secondary Frontend Design
**Branch**: `001-redesign-primary-frontend`
**Date**: 2025-12-04
**Purpose**: Resolve technical unknowns and document design decisions for implementation

---

## Research Task 1: Dark Theme Design Tokens Extraction

### Decision

Adopt the "GitHub Geek Dark Theme" color palette from secondary frontend with HSL-based CSS variables:

**Core Colors:**
- `--background`: `216 28% 7%` (very dark blue-gray, #0D1117-like)
- `--foreground`: `216 12% 92%` (off-white text)
- `--surface`: `216 22% 14%` (slightly elevated backgrounds)
- `--surface-hover`: `216 22% 18%` (hover state for surface elements)

**Text Colors:**
- `--text-primary`: `216 12% 92%` (primary text, same as foreground)
- `--text-secondary`: `215 14% 64%` (secondary text, slightly muted)
- `--text-muted`: `215 14% 46%` (muted text, de-emphasized content)

**Accent Colors:**
- `--primary`: `217 91% 60%` (bright blue, primary actions/links)
- `--primary-foreground`: `0 0% 100%` (white, text on primary backgrounds)
- `--accent`: `217 91% 60%` (same as primary, accent elements)
- `--success`: `142 71% 45%` (green, success states)
- `--warning`: `38 92% 50%` (orange, warning states)
- `--error`: `0 84% 60%` (red, error states)

**Component Colors:**
- `--card`: `216 22% 11%` (card backgrounds, slightly lighter than background)
- `--card-foreground`: `216 12% 92%` (text on cards)
- `--border`: `215 19% 18%` (border colors)
- `--muted`: `215 19% 15%` (muted backgrounds)
- `--secondary`: `215 19% 15%` (secondary elements)

**Border Radius:**
- `--radius`: `0.5rem` (8px default border radius)

**Font Imports:**
```css
@import "@fontsource/inter/400.css";
@import "@fontsource/inter/500.css";
@import "@fontsource/inter/600.css";
@import "@fontsource/jetbrains-mono/400.css";
@import "@fontsource/jetbrains-mono/500.css";
```

**Font Families:**
- `sans`: `["Inter", "system-ui", "sans-serif"]`
- `mono`: `["JetBrains Mono", "monospace"]`

**Keyframes & Animations:**
```typescript
keyframes: {
  "fade-in": {
    "0%": { opacity: "0", transform: "translateY(10px)" },
    "100%": { opacity: "1", transform: "translateY(0)" },
  },
  "fade-in-up": {
    "0%": { opacity: "0", transform: "translateY(20px)" },
    "100%": { opacity: "1", transform: "translateY(0)" },
  },
  "scale-in": {
    "0%": { opacity: "0", transform: "scale(0.95)" },
    "100%": { opacity: "1", transform: "scale(1)" },
  },
  pulse: {
    "0%, 100%": { opacity: "1" },
    "50%": { opacity: "0.5" },
  },
  "scroll-left": {
    "0%": { transform: "translateX(0)" },
    "100%": { transform: "translateX(-50%)" },
  },
  "scroll-right": {
    "0%": { transform: "translateX(-50%)" },
    "100%": { transform: "translateX(0)" },
  },
}

animation: {
  "fade-in": "fade-in 0.5s ease-out forwards",
  "fade-in-up": "fade-in-up 0.6s ease-out forwards",
  "scale-in": "scale-in 0.3s ease-out forwards",
  pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
  "scroll-left": "scroll-left 40s linear infinite",
  "scroll-right": "scroll-right 40s linear infinite",
  "scroll-left-slow": "scroll-left 60s linear infinite",
  "scroll-right-slow": "scroll-right 60s linear infinite",
}
```

**Custom CSS Classes:**
- `.tag-pill`: Category/tag pills with hover effects
- `.card-hover`: Card hover animation (scale + glow shadow)
- `.glow-accent`: Accent glow effect for CTAs
- `.fade-edges`: Gradient mask for scrolling elements
- Custom scrollbar styling (8px width, dark theme)

### Rationale

This color palette creates a cohesive GitHub-inspired dark theme that:
1. **Enhances readability**: High contrast between text (92% lightness) and background (7% lightness) ensures legibility
2. **Establishes visual hierarchy**: Three text levels (primary, secondary, muted) guide attention
3. **Provides depth**: Layered surfaces (background → surface → card) create spatial relationships
4. **Supports interactivity**: Hover states (surface-hover, card-hover) provide clear feedback
5. **Aligns with brand**: Blue primary (#4A90F2-like) matches tech/developer aesthetic
6. **Facilitates status communication**: Distinct success/warning/error colors for UI states

The HSL color system allows easy manipulation (lightness adjustments for variants) and integrates seamlessly with Tailwind's `hsl(var(--variable))` pattern.

### Alternatives Considered

**Alternative 1: Adapt existing "Wall Street Classic" theme to dark mode**
- **Rejected**: Would require extensive rework of color relationships; easier to adopt proven dark palette from secondary frontend
- **Reason**: Secondary frontend's palette is already validated and GitHub-inspired (matches target aesthetic)

**Alternative 2: Use Tailwind's default dark mode colors**
- **Rejected**: Tailwind defaults are generic; don't match GitHub aesthetic or secondary frontend design
- **Reason**: Specification requires "visually exactly looks like" secondary frontend (90% consistency target)

**Alternative 3: Different font pairing (e.g., Roboto + Fira Code)**
- **Rejected**: Inter + JetBrains Mono are already specified in secondary frontend and provide excellent readability
- **Reason**: Inter is optimized for UI (variable font with wide weight range), JetBrains Mono has clear character distinction for code/technical content

---

## Research Task 2: Component Port Strategy

### Decision

**Adapt shadcn-ui components to Nextra context using these strategies:**

1. **Replace `react-router-dom` imports with `next/link`**
   - Secondary frontend uses `<Link to="...">` (react-router-dom)
   - Primary frontend must use `<Link href="...">` (Next.js)
   - Pattern: Find-replace Link imports + adjust prop names

2. **Preserve Radix UI primitives**
   - Radix UI components (Dialog, Accordion, Tooltip, etc.) are framework-agnostic
   - Can be used directly in Nextra/Next.js without modification
   - Install via npm: `@radix-ui/react-*` packages

3. **Adapt layout patterns for Nextra**
   - Secondary frontend has app-wide Navbar in `App.tsx` (SPA pattern)
   - Primary frontend uses Next.js layouts (`app/layout.tsx`, `app/blog/layout.tsx`)
   - Pattern: Place Navbar in root layout, allow nested layouts to override if needed

4. **Handle client-side state (search, filters) with React hooks**
   - Both frameworks use React 18 → `useState`, `useEffect` work identically
   - No special adaptation needed for FilterSidebar, KitsGrid state management

5. **Adapt external link handling**
   - Secondary: `<a href="..." target="_blank" rel="noopener noreferrer">`
   - Primary: Same pattern (Next.js Link only for internal routes)
   - Pattern: Keep `<a>` for external links (GitHub, payment methods)

6. **Component directory structure**
   - Secondary: `src/components/` (Vite convention)
   - Primary: `components/` (Next.js convention, already exists)
   - Pattern: Port components directly to `components/` (flat structure)

7. **UI primitives directory**
   - Secondary: `src/components/ui/` (shadcn-ui pattern)
   - Primary: `components/ui/` (same structure)
   - Pattern: Copy UI components with minor path adjustments (`@/` alias)

### Rationale

This strategy:
1. **Minimizes refactoring**: Only router-related changes needed (Link imports/props)
2. **Preserves visual fidelity**: Radix UI primitives ensure identical behavior
3. **Leverages Nextra strengths**: Blog content still managed by Nextra, custom pages use standard Next.js patterns
4. **Maintains type safety**: All TypeScript interfaces carry over without changes
5. **Aligns with Next.js conventions**: Uses App Router layout patterns instead of SPA structure

### Alternatives Considered

**Alternative 1: Full migration to Vite (use secondary frontend as-is)**
- **Rejected**: Violates constitution (must maintain Nextra infrastructure)
- **Reason**: Constitution mandates Next.js 14 + Nextra 4.6; Vercel deployment already configured

**Alternative 2: Use Next.js built-in components instead of shadcn-ui**
- **Rejected**: Would require redesigning all components; loses visual consistency with secondary frontend
- **Reason**: Specification requires 90% visual match; shadcn-ui components are already styled correctly

**Alternative 3: Create wrapper components to abstract router differences**
- **Rejected**: Adds unnecessary complexity; direct adaptation is simpler
- **Reason**: Link prop changes are straightforward (`to` → `href`); wrapper adds indirection without benefit

---

## Research Task 3: Nextra Custom Page Integration

### Decision

**Use Next.js App Router pattern for custom pages, disable Nextra features selectively:**

1. **Create custom pages in `app/` directory**
   ```text
   app/
   ├── kits/
   │   └── page.tsx          # Full custom page (no Nextra sidebar)
   ├── about/
   │   └── page.tsx          # Full custom page
   └── donate/
       └── page.tsx          # Full custom page
   ```

2. **Disable Nextra sidebar and TOC**
   - Nextra only applies its layout to pages inside `app/blog/` and `app/docs/`
   - Pages outside these directories are treated as regular Next.js pages
   - Solution: Custom pages at `/kits`, `/about`, `/donate` won't have Nextra chrome

3. **Use root layout (`app/layout.tsx`) for Navbar/Footer**
   - Root layout wraps ALL pages (Nextra-managed and custom)
   - Place Navbar and Footer in root layout → consistent across site
   - Nextra layouts (`app/blog/layout.tsx`) inherit from root layout

4. **Override Nextra layout for blog pages if needed**
   - If Nextra's blog layout conflicts with new design, create custom `app/blog/layout.tsx`
   - Import Nextra's content processing, apply custom chrome (Navbar, Footer)

5. **Routing compatibility**
   - Nextra blog posts: `/blog/[slug]` (Nextra's dynamic routing)
   - Custom pages: `/kits`, `/about`, `/donate` (Next.js file-based routing)
   - No conflicts because paths don't overlap

### Rationale

This approach:
1. **Leverages Nextra where needed**: Blog content continues using Nextra's markdown processing
2. **Avoids Nextra where not needed**: Custom pages (kits, about, donate) are standard Next.js pages without blog/docs features
3. **Maintains routing clarity**: File structure reflects route structure (no magic)
4. **Preserves SEO**: All pages still benefit from Next.js SSG (static export)
5. **Simplifies layout management**: Root layout provides global chrome, nested layouts add page-specific features

### Alternatives Considered

**Alternative 1: Configure Nextra to exclude certain routes**
- **Rejected**: Nextra doesn't have route exclusion config; would require forking Nextra
- **Reason**: Simpler to use Next.js's natural separation (Nextra applies only to configured directories)

**Alternative 2: Create separate Next.js app for custom pages**
- **Rejected**: Violates constitution's simplicity principle; adds deployment complexity
- **Reason**: Constitution discourages multiple projects; single Next.js app is simpler

**Alternative 3: Use Nextra's page frontmatter to disable sidebar/TOC**
- **Rejected**: Only works for Nextra-managed pages (MDX files); custom pages need full React components
- **Reason**: Custom pages (kits, about, donate) require React state (filters, forms), not just markdown content

---

## Research Task 4: Mock Data Schema Design

### Decision

**Define TypeScript interfaces matching secondary frontend's data structure:**

```typescript
// data/kits.ts

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

export const kits: Kit[] = [
  {
    id: "1",
    title: "AI Agent Dev Kit",
    description: "Complete toolkit for building AI agents with Claude and OpenAI...",
    category: "DEV-KIT",
    categoryColor: "dev",
    repo: "agentii-ai/dev-kit",
    stars: 1234,
    lastUpdated: "2025-11-20",
  },
  // ... more kits
];

// Category metadata
export const categoryMetadata: Record<CategoryColor, { label: string; color: string }> = {
  dev: { label: "Development", color: "from-blue-500 to-cyan-500" },
  pm: { label: "Product Management", color: "from-purple-500 to-pink-500" },
  marketing: { label: "Marketing", color: "from-orange-500 to-yellow-500" },
  legal: { label: "Legal & Compliance", color: "from-gray-500 to-slate-500" },
  finance: { label: "Finance", color: "from-green-500 to-emerald-500" },
  design: { label: "Design", color: "from-pink-500 to-rose-500" },
  ops: { label: "Operations", color: "from-indigo-500 to-violet-500" },
};

// Helper functions
export function getKitsByCategory(category: KitCategory): Kit[] {
  return kits.filter(kit => kit.category === category);
}

export function searchKits(query: string): Kit[] {
  const lowerQuery = query.toLowerCase();
  return kits.filter(
    kit =>
      kit.title.toLowerCase().includes(lowerQuery) ||
      kit.description.toLowerCase().includes(lowerQuery)
  );
}

export function sortKitsByStars(kits: Kit[]): Kit[] {
  return [...kits].sort((a, b) => b.stars - a.stars);
}

export function sortKitsByDate(kits: Kit[]): Kit[] {
  return [...kits].sort((a, b) =>
    new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime()
  );
}
```

**Validation (optional, using Zod if needed):**
```typescript
import { z } from 'zod';

export const KitSchema = z.object({
  id: z.string(),
  title: z.string().min(10).max(100),
  description: z.string().min(20).max(500),
  category: z.enum(['DEV-KIT', 'PM-KIT', 'MARKETING-KIT', 'LEGAL-KIT', 'FINANCE-KIT', 'DESIGN-KIT', 'OPS-KIT']),
  categoryColor: z.enum(['dev', 'pm', 'marketing', 'legal', 'finance', 'design', 'ops']),
  repo: z.string().regex(/^[a-z0-9-]+\/[a-z0-9-]+$/i),
  stars: z.number().int().min(0),
  lastUpdated: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
});
```

### Rationale

This schema:
1. **Matches secondary frontend**: Uses identical field names and types from mockKits.ts
2. **Provides type safety**: TypeScript enums prevent invalid category values
3. **Enables filtering**: Helper functions support FilterSidebar and KitsGrid requirements
4. **Supports sorting**: Sorting by stars (popularity) and date (recency) as per spec
5. **Uses standard patterns**: ISO 8601 dates, GitHub repo format (owner/name)
6. **Scales easily**: Additional kits can be added to the array without schema changes

### Alternatives Considered

**Alternative 1: Use JSON files for kit data**
- **Rejected**: No type checking at build time; requires runtime parsing
- **Reason**: TypeScript files provide compile-time validation and better IDE support

**Alternative 2: Fetch kit data from GitHub API**
- **Rejected**: Introduces external dependency; requires API keys; slower builds
- **Reason**: Specification assumes static mock data (FR-022: "Website MUST load mock data from local data files")

**Alternative 3: Use database (e.g., PostgreSQL with Prisma)**
- **Rejected**: Violates constitution (static site, no database engines allowed)
- **Reason**: Constitution explicitly prohibits database engines for this project

---

## Research Task 5: Blog Content Integration

### Decision

**Use Nextra's blog-loader.ts to fetch posts, map to ArticleCard props:**

1. **Import blog loader in page components**
   ```typescript
   import { getRecentPosts, getFeaturedPosts, getAllPosts } from '@/lib/content/blog-loader';
   ```

2. **Map Nextra post data to Article interface**
   ```typescript
   // Nextra post structure (from blog-loader.ts)
   interface NextraPost {
     slug: string;
     title: string;
     description: string;  // Frontmatter description
     date: string;
     author: string;
     tags: string[];
     content: string;  // MDX content
     featured?: boolean;
     coverImage?: string;
   }

   // Map to Article interface for ArticleCard
   const articles: Article[] = posts.map(post => ({
     slug: post.slug,
     title: post.title,
     excerpt: post.description,  // Use frontmatter description as excerpt
     content: post.content,
     tags: post.tags,
     author: post.author,
     date: post.date,
     stars: Math.floor(Math.random() * 1000),  // Mock social proof (optional)
     gradient: getGradientForTags(post.tags[0]),  // Derive gradient from first tag
     coverImage: post.coverImage,
     featured: post.featured || false,
   }));
   ```

3. **Select featured articles using frontmatter flag**
   ```typescript
   // In app/blog/page.tsx
   const featuredArticles = await getFeaturedPosts(3);  // Top 3 featured
   const allArticles = await getAllPosts();
   ```

4. **Gradient assignment strategy**
   ```typescript
   const tagGradients: Record<string, string> = {
     'development': 'from-blue-500 to-cyan-500',
     'product': 'from-purple-500 to-pink-500',
     'marketing': 'from-orange-500 to-yellow-500',
     'legal': 'from-gray-500 to-slate-500',
     'finance': 'from-green-500 to-emerald-500',
     'design': 'from-pink-500 to-rose-500',
     'default': 'from-indigo-500 to-purple-500',
   };

   function getGradientForTags(tag: string): string {
     return tagGradients[tag] || tagGradients['default'];
   }
   ```

5. **Carousel auto-rotation**
   ```typescript
   // In BlogHero component
   const [activeIndex, setActiveIndex] = useState(0);

   useEffect(() => {
     const interval = setInterval(() => {
       setActiveIndex((prev) => (prev + 1) % featuredArticles.length);
     }, 5000);  // 5 seconds per article (SC-012)

     return () => clearInterval(interval);
   }, [featuredArticles.length]);
   ```

### Rationale

This integration:
1. **Preserves existing content**: No changes to MDX blog posts in `content/blog/`
2. **Leverages Nextra**: Uses existing blog-loader.ts (already handles frontmatter parsing, MDX compilation)
3. **Maps cleanly**: Nextra post fields align with Article interface (title, date, author, tags)
4. **Supports featured selection**: Uses existing `featured: true` frontmatter flag
5. **Maintains flexibility**: Gradient assignment can be customized per tag or randomized

### Alternatives Considered

**Alternative 1: Rewrite blog posts to match secondary frontend's mockArticles.ts**
- **Rejected**: Unnecessary work; existing MDX posts are constitution-compliant
- **Reason**: Specification states "preserve existing Nextra blog content" (constitution principle I)

**Alternative 2: Create separate Article data files (JSON/TS) for metadata**
- **Rejected**: Duplicates frontmatter; violates DRY principle
- **Reason**: Frontmatter already contains all needed metadata (title, description, date, author, tags)

**Alternative 3: Use random gradients for each article**
- **Rejected**: Less semantic; doesn't communicate category/topic
- **Reason**: Tag-based gradients provide visual cues (e.g., dev posts = blue, design posts = pink)

---

## Summary of Decisions

| Research Task | Decision | Implementation File |
|---------------|----------|---------------------|
| **1. Dark Theme Tokens** | Adopt HSL-based CSS variables from secondary frontend | `styles/globals.css`, `tailwind.config.cjs` |
| **2. Component Port** | Adapt shadcn-ui to Nextra (Link → next/link, preserve Radix UI) | All components in `components/` |
| **3. Custom Pages** | Use Next.js App Router, disable Nextra outside `/blog` and `/docs` | `app/kits/page.tsx`, `app/about/page.tsx`, `app/donate/page.tsx` |
| **4. Mock Data Schema** | TypeScript interfaces with enums, helper functions | `data/kits.ts` |
| **5. Blog Integration** | Use blog-loader.ts, map to Article interface, tag-based gradients | `app/blog/page.tsx`, `components/BlogHero.tsx`, `components/ArticleCard.tsx` |

---

## Dependencies to Install

Based on research findings, the following npm packages need to be added:

```bash
npm install tailwindcss-animate class-variance-authority clsx
npm install @fontsource/inter @fontsource/jetbrains-mono
```

**Optional (for data validation):**
```bash
npm install zod
```

**Radix UI primitives** (install as needed per component):
```bash
npm install @radix-ui/react-dialog @radix-ui/react-accordion @radix-ui/react-tooltip @radix-ui/react-avatar @radix-ui/react-separator @radix-ui/react-checkbox @radix-ui/react-label
```

---

## Next Steps

1. **Proceed to Phase 1**: Generate `data-model.md`, `contracts/`, and `quickstart.md`
2. **Update agent context**: Run `.specify/scripts/bash/update-agent-context.sh claude`
3. **Begin implementation**: Start with Phase 2 (Foundation & Design System Migration)
4. **Validate research decisions**: Test dark theme extraction, component ports, and Nextra integration in Phase 2
