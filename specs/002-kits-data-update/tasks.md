# Tasks: Kits Data Model & Admin Workflow

**Input**: Design documents from `/specs/002-kits-data-update/`
**Specification**: spec.md (5 user stories, 10 functional requirements)
**Implementation Plan**: plan.md (Next.js 14 + TypeScript 5.3+ + Nextra 4.6)
**Prerequisites**: All design documents complete (spec.md, plan.md)

**Organization**: Tasks are grouped by user story (US1-US5) to enable independent implementation and testing of each story. User Stories 1-3 (P1) must be completed before Stories 4-5 (P2).

**Format**: `- [ ] [TaskID] [P?] [Story] Description with file path`

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and core data structure setup

- [ ] T001 Create Kit interface in `data/kits.ts` with all required fields: id, name, emoji, shortTagline, longDescription, domain, githubUrl, status, cli config, workflows, etc. per spec Key Entities section
- [ ] T002 [P] Create supporting interfaces in `specs/002-kits-data-update/contracts/kit-schema.ts`: KitWorkflowPhase, KitCliConfig, KitProjectStructureNode, KitTemplate, KitConstitution
- [ ] T003 [P] Setup TypeScript validation rules in `lib/kit-utils.ts` for kit data (validateKit function, field constraints)
- [ ] T004 Create admin extraction workflow guide in `.specify/docs/kit-extraction-workflow.md` with 8-step process and examples
- [ ] T005 Create `data/kits.json` schema documentation showing JSON export structure for future API use (FR-009)

**Checkpoint**: Core infrastructure ready. Kit interface defined. Validation framework in place. Ready for user story implementation.

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Real kit data extraction and mock data removal

**⚠️ CRITICAL**: These tasks MUST complete before user stories can be tested

- [ ] T006 Extract metadata for pmf-kit from `https://github.com/agentii-ai/pmf-kit` using Claude Code/WebFetch: name, description, workflows, CLI commands, project structure. Document in research notes.
- [ ] T007 Extract metadata for blog-tech-kit from `https://github.com/agentii-ai/blog-tech-kit` using Claude Code/WebFetch: name, description, workflows, CLI commands, project structure. Document in research notes.
- [ ] T008 Extract metadata for twitter-init-kit from `https://github.com/agentii-ai/twitter-init-kit` using Claude Code/WebFetch: name, description, workflows, CLI commands, project structure. Document in research notes.
- [ ] T009 Validate all three extracted kit records against Kit interface in `data/kits.ts`. Ensure no missing required fields. Document any discrepancies.
- [ ] T010 Delete mock kit data from existing `data/kits.ts` mockKits array (mockKits array or similar placeholder data)
- [ ] T011 Delete `data/featured_kits.md` file completely (mock data file - no longer needed)
- [ ] T012 Run `npm run type-check` to verify TypeScript interfaces are correctly defined before adding real data

**Checkpoint**: Real data extracted and validated. Mock data removed. Ready for user story implementation.

---

## Phase 3: User Story 1 - Admin adds new kit via GitHub URL (Priority: P1) 🎯 MVP

**Goal**: Enable admins to onboard new kits by providing only a GitHub repo URL, with AI-assisted metadata extraction.

**Independent Test**:
1. Admin provides a valid GitHub repo URL (e.g., `https://github.com/agentii-ai/design-kit`)
2. Workflow generates a markdown file with extracted kit metadata
3. Kit record can be imported into `data/kits.ts` and TypeScript validates successfully
4. Website rebuilds and new kit appears in Featured Kits section without code changes

### Implementation for User Story 1 (Admin Extraction Workflow)

