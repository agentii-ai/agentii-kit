---
title: "Intelligence Hub Fundamentals"
description: "Master Intelligence Hub: the project-based analysis environment for structured financial research."
author: "Agentii Documentation"
date: "2025-11-26"
updated: "2025-11-26"
audience: "Beginner"
domain: "Intelligence Hub"
tags: ["hub", "projects", "analysis", "workflows"]
relatedDocs:
  - "/docs/00-introduction/what-is-agentii.md"
  - "/docs/00-introduction/core-concepts.md"
  - "/docs/00-introduction/platform-architecture.md"
  - "/docs/02-intelligence-hub/projects-guide.md"
  - "/docs/02-intelligence-hub/tasks-guide.md"
  - "/docs/02-intelligence-hub/snapshots-guide.md"
---

# Intelligence Hub Fundamentals

Intelligence Hub is Agentii's project-based analysis environment. Unlike the conversational Agent Workbench, Hub structures analysis into persistent, team-shareable projects that you can return to weeks later. Hub is designed for comprehensive financial research campaigns: earnings cycles, sector rotations, M&A screening, and ongoing portfolio surveillance.

---

## What Is Intelligence Hub?

Think of Intelligence Hub as a research workspace. Each project is a dedicated container for analyzing a specific stock, sector, or investment thesis. Within projects, you organize analysis into snapshots (phases) and tasks (questions for agents). This structure enables:

- **Persistent documentation**: All analysis automatically recorded
- **Team collaboration**: Share projects and assign tasks
- **Methodology consistency**: Reuse agent configurations across similar analyses
- **Milestone tracking**: Understand analysis evolution through snapshots
- **Scalable execution**: Run dozens of parallel tasks simultaneously
- **Institutional knowledge**: Archive projects for reference and learning

---

## Hub vs. Workbench Decision Tree

**Use Intelligence Hub when**:
- You have 1+ hours for comprehensive analysis
- You're building multi-step research campaigns
- Multiple team members need to collaborate
- You want to track analysis evolution over time
- You need to document methodology for compliance or learning
- You're analyzing the same stock/sector repeatedly

**Use Agent Workbench when**:
- You need results in 5-15 minutes
- Question is exploratory or one-off
- You want instant feedback without setup
- Results don't need to be archived for team reference
- You're validating a quick idea or news reaction

---

## Hub Interface Overview

After creating a project, you'll see three main sections:

### 1. Project Overview (Top Section)
Displays project metadata:
- **Project name**: "Apple Inc. Q4 Earnings Analysis"
- **Primary ticker**: AAPL with current price and 52-week range
- **Related tickers**: MSFT, GOOGL, NVDA (if added)
- **Sector badge**: Technology
- **Project description**: Your notes on thesis and goals
- **Edit** button: Update project settings

### 2. Project Actions (Top Right)
Quick access to project operations:
- **Create Snapshot**: Add a new temporal phase
- **Create Task**: Jump to task creation
- **Share Project**: Add team members or create shareable link
- **Archive/Delete**: When project is complete

### 3. Snapshots Section (Main Area)
Visual cards for each snapshot in your project. Each card shows:
- **Snapshot name**: "Pre-Earnings Phase"
- **Task count**: "3 tasks"
- **Tasks by status**: Visual breakdown (todo, queued, in progress, done)
- **Actions**: Create task, view tasks, edit snapshot
- **Description**: Brief explanation of what's being analyzed

---

## Core Hierarchy: Projects → Snapshots → Tasks

Understanding this hierarchy is key to effective Hub usage.

### Level 1: Project

**What**: Container organizing analysis around a specific investment angle.

**Examples**:
- "Apple Inc. 2025 Analysis" (ongoing surveillance)
- "Sector Rotation: Tech vs. Healthcare" (comparative analysis)
- "Semiconductor Supply Chain Risk" (thematic analysis)
- "M&A Target Screening: Industrial Automation" (screening campaign)

**Contains**: Multiple snapshots

**Typical lifespan**: Weeks to months (ongoing surveillance) or weeks (specific campaign)

### Level 2: Snapshot

**What**: Temporal grouping of related tasks, usually aligned with events or phases.

**Examples**:
- "Q4 2024 Pre-Earnings" (before earnings announcement)
- "Q4 2024 Earnings" (immediately after announcement)
- "Post-Earnings Update" (days after announcement)
- "Monthly Monitoring" (ongoing check-in)
- "Due Diligence Phase 1" (M&A screening)

**Contains**: Multiple related tasks

**Typical lifespan**: Days to weeks (event-driven) or recurring (quarterly)

### Level 3: Task

**What**: Single unit of analysis—one question for one agent.

