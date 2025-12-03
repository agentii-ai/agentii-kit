# Implementation Plan: Vercel Deployment & Configuration

**Branch**: `1-vercel-deployment` | **Date**: 2025-12-03 | **Spec**: [specs/1-vercel-deployment/spec.md](../spec.md)

**Input**: Feature specification from `/specs/1-vercel-deployment/spec.md`

## Summary

Deploy the Agentii Blog & Documentation platform to Vercel successfully and configure production environment settings. The Nextra blog/docs platform is functioning locally but encounters build or configuration issues when deploying to Vercel. This plan identifies likely root causes (missing Vercel configuration, incorrect build output settings, environment variable issues, pnpm runtime compatibility), resolves them systematically, validates deployment quality, and ensures all constitutional requirements (SEO, performance, static generation) are met.

---

## Technical Context

**Language/Version**: JavaScript/TypeScript (Node.js 18+)
**Primary Dependencies**: Next.js 14, Nextra 4.6, React 18, Tailwind CSS, Pagefind, @mdx-js
**Storage**: Static files only (no database)
**Testing**: Lighthouse CLI, browser manual validation
**Target Platform**: Vercel edge platform (CDN + static hosting)
**Project Type**: Static website (SSG, no SSR)
**Performance Goals**: Build <60s, LCP <2.5s, Lighthouse ≥90, search results <1s
**Constraints**: Static-only output, no server-side code execution, <200 KB initial HTML/CSS
**Scale/Scope**: Single frontend application, ~50 blog posts, ~20 doc pages, global CDN distribution

---

## Constitution Check

**Gate Status**: ✅ **PASS** (No violations)

This feature aligns with all constitutional principles:

1. ✅ **Content-First**: Deployment preserves all Markdown content and frontmatter validation
2. ✅ **SEO-Obsessed**: Plan includes sitemap generation, meta tag validation, Lighthouse verification
3. ✅ **Static Site Generation**: Plan configures `.next/out/` output, no SSR, Pagefind index included
4. ✅ **Admin-Only Publishing**: Plan assumes Git+PR workflow already enforced in code
5. ✅ **Design Reference Separation**: Plan uses only primary frontend (repo root)

**Technology Stack Verification**: Plan uses exactly the mandated stack (Next.js 14, Nextra 4.6, Tailwind, Pagefind, TypeScript, pnpm). No prohibited technologies (SSR, databases, backend APIs, analytics cookies).

---

## Project Structure

### Documentation (this feature)

```
specs/1-vercel-deployment/
├── plan.md                     # This file (/speckit.plan command output)
├── spec.md                     # User stories and requirements
├── checklists/
│   └── requirements.md         # Specification quality checklist ✅ PASS
├── research.md                 # [TO BE CREATED] Phase 0 research findings
├── data-model.md               # [N/A] No data model for deployment config
├── quickstart.md               # [TO BE CREATED] Deployment walkthrough
└── contracts/                  # [N/A] No API contracts for static site
```

### Source Code (repository root)

```
repo/
├── app/                        # Next.js App Router
│   ├── blog/                   # Blog routes
│   ├── docs/                   # Doc routes
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Homepage
│   └── globals.css             # Global styles
├── content/
│   ├── blog/                   # Blog posts (.mdx + frontmatter)
│   ├── docs/                   # Documentation
│   └── _meta.json              # Navigation config
├── components/                 # React components
├── lib/                        # Utilities (content, validation, metadata)
├── public/                     # Static assets
│   ├── images/                 # Blog/doc images
│   └── og-images/              # OG social previews
├── scripts/                    # Build scripts
│   ├── validate-frontmatter.ts
│   ├── check-links.ts
│   ├── generate-sitemap.ts
│   └── generate-rss.ts
├── next.config.js              # Next.js configuration
├── theme.config.jsx            # Nextra theme config
├── package.json                # Dependencies & scripts
├── tsconfig.json               # TypeScript config
├── vercel.json                 # [TO CREATE] Vercel project config
├── .env.local                  # [TO CREATE] Local env vars
└── .env.production             # [TO CREATE] Production env vars (Vercel)
```

**Structure Decision**: Single project structure used (repo root = primary frontend only). All Nextra/Next.js files in standard locations. No backend or mobile apps. Secondary Lovable.dev reference frontend (`spec-kit-hub-main/`) is explicitly excluded from deployment scope per constitutional principle V.

---

## Complexity Tracking

> No Constitution Check violations. No complexity justification needed.

---

## Phase 0: Research & Diagnosis

**Purpose**: Identify specific deployment bugs and root causes