- [ ] T013 [US1] Document extraction workflow prompt template in `.specify/docs/kit-extraction-workflow.md` Step 2: detailed instructions for using Claude Code/Windsurf/Cursor WebFetch tool to retrieve GitHub README
- [ ] T014 [US1] Create example extraction prompt for AI agents showing input (GitHub URL) and expected output (structured metadata markdown)
- [ ] T015 [US1] Implement error handling guide in `.specify/docs/kit-extraction-workflow.md` for common errors: invalid URLs, missing README, private repos, incomplete metadata
- [ ] T016 [P] [US1] Document validation steps in `.specify/docs/kit-extraction-workflow.md` Step 4: how to validate extracted metadata against Kit interface (required fields, types, constraints)
- [ ] T017 [P] [US1] Document integration steps in `.specify/docs/kit-extraction-workflow.md` Step 5: how to add validated kit record to `data/kits.ts` and run `npm run type-check`
- [ ] T018 [US1] Document testing steps in `.specify/docs/kit-extraction-workflow.md` Step 6: run `npm run build` and verify kit appears in Featured Kits section
- [ ] T019 [US1] Document PR submission workflow in `.specify/docs/kit-extraction-workflow.md` Step 7-8: Git commit, PR creation, review, merge process
- [ ] T020 [US1] Create FAQ section in `.specify/docs/kit-extraction-workflow.md` addressing edge cases: timeouts, rate limits, incomplete data, conflicting metadata

**Acceptance Criteria Met**:
- ✅ FR-002: Admin extraction workflow is fully documented
- ✅ FR-003: Workflow uses Claude Code/Windsurf/Cursor WebFetch capabilities
- ✅ SC-002: New kit can be added in <15 minutes following documented steps
- ✅ SC-005: Documentation exists and is usable by admins

**Checkpoint**: User Story 1 complete. Admins have clear 8-step workflow for extracting and integrating new kits. Documentation complete and ready for testing.

---

## Phase 4: User Story 2 - Structured kit data is queryable and type-safe (Priority: P1)

**Goal**: Ensure all kit data is type-safe with IDE support and build-time validation.

**Independent Test**:
1. Create a test component that imports Kit data
2. Verify TypeScript IntelliSense shows all Kit properties
3. Intentionally introduce a type error (missing required field, wrong type)
4. Run `npm run type-check` and verify error is caught
5. Verify component can safely query nested arrays (e.g., `kit.workflows.find(...)`)

### Implementation for User Story 2 (Type-Safe Data Model)

- [ ] T021 [P] [US2] Create complete Kit interface in `data/kits.ts` with all fields from spec: emoji (string), shortTagline (max 120 chars), status enum ('featured' | 'experimental' | 'archived'), cli config object, workflows array of KitWorkflowPhase objects, etc.
- [ ] T022 [P] [US2] Create runtime type guard function `validateKit()` in `lib/kit-utils.ts` to catch invalid kit records at build time or runtime
- [ ] T023 [P] [US2] Create query helper functions in `lib/kit-utils.ts`: `getKitById(id: string)`, `getKitsByDomain(domain: KitDomain)`, `getFeaturedKits()`, `getAllKits()` with proper return types
- [ ] T024 [P] [US2] Add JSDoc comments to Kit interface fields documenting constraints: id uniqueness, shortTagline max length, status enum values, workflow phase requirements
- [ ] T025 [US2] Implement export statement in `data/kits.ts` for `const allKits: Kit[]` array containing all 3 real kits (to be populated by US3)
- [ ] T026 [US2] Update `lib/kit-utils.ts` to export type definitions for consumers: `export { Kit, KitDomain, KitStatus, KitWorkflowPhase }` for component usage
- [ ] T027 [US2] Create build-time validation check that runs during `npm run type-check`: verify all exported kits conform to Kit interface, all ids are unique, all required fields present
- [ ] T028 [US2] Document kit data querying patterns in `.specify/docs/kit-extraction-workflow.md` Appendix: show examples of safe type-safe queries (`const kit = getKitById('pmf-kit')`, safe array navigation)

**Acceptance Criteria Met**:
- ✅ FR-001: Unified Kit TypeScript interface defined
- ✅ FR-007: Kit data exposed via clean TypeScript module (`lib/kit-utils.ts`)
- ✅ FR-008: Build-time validation ensures no missing fields or type mismatches
- ✅ SC-003: All kit data is type-safe; TypeScript build catches 100% of schema violations

**Checkpoint**: User Story 2 complete. Kit data is fully type-safe. IDE autocomplete works. Build-time validation prevents errors. Developers can safely query kit data.

---

## Phase 5: User Story 3 - Mock data is removed and replaced with real kit data (Priority: P1)

**Goal**: Replace all mock kit data with real, production-ready metadata from 3 GitHub kits.

**Independent Test**:
1. Build website: `npm run build`
2. Verify build succeeds in <60 seconds
3. Visit website and navigate to Featured Kits section
4. Verify all 3 real kits are displayed (pmf-kit, blog-tech-kit, twitter-init-kit)
5. Click on each kit card and verify it links to correct GitHub repository
6. Run `npm run type-check` and verify no type errors with real data

