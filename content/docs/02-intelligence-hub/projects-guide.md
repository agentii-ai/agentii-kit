---
title: "Projects Guide"
description: "Master Intelligence Hub projects: create, configure, organize, and manage projects for structured financial analysis."
author: "Agentii Documentation"
date: "2025-11-26"
updated: "2025-11-26"
audience: "Beginner"
domain: "Intelligence Hub"
tags: ["projects", "organization", "hub", "creation", "configuration"]
relatedDocs:
  - "/docs/00-introduction/core-concepts.md"
  - "/docs/02-intelligence-hub/hub-fundamentals.md"
  - "/docs/02-intelligence-hub/tasks-guide.md"
  - "/docs/02-intelligence-hub/snapshots-guide.md"
  - "/docs/02-intelligence-hub/project-workflows.md"
---

# Projects Guide

Projects are the foundation of Intelligence Hub. Each project organizes analysis around a specific investment angle: a stock you're researching, a sector you're rotating into, targets you're screening, or risks you're monitoring. This guide walks you through creating, configuring, managing, and best practices for projects.

---

## What Is a Project?

**Definition**: A persistent container for organizing analysis around a specific stock, sector, or investment thesis.

### Why Projects Matter

Without projects, your analysis is ephemeral. You run a query in Workbench, get results, and move on. With projects, you:

- **Build institutional knowledge**: Return to projects weeks later and see exactly what you analyzed, when, and why
- **Organize complex analysis**: Break multi-week research campaigns into logical snapshots and tasks
- **Collaborate with teams**: Share projects, assign tasks, track progress together
- **Document methodology**: Record your analytical approach for consistency and compliance
- **Reuse configurations**: Save task templates and agent prompts for recurring analyses
- **Scale parallel execution**: Run dozens of simultaneous analysis tasks

### Project Examples

**Example 1: Equity Research Initiation**
- Project name: "Apple Inc. 2025 Coverage Initiation"
- Primary focus: AAPL
- Duration: 2-4 weeks of research
- Snapshots: Pre-analysis research, financial analysis, valuation, competitive analysis, final thesis
- Outcome: Publish research initiation report

**Example 2: Quarterly Earnings Cycle**
- Project name: "Microsoft Q2 2025 Earnings"
- Primary focus: MSFT
- Duration: 3-4 weeks (pre-earnings through post-earnings)
- Snapshots: Pre-earnings expectations, earnings announcement analysis, post-earnings synthesis
- Outcome: Updated thesis and price target

**Example 3: M&A Screening**
- Project name: "Semiconductor M&A Targets 2025"
- Primary focus: Sector-level screening
- Duration: 4-8 weeks
- Snapshots: Financial screening, valuation analysis, strategic fit, deal structures
- Outcome: Target list with valuations and strategic recommendations

**Example 4: Portfolio Monitoring**
- Project name: "Core Holdings Surveillance 2025"
- Primary focus: Multiple holdings (creates sub-projects for each or multi-company snapshots)
- Duration: Ongoing (quarterly snapshots)
- Snapshots: Q1 monitoring, Q2 monitoring, Q3 monitoring, Q4 monitoring
- Outcome: Risk monitoring and thesis tracking

---

## Creating Your First Project

### Step 1: Navigate to Projects

In Intelligence Hub, click **Projects** in the left sidebar. If this is your first project, you'll see an empty state with an option to create.

Click **Create Project** (or the blue "New Project" button if visible).

### Step 2: Complete Project Details

You'll see a form with several fields:

#### Project Name (Required)
**Best practices**:
- Include company/sector and time context: "Apple Inc. Q4 2024 Analysis" not just "Apple"
- Be specific about research angle: "Apple Supply Chain Risks 2025" is better than "Apple Project"
- Use consistent naming across your projects for searchability

**Examples**:
- ✅ "Microsoft Azure Cloud Growth Initiative 2025"
- ✅ "Tesla Stock Split Implications - June 2025"
- ✅ "Semiconductor Industry Sector Rotation"
- ❌ "Project A"
- ❌ "Analysis" (too vague)

#### Primary Ticker (Required)
Enter the stock ticker for your main subject of analysis.

**Rules**:
- US stocks: 1-5 character symbols (AAPL, MSFT, BRK.B)
- International stocks: May include country code (0700.HK for Alibaba, ASML for Netherlands)
- Agentii validates against major stock databases
- If validation fails, check spelling or try alternative ticker format

