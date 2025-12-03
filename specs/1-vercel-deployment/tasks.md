---
description: "Task list for Vercel Deployment & Configuration feature"
---

# Tasks: Vercel Deployment & Configuration

**Input**: Design documents from `/specs/1-vercel-deployment/`
**Prerequisites**: plan.md (required), spec.md (required for user stories)

**Tests**: Tests are OPTIONAL - only included if explicitly requested in the feature specification.

**Organization**: Tasks are grouped by user story (P1, P1, P2) to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story?] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- Repository root paths (no subdirectories needed for this static site deployment)
- Vercel configuration files at root: `vercel.json`, `.env.local`, `.env.production`
- Source files: `next.config.js`, `package.json`, `tsconfig.json`, `theme.config.jsx`
- Scripts: `scripts/validate-frontmatter.ts`, `scripts/check-links.ts`, `scripts/generate-sitemap.ts`
- Content: `content/blog/`, `content/docs/`, `content/_meta.json`

---

## 🔴 CRITICAL BLOCKER IDENTIFIED

**Error Found**: Platform mismatch for `@next/swc-darwin-arm64@16.0.4`
- Vercel is Linux x64 but package.json has macOS ARM64 SWC package
- This MUST be fixed before any build can succeed
- This is blocking Issue #1 and requires immediate resolution

**Root Cause**: package.json line 20 has platform-specific dependency that doesn't match Vercel's build environment

---

## Phase 1: Setup & Critical Fixes

**Purpose**: Fix the blocking build error and establish working build environment

- [ ] T001 Fix platform mismatch error in package.json by removing `@next/swc-darwin-arm64` dependency
  - **File**: `package.json`
  - **Action**: Remove line 20 (`"@next/swc-darwin-arm64": "^16.0.4"`) - Next.js will auto-select correct SWC for platform
  - **Reasoning**: Platform-specific SWC packages break cross-platform builds. Vercel (Linux x64) cannot use macOS ARM64 package. Next.js handles platform selection automatically when no platform-specific package is specified.
  - **Verify**: After removal, `pnpm install` should succeed locally and on Vercel

- [ ] T002 Verify package.json has correct `packageManager` configuration
  - **File**: `package.json`
  - **Action**: Confirm line 63 specifies `"packageManager": "pnpm@8.0.0"`
  - **Verify**: Vercel detects pnpm as package manager and uses correct installation command

- [ ] T003 Create Vercel configuration file with build and output settings
  - **File**: `vercel.json` (create at repository root)
  - **Content**:
    ```json
    {
      "buildCommand": "pnpm build",
      "installCommand": "pnpm install --frozen-lockfile",
      "outputDirectory": ".next/out",
      "nodeVersion": "18.x",
      "env": {
        "NEXT_PUBLIC_SITE_URL": "@next-public-site-url"
      }
    }
    ```
  - **Verify**: File syntax is valid JSON; Vercel reads this on next deployment

- [ ] T004 Create `.env.local` for local development
  - **File**: `.env.local` (create at repository root)
  - **Content**:
    ```
    NEXT_PUBLIC_SITE_URL=http://localhost:3001
    ```
  - **Verify**: `pnpm dev` starts server and uses correct site URL locally

- [ ] T005 [P] Verify Node.js version compatibility in package.json
  - **File**: `package.json`
  - **Action**: Confirm line 60-61 has `"node": ">=18.0.0"` and `"pnpm": ">=8.0.0"`
  - **Verify**: Version constraints allow Vercel's Node.js 18+ runtime

- [ ] T006 [P] Test build locally after package.json fix
  - **Command**: Run `pnpm install` then `pnpm build` from repository root
  - **Verify**:
    - No platform errors (EBADPLATFORM)
    - Build completes without errors
    - `.next/out/` directory is created with static files
    - Build time is <60 seconds

---

## Phase 2: Foundational Infrastructure

**Purpose**: Configure environment and Vercel project before testing deployments

### T007 - Configure Vercel Project Settings (Manual - Vercel Dashboard)

- [ ] T007 Access Vercel project dashboard and configure build settings
  - **Dashboard URL**: `vercel.com/dashboard`
  - **Project**: agentii-kit
  - **Actions**:
    1. Go to Settings → Build & Development
    2. Set Build Command: `pnpm build`
    3. Set Output Directory: `.next/out`
    4. Set Install Command: `pnpm install --frozen-lockfile`
    5. Go to Settings → Environment Variables
    6. Add `NEXT_PUBLIC_SITE_URL` = `https://kits.agentii.ai` (or Vercel preview domain for testing)
    7. Go to Settings → Node.js Version
    8. Set to 18.x (default)
    9. Disable "Vercel Analytics" (use Plausible only per constitution)
  - **Verify**: All settings saved and visible in dashboard

