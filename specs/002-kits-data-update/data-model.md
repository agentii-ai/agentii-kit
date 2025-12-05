---
title: "Kits JSON Schema Documentation"
description: "JSON export format specification for kit data - prepared for future Vercel API integration"
---

# Kits JSON Schema Documentation

**Purpose**: Define the JSON export format for kit data to support future automatic GitHub API updates via Vercel cron jobs

**Status**: Phase 2 Design (Implementation deferred to Phase 4)

**Created**: 2025-12-06

**Relevant Tasks**: T005, Phase 6 (US4 - Extensible Architecture)

---

## Overview

While kit data is currently stored as TypeScript in `data/kits.ts` (Phase 2), the architecture must support future migration to API-based sources. This document specifies how kit data will be exported to JSON format, enabling:

1. **Vercel Cron Job Integration** (Phase 4): Automatic GitHub star count updates
2. **External API Consumption**: Third-party tools accessing kit data
3. **Data Portability**: Easy export/import of kit collections
4. **Build-Time Optimization**: Separation of data from code

---

## JSON Export Structure

### Root Schema

```json
{
  "version": "1.0",
  "exportedAt": "2025-12-06T10:30:00Z",
  "kits": [
    { "Kit 1 object..." },
    { "Kit 2 object..." }
  ]
}
```

### Complete Example

```json
{
  "version": "1.0",
  "exportedAt": "2025-12-06T10:30:00Z",
  "kits": [
    {
      "id": "pmf-kit",
      "name": "PMF Kit",
      "emoji": "🎯",
      "shortTagline": "Discover and validate product-market fit faster with AI agents.",
      "longDescription": "Spec-driven toolkit for discovering and validating product-market fit for AI SaaS products. Includes PMF workflows, templates, and AI agent commands.",
      "domain": "pmf",
      "githubUrl": "https://github.com/agentii-ai/pmf-kit",
      "status": "featured",
      "specDocUrl": "https://github.com/agentii-ai/pmf-kit/blob/main/specs/pmf-kit-spec.md",
      "implementationPlanUrl": null,
      "upstreamSpecKitUrl": "https://github.com/github/spec-kit",
      "cli": {
        "oneTimeCommand": "uvx pmf-kit@latest",
        "checkCommand": "pmf --version",
        "installCommand": "uv tool install pmf-kit",
        "binaryName": "pmf"
      },
      "aiAgentsSupported": [
        "Claude Code",
        "Cursor",
        "Windsurf"
      ],
      "slashCommandNamespace": "/pmfkit.*",
      "coreSlashCommands": [
        "/pmfkit.specify",
        "/pmfkit.plan",
        "/pmfkit.tasks",
        "/pmfkit.implement"
      ],
      "workflows": [
        {
          "id": "specification",
          "name": "Specification",
          "description": "Define what you want to build (requirements, user stories)",
          "slashCommand": "/pmfkit.specify",
          "keyOutputs": ["spec.md", "user stories", "acceptance criteria"]
        },
        {
          "id": "clarification",
          "name": "Clarification",
          "description": "Resolve ambiguities and edge cases",
          "slashCommand": "/pmfkit.clarify",
          "keyOutputs": ["clarifications.md", "resolved questions"]
        },
        {
          "id": "planning",
          "name": "Planning",
          "description": "Create technical implementation plan",
          "slashCommand": "/pmfkit.plan",
          "keyOutputs": ["plan.md", "architecture decisions"]
        },
        {
          "id": "task-breakdown",
          "name": "Task Breakdown",
          "description": "Generate actionable, checkable tasks",
          "slashCommand": "/pmfkit.tasks",
          "keyOutputs": ["tasks.md", "implementation checklist"]
        },
        {
          "id": "execution",
          "name": "Execution",
          "description": "Execute tasks and validate completion",
          "slashCommand": "/pmfkit.implement",
          "keyOutputs": ["completed tasks", "working software"]
        }
      ],
      "projectStructure": [
        {
          "path": "/.claude/commands",
          "label": "AI Agent Commands",
          "category": "commands"
        },
        {
          "path": "/specs",
          "label": "Specification Templates",
          "category": "specs"
        },
        {
          "path": "/templates",
          "label": "Reusable Templates",
          "category": "templates"
        },
        {
          "path": "/constitution.md",
          "label": "Core Principles",
          "category": "refs"
        }
      ],
      "templates": [
        {
          "id": "spec-template",
          "path": "/specs/001-template/spec.md",
          "type": "spec",
          "description": "Feature specification template with all required sections"
        },
        {
          "id": "plan-template",
          "path": "/specs/001-template/plan.md",
          "type": "plan",
          "description": "Implementation plan template with phases and timeline"
        },
        {
          "id": "tasks-checklist",
          "path": "/specs/001-template/tasks.md",
          "type": "tasks",
          "description": "Task breakdown template with dependencies and metrics"
        }
      ],
      "constitution": {
        "path": "/constitution.md",
        "principles": [
          "Content-First: All specs are markdown, versioned in Git",
          "No Mock Data: Always use real, production-ready examples",
          "Type-Safe: All kit configurations conform to strict schemas",
          "Spec-Driven: Follow specification-first, then implementation"
        ]
      },
      "examplesByUseCase": [
        "SaaS founders validating market fit",
        "Product teams discovering new opportunities",
        "Startup accelerators evaluating ideas"
      ],
      "prerequisites": [
        "Node.js 18+ (for CLI)",
        "Claude Code, Cursor, or Windsurf",
        "Basic familiarity with Markdown"
      ],
      "targetUsers": [
        "Founders",
        "Product Managers",
        "Startup Teams"
      ],
      "benefits": [
        "Move from vibe coding to predictable outcomes",
        "Systematic PMF validation with AI assistance",
        "Accelerate time to product-market fit"
      ],
      "slug": "pmf-kit",
      "category": "PM-KIT",
      "tags": [
        "pmf",
        "product-market-fit",
        "research",
        "ai-saas"
      ],
      "github": "https://github.com/agentii-ai/pmf-kit",
      "stars": 2100,
      "lastUpdated": "2025-02-05T09:00:00Z",
      "lastStarCount": 2100,
      "lastStarCountUpdated": "2025-12-06T10:00:00Z",
      "author": {
        "name": "agentii-ai",
        "avatar": "https://avatars.githubusercontent.com/u/..."
      },
      "featured": true
    }
  ]
}
```

