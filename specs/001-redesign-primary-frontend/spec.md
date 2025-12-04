# Feature Specification: Primary Frontend Redesign with Secondary Frontend Design

**Feature Branch**: `001-redesign-primary-frontend`
**Created**: 2025-12-04
**Status**: Draft
**Input**: User description: "this project was developed with nextra blog and docs opensource project. the current frontend is successfully deployed in vercel.com. i want to keep this infrastructure. however, i want to completely change the design and purpose of current frontend. i want to name this frontend as primary frontend. the secondary frontend is located in spec-kit-hub-main/ which have a different stack. i want the design style, content and sections / components of the secondary frontend. your job is to rewrite the primary backend's code with the design of the secondary frontend. at the end, the whole website is still a nextra blog and docs project, with frontpage visually exactly looks like the frontpage in spec-kit-hub-main/src/pages/Index.tsx. remember to keep all frontend stacks as the primary frontend."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Landing Page Transformation (Priority: P1)

Visitors land on the agentii-kit website homepage and immediately see a GitHub-inspired dark-themed interface showcasing spec-kits for different roles (developers, PMs, legal, marketing, etc.). The homepage presents a hero section with prominent CTAs, floating category tags, latest kits grid with filtering, featured articles, and use case sections—all visually matching the secondary frontend design but built with Nextra/Next.js infrastructure.

**Why this priority**: The homepage is the primary entry point for all users. It sets the first impression and drives all downstream engagement (kit discovery, blog navigation, donations). This is the core value proposition delivery mechanism.

**Independent Test**: Can be fully tested by deploying the redesigned homepage and verifying that: (1) all visual sections from secondary frontend appear correctly, (2) navigation works, (3) the site still builds as a Nextra static export, and (4) Vercel deployment succeeds.

**Acceptance Scenarios**:

1. **Given** a visitor loads the homepage, **When** the page renders, **Then** they see a hero section with headline "agentii-kit — Power Your AI Agents", primary/secondary CTAs, background gradient, and floating tags
2. **Given** a visitor scrolls down, **When** they view the main content, **Then** they see sections for Featured Articles, Latest Kits (3-column grid), Filter Sidebar with search and category checkboxes, Kits Grid with pagination, Recently Updated Table, Testimonials, and Use Cases
3. **Given** a visitor interacts with the filter sidebar, **When** they enter search text or select categories, **Then** the kits grid updates to show only matching results
4. **Given** a visitor views kit cards, **When** they hover over a card, **Then** the card displays hover effects (border change, action buttons reveal) matching the secondary frontend design
5. **Given** the site is built for production, **When** the build completes, **Then** all pages export as static HTML without errors and deploy successfully to Vercel

---

### User Story 2 - Navigation and Global Layout Components (Priority: P2)

Users navigate across all pages (home, blog, docs, kits catalog, about, donate) using a consistent dark-themed fixed navbar with logomark, internal links, search hint, and donate button. The footer appears consistently across pages with logo, tagline, and quick links. Mobile users see a responsive hamburger menu with all navigation options.

**Why this priority**: Consistent navigation enables users to explore the entire site. Without reliable navigation, users cannot discover blog content or documentation, reducing engagement and SEO value.

**Independent Test**: Can be tested by navigating between all major pages and verifying: (1) navbar and footer appear consistently, (2) active link states work, (3) mobile menu toggles correctly, (4) all links route properly within the Nextra app structure.

**Acceptance Scenarios**:

1. **Given** a user is on any page, **When** they view the top of the page, **Then** they see a fixed navbar with AK logomark, "agentii-kit" wordmark, nav links (Kits, Blog, About, GitHub), search button with ⌘K hint, and Donate button
2. **Given** a user clicks a nav link, **When** the navigation completes, **Then** they land on the correct page and the active link is visually highlighted
3. **Given** a mobile user views the navbar, **When** they tap the menu icon, **Then** a mobile menu slides in showing all nav links and a block-level Donate button
4. **Given** a user is on any page, **When** they scroll to the bottom, **Then** they see a footer with AK logomark, tagline, and links (About, Contribute, GitHub, License)