- [ ] T008 [P] Verify GitHub repository is connected to Vercel
  - **Action**: Check Vercel project settings → Git Integration
  - **Verify**: Repository is connected and auto-deploys on push to main branch

- [ ] T009 [P] Create `.env.production` for production deployment settings
  - **File**: `.env.production` (create at repository root)
  - **Content**:
    ```
    NEXT_PUBLIC_SITE_URL=https://kits.agentii.ai
    ```
  - **Verify**: File created and added to `.gitignore` if not committing secrets

- [ ] T010 Verify next.config.js exports to correct output directory
  - **File**: `next.config.js`
  - **Action**: Confirm file includes:
    ```javascript
    export default withNextra({
      reactStrictMode: true,
      cleanDistDir: true,
      images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [{ protocol: 'https', hostname: '**' }],
      },
    })
    ```
  - **Verify**: No `output: 'export'` line needed (Nextra handles static export)
  - **Note**: If export is missing and build fails, add `output: 'export'` to next.config.js export

---

## Phase 3: User Story 1 - Resolve Deployment Bugs (Priority: P1)

**Goal**: Fix all build errors and deployment issues so that Vercel builds and deploys successfully without errors

**Independent Test**: Can be fully tested by pushing to Vercel and verifying build succeeds, all pages load without 404s, search works, images load, no console errors, RSS feed accessible

### Implementation for User Story 1

- [ ] T011 [US1] Verify local build succeeds after all Phase 1-2 fixes
  - **Command**: Run `pnpm clean-dist && pnpm build` from repository root
  - **Verify**:
    - No errors in build output
    - `.next/out/` directory exists with HTML files
    - Build completes in <60 seconds
    - `sitemap.xml` is present in `.next/out/`

- [ ] T012 [US1] Test local static server to verify all pages load correctly
  - **Commands**:
    ```bash
    cd .next/out
    npx http-server . -p 8080
    # Visit http://localhost:8080 in browser
    ```
  - **Verify**:
    - Homepage loads without errors
    - Blog index page loads
    - Sample blog post loads (check images)
    - Sample doc page loads
    - No 404 errors in browser console
    - All CSS and JavaScript load correctly

- [ ] T013 [US1] Push fixed code to feature branch and create Vercel preview deployment
  - **Command**: `git push origin 1-vercel-deployment`
  - **Wait for**: Vercel auto-deploys preview URL (check GitHub PR or Vercel dashboard)
  - **Verify**: Preview deployment completes without build errors

- [ ] T014 [US1] Test preview deployment - verify all pages load without errors
  - **Action**: Visit Vercel preview URL and test:
    1. Homepage loads and renders correctly
    2. Blog index page accessible and loads all posts
    3. Sample blog post loads with all images and styling
    4. Sample doc page loads correctly
    5. Navigation links work correctly
    6. Responsive design works on mobile viewport
  - **Verify**:
    - No 404 errors
    - No console errors in DevTools
    - All images load correctly
    - All styling applied correctly

- [ ] T015 [US1] Test search functionality on preview deployment
  - **Action**:
    1. Open preview deployment homepage
    2. Use Pagefind search box (typically in header or sidebar)
    3. Type a keyword that should exist (e.g., "agent", "agentic", "kit")
    4. Verify results appear
    5. Click on a result and verify link is correct
  - **Verify**:
    - Search returns results
    - Results are relevant to query
    - Result links are correct
    - Search completes within 1 second

- [ ] T016 [US1] Verify RSS feed is accessible on preview deployment
  - **Action**:
    1. Visit `https://[preview-url]/feed.xml` directly
    2. Verify XML content displays (or downloads)
    3. Check that feed contains blog posts
  - **Verify**:
    - feed.xml returns 200 status (not 404)
    - XML is valid (can be parsed)
    - Feed contains entries for blog posts

- [ ] T017 [US1] Check browser DevTools for any console errors on preview
  - **Action**:
    1. Open Vercel preview URL
    2. Open DevTools (F12) → Console tab
    3. Check for any errors or warnings
  - **Verify**: No errors in console (warnings are acceptable for now)

