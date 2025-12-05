# Implementation Plan: Kits Data Model & Admin Workflow

**Branch**: `002-kits-data-update` | **Date**: 2025-12-06 | **Spec**: [spec.md](spec.md)
**Input**: Feature specification from `/specs/002-kits-data-update/spec.md`

**Note**: This plan follows the `/speckit.plan` execution workflow and aligns with agentii-kit's Next.js 14 + Nextra + TypeScript tech stack.

## Summary

Replace hardcoded kit metadata with a unified TypeScript data model. Enable admins to add new kits by providing only a GitHub repo URL (auto-extracted metadata via Claude Code/Windsurf/Cursor). Delete all mock data and populate real kit records for pmf-kit, blog-tech-kit, and twitter-init-kit. Architecture supports future automatic GitHub API updates via Vercel cron without code changes.

## Technical Context

**Language/Version**: TypeScript 5.3+ with Next.js 14 (App Router)
**Primary Dependencies**: React 18, Next.js 14, Nextra 4.6, Tailwind CSS 3.3, lucide-react, gray-matter
**Storage**: Static TypeScript files (`.ts`) and JSON in `data/` directory; file-based with future API abstraction
**Testing**: Next.js built-in testing; TypeScript compile-time validation; manual component testing
**Target Platform**: Web (Nextra blog platform deployed on Vercel)
**Project Type**: Web application with static site generation (SSG)
**Performance Goals**: Build time <60s; Lighthouse score ≥90; LCP <2.5s (from Constitution Principle III)
**Constraints**: Content-first, Git-driven workflow; no server-side rendering for dynamic content; SEO-obsessed (Constitution Principle II)
**Scale/Scope**: 3 real kits initially; designed to scale to 10+ kits; support for multiple kit domains (PMF, blog, Twitter, and future domains)

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

### Principle I: Content-First (Markdown & Git-Driven) ✅ PASS
- **Requirement**: Kit metadata will be stored in TypeScript files in `data/` directory, versioned in Git
- **Compliance**: All kit changes flow through Git → PR review → merge workflow (no direct UI publishing)
- **Verification**: Kit data changes require Git commits and PR approval

### Principle II: SEO-Obsessed ✅ PASS
- **Requirement**: Kit data structure must support rich metadata for search engine indexing
- **Compliance**: Kit interface includes all SEO fields (description, github URL, tags, domain)
- **Verification**: Featured Kits section will use structured data (JSON-LD) for SEO

### Principle III: Static Site Generation ✅ PASS
- **Requirement**: No server-side rendering for dynamic kit data; all data must be pre-computed at build time
- **Compliance**: Kit data loaded statically at build time; no API endpoints for kit metadata in Phase 1
- **Verification**: Kit module exports typed records that are baked into the static HTML at build time

### Principle IV: Admin-Only Publishing ✅ PASS
- **Requirement**: Kit additions/changes require Git workflow with code review
- **Compliance**: Admin extraction workflow produces markdown → admin commits → PR review → merge
- **Verification**: All kit data changes tracked in Git history with committer attribution

### Principle V: Design Reference Separation ✅ PASS
- **Requirement**: Primary frontend (repo root) is the canonical source; kit data lives here only
- **Compliance**: Kit data stored in primary frontend only (`data/kits.ts`), not in secondary design reference
- **Verification**: No duplication of kit metadata across repositories

**Overall Status**: ✅ NO VIOLATIONS. Feature aligns with all 5 constitutional principles.

---

## Project Structure

### Documentation (this feature)

```text
specs/002-kits-data-update/
├── plan.md              # This file (implementation plan)
├── spec.md              # Feature specification
├── research.md          # Phase 0: Research findings (to be generated in Phase 0)
├── data-model.md        # Phase 1: Data model and entity definitions (to be generated)
├── quickstart.md        # Phase 1: Admin extraction workflow guide (to be generated)
├── contracts/           # Phase 1: API contracts and data schemas (to be generated)
│   └── kit-schema.ts    # TypeScript interfaces for Kit entities
└── checklists/
    └── requirements.md  # Quality checklist (already created)
```

### Source Code (repository root)