---

### User Story 3 - Kits Catalog Page with Filtering (Priority: P3)

Users visit a dedicated "/kits" page to browse the full catalog of spec-kits with advanced filtering and pagination. The page features a highlighted section for top 3 featured kits (by stars), followed by a filter sidebar and paginated grid of all kits matching selected filters.

**Why this priority**: Power users and returning visitors need a comprehensive view of all available spec-kits with search and category filters. This page serves as the main discovery hub for deep exploration beyond homepage highlights.

**Independent Test**: Can be tested by navigating to /kits and verifying: (1) featured kits section appears with top 3 kits, (2) filter sidebar and kits grid work identically to homepage, (3) pagination controls function correctly, (4) URL structure is compatible with Nextra routing.

**Acceptance Scenarios**:

1. **Given** a user navigates to /kits, **When** the page loads, **Then** they see a featured kits section at the top showing the 3 kits with highest star counts
2. **Given** a user views the kits catalog, **When** they apply filters via search or category selection, **Then** the kits grid updates to show only matching results with accurate pagination
3. **Given** a user views the kits grid, **When** they click a page number, **Then** the grid updates to show the corresponding page of results without full page reload

---

### User Story 4 - Blog Listing and Article Detail Pages (Priority: P4)

Users visit the "/blog" page to see a list of all articles with a hero section, featured article carousel, category browse cards, and article grid. Clicking an article navigates to a detail page with full markdown content rendering, tag pills, share buttons, and back navigation.

**Why this priority**: The blog is a core content discovery surface that drives SEO and engagement. Article detail pages deliver the actual content and must render markdown correctly while maintaining the dark-themed design.

**Independent Test**: Can be tested by navigating to /blog, selecting an article, and verifying: (1) blog hero and carousel work, (2) article grid displays all articles, (3) article detail page renders markdown with proper styling, (4) share buttons function, (5) Nextra's markdown processing works correctly.

**Acceptance Scenarios**:

1. **Given** a user navigates to /blog, **When** the page loads, **Then** they see a blog hero with explanation text, primary/secondary CTAs, and a carousel showing top 3 featured articles with auto-rotation
2. **Given** a user views the blog page, **When** they scroll down, **Then** they see a "Browse by topic" grid (Development, Product, Marketing, etc.) and an articles grid with article cards
3. **Given** a user clicks an article card, **When** the article page loads, **Then** they see the article title, date, author, tag pills, share buttons (copy link, Twitter, LinkedIn, email), and markdown-rendered content
4. **Given** a user views an article, **When** they click the back link, **Then** they return to /blog

---

### User Story 5 - About and Donate Pages (Priority: P5)

Users visit "/about" to learn about agentii-kit's mission, see education/work chips, view portfolio projects, read testimonials, and access contact methods. Users visit "/donate" to see project stats, understand what donations support, and access various payment methods.

**Why this priority**: These pages provide context and support mechanisms. While not primary discovery surfaces, they build trust and enable community contributions.

**Independent Test**: Can be tested by navigating to /about and /donate and verifying: (1) all content sections appear correctly, (2) layout matches secondary frontend, (3) pages integrate with Nextra routing, (4) external links (payment methods) work.

**Acceptance Scenarios**:

1. **Given** a user navigates to /about, **When** the page loads, **Then** they see sections for mission explanation, education/work chips, portfolio project cards, testimonials, and contact information
2. **Given** a user navigates to /donate, **When** the page loads, **Then** they see a two-column layout with left column (headline, stats, "What Your Donation Supports" list, back link) and right column (amount tiers, payment methods, crypto notice, thank you note)
3. **Given** a user clicks a payment method link, **When** the link activates, **Then** it opens the external payment platform in a new tab

---

### Edge Cases