**Special cases**:
- Multi-class shares: Use the shares you're analyzing (BRK.A vs. BRK.B)
- ADRs (American Depositary Receipts): Use US trading symbol (BABA for Alibaba, not the underlying Hong Kong ticker)
- Delisted companies: Cannot be used; focus on currently traded symbols

#### Related Tickers (Optional)
Add 2-5 peer or competitive companies for context.

**When to add related tickers**:
- Competitive analysis: For Apple, add MSFT, GOOGL, NVDA
- Sector rotation: For tech company, add healthcare, financials competitors
- Supply chain: For auto company, add suppliers or customers
- M&A context: For target company, add potential acquirers

**When NOT to add related tickers**:
- You're focused only on primary company (remove all)
- 10+ tickers (too many clutters analysis; stay focused)
- Tickers have no strategic relevance

**Pro tip**: You can update related tickers anytime. Start minimal; add more if analysis needs context.

#### Sector (Required)
Select industry classification. Options:

- **Technology**: Software, hardware, semiconductors, internet, cloud
- **Healthcare**: Pharmaceuticals, biotech, medical devices, healthcare services
- **Financials**: Banks, insurance, asset management, exchanges
- **Consumer**: Retail, consumer staples, consumer discretionary, restaurants
- **Industrials**: Manufacturing, machinery, aerospace, defense, construction
- **Energy**: Oil & gas, renewable energy, utilities
- **Materials**: Mining, chemicals, construction materials
- **Real Estate**: REITs, real estate operators
- **Communications**: Telecom, media, entertainment
- **Other**: If your company doesn't fit above

**Impact**: Sector selection helps Agentii apply industry-specific context and benchmarking. It doesn't restrict analysis—just provides context.

#### Lookback Period (Optional)
Historical data window for agent analysis. Default is 8 quarters (2 years).

**Common selections**:
- **4 quarters** (1 year): Recent trends only, minimal historical noise
- **8 quarters** (2 years): Standard for earnings cycle analysis
- **12 quarters** (3 years): Multi-year trend analysis
- **20 quarters** (5 years): Full business cycle analysis

**Impact**: Agents will analyze at most this much historical data. Longer lookback provides more context but can dilute focus on recent changes.

**Note**: Agents always use available data up to the lookback period—you're setting a maximum, not a requirement.

#### Project Description (Optional)
Free-form text field. This is your research thesis or project summary.

**What to include**:
- Research hypothesis or investment thesis
- Key questions you're trying to answer
- Time horizon
- Specific areas of focus
- Any special considerations

**Example description**:
"Analyzing Apple's iPhone demand resilience as consumer spending slows. Focus on: (1) Services revenue growth offsetting hardware decline, (2) India market penetration potential, (3) Margin sustainability under price pressure. Key catalysts: Q1 earnings, supply chain commentary, consumer demand indicators. Investment thesis: Apple's services transition provides downside protection."

**Visibility**: Only your team members (if project is shared) can see this. It's for internal documentation.

### Step 3: Create the Project

Click **Create Project**. Agentii validates your ticker(s) and creates the project.

**Typical validation time**: 2-3 seconds

**If validation fails**:
- Ticker not found: Check spelling, try alternative format
- Invalid sector: Choose from dropdown options
- Network issue: Refresh and try again

---

## Your Project Dashboard

After creation, you'll see your project dashboard:

### Top Section: Project Metadata
- Project name with edit button
- Primary ticker with current price quote
- Related tickers with price badges
- Sector classification
- Created date and last modified date