### Tasks

#### T001 - Analyze Current Deployment Status
- Check Vercel project settings (or create if missing)
- Review recent Vercel build logs for error messages
- Note any 404s, timeout errors, or failed builds
- Document current build duration vs. target (<60s)

**Output**: Deployment status report with identified bugs

#### T002 - Verify Local Build & Configuration
- Run `pnpm build` locally to confirm successful build
- Verify `.next/out/` directory is created and contains static files
- Test local build output: `pnpm start` (or serve `.next/out/` with static server)
- Confirm all pages load: homepage, blog index, sample blog post, doc page
- Verify images, CSS, JavaScript load correctly

**Output**: Confirmation that local build is production-ready

#### T003 - Check Next.js Configuration
- Review `next.config.js` for Vercel compatibility
- Verify export configuration (static export enabled)
- Check image optimization settings
- Review rewrite/redirect rules

**Output**: next.config.js analysis and any required fixes

#### T004 - Check Nextra Theme Configuration
- Review `theme.config.jsx` for any dynamic content that breaks static generation
- Verify blog/docs routes are static-compatible
- Check for any server-side APIs or dynamic imports

**Output**: theme.config.jsx compatibility report

#### T005 - Research Known Issues
- Search Nextra GitHub issues for Vercel deployment problems
- Check Next.js 14 SSG documentation for compatibility notes
- Review Pagefind + Next.js 14 integration patterns
- Document any required patches or workarounds

**Output**: Known issues document with solutions

---

## Phase 1: Configuration & Environment Setup

**Purpose**: Configure Vercel project and environment variables correctly

### Tasks

#### T006 - Create Vercel Configuration File
- Create `vercel.json` with:
  - Build command: `pnpm build`
  - Output directory: `.next/out/`
  - Install command: `pnpm install --frozen-lockfile`
  - Node.js version: 18.x (or latest LTS)
  - Functions region settings (if applicable)

**Output**: vercel.json file ready for Vercel

#### T007 - Configure Environment Variables (Vercel)
- In Vercel project settings, set NEXT_PUBLIC_SITE_URL: `https://kits.agentii.ai` (or Vercel preview domain)
- Verify any other required env vars (analytics, feature flags)
- Test that env vars are available during build

**Output**: Verified environment variable configuration in Vercel dashboard

#### T008 - Configure Build Settings (Vercel)
- Set Node.js version to 18.x+ in Vercel
- Enable pnpm package manager in Vercel settings
- Disable Vercel Analytics (use Plausible only per constitution)
- Set install command: `pnpm install --frozen-lockfile`

**Output**: Vercel project settings configured and verified

#### T009 - Create Local Environment Variables
- Create `.env.local` with `NEXT_PUBLIC_SITE_URL=http://localhost:3000` for local development
- Create `.env.production` with `NEXT_PUBLIC_SITE_URL=https://kits.agentii.ai` for production
- Verify local dev server uses correct env vars: `pnpm dev`

**Output**: .env.local and .env.production files configured

#### T010 - Update package.json Build Scripts (if needed)
- Verify `pnpm build` completes without errors
- If needed, add post-build script for sitemap generation: `generate-sitemap.ts`
- If needed, add post-build script for RSS generation: `generate-rss.ts`
- Ensure all build artifacts (sitemap.xml, feed.xml) are in `.next/out/`

**Output**: Verified package.json build scripts

---

## Phase 2: Bug Resolution

**Purpose**: Resolve identified deployment bugs and build issues

### Tasks

#### T011 - Fix Build Output Directory
- Ensure `next.config.js` exports to `.next/out/` (not default `.next/`)
- Add `export: true` or equivalent config if needed
- Run `pnpm build` and verify `.next/out/` contains all static files

**Output**: Correct Next.js export configuration

#### T012 - Resolve Image Handling Issues (if applicable)
- Verify all images in `public/images/` are referenced correctly
- Check for any external image CDN issues
- Ensure `next.config.js` image optimization settings are Vercel-compatible
- Test image loading on deployed preview

**Output**: Image loading verified on preview deployment

#### T013 - Fix Sitemap Generation (if not running)
- Verify `scripts/generate-sitemap.ts` exists and is executable
- Ensure build script calls `generate-sitemap.ts` after main build
- Verify `sitemap.xml` is created in `.next/out/` during build
- Manually verify sitemap.xml is valid and complete

**Output**: sitemap.xml generated and included in build artifacts