- **What happens when no kits match the selected filters?** Display an empty state message: "No kits match your search. Try adjusting your filters."
- **How does the system handle missing or invalid frontmatter in mock data?** Validate all mock kit and article data against expected schema during build time; fail the build if invalid data is detected.
- **What happens when a user navigates to a non-existent article slug?** Display a 404 page with a message "Article not found" and a link back to /blog.
- **How does the site handle very long kit descriptions or titles?** Apply text truncation with CSS (`line-clamp`) to maintain consistent card heights; full text visible on hover or detail page.
- **What happens when the carousel auto-rotation is active and a user manually selects a different article?** Reset the auto-rotation timer to prevent jarring transitions immediately after manual selection.
- **How does pagination behave when filters reduce results to less than one page?** Hide pagination controls when total results fit on a single page.
- **What happens when a mobile user toggles the menu while scrolling?** Close the mobile menu automatically when a nav link is clicked to improve UX.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Website MUST maintain Nextra blog and docs architecture with Next.js 14, React 18, Tailwind CSS, and MDX for content rendering
- **FR-002**: Homepage MUST display a hero section with headline, subcopy, primary CTA ("Browse Kits"), secondary CTA ("View on GitHub"), background gradient, grid pattern, and floating tags component
- **FR-003**: Homepage MUST display sections in this order: HeroSection, FeaturedArticles, LatestKits, FilterSidebar + KitsGrid, RecentlyUpdatedTable, Testimonials, UseCases, Footer
- **FR-004**: Website MUST use a fixed top navbar with logomark ("AK" in rounded square), "agentii-kit" wordmark, nav links (Kits, Blog, About, GitHub), search button with "⌘K" hint, and Donate button
- **FR-005**: Navbar MUST be responsive with mobile menu toggle (hamburger icon) that reveals all nav links and a block-level Donate button
- **FR-006**: Website MUST use a consistent footer across all pages with AK logomark, tagline ("agentii-kit — Open source spec-kits for AI agents"), and quick links (About, Contribute, GitHub, License)
- **FR-007**: Website MUST support a "/kits" page with featured kits section (top 3 by stars), filter sidebar, and paginated kits grid
- **FR-008**: Filter sidebar MUST include search input field, category checkboxes (DEV-KIT, PM-KIT, MARKETING-KIT, LEGAL-KIT, FINANCE-KIT, DESIGN-KIT, OPS-KIT), sort options, and "Clear all filters" action
- **FR-009**: Kits grid MUST filter results by search query and selected categories, display cards in 3-column responsive grid, and show pagination controls with page number condensation (e.g., "1 ... 4 5 6 ... 12")
- **FR-010**: Kit cards MUST display category pill (with color coding), title, description (truncated with `line-clamp`), meta row (repo name, stars with icon, last updated), and hover-revealed action buttons ("View Spec", "GitHub")
- **FR-011**: Website MUST support a "/blog" page with blog hero (explanation text, CTAs, featured article carousel with 3 articles and auto-rotation), "Browse by topic" category cards, and articles grid
- **FR-012**: Blog hero carousel MUST display one featured article at a time with tag pill, title, description, meta (stars, author), and dot navigation for manual selection
- **FR-013**: Article cards in blog grid MUST display gradient header bar (color from article data), tag pills, title, excerpt, and meta row (date, author)
- **FR-014**: Website MUST support article detail pages at "/blog/:slug" with back link to /blog, article header (title, date, author), tag pills, share buttons (copy link, Twitter, LinkedIn, email), and markdown-rendered content
- **FR-015**: Share buttons MUST copy current URL to clipboard (copy link), open Twitter share dialog with pre-filled text (Twitter), open LinkedIn share dialog (LinkedIn), and open mailto link with subject and body (email)
- **FR-016**: Website MUST support an "/about" page with sections for mission explanation, education chips (MIT, Stanford, Berkeley), work history chips (Google, Amazon, Microsoft), portfolio project cards, testimonials with avatars, and contact information
- **FR-017**: Website MUST support a "/donate" page with two-column layout showing project stats (GitHub stars, contributors, downloads), "What Your Donation Supports" list with icons, donation amount tiers, payment method links (GitHub Sponsors, Buy Me a Coffee, Open Collective, PayPal), crypto notice, and thank you note
- **FR-018**: All pages MUST use dark-themed color palette with CSS variables (background, foreground, surface, surface-hover, text-primary, text-secondary, text-muted, primary, secondary, accent, muted, card, border, success, warning, error)
- **FR-019**: Website MUST use Inter font for primary text and JetBrains Mono font for code-like labels (kit titles, repo names, meta tags)
- **FR-020**: All interactive elements (buttons, cards, links, nav items) MUST display hover states with color transitions (150-250ms duration)
- **FR-021**: Cards and hero elements MUST use Tailwind animation classes (`animate-fade-in`, `animate-fade-in-up`, `animate-scale-in`) with staggered delays for entry transitions
- **FR-022**: Website MUST load mock data from local data files (`mockKits.ts`, `mockArticles.ts`) structured to match the data interfaces from secondary frontend
- **FR-023**: Kit data MUST include fields: id, title, description, category, categoryColor, repo, stars, lastUpdated
- **FR-024**: Article data MUST include fields: id, slug, title, excerpt, content (markdown), tags, author, date, stars, gradient (for visual styling)
- **FR-025**: Website MUST build as a static site compatible with Vercel deployment without changing the Nextra/Next.js infrastructure
- **FR-026**: Website MUST maintain all existing SEO optimizations (meta tags, sitemap, RSS feed, JSON-LD schema) from the original Nextra setup
- **FR-027**: All component implementations MUST use shadcn-ui style patterns with Radix primitives and Tailwind classes to match the secondary frontend's UI component library
- **FR-028**: Markdown rendering MUST use a `MarkdownRenderer` component with prose styling classes for headings, blockquotes, code blocks, and lists
- **FR-029**: Recently Updated Table MUST display kit rows with columns for kit name (monospace), discipline mapping (category to human-readable name), stars (formatted with `toLocaleString()`), last updated, and "View" link to GitHub repo
- **FR-030**: Testimonials section MUST display split layout with quote and social links on left, stylized avatar tile on right

