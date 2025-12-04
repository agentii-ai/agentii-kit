---
description: "Task list for Primary Frontend Redesign with Secondary Frontend Design"
---

# Tasks: Primary Frontend Redesign with Secondary Frontend Design

**Input**: Design documents from `/specs/001-redesign-primary-frontend/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md

**Tests**: No tests explicitly requested in the feature specification. Focus is on implementation and visual QA.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

This is a Next.js 14 web application with the following structure:
- `app/` - Next.js App Router pages and layouts
- `components/` - React components
- `data/` - Static mock data (TypeScript files)
- `styles/` - Global CSS and Tailwind config
- `content/` - MDX blog posts (Nextra-managed)

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and dependency installation

- [x] T001 Install new dependencies: `npm install tailwindcss-animate class-variance-authority clsx @fontsource/inter @fontsource/jetbrains-mono`
- [x] T002 [P] Install Radix UI primitives: `npm install @radix-ui/react-dialog @radix-ui/react-accordion @radix-ui/react-tooltip @radix-ui/react-avatar @radix-ui/react-separator @radix-ui/react-checkbox @radix-ui/react-label`
- [x] T003 [P] Verify existing Nextra dependencies (nextra 4.6, next 14, react 18, tailwindcss 3.3) in package.json

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core design system and infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

### Design System Setup

- [x] T004 Update tailwind.config.cjs with dark theme tokens from research.md (colors, fonts, animations, keyframes) in /Users/frank/X/agentii-kit/tailwind.config.cjs
- [x] T005 Update styles/globals.css with dark theme CSS variables (HSL values for background, foreground, surface, text, primary, accent, etc.) in /Users/frank/X/agentii-kit/styles/globals.css
- [x] T006 [P] Add Inter and JetBrains Mono font imports to styles/globals.css
- [x] T007 [P] Add custom CSS classes (tag-pill, card-hover, glow-accent, fade-edges, scrollbar styling) to styles/globals.css
- [x] T008 Update app/layout.tsx to default to dark theme and import new font families in /Users/frank/X/agentii-kit/app/layout.tsx

### UI Primitives (shadcn-ui style components)

- [x] T009 Create components/ui directory structure
- [x] T010 [P] Create Button component with variants (primary, secondary, ghost, outline) in components/ui/button.tsx
- [x] T011 [P] Create Input component in components/ui/input.tsx
- [x] T012 [P] Create Checkbox component using Radix in components/ui/checkbox.tsx
- [x] T013 [P] Create Badge component in components/ui/badge.tsx
- [x] T014 [P] Create Card component in components/ui/card.tsx
- [ ] T015 [P] Create Avatar component using Radix in components/ui/avatar.tsx
- [ ] T016 [P] Create Separator component using Radix in components/ui/separator.tsx
- [ ] T017 [P] Create Tooltip component using Radix in components/ui/tooltip.tsx
- [ ] T018 [P] Create Label component using Radix in components/ui/label.tsx

### Data Layer Setup

- [x] T019 Create data/kits.ts with Kit interface, CategoryColor enum, KitCategory enum, and categoryMetadata in /Users/frank/X/agentii-kit/data/kits.ts
- [x] T020 Add 15-20 mock kits across all 7 categories (DEV-KIT, PM-KIT, MARKETING-KIT, LEGAL-KIT, FINANCE-KIT, DESIGN-KIT, OPS-KIT) to data/kits.ts
- [x] T021 [P] Add helper functions (getKitsByCategory, searchKits, sortKitsByStars, sortKitsByDate) to data/kits.ts

### Validation Checkpoint

- [x] T022 Run npm run build to verify foundation setup and check for errors
- [x] T023 Start dev server (npm run dev) and verify dark theme loads correctly at http://localhost:3000

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Landing Page Transformation (Priority: P1) 🎯 MVP

**Goal**: Visitors land on the agentii-kit website homepage and see a GitHub-inspired dark-themed interface showcasing spec-kits with hero section, featured articles, latest kits grid with filtering, and use case sections.

**Independent Test**: Deploy the redesigned homepage and verify that: (1) all visual sections from secondary frontend appear correctly, (2) navigation works, (3) the site still builds as a Nextra static export, and (4) Vercel deployment succeeds.

### Core Layout Components (Prerequisites for US1)

- [x] T024 [P] [US1] Create Navbar component with fixed top bar, logomark, nav links, search hint, donate button in components/Navbar.tsx
- [x] T025 [P] [US1] Add mobile menu toggle (hamburger) to Navbar with slide-in menu for mobile responsiveness
- [x] T026 [P] [US1] Create Footer component with AK logomark, tagline, and quick links in components/Footer.tsx
- [ ] T027 [US1] Update app/layout.tsx to use new Navbar and Footer components instead of existing Navigation

### Hero Section

- [x] T028 [P] [US1] Create FloatingTags component with animated tag marquee (scroll animations) in components/FloatingTags.tsx
- [x] T029 [US1] Create HeroSection component with headline, gradient background, grid pattern, CTAs, and FloatingTags in components/HeroSection.tsx

### Kit Components

- [x] T030 [P] [US1] Create KitCard component with category pill, title, description, meta row, hover actions in components/KitCard.tsx
- [x] T031 [P] [US1] Create FilterSidebar component with search input, category checkboxes, sort options, clear action in components/FilterSidebar.tsx
- [x] T032 [US1] Create KitsGrid component with filtering, pagination, empty state in components/KitsGrid.tsx
- [x] T033 [P] [US1] Create FeaturedKits component showing top 3 kits by stars in components/FeaturedKits.tsx
- [x] T034 [P] [US1] Create LatestKits component showing recent kits in 3-column grid in components/LatestKits.tsx
- [x] T035 [P] [US1] Create RecentlyUpdatedTable component with table-style kit listing in components/RecentlyUpdatedTable.tsx

### Supporting Sections

- [x] T036 [P] [US1] Create Testimonials component with split layout (quote left, avatar right) in components/Testimonials.tsx
- [x] T037 [P] [US1] Create UseCases component with metrics row and use case cards in components/UseCases.tsx
- [x] T038 [P] [US1] Create FeaturedArticles component as blog teaser section in components/FeaturedArticles.tsx

### Landing Page Assembly

- [x] T039 [US1] Rewrite app/page.tsx to compose all sections: HeroSection, FeaturedArticles, LatestKits, FilterSidebar + KitsGrid, RecentlyUpdatedTable, Testimonials, UseCases in /Users/frank/X/agentii-kit/app/page.tsx
- [x] T040 [US1] Test landing page visual consistency with secondary frontend (side-by-side comparison, target 90% match)
- [x] T041 [US1] Test filtering functionality (search and category checkboxes update grid)
- [x] T042 [US1] Test pagination controls (page numbers, condensation like "1 ... 4 5 6 ... 12")
- [x] T043 [US1] Test mobile responsiveness on homepage (all sections render correctly on mobile)
- [x] T044 [US1] Test kit card hover effects (border change, action buttons reveal in 150-250ms)
- [x] T045 [US1] Run npm run build and verify static export succeeds

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently. The homepage matches the secondary frontend design visually and all interactions work.

---

## Phase 4: User Story 2 - Navigation and Global Layout Components (Priority: P2)

**Goal**: Users navigate across all pages using a consistent dark-themed fixed navbar with logomark, links, search hint, and donate button. Footer appears consistently across pages. Mobile users see responsive hamburger menu.

**Independent Test**: Navigate between all major pages and verify: (1) navbar and footer appear consistently, (2) active link states work, (3) mobile menu toggles correctly, (4) all links route properly within the Nextra app structure.

### Navigation Enhancement

- [ ] T046 [US2] Add active link state styling to Navbar (highlight current page) in components/Navbar.tsx
- [ ] T047 [US2] Implement mobile menu auto-close when nav link is clicked in components/Navbar.tsx
- [ ] T048 [US2] Test navigation between homepage and existing blog pages (/blog)
- [ ] T049 [US2] Verify Footer appears consistently on all existing pages
- [ ] T050 [US2] Test mobile menu toggle animation and touch targets on mobile devices
- [ ] T051 [US2] Test navbar fixed positioning (stays at top during scroll)

**Checkpoint**: Navigation is fully functional across all pages. Active states, mobile menu, and routing work correctly.

---

## Phase 5: User Story 3 - Kits Catalog Page with Filtering (Priority: P3)

**Goal**: Users visit a dedicated "/kits" page to browse the full catalog of spec-kits with advanced filtering and pagination. The page features a highlighted section for top 3 featured kits, followed by a filter sidebar and paginated grid.

**Independent Test**: Navigate to /kits and verify: (1) featured kits section appears with top 3 kits, (2) filter sidebar and kits grid work identically to homepage, (3) pagination controls function correctly, (4) URL structure is compatible with Nextra routing.

### Kits Catalog Page

- [ ] T052 [US3] Create app/kits directory for dedicated kits catalog page
- [ ] T053 [US3] Create app/kits/page.tsx with featured kits section at top and main catalog below in /Users/frank/X/agentii-kit/app/kits/page.tsx
- [ ] T054 [US3] Reuse FilterSidebar and KitsGrid components in kits page
- [ ] T055 [US3] Add "Kits" link to Navbar navigation (update components/Navbar.tsx)
- [ ] T056 [US3] Test filtering and search on /kits page (verify identical behavior to homepage)
- [ ] T057 [US3] Test pagination on /kits page with different filter combinations
- [ ] T058 [US3] Test mobile responsiveness on /kits page
- [ ] T059 [US3] Verify /kits route works with Nextra routing (no conflicts)

**Checkpoint**: /kits page is fully functional and provides a comprehensive catalog view with filtering and pagination.

---

## Phase 6: User Story 4 - Blog Listing and Article Detail Pages (Priority: P4)

**Goal**: Users visit the "/blog" page to see a list of all articles with a hero section, featured article carousel, category browse cards, and article grid. Clicking an article navigates to a detail page with full markdown content rendering, tag pills, share buttons, and back navigation.

**Independent Test**: Navigate to /blog, select an article, and verify: (1) blog hero and carousel work, (2) article grid displays all articles, (3) article detail page renders markdown with proper styling, (4) share buttons function, (5) Nextra's markdown processing works correctly.

### Blog Article Components

- [ ] T060 [P] [US4] Create ArticleCard component with gradient header, tag pills, title, excerpt, meta in components/ArticleCard.tsx
- [ ] T061 [P] [US4] Create BlogHero component with explanation text, CTAs, and featured article carousel in components/BlogHero.tsx
- [ ] T062 [US4] Implement carousel auto-rotation (5 seconds per article) in BlogHero with dot navigation for manual override

### Blog Listing Page

- [ ] T063 [US4] Update app/blog/page.tsx with BlogHero at top and ArticleCard grid below in /Users/frank/X/agentii-kit/app/blog/page.tsx
- [ ] T064 [US4] Add "Browse by topic" category cards grid to blog page (Development, Product, Marketing, Legal, Finance, Design, Ops)
- [ ] T065 [US4] Integrate Nextra blog-loader.ts to fetch all blog posts and map to ArticleCard props
- [ ] T066 [US4] Add gradient assignment logic based on article tags (map tags to color gradients)

### Article Detail Page

- [ ] T067 [US4] Update app/blog/[slug]/page.tsx with back link, article header, tag pills, share buttons in /Users/frank/X/agentii-kit/app/blog/[slug]/page.tsx
- [ ] T068 [US4] Add share button implementations (copy link to clipboard, Twitter share, LinkedIn share, email share) to article detail page
- [ ] T069 [US4] Update MarkdownRenderer component with dark theme prose classes in components/MarkdownRenderer.tsx
- [ ] T070 [US4] Update app/blog/layout.tsx to use new Navbar and Footer in /Users/frank/X/agentii-kit/app/blog/layout.tsx

### Blog Testing

- [ ] T071 [US4] Test blog hero carousel auto-rotation and manual dot navigation
- [ ] T072 [US4] Test article grid displays all existing MDX blog posts correctly
- [ ] T073 [US4] Test article detail page renders markdown correctly (headings, code blocks, lists, blockquotes)
- [ ] T074 [US4] Test share buttons functionality (copy link, open Twitter/LinkedIn/email)
- [ ] T075 [US4] Test back link navigation from article to /blog
- [ ] T076 [US4] Test mobile responsiveness on blog pages

**Checkpoint**: Blog listing and article detail pages are fully functional. Nextra content integration works correctly with new visual design.

---

## Phase 7: User Story 5 - About and Donate Pages (Priority: P5)

**Goal**: Users visit "/about" to learn about agentii-kit's mission, see education/work chips, view portfolio projects, read testimonials, and access contact methods. Users visit "/donate" to see project stats, understand what donations support, and access various payment methods.

**Independent Test**: Navigate to /about and /donate and verify: (1) all content sections appear correctly, (2) layout matches secondary frontend, (3) pages integrate with Nextra routing, (4) external links (payment methods) work.

### About Page

- [ ] T077 [US5] Create app/about directory for about page
- [ ] T078 [US5] Create app/about/page.tsx with mission section, education/work chips, portfolio cards, testimonials, contact info in /Users/frank/X/agentii-kit/app/about/page.tsx
- [ ] T079 [US5] Add "About" link to Navbar navigation (update components/Navbar.tsx)
- [ ] T080 [US5] Add placeholder content for portfolio project cards (2-3 example projects)
- [ ] T081 [US5] Test about page layout and all sections render correctly
- [ ] T082 [US5] Test mobile responsiveness on /about page

### Donate Page

- [ ] T083 [US5] Create app/donate directory for donation page
- [ ] T084 [US5] Create app/donate/page.tsx with two-column layout (stats left, payment methods right) in /Users/frank/X/agentii-kit/app/donate/page.tsx
- [ ] T085 [US5] Add project stats section (GitHub stars, contributors, downloads) with mock data
- [ ] T086 [US5] Add "What Your Donation Supports" list with icons (Active Development, Community Support, Infrastructure Costs)
- [ ] T087 [US5] Add donation amount tiers and payment method links (GitHub Sponsors, Buy Me a Coffee, Open Collective, PayPal)
- [ ] T088 [US5] Add "Donate" button to Navbar (should already exist from T024, verify link works)
- [ ] T089 [US5] Test donate page external payment links open in new tabs with proper rel attributes
- [ ] T090 [US5] Test mobile responsiveness on /donate page (two-column layout stacks on mobile)

### Navigation Integration

- [ ] T091 [US5] Update Footer to include links to /kits, /blog, /about (update components/Footer.tsx)
- [ ] T092 [US5] Test navigation flow: home → kits → blog → about → donate and back
- [ ] T093 [US5] Verify all pages show consistent Navbar and Footer

**Checkpoint**: About and Donate pages are complete. All 5 main pages are accessible and visually consistent.

---

## Phase 8: Polish & Cross-Cutting Concerns

**Purpose**: Final improvements, content updates, validation, and deployment testing

### Content Updates

- [ ] T094 [P] Add placeholder images to public/images/ for kits, about, and donate pages
- [ ] T095 [P] Verify all kit data in data/kits.ts has realistic descriptions and valid GitHub repo names
- [ ] T096 Update theme.config.jsx with new branding colors and logomark in /Users/frank/X/agentii-kit/theme.config.jsx

### Cleanup

- [ ] T097 Remove or hide ThemeToggle component (dark theme only, no toggle needed) in components/ThemeToggle.tsx
- [ ] T098 Remove app/docs directory if it exists (per user input, docs not needed)
- [ ] T099 [P] Update next.config.js if needed for static export configuration in /Users/frank/X/agentii-kit/next.config.js

### Validation & Testing

- [ ] T100 Run npm run validate-frontmatter to check all blog post frontmatter
- [ ] T101 Run npm run check-links to verify no broken links
- [ ] T102 Run npm run type-check to verify TypeScript types
- [ ] T103 Run npm run lint to check code quality
- [ ] T104 Run full build: npm run build and verify static export completes without errors
- [ ] T105 Test Vercel preview deployment (push to feature branch, verify Vercel auto-deploys)
- [ ] T106 Run Lighthouse audit on all 5 main pages (home, /kits, /blog, /about, /donate) and verify scores ≥90
- [ ] T107 Test Core Web Vitals: LCP <2.5s, FID <100ms, CLS <0.1 on all pages
- [ ] T108 Perform visual QA: side-by-side comparison of primary frontend with secondary frontend screenshots (target 90% consistency)
- [ ] T109 Test all user flows: discover kit → read article → donate (complete in <30 seconds)
- [ ] T110 Fix any Lighthouse performance issues, visual inconsistencies, or broken links identified

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Story 1 (Phase 3)**: Depends on Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (Phase 4)**: Depends on Foundational (Phase 2) and User Story 1 (T024-T027 from US1)
- **User Story 3 (Phase 5)**: Depends on Foundational (Phase 2) and User Story 1 (reuses components from US1)
- **User Story 4 (Phase 6)**: Depends on Foundational (Phase 2) and User Story 2 (uses Navbar/Footer from US2)
- **User Story 5 (Phase 7)**: Depends on Foundational (Phase 2) and User Story 2 (uses Navbar/Footer from US2)
- **Polish (Phase 8)**: Depends on all user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - Creates core components used by other stories
- **User Story 2 (P2)**: Requires Navbar and Footer from US1 (T024-T027) - Enhances navigation
- **User Story 3 (P3)**: Reuses FilterSidebar and KitsGrid from US1 - Extends kit catalog
- **User Story 4 (P4)**: Uses Navbar/Footer from US2 - Adds blog functionality
- **User Story 5 (P5)**: Uses Navbar/Footer from US2 - Adds about/donate pages

### Within Each User Story

**User Story 1**:
- T024-T027 (Core Layout) must complete before T039 (Landing Page Assembly)
- T028-T029 (Hero) can run in parallel with T030-T038 (other sections)
- T030-T038 (all section components) can mostly run in parallel (marked [P])
- T039 (Assembly) depends on all component tasks
- T040-T045 (Testing) run after assembly

**User Story 2**:
- T046-T047 (Navigation Enhancement) extend T024-T027 from US1
- T048-T051 (Testing) run after enhancements

**User Story 3**:
- T052-T054 (Page Creation) can run together
- T055 (Navbar update) can run in parallel with page creation
- T056-T059 (Testing) run after page creation

**User Story 4**:
- T060-T062 (Components) can run in parallel
- T063-T066 (Blog Listing) depends on T060-T062
- T067-T070 (Article Detail) can run in parallel with T063-T066
- T071-T076 (Testing) run after both listing and detail pages complete

**User Story 5**:
- T077-T082 (About Page) can run in parallel with T083-T090 (Donate Page)
- T091-T093 (Navigation Integration) run after both pages complete

### Parallel Opportunities

**Phase 2 (Foundational)**:
- T006-T007 (CSS updates) can run in parallel
- T010-T018 (UI primitives) can ALL run in parallel (different files)
- T020-T021 (Data layer) can run in parallel with UI primitives

**Phase 3 (User Story 1)**:
- T024-T026 (Navbar, Footer) can run in parallel
- T028 (FloatingTags) can run in parallel with T030-T037 (other components)
- T030, T031, T033, T034, T035, T036, T037, T038 can ALL run in parallel (different components)

**Phase 4 (User Story 2)**:
- T046-T047 can run together (same file)

**Phase 5 (User Story 3)**:
- T052-T055 can run in parallel

**Phase 6 (User Story 4)**:
- T060, T061 can run in parallel
- T063-T066 can run in parallel with T067-T070

**Phase 7 (User Story 5)**:
- T077-T082 (About) can run in parallel with T083-T090 (Donate)

**Phase 8 (Polish)**:
- T094, T095, T096 can run in parallel
- T098, T099 can run in parallel
- T100-T103 (validation commands) can run in parallel

---

## Parallel Example: User Story 1

```bash
# After Phase 2 completes, launch these User Story 1 tasks in parallel:

# Core Layout (can run together)
Task T024: "Create Navbar component in components/Navbar.tsx"
Task T025: "Add mobile menu to Navbar"
Task T026: "Create Footer component in components/Footer.tsx"

# Hero & Supporting (can run in parallel)
Task T028: "Create FloatingTags component in components/FloatingTags.tsx"
Task T029: "Create HeroSection in components/HeroSection.tsx" (depends on T028)

# Kit Components (can ALL run in parallel - different files)
Task T030: "Create KitCard in components/KitCard.tsx"
Task T031: "Create FilterSidebar in components/FilterSidebar.tsx"
Task T033: "Create FeaturedKits in components/FeaturedKits.tsx"
Task T034: "Create LatestKits in components/LatestKits.tsx"
Task T035: "Create RecentlyUpdatedTable in components/RecentlyUpdatedTable.tsx"

# Supporting Sections (can ALL run in parallel)
Task T036: "Create Testimonials in components/Testimonials.tsx"
Task T037: "Create UseCases in components/UseCases.tsx"
Task T038: "Create FeaturedArticles in components/FeaturedArticles.tsx"

# Then sequentially:
Task T032: "Create KitsGrid in components/KitsGrid.tsx" (depends on T030, T031)
Task T039: "Rewrite app/page.tsx to compose all sections" (depends on all components)
Tasks T040-T045: Testing (depends on T039)
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1 (Landing Page)
4. **STOP and VALIDATE**: Test User Story 1 independently
5. Deploy/demo if ready

