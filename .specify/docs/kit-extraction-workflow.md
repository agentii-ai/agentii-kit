---
title: "Kit Extraction Workflow Guide"
description: "Step-by-step guide for admins to extract and integrate new kits using Claude Code, Windsurf, or Cursor"
---

# Kit Extraction Workflow Guide

**Purpose**: Enable admins to independently onboard new GitHub-based kits without manual data entry

**Audience**: Agentii-kit maintainers and admins responsible for adding new kits

**Time Required**: 10-15 minutes per kit (with practice)

**Prerequisites**:
- Access to Claude Code, Windsurf, or Cursor
- GitHub repository URL for the kit to extract
- Familiarity with TypeScript interfaces (optional but helpful)

---

## Overview

This guide walks you through the complete process of extracting metadata from a GitHub kit repository and integrating it into the agentii-kit system. The workflow leverages AI agents' built-in WebFetch capabilities to automate 80% of the data extraction.

### Workflow Overview

```
┌─────────────────────────────────────────────────────────┐
│  1. Prepare Kit Repository URL                          │
│  ↓                                                       │
│  2. Use AI Agent to Extract Metadata                    │
│  ↓                                                       │
│  3. Generate Metadata Markdown                          │
│  ↓                                                       │
│  4. Validate Against Schema                             │
│  ↓                                                       │
│  5. Add to data/kits.ts                                 │
│  ↓                                                       │
│  6. Test Build                                          │
│  ↓                                                       │
│  7. Submit PR                                           │
│  ↓                                                       │
│  8. Merge & Deploy                                      │
└─────────────────────────────────────────────────────────┘
```

---

## Step 1: Prepare Kit Repository URL

### What You Need

A valid GitHub repository URL for the kit you want to extract. The repository should be:
- **Public** (accessible without authentication)
- **Complete** with a `README.md` file
- **Well-documented** with clear descriptions of the kit's purpose

### Example Valid URLs

```
https://github.com/agentii-ai/pmf-kit
https://github.com/agentii-ai/blog-tech-kit
https://github.com/agentii-ai/twitter-init-kit
```

### URL Format

The URL must follow the GitHub HTTPS pattern:
```
https://github.com/[owner]/[repo-name]
```

**Validation Checklist**:
- ✅ Starts with `https://github.com/`
- ✅ Repository exists and is public
- ✅ Repository has a `README.md` file
- ✅ You have the correct spelling and case

---

## Step 2: Use AI Agent to Extract Metadata

### Using Claude Code

1. **Open Claude Code** in your development environment
2. **Create a new prompt** with the following template:

```
I need to extract metadata from a GitHub repository to add it to a kits catalog system.

GitHub Repository: [INSERT_URL_HERE]

Please use the WebFetch tool to fetch and analyze the README.md file from this repository.

From the README, extract the following information:

1. **Kit Name**: Display name (e.g., "PMF Kit")
2. **Emoji**: Single emoji icon representing the kit (e.g., "🎯")
3. **Short Tagline**: One-line summary (max 120 characters)
4. **Long Description**: 2-3 sentences describing the kit's purpose
5. **Domain**: Category (e.g., 'pmf', 'blog', 'twitter')
6. **CLI Commands**:
   - One-time install command (e.g., "uvx pmf-kit@latest")
   - Check command (e.g., "pmf --version")
   - Install command (e.g., "uv tool install pmf-kit")
   - Binary name (e.g., "pmf")
7. **AI Agents Supported**: List supported agents (e.g., ['Claude Code', 'Cursor', 'Windsurf'])
8. **Slash Command Namespace**: Pattern like "/pmfkit.*"
9. **Core Slash Commands**: List of main commands (e.g., ['/pmfkit.specify', '/pmfkit.plan'])
10. **Workflows**: List the workflow phases (specification, planning, tasks, execution)
11. **Project Structure**: Key directories (/.claude/commands, /specs, /templates, etc.)
12. **Templates**: Available templates in the kit
13. **Target Users**: Who this kit is for (e.g., Founders, Product Managers)
14. **Prerequisites**: What's needed to use the kit
15. **Benefits**: Key value propositions
16. **Tags**: Relevant tags for search

Provide the extracted information in a structured format that I can easily copy into our kit database.
```