### Key Entities

- **Kit**: Represents a spec-kit with attributes: id, title, description, category (enum: DEV-KIT, PM-KIT, MARKETING-KIT, LEGAL-KIT, FINANCE-KIT, DESIGN-KIT, OPS-KIT), categoryColor (color identifier for styling), repo (GitHub repository name), stars (number), lastUpdated (date string)
- **Article**: Represents a blog post with attributes: id, slug (URL-friendly identifier), title, excerpt (short summary), content (markdown text), tags (array of strings), author (string), date (date string), stars (number for social proof), gradient (color gradient identifier for visual styling)
- **Category**: Represents a kit category with attributes: id (category enum value), label (human-readable name, e.g., "DEV-KIT" → "Development"), color (CSS color token or hex value for pill styling)
- **Author**: Represents a blog post author with attributes: name, avatar (image URL or placeholder), bio (optional)
- **Navigation Link**: Represents a navbar or footer link with attributes: label (display text), href (internal or external URL), external (boolean flag for target="_blank")

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Visitors can land on the redesigned homepage and see all visual sections (hero, featured articles, latest kits, filter sidebar, kits grid, table, testimonials, use cases) without visual breaks or layout issues
- **SC-002**: Users can navigate across all major pages (home, /kits, /blog, /blog/:slug, /about, /donate) using navbar links with visual active states, completing navigation in under 1 second per page
- **SC-003**: Users can filter kits by entering search text or selecting categories, with results updating instantly (< 200ms) and pagination adjusting accordingly
- **SC-004**: Users can view kit cards with hover effects revealing action buttons within 150-250ms, maintaining design consistency with secondary frontend
- **SC-005**: Users can read blog articles with properly rendered markdown (headings, code blocks, lists, blockquotes) and functioning share buttons (copy link, social media)
- **SC-006**: Mobile users can toggle the hamburger menu and access all navigation options with smooth animations and proper touch targets
- **SC-007**: The website builds successfully as a Nextra static site (`npm run build`) and deploys to Vercel without errors or warnings
- **SC-008**: Lighthouse performance score remains ≥90 on all pages after redesign, with LCP <2.5s, FID <100ms, CLS <0.1
- **SC-009**: All pages maintain SEO optimizations (meta tags, sitemap, RSS feed) and pass existing validation checks (`npm run validate-frontmatter`, `npm run check-links`)
- **SC-010**: Visual consistency score: 90% of design elements (colors, typography, spacing, hover states, animations) match secondary frontend reference as validated by side-by-side comparison
- **SC-011**: Users can complete primary task flows (discover a kit, read a blog article, navigate to donation page) in under 30 seconds on first visit
- **SC-012**: Blog hero carousel auto-rotates through 3 featured articles every 5 seconds, with manual dot navigation overriding auto-rotation temporarily