### Implementation for User Story 3 (Real Kit Data Population)

- [ ] T029 [P] [US3] Create pmf-kit record in `data/kits.ts`: populate Kit object for pmf-kit with extracted metadata from T006 (id: 'pmf-kit', name: 'PMF Kit', emoji: '🎯', cli commands, workflows, etc.)
- [ ] T030 [P] [US3] Create blog-tech-kit record in `data/kits.ts`: populate Kit object for blog-tech-kit with extracted metadata from T007 (id: 'blog-tech-kit', name: 'Blog-Tech-Kit', emoji: '📝', cli commands, workflows, etc.)
- [ ] T031 [P] [US3] Create twitter-init-kit record in `data/kits.ts`: populate Kit object for twitter-init-kit with extracted metadata from T008 (id: 'twitter-init-kit', name: 'Twitter-Init-Kit', emoji: '🐦', cli commands, workflows, etc.)
- [ ] T032 [US3] Set status field to 'featured' for all 3 kits (high visibility on website)
- [ ] T033 [US3] Verify all GitHub URLs are valid and publicly accessible: `https://github.com/agentii-ai/pmf-kit`, `https://github.com/agentii-ai/blog-tech-kit`, `https://github.com/agentii-ai/twitter-init-kit`
- [ ] T034 [US3] Update `data/kits.ts` to export `const allKits: Kit[]` array containing 3 real kit records (instead of mockKits)
- [ ] T035 [US3] Run `npm run type-check` to verify all 3 kit records conform to Kit interface (all required fields, correct types)
- [ ] T036 [US3] Update components to use `allKits` from `lib/kit-utils.ts` instead of `mockKits` (if components still reference old data)

### Component Integration for User Story 3

- [ ] T037 [US3] Update `components/FeaturedKits.tsx` to import kit data from `lib/kit-utils.ts` using `getKitsByStatus('featured')` instead of old mock data source
- [ ] T038 [US3] Verify `components/KitCard.tsx` correctly displays all Kit interface fields: emoji, name, shortTagline, status badge, domain label
- [ ] T039 [US3] Test website build: run `npm run build` and verify it completes in <60 seconds (Constitution Principle III performance target)
- [ ] T040 [US3] Lighthouse audit: run Lighthouse CLI on production output and verify score ≥90 on all pages (Constitution Principle II SEO requirement)
- [ ] T041 [US3] Visual verification: Navigate to website and visually inspect Featured Kits section displays all 3 kits correctly with proper styling, images, links

**Acceptance Criteria Met**:
- ✅ FR-005: All mock/placeholder kit data replaced with real metadata from 3 production kits
- ✅ FR-006: Kit data stored in structured TypeScript format in `data/kits.ts`
- ✅ SC-001: All 3 real kits (pmf-kit, blog-tech-kit, twitter-init-kit) in data module with complete, accurate metadata; no mock data remains
- ✅ SC-004: Website renders Featured Kits section without code changes (components consume data dynamically)

**Checkpoint**: User Story 3 complete. All real kit data integrated. Website builds and displays all 3 kits correctly. Performance targets met. Build-time validation passes.

---

## Phase 6: User Story 4 - Infrastructure supports future automatic updates (Priority: P2)

**Goal**: Design architecture to support future GitHub API cron updates without requiring code changes to components.

**Independent Test**:
1. Data loading logic can be switched from file-based to API-based
2. Components using kit data continue to work without modification
3. New fields added to Kit interface don't break component rendering
4. Query helper functions in `lib/kit-utils.ts` work with both file-based and API-sourced data

### Implementation for User Story 4 (Extensible Architecture)