---

## Field Specifications

### Root Level

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `version` | string | Yes | Schema version (e.g., "1.0") |
| `exportedAt` | string (ISO 8601) | Yes | Timestamp when JSON was generated |
| `kits` | array | Yes | Array of Kit objects |

### Kit Object

#### Core Identity Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | Yes | Unique identifier (lowercase, hyphen-separated) |
| `name` | string | Yes | Display name for UI |
| `emoji` | string | No | Single Unicode emoji icon |
| `shortTagline` | string | No | One-line summary (max 120 chars) |
| `longDescription` | string | No | Multi-sentence description |
| `domain` | string | No | Kit domain category |
| `githubUrl` | string | No | Public GitHub repository URL |
| `status` | string | No | Visibility status: 'featured', 'experimental', 'archived' |

#### Optional URLs

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `specDocUrl` | string | No | Link to specification documentation |
| `implementationPlanUrl` | string | No | Link to implementation plan |
| `upstreamSpecKitUrl` | string | No | Link to upstream spec-kit reference |

#### CLI Configuration

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `cli` | object | No | CLI installation configuration |
| `cli.oneTimeCommand` | string | No | One-time install command |
| `cli.checkCommand` | string | No | Verification command |
| `cli.installCommand` | string | No | Persistent install command |
| `cli.binaryName` | string | No | Command-line binary name |

#### AI Agent Integration

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `aiAgentsSupported` | array | No | Supported AI agents |
| `slashCommandNamespace` | string | No | Command namespace pattern |
| `coreSlashCommands` | array | No | Core slash commands |

#### Workflows & Structure

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `workflows` | array | No | Workflow phase definitions |
| `projectStructure` | array | No | Repository structure nodes |
| `templates` | array | No | Available templates |
| `constitution` | object | No | Constitution path and principles |

