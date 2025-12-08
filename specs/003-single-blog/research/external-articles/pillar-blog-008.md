target readers, the same target audience as the agentii-kit 

- **Purpose**: open-source spec-driven kits and technical deep-dives
- **Target Audience**: Geeks, startup founders, VCs, product designers, anyone building agentic systems
- **Content Themes**: Spec-driven development, agent orchestration patterns, kit documentation, startup growth playbooks
- **Success Metric**: Organic reach into Silicon Valley, VC/founder mindshare, GitHub stars, framework adoption
- **Strategic Role**: Support agentii.ai launch by creating organic reach and developer credibility (users who learn agentii-kit may become agentii.ai customers)

---

# Pilar Blog 008: Problem driven spec-kit variant

**Focus**: The meta-pattern—how to create spec-kit variants for any domain  
**Angle**: A builder's guide to abstracting work, preparing supporting materials, and using Claude Code to generate complete kits

---

# title

**Clone the Pattern. Own the Domain.**

# subtitle

How to build your own spec-kit variant for any job—from PMF discovery to marketing campaigns—using a 6-step agent workflow

---

## 
there are more strong words and slogans, wisdom words, idiosyncratic words, they can be inserted in the markdown article between paragraphs, with a large font size and bold , italic, underline, etc.


### "Clone the Pattern. Own the Domain."
**Subtitle**: How to build your own spec-kit variant for any job—from PMF discovery to marketing campaigns

### "One Architecture. Infinite Kits."
**Subtitle**: The meta-pattern behind spec-kit variants and how to build your own in a weekend

### "Your Job. Your Kit."
**Subtitle**: A builder's guide to turning any workflow into an agent-native spec-kit

### "From Spec-Kit to Your-Kit."
**Subtitle**: The 6-step blueprint for creating domain-specific AI workflows

### "Build Once. Scale Forever."
**Subtitle**: How spec-kit variants encode expertise into reusable, agent-executable workflows

### "Agents Need Kits. Here's How to Build Them."
**Subtitle**: The complete guide to creating spec-driven toolkits for any domain

---

## Top 3 Picks for This Blog:

1. **"Clone the Pattern. Own the Domain."** — action-oriented, ownership appeal
2. **"One Architecture. Infinite Kits."** — emphasizes the meta-pattern
3. **"Your Job. Your Kit."** — personal, accessible, inviting

---

## The Core Message

Spec-kit isn't just a tool. It's a **pattern** that can be adapted to any kind of work. The three featured kits—PMF-Kit, Blog-Tech-Kit, and Twitter-Init-Kit—prove that the same architecture works across wildly different domains.

This blog is for builders who want to:
- Create their own spec-kit variant for their domain
- Understand the meta-pattern behind all successful kits
- Use Claude Code (or similar agents) to generate complete kits quickly

---

## The Three Featured Kits: Proof the Pattern Works

| Kit | Domain | What It Does |
|-----|--------|--------------|
| **🎯 PMF-Kit** | Product-market fit | Systematic discovery and validation of AI SaaS products |
| **📝 Blog-Tech-Kit** | Content strategy | Authority blogs, product blogs, thought-leadership content |
| **🐦 Twitter-Init-Kit** | Social marketing | Twitter/X campaigns for AI product launches |

**The insight**: These three kits have completely different purposes, but they share:
- The same 5-phase workflow
- The same folder structure
- The same slash command pattern
- The same agent integration model

**This is the power of the meta-pattern**: Learn it once, apply it to any domain.

---

## The Universal Architecture (All Kits Share This)

### The 5-Phase Workflow

Every spec-kit variant follows the same flow:

| Phase | Purpose | Slash Command Example |
|-------|---------|----------------------|
| **1. Constitution** | Define domain principles | `/pmfkit.constitution` |
| **2. Specification** | What are we doing and why? | `/pmfkit.specify` |
| **3. Clarification** | Resolve ambiguities | `/pmfkit.clarify` |
| **4. Planning** | How will we do it? | `/pmfkit.plan` |
| **5. Tasks** | Break into executable steps | `/pmfkit.tasks` |
| **6. Execution** | Do the work | `/pmfkit.implement` |

**The pattern works because it separates concerns**:
- Constitution → Rules that never change
- Specification → What you're trying to achieve
- Planning → Strategy and approach
- Tasks → Concrete, assignable work
- Execution → Agent does the work with human checkpoints

### The Folder Structure

Every kit follows this structure:

```
your-kit/
├── .claude/commands/           # Agent slash commands
│   ├── yourkit.constitution.md
│   ├── yourkit.specify.md
│   ├── yourkit.clarify.md
│   ├── yourkit.plan.md
│   ├── yourkit.tasks.md
│   ├── yourkit.implement.md
│   ├── yourkit.analyze.md
│   └── yourkit.checklist.md
├── .yourkit/                   # Kit-specific namespace folder
│   ├── memory/
│   │   └── constitution.md     # Domain principles
│   └── templates/
│       ├── spec-template.md
│       ├── plan-template.md
│       ├── tasks-template.md
│       └── checklist-template.md
├── refs/                       # Reference materials
│   ├── 0_overview.md
│   ├── 1_principles_for_constitution.md
│   ├── 2_define_for_specify.md
│   ├── 3_project_management_for_plan.md
│   ├── 4_pm_tasking_for_tasks.md
│   └── 5_more/
├── specs/                      # Feature specs & implementation
│   └── 000-kit-foundation/
│       ├── spec.md
│       ├── plan.md
│       └── tasks.md
└── scripts/                    # CLI and automation
    ├── bash/
    └── powershell/
```

### The Namespace Strategy

**The multi-kit coexistence problem**: Users may install multiple kits on the same machine. Without careful naming, commands collide.

**The solution**: Every kit uses a unique namespace:
- PMF-Kit: `/pmfkit.*` commands, `.pmfkit/` folder
- Blog-Tech-Kit: `/blogkit.*` commands, `.blogkit/` folder
- Twitter-Init-Kit: `/twitterkit.*` commands, `.twitterkit/` folder

**The rule**: When adapting spec-kit, replace all occurrences of `spec` in folder names and command names with your kit's namespace.

---

## The Reference Layer: Your Knowledge Base

The `refs/` folder is **not** the work—it's what you read **before** doing work.

### Step 0: Overview (`refs/0_overview.md`)

**What it does**: Explains what kind of work this kit is for and why spec-driven workflows help.

**What to include**:
- Domain scope and boundaries
- Why this domain benefits from specification-first approach
- Key resources and best practices
- A prompt template for gathering latest domain knowledge

**Example for a Design Kit**:
> This kit helps designers and PMs run structured, repeatable design cycles for SaaS products (dashboard UX, onboarding flows, pricing pages). It emphasizes clear user journeys, reusable design patterns, and cross-functional collaboration.

### Step 1: Principles (`refs/1_principles_for_constitution.md`)

**What it does**: Turns raw overview material into **domain rules and patterns** the agent should follow.

**What to include**:
- Quality standards for this domain
- Patterns that always work
- Anti-patterns to avoid
- How "good" specs, plans, and tasks look in this field

**Example principles for a Project Management Kit**:
- Always define **scope, owner, and deadline** for each initiative
- Use **incremental delivery**: break work into phases with independent value
- Tie every major task to a **clear outcome and metric**
- Maintain a visible **risk & dependency list**

### Step 2: Definition (`refs/2_define_for_specify.md`)

**What it does**: Defines how to write a good specification for this domain.

**The spec.md always answers**:
- **Who** is this for? (personas, teams, stakeholders)
- **What** problem or outcome are we targeting?
- **What** does success look like in human terms?
- **What constraints** or risks do we need to respect?

**Think of it as**: "Write the brief."

### Step 3: Planning (`refs/3_project_management_for_plan.md`)

**What it does**: Defines how to turn a spec into a high-level plan.

**A plan.md covers**:
- Objectives & time horizon
- Strategy & wedge (what you do first and why)
- Launch & activation approach
- Experiment or iteration roadmap
- Measurement at a planning level

### Step 4: Tasking (`refs/4_pm_tasking_for_tasks.md`)

**What it does**: Defines how to break plans into executable tasks.

**Tasks bridge plan and calendar**:
- They are **assigned** (who does what)
- They are **sequenced** (dependencies, phases)
- They have **checkpoints** and **tests** (PDCA loops)

**Key patterns to reuse**:
- Use **phases** with clear exit criteria
- Mark parallelizable tasks with `[P]`
- Use labels like `[Story]` or `[Theme]` to tie back to spec
- Insert **STOP and VALIDATE** checkpoints

### Step 5: More References (`refs/5_more/`)

**What it does**: A **parking lot** for domain-specific examples, links, and templates.

**Over time, this becomes your "pattern library"**:
- Example project plans
- Example specs
- Example task lists
- External articles, videos, talks
- Prompt templates for researching new methods

---

## The 6-Step Process to Build with Claude Code

This is the builder's workflow—how to use Claude Code (or similar agents) to generate your kit.

### Step 6.1: Generate `constitution.md`