- [ ] T042 [P] [US4] Create data loading abstraction layer in `lib/kit-utils.ts`: implement `loadKits()` function that returns `Promise<Kit[]>` (abstraction allows switching data source later without changing consumers)
- [ ] T043 [P] [US4] Document data source abstraction pattern in `.specify/docs/kit-extraction-workflow.md` Appendix: explain how to swap file-based source for API source in future
- [ ] T044 [US4] Create `data/kits.json` export script in `package.json` build process: add task `npm run export-kits-json` that converts `data/kits.ts` to JSON format (for future Vercel cron API endpoint)
- [ ] T045 [US4] Document future Vercel cron job integration in `.specify/docs/kit-extraction-workflow.md` "Future Automation": outline how `/api/cron/update-stars` endpoint will call `loadKits()` and update star counts
- [ ] T046 [US4] Implement optional fields in Kit interface for auto-updated metadata: `lastStarCount?: number`, `lastUpdated?: string` (ISO date) - these can be populated by future cron jobs without breaking component rendering
- [ ] T047 [US4] Add configuration documentation in `.specify/docs/kit-extraction-workflow.md`: explain how NEXT_PUBLIC_GITHUB_API_URL environment variable can switch between file-based and API sources (future enhancement)
- [ ] T048 [US4] Create TODO comment in `lib/kit-utils.ts` marking location for future GitHub API integration: `// TODO: Phase 3 feature - switch loadKits() to fetch from /api/cron/update-stars endpoint`

**Acceptance Criteria Met**:
- ✅ FR-009: Kit data organized to support future dynamic updates from GitHub API endpoints without code changes to consuming code
- ✅ SC-006: Data module structure allows swapping data source (static file → API endpoint) without changes to consuming components

**Checkpoint**: User Story 4 complete. Extensible architecture in place. Future Vercel cron job integration documented. No breaking changes needed when automation is added later.

---

## Phase 7: User Story 5 - Data extraction workflow is documented for admins (Priority: P2)

**Goal**: Comprehensive documentation for admins to independently extract and integrate new kits.

**Independent Test**:
1. A non-developer admin reads the extraction workflow documentation
2. They follow the 8-step process end-to-end
3. They successfully extract metadata from a test GitHub repository (e.g., a public open-source kit)
4. They validate extracted data matches the Kit interface
5. They create a PR with the new kit, which passes build-time validation

### Implementation for User Story 5 (Admin Documentation)

- [ ] T049 [US5] Create comprehensive admin guide in `.specify/docs/kit-extraction-workflow.md` with sections: Overview, Prerequisites, 8-Step Workflow, Examples, Troubleshooting, FAQ
- [ ] T050 [P] [US5] Document Step 1 in guide: "Prepare Kit Repository URL" - explain what makes a valid GitHub URL, where to find example kits
- [ ] T051 [P] [US5] Document Step 2 in guide: "Use AI Agent to Extract Metadata" - detailed instructions for Claude Code, Windsurf, Cursor including WebFetch usage
- [ ] T052 [P] [US5] Document Step 3 in guide: "Generate Metadata Markdown" - show example output, explain what information is extracted (README, CLI, commands, structure)
- [ ] T053 [P] [US5] Document Step 4 in guide: "Validate Against Schema" - detailed checklist of required fields, type checks, constraints to verify
- [ ] T054 [P] [US5] Document Step 5 in guide: "Add to data/kits.ts" - show code example of how to copy validated kit record into kits array
- [ ] T055 [P] [US5] Document Step 6 in guide: "Test Build" - explain running `npm run build` and `npm run type-check`, how to inspect output
- [ ] T056 [P] [US5] Document Step 7 in guide: "Submit PR" - Git workflow (create branch, commit, push, PR, link issue if applicable)
- [ ] T057 [P] [US5] Document Step 8 in guide: "Merge & Deploy" - explain Vercel auto-deploy, how to verify kit appears on live website
- [ ] T058 [US5] Create worked example in `.specify/docs/kit-extraction-workflow.md`: step-by-step extraction of a real kit (e.g., pmf-kit) showing actual GitHub content, extracted metadata, final Kit record
- [ ] T059 [US5] Create troubleshooting section in `.specify/docs/kit-extraction-workflow.md` covering: invalid URLs (404, private repos), missing README, incomplete metadata, type errors, build failures
- [ ] T060 [US5] Create FAQ section in `.specify/docs/kit-extraction-workflow.md` answering: How long does extraction take? What if GitHub API rate-limits? Can I edit extracted data? How do I know if data is correct?
- [ ] T061 [US5] Add video/screenshot placeholders in guide (for future enrichment): show UI of Claude Code/Windsurf/Cursor during extraction process
- [ ] T062 [US5] Create checklist appendix in `.specify/docs/kit-extraction-workflow.md` admins can print/copy: Pre-extraction checklist, Validation checklist, PR submission checklist