#### Metadata

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `examplesByUseCase` | array | No | Use case examples |
| `prerequisites` | array | No | Requirements to use kit |
| `targetUsers` | array | No | Target audience |
| `benefits` | array | No | Value propositions |

#### Backward Compatibility

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `slug` | string | Yes | URL slug for routing |
| `category` | string | Yes | Legacy category field |
| `tags` | array | Yes | Search tags |
| `github` | string | No | Legacy GitHub URL field |
| `stars` | number | Yes | GitHub star count |
| `lastUpdated` | string (ISO 8601) | Yes | Last modification timestamp |
| `author` | object | Yes | Author information |
| `featured` | boolean | No | Legacy featured flag |

#### Auto-Updated Fields (Phase 4+)

These fields will be automatically updated by Vercel cron jobs:

| Field | Type | Updated By | Description |
|-------|------|-----------|-------------|
| `lastStarCount` | number | GitHub API | Last known star count |
| `lastStarCountUpdated` | string (ISO 8601) | Cron job | When stars were last updated |

---

## Nested Object Schemas

### KitWorkflowPhase

```typescript
{
  "id": "specification",           // specification|clarification|planning|task-breakdown|execution
  "name": "Specification",
  "description": "Define what you want to build",
  "slashCommand": "/pmfkit.specify",
  "keyOutputs": ["spec.md", "user stories"]
}
```

### KitCliConfig

```typescript
{
  "oneTimeCommand": "uvx pmf-kit@latest",
  "checkCommand": "pmf --version",
  "installCommand": "uv tool install pmf-kit",
  "binaryName": "pmf"
}
```

### KitProjectStructureNode

```typescript
{
  "path": "/.claude/commands",
  "label": "AI Agent Commands",
  "category": "commands"           // commands|templates|memory|scripts|refs|specs|other
}
```

### KitTemplate

```typescript
{
  "id": "spec-template",
  "path": "/specs/001-template/spec.md",
  "type": "spec",                  // spec|plan|tasks|checklist|post|campaign
  "description": "Feature specification template"
}
```

### KitConstitution

```typescript
{
  "path": "/constitution.md",
  "principles": [
    "Content-First: All specs are markdown, versioned in Git",
    "Type-Safe: All configurations conform to schemas"
  ]
}
```

### Author

```typescript
{
  "name": "agentii-ai",
  "avatar": "https://avatars.githubusercontent.com/u/..."
}
```

---

## Export Process (Phase 2 Implementation)

### Manual Export Command

**Status**: To be implemented in Phase 2

```bash
# Export all kits to JSON (from data/kits.ts)
npm run export-kits-json

# Output: data/kits.json (generated)
```

### Implementation in package.json

```json
{
  "scripts": {
    "export-kits-json": "ts-node scripts/export-kits.ts"
  }
}
```

### Export Script Template

```typescript
// scripts/export-kits.ts
import { allKits } from '../data/kits';
import fs from 'fs';

const kitsJson = {
  version: '1.0',
  exportedAt: new Date().toISOString(),
  kits: allKits,
};

fs.writeFileSync(
  'data/kits.json',
  JSON.stringify(kitsJson, null, 2)
);

console.log(`✅ Exported ${allKits.length} kits to data/kits.json`);
```

---

## Future API Integration (Phase 4)

### Vercel Cron Job Endpoint

**Status**: Planned for Phase 4

```typescript
// api/cron/update-stars.ts
export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Authenticate cron job
  if (req.headers['authorization'] !== `Bearer ${process.env.CRON_SECRET}`) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  // Fetch GitHub API for star counts
  const kits = await loadKits();

  for (const kit of kits) {
    if (kit.githubUrl) {
      const stars = await fetchGitHubStars(kit.githubUrl);
      kit.lastStarCount = stars;
      kit.lastStarCountUpdated = new Date().toISOString();
    }
  }

  // Export updated JSON
  const updated = await saveKitsJson(kits);

  return res.status(200).json({
    success: true,
    kitsUpdated: kits.length,
    timestamp: new Date().toISOString()
  });
}
```

### Cron Job Configuration

**Status**: Planned for Phase 4

```json
{
  "crons": [{
    "path": "/api/cron/update-stars",
    "schedule": "0 */6 * * *"
  }]
}
```