3. **Wait for the response** - The AI will fetch the README and extract the information
4. **Review the extracted data** - Check that all information is accurate and complete

### Using Windsurf or Cursor

The process is identical to Claude Code. Both tools have the same WebFetch capabilities.

---

## Step 3: Generate Metadata Markdown

### Expected Output Format

The AI should provide output similar to this:

```markdown
## Kit Extraction Results

### Core Information
- **Kit Name**: PMF Kit
- **Emoji**: 🎯
- **Short Tagline**: Discover and validate product-market fit faster with AI agents.
- **Domain**: pmf

### CLI Configuration
- **One-Time Command**: uvx pmf-kit@latest
- **Check Command**: pmf --version
- **Install Command**: uv tool install pmf-kit
- **Binary Name**: pmf

### AI Agent Integration
- **Supported Agents**: Claude Code, Cursor, Windsurf
- **Slash Command Namespace**: /pmfkit.*
- **Core Commands**:
  - /pmfkit.specify
  - /pmfkit.plan
  - /pmfkit.tasks
  - /pmfkit.implement

### Workflows
- Specification: Define requirements
- Clarification: Resolve ambiguities
- Planning: Create implementation plan
- Tasks: Generate actionable checklist
- Execution: Execute tasks

### Structure
- /.claude/commands - AI agent commands
- /specs - Specification templates
- /templates - Reusable templates
- /constitution.md - Core principles

[... continued ...]
```

### Save the Output

Copy the extracted metadata into a text file or document for the next step.

---

## Step 4: Validate Against Schema

### TypeScript Kit Interface

Compare your extracted data against the required Kit interface. The following fields are **REQUIRED** for new real kits (Phase 3+):

**Required Fields**:
```typescript
id: string;                    // Unique identifier (e.g., 'pmf-kit')
name: string;                  // Display name (e.g., 'PMF Kit')
emoji: string;                 // Single emoji (e.g., '🎯')
shortTagline: string;          // Max 120 characters
longDescription: string;       // 2-3 sentences
domain: KitDomain;             // One of: 'pmf', 'blog', 'twitter', etc.
githubUrl: string;             // Full GitHub HTTPS URL
status: KitStatus;             // 'featured', 'experimental', or 'archived'
cli: KitCliConfig;             // CLI installation config object
aiAgentsSupported: string[];   // Supported agents
slashCommandNamespace: string; // Pattern like '/pmfkit.*'
coreSlashCommands: string[];   // Min 3 commands
workflows: KitWorkflowPhase[]; // Min 3 workflow phases
projectStructure: KitProjectStructureNode[]; // Key directories
templates: KitTemplate[];      // Available templates
constitution: KitConstitution; // Path and principles
```

**Optional Fields** (can be empty for now):
- `examplesByUseCase`: Use case examples
- `prerequisites`: Required software/knowledge
- `targetUsers`: Target audience
- `benefits`: Value propositions

### Validation Checklist

Use this checklist to verify your extracted data:

**Identity Fields**:
- ✅ Kit ID is unique and lowercase (no spaces, format: 'kit-name')
- ✅ Kit name is human-readable (3-50 characters)
- ✅ Emoji is a single Unicode character
- ✅ Short tagline is ≤120 characters and doesn't exceed one line

**Technical Fields**:
- ✅ GitHub URL is valid HTTPS format and publicly accessible
- ✅ Status is one of: 'featured', 'experimental', 'archived'
- ✅ Domain is one of approved categories
- ✅ CLI config has all 4 fields (oneTimeCommand, checkCommand, installCommand, binaryName)

**Agent Integration**:
- ✅ AI agents supported list is non-empty
- ✅ Slash command namespace matches pattern: `/[domain]kit.*`
- ✅ Core slash commands list has at least 3 commands
- ✅ All commands start with correct namespace