This gives you a fully functional homepage with the new design - the primary entry point for all users.

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP - Homepage!)
3. Add User Story 2 → Test independently → Deploy/Demo (Navigation!)
4. Add User Story 3 → Test independently → Deploy/Demo (Kits Catalog!)
5. Add User Story 4 → Test independently → Deploy/Demo (Blog Redesign!)
6. Add User Story 5 → Test independently → Deploy/Demo (About & Donate!)
7. Complete Polish → Final validation → Production launch

Each story adds value without breaking previous stories.

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together (Phases 1-2)
2. Once Foundational is done, split work:
   - Developer A: User Story 1 (Landing Page - longest, most critical)
   - Developer B: Wait for US1 T024-T027, then start User Story 2 (Navigation)
   - Developer C: Wait for US1 components, then start User Story 3 (Kits Catalog)
3. After US1-3 complete:
   - Developer A: User Story 4 (Blog)
   - Developer B: User Story 5 (About & Donate)
   - Developer C: Start Phase 8 (Polish)
4. All developers collaborate on Phase 8 (Polish & Testing)

---

## Notes

- [P] tasks = different files, no dependencies, can run in parallel
- [Story] label maps task to specific user story for traceability (US1, US2, US3, US4, US5)
- Each user story should be independently completable and testable
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Build incrementally: Homepage → Navigation → Kits → Blog → About/Donate → Polish
- Maintain 90% visual consistency with secondary frontend (measured in Phase 8 T108)
- Preserve all Nextra infrastructure and SEO optimizations throughout implementation

---

## Success Metrics

After completing all phases, the following success criteria should be met:

- ✅ **SC-001**: All visual sections appear on homepage without layout breaks
- ✅ **SC-002**: Navigation across pages completes in <1 second
- ✅ **SC-003**: Kit filtering updates in <200ms
- ✅ **SC-004**: Kit card hover effects reveal in 150-250ms
- ✅ **SC-005**: Blog articles render markdown correctly with working share buttons
- ✅ **SC-006**: Mobile menu toggles smoothly
- ✅ **SC-007**: Website builds successfully (npm run build)
- ✅ **SC-008**: Lighthouse score ≥90, LCP <2.5s, FID <100ms, CLS <0.1
- ✅ **SC-009**: SEO validations pass (validate-frontmatter, check-links)
- ✅ **SC-010**: 90% visual consistency with secondary frontend
- ✅ **SC-011**: Primary task flows complete in <30 seconds
- ✅ **SC-012**: Blog carousel auto-rotates every 5 seconds
