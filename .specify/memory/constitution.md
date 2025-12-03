<!--
  CONSTITUTION SYNC IMPACT REPORT
  ================================
  Version Change: (Initial) → 1.0.0
  Ratification Date: 2025-12-03

  Added Principles:
  - I. Content-First (Markdown & Git-Driven)
  - II. SEO-Obsessed (Highest Priority)
  - III. Static Site Generation (Security & Performance)
  - IV. Admin-Only Publishing (Code Review Workflow)
  - V. Design Reference Separation (Two-Frontend Architecture)

  Added Sections:
  - Technology Stack & Dependencies
  - SEO & Performance Requirements
  - Content Management & Publishing
  - Deployment & Infrastructure

  Templates Updated:
  ✅ spec-template.md - Aligned with content-driven feature model
  ✅ plan-template.md - Updated for Nextra/Next.js context
  ✅ tasks-template.md - Aligned with content validation tasks

  Deferred: None - all placeholder tokens resolved
-->

# Agentii Blog & Documentation Platform Constitution

## Core Principles

### I. Content-First (Markdown & Git-Driven)

All blog posts and documentation MUST be authored in Markdown (.mdx files) with YAML frontmatter containing title, description, date, author, tags, and cover image. Content organization MUST follow date-based structure for blog posts (`content/blog/YYYY/MM/slug.mdx`) and topic-based structure for documentation (`content/docs/section/page.mdx`).

**Non-Negotiable Rules**:
- Every content file MUST have valid frontmatter (validated by `pnpm validate-frontmatter`)
- Title length: 10-60 characters; Description: 150-160 characters; Date format: YYYY-MM-DD
- All content changes flow through Git: feature branch → PR review → merge to main → auto-deploy
- No direct web UI publishing allowed—all changes require code review
- Draft posts marked with `draft: true` are excluded from production builds

**Rationale**: Markdown ensures portability, version control provides audit trails, Git-based workflow enables team review and maintains content integrity. This approach separates content authorship from deployment concerns.

---

### II. SEO-Obsessed (Highest Priority - FR-2)

SEO optimization is a tier-1 requirement, not an afterthought. Every page MUST include:
- Comprehensive meta tags (Open Graph, Twitter Card)
- JSON-LD BlogPosting schema for search engines
- Canonical URLs to prevent duplicate content penalties
- Proper heading hierarchy (H1 → H2 → H3)
- Image alt text on every image
- 150-160 character meta descriptions

**Non-Negotiable Rules**:
- Build process auto-generates XML sitemap (`/sitemap.xml`)
- Core Web Vitals targets: LCP <2.5s, FID <100ms, CLS <0.1
- Lighthouse score ≥90 on all pages (measured post-build)
- Blog/doc pages must be indexed (no robots.txt exclusions)
- RSS feed auto-generated for blog posts at `/feed.xml`

**Rationale**: Strong SEO drives organic discovery of Agentii kits. Structured metadata enables social sharing, RSS integration, and search engine crawlability. Performance targets ensure user engagement and reduce bounce rates.

---

### III. Static Site Generation (Security & Performance)

The platform MUST be built as a fully static site (no server-side rendering for dynamic content). Nextra + Next.js 14 handles SSG with built-in optimization. Client-side search powered by Pagefind enables full-text search without backend infrastructure.

**Non-Negotiable Rules**:
- Build output to `.next/out/` (static HTML, CSS, JS only)
- No server-side API endpoints (external APIs only for build-time data)
- Search index built and deployed as static JSON/wasm artifacts
- All assets (images, CSS, JS) served from CDN or static host
- Build process MUST complete in <60 seconds
- Search index generation MUST complete in <10 seconds

**Rationale**: Static sites are inherently secure (no code execution on server), fast (edge-cached HTML), and cheaply deployable (any static host). Vercel provides optimal support for Next.js static exports with edge caching.

---

### IV. Admin-Only Publishing (Code Review Workflow)

Content publishing is restricted to authorized team members via Git workflow. No bypasses allowed. Every piece of content must pass validation and review before production deployment.

**Non-Negotiable Rules**:
- All content changes require a Git pull request
- Pre-merge validation MUST pass: `pnpm validate-frontmatter && pnpm check-links && pnpm type-check && pnpm lint`
- At least one team member code review required before merge
- Vercel auto-creates preview deployments for all PRs (for content review)
- Merge to `main` triggers automatic production deployment
- Draft posts (`draft: true`) never published to production

