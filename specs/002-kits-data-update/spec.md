# Feature Specification: Kits Data Model & Admin Workflow

**Feature Branch**: `002-kits-data-update`
**Created**: 2025-12-06
**Status**: Draft
**Input**: Redesign kits data model and implement semi-automated workflow for admin updates. Delete mock data. Enable admin to add new kits by providing GitHub repo link - workflow uses Claude Code/Windsurf/Cursor search to generate featured_kits.md. Data module extracts structured kit information. Set up for future automatic GitHub updates via Vercel cron.

## Overview

This feature establishes a scalable data infrastructure for managing GitHub-based kits (pmf-kit, blog-tech-kit, twitter-init-kit) and similar products. Currently, kit metadata is hardcoded in `data/featured_kits.md`. This feature:

1. **Removes mock data** - Replace hardcoded kit data with real structured records
2. **Defines unified data schema** - Create a TypeScript interface that all kits conform to
3. **Enables semi-automated admin workflow** - Allow admins to add new kits by providing only a GitHub repo URL
4. **Extracts structured information** - Use AI agent search (Claude Code, Windsurf, Cursor) to auto-generate kit metadata from GitHub READMEs
5. **Prepares for auto-updates** - Architecture supports future GitHub API cron jobs for automatic star counts and metadata refresh

---

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Admin adds new kit via GitHub URL (Priority: P1)

Admin wants to onboard a new GitHub-based toolkit (e.g., a third tool like `design-kit` or `data-kit`) without manually writing JSON/YAML. They should be able to provide just the GitHub repo URL, and the system auto-generates 80% of the metadata.

**Why this priority**: Core workflow enables scaling beyond initial 3 kits. Without this, every new kit requires manual data entry. This is the primary value of the redesign.

**Independent Test**: Admin provides a GitHub URL → workflow generates a kit record with all essential fields populated → record is valid and displayable on the website.

**Acceptance Scenarios**:

1. **Given** admin has access to add a new kit, **When** they provide a GitHub repo URL (e.g., `https://github.com/agentii-ai/design-kit.git`), **Then** the workflow generates a markdown file with extracted kit metadata (name, description, tech stack, workflows, structure).
2. **Given** the generated metadata file exists, **When** admin reviews it in their editor (Claude Code/Windsurf/Cursor), **Then** they can quickly edit/validate and the data module imports it successfully.
3. **Given** a new kit is added, **When** the website is rebuilt, **Then** the new kit appears in the "Featured Kits" section without code changes.

---

### User Story 2 - Structured kit data is queryable and type-safe (Priority: P1)

Frontend components and data consumers need type-safe access to kit metadata. The data model must be well-defined, consistent, and easily imported by components.

**Why this priority**: Equally critical to Story 1. Without a clean data model, extracted data is useless. Type safety prevents bugs and enables IDE autocomplete.

**Independent Test**: TypeScript data model is defined → data consumers import and use it → IDE shows autocomplete for kit properties → build catches type errors.

**Acceptance Scenarios**:

1. **Given** a kit data record exists, **When** a component imports it, **Then** TypeScript knows all properties (id, name, emoji, workflows, etc.) without `any` types.
2. **Given** an admin edits a kit record, **When** they save it, **Then** TypeScript validation catches missing required fields or type mismatches before runtime.
3. **Given** the data module loads all kits, **When** a component needs to list workflows for a specific kit, **Then** it can query nested arrays type-safely (e.g., `kit.workflows.find(w => w.id === 'planning')`).

---

### User Story 3 - Mock data is removed and replaced with real kit data (Priority: P1)

The codebase currently has placeholder/mock kit data. This feature replaces it with real metadata from the three existing kits (pmf-kit, blog-tech-kit, twitter-init-kit).

**Why this priority**: Data integrity and accuracy. Mock data should not ship to production. Real data ensures the feature is production-ready from day one.

**Independent Test**: Build and deploy → inspect data/kits module → all three real kits are present with correct metadata → no mock/placeholder data remains.

**Acceptance Scenarios**:

1. **Given** the three real kits (pmf-kit, blog-tech-kit, twitter-init-kit) exist on GitHub, **When** the data extraction workflow runs, **Then** it extracts and validates metadata for all three.
2. **Given** real kit data is loaded, **When** the website renders the Featured Kits section, **Then** it displays accurate names, descriptions, workflows, and GitHub URLs.
3. **Given** mock data previously existed, **When** code is reviewed, **Then** no placeholder kit data or hardcoded test records remain.

