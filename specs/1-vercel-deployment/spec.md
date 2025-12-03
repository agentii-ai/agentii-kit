# Feature Specification: Vercel Deployment & Configuration

**Feature Branch**: `1-vercel-deployment`
**Created**: 2025-12-03
**Status**: Draft
**Input**: User description: "the primary nextra blog and docs are tested working, now the whole next round of work is getting the repo up in vercel.com, i just tried but there are still bugs. so generate spec.md and plan.md for the vercel deploy"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Resolve Deployment Bugs (Priority: P1)

A DevOps engineer or developer attempts to deploy the Agentii blog platform to Vercel and encounters deployment failures or misconfigurations. They need to identify root causes, resolve build errors, fix environment configuration issues, and verify the deployment succeeds end-to-end with all content, styling, and search functionality working correctly.

**Why this priority**: Without successful deployment, the platform cannot reach users. This is the blocking issue preventing production availability.

**Independent Test**: Can be fully tested by attempting a full Vercel deployment from the current main branch and verifying:
1. Build completes successfully (<60 seconds)
2. Site loads without errors at the Vercel preview/production URL
3. All pages render correctly (blog, docs, homepage)
4. Search functionality works
5. Images load properly
6. No console errors or warnings
7. RSS feed is accessible

**Acceptance Scenarios**:

1. **Given** the repository is connected to Vercel, **When** a commit is pushed to main, **Then** Vercel auto-triggers a build and deployment completes successfully
2. **Given** a user visits the deployed site at kits.agentii.ai, **When** the page loads, **Then** content renders without 404s or build errors
3. **Given** a user navigates to any blog post, **When** the page loads, **Then** all meta tags, images, and content display correctly
4. **Given** a user uses the search feature, **When** they type a query, **Then** Pagefind returns results without errors

---

### User Story 2 - Configure Production Environment (Priority: P1)

A project administrator needs to configure Vercel project settings, environment variables, build parameters, and deployment preferences to match production requirements (site URL, analytics integration, build optimization).

**Why this priority**: Required before launch. Incorrect configuration prevents SEO indexing, breaks analytics, and may serve incorrect site URLs in meta tags.

**Independent Test**: Can be fully tested by verifying Vercel project settings match specification and testing each configuration element independently:
1. Environment variables are set correctly
2. Build command runs successfully with configured parameters
3. SEO elements (meta tags, sitemap) reflect correct site URL
4. Analytics tracking (if enabled) functions correctly
5. Custom domain (if configured) resolves properly

**Acceptance Scenarios**:

1. **Given** Vercel environment variables are configured, **When** a build runs, **Then** the site uses the correct NEXT_PUBLIC_SITE_URL
2. **Given** the custom domain is configured (or default Vercel domain), **When** a user visits the site, **Then** the canonical URL and OG meta tags reflect the correct domain
3. **Given** environment variables include analytics configuration, **When** the site loads, **Then** Plausible Analytics (if enabled) tracks page views
4. **Given** build settings are configured, **When** Vercel builds the project, **Then** it uses the correct build command and output directory

---

### User Story 3 - Validate Post-Deployment Quality (Priority: P2)

A QA engineer or project lead verifies that the deployed site meets all constitutional requirements: SEO optimization, performance targets, content integrity, and functionality.

**Why this priority**: Ensures quality and compliance before production use. Important but not blocking initial deployment.

**Independent Test**: Can be fully tested by running automated validation tools against the production deployment:
1. Lighthouse score e90 on multiple pages
2. Core Web Vitals meet targets (LCP, FID, CLS)
3. Sitemap.xml is generated and valid
4. All meta tags present and correct
5. No broken links in deployed content
6. RSS feed is valid and accessible
7. Search functionality works end-to-end

**Acceptance Scenarios**:

1. **Given** the site is deployed to production, **When** Lighthouse is run, **Then** score is e90 on all main pages
2. **Given** the site is deployed, **When** Core Web Vitals are checked, **Then** LCP <2.5s, FID <100ms, CLS <0.1
3. **Given** the site is deployed, **When** /sitemap.xml is accessed, **Then** it contains all blog posts and doc pages
4. **Given** the site is deployed, **When** a user opens developer tools, **Then** no console errors are present