This runs every 6 hours, updating star counts without manual intervention.

---

## Validation Rules

### Required Fields (Always)

- `id`: Must be unique, lowercase, no spaces
- `name`: 3-50 characters
- `slug`: URL-safe version of ID
- `category`: Valid legacy category
- `tags`: Non-empty array
- `stars`: Non-negative integer
- `lastUpdated`: Valid ISO 8601 timestamp
- `author`: Must have `name` field

### Required Fields (For Real Kits - Phase 3+)

- `emoji`: Single Unicode character
- `shortTagline`: Max 120 characters
- `longDescription`: 2-3 sentences
- `domain`: Valid domain value
- `githubUrl`: Valid HTTPS GitHub URL
- `status`: One of: featured, experimental, archived
- `cli`: Complete KitCliConfig object
- `workflows`: Minimum 3 phases
- `projectStructure`: Minimum 2 nodes
- `templates`: Minimum 1 template
- `constitution`: Must have path and principles

### Validation Constraints

| Field | Constraint | Example |
|-------|-----------|---------|
| `id` | Unique, lowercase, hyphen-separated | ✅ `pmf-kit` ❌ `PMF-Kit` |
| `shortTagline` | ≤120 characters, no newlines | ✅ Valid ❌ Too long or multiline |
| `emoji` | Single Unicode character | ✅ `🎯` ❌ `🎯🚀` |
| `githubUrl` | Must be HTTPS | ✅ `https://github.com/...` ❌ `http://...` |
| `status` | Enum value | ✅ `featured` ❌ `popular` |
| `workflows` | Array with ≥3 phases | ✅ 5 phases ❌ 1 phase |

---

## Versioning Strategy

### Version Scheme

```
version: "MAJOR.MINOR"
```

### Version History

| Version | Changes | Date | Status |
|---------|---------|------|--------|
| 1.0 | Initial schema | 2025-12-06 | Current |
| 1.1 (planned) | Add `lastGitCommit` field for Phase 4 | TBD | Future |
| 1.2 (planned) | Add `popularity` metric | TBD | Future |

### Backward Compatibility

- Consumers must handle additional fields gracefully
- New fields use sensible defaults
- Old fields never removed, only deprecated
- Version field always present for detection

---

## Example Queries (Future API)

Once API is implemented (Phase 4), queries will look like:

```bash
# Get all kits
GET /api/kits?format=json

# Get featured kits
GET /api/kits?status=featured

# Get kits by domain
GET /api/kits?domain=pmf

# Get kit by ID
GET /api/kits/pmf-kit

# Get recently updated
GET /api/kits?sort=lastUpdated&limit=10
```

---

## Storage & Deployment

### Phase 2 (Current)

- **Storage**: `data/kits.json` (generated from data/kits.ts)
- **Deployment**: Committed to Git, baked into Next.js build
- **Update**: Manual via Pull Request

### Phase 4 (Planned)

- **Storage**: Vercel KV (Redis-like key-value store)
- **Deployment**: Automatic via cron job every 6 hours
- **Update**: Automatic GitHub API sync

---

## Performance Considerations

### Current Phase (2)

- JSON size: ~50-100 KB per kit (with full metadata)
- Load time: <50ms (file-based, local)
- Compression: Gzip reduces size by 70-80%

### Future Phase (4)

- Cache TTL: 1 hour in browser
- API response: <200ms (from Vercel KV)
- Rate limits: 1,000 requests/day per IP

---

## Security Considerations

### Public Data

All fields in kits.json are public and safe to expose via API:

```json
{
  "safe": "all kit metadata (names, links, descriptions)"
}
```

### Protected Fields

These fields should NOT be exposed in public API (if added later):

```json
{
  "internal": "maintenance notes, creator credentials, cost data"
}
```

---

## Related Documentation

- [Kit Utilities](../../lib/kit-utils.ts)
- [Kit Schema Contracts](../../specs/002-kits-data-update/contracts/kit-schema.ts)
- [Feature Specification](../../specs/002-kits-data-update/spec.md)
- [Implementation Plan](../../specs/002-kits-data-update/plan.md)