**Examples**:
- "Retrieve analyst consensus estimates for Q4 revenue and EPS"
- "Build DCF model with consensus growth assumptions"
- "Identify downside scenarios if iPhone demand weakens"
- "Compare competitive positioning vs. Samsung"

**Executes**: One or more agent runs (usually just one)

**Typical lifespan**: Minutes to hours (execution), then persistent in results

---

## Typical Hub Workflow

Here's how a professional analyst uses Hub for earnings analysis:

### Week 1: Pre-Earnings Phase (5-10 hours)

**Monday**: Create project "Apple Inc. Q1 2025 Analysis"
- Set primary ticker: AAPL
- Add related tickers: MSFT, GOOGL, NVDA
- Sector: Technology
- Description: "Analyzing Apple's resilience as consumer demand softens heading into Q1. Focus on iPhone demand, Services growth, and margin trends."

**Monday-Tuesday**: Create "Pre-Earnings" snapshot with 4 tasks:
1. Retrieve analyst consensus revenue and EPS estimates
2. Build DCF model with consensus assumptions + sensitivity analysis
3. Analyze historical earnings surprises and guidance accuracy
4. Identify key risks (iPhone demand, services growth, competition)

Run all tasks (execute in parallel based on plan tier).

**Tuesday-Wednesday**: Review results, cross-check findings
- Do consensus estimates seem reasonable vs. DCF valuation?
- What are the key risks consensus isn't pricing in?
- Update project description with preliminary thesis

**Wednesday-Thursday**: Optional additional analysis
- Create "Competitive Comparison" snapshot with tasks comparing Microsoft, Google, NVDA
- Or create "Risk Scenarios" snapshot with Risk agent modeling downside cases
- Refine thesis as data accumulates

### Week 2: Earnings Announcement (2-4 hours)

**After earnings released**: Create "Earnings Analysis" snapshot with 2-3 tasks:
1. Analyze actual results vs. consensus and your expectations
2. Interpret management commentary and revised guidance
3. Update DCF valuation with actual results

Run immediately upon release, review within 2-3 hours while market reaction is fresh.

### Week 2-3: Post-Earnings (2-4 hours)

**Days after earnings**: Create "Post-Earnings Synthesis" snapshot with final tasks:
1. Compare pre-earnings vs. actual: what surprised you?
2. Identify next key catalysts and monitoring points
3. Update thesis and portfolio positioning

Archive project when analysis concludes (or keep open for ongoing surveillance if long-term position).

---

## Key Hub Advantages Over Workbench

### 1. Parallel Execution
Run 8 tasks simultaneously (Foundation tier) or 32 (Professional tier). Workbench is sequential—one question at a time.

**Savings**: 30 minutes of research becomes 5 minutes (6x faster for multi-task analysis).

### 2. Reusable Configurations
Save task templates. Next time you analyze a tech company, reuse "Competitive Analysis" template with different tickers.

**Savings**: 30 minutes of task setup becomes 5 minutes.

### 3. Team Collaboration
Share projects with colleagues. Assign tasks. Track progress. See who did what.

**Savings**: Communication overhead eliminated; everyone sees latest analysis in real-time.

### 4. Methodology Documentation
Each task documents:
- What you asked (the prompt)
- Which agent answered
- What sources it used
- What assumptions it made

Perfect for compliance, learning, or auditing your own research process.

**Savings**: 45 minutes of documentation becomes automatic.

### 5. Analysis Persistence
Results live in Agentii indefinitely. Return to project 3 months later, see exactly what you analyzed and when.

**Savings**: No external spreadsheets or folders to manage; everything searchable and archived.

### 6. Scalable Snapshots
Organize analysis by event or phase. Compare "Pre-Earnings" snapshot to "Post-Earnings" snapshot to see how analysis evolved.

**Value**: Clear narrative of your research evolution; learning from retrospective analysis.

---

## Hub for Different Use Cases

Intelligence Hub adapts to different analysis styles:

### Equity Research Workflow
Create projects by stock. Each project has snapshots for:
- Coverage initiation (comprehensive multi-week setup)
- Quarterly earnings cycles
- One-off special situations
- Ongoing surveillance

### Sector Rotation Workflow
Create projects by sector. Each snapshot compares peer companies:
- Relative valuation (which peers are cheap?)
- Growth quality (which peers have best growth prospects?)
- Risk assessment (which peers have most downside risk?)
- Recommendation synthesis (overweight which sectors?)