- [ ] T018 [US1] Merge feature branch to main after all US1 validations pass
  - **Command**: Merge PR to main branch on GitHub
  - **Verify**: GitHub shows "Merged" status
  - **Wait for**: Vercel production deployment to trigger automatically

**Checkpoint**: User Story 1 complete - site builds and deploys successfully without build errors

---

## Phase 4: User Story 2 - Configure Production Environment (Priority: P1)

**Goal**: Configure Vercel project and environment variables correctly so site uses production domain and all SEO/analytics settings are correct

**Independent Test**: Can be fully tested by verifying Vercel settings match specification and checking that meta tags and canonical URLs use correct production domain

### Implementation for User Story 2

- [ ] T019 [US2] Verify NEXT_PUBLIC_SITE_URL environment variable is set in Vercel dashboard
  - **Action**:
    1. Go to Vercel project Settings → Environment Variables
    2. Confirm `NEXT_PUBLIC_SITE_URL` is set to `https://kits.agentii.ai`
  - **Verify**: Environment variable is visible in dashboard and marked as available for production builds

- [ ] T020 [US2] Verify meta tags use correct production domain on deployed site
  - **Action**:
    1. Visit production URL: `https://kits.agentii.ai` (or Vercel preview domain)
    2. Open page source (Ctrl+U or View Page Source)
    3. Search for `og:url` meta tag
    4. Verify it contains the production domain (not localhost or different domain)
  - **Verify**:
    - `og:url` shows production domain
    - `canonical` link tag shows production domain
    - All meta tags have correct domain

- [ ] T021 [US2] Verify canonical URLs are correct on all main pages
  - **Action**: Check canonical URL on:
    1. Homepage
    2. Blog index page
    3. Sample blog post
    4. Sample doc page
  - **Method**: View page source and search for `<link rel="canonical"`
  - **Verify**: All canonical URLs use production domain

- [ ] T022 [US2] Verify build command uses correct settings from vercel.json
  - **Action**:
    1. Trigger a new deployment on Vercel (by pushing to main)
    2. Check Vercel build logs during deployment
    3. Verify build command shown is `pnpm build`
    4. Verify output directory shown is `.next/out`
  - **Verify**: Vercel is using settings from vercel.json or dashboard configuration

- [ ] T023 [US2] Configure custom domain if applicable (or document Vercel domain)
  - **Action**:
    1. If kits.agentii.ai should be custom domain: Go to Vercel project Settings → Domains
    2. Add domain or confirm it's already configured
    3. If using Vercel domain, document the preview URL for reference
  - **Verify**: Domain is configured and resolves to Vercel deployment

- [ ] T024 [US2] Verify analytics are NOT double-counted (Plausible only, no Vercel Analytics)
  - **Action**:
    1. Go to Vercel project Settings → Analytics
    2. Confirm "Web Analytics" is DISABLED (we use Plausible only)
    3. Check production site's HTML source for Plausible script tag
  - **Verify**:
    - Vercel Analytics disabled
    - Plausible script tag present (if Plausible is configured)
    - No duplicate analytics scripts

**Checkpoint**: User Story 2 complete - production environment fully configured with correct domain and settings

---

## Phase 5: User Story 3 - Validate Post-Deployment Quality (Priority: P2)

**Goal**: Verify deployed site meets all constitutional requirements: SEO, performance, Core Web Vitals, content integrity, and functionality

**Independent Test**: Can be fully tested by running automated validation tools and manual checks on production deployment

### Implementation for User Story 3

- [ ] T025 [US3] Verify sitemap.xml is generated and accessible on production
  - **Action**:
    1. Visit `https://kits.agentii.ai/sitemap.xml` (or production domain)
    2. Verify XML content displays (not 404)
    3. Save XML and count entries
  - **Verify**:
    - sitemap.xml returns 200 status
    - XML is valid and parseable
    - Contains all blog posts and doc pages
    - Coverage ≥90% of expected pages

- [ ] T026 [US3] Verify RSS feed (feed.xml) is valid and contains all posts
  - **Action**:
    1. Visit `https://kits.agentii.ai/feed.xml`
    2. Copy RSS URL
    3. Paste into RSS validator: https://validator.w3.org/feed/
    4. Verify validation passes
  - **Verify**:
    - feed.xml is valid RSS/Atom format
    - Contains all featured blog posts
    - Each entry has title, description, publication date

