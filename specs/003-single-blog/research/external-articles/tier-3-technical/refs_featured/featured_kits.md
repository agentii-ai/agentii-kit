I’ll research those three GitHub projects, extract all key information (purpose, features, tech, structure), then design a unified data model for “kits” and show how these three appear in a “Featured Kits” section using that schema. I’ll first set up a quick TODO plan, then search and read each repo’s docs/README.
I’ll load and scan those three GitHub repos, extract structured info (goals, main features, tech stack, key folders, typical usage), then propose a unified `Kit` data model and instantiate it for each kit in a “Featured Kits” section. Let me fetch the repo contents first.
I’ve pulled high-level outlines for all three repos. Next I’ll open the detailed README sections that describe what each kit is, its workflows, templates, CLI, and structure, then synthesize that into: (1) per‑kit info blocks, (2) a unified `Kit` data model, and (3) a “Featured Kits” section using that schema.
## 1. High-level Overview of the Three Kits

All three are **spec-driven toolkits** built on GitHub’s `spec-kit` methodology and designed to work with AI coding agents like Claude Code, Cursor, and Windsurf. They share:

- **CLI wrapper** installed via `uvx` or `uv tool install`
- **AI agent slash commands** (`/pmfkit.*`, `/blogkit.*`, `/twitterkit.*`)
- **5-phase workflow**: specification → clarification → planning → task breakdown → execution
- **Project structure** with:
  - `.claude/commands` for agent commands
  - `{kit-name}/` or `.{kit-namespace}/` with templates, memory, scripts
  - `refs/` reference docs
  - `specs/` feature specs & implementation docs

They differ in their **domain focus**:

- `pmf-kit`: Product-market fit discovery for AI SaaS
- `blog-tech-kit`: Authority / product / thought-leadership blogs
- `twitter-init-kit`: Twitter/X marketing campaigns for AI launches

---

## 2. Per-kit Information Blocks

### 2.1 PMF Kit (`pmf-kit`)

**Purpose**

- Spec-driven toolkit for **systematic PMF discovery and validation** of AI SaaS products.
- Helps founders/PMs move from vague ideas to **evidence-backed PMF decisions**.

**Tagline**

- “Discover and validate product-market-fit faster with AI agents.”

**Core Use Cases**

- Define PMF hypotheses (personas, jobs-to-be-done, workflows).
- Design and run discovery research (interviews, experiments).
- Track PMF signals and go/no-go decisions.

**CLI & Installation**

- One-time (recommended):

  ```bash
  uvx --from git+https://github.com/agentii-ai/pmf-kit.git pmf init my-product
  uvx --from git+https://github.com/agentii-ai/pmf-kit.git pmf check
  ```

- Persistent:

  ```bash
  uv tool install pmf-cli --from git+https://github.com/agentii-ai/pmf-kit.git
  pmf init my-product
  pmf check
  ```

**AI Agent Commands**

- Namespace: `/pmfkit.*`
- Main commands:

  - `/pmfkit.constitution` – establish PMF-specific principles
  - `/pmfkit.pmf` – define what you’re trying to learn and why
  - `/pmfkit.clarify` – resolve ambiguities in hypothesis
  - `/pmfkit.plan` – research execution plan
  - `/pmfkit.tasks` – actionable research tasks
  - `/pmfkit.implement` – execute PMF discovery workflow
  - (plus `/pmfkit.analyze`, `/pmfkit.checklist` in commands folder)

**Core Workflow**

- **Phase 1 – Specification (`/pmfkit.pmf`)**
  - Target personas (role, company, tools, environment)
  - Top jobs-to-be-done
  - 1–2 hero workflows
  - Success metrics (activation, engagement, AI-specific, business)
  - Constraints, risks, distribution hypotheses

- **Phase 2 – Clarification (`/pmfkit.clarify`)**
  - Sharpen personas and hypotheses
  - Clarify success metrics
  - Expose unstated assumptions

- **Phase 3 – Planning (`/pmfkit.plan`)**
  - Research methodology (interviews, surveys, experiments)
  - Sample sizes, recruitment strategy
  - Evidence instruments and analysis approach
  - Validation checkpoints & PDCA cycles

- **Phase 4 – Task Breakdown (`/pmfkit.tasks`)**
  - Concrete tasks: recruit, run sessions, analyze data, validate, document