---

### User Story 4 - Infrastructure supports future automatic updates (Priority: P2)

While manual admin updates are the current workflow, the architecture must be extensible to support automatic GitHub data refresh via Vercel cron jobs (addressing the readme_solution.md use case).

**Why this priority**: Non-blocking but important for scalability. Future admins should not need to re-architect; the foundation should be in place.

**Independent Test**: Data loading logic is separated from data storage → code is written to accept data from both manual files and API sources → no tight coupling to file system.

**Acceptance Scenarios**:

1. **Given** a kit record exists in the data module, **When** the data source is switched from a static file to an API endpoint, **Then** the consuming code requires no changes.
2. **Given** a Vercel cron endpoint will update kit metadata (stars, last updated, etc.), **When** that endpoint becomes available, **Then** it can write updates to the data module without code changes to consuming components.

---

### User Story 5 - Data extraction workflow is documented for admins (Priority: P2)

Admins need clear instructions on how to extract kit metadata from a new GitHub repo using Claude Code, Windsurf, or Cursor.

**Why this priority**: Enables self-service adoption. Without docs, admins will struggle or ask for help repeatedly.

**Independent Test**: Documentation exists → a new admin follows the steps → they successfully extract metadata from a test GitHub repo.

**Acceptance Scenarios**:

1. **Given** an admin reads the extraction workflow documentation, **When** they follow the steps using Claude Code, **Then** they produce a valid kit metadata file in the expected format.
2. **Given** a kit metadata file is generated, **When** an admin compares it to the schema, **Then** all required fields are populated and types are correct.

---

### Edge Cases

- What happens if an admin provides an invalid GitHub URL (404, private repo)?
- What happens if a GitHub repo exists but lacks a README or proper structure?
- What happens if a kit is removed from GitHub but still exists in the data?
- How should the system handle kit metadata that conflicts with earlier cached versions?
- What if an admin manually edits a kit record and introduces a type error?

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST define a unified TypeScript `Kit` interface that all kit records conform to, including: id, name, emoji, tagline, description, domain, GitHub URL, CLI config, workflows, project structure, templates, and status.

- **FR-002**: System MUST provide a data extraction workflow (documented as a guide) that admins can execute in Claude Code, Windsurf, or Cursor to generate a kit metadata markdown file from a GitHub repo URL.

- **FR-003**: The data extraction workflow MUST use the AI agent's built-in search/fetch capabilities (e.g., WebFetch or MCP tools) to retrieve GitHub README, project structure, and command definitions from a provided repo URL.

- **FR-004**: System MUST provide a data import/parsing function that converts extracted markdown metadata into typed `Kit` records that conform to the TypeScript schema.

- **FR-005**: System MUST replace all existing mock/placeholder kit data with real metadata from the three production kits (pmf-kit, blog-tech-kit, twitter-init-kit).

- **FR-006**: System MUST store kit data in a structured format (TypeScript, JSON, or YAML) in the `data/` directory, with each kit record independently queryable.

- **FR-007**: System MUST expose kit data via a clean TypeScript module (e.g., `data/kits.ts`) that components can import without dealing with file I/O or parsing logic.

- **FR-008**: System MUST validate all kit records at build time to ensure no missing required fields or type mismatches.

- **FR-009**: System MUST organize kit data to support future dynamic updates from GitHub API endpoints (e.g., star counts) without requiring changes to consuming code.

- **FR-010**: System MUST support a `status` field on each kit (e.g., 'featured', 'experimental', 'archived') to control visibility on the website without deleting records.

---

### Key Entities *(include if feature involves data)*

**Kit**
- **id**: Unique identifier (e.g., 'pmf-kit', 'blog-tech-kit')
- **name**: Display name (e.g., 'PMF Kit')
- **emoji**: Visual icon (e.g., '🎯')
- **shortTagline**: One-line summary (e.g., "Discover and validate product-market fit faster with AI agents.")
- **longDescription**: Multi-sentence description of the toolkit's purpose
- **domain**: Category (e.g., 'pmf', 'blog', 'twitter')
- **githubUrl**: Public repository URL
- **status**: Visibility state ('featured' | 'experimental' | 'archived')
- **cli**: Configuration for CLI installation (oneTimeCommand, checkCommand, installCommand, binaryName)
- **aiAgentsSupported**: List of supported AI coding agents
- **slashCommandNamespace**: Agent command prefix (e.g., '/pmfkit.*')
- **coreSlashCommands**: List of primary agent commands
- **workflows**: Array of workflow phases (specification, clarification, planning, tasks, execution)
- **projectStructure**: Array of key directories/files with labels and categories
- **templates**: Array of reusable templates (spec, plan, tasks, checklist, etc.)
- **constitution**: Kit principles and guidelines
- **examplesByUseCase**: Real-world examples of who uses this kit
- **prerequisites**: Required software/knowledge to use the kit
- **targetUsers**: Target audience (e.g., 'Founders', 'Content teams')
- **benefits**: High-level value propositions