- [ ] T027 [US3] Run Lighthouse performance audit on production homepage
  - **Action**:
    1. Visit production URL homepage
    2. Open Chrome DevTools → Lighthouse tab
    3. Click "Analyze page load"
    4. Wait for audit to complete
  - **Verify**:
    - Performance score ≥90
    - Accessibility score ≥90
    - Best Practices score ≥90
    - SEO score ≥90
    - If any score <90, document issues for enhancement

- [ ] T028 [US3] Run Lighthouse on blog index and sample blog post pages
  - **Action**: Repeat T027 for:
    1. Blog index page
    2. Sample blog post page
  - **Verify**: All pages achieve ≥90 on all Lighthouse metrics

- [ ] T029 [US3] Run Lighthouse on doc index and sample doc page
  - **Action**: Repeat T027 for:
    1. Doc index page
    2. Sample doc page
  - **Verify**: All pages achieve ≥90 on all Lighthouse metrics

- [ ] T030 [US3] Measure Core Web Vitals on production (LCP, FID, CLS)
  - **Action**:
    1. Option A: Use Chrome DevTools on multiple pages, note metrics in Console
    2. Option B: Use web.dev/measure tool: https://web.dev/measure/
    3. Option C: Check Vercel Analytics dashboard if available
    4. Test on: Homepage, Blog index, Sample blog post, Sample doc page
  - **Verify**:
    - LCP (Largest Contentful Paint) <2.5s on all pages
    - FID (First Input Delay) <100ms
    - CLS (Cumulative Layout Shift) <0.1

- [ ] T031 [US3] Verify all meta tags are present and correct on deployed pages
  - **Action**:
    1. Use meta tag checker tool: https://metatags.io/
    2. Paste production URL for:
       - Homepage
       - Blog post
       - Doc page
    3. Verify preview shows correct title, description, image
  - **Verify**:
    - og:title, og:description, og:image present
    - twitter:card, twitter:title, twitter:description present
    - Canonical URL correct
    - All meta tags use correct production domain

- [ ] T032 [US3] Verify JSON-LD structured data on blog and doc pages
  - **Action**:
    1. Visit blog post page on production
    2. View page source (Ctrl+U)
    3. Search for `<script type="application/ld+json">`
    4. Verify BlogPosting schema is present
    5. Repeat for doc page
  - **Verify**:
    - BlogPosting schema present on blog pages
    - ArticleSchema or similar present on doc pages
    - Schema includes headline, description, author, datePublished

- [ ] T033 [US3] Test search functionality on production and verify results are fast
  - **Action**:
    1. Visit production homepage
    2. Open search box
    3. Type a query and time the response
    4. Test multiple queries
  - **Verify**:
    - Search returns results within 1 second
    - Results are relevant to query
    - No errors in console during search

- [ ] T034 [US3] Manually navigate all main pages and verify no broken links or 404s
  - **Action**:
    1. Start from homepage
    2. Click navigation to Blog and Docs
    3. Access 3 blog posts
    4. Access 3 doc pages
    5. Click internal links between pages
    6. Monitor Network tab in DevTools for 404 responses
  - **Verify**:
    - All navigation links work
    - No 404 errors in network tab
    - All pages load correctly
    - No dead links

- [ ] T035 [US3] Verify images load correctly on production
  - **Action**:
    1. Open DevTools → Network tab
    2. Reload a page with images
    3. Check image requests
    4. Verify all image files load with 200 status
  - **Verify**:
    - All images return 200 status
    - Image file sizes are reasonable (<500KB each)
    - Images display correctly in pages

- [ ] T036 [US3] Check for console errors or warnings on production pages
  - **Action**:
    1. Visit each main page
    2. Open DevTools → Console tab
    3. Look for red error messages
    4. Note any warnings for future investigation
  - **Verify**: No red errors (warnings are acceptable)

**Checkpoint**: All User Stories complete - site meets all constitutional requirements

---

## Phase N: Documentation & Closure

**Purpose**: Document deployment process and clean up for future operations

- [ ] T037 Create quickstart guide for future deployments
  - **File**: `specs/1-vercel-deployment/quickstart.md`
  - **Content**:
    - Steps to deploy to Vercel
    - How to set environment variables
    - Post-deployment validation checklist
    - Troubleshooting tips for common issues
    - Links to monitoring dashboards

- [ ] T038 Document known issues and resolutions
  - **File**: `specs/1-vercel-deployment/known-issues.md`
  - **Content**:
    - Issue: Platform mismatch for @next/swc-darwin-arm64 (RESOLVED: remove package)
    - Any other issues encountered during deployment
    - Solutions and workarounds