- **Phase 5 – Execution (`/pmfkit.implement`)**
  - Collect evidence, measure PMF signals
  - Validate go/no-go criteria
  - Document decisions and evidence

**Project Structure**

```text
pmf-kit/
  ├── .claude/commands/
  │   ├── constitution.md
  │   ├── specify.md
  │   ├── plan.md
  │   ├── tasks.md
  │   ├── implement.md
  │   ├── clarify.md
  │   ├── analyze.md
  │   └── checklist.md
  ├── memory/
  │   └── constitution.md          # PMF-Kit principles
  ├── templates/
  │   ├── spec-template.md         # PMF specification template
  │   ├── plan-template.md         # Research planning template
  │   ├── tasks-template.md        # Task breakdown template
  │   ├── checklist-template.md    # Quality validation template
  │   └── commands/                # Agent command templates
  ├── scripts/
  │   ├── bash/
  │   └── powershell/
  ├── refs/
  │   ├── 0_overview.md
  │   ├── 1_principles_for_constitution.md
  │   ├── 2_define_for_specify.md
  │   ├── 3_project_management_for_plan.md
  │   ├── 4_pm_tasking_for_tasks.md
  │   └── instructions.md
  └── specs/
      └── 001-pmf-kit-variant/
```

**Prerequisites**

- Linux/macOS/Windows
- Supported AI coding agent
- `uv`, Python 3.11+, Git

---

### 2.2 Blog-Tech-Kit (`blog-tech-kit`)

**Purpose**

- Spec-driven toolkit for **systematic blog content strategy and execution**.
- Target: authority blogs, product blogs, and thought-leadership blogs.

**Tagline**

- “Build authority blogs faster with AI agents.”

**Core Use Cases**

- Design authority content strategy (audience, pillars, cadence).
- Plan editorial workflows and technical blog stack.
- Generate and execute content production tasks.

**CLI & Installation**

- One-time:

  ```bash
  uvx --from git+https://github.com/agentii-ai/blog-tech-kit.git blog init my-blog
  uvx --from git+https://github.com/agentii-ai/blog-tech-kit.git blog check
  ```

- Persistent:

  ```bash
  uv tool install blog-cli --from git+https://github.com/agentii-ai/blog-tech-kit.git
  blog init my-blog
  blog check
  ```

**AI Agent Commands**

- Namespace: `/blogkit.*`
- Main commands:

  - `/blogkit.constitution` – blog principles
  - `/blogkit.specify` – content strategy (audience, pillars, cadence)
  - `/blogkit.clarify` – clarify strategy
  - `/blogkit.plan` – editorial + technical plan
  - `/blogkit.tasks` – content production tasks
  - `/blogkit.implement` – execute content strategy
  - `/blogkit.analyze`, `/blogkit.checklist` – analysis & quality gates

**Core Workflow**

- **Phase 1 – Specification (`/blogkit.specify`)**
  - Blog type (authority, product, thought leadership)
  - Target audience (role, company, tools, environment)
  - Content pillars (3–5 topics)
  - Publishing cadence
  - Success criteria (traffic, engagement, conversions)
  - Distribution requirements

- **Phase 2 – Clarification (`/blogkit.clarify`)**
  - Sharpen audience and pillars
  - Clarify metrics and assumptions

- **Phase 3 – Planning (`/blogkit.plan`)**
  - Editorial process (multi-pass workflow)
  - Tech stack (CMS, framework, hosting)
  - Tools & integrations
  - AI discoverability (SEO, schema, LLM optimization)
  - Distribution strategy, analytics, instrumentation

- **Phase 4 – Task Breakdown (`/blogkit.tasks`)**
  - Platform setup, foundation posts
  - Validation checkpoints (analytics, SEO, engagement)

- **Phase 5 – Execution (`/blogkit.implement`)**
  - Execute tasks, check quality gates
  - Validate checkpoints, track progress

**Project Structure**