**Workflow & Structure**:
- ✅ Workflows array has at least 3 phases
- ✅ Workflow phases include: specification, planning, execution
- ✅ Each workflow has id, name, description, slashCommand, keyOutputs
- ✅ Project structure nodes have path, label, and category

**Templates & Principles**:
- ✅ Templates array is populated (at least 1)
- ✅ Each template has id, path, type, description
- ✅ Constitution has path and non-empty principles array

### Common Validation Errors

| Error | Solution |
|-------|----------|
| "Short tagline exceeds 120 chars" | Reduce tagline to ≤120 characters, remove details |
| "Invalid kit ID (contains spaces)" | Replace spaces with hyphens, use lowercase: 'my-kit' not 'My Kit' |
| "Status not in enum" | Use only: 'featured', 'experimental', or 'archived' |
| "Less than 3 commands" | Add more slash commands (e.g., /domain.clarify, /domain.execute) |
| "GitHub URL not HTTPS" | Ensure URL starts with 'https://' not 'http://' |
| "Missing required field" | Check Kit interface, don't leave required fields empty |

---

## Step 5: Add to data/kits.ts

### Locate the File

Navigate to `/Users/frank/X/agentii-kit/data/kits.ts` in your editor.

### Create Kit Record

Based on your validated extraction, create a TypeScript object that conforms to the Kit interface.

### Example Kit Record

```typescript
const newKit: Kit = {
  // Core Identity
  id: 'pmf-kit',
  name: 'PMF Kit',
  emoji: '🎯',
  shortTagline: 'Discover and validate product-market fit faster with AI agents.',
  longDescription: 'Spec-driven toolkit for discovering and validating product-market fit for AI SaaS products...',
  domain: 'pmf',
  githubUrl: 'https://github.com/agentii-ai/pmf-kit',
  status: 'featured',

  // CLI
  cli: {
    oneTimeCommand: 'uvx pmf-kit@latest',
    checkCommand: 'pmf --version',
    installCommand: 'uv tool install pmf-kit',
    binaryName: 'pmf',
  },

  // Agent Integration
  aiAgentsSupported: ['Claude Code', 'Cursor', 'Windsurf'],
  slashCommandNamespace: '/pmfkit.*',
  coreSlashCommands: ['/pmfkit.specify', '/pmfkit.plan', '/pmfkit.tasks'],

  // Workflows & Structure
  workflows: [
    {
      id: 'specification',
      name: 'Specification',
      description: 'Define what you want to build',
      slashCommand: '/pmfkit.specify',
      keyOutputs: ['spec.md', 'user stories'],
    },
    // ... more workflows
  ],

  projectStructure: [
    {
      path: '/.claude/commands',
      label: 'AI Agent Commands',
      category: 'commands',
    },
    // ... more structure nodes
  ],

  templates: [
    {
      id: 'spec-template',
      path: '/specs/template/spec.md',
      type: 'spec',
      description: 'Feature specification template',
    },
    // ... more templates
  ],

  constitution: {
    path: '/constitution.md',
    principles: [
      'Content-first, Git-driven',
      'Type-safe schemas',
    ],
  },

  // Metadata
  examplesByUseCase: ['SaaS founders', 'Product teams'],
  prerequisites: ['Node.js 18+', 'AI agent access'],
  targetUsers: ['Founders', 'Product Managers'],
  benefits: ['Move from vibe to predictable outcomes'],

  // Backward Compatibility
  slug: 'pmf-kit',
  category: KitCategory.PM,
  tags: ['pmf', 'product-market-fit', 'ai-saas'],
  stars: 2100,
  lastUpdated: '2025-02-05T09:00:00Z',
  author: {
    name: 'agentii-ai',
    avatar: 'https://avatars.githubusercontent.com/u/...',
  },
  featured: true,
};
```

### Add to allKits Export

Locate the `export const allKits: Kit[] = mockKits;` statement in data/kits.ts and temporarily add your new kit to the array for testing.

### Run Type Check

```bash
npm run type-check
```

Verify that TypeScript compilation succeeds with your new kit record. Fix any type errors before proceeding.

---

## Step 6: Test Build

### Build the Website