**Acceptance Criteria Met**:
- ✅ FR-002: Data extraction workflow is fully documented as a guide
- ✅ SC-002: A new kit can be added by admin within 15 minutes using documented workflow
- ✅ SC-005: Documentation exists and test admin can follow it to successfully extract kit metadata without external help

**Checkpoint**: User Story 5 complete. Comprehensive admin documentation complete. All 8 workflow steps documented. Real examples, troubleshooting, and FAQ included. Admins have everything needed for self-service kit onboarding.

---

## Phase 8: Polish & Cross-Cutting Concerns

**Purpose**: Final validation, documentation, and quality improvements

- [ ] T063 [P] Run full test suite: `npm run type-check && npm run lint && npm run build` - verify no errors or warnings
- [ ] T064 [P] Lighthouse audit (final): run Lighthouse CLI on production build, verify score ≥90, LCP <2.5s, CLS <0.1
- [ ] T065 [P] Performance validation: verify `npm run build` completes in <60 seconds (Constitution Principle III requirement)
- [ ] T066 Final visual review of Featured Kits section: verify all 3 kits display correctly, all links work, all metadata displays accurately
- [ ] T067 SEO validation: verify Kit interface supports all SEO fields (description, URLs, metadata), verify JSON-LD schema will be generated correctly for Featured Kits section
- [ ] T068 Create research.md documenting all design decisions made during implementation: schema design rationale, tool choices (WebFetch vs API), storage format decision, component migration approach
- [ ] T069 Update main README.md with reference to kit extraction workflow: add "Adding New Kits" section with link to `.specify/docs/kit-extraction-workflow.md`
- [ ] T070 Code review checklist: verify code follows agentii-kit standards (TypeScript strict mode, component patterns, documentation)
- [ ] T071 [P] Run `npm run validate-frontmatter` on any documentation files to ensure proper YAML frontmatter
- [ ] T072 Final build and deploy: create PR with all changes, request code review, merge to main, verify Vercel deployment succeeds

---

## Dependencies & Execution Order

### Phase Dependencies

1. **Setup (Phase 1)**: Can start immediately
   - Defines Kit interface and schema
   - Prepares validation framework
   - No blocking dependencies

2. **Foundational (Phase 2)**: Depends on Setup completion
   - **MUST COMPLETE before user stories**
   - Extracts real kit data
   - Removes mock data
   - **GATE**: All 3 kits extracted and validated before US1-US5 start

3. **User Stories (Phase 3-7)**: Depend on Foundational completion
   - **US1, US2, US3 (P1)**: Must complete in order before US4, US5
     - US1: Documentation framework
     - US2: Type-safe data model
     - US3: Real data population & component integration
   - **US4, US5 (P2)**: Can proceed after US1-US3 complete (can be parallel if staffed)

4. **Polish (Phase 8)**: Depends on all desired user stories being complete
   - Final validation and optimization

### Within Each User Story

- **Tests** (if applicable): Write and fail before implementation
- **Models**: Define before services
- **Services**: Define before endpoints
- **Integration**: After core logic works

### Parallel Opportunities

**Phase 1 Setup**:
- T002 (Kit interfaces) and T003 (validation) can run in parallel
- T004 (workflow guide) and T005 (JSON schema) can run in parallel

**Phase 2 Foundational**:
- T006, T007, T008 (extract 3 kits) can run in FULL PARALLEL (different repos, no dependencies)
- T009 (validate) must wait for all 3 extractions
- T010, T011, T012 can run in parallel once validation completes

**Phase 3-7 User Stories**:
- Once Foundational (Phase 2) completes, US1, US2, US3 should be implemented **sequentially** (US1 → US2 → US3) because:
  - US1 creates workflow documentation
  - US2 defines type-safe interfaces (uses workflow from US1)
  - US3 populates real data using interfaces from US2
- Once US1-US3 complete, US4 and US5 can run in **parallel** (independent documentation and architecture tasks)

**Within US1, US2, US3**: Many tasks marked [P] can run in parallel at same phase level

**Phase 8 Polish**: All validation tasks marked [P] can run in parallel

### Parallel Example: Phase 2 Foundational Data Extraction