```text
blog-tech-kit/
  ├── .claude/commands/
  │   ├── blogkit.constitution.md
  │   ├── blogkit.specify.md
  │   ├── blogkit.plan.md
  │   ├── blogkit.tasks.md
  │   ├── blogkit.implement.md
  │   ├── blogkit.clarify.md
  │   ├── blogkit.analyze.md
  │   └── blogkit.checklist.md
  ├── .blogkit/
  │   ├── memory/
  │   │   └── constitution.md          # Blog principles
  │   ├── templates/
  │   │   ├── spec-template.md         # Blog spec template
  │   │   ├── plan-template.md         # Editorial planning template
  │   │   ├── tasks-template.md        # Content tasks template
  │   │   ├── blog-post-template.md    # Individual post template
  │   │   └── commands/                # Agent command templates
  │   └── scripts/
  │       ├── bash/
  │       └── powershell/
  ├── refs/
  │   ├── 0_overview.md
  │   ├── 1_principles_for_constitution.md
  │   ├── 2_define_for_specify.md
  │   ├── 3_project_mangement_for_plan.md
  │   ├── 4_pm_tasking_for_tasks.md
  │   └── 5_more/
  └── specs/
      └── 000-blog-tech-kit-foundation/
```

**Prerequisites**

- Linux/macOS/Windows
- Supported AI coding agent
- `uv`, Python 3.11+, Git

---

### 2.3 Twitter-Init-Kit (`twitter-init-kit`)

**Purpose**

- Spec-driven toolkit for **systematic Twitter/X marketing** of AI SaaS products.
- Focus on campaigns, growth loops, and founder-led content.

**Tagline**

- “Launch your AI product on Twitter with spec-driven marketing workflows.”

**Core Use Cases**

- Design Twitter campaigns for AI product launches.
- Build growth loops and experiment plans.
- Execute and iterate founder-led Twitter content.

**CLI & Installation**

- One-time:

  ```bash
  uvx --from git+https://github.com/agentii-ai/twitter-init-kit.git twitterify init my-campaign
  uvx --from git+https://github.com/agentii-ai/twitter-init-kit.git twitterify check
  ```

- Persistent:

  ```bash
  uv tool install twitterify-cli --from git+https://github.com/agentii-ai/twitter-init-kit.git
  twitterify init my-campaign
  twitterify check
  ```

**AI Agent Commands**

- Namespace: `/twitterkit.*`
- Main commands:

  - `/twitterkit.constitution` – Twitter marketing principles
  - `/twitterkit.specify` – campaign objectives & strategy
  - `/twitterkit.clarify` – clarify plan & assumptions
  - `/twitterkit.plan` – execution plan with growth loops
  - `/twitterkit.tasks` – marketing tasks
  - `/twitterkit.implement` – execute campaign
  - `/twitterkit.analyze`, `/twitterkit.checklist` – analysis & quality validation

**Core Workflow**

- **Phase 1 – Specification (`/twitterkit.specify`)**
  - Target personas (technical founders, growth leads, target audience)
  - Campaign objectives and channel strategies
  - Hero workflows → mapped to Twitter content
  - Success metrics (engagement, activation, retention)
  - Constraints & risks, growth loop hypotheses

- **Phase 2 – Clarification (`/twitterkit.clarify`)**
  - Sharpen personas and objectives
  - Clarify metrics and assumptions

- **Phase 3 – Planning (`/twitterkit.plan`)**
  - Twitter sprint cycles (2-week cadences)
  - Phased launch (Stealth Alpha → Waitlist Beta → Public Launch)
  - Growth loops (Demo-to-Inbound, Artifact, Template)
  - Experiment log template
  - Validation checkpoints & PDCA

- **Phase 4 – Task Breakdown (`/twitterkit.tasks`)**
  - Phase 1: Setup & foundation (profile, tooling, content bank)
  - Phase 2: Stealth Alpha (outreach, content tests)
  - Phase 3: Public Launch
  - Phase 4: Scale Machine (recurring tasks, loop optimization)

- **Phase 5 – Execution (`/twitterkit.implement`)**
  - Create/schedule content
  - Monitor engagement, run experiments
  - Document learnings and iterate

**Project Structure**

```text
twitter-init-kit/
  ├── .claude/commands/
  │   ├── twitterkit.constitution.md
  │   ├── twitterkit.specify.md
  │   ├── twitterkit.plan.md
  │   ├── twitterkit.tasks.md
  │   ├── twitterkit.implement.md
  │   ├── twitterkit.clarify.md
  │   ├── twitterkit.analyze.md
  │   └── twitterkit.checklist.md
  ├── .twitterkit/
  │   ├── memory/
  │   │   └── constitution.md          # Twitter principles
  │   ├── templates/
  │   │   ├── spec-template.md         # Campaign spec
  │   │   ├── plan-template.md         # Planning
  │   │   ├── tasks-template.md        # Task breakdown
  │   │   ├── checklist-template.md    # Quality validation
  │   │   └── commands/                # Agent command templates
  │   └── scripts/
  │       ├── bash/
  │       └── powershell/
  ├── refs/
  │   ├── 0_overview.md
  │   ├── 1_principles_for_constitution.md
  │   ├── 2_define_for_specify.md
  │   ├── 3_project_management_for_plan.md
  │   ├── 4_pm_tasking_for_tasks.md
  │   └── instructions.md
  └── specs/
      └── 000-twitter-init-kit-foundation/
```