```bash
npm run build
```

The build should complete in <60 seconds and succeed without errors.

### Verify Output

After successful build:

1. **Check Featured Kits Section**: Visit the website and navigate to the Featured Kits section
2. **Verify New Kit Appears**: The new kit should be displayed with all fields rendered correctly
3. **Test Links**: Click on the kit card and verify:
   - Kit name displays correctly
   - Emoji renders properly
   - Tagline is visible and truncated to one line
   - GitHub link points to correct repository
   - All metadata displays

### Performance Check

```bash
npm run build
```

Verify build completes in under 60 seconds (Constitution Principle III requirement).

---

## Step 7: Submit PR

### Create Feature Branch

```bash
git checkout -b feat/add-[kit-name]-kit
```

Example:
```bash
git checkout -b feat/add-design-kit
```

### Stage Changes

```bash
git add data/kits.ts
git add specs/002-kits-data-update/
```

### Commit Changes

```bash
git commit -m "feat: add [Kit Name] kit to catalog

- Extracted metadata from [GitHub URL]
- Added complete Kit interface with all required fields
- Verified TypeScript compilation and build success
- All 3 kits now integrated: pmf-kit, blog-tech-kit, twitter-init-kit"
```

### Push to GitHub

```bash
git push origin feat/add-[kit-name]-kit
```

### Create Pull Request

1. Navigate to the repository on GitHub
2. Click "New Pull Request"
3. Select your feature branch
4. Fill in PR description:

```markdown
## Add [Kit Name] Kit

### Summary
- Added [Kit Name] kit to the catalog
- Extracted metadata from [GitHub URL]
- Kit is marked as 'featured' and ready for production

### Validation
- ✅ TypeScript compilation passes
- ✅ Build completes in <60 seconds
- ✅ Featured Kits section displays all 3 kits
- ✅ New kit links to correct GitHub repository

### Related
Closes #[ISSUE_NUMBER] (if applicable)
```

### Request Review

- Tag maintainers for code review
- Wait for approval
- Address any feedback

---

## Step 8: Merge & Deploy

### Approve PR

Once review is complete and all checks pass, maintainers will approve the PR.

### Merge to Main

The PR will be merged to the `main` branch using GitHub's web interface.

### Verify Deployment

1. **Check Vercel Deployment**: GitHub will trigger automatic Vercel deployment
2. **Monitor Deployment**: Check https://vercel.com for deployment status
3. **Visit Live Site**: Navigate to https://kits.agentii.ai
4. **Verify New Kit**: Confirm new kit appears in Featured Kits section

### Deployment Time

- Build time: ~30-60 seconds
- Deployment time: ~2-5 minutes
- Total time to live: <10 minutes

---

## Worked Example: Extracting Design-Kit

### Step 1: Prepare URL

```
https://github.com/agentii-ai/design-kit
```

### Step 2: Extract Using Claude Code

Using the extraction template above with the URL provided.

### Step 3: AI Agent Output (Sample)

```
## Kit Extraction Results

### Core Information
- Kit Name: Design-System-Kit
- Emoji: 🎨
- Short Tagline: Build consistent design systems with spec-driven templates
- Domain: design-system

### CLI Configuration
- One-Time: uvx design-kit@latest
- Check: design-kit --version
- Install: uv tool install design-kit
- Binary: design-kit

[... continues with all extracted fields ...]
```

### Step 4: Validation

Verify all fields match the Kit interface requirements (see validation checklist above).

### Step 5: Add to Code

Create new kit record and add to data/kits.ts, verify TypeScript compilation passes.

### Step 6: Test Build

```bash
npm run build
# Output: ... Built in 45 seconds ✅
```

### Step 7: Submit PR

```bash
git checkout -b feat/add-design-kit
git add data/kits.ts
git commit -m "feat: add Design-System-Kit to catalog"
git push origin feat/add-design-kit
```

### Step 8: Merge & Deploy

PR approved → Merged → Deployed → Live on kits.agentii.ai ✅

---

## Troubleshooting

### Issue: "WebFetch Tool Not Available"