- [ ] T039 Update main README.md with deployment instructions
  - **File**: `README.md`
  - **Action**: Add Deployment section after "Quick Start" with:
    - Vercel deployment steps
    - Environment variable setup
    - Post-deployment checklist
    - Link to vercel.json configuration

- [ ] T040 Verify repository is clean (no secrets committed)
  - **Action**:
    1. Check `.gitignore` includes `.env.local`, `.env.production`
    2. Verify no API keys in committed files
    3. Verify vercel.json uses `@next-public-site-url` reference (not hardcoded value)
  - **Verify**: No secrets in version control

---

## Dependencies & Execution Order

### Phase Dependencies

- **Phase 1 (Setup & Critical Fixes)**: No dependencies - START HERE
  - CRITICAL: T001 MUST be completed before any build attempt
  - T002-T006 can run in parallel after T001
- **Phase 2 (Foundational)**: Depends on Phase 1 completion
  - T007-T010 can run in parallel (all configuration)
  - GATE: All Phase 2 tasks must complete before first deployment
- **Phase 3 (User Story 1)**: Depends on Phase 2 completion
  - T011-T018 run sequentially (build → test → deploy → validate)
  - GATE: T017 must pass (no console errors) before merging to main
- **Phase 4 (User Story 2)**: Can start as soon as Phase 3 deploys to production
  - T019-T024 run in parallel or sequentially (all validation)
- **Phase 5 (User Story 3)**: Depends on Phase 4 completion
  - T025-T036 can run in parallel (all automated and manual checks)
- **Phase N (Documentation)**: Depends on Phase 5 completion
  - T037-T040 can run in parallel (all documentation)

### Critical Path

```
T001: Fix package.json (BLOCKER - must complete first)
  ↓
T002-T006: Setup & verify (parallel OK)
  ↓
T007-T010: Vercel configuration (parallel OK)
  ↓
T011: Build locally (must succeed)
  ↓
T012: Test local server
  ↓
T013: Push to GitHub → Vercel preview (T014-T017 test preview)
  ↓
T018: Merge to main → Production deployment
  ↓
T019-T024: Verify production configuration (US2)
  ↓
T025-T036: Validate quality (US3)
  ↓
T037-T040: Documentation
```

### Parallel Opportunities

- **Phase 1**: T002, T003, T004, T005, T006 can all start after T001 completes
- **Phase 2**: T007, T008, T009, T010 can all run in parallel
- **Phase 4**: T019, T020, T021, T022, T023, T024 can all run in parallel (all verification)
- **Phase 5**: T025-T036 can all run in parallel (independent validation checks)
- **Phase N**: T037-T040 can all run in parallel (all documentation)

---

## Implementation Strategy

### MVP First (User Story 1 Only)

**Objective**: Get site building and deploying successfully

1. ✅ Complete Phase 1: Setup (T001-T006)
   - This is the critical blocker fix
2. ✅ Complete Phase 2: Foundational (T007-T010)
   - Configure Vercel project
3. ✅ Complete Phase 3: User Story 1 (T011-T018)
   - Deploy to Vercel and verify all pages load
4. **STOP and VALIDATE**: Check that T017 passes (no console errors)
5. Deploy to production (merge to main)
6. **MVP COMPLETE**: Site is live and users can access it

### Incremental Delivery

After MVP (User Story 1) is deployed:

1. ✅ Add User Story 2: Configure Environment (T019-T024)
   - Verify production domain and SEO settings
2. ✅ Add User Story 3: Validate Quality (T025-T036)
   - Run performance checks and confirm compliance
3. ✅ Add Documentation (T037-T040)
   - Create runbooks for future reference

Each story adds completeness without breaking the previous story.

---

## Notes

- **T001 is CRITICAL BLOCKER**: Remove `@next/swc-darwin-arm64` from package.json or build will always fail on Vercel
- All tasks are actionable and independently verifiable
- Preview deployments (Vercel auto-deploys on PR) are critical validation gates
- No tasks require external APIs or third-party integrations (except Vercel itself)
- Monitor post-deployment metrics continuously for first week
- Document any deviations or new issues discovered during execution
- Rollback plan: If production has issues, revert main branch and Vercel auto-redeploys previous working build

---

**Ready to Execute**: Phase 1 can start immediately. **Recommendation**: Start with T001 to unblock all builds.