**Prerequisites**

- Linux/macOS/Windows
- Supported AI coding agent
- `uv`, Python 3.11+, Git

---

## 3. Unified Data Model / Schema for Kits

Below is a **conceptual data model** you can use in the `agentii-kit` website or internal config.

### 3.1 `Kit` Entity

```ts
type KitId = 'pmf-kit' | 'blog-tech-kit' | 'twitter-init-kit';

interface KitWorkflowPhase {
  id: string;                // 'specification' | 'clarification' | ...
  name: string;              // 'Specification'
  description: string;
  slashCommand: string;      // '/pmfkit.pmf'
  keyOutputs: string[];      // bullet bullets
}

interface KitCliConfig {
  oneTimeCommand: string;    // uvx ...
  checkCommand: string;      // '... pmf check'
  installCommand: string;    // 'uv tool install ...'
  binaryName: string;        // 'pmf' | 'blog' | 'twitterify'
}

interface KitProjectStructureNode {
  path: string;              // 'templates/spec-template.md'
  label: string;             // 'PMF specification template'
  category: 'commands' | 'templates' | 'memory' | 'scripts' | 'refs' | 'specs' | 'other';
}

interface KitTemplate {
  id: string;                // 'spec-template'
  path: string;              // 'templates/spec-template.md'
  type: 'spec' | 'plan' | 'tasks' | 'checklist' | 'post' | 'campaign';
  description: string;
}

interface KitConstitution {
  path: string;              // 'memory/constitution.md' or '.blogkit/memory/...'
  principles: string[];      // human-readable summaries
}

interface Kit {
  id: KitId;
  name: string;
  emoji: string;
  shortTagline: string;
  longDescription: string;
  domain: 'pmf' | 'blog' | 'twitter';
  githubUrl: string;
  specDocUrl?: string;
  implementationPlanUrl?: string;
  upstreamSpecKitUrl: string;

  cli: KitCliConfig;
  aiAgentsSupported: string[];           // ['Claude Code', 'Cursor', 'Windsurf', ...]
  slashCommandNamespace: string;         // '/pmfkit.*' etc.
  coreSlashCommands: string[];          // ['/pmfkit.pmf', '/pmfkit.plan', ...]

  workflows: KitWorkflowPhase[];
  projectStructure: KitProjectStructureNode[];

  templates: KitTemplate[];
  constitution: KitConstitution;
  examplesByUseCase: string[];          // short labels per kit’s README

  prerequisites: string[];
  targetUsers: string[];                // e.g. 'Founders & PMs'
  benefits: string[];                   // high-level value props
  status: 'featured' | 'experimental' | 'archived';
}
```

You can store this as TypeScript, JSON, or YAML; the above is typed to make relationships clear.

---

## 4. Instantiated Data for the Three Featured Kits

### 4.1 PMF Kit Instance (Featured)