## Assumptions *(document reasonable defaults)*

- The existing Nextra configuration supports custom page components and layouts without requiring structural changes to the framework
- Mock data for kits and articles can be stored in local TypeScript files (mockKits.ts, mockArticles.ts) without requiring a backend API or CMS integration
- The secondary frontend's component implementations (KitCard, FilterSidebar, KitsGrid, etc.) can be recreated using Tailwind CSS and Nextra-compatible React components without framework conflicts
- All images referenced in the secondary frontend design (logos, cover images, avatars) either exist in the project or can be replaced with placeholders during implementation
- The Vercel deployment configuration for Nextra projects supports custom page routing (e.g., /kits, /about, /donate) without additional configuration
- The existing color scheme CSS variables in the primary frontend can be replaced or extended to match the dark-themed palette from the secondary frontend
- Tailwind CSS animations (fade-in, fade-in-up, scale-in, pulse) are already configured or can be added to the Tailwind config without breaking existing styles
- The existing Nextra blog and docs infrastructure already includes markdown rendering capabilities compatible with the MarkdownRenderer component approach
- User analytics and tracking (if any) remain unchanged by the redesign and continue to function with the new page structure
- External links (GitHub repo links, payment method links) in the secondary frontend design point to valid URLs that should be preserved or mapped to appropriate destinations

## Out of Scope

- Implementing a backend API or database for dynamic kit/article data (mock data is sufficient for this phase)
- Building a web-based admin UI for content management (Git-based workflow as per constitution remains in place)
- Creating new blog posts or documentation content (focus is on frontend redesign, not content authoring)
- Implementing user authentication or user accounts (website remains publicly accessible without login)
- Adding shopping cart or e-commerce functionality for donations (external payment links only)
- Migrating away from Nextra/Next.js infrastructure to the secondary frontend's Vite/React stack
- Implementing backend search indexing (client-side filtering is sufficient for mock data)
- Creating a design system documentation site or component library (components are implementation details, not deliverables)
- Performing user testing or A/B testing of the redesign (assume design decisions from secondary frontend are validated)
- Internationalization (i18n) or multi-language support (English only)
- Accessibility audit beyond standard semantic HTML and ARIA labels (WCAG 2.1 AA compliance is implied but not explicitly tested in this phase)
- Performance optimization beyond maintaining existing Lighthouse scores (e.g., no custom lazy loading or code splitting beyond Next.js defaults)

## Dependencies