**Symptom**: Claude Code says WebFetch tool is not available

**Solution**:
1. Ensure you're using the latest version of Claude Code
2. Check that the repository is public (private repos require auth)
3. Try copy-pasting the README content directly instead

### Issue: "GitHub URL Returns 404"

**Symptom**: "Repository not found" error

**Solution**:
1. Verify the repository URL is correct
2. Check that the repository is public
3. Try accessing the URL in a web browser first
4. Verify the repository name spelling and case sensitivity

### Issue: "Incomplete Metadata Extraction"

**Symptom**: Some fields are missing or empty in AI output

**Solution**:
1. Ask the AI to provide more detailed extraction
2. Manually review the GitHub repository README
3. Check for additional documentation files (.claude/commands, specs/, etc.)
4. Fill in missing fields based on repository structure

### Issue: "TypeScript Compilation Errors"

**Symptom**: `npm run type-check` fails after adding new kit

**Solution**:
1. Check that all required fields are present (see validation checklist)
2. Verify field types match the Kit interface
3. Ensure emoji is a single character
4. Verify GitHub URL is valid HTTPS format
5. Review error messages for specific field issues

### Issue: "Build Takes >60 Seconds"

**Symptom**: `npm run build` takes longer than expected

**Solution**:
1. This may indicate build performance regression
2. Check if you added large assets or images
3. Run build on a clean checkout to compare baseline
4. Contact maintainers if regression is significant

### Issue: "Kit Doesn't Appear on Website After Build"

**Symptom**: New kit is in data/kits.ts but not showing on website

**Solution**:
1. Verify kit status is set to 'featured' (or check component filtering logic)
2. Confirm build completed successfully without errors
3. Clear browser cache and reload
4. Check that kit ID is unique (no duplicates)
5. Verify the kit object has all required backward-compatibility fields

---

## FAQ

### How long does kit extraction typically take?

**10-15 minutes** with practice. First extraction may take 20-30 minutes.

### Can I extract multiple kits at once?

Yes! Run parallel extractions in separate Claude Code / Windsurf / Cursor windows. Each extraction is independent.

### What if the GitHub repository doesn't have a README?

The extraction will be incomplete. Try:
1. Contacting the repository maintainer
2. Using documentation from `/docs` or other files
3. Requesting a README be added to the repository

### Can I edit extracted data after importing?

Absolutely! The extracted data is just a starting point. You can:
1. Fix typos or incomplete information
2. Customize taglines and descriptions
3. Add examples and use cases
4. Update workflow definitions

Any changes must be made to the Kit object in data/kits.ts and pass TypeScript validation.

### What if I need to update a kit later?

Simply edit the kit record in data/kits.ts with updated information, commit, and merge as before. The workflow is the same.

### How do I know if the extracted metadata is accurate?

**Validation Steps**:
1. Read the extracted data against the README
2. Test all CLI commands to verify they work
3. Check that workflows match the kit's actual workflow
4. Verify GitHub links work
5. Test the kit on your machine to understand its capabilities

### Can I use this workflow for kits from different organizations?

Yes! Any public GitHub repository can be extracted using this workflow. The Kit interface is organization-agnostic.

### What happens if the GitHub repository changes after extraction?

No problem. Admins can re-extract and update the kit data using this same workflow. The system is designed for manual updates during Phase 2.

---

## Next Steps

After successfully onboarding a kit:

1. **Monitor Feedback**: Check for user feedback on the new kit
2. **Update as Needed**: Make improvements based on usage patterns
3. **Plan Automation**: After Phase 3, help plan automatic GitHub updates for star counts

---

## Support

For questions or issues:
1. Open an issue on GitHub
2. Contact agentii-kit maintainers
3. Reference this guide in your issue

---

## Related Documentation

- [Kit Data Schema](../../specs/002-kits-data-update/contracts/kit-schema.ts)
- [Feature Specification](../../specs/002-kits-data-update/spec.md)
- [Implementation Plan](../../specs/002-kits-data-update/plan.md)
- [TypeScript Kit Utilities](../lib/kit-utils.ts)