```json
{
  "id": "pmf-kit",
  "name": "PMF Kit",
  "emoji": "🎯",
  "shortTagline": "Discover and validate product-market fit faster with AI agents.",
  "longDescription": "A spec-driven toolkit for systematic PMF discovery and validation of AI SaaS products, built on the foundations of spec-kit.",
  "domain": "pmf",
  "githubUrl": "https://github.com/agentii-ai/pmf-kit",
  "specDocUrl": null,
  "implementationPlanUrl": null,
  "upstreamSpecKitUrl": "https://github.com/github/spec-kit",
  "cli": {
    "oneTimeCommand": "uvx --from git+https://github.com/agentii-ai/pmf-kit.git pmf init my-product",
    "checkCommand": "uvx --from git+https://github.com/agentii-ai/pmf-kit.git pmf check",
    "installCommand": "uv tool install pmf-cli --from git+https://github.com/agentii-ai/pmf-kit.git",
    "binaryName": "pmf"
  },
  "aiAgentsSupported": ["Claude Code", "Cursor", "Windsurf", "Other AI coding agents"],
  "slashCommandNamespace": "/pmfkit.*",
  "coreSlashCommands": [
    "/pmfkit.constitution",
    "/pmfkit.pmf",
    "/pmfkit.clarify",
    "/pmfkit.plan",
    "/pmfkit.tasks",
    "/pmfkit.implement",
    "/pmfkit.analyze",
    "/pmfkit.checklist"
  ],
  "workflows": [
    {
      "id": "specification",
      "name": "Specification",
      "description": "Define what you're trying to learn and why.",
      "slashCommand": "/pmfkit.pmf",
      "keyOutputs": [
        "Target personas",
        "Top jobs-to-be-done",
        "Hero workflows",
        "Success metrics",
        "Constraints & risks",
        "Distribution hypotheses"
      ]
    },
    {
      "id": "clarification",
      "name": "Clarification",
      "description": "Resolve ambiguities before running discovery.",
      "slashCommand": "/pmfkit.clarify",
      "keyOutputs": [
        "Sharpened personas",
        "Clarified hypotheses",
        "Precise success metrics",
        "Surfaced assumptions"
      ]
    },
    {
      "id": "planning",
      "name": "Planning",
      "description": "Design the research execution plan.",
      "slashCommand": "/pmfkit.plan",
      "keyOutputs": [
        "Research methodology",
        "Sample sizes & recruitment strategy",
        "Evidence collection instruments",
        "Analysis approach",
        "Validation checkpoints"
      ]
    },
    {
      "id": "task-breakdown",
      "name": "Task Breakdown",
      "description": "Generate actionable research tasks.",
      "slashCommand": "/pmfkit.tasks",
      "keyOutputs": [
        "Recruitment tasks",
        "Research tasks",
        "Analysis tasks",
        "Validation tasks",
        "Documentation tasks"
      ]
    },
    {
      "id": "execution",
      "name": "Execution",
      "description": "Execute PMF discovery systematically with AI assistance.",
      "slashCommand": "/pmfkit.implement",
      "keyOutputs": [
        "Customer evidence",
        "Measured PMF signals",
        "Go/no-go decisions",
        "Documented learnings"
      ]
    }
  ],
  "projectStructure": [
    { "path": ".claude/commands/constitution.md", "label": "PMF constitution command", "category": "commands" },
    { "path": ".claude/commands/specify.md", "label": "Specification command", "category": "commands" },
    { "path": "memory/constitution.md", "label": "PMF-Kit principles", "category": "memory" },
    { "path": "templates/spec-template.md", "label": "PMF specification template", "category": "templates" },
    { "path": "templates/plan-template.md", "label": "Research planning template", "category": "templates" },
    { "path": "templates/tasks-template.md", "label": "Task breakdown template", "category": "templates" },
    { "path": "templates/checklist-template.md", "label": "Quality checklist template", "category": "templates" },
    { "path": "scripts/bash/", "label": "Bash scripts", "category": "scripts" },
    { "path": "refs/0_overview.md", "label": "Overview reference", "category": "refs" },
    { "path": "specs/001-pmf-kit-variant/", "label": "Feature specs & implementation", "category": "specs" }
  ],
  "templates": [
    { "id": "spec-template", "path": "templates/spec-template.md", "type": "spec", "description": "PMF specification template" },
    { "id": "plan-template", "path": "templates/plan-template.md", "type": "plan", "description": "PMF research plan template" },
    { "id": "tasks-template", "path": "templates/tasks-template.md", "type": "tasks", "description": "PMF task breakdown template" },
    { "id": "checklist-template", "path": "templates/checklist-template.md", "type": "checklist", "description": "PMF quality checklist template" }
  ],
  "constitution": {
    "path": "memory/constitution.md",
    "principles": [
      "Specification-first approach",
      "Customer-evidence-driven",
      "Iterative validation",
      "Minimal viable process",
      "Cross-functional integration",
      "Kit namespace isolation",
      "Template extensibility"
    ]
  },
  "examplesByUseCase": [
    "Developer tools (Cursor, Claude Code, Devin)",
    "Creative tools (Runway, Pika, HeyGen)",
    "Vertical AI tools (Harvey, Writer)"
  ],
  "prerequisites": [
    "Linux/macOS/Windows",
    "AI coding agent",
    "uv",
    "Python 3.11+",
    "Git"
  ],
  "targetUsers": ["Founders", "Product Managers"],
  "benefits": [
    "Structured PMF discovery workflow",
    "Reusable templates and commands",
    "Agent-native workflows in Claude/Cursor/Windsurf"
  ],
  "status": "featured"
}
```