```prompt
/constitution this [your-kit] project is a fork of the github.com spec-kit project. 
read @README_spec-kit.md to get a global view of the original spec-kit.

[your-kit] is a featured variant of spec-kit focused on [your domain].

In the constitution, ensure:
1. Reuse the overall spec-kit design (CLI, agent integration)
2. Design clean namespace so multiple kits can coexist
3. Slash commands like [yourkit.plan] don't conflict with other kits

Think carefully about architecture and multi-kit coexistence, then draft 
a clear constitution that respects these constraints.
```

### Step 6.2: Generate `spec.md`

```prompt
/specify read @memory/constitution.md and generate the spec.md for this project.
You MUST also read @refs/2_define_for_specify.md and follow its structure.

Design clean naming and namespace strategy so multiple kits can coexist.
Think carefully about architecture first, then draft a clear spec.md.
```

### Step 6.3: Generate `plan.md`

```prompt
/plan read @memory/constitution.md and @specs/001-kit-variant/spec.md.
You MUST also read @refs/3_project_management_for_plan.md and follow its structure.

Generate a clear plan.md that:
- Respects the principles in constitution.md
- Aligns with the spec
- Can guide edits to templates to swap namespace without changing infrastructure
```

### Step 6.4: Generate `tasks.md`

```prompt
/tasks read @memory/constitution.md, @specs/001-kit-variant/spec.md, 
and @specs/001-kit-variant/plan.md.
You MUST also read @refs/4_pm_tasking_for_tasks.md for the tasking approach.

Generate a clear tasks.md that bridges the plan to executable work.
```

### Step 6.5: Implement

```prompt
/implement read all spec documents and implement the changes in tasks.md by:
- Editing templates in @templates/ to use your namespace
- Keeping all edits in the current git branch
```

### Step 6.6: Upload, Install, Verify

- Upload to GitHub with automated release
- Install from the package
- Run tests to verify implementation

---

## What Makes a Good Spec-Kit Variant?

### The Three Foundation Principles

1. **Specification-first**: Always write down *what* and *why* before *how*
2. **Evidence-driven**: Connect specs, plans, and tasks to real evidence
3. **Phased workflow**: Same stages in any domain: constitution → specify → clarify → plan → tasks → implement

### Quality Signals

A well-designed kit has:

| Signal | What It Means |
|--------|---------------|
| **Clear constitution** | Domain principles are encoded, not just implied |
| **Complete references** | Steps 0-4 are filled with real domain knowledge |
| **Namespace isolation** | Can coexist with other kits without collision |
| **Template completeness** | All templates have domain-specific guidance |
| **Agent integration** | Slash commands work in Claude Code, Cursor, Windsurf |
| **Tested workflow** | Has been applied to 2-3 real projects and refined |

### The "Weekend Kit" Test

A good spec-kit variant can be:
- **Built in a weekend** (if you have domain expertise)
- **Used immediately** on a real project
- **Shared with others** who can get value without your help

---

## Real Examples: How the Featured Kits Adapt the Pattern

### PMF-Kit: Specification Phase

**What "specify" means for PMF**:
- Target personas (role, company, tools, environment)
- Top jobs-to-be-done
- 1-2 hero workflows
- Success metrics (activation, engagement, AI-specific, business)
- Constraints, risks, distribution hypotheses

**How it's different from generic spec-kit**:
- Adds PMF-specific sections (distribution hypotheses, jobs-to-be-done)
- Templates include prompts for customer evidence
- Checkpoints tied to PMF signals, not code quality

### Blog-Tech-Kit: Planning Phase

**What "plan" means for blogging**:
- Editorial process (multi-pass workflow)
- Tech stack (CMS, framework, hosting)
- AI discoverability (SEO, schema, LLM optimization)
- Distribution strategy
- Analytics and instrumentation

**How it's different from generic spec-kit**:
- Adds content-specific planning (editorial calendar, pillar posts)
- Templates include AI SEO considerations
- Checkpoints tied to traffic and engagement, not deployment

### Twitter-Init-Kit: Task Phase

**What "tasks" means for Twitter campaigns**:
- Phase 1: Setup & foundation (profile, tooling, content bank)
- Phase 2: Stealth Alpha (outreach, content tests)
- Phase 3: Public Launch
- Phase 4: Scale Machine (recurring tasks, loop optimization)

**How it's different from generic spec-kit**:
- Adds growth loop patterns (Demo-to-Inbound, Artifact, Template)
- Templates include Twitter-specific content formats
- Checkpoints tied to engagement and follower growth

---

## The Blueprint: Building Your Own Kit

### 1. Clone the Structure, Not the Content