```bash
# Terminal 1: Extract pmf-kit metadata
# Open Claude Code and run extraction for pmf-kit (T006)
# Document findings

# Terminal 2: Extract blog-tech-kit metadata (parallel)
# Open Windsurf and run extraction for blog-tech-kit (T007)
# Document findings

# Terminal 3: Extract twitter-init-kit metadata (parallel)
# Open Cursor and run extraction for twitter-init-kit (T008)
# Document findings

# When all 3 are done (T006, T007, T008 complete):
# Run T009-T012 validation in sequence
npm run type-check  # Verify interface correctness
```

### Critical Path

The **minimum critical path** to MVP (User Stories 1-3) is:
1. Phase 1 Setup (T001-T005): ~2 hours
2. Phase 2 Foundational (T006-T012): ~3 hours (parallelizable)
3. Phase 3-5 User Stories (T013-T041): ~6-8 hours
   - US1 (T013-T020): ~2 hours (documentation)
   - US2 (T021-T028): ~2 hours (type-safe model)
   - US3 (T029-T041): ~3 hours (real data + component integration)
4. Phase 8 Polish (T063-T072): ~2 hours

**Total Critical Path**: ~12-15 hours

---

## Success Criteria Verification

| Success Criteria | Verified By Task(s) | Status |
|------------------|-------------------|--------|
| SC-001: Real kits in module, no mock data | T029-T034, T036, T041 | Will verify in Phase 5 |
| SC-002: New kit added in <15 min | T013-T020 (documentation), timed test | Will verify in Phase 3 |
| SC-003: Type-safe, 100% schema validation | T021-T024, T027, T035 | Will verify in Phase 4 |
| SC-004: No code changes for new kit | T037-T038, T041 | Will verify in Phase 5 |
| SC-005: Documentation exists | T013-T020, T049-T062 | Will verify in Phase 3 & 7 |
| SC-006: Data source swappable | T042-T048 | Will verify in Phase 6 |
| SC-007: Kit queries performant | T023-T024 (O(1) lookups) | Will verify in Phase 4 |

---

## MVP Scope (First Milestone)

**Recommended MVP**: Complete User Stories 1-3 (Phase 1-5)

This delivers:
- ✅ Unified Kit TypeScript interface (US2)
- ✅ Admin extraction workflow documented (US1)
- ✅ Real kit data loaded (US3, 3 kits: pmf, blog, twitter)
- ✅ All mock data removed
- ✅ Website displays correct kits
- ✅ Type-safe, build-time validated data
- ✅ Admin can manually add 4th+ kit via documented workflow

**Non-MVP (Phase 6-7)**: User Stories 4-5 add:
- Extensible architecture for future Vercel cron automation (US4)
- Comprehensive admin documentation for self-service (US5)

---

## Implementation Strategy

### Week 1: Setup & Real Data (Phase 1-2)
- Day 1-2: Phase 1 Setup (define Kit interface)
- Day 2-3: Phase 2 Foundational (extract 3 real kits, remove mock data)
- Day 4: Validate everything, run builds

### Week 2: User Stories 1-3 (MVP)
- Day 5-6: US1 (Admin extraction workflow documentation)
- Day 7-8: US2 (Type-safe data model)
- Day 9-10: US3 (Real data integration, component updates, testing)

### Week 3: Future Features & Polish
- Day 11: US4 (Extensible architecture for Vercel cron)
- Day 12: US5 (Comprehensive admin docs)
- Day 13-15: Phase 8 Polish, validation, deployment

Total: 15 working days (3 weeks) for full implementation including Polish
MVP: 10 working days (2 weeks) for User Stories 1-3

---

## Task Checklist Status

**Format Validation**: All tasks follow strict checklist format
- ✅ All tasks have checkbox: `- [ ]`
- ✅ All tasks have sequential ID: T001-T072
- ✅ Parallel tasks marked: `[P]`
- ✅ User story tasks labeled: `[US1]`, `[US2]`, etc.
- ✅ All tasks include file paths
- ✅ No ambiguous or vague tasks
- ✅ Each task independently executable

**Total Task Count**: 72 tasks
- Phase 1 Setup: 5 tasks
- Phase 2 Foundational: 7 tasks
- Phase 3 User Story 1: 8 tasks
- Phase 4 User Story 2: 8 tasks
- Phase 5 User Story 3: 13 tasks
- Phase 6 User Story 4: 7 tasks
- Phase 7 User Story 5: 14 tasks
- Phase 8 Polish: 10 tasks