- **Existing Nextra Infrastructure**: The primary frontend must remain a Nextra blog and docs project with Next.js 14 and React 18. Any incompatibility would block the redesign.
- **Secondary Frontend Reference**: All design decisions, component structures, color palettes, typography, and layout patterns are derived from the secondary frontend (spec-kit-hub-main/). Access to this codebase is required for implementation.
- **Mock Data Structure**: Kit and article data must follow the interfaces defined in the secondary frontend (Kit interface in KitCard.tsx, Article interface in mockArticles.ts) to ensure component compatibility.
- **Vercel Deployment Configuration**: Successful deployment depends on Vercel's support for Nextra static exports. Any changes to Vercel's Next.js build process could affect deployment.
- **Tailwind CSS Configuration**: The primary frontend must support custom Tailwind theme extensions (color variables, animations, font families) to match the secondary frontend's design system.
- **Existing SEO Infrastructure**: The redesign must preserve all SEO-related files and configurations (sitemap generation, RSS feed, meta tags) as mandated by the constitution.

## Risks and Mitigation

| Risk | Impact | Probability | Mitigation Strategy |
|------|--------|-------------|---------------------|
| Nextra's page routing conflicts with custom pages (/kits, /about, /donate) | High - Could block implementation of key pages | Medium | Research Nextra's custom page configuration early; if conflicts arise, use Next.js dynamic routing as fallback |
| Tailwind animations from secondary frontend don't work in Nextra setup | Medium - Degrades visual polish but doesn't block functionality | Low | Test animations in isolated Nextra environment first; fallback to CSS transitions if Tailwind animations fail |
| Mock data structure changes during implementation break components | Medium - Requires component refactoring | Low | Define TypeScript interfaces upfront based on secondary frontend; validate mock data against interfaces |
| Lighthouse performance score drops below 90 after redesign | High - Violates constitution requirement | Medium | Run Lighthouse tests incrementally during implementation; optimize images and code splitting if scores drop |
| Vercel build fails due to Nextra/Next.js configuration issues | High - Blocks deployment | Low | Test full build process locally before pushing; verify static export compatibility with Nextra docs |
| Visual design doesn't match secondary frontend closely enough | Medium - Reduces user experience consistency | Medium | Implement pixel-perfect comparison tool or side-by-side screenshots; iterate on spacing/colors until 90% match |
| Mobile responsive behavior breaks due to CSS conflicts | Medium - Affects mobile users | Medium | Test on multiple mobile viewports during development; use Tailwind responsive utilities consistently |
| Markdown rendering breaks existing blog/docs content | High - Could corrupt existing content | Low | Preserve existing Nextra markdown rendering; add custom prose classes without overriding defaults |

## Notes

- This specification focuses on **what** the redesigned website should accomplish (user experiences, visual outcomes, page structures) without prescribing **how** to implement it (code architecture, file organization, specific React patterns).
- The term "visually exactly looks like" in the feature description is interpreted as "achieves 90% visual consistency" with allowances for framework-specific adaptations (e.g., Nextra's markdown rendering vs. custom React components).
- The secondary frontend's stack (Vite + React + TypeScript + shadcn-ui) serves as a **design reference only**. The primary frontend maintains its Nextra + Next.js + Tailwind stack as per the constitution.
- All color values, font families, spacing tokens, and animation timings should be extracted from the secondary frontend's `tailwind.config.ts` and `index.css` files and adapted to the primary frontend's Tailwind configuration.
- The specification assumes that the secondary frontend's mock data files (`mockKits.ts`, `mockArticles.ts`) can be copied directly into the primary frontend with minimal modifications (path adjustments only).
- Component names from the secondary frontend (HeroSection, FilterSidebar, KitsGrid, KitCard, etc.) are used in this spec for clarity, but implementations in the primary frontend may use different naming conventions as long as visual and functional outcomes match.
- The "⌘K" search hint in the navbar suggests future integration with a command palette, but implementing the command palette itself is out of scope for this redesign (visual hint only).
- External links (GitHub repos, payment methods) should open in new tabs with `target="_blank"` and `rel="noopener noreferrer"` for security.
- The constitution's mandate for Git-based publishing workflow and PR reviews remains unchanged by this redesign—no web-based content editing UI will be introduced.