---

### 4.2 Blog-Tech-Kit Instance (Featured)

```json
{
  "id": "blog-tech-kit",
  "name": "Blog-Tech-Kit",
  "emoji": "📝",
  "shortTagline": "Build authority blogs faster with AI agents.",
  "longDescription": "A spec-driven toolkit for systematic blog content strategy and execution, built on the foundations of spec-kit.",
  "domain": "blog",
  "githubUrl": "https://github.com/agentii-ai/blog-tech-kit",
  "specDocUrl": "https://github.com/agentii-ai/blog-tech-kit/blob/main/specs/000-blog-tech-kit-foundation/spec.md",
  "implementationPlanUrl": "https://github.com/agentii-ai/blog-tech-kit/blob/main/specs/000-blog-tech-kit-foundation/plan.md",
  "upstreamSpecKitUrl": "https://github.com/github/spec-kit",
  "cli": {
    "oneTimeCommand": "uvx --from git+https://github.com/agentii-ai/blog-tech-kit.git blog init my-blog",
    "checkCommand": "uvx --from git+https://github.com/agentii-ai/blog-tech-kit.git blog check",
    "installCommand": "uv tool install blog-cli --from git+https://github.com/agentii-ai/blog-tech-kit.git",
    "binaryName": "blog"
  },
  "aiAgentsSupported": ["Claude Code", "Cursor", "Windsurf", "Other AI coding agents"],
  "slashCommandNamespace": "/blogkit.*",
  "coreSlashCommands": [
    "/blogkit.constitution",
    "/blogkit.specify",
    "/blogkit.clarify",
    "/blogkit.plan",
    "/blogkit.tasks",
    "/blogkit.implement",
    "/blogkit.analyze",
    "/blogkit.checklist"
  ],
  "workflows": [
    {
      "id": "specification",
      "name": "Specification",
      "description": "Define what kind of blog you’re building and why.",
      "slashCommand": "/blogkit.specify",
      "keyOutputs": [
        "Blog type",
        "Target audience",
        "Content pillars",
        "Publishing cadence",
        "Success criteria",
        "Distribution requirements"
      ]
    },
    {
      "id": "clarification",
      "name": "Clarification",
      "description": "Clarify strategy and assumptions before execution.",
      "slashCommand": "/blogkit.clarify",
      "keyOutputs": [
        "Sharpened audience",
        "Clarified pillars",
        "Precise metrics",
        "Surfaced assumptions"
      ]
    },
    {
      "id": "planning",
      "name": "Planning",
      "description": "Design editorial and technical plan.",
      "slashCommand": "/blogkit.plan",
      "keyOutputs": [
        "Editorial process",
        "Tech stack decisions",
        "Tools & integrations",
        "AI discoverability plan",
        "Distribution & analytics plan"
      ]
    },
    {
      "id": "task-breakdown",
      "name": "Task Breakdown",
      "description": "Generate concrete content production tasks.",
      "slashCommand": "/blogkit.tasks",
      "keyOutputs": [
        "Platform setup tasks",
        "Foundation posts",
        "Validation checkpoints"
      ]
    },
    {
      "id": "execution",
      "name": "Execution",
      "description": "Execute content strategy with AI assistance.",
      "slashCommand": "/blogkit.implement",
      "keyOutputs": [
        "Published posts",
        "Quality-checked content",
        "Analytics-informed iterations"
      ]
    }
  ],
  "projectStructure": [
    { "path": ".claude/commands/blogkit.constitution.md", "label": "Blog constitution command", "category": "commands" },
    { "path": ".blogkit/memory/constitution.md", "label": "Blog-Tech-Kit principles", "category": "memory" },
    { "path": ".blogkit/templates/spec-template.md", "label": "Blog spec template", "category": "templates" },
    { "path": ".blogkit/templates/plan-template.md", "label": "Editorial planning template", "category": "templates" },
    { "path": ".blogkit/templates/tasks-template.md", "label": "Task breakdown template", "category": "templates" },
    { "path": ".blogkit/templates/blog-post-template.md", "label": "Blog post content template", "category": "templates" },
    { "path": "refs/0_overview.md", "label": "Overview reference", "category": "refs" },
    { "path": "specs/000-blog-tech-kit-foundation/", "label": "Feature specs & implementation", "category": "specs" }
  ],
  "templates": [
    { "id": "spec-template", "path": ".blogkit/templates/spec-template.md", "type": "spec", "description": "Blog specification template" },
    { "id": "plan-template", "path": ".blogkit/templates/plan-template.md", "type": "plan", "description": "Editorial plan template" },
    { "id": "tasks-template", "path": ".blogkit/templates/tasks-template.md", "type": "tasks", "description": "Content task breakdown template" },
    { "id": "blog-post-template", "path": ".blogkit/templates/blog-post-template.md", "type": "post", "description": "Individual blog post structure" }
  ],
  "constitution": {
    "path": ".blogkit/memory/constitution.md",
    "principles": [
      "Content-first approach",
      "AI-native distribution",
      "Simplicity & focus",
      "Iterative validation",
      "Evidence-driven optimization",
      "Quality gates",
      "Kit namespace isolation",
      "Template extensibility"
    ]
  },
  "examplesByUseCase": [
    "Authority blog (Anthropic, LangChain, Hugging Face style)",
    "Product blog (Cursor, Vercel style)",
    "Thought leadership blog (a16z, Sequoia style)"
  ],
  "prerequisites": [
    "Linux/macOS/Windows",
    "AI coding agent",
    "uv",
    "Python 3.11+",
    "Git"
  ],
  "targetUsers": ["Founders", "Content teams"],
  "benefits": [
    "Structured content strategy and execution",
    "Agent-native editorial workflows",
    "Templates for specs, plans, tasks, and posts"
  ],
  "status": "featured"
}
```