```text
data/
├── kits.ts                      # REFACTOR: Unified Kit interface + real kit records
├── featured_kits.md             # DELETE: Mock data (replaced by data/kits.ts)
└── kits.json                    # NEW: JSON export of kit data (optional, for future API)

components/
├── FeaturedKits.tsx             # CONSUME: Will use new unified kit data
├── KitCard.tsx                  # REFACTOR: Update to use new Kit interface
└── (existing components remain)

lib/
├── kit-utils.ts                 # NEW: Query helpers (getKitsByDomain, getFeaturedKits, etc.)
└── (existing utilities remain)

.specify/
├── docs/                        # NEW: Admin documentation
│   └── kit-extraction-workflow.md   # Step-by-step guide for admin kit extraction
└── (existing templates remain)
```

**Structure Decision**: This feature integrates into the existing Next.js web application structure. No new directories required beyond `lib/kit-utils.ts` for helper functions. The unified Kit interface replaces mock data in `data/kits.ts`. Admin workflow is documented in `.specify/docs/` for reference during kit extraction.

---

## Complexity Tracking

> No constitution violations. No complexity justifications needed.

---

## Implementation Phases

### Phase 0: Research & Design Decisions

**Deliverable**: `research.md` documenting all design decisions

#### Research Tasks

1. **Kit Data Schema Design**
   - Review current `data/kits.ts` interface (existing Kit interface)
   - Compare with specification `Key Entities` section
   - Document required fields vs. optional fields
   - Define validation rules for each field
   - Decision: Extend existing Kit interface or create new unified interface?

2. **Admin Extraction Workflow**
   - Research Claude Code, Windsurf, Cursor API capabilities (WebFetch, MCP tools)
   - Document best practices for fetching GitHub README via these tools
   - Design extraction prompt template for AI agents
   - Decision: Use WebFetch or raw GitHub API calls within agent context?

3. **Data Storage Strategy**
   - TypeScript file vs. JSON vs. hybrid approach?
   - How to export kit data for future API consumption?
   - Decision: TypeScript for development, JSON export for future Vercel cron API?

4. **Component Integration**
   - Audit existing FeaturedKits.tsx and KitCard.tsx for current data consumption
   - Identify breaking changes required
   - Decision: Backward compatibility layer needed?

#### Research Outputs to Document

- Kit interface field mapping (required → optional)
- Admin extraction workflow steps (as pseudo-code or flow diagram)
- Storage format decision and rationale
- Component migration plan with minimal breakage
- FAQ for common admin extraction errors

**Phase 0 Completion Gate**: All NEEDS CLARIFICATION markers resolved in research.md

---

### Phase 1: Data Model & Schema Design

**Prerequisites**: `research.md` complete

**Deliverables**: `data-model.md`, `contracts/kit-schema.ts`, `quickstart.md`, updated agent context

#### 1.1 Data Model Design (`data-model.md`)

Document the final Kit data structure:

```typescript
// Entity: Kit
{
  id: string                        // unique identifier: 'pmf-kit', 'blog-tech-kit'
  name: string                      // display name: 'PMF Kit'
  emoji: string                     // visual icon: '🎯'
  shortTagline: string              // one-liner
  longDescription: string           // multi-sentence description
  domain: 'pmf' | 'blog' | 'twitter' | ...  // category
  githubUrl: string                 // public repo URL
  specDocUrl?: string               // optional link to spec
  status: 'featured' | 'experimental' | 'archived'

  // CLI Configuration
  cli: {
    oneTimeCommand: string          // uvx ... or npx ...
    checkCommand: string
    installCommand: string          // uv tool install ... or npm install -g ...
    binaryName: string              // command name: 'pmf', 'blog', 'twitterify'
  }

  // Agent Integration
  aiAgentsSupported: string[]       // ['Claude Code', 'Cursor', 'Windsurf']
  slashCommandNamespace: string     // '/pmfkit.*'
  coreSlashCommands: string[]       // ['/pmfkit.pmf', '/pmfkit.plan', ...]

  // Workflows
  workflows: KitWorkflowPhase[]     // [{ id, name, description, slashCommand, keyOutputs }, ...]

  // Structure & Templates
  projectStructure: KitProjectStructureNode[]
  templates: KitTemplate[]
  constitution: KitConstitution

  // Metadata
  examplesByUseCase: string[]       // use case examples
  prerequisites: string[]           // required software
  targetUsers: string[]             // audience
  benefits: string[]                // value props
}

// Entity: KitWorkflowPhase
{
  id: string                        // 'specification', 'clarification', etc.
  name: string                      // 'Specification'
  description: string               // what this phase does
  slashCommand: string              // '/pmfkit.pmf'
  keyOutputs: string[]              // deliverables
}

// Entity: KitCliConfig
{
  oneTimeCommand: string
  checkCommand: string
  installCommand: string
  binaryName: string
}
```