**Rationale**: This workflow ensures quality, accuracy, and consistency. The PR + review process allows team coordination and catches errors before public visibility. Preview deployments enable stakeholders to review content in a live context.

---

### V. Design Reference Separation (Two-Frontend Architecture)

This project intentionally maintains two separate frontend repositories:
1. **Primary (repo root)**: Nextra blog/docs platform - **final deployment target**
2. **Secondary (`spec-kit-hub-main/`)**: Lovable.dev design reference - **design/layout inspiration only**

The secondary frontend serves as design guidance and is NOT deployed to production.

**Non-Negotiable Rules**:
- Primary frontend (`repo root`) is the canonical production source
- All production deployments use primary frontend code only
- Design patterns and graphics from secondary frontend MAY be adapted into primary (manual copy/reimplementation)
- No automatic sync or automation between frontends
- Technology stack from primary frontend determines actual dependencies

**Rationale**: Dual-frontend setup separates concerns: Lovable.dev excels at rapid UI prototyping, Nextra excels at content platforms. This avoids framework conflicts (Vite vs Next.js) while leveraging each tool's strengths. The primary frontend remains clean, focused, and independently deployable.

---

## Technology Stack & Dependencies

**Mandatory Stack** (changes require constitution amendment):

| Component | Technology | Version | Rationale |
|-----------|-----------|---------|-----------|
| Framework | Next.js | ^14.0.0 | SSG, edge optimization, Vercel native |
| React | React | ^18.2.0 | Component model for dynamic content |
| Content | Nextra | ^4.6.0 | Markdown-first, built-in blog/docs themes |
| Styling | Tailwind CSS | ^3.3.0 | Utility-first, design tokens, dark theme support |
| Search | Pagefind | ^1.0.0 | Client-side full-text search, no backend |
| Markdown | @mdx-js | ^3.0.0 | React components inside Markdown |
| Highlighting | rehype-highlight | ^6.1.0 | Syntax highlighting for code blocks |
| Formatting | remark-gfm | ^3.0.0 | GitHub Flavored Markdown support |
| RSS | rss | ^1.2.0+ | Blog feed auto-generation |
| Language | TypeScript | ^5.3.0 | Type safety, error detection at build time |
| Package Manager | pnpm | ^8.0.0 | Fast, efficient monorepo support |

**Prohibited Technologies**:
- Server-side rendering (SSR) for dynamic content
- Database engines (use static files or headless CMS build-time data only)
- Third-party analytics cookies (Plausible Analytics: privacy-first, no cookies required)
- Backend API server (use static build-time data only)

**Rationale**: This stack is optimized for content platforms. Nextra handles blog/docs structure, Next.js provides SSG infrastructure, Pagefind enables rich search. Stack changes require constitutional amendment to maintain consistency.

---

## SEO & Performance Requirements

**SEO Deliverables** (all MANDATORY):
- Open Graph meta tags for social sharing (og:title, og:description, og:image, og:url, og:type)
- Twitter Card tags for Twitter sharing (twitter:card, twitter:title, twitter:description, twitter:image)
- JSON-LD BlogPosting schema (headline, description, datePublished, dateModified, author, image)
- XML sitemap auto-generated at `/sitemap.xml` (indexed, no noindex tags)
- `robots.txt` at root with crawl directives (allow all by default)
- Canonical URLs on every page (prevent duplicate indexing)
- Heading hierarchy validation (only one H1 per page, proper H2→H3 nesting)
- Image alt text on every image (accessibility + SEO)

**Performance Targets** (all MANDATORY, measured post-build):
- Lighthouse Score: ≥90 on all pages (run lighthouse CLI on final output)
- Largest Contentful Paint (LCP): <2.5 seconds
- First Input Delay (FID): <100 milliseconds
- Cumulative Layout Shift (CLS): <0.1
- Build time: <60 seconds (from `pnpm build` to `.next/out/` ready)
- Search index generation: <10 seconds (Pagefind indexing)
- Page load size: <200 KB initial HTML + CSS (measured uncompressed)

**Validation Commands** (MUST run before any PR merge):
```bash
pnpm validate-frontmatter   # Check title, description, date, author, tags
pnpm check-links            # Broken link detection
pnpm type-check             # TypeScript validation
pnpm lint                   # ESLint rules
pnpm build                  # Full production build
```

**Rationale**: SEO drives discovery of Agentii kits on organic search. Performance targets reduce bounce rates and improve user satisfaction. Validation gates prevent regressions.

---

## Content Management & Publishing