### M&A Screening Workflow
Create projects for target screening campaigns. Snapshots represent screening phases:
- Phase 1: Financial profile (revenue size, profitability, leverage)
- Phase 2: Valuation analysis (is target expensive vs. peers?)
- Phase 3: Strategic fit (does target fill gap in portfolio?)
- Phase 4: Deal risk (What's required to make deal work?)

### Portfolio Management Workflow
Create projects for ongoing holdings. Snapshots represent monitoring cadence:
- Quarterly update (Earnings season review)
- Risk monitoring (Has thesis changed?)
- Thesis update (New information - revise view?)
- Rebalancing decision (Should we buy/sell/hold?)

---

## Plan Tiers and Hub Capabilities

Your Agentii plan determines Hub features:

### Foundation Tier
- **Parallel task limit**: 8 concurrent tasks
- **Projects**: Unlimited
- **Snapshots**: Unlimited per project
- **Tasks**: Unlimited per project
- **Team members**: 1 (you only)
- **Export formats**: PDF, JSON, text
- **Archive**: Yes, unlimited

**Best for**: Individual users, learning, proof-of-concept

### Professional Tier
- **Parallel task limit**: 32 concurrent tasks
- **Projects**: Unlimited
- **Snapshots**: Unlimited per project
- **Tasks**: Unlimited per project
- **Team members**: Up to 10
- **Export formats**: PDF, Excel, JSON, text
- **Archive**: Yes, unlimited
- **API access**: Yes

**Best for**: Active research teams, high-volume analysis, API integration

### Enterprise Tier
- **Parallel task limit**: Custom (50-500+)
- **Projects**: Unlimited
- **Snapshots**: Unlimited per project
- **Tasks**: Unlimited per project
- **Team members**: Unlimited
- **Export formats**: All plus custom integrations
- **Archive**: Yes, unlimited
- **API access**: Yes, with SLA

**Best for**: Large financial institutions, white-label deployment

---

## Hub Resources and Execution Management

Understanding resource constraints helps you optimize workflows.

### Parallel Task Scheduling

If you create 12 tasks but your plan allows only 8 parallel:
1. First 8 tasks execute immediately
2. Tasks 9-12 queue automatically
3. As first tasks complete, queued tasks auto-start
4. Hub manages queue transparently—you don't need to manually trigger

**Pro tip**: For large analysis batches, split into logical groups (e.g., "Retrieval tasks" group, then "Valuation tasks" group) to watch progress through phases.

### Execution Time Expectations

Typical task execution times:
- Retrieval agents: 1-3 minutes (document synthesis)
- Valuation agents: 3-7 minutes (financial modeling)
- Risk agents: 2-5 minutes (scenario analysis)
- Dashboard agents: 1-2 minutes (pattern recognition)

Factors affecting execution time:
- Data availability (rich data sources = faster execution)
- Scope of analysis (broad queries take longer)
- Model complexity (DCF with 5-year forecast takes longer than 2-year)

---

## Getting Started with Hub

### Your First Hub Project: Recommended Setup

**Time**: 15 minutes to create, 30+ minutes for task execution

**What to analyze**: Pick a stock you know or follow

**Step 1: Create project** (5 minutes)
- Go to Projects → Create Project
- Name: "[Company] Q1 2025 Analysis"
- Primary ticker: [Your stock]
- Related tickers: 2-3 peers (optional)
- Sector: Select appropriate category
- Description: "Initial analysis to understand business, valuation, and key risks"

**Step 2: Create first snapshot** (5 minutes)
- Name: "Initial Research"
- Description: "Foundational analysis before deeper dives"

**Step 3: Create 3 tasks** (5 minutes)
1. **Retrieval task**: "What is [Company]'s core business and competitive positioning? Summarize the business model."
2. **Valuation task**: "Estimate fair value using DCF methodology with consensus assumptions. What is the valuation range?"
3. **Risk task**: "What are the top 5 risks facing [Company]? Rank by severity."

**Step 4: Execute** (select "Run")
- All three tasks execute in parallel
- Wait 5-10 minutes for results

**Step 5: Review and next steps**
- Do valuations align?
- Did Risk agent identify risks you expected?
- What questions emerged? Create follow-up tasks

---

## Next Steps

- **Learn how to create projects effectively**: See [Projects Guide](/docs/02-intelligence-hub/projects-guide.md)
- **Master task creation and configuration**: See [Tasks Guide](/docs/02-intelligence-hub/tasks-guide.md)
- **Understand snapshots and temporal organization**: See [Snapshots Guide](/docs/02-intelligence-hub/snapshots-guide.md)
- **Configure agents for your needs**: See [Agent Configuration](/docs/02-intelligence-hub/agents-configuration.md)
- **See proven workflow patterns**: See [Project Workflows](/docs/02-intelligence-hub/project-workflows.md)
- **Learn best practices for results**: See [Results Analysis](/docs/02-intelligence-hub/results-analysis.md)