**Validation Rules**:
- All `id` values must be unique and lowercase
- `shortTagline` max 120 characters (fits in meta descriptions)
- `status` must be one of the allowed enum values
- `workflows` array must contain at least 3 phases (specification, planning, execution)
- `coreSlashCommands` must match `/[domain]kit.*` pattern
- All URLs must be valid and accessible
- Build-time TypeScript compilation must catch type violations

#### 1.2 Schema Contracts (`contracts/kit-schema.ts`)

Create TypeScript interfaces for all Kit entities:

```typescript
// File: specs/002-kits-data-update/contracts/kit-schema.ts

export type KitDomain = 'pmf' | 'blog' | 'twitter' | 'growth' | 'sales' | 'seo';
export type KitStatus = 'featured' | 'experimental' | 'archived';
export type WorkflowPhaseId = 'specification' | 'clarification' | 'planning' | 'task-breakdown' | 'execution';

export interface KitWorkflowPhase {
  id: WorkflowPhaseId;
  name: string;
  description: string;
  slashCommand: string;
  keyOutputs: string[];
}

export interface KitCliConfig {
  oneTimeCommand: string;
  checkCommand: string;
  installCommand: string;
  binaryName: string;
}

export interface KitProjectStructureNode {
  path: string;
  label: string;
  category: 'commands' | 'templates' | 'memory' | 'scripts' | 'refs' | 'specs' | 'other';
}

export interface KitTemplate {
  id: string;
  path: string;
  type: 'spec' | 'plan' | 'tasks' | 'checklist' | 'post' | 'campaign';
  description: string;
}

export interface KitConstitution {
  path: string;
  principles: string[];
}

export interface Kit {
  id: string;
  name: string;
  emoji: string;
  shortTagline: string;
  longDescription: string;
  domain: KitDomain;
  githubUrl: string;
  specDocUrl?: string;
  implementationPlanUrl?: string;
  upstreamSpecKitUrl?: string;
  status: KitStatus;

  cli: KitCliConfig;
  aiAgentsSupported: string[];
  slashCommandNamespace: string;
  coreSlashCommands: string[];

  workflows: KitWorkflowPhase[];
  projectStructure: KitProjectStructureNode[];
  templates: KitTemplate[];
  constitution: KitConstitution;

  examplesByUseCase: string[];
  prerequisites: string[];
  targetUsers: string[];
  benefits: string[];
}

// Validation function
export function validateKit(kit: unknown): kit is Kit {
  // Type guard implementation for runtime validation
  // Checks all required fields, types, and domain-specific rules
}
```

#### 1.3 Admin Extraction Workflow Guide (`quickstart.md`)

Step-by-step instructions for admins to extract new kit metadata:

```markdown
# Kit Extraction Workflow Guide

## Prerequisites
- Access to Claude Code, Windsurf, or Cursor
- GitHub repository URL of the kit to extract
- Familiarity with the kit data schema (see data-model.md)

## Workflow Steps

### Step 1: Prepare Kit Repository URL
Gather the GitHub repository URL (e.g., https://github.com/agentii-ai/design-kit.git)

### Step 2: Use AI Agent to Extract Metadata
Open Claude Code / Windsurf / Cursor and use the WebFetch tool or search capability to:
1. Fetch the README from the GitHub repository
2. Extract key information:
   - Repository name, description, purpose
   - Main features and use cases
   - CLI installation commands
   - Agent slash commands (from .claude/commands/ directory)
   - Project structure and key folders
   - Technology stack and prerequisites

### Step 3: Generate Metadata Markdown
Ask the AI agent to generate a markdown file following the structure in data-model.md

### Step 4: Validate Against Schema
Compare the generated metadata against the Kit interface in contracts/kit-schema.ts
Check:
- All required fields present
- `id` is unique and lowercase
- `shortTagline` is ≤120 characters
- All URLs are valid
- `workflows` array has ≥3 phases
- `status` is one of: 'featured', 'experimental', 'archived'

### Step 5: Add to data/kits.ts
1. Copy validated kit record into data/kits.ts kits array
2. Run TypeScript compile check: `npm run type-check`
3. Verify no type errors

### Step 6: Test Build
1. Run `npm run build`
2. Verify build succeeds and <60 seconds
3. Inspect output to confirm kit appears in Featured Kits section

### Step 7: Submit PR
1. Commit changes: `git commit -m "feat: add [kit-name] kit"`
2. Push to feature branch
3. Create PR with description of new kit
4. Request code review

### Step 8: Merge & Deploy
After approval, merge to main. Vercel auto-deploys. New kit appears on website.
```