**Blog Post Structure**:
- Location: `content/blog/YYYY/MM/slug.mdx` (date-organized)
- Frontmatter required: title, description, date, author, tags, cover image, featured, draft flags
- Featured posts appear on blog homepage; draft posts excluded from production
- Tag system enables categorization and filtering
- Author profiles stored in `content/blog/authors/` as JSON

**Documentation Structure**:
- Location: `content/docs/section/page.mdx` (topic-organized)
- Sections: getting-started, concepts, intelligence-hub, agent-workbench, agents, etc.
- Navigation configured via `content/_meta.json` (Nextra standard)
- No featured/draft flags for docs (all published docs are live)

**Publishing Workflow**:
1. Author creates feature branch: `git checkout -b blog/my-post` or `git checkout -b docs/my-section`
2. Author writes/edits `.mdx` file with valid frontmatter
3. Author runs validation: `pnpm validate-frontmatter && pnpm check-links`
4. Author commits: `git commit -m "Add: Post title or Doc section title"`
5. Author pushes: `git push origin [branch-name]`
6. Author creates Pull Request on GitHub
7. Vercel auto-creates preview deployment (content team reviews)
8. Team approves and merges PR
9. Merge to `main` triggers automatic production deployment to kits.agentii.ai

**Content Quality Gates**:
- Title: 10-60 characters (prevents truncation in search results)
- Description: 150-160 characters (optimal for meta tags)
- Date format: YYYY-MM-DD (ISO standard, machine-readable)
- Tags: lowercase, hyphenated (e.g., `agentic-framework`, `open-source`)
- Cover images: JPEG or PNG, optimized for web (<500 KB)
- Links: MUST be valid (check-links validation prevents 404s)
- Frontmatter: MUST be valid YAML (no parse errors)

**Rationale**: Git-based workflow maintains version history and enables team review. Validation gates ensure consistency and catch errors pre-publication. Quality standards improve SEO and user experience.

---

## Deployment & Infrastructure

**Primary Deployment Target**: Vercel.com (recommended)

**Deployment Process**:
1. Push to `main` branch (via PR merge)
2. Vercel webhook triggered automatically
3. Vercel runs `pnpm build` and `pnpm generate-sitemap`
4. Static output deployed to edge nodes (auto-cached)
5. Deployed at: `kits.agentii.ai`
6. Preview deployments available at Vercel-generated URLs for all PRs

**Environment Variables** (required in `.env.local` and Vercel project settings):
```env
NEXT_PUBLIC_SITE_URL=https://kits.agentii.ai
```

**Alternative Deployment** (for manual deployment):
```bash
pnpm build                   # Build to .next/out/
# Deploy .next/out/ contents to any static host (GitHub Pages, AWS S3, Netlify, etc.)
```

**Analytics**:
- Plausible Analytics integration (privacy-first, GDPR-compliant)
- No cookies, no user tracking
- All tracking code is read-only (cannot modify user data)

**Monitoring**:
- Post-deploy: Run Lighthouse CLI on production URLs (target ≥90 score)
- Monitor Core Web Vitals via Vercel Analytics dashboard
- Check RSS feed validity with online validators

**Rationale**: Vercel provides seamless Next.js SSG support, automatic edge caching, and PR preview deployments. Plausible respects user privacy while providing insights.

---

## Governance

**Amendment Procedure**:
1. Any team member may propose a constitution amendment (create an issue or discussion)
2. Proposal MUST include: rationale, affected principles, migration plan
3. Team consensus required before amendment (code review model)
4. Amendment MUST update version number (semantic versioning)
5. Amendment MUST include "Sync Impact Report" documenting all changes
6. All dependent templates (spec, plan, tasks) MUST be updated for alignment

**Version Numbering** (Semantic Versioning):
- **MAJOR**: Backward-incompatible changes (principle removal/redefinition, tech stack overhaul)
- **MINOR**: New principle added, guidance expanded, new section introduced
- **PATCH**: Clarifications, wording fixes, typo corrections, non-semantic refinements

**Compliance & Review**:
- Every PR MUST verify compliance with this constitution
- Constitution Check gate: All new features and changes must align with stated principles
- Complexity violations MUST be explicitly justified in PR description
- Principle violations block merge until approved by team lead

**Guidance & Defaults**:
- Runtime guidance: See `README.md` for setup instructions and scripts
- Content authoring guide: See `QUICKSTART.md` for detailed content creation steps
- Troubleshooting: See `README.md` Troubleshooting section

**Version**: 1.0.0 | **Ratified**: 2025-12-03 | **Last Amended**: 2025-12-03