#### T014 - Fix RSS Feed Generation (if not running)
- Verify `scripts/generate-rss.ts` exists and is executable
- Ensure build script calls `generate-rss.ts` after main build
- Verify `feed.xml` is created in `.next/out/` during build
- Manually verify feed.xml is valid (use RSS validator)

**Output**: feed.xml generated and included in build artifacts

#### T015 - Resolve Pagefind Search Index Issues (if applicable)
- Verify Pagefind is installed: `npm ls pagefind`
- Check `package.json` for Pagefind indexing script
- Run indexing locally and verify search works
- Ensure search index is included in `.next/out/`

**Output**: Pagefind search functioning on local and preview deployments

#### T016 - Fix Meta Tags & SEO Elements
- Verify all pages include Open Graph meta tags (og:title, og:description, og:image, og:url)
- Verify canonical URLs are set correctly using environment variable
- Verify JSON-LD BlogPosting schema is present on all blog/doc pages
- Verify Twitter Card tags are present

**Output**: All meta tags verified correct on production domain

#### T017 - Debug Build Timeouts (if exceeding 60s limit)
- Profile build with `time pnpm build`
- Identify slowest phase (Nextra compilation, image optimization, etc.)
- Optimize if needed (lazy loading, image compression)
- If optimization insufficient, document and plan Phase 2 enhancement

**Output**: Build completes within 60 seconds or documented optimization plan

---

## Phase 3: Deployment Validation

**Purpose**: Deploy to production and verify all requirements met

### Tasks

#### T018 - Deploy to Vercel Preview
- Push branch to GitHub (creates automatic Vercel preview)
- Wait for build to complete
- Review Vercel build logs for any warnings/errors
- Test preview deployment thoroughly

**Output**: Successful preview deployment verified

#### T019 - Verify All Pages Load on Preview
- Access homepage, blog index, doc index
- Click through multiple blog posts and doc pages
- Verify all images load
- Open browser DevTools console and confirm no errors
- Test on mobile viewport to confirm responsive design

**Output**: All pages load correctly on preview URL without errors

#### T020 - Test Search Functionality
- Use Pagefind search on preview deployment
- Search for keywords that should exist (e.g., "agent", "agentic")
- Verify results appear within 1 second
- Verify result links are correct

**Output**: Search functionality working end-to-end on preview

#### T021 - Verify Meta Tags & OG Images
- Use OG image preview tool (e.g., metatags.io) on production URLs
- Verify og:title, og:description, og:image are correct and match preview domain
- Verify Twitter Card preview
- Manually inspect HTML source for canonical URL

**Output**: Meta tags and OG images verified correct for production domain

#### T022 - Verify Sitemap & Feeds on Preview
- Access `https://[preview-url]/sitemap.xml` and verify valid XML
- Verify sitemap contains all blog posts and doc pages
- Access `https://[preview-url]/feed.xml` and verify valid RSS
- Verify feed contains all featured blog posts

**Output**: Sitemap and RSS feeds accessible and valid on preview

#### T023 - Run Lighthouse on Preview
- Use Lighthouse CLI or web tool on multiple pages:
  - Homepage
  - Blog index
  - Sample blog post
  - Sample doc page
- Verify score ≥90 on all pages
- Document any performance warnings
- If warnings exist, create future enhancement tickets

**Output**: Lighthouse audit report showing ≥90 on all pages

#### T024 - Verify Core Web Vitals
- Check Vercel Analytics for Core Web Vitals (if enabled)
- Or use Chrome DevTools to manually measure on preview
- Verify LCP <2.5s, FID <100ms, CLS <0.1
- Document any metrics that exceed targets

**Output**: Core Web Vitals verified within targets

#### T025 - Deploy to Production
- Merge branch to `main` branch (or manually trigger production deployment)
- Wait for Vercel production build to complete
- Review production build logs
- Verify no warnings or errors

**Output**: Successful production deployment

#### T026 - Final Production Validation
- Access production URL (kits.agentii.ai or Vercel domain)
- Repeat all tests from T019-T024 on production
- Verify DNS/domain resolves correctly (if custom domain)
- Verify canonical URLs reference production domain (not preview)

**Output**: All validation tests passing on production URL

---

## Phase 4: Documentation & Cleanup

**Purpose**: Document deployment process and create runbooks for future maintenance

### Tasks

#### T027 - Create Deployment Quickstart Guide
- Document steps to deploy to Vercel
- Include troubleshooting tips for common issues
- Include monitoring and health check procedures
- Save as `specs/1-vercel-deployment/quickstart.md`

**Output**: quickstart.md guide for deployment team