#### 1.4 Agent Context Update

- Run `.specify/scripts/bash/update-agent-context.sh claude` (or equivalent for Cursor/Windsurf)
- Add kit extraction workflow as a new agent command reference
- Preserve manual additions (content between markers)
- Add only new technology from this plan (Kit interface, admin workflow)

**Phase 1 Completion Gate**: All schema files created, validated, and agents updated

---

### Phase 2: Implementation Tasks

**Note**: Phase 2 task generation deferred to `/speckit.tasks` command

**Preview of tasks to be generated**:

1. **Data Model Implementation**
   - Refactor `data/kits.ts`: Extend Kit interface with all specification fields
   - Create `lib/kit-utils.ts`: Helper functions (getKitsByDomain, getFeaturedKits, validateKit)
   - Add TypeScript build-time validation

2. **Real Kit Data Population**
   - Extract real metadata for pmf-kit (from https://github.com/agentii-ai/pmf-kit)
   - Extract real metadata for blog-tech-kit
   - Extract real metadata for twitter-init-kit
   - Populate `data/kits.ts` with real records

3. **Mock Data Deletion**
   - Remove `featured_kits.md`
   - Clean `data/kits.ts` of mock/placeholder records

4. **Component Integration**
   - Update `components/FeaturedKits.tsx` to consume new Kit interface
   - Update `components/KitCard.tsx` for new data structure
   - Verify no breakage in existing components

5. **Admin Documentation**
   - Create `.specify/docs/kit-extraction-workflow.md`
   - Add examples of successful kit extractions
   - Document common errors and troubleshooting

6. **Testing & Validation**
   - Build-time validation: `npm run type-check` passes 100%
   - Render test: Featured Kits section displays all 3 kits correctly
   - Performance test: Build completes in <60 seconds
   - Lighthouse audit: Score ≥90 on all pages

---

## Success Criteria Mapping

| Success Criteria | Implementation Task |
|------------------|-------------------|
| SC-001: Real kits in data module, no mock data | Real Kit Data Population + Mock Data Deletion tasks |
| SC-002: New kit added in <15 min | Admin Documentation + Workflow validation |
| SC-003: Type-safe build validation | Data Model Implementation + build-time validation task |
| SC-004: No code changes needed for new kit | Component Integration task (verify components consume data dynamically) |
| SC-005: Documentation exists | Admin Documentation task |
| SC-006: Data source swappable | Architecture: Implement data loading abstraction in `lib/kit-utils.ts` |
| SC-007: Kit queries performant | Implement query helpers with O(1) and O(n) complexity |

---

## Risks & Mitigation

| Risk | Impact | Mitigation |
|------|--------|-----------|
| Existing components break with new interface | High | Phase 1 research identifies all breaking changes; Phase 2 tests all components |
| Admin extraction workflow too complex | Medium | Create clear step-by-step guide; test with non-developer admin |
| Build time exceeds 60 seconds | Medium | Monitor build performance; optimize if needed |
| GitHub API rate limits during extraction | Low | Use personal access tokens; cache results |
| Kit data inconsistency between real repos | Low | Build-time validation catches missing/invalid fields |

---

## Timeline & Priorities

**Phase 1 (Planning)**: 1-2 days
- Research and finalize schema
- Create contracts and documentation
- Update agent context

**Phase 2 (Implementation)**: 3-5 days
- Implement new data model
- Extract and populate real kit data
- Update components
- Testing and validation

**Phase 3 (Launch)**: 1 day
- PR review and approval
- Merge and deploy
- Monitor production for issues

Total Estimate: 5-8 days for full implementation