### Project Actions (Top Right)
Quick access buttons:
- **Create Snapshot**: Start organizing your analysis into time phases
- **Create Task**: Jump directly to task creation (if you don't want to use snapshots)
- **Share Project**: Invite team members or create public link
- **Edit Project**: Update any of the above metadata
- **Archive/Delete**: When project is complete

### Main Content Area: Snapshots Section
Initially empty. This is where your temporal organization appears.

---

## Organizing Projects: Best Practices

### Principle 1: One Investment Angle Per Project

Each project should have a clear, singular focus. Don't mix unrelated analyses.

**Good**:
- One project for Apple earnings cycle
- One project for tech sector rotation
- One project for semiconductor M&A targets

**Bad**:
- "All my stocks" (too much mixed analysis)
- "2025 research" (unclear organization)
- Multiple unrelated companies (hard to navigate)

### Principle 2: Projects Are for Long-Lived Analysis

Use projects when analysis spans days to months. Use Workbench for quick one-off questions.

**Use project**:
- Earnings cycle analysis (2-4 weeks before/after earnings)
- Coverage initiation (2-4 weeks of foundational research)
- M&A screening (4-8 weeks of evaluation)
- Portfolio monitoring (ongoing through year)

**Use Workbench**:
- Quick stock checks (5-15 minutes)
- Thesis validation (immediate follow-up to news)
- Competitive intelligence snapshots
- Ad-hoc questions

### Principle 3: Name for Future You

Imagine returning to this project 3 months from now. Your project name should tell you:
- What company/sector is being analyzed?
- What time period or event triggered this?
- What's the research angle or thesis?

**Clear names**:
- "Spotify Premium Pricing Power 2025"
- "NVIDIA Competitive Moat Post-Jensen Huang"
- "Healthcare Reform Impact on Pharma 2025"

**Vague names**:
- "Research"
- "Analysis"
- "2025"

### Principle 4: Related Tickers for Context, Not Clutter

Add peers for comparative analysis, but don't overwhelm yourself.

**Strategic related tickers**:
- Direct competitors (Apple/Microsoft/Google for tech)
- Peers in same industry (Ford, GM for auto)
- Suppliers/customers (for supply chain analysis)
- Acquisition targets (for M&A projects)

**Avoid**:
- 10+ tickers (too much to analyze in parallel)
- Random stocks (no strategic relevance)
- Tickers you won't actually analyze

### Principle 5: Update Project Metadata When Thesis Evolves

Your project description should reflect your evolving understanding.

**Example evolution**:
- Initial: "Initial research to understand Apple's business model"
- Week 1: "Focus shifted to services revenue sustainability as iPhone growth slows"
- Week 2: "Key finding: India market penetration may offset iPhone decline; need supply chain analysis"
- Week 3: "Final thesis: Apple's services transition provides downside protection; recommend HOLD with India upside"

---

## Advanced Project Settings

### Archiving Projects

Once analysis is complete, archive the project to keep your active list clean.

**How to archive**:
1. Open project
2. Click "..." menu (top right)
3. Select "Archive"
4. Confirm

**Archiving effects**:
- Project moves to "Archived" view
- Can be restored anytime
- No longer appears in active project list
- Snapshots and tasks remain intact

**When to archive**:
- Research initiation published
- Earnings cycle complete
- Quarterly monitoring snapshot done
- Investment decision made and portfolio updated

### Deleting Projects

Deletion is permanent; use only if project was created in error.

**How to delete**:
1. Open project
2. Click "..." menu (top right)
3. Select "Delete"
4. Confirm (irreversible)

**When to delete** (rarely):
- Project created by mistake (not applicable to actual research)
- Duplicate project (prefer archiving for record-keeping)

### Exporting Projects

Export projects to preserve outside Agentii:

**Export options**:
- Full project export (all snapshots, tasks, results as downloadable file)
- Individual snapshot export
- Individual task results export (PDF, Excel, JSON)

**When to export**:
- Compliance and audit trail requirement
- Publishing research (export final results)
- Backup of important analysis
- Sharing with colleagues outside Agentii

---

## Project Workflows by Use Case

### Use Case 1: Equity Research Initiation

**Timeline**: 2-4 weeks

**Snapshots**:
1. "Research Phase" - Foundational company research
2. "Financial Analysis" - Multi-year metrics and trends
3. "Valuation" - DCF, comps, precedent analysis
4. "Competitive Positioning" - Peer comparison and market share
5. "Final Synthesis" - Risk assessment and thesis formulation

**Related Tickers**: 3-5 main competitors

**Project Description**: Research thesis and investment recommendation target

**Outcome**: Publish coverage initiation report with price target

### Use Case 2: Quarterly Earnings Analysis

**Timeline**: 3-4 weeks (focused around earnings announcement)

**Snapshots**:
1. "Pre-Earnings Expectations" (1-2 weeks before)
2. "Earnings Analysis" (same day as earnings)
3. "Post-Earnings Synthesis" (days after announcement)

**Related Tickers**: 2-3 closest competitors

**Project Description**: Earnings expectations and thesis update plan

**Outcome**: Updated price target and thesis

### Use Case 3: M&A Target Screening

**Timeline**: 4-8 weeks

**Snapshots**:
1. "Financial Screening" - Size, profitability, leverage checks
2. "Valuation Analysis" - Establish fair value range
3. "Strategic Fit" - Synergies, competitive positioning
4. "Deal Structure & Pricing" - Recommend valuation and structure
5. "Final Recommendation" - GO/NO-GO decision

**Related Tickers**: Potential acquirers, similar precedent deals

**Project Description**: Acquisition criteria and target evaluation framework

**Outcome**: Target recommendation with valuation and deal structure

### Use Case 4: Portfolio Monitoring (Ongoing)

**Timeline**: Quarterly, recurring

**Snapshots**:
1. "Q1 Monitoring" (Jan-Mar)
2. "Q2 Monitoring" (Apr-Jun)
3. "Q3 Monitoring" (Jul-Sep)
4. "Q4 Monitoring" (Oct-Dec)

**Related Tickers**: N/A (individual holding; create separate projects for each if preferred)

**Project Description**: Key theses for this holding and risk factors to monitor

**Outcome**: Quarterly risk assessment and position update

---

## Team Project Management

### Sharing Projects

To collaborate with team members:

1. Open project
2. Click **Share** button (top right)
3. Add team members by email
4. Set permissions:
   - **Viewer**: Can view results but not create/edit tasks
   - **Analyst**: Can create and edit tasks, run analysis
   - **Lead**: Can edit project metadata, snapshot names, and permissions

5. Optional: Create shareable link for external stakeholders (view-only)

### Project Permissions

Different roles have different capabilities:

| Capability | Viewer | Analyst | Lead |
|-----------|--------|---------|------|
| View results | ✓ | ✓ | ✓ |
| Create tasks | | ✓ | ✓ |
| Edit tasks | | ✓ | ✓ |
| Run tasks | | ✓ | ✓ |
| Create snapshots | | ✓ | ✓ |
| Edit project name/description | | | ✓ |
| Manage permissions | | | ✓ |
| Archive/delete project | | | ✓ |

### Best Practices for Team Projects

**1. Assign tasks to owners**
- When creating a task, assign to specific analyst
- Assignee is responsible for running and validating results
- Helps track accountability

**2. Use project description for context**
- Document the overall thesis
- Note any special considerations
- Update as team findings evolve

**3. Name snapshots clearly**
- "Pre-Earnings Phase" not "Phase 1"
- "Risk Assessment Snapshot" not "Snapshot 2"
- Helps team members navigate

**4. Document assumptions in task prompts**
- Custom prompts should note key assumptions
- "Assume iPhone ASP stays flat" or "Assume 5% margin improvement"
- Enables repeatable analysis

**5. Review results together**
- Schedule time to review agent results as a team
- Discuss discrepancies between agents
- Update thesis collectively

---

## Project Maintenance

### Updating Project Metadata

**When to update**:
- Research thesis evolves (update description)
- Focus shifts to different peers (update related tickers)
- Analysis spans longer period (increase lookback if needed)

**How to update**:
1. Open project
2. Click project name or edit icon
3. Update desired fields
4. Save

### Managing Project Growth

As projects grow with many snapshots, keep organized:

**Best practices**:
- Archive completed snapshots if view gets cluttered
- Delete duplicate snapshots (if created in error)
- Use consistent snapshot naming convention
- Create new project if analysis diverges significantly from original thesis

### Historical Record

All projects and snapshots are permanent. You can:
- Return to old snapshots anytime
- View task history and execution dates
- Compare pre vs. post results for learning
- Reference for future similar analyses

---

## Common Project Patterns

### Pattern 1: Single Company, Multi-Year Surveillance
- Project: "[Company] Annual Monitoring 2025"
- Snapshots: Q1 monitoring, Q2 monitoring, etc.
- Reuse: Similar tasks each quarter, update assumptions annually

### Pattern 2: Sector Comparative Analysis
- Project: "[Sector] Competitive Positioning Q4 2024"
- Snapshots: Company A analysis, Company B analysis, Company C analysis, comparative synthesis
- Reuse: Update quarterly for rotation decisions

### Pattern 3: Event-Driven (Earnings, M&A, Catalyst)
- Project: "[Company] [Event] 2025"
- Snapshots: Pre-event, event announcement, post-event synthesis
- Timeline: Compact 2-4 week duration
- Outcome: Clear recommendation

### Pattern 4: Screening and Filtering
- Project: "[Criteria] Target Screening 2025"
- Snapshots: Phase 1 screening, Phase 2 deep dive, Phase 3 valuation, Phase 4 recommendation
- Flexibility: Varies by number of targets
- Outcome: Ranked list with recommendations

---

## Next Steps

- **Ready to create snapshots?** See [Snapshots Guide](/docs/02-intelligence-hub/snapshots-guide.md)
- **Ready to create your first task?** See [Tasks Guide](/docs/02-intelligence-hub/tasks-guide.md)
- **Want to see project patterns in action?** See [Project Workflows](/docs/02-intelligence-hub/project-workflows.md)
- **Want best practices?** See [Best Practices for Project Design](/docs/05-best-practices/project-design.md) (when available)