**KitWorkflowPhase**
- **id**: Workflow identifier (e.g., 'specification', 'clarification')
- **name**: Display name
- **description**: What this phase accomplishes
- **slashCommand**: Associated agent command
- **keyOutputs**: Array of deliverables/outputs from this phase

**KitCliConfig**
- **oneTimeCommand**: One-time install via `uvx` or `npx`
- **checkCommand**: Verification command to test installation
- **installCommand**: Persistent install via `uv tool install` or `npm install -g`
- **binaryName**: Command-line binary name (e.g., 'pmf', 'blog', 'twitterify')

---

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: All three production kits (pmf-kit, blog-tech-kit, twitter-init-kit) are represented in the data module with complete, accurate metadata (no mock data remains).

- **SC-002**: A new kit can be added by an admin within 15 minutes using the documented extraction workflow, from GitHub URL to validated data record.

- **SC-003**: All kit data is type-safe; TypeScript build catches 100% of schema violations (missing fields, wrong types) before runtime.

- **SC-004**: Website renders Featured Kits section without any changes to React/frontend code when a new kit is added to the data module.

- **SC-005**: Documentation exists and a test admin can follow the extraction workflow to successfully onboard a kit without external help.

- **SC-006**: Data module structure allows swapping the data source (static file → API endpoint) without changes to consuming components (future-proofing).

- **SC-007**: Kit records can be queried, filtered, and sorted by id, domain, status, and other fields with zero runtime overhead (all lookups are O(1) or O(n)).

---

## Assumptions

1. **Scope of extraction**: The AI agent extraction workflow will focus on README, CLI installation, commands, and project structure. Full implementation details (source code, internal architecture) are out of scope.

2. **Data format**: Kit metadata will be stored as TypeScript interfaces initially (in `data/kits.ts`), not JSON/YAML, to ensure type safety and IDE support.

3. **Three real kits**: The three kits referenced (pmf-kit, blog-tech-kit, twitter-init-kit) all exist and are publicly available on GitHub with proper documentation.

4. **Manual extraction**: Current workflow is manual (admin uses Claude Code to extract); automatic GitHub cron jobs are planned for future phases and are not part of this feature.

5. **No breaking changes**: Redesign must not break existing components that currently consume kit data; migration must be backward-compatible or require only minor component updates.

6. **Governance**: An admin/maintainer has permission to approve and merge new kit additions; no additional permission/voting system is needed.

7. **Schema stability**: The Kit interface will evolve, but core fields (id, name, description, domain, status) will remain consistent across all versions.

---

## Out of Scope

- Automatic GitHub API polling or Vercel cron job implementation (reserved for future feature)
- UI components for the Featured Kits section (existing components will consume the new data)
- Permission/authentication system for admin workflows (assumes trusted admin)
- Internationalization or multi-language kit descriptions
- Analytics or tracking of which kits are viewed/clicked

---

## Implementation Notes for Planning Phase

1. **Schema Definition**: Start by finalizing the `Kit` TypeScript interface based on the three real kits and the schema outlined in `featured_kits.md`.

2. **Data Extraction Workflow**: Create a step-by-step guide (as markdown in `.specify/` or docs/) showing how to use Claude Code/Windsurf/Cursor to extract kit metadata from a GitHub repo.

3. **Real Data Import**: Extract and populate real data for all three kits, replacing mock data.

4. **Data Module Setup**: Create `data/kits.ts` that exports typed kit records and any query helpers (e.g., `getKitsByDomain()`, `getFeaturedKits()`).

5. **Validation & Testing**: Implement build-time validation to ensure all kit records conform to the schema.

6. **Documentation**: Write admin-facing docs on how to add new kits using the extraction workflow.

7. **Future Gateway**: Design data loading to be flexible (file-based now, API-based later) to support automatic updates without code changes.