---

### 4.3 Twitter-Init-Kit Instance (Featured)

```json
{
  "id": "twitter-init-kit",
  "name": "Twitter-Init-Kit",
  "emoji": "🐦",
  "shortTagline": "Launch your AI product on Twitter with spec-driven marketing workflows.",
  "longDescription": "A spec-driven toolkit for systematic Twitter marketing of AI SaaS products, built on the foundations of spec-kit.",
  "domain": "twitter",
  "githubUrl": "https://github.com/agentii-ai/twitter-init-kit",
  "specDocUrl": "https://github.com/agentii-ai/twitter-init-kit/blob/main/specs/000-twitter-init-kit-foundation/spec.md",
  "implementationPlanUrl": "https://github.com/agentii-ai/twitter-init-kit/blob/main/specs/000-twitter-init-kit-foundation/plan.md",
  "upstreamSpecKitUrl": "https://github.com/github/spec-kit",
  "cli": {
    "oneTimeCommand": "uvx --from git+https://github.com/agentii-ai/twitter-init-kit.git twitterify init my-campaign",
    "checkCommand": "uvx --from git+https://github.com/agentii-ai/twitter-init-kit.git twitterify check",
    "installCommand": "uv tool install twitterify-cli --from git+https://github.com/agentii-ai/twitter-init-kit.git",
    "binaryName": "twitterify"
  },
  "aiAgentsSupported": ["Claude Code", "Cursor", "Windsurf", "Other AI coding agents"],
  "slashCommandNamespace": "/twitterkit.*",
  "coreSlashCommands": [
    "/twitterkit.constitution",
    "/twitterkit.specify",
    "/twitterkit.clarify",
    "/twitterkit.plan",
    "/twitterkit.tasks",
    "/twitterkit.implement",
    "/twitterkit.analyze",
    "/twitterkit.checklist"
  ],
  "workflows": [
    {
      "id": "specification",
      "name": "Specification",
      "description": "Define what you’re launching and who you’re targeting on Twitter.",
      "slashCommand": "/twitterkit.specify",
      "keyOutputs": [
        "Target personas",
        "Campaign objectives",
        "Channel strategies",
        "Hero workflows mapped to content",
        "Success metrics",
        "Growth loop hypotheses"
      ]
    },
    {
      "id": "clarification",
      "name": "Clarification",
      "description": "Clarify campaign strategy before execution.",
      "slashCommand": "/twitterkit.clarify",
      "keyOutputs": [
        "Sharpened personas",
        "Clarified objectives",
        "Precise metrics",
        "Surfaced assumptions"
      ]
    },
    {
      "id": "planning",
      "name": "Planning",
      "description": "Design Twitter campaign plan and experiments.",
      "slashCommand": "/twitterkit.plan",
      "keyOutputs": [
        "Twitter sprint cycles",
        "Phased launch plan",
        "Growth loop definitions",
        "Experiment log template",
        "Validation checkpoints"
      ]
    },
    {
      "id": "task-breakdown",
      "name": "Task Breakdown",
      "description": "Turn campaign plan into actionable tasks.",
      "slashCommand": "/twitterkit.tasks",
      "keyOutputs": [
        "Setup & foundation tasks",
        "Stealth Alpha tasks",
        "Public launch tasks",
        "Scale Machine recurring tasks"
      ]
    },
    {
      "id": "execution",
      "name": "Execution",
      "description": "Execute Twitter campaigns with AI assistance.",
      "slashCommand": "/twitterkit.implement",
      "keyOutputs": [
        "Content created and scheduled",
        "Engagement metrics",
        "Growth experiments & learnings",
        "Iterated strategy"
      ]
    }
  ],
  "projectStructure": [
    { "path": ".claude/commands/twitterkit.constitution.md", "label": "Twitter constitution command", "category": "commands" },
    { "path": ".twitterkit/memory/constitution.md", "label": "Twitter-Init principles", "category": "memory" },
    { "path": ".twitterkit/templates/spec-template.md", "label": "Campaign spec template", "category": "templates" },
    { "path": ".twitterkit/templates/plan-template.md", "label": "Campaign plan template", "category": "templates" },
    { "path": ".twitterkit/templates/tasks-template.md", "label": "Task breakdown template", "category": "templates" },
    { "path": ".twitterkit/templates/checklist-template.md", "label": "Quality checklist template", "category": "templates" },
    { "path": "refs/0_overview.md", "label": "Overview reference", "category": "refs" },
    { "path": "specs/000-twitter-init-kit-foundation/", "label": "Feature specs & implementation", "category": "specs" }
  ],
  "templates": [
    { "id": "spec-template", "path": ".twitterkit/templates/spec-template.md", "type": "spec", "description": "Twitter campaign spec template" },
    { "id": "plan-template", "path": ".twitterkit/templates/plan-template.md", "type": "plan", "description": "Twitter campaign plan template" },
    { "id": "tasks-template", "path": ".twitterkit/templates/tasks-template.md", "type": "tasks", "description": "Twitter marketing tasks" },
    { "id": "checklist-template", "path": ".twitterkit/templates/checklist-template.md", "type": "checklist", "description": "Twitter quality checklist" }
  ],
  "constitution": {
    "path": ".twitterkit/memory/constitution.md",
    "principles": [
      "Specification-first approach",
      "Demo-driven growth",
      "Iterative validation",
      "Minimal viable process",
      "Founder-led authenticity",
      "Kit namespace isolation",
      "Template extensibility"
    ]
  },
  "examplesByUseCase": [
    "Developer tools (Cursor, Claude Code, Devin)",
    "Creative tools (Runway, Pika, HeyGen)",
    "Vertical AI tools (Harvey, Writer)"
  ],
  "prerequisites": [
    "Linux/macOS/Windows",
    "AI coding agent",
    "uv",
    "Python 3.11+",
    "Git"
  ],
  "targetUsers": ["Founders", "Growth leads"],
  "benefits": [
    "Structured Twitter launch playbook",
    "Growth loop design baked-in",
    "Agent-native execution workflows"
  ],
  "status": "featured"
}
```

---

## 5. “Featured Kits” Section (Website-Oriented)

You can render a “Featured Kits” section by loading `Kit[]` and mapping over items where `status === 'featured'`. A conceptual layout:

- **Section title**: “Featured Kits”
- **For each kit** (PMF Kit, Blog-Tech-Kit, Twitter-Init-Kit):
  - Emoji + name + shortTagline
  - Domain badge (`PMF`, `Blog`, `Twitter`)
  - Key bullets:
    - **For**: `targetUsers`
    - **Best for**: one-line from `examplesByUseCase`
    - **Workflows**: list `workflows[].name` + main slash command
  - Actions:
    - “View on GitHub” → `githubUrl`
    - “Read Spec” → `specDocUrl` if present
    - “Install via CLI” → show `cli.oneTimeCommand`

If you’d like, I can now turn this schema into actual TypeScript/JSON files for your `agentii-kit` site and wire a simple React UI section around it.