---

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST successfully build the Next.js project without errors when triggered by Vercel or manual `pnpm build` command
- **FR-002**: System MUST output static HTML/CSS/JS to `.next/out/` directory during build
- **FR-003**: System MUST auto-generate and include XML sitemap at `/sitemap.xml` during build process
- **FR-004**: System MUST auto-generate and include RSS feed at `/feed.xml` for blog posts during build
- **FR-005**: System MUST correctly resolve environment variable `NEXT_PUBLIC_SITE_URL` and inject it into meta tags during build
- **FR-006**: System MUST serve all blog and documentation content without 404 errors when deployed
- **FR-007**: System MUST load all images, stylesheets, and JavaScript bundles correctly from deployed CDN/server
- **FR-008**: System MUST enable client-side search via Pagefind without errors
- **FR-009**: Vercel project MUST be configured with correct build command (`pnpm build`)
- **FR-010**: Vercel project MUST be configured with correct output directory (`.next/out/`)
- **FR-011**: Vercel project MUST have NEXT_PUBLIC_SITE_URL environment variable set to production domain
- **FR-012**: Vercel project MUST have Node.js runtime configured to v18+ to support pnpm
- **FR-013**: System MUST include proper Open Graph and Twitter Card meta tags referencing correct site URL
- **FR-014**: System MUST include JSON-LD structured data (BlogPosting schema) on all blog/doc pages

### Edge Cases

- What happens when build exceeds 60 seconds? (Build should fail with timeout error; requires optimization)
- What happens if environment variables are missing? (Build should fail with clear error message)
- What happens if images are broken or missing? (Build should warn; deploy should still succeed but pages show missing image placeholder)
- What happens if RSS feed generation fails? (Build should warn; feed.xml should not be served, feed discovery should fail gracefully)
- What happens if Pagefind index fails to generate? (Search should gracefully disable; site should still be usable without search)

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Deployment to Vercel succeeds within 60 seconds without errors on first attempt
- **SC-002**: All pages load without 404 errors or console errors when accessed via Vercel preview/production URL
- **SC-003**: Lighthouse performance score is e90 on all main pages (homepage, blog index, doc index, sample posts)
- **SC-004**: Core Web Vitals meet targets: LCP <2.5s, FID <100ms, CLS <0.1 on production URL
- **SC-005**: Sitemap.xml is generated and contains e90% of all published pages (false negatives acceptable, false positives not)
- **SC-006**: RSS feed is valid (passes RSS validator) and contains all featured blog posts
- **SC-007**: Search functionality works: typing a query returns results within 1 second
- **SC-008**: All meta tags (og:title, og:description, og:image, twitter:card, canonical) are present and correct on all pages
- **SC-009**: Custom domain (if applicable) resolves correctly and canonical URLs reflect the custom domain
- **SC-010**: Build is reproducible: running `pnpm build` locally produces identical output to Vercel build

## Assumptions

- Vercel account exists and project is already created/connected to GitHub repository
- GitHub repository is public or Vercel has access to private repository
- Node.js v18+ runtime is available (Vercel default supports this)
- pnpm is compatible with Vercel build environment (standard for Next.js projects)
- DNS/domain is already configured for kits.agentii.ai (or will be in parallel)
- Nextra blog/docs content is functional locally (verified working per user input)
- No additional backend services are required (static-only deployment)

## Open Questions (for clarification if needed)

- **Q1**: Should we configure preview deployments for all PRs or only for main branch?
  - **Assumed Answer**: Preview deployments should be enabled for all PRs (standard practice for content review)

- **Q2**: Should Vercel's built-in analytics or edge functions be enabled, or should we use external analytics only (Plausible)?
  - **Assumed Answer**: Use Plausible Analytics (privacy-first, already referenced in constitution); disable Vercel Analytics to reduce costs

- **Q3**: Should we set up custom error pages (404.html, 500.html) or use Vercel defaults?
  - **Assumed Answer**: Use Vercel defaults initially; add custom error pages in future enhancement if needed

## Key Entities

- **Vercel Project**: Configuration, build settings, environment variables, deployment logs, preview URLs
- **Environment Configuration**: NEXT_PUBLIC_SITE_URL, analytics settings, feature flags
- **Build Artifacts**: .next/out/ directory, sitemap.xml, feed.xml, search index
- **Deployment Status**: Build success/failure, page load performance, error logs

## Dependencies & Constraints

**Dependencies**:
- GitHub repository connected to Vercel
- Node.js v18+ runtime
- pnpm package manager
- All Nextra dependencies (already installed locally)

**Constraints**:
- Build must complete in <60 seconds (per constitution)
- Static-only output (no server-side rendering)
- No additional backend services allowed
- Build must pass pre-deployment validation: `pnpm validate-frontmatter && pnpm check-links && pnpm type-check && pnpm lint`

## Out of Scope

- Custom error pages or 404 page design (use defaults)
- Advanced Vercel features (edge functions, middleware, API routes)
- DNS configuration or custom domain setup (assume completed separately)
- Content creation or blog post authoring
- Design changes to Nextra theme