- Keep `memory/constitution.md`, `refs/0-5`, and `spec/plan/tasks` templates
- Adjust all references and commands to your new kit name
- Replace `yourkit` everywhere with your namespace

### 2. Write a Domain-Specific Constitution

- Start from `memory/constitution.md` as a pattern
- Replace domain-specific language with your quality standards
- Define what "good" specs, plans, and tasks look like

### 3. Create Step 0-1 References

- Step 0: Overview of the domain, recent best practices, why spec-driven helps
- Step 1: Distilled principles and patterns

### 4. Adapt Step 2-4 Templates

- Step 2 (`spec.md`): Personas, problems, goals, constraints for your projects
- Step 3 (`plan.md`): How you plan and measure efforts
- Step 4 (`tasks.md`): How you break work down and assign ownership

### 5. Wire It Into Agent Commands

- Map commands like `/pmfkit.specify` → `/[yourkit].specify`
- Ensure each command reads the right references from `refs/` and `memory/`

### 6. Iterate Using Real Projects

- Apply your kit to 1-3 real projects
- Capture where templates and references helped or failed
- Update constitution, Steps 0-5, and templates based on learnings

---

## Example: Building a "Marketing-Kit"

Imagine you want a variant for B2B marketing campaigns:

### Constitution

Defines what "high-quality campaigns" mean:
- Clear ICP (Ideal Customer Profile)
- Compelling offer
- Measurable outcomes
- Ethical practices

### Step 0 (Overview)

Overview of modern B2B marketing patterns:
- Content marketing
- Paid acquisition
- Social channels
- Partnership strategies

### Step 1 (Principles)

Domain principles:
- "One core narrative per campaign"
- "Every asset has a single CTA"
- "Measure by pipeline, not vanity metrics"
- "Distribution is more important than creation"

### Step 2 (Spec)

What a marketing spec includes:
- Persona and segment
- Offer and message
- Channels
- Success definition

### Step 3 (Plan)

Marketing plan structure:
- Timeline and phases (research → creative → launch → optimize)
- Channel strategy
- Budget allocation
- Measurement framework

### Step 4 (Tasks)

Concrete tasks:
- Customer interviews
- Message testing
- Asset production
- Channel setup
- Reporting

### Step 5 (References)

Pattern library:
- Examples of great campaigns
- Landing page templates
- Email sequences
- Measurement frameworks

---

## Key Takeaways to Highlight

1. **One pattern, infinite domains**: The spec-kit architecture works for any kind of work
2. **The 5-phase workflow is universal**: Constitution → Specify → Plan → Tasks → Implement
3. **References are the knowledge base**: Steps 0-4 hold domain expertise
4. **Namespace isolation is critical**: Multiple kits must coexist without collision
5. **Claude Code accelerates creation**: The 6-step process generates complete kits
6. **Test with real projects**: Iterate on 2-3 real projects before sharing
7. **Build once, scale forever**: A well-designed kit compounds over time

---

## Quotable Lines for Social Sharing

- "Clone the pattern. Own the domain."
- "One architecture. Infinite kits."
- "The same 5-phase workflow works for PMF, blogging, and Twitter campaigns."
- "Learn the meta-pattern once. Apply it to any job."
- "Your expertise + spec-kit architecture = scalable agent workflows."
- "Build your kit in a weekend. Use it for years."
- "Agents need structure. Kits provide it."

---

## Key Statistics to Cite

- **3 featured kits** proving the pattern works across domains
- **5-phase workflow** (constitution, specify, clarify, plan, tasks, implement)
- **8+ slash commands** per kit
- **6-step Claude Code process** to generate a complete kit
- **Weekend timeline** for building a new kit with domain expertise

---

## The Featured Kits Reference

### PMF-Kit
- **Domain**: Product-market fit discovery
- **Namespace**: `/pmfkit.*`
- **GitHub**: github.com/agentii-ai/pmf-kit

### Blog-Tech-Kit
- **Domain**: Authority and product blogs
- **Namespace**: `/blogkit.*`
- **GitHub**: github.com/agentii-ai/blog-tech-kit

### Twitter-Init-Kit
- **Domain**: Twitter/X marketing campaigns
- **Namespace**: `/twitterkit.*`
- **GitHub**: github.com/agentii-ai/twitter-init-kit

---

## For Builders: Start Here

1. **Pick a domain** you have expertise in
2. **Fork one of the featured kits** as your starting point
3. **Replace the namespace** everywhere
4. **Rewrite the constitution** with your domain principles
5. **Fill in Steps 0-4** with your domain knowledge
6. **Use Claude Code** to generate the implementation
7. **Test on a real project** and iterate

The pattern is proven. The tools are ready. **Now build your kit.**