#### T028 - Document Known Issues & Solutions
- List any issues encountered and how they were resolved
- Document any workarounds or customizations
- Include links to Vercel/Nextra documentation
- Save as `specs/1-vercel-deployment/known-issues.md`

**Output**: known-issues.md reference guide

#### T029 - Update README.md Deployment Section
- Add Vercel deployment instructions to main README
- Link to vercel.json configuration
- Include environment variable setup steps
- Include post-deployment validation checklist

**Output**: Updated README.md with deployment instructions

#### T030 - Clean Up Local Artifacts
- Remove any temporary debug files
- Ensure `.env.local` and `.env.production` are in `.gitignore`
- Verify no secrets are committed to repository

**Output**: Repository clean and ready for ongoing development

---

## Dependencies & Execution Order

### Phase Dependencies

- **Phase 0 (Research)**: No dependencies - can start immediately
- **Phase 1 (Configuration)**: Depends on Phase 0 findings
- **Phase 2 (Bug Resolution)**: Depends on Phase 1 completion - BLOCKS production deployment
- **Phase 3 (Validation)**: Depends on Phase 2 completion
- **Phase 4 (Documentation)**: Depends on successful Phase 3 deployment

### Execution Sequence

```
Phase 0: Research (Tasks T001-T005)
    ↓ [Findings inform Phase 1]
Phase 1: Configuration (Tasks T006-T010)
    ↓ [Configuration ready, proceed to bug fixes]
Phase 2: Bug Resolution (Tasks T011-T017)
    ↓ [Build working, test on preview]
Phase 3: Validation (Tasks T018-T026)
    ↓ [All validation passed, production ready]
Phase 4: Documentation (Tasks T027-T030)
    ↓ [Deployment complete]
🎉 Production deployment successful
```

### Parallel Opportunities Within Phases

- Phase 0: T001-T005 can run in parallel (all investigation)
- Phase 1: T006-T010 can run in parallel (all configuration)
- Phase 2: T011-T016 can run in parallel if bugs are independent
- Phase 3: T018-T024 run sequentially (preview → validation → production)

---

## Risk Mitigation

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|-----------|
| Build times exceed 60s | Medium | High | Profile build in Phase 0; optimize images/lazy-load in Phase 2 |
| Meta tags/OG images incorrect | Medium | High | Verify env var injection; test with OG preview tools before merging |
| Search index not generated | Low | Medium | Verify Pagefind script runs in build; test locally first |
| CSS/images fail to load | Low | High | Test on preview before production; verify CDN paths in next.config.js |
| RSS feed malformed | Low | Low | Validate with RSS validator before production |
| Performance degradation post-deploy | Low | Medium | Run Lighthouse before merging; monitor metrics post-deploy |

---

## Success Criteria Mapping

| Success Criterion | Addressed By | Validation Task |
|------------------|-------------|-----------------|
| SC-001: Deploy within 60s | Phase 2 (T017), Phase 3 (T025) | Monitor build duration in Vercel logs |
| SC-002: No 404s or errors | Phase 3 (T019, T026) | Manual page testing + browser console |
| SC-003: Lighthouse ≥90 | Phase 3 (T023) | Run Lighthouse CLI on all main pages |
| SC-004: Core Web Vitals met | Phase 3 (T024) | Check LCP, FID, CLS metrics on preview |
| SC-005: Sitemap 90% coverage | Phase 2 (T013), Phase 3 (T022) | Verify sitemap.xml contains all pages |
| SC-006: RSS feed valid | Phase 2 (T014), Phase 3 (T022) | Validate feed.xml with RSS validator |
| SC-007: Search results <1s | Phase 3 (T020) | Manual timing of search queries |
| SC-008: Meta tags present | Phase 2 (T016), Phase 3 (T021) | Verify HTML source and OG preview tool |
| SC-009: Custom domain resolves | Phase 3 (T026) | DNS lookup and URL access test |
| SC-010: Build reproducible | Phase 1 (T010), Phase 3 (T025) | Compare local vs Vercel build outputs |

---

## Notes

- All tasks are actionable and independently testable
- Research phase (Phase 0) should identify specific bugs before starting fixes
- Preview deployments are critical validation gate before production merge
- Constitution compliance verified at start (no violations)
- Documentation serves as runbook for future deployments
- Monitor post-deployment metrics continuously for first week

---

**Next Steps**:

1. Run `/speckit.tasks` to generate granular task breakdown from this plan
2. Proceed with Phase 0 research to identify specific bugs
3. Execute phases sequentially with validation gates between each phase
4. Document any deviations or new issues discovered during execution
