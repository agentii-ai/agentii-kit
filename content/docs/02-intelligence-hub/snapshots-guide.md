---
title: "Snapshots Guide"
description: "Master snapshots: temporal organization of financial analysis through earnings cycles, research phases, and time-based project milestones."
author: "Agentii Documentation"
date: "2025-01-26"
updated: "2025-01-26"
audience: "Intermediate"
domain: "Intelligence Hub"
tags: ["snapshots", "temporal analysis", "earnings cycles", "organization", "phases"]
relatedDocs:
  - "/docs/00-introduction/core-concepts.md"
  - "/docs/02-intelligence-hub/hub-fundamentals.md"
  - "/docs/02-intelligence-hub/projects-guide.md"
  - "/docs/02-intelligence-hub/tasks-guide.md"
  - "/docs/02-intelligence-hub/project-workflows.md"
---

# Snapshots Guide

Snapshots are temporal containers within projects that organize analysis by time, event, or research phase. They enable you to structure complex financial research campaigns around earnings cycles, deal milestones, or quarterly monitoring periods. This guide explains how to create, configure, and leverage snapshots for sophisticated analytical workflows.

---

## What Is a Snapshot?

**Definition**: A snapshot is a temporal grouping of related tasks within a project, typically aligned with events or research phases.

### Core Concept

Think of a snapshot as a chapter in your research story. Each snapshot represents a distinct phase of analysis:

- **Pre-Earnings Snapshot**: Analysis conducted before earnings announcement
- **Earnings Snapshot**: Immediate post-announcement analysis
- **Post-Earnings Snapshot**: Days-later synthesis and thesis update
- **Monthly Monitoring Snapshot**: Recurring surveillance checkpoints
- **Due Diligence Phase 1**: Initial M&A target screening

### Why Snapshots Matter

Without snapshots, your project becomes a flat list of tasks with no temporal context. With snapshots, you:

- **Organize by time**: Separate pre-earnings analysis from post-earnings synthesis
- **Track evolution**: Compare how your thesis changed from February to August
- **Enable collaboration**: Assign different research phases to different team members
- **Document methodology**: Show auditors exactly when each analysis was conducted
- **Reuse patterns**: Copy snapshot structure from Q1 analysis to Q2 analysis
- **Maintain focus**: Keep teams focused on current phase without distraction from past work

---

## Snapshots vs. Projects vs. Tasks

Understanding the three-level hierarchy:

| Level | Purpose | Lifespan | Example |
|-------|---------|----------|---------|
| **Project** | Investment angle container | Weeks to months | "Apple Inc. 2025 Analysis" |
| **Snapshot** | Temporal phase grouping | Days to weeks | "Q1 Pre-Earnings Phase" |
| **Task** | Single analytical question | Minutes to hours | "Build DCF valuation model" |

**Relationship**:
- One project contains multiple snapshots
- One snapshot contains multiple tasks
- Tasks cannot span multiple snapshots (each task belongs to exactly one snapshot)

---

## Creating Your First Snapshot

### Prerequisites

Before creating a snapshot, you need:
1. An active project (see [Projects Guide](/docs/02-intelligence-hub/projects-guide.md))
2. Clear understanding of the temporal phase you're documenting

### Step-by-Step Creation

#### Step 1: Navigate to Snapshots Page

1. From Intelligence Hub sidebar, click **Snapshots**
2. You'll see the Snapshots Management page
3. At the top, use the **Project Selector** dropdown to choose your project

**What you'll see**:
- Header: "Snapshots Management"
- Description: "A Snapshot belongs to a Project and is a temporal snapshot of the stock research"
- Project selector with "Create New Project" option
- If project selected: Project details banner showing name and description

#### Step 2: Select Your Project

Click the Project Selector dropdown and choose the project for which you want to create a snapshot.

**If you don't see your project**:
- Ensure you've already created the project (see [Projects Guide](/docs/02-intelligence-hub/projects-guide.md))
- Check that the project is not archived
- Verify you have access permissions if it's a shared project

#### Step 3: Click "Create Snapshot" Button

Once a project is selected, you'll see primary action buttons in the top-right:
- **Create Snapshot**: Click this to begin

A dialog will appear with snapshot configuration fields.

#### Step 4: Complete Snapshot Details

**Snapshot Name** (Required)
- Be specific about temporal context
- Include event or phase identifier
- Use consistent naming convention

**Examples**:
- ✅ "Q4 2024 Pre-Earnings Analysis"
- ✅ "Post-Earnings Synthesis - January 2025"
- ✅ "Monthly Monitoring - February 2025"
- ✅ "Due Diligence Phase 2: Valuation"
- ❌ "Snapshot 1" (too vague)
- ❌ "Analysis" (no temporal context)

**Snapshot Description** (Optional but Recommended)
Brief explanation of what this snapshot represents and what you're trying to accomplish.

**Example descriptions**:
- "Pre-earnings expectations analysis conducted 2 weeks before Q4 announcement. Focus: iPhone demand, Services growth, margin trends."
- "Immediate post-earnings analysis on the day of announcement. Comparing actuals vs. consensus and our pre-earnings expectations."
- "Monthly surveillance of Apple's competitive positioning, product momentum, and risk factors as of February 2025."

**Temporal Context** (Implicit)
Snapshots are automatically timestamped when created. This timestamp serves as the official record of when this analysis phase began.

#### Step 5: Create and Begin Adding Tasks

Click **Create Snapshot**. The snapshot is now part of your project.

**Next steps**:
- Navigate to Tasks page
- Select your project and the newly created snapshot
- Begin creating tasks for this phase

---

## Snapshot Naming Best Practices

### Principle 1: Lead with Time Context

Always include temporal information in snapshot names.

**Good patterns**:
- "Q4 2024 Pre-Earnings"
- "January 2025 Monitoring"
- "FY2025 Coverage Initiation"
- "Week of Feb 10-16: Risk Assessment"

**Bad patterns**:
- "Snapshot 1" (no context)
- "Analysis" (too vague)
- "Research" (unclear when)

### Principle 2: Include Event or Phase Identifier

Make it clear what analytical phase this represents.

**Event-driven snapshots**:
- "Earnings Announcement - Q3 2024"
- "FDA Approval Decision - March 2025"
- "M&A Announcement - Tesla Acquisition"
- "Product Launch - iPhone 16"

**Phase-driven snapshots**:
- "Phase 1: Financial Screening"
- "Phase 2: Valuation Analysis"
- "Phase 3: Strategic Fit Assessment"
- "Final Recommendation Synthesis"

### Principle 3: Use Consistent Format Across Projects

If you monitor 10 stocks quarterly, use the same naming pattern for all:

**Consistent example**:
- Apple project: "Q1 2025 Monitoring", "Q2 2025 Monitoring", "Q3 2025 Monitoring"
- Microsoft project: "Q1 2025 Monitoring", "Q2 2025 Monitoring", "Q3 2025 Monitoring"
- NVIDIA project: "Q1 2025 Monitoring", "Q2 2025 Monitoring", "Q3 2025 Monitoring"

**Benefit**: Easy to compare across holdings, reuse task templates, maintain institutional consistency.

---

## Common Snapshot Patterns

### Pattern 1: Earnings Cycle Analysis (3 Snapshots)

Used for quarterly earnings research campaigns.

**Snapshot 1: Pre-Earnings (1-2 weeks before announcement)**
- Name: "Q4 2024 Pre-Earnings Analysis"
- Purpose: Build expectations, establish benchmarks
- Typical tasks:
  - Retrieve consensus estimates
  - Build valuation models
  - Identify key risks and catalysts
  - Review historical earnings patterns

**Snapshot 2: Earnings Announcement (day of release)**
- Name: "Q4 2024 Earnings - Day of Announcement"
- Purpose: Immediate analysis of actual results
- Typical tasks:
  - Compare actuals vs. consensus and your expectations
  - Analyze management commentary and guidance
  - Identify surprises (positive and negative)
  - Assess market reaction

**Snapshot 3: Post-Earnings Synthesis (days after announcement)**
- Name: "Q4 2024 Post-Earnings Synthesis"
- Purpose: Updated thesis and recommendations
- Typical tasks:
  - Revise valuation models with actual results
  - Update investment thesis and price target
  - Identify next key catalysts
  - Document lessons learned

**Timeline**: 2-4 weeks total (1-2 weeks pre, 1 day announcement, 1 week post)

---

### Pattern 2: Coverage Initiation (5 Snapshots)

Used for comprehensive research to initiate coverage on a new stock.

**Snapshot 1: Foundational Research**
- Name: "Initial Company Research - Week 1"
- Purpose: Understand the business
- Typical tasks:
  - Company overview and business model
  - Product and service portfolio analysis
  - Key executives and management quality assessment
  - Historical performance overview

**Snapshot 2: Financial Analysis**
- Name: "Financial Deep Dive - Week 2"
- Purpose: Analyze financial health and trends
- Typical tasks:
  - Revenue trends and growth drivers
  - Margin analysis and profitability
  - Balance sheet strength and leverage
  - Cash flow generation and capital allocation

**Snapshot 3: Valuation**
- Name: "Valuation Analysis - Week 3"
- Purpose: Establish fair value
- Typical tasks:
  - DCF model with multiple scenarios
  - Comparable company analysis
  - Precedent transaction analysis
  - Valuation sensitivity analysis

**Snapshot 4: Competitive Positioning**
- Name: "Competitive Analysis - Week 3-4"
- Purpose: Understand market positioning
- Typical tasks:
  - Competitive landscape mapping
  - Market share trends
  - Competitive advantages and moats
  - Threats from new entrants

**Snapshot 5: Final Synthesis**
- Name: "Thesis Formulation - Week 4"
- Purpose: Develop investment recommendation
- Typical tasks:
  - Risk assessment and downside scenarios
  - Investment thesis formulation
  - Price target and rating recommendation
  - Key catalysts and monitoring points

**Timeline**: 4 weeks

---

### Pattern 3: Ongoing Portfolio Monitoring (Recurring Snapshots)

Used for quarterly or monthly surveillance of existing holdings.

**Monthly Pattern**:
- "January 2025 Monitoring"
- "February 2025 Monitoring"
- "March 2025 Monitoring"
- (Continue each month)

**Quarterly Pattern**:
- "Q1 2025 Quarterly Review"
- "Q2 2025 Quarterly Review"
- "Q3 2025 Quarterly Review"
- "Q4 2025 Quarterly Review"

**Typical tasks** (repeated in each snapshot):
- Review recent news and developments
- Check for thesis changes
- Monitor key risk factors
- Update valuation if material changes
- Assess portfolio position (buy/hold/sell)

**Benefit**: Longitudinal tracking shows how thesis evolved over time; easy to compare Q1 monitoring to Q4 monitoring.

---

### Pattern 4: M&A Target Screening (4-Phase Snapshots)

Used for acquisition target evaluation.

**Snapshot 1: Financial Screening**
- Purpose: Identify financially attractive targets
- Tasks: Size filters, profitability checks, leverage analysis, growth trends

**Snapshot 2: Valuation Analysis**
- Purpose: Establish fair value range
- Tasks: DCF valuation, comparable M&A multiples, stand-alone valuation

**Snapshot 3: Strategic Fit**
- Purpose: Assess synergies and integration
- Tasks: Synergy quantification, integration complexity, cultural fit, competitive impact

**Snapshot 4: Deal Structure & Recommendation**
- Purpose: Recommend GO/NO-GO decision
- Tasks: Offer price recommendation, deal structure (cash vs. stock), risk factors, final decision

**Timeline**: 6-10 weeks

---

### Pattern 5: Special Situations (Event-Specific Snapshots)

Used for one-off events requiring analysis.

**Examples**:
- "Product Launch: iPhone 16 - September 2024"
- "FDA Approval Decision: Drug XYZ - March 2025"
- "Activist Campaign: Elliott Management - Q2 2025"
- "Management Change: New CEO Announced - January 2025"
- "Legal Settlement: Patent Dispute Resolved - February 2025"

**Typical structure**:
1. **Pre-Event Snapshot**: Expectations and scenario planning
2. **Event Snapshot**: Immediate analysis of announcement
3. **Post-Event Snapshot**: Updated thesis and implications

---

## Managing Snapshots in Your Project

### Viewing Snapshots

From the Snapshots page:
1. Select your project from the Project Selector
2. You'll see a table or grid of all snapshots in the project
3. Each snapshot shows:
   - Snapshot name
   - Description
   - Creation date
   - Number of tasks
   - Task status breakdown (todo, queued, in progress, done)

**Sorting options** (if available):
- By creation date (newest first, oldest first)
- By name (alphabetical)
- By task count

### Editing Snapshots

To update a snapshot:
1. Locate the snapshot in the table
2. Click the **Edit** button (pencil icon)
3. Update name or description
4. Save changes

**When to edit**:
- Fix typos in snapshot name
- Update description as research evolves
- Clarify temporal context if ambiguous

**Note**: You cannot change which project a snapshot belongs to. Snapshots are permanently tied to their original project.

### Archiving Snapshots

Completed snapshots can be archived to keep your active list clean.

**How to archive**:
1. Locate the snapshot
2. Click **...** menu or Archive button
3. Confirm archival

**Archiving effects**:
- Snapshot moves to "Archived" view
- Tasks within snapshot remain intact but hidden from active views
- Can be restored anytime
- No longer appears in active snapshot lists

**When to archive**:
- Earnings cycle complete and no further analysis needed
- Coverage initiation published; project moves to ongoing surveillance
- Quarterly monitoring snapshot superseded by newer quarter
- M&A decision made (GO/NO-GO finalized)

### Deleting Snapshots

Deletion is permanent; use only if snapshot was created in error.

**How to delete**:
1. Locate the snapshot
2. Click **Delete** button
3. Confirm deletion (irreversible)

**Warning**: Deleting a snapshot deletes all tasks within it. Results and analysis are lost permanently.

**When to delete** (rarely):
- Snapshot created for wrong project by mistake
- Duplicate snapshot (prefer archiving for audit trail)

---

## Snapshots and Temporal Analysis

### Understanding Temporal Context

Snapshots are timestamped automatically upon creation. This timestamp is critical for:

**Audit Compliance**: Demonstrates exactly when analysis was conducted  
**Retrospective Learning**: Compare predictions from pre-earnings snapshot to actual results in post-earnings snapshot  
**Thesis Evolution Tracking**: See how your investment view changed from Q1 to Q4  
**Regulatory Documentation**: Prove analysis was conducted before trading decisions  

### Comparing Snapshots Across Time

**Use Case: Earnings Cycle Comparison**

You can compare agent results from different snapshots to identify:
- How consensus estimates changed from pre-earnings to post-earnings
- Whether your DCF valuation improved or deteriorated after actual results
- Which risks materialized vs. which risks were mitigated
- How your thesis evolved through the quarter

**Workflow**:
1. Open Tasks page
2. Filter tasks by project and select "Q4 Pre-Earnings" snapshot
3. Review pre-earnings DCF valuation result (e.g., fair value $180)
4. Change snapshot selector to "Q4 Post-Earnings" snapshot
5. Review updated DCF valuation (e.g., fair value revised to $165)
6. Document thesis change: "iPhone demand weaker than expected; lowered growth assumptions"

### Snapshots Enable Longitudinal Research

**Example: Year-Long Surveillance**

Project: "Microsoft 2025 Surveillance"

Snapshots:
- "Q1 2025 Monitoring" (January)
- "Q2 2025 Monitoring" (April)
- "Q3 2025 Monitoring" (July)
- "Q4 2025 Monitoring" (October)

Each snapshot asks the same questions (using task templates):
1. What's the current Azure growth rate?
2. Has competitive positioning vs. AWS changed?
3. Are there new risk factors?
4. What's the updated DCF fair value?

**Analysis across snapshots**:
- Compare Azure growth Q1 vs. Q4 (decelerating or accelerating?)
- Track competitive positioning trend (gaining or losing share?)
- Identify when new risks emerged (which quarter?)
- See valuation trend (multiple expansion or contraction?)

**Value**: This longitudinal view is impossible without snapshots. You can see not just "what is true today" but "how has truth changed over time."

---

## Team Collaboration with Snapshots

### Assigning Snapshots to Team Members

For large projects, assign different snapshots to different analysts.

**Example: Coverage Initiation Project**

- Analyst 1: "Foundational Research" snapshot (business model, management)
- Analyst 2: "Financial Analysis" snapshot (revenue, margins, cash flow)
- Analyst 3: "Valuation" snapshot (DCF, comps, precedent transactions)
- Lead Analyst: "Final Synthesis" snapshot (thesis, recommendation)

**Benefits**:
- Parallel execution: All analysts work simultaneously
- Clear ownership: Each analyst owns their phase
- Logical handoffs: Phase 1 complete → Phase 2 begins
- Independent review: Lead can review each phase independently

### Snapshot Permissions

Snapshots inherit project-level permissions:

| Role | Create Snapshot | Edit Snapshot Name | Archive Snapshot | Delete Snapshot |
|------|----------------|-------------------|------------------|----------------|
| Viewer | ❌ | ❌ | ❌ | ❌ |
| Analyst | ✅ | ✅ | ✅ | ❌ |
| Lead | ✅ | ✅ | ✅ | ✅ |

**Best practices**:
- Only Leads should delete snapshots (prevents accidental data loss)
- Analysts can create and archive for day-to-day workflow
- Viewers see snapshots but cannot modify (useful for compliance officers, portfolio managers)

---

## Advanced Snapshot Workflows

### Workflow 1: Comparative Peer Analysis

**Scenario**: Analyze 3 peer companies (Apple, Microsoft, Google) in parallel.

**Project**: "Tech Mega-Caps Comparative Analysis - Q4 2024"

**Snapshots**:
1. "Apple Analysis - Q4 2024"
2. "Microsoft Analysis - Q4 2024"
3. "Google Analysis - Q4 2024"
4. "Comparative Synthesis - Q4 2024"

**Workflow**:
- Snapshots 1-3 run in parallel: Each snapshot contains identical task templates (valuation, risk, competitive analysis) but applied to different tickers
- Snapshot 4 synthesizes results: Compare valuations, rank by attractiveness, recommend rotation

**Benefit**: Structured comparison with clear organization; can reuse this pattern for Q1 2025 analysis.

---

### Workflow 2: Scenario Planning with Snapshots

**Scenario**: Analyze multiple potential outcomes for a binary event.

**Project**: "FDA Approval Decision - Biotech XYZ"

**Snapshots**:
1. "Base Case: Approval Granted"
2. "Downside Case: Approval Denied"
3. "Mixed Case: Partial Approval"
4. "Pre-Decision Synthesis"

**Workflow**:
- Snapshots 1-3 run scenario-specific analyses: Each snapshot models different outcome with corresponding valuation, risk assessment, and portfolio impact
- Snapshot 4 created before decision: Document expected probabilities and portfolio positioning strategy

**Post-Decision**:
- Create final snapshot: "Actual Outcome - Approval Granted"
- Compare actual result to Base Case snapshot predictions
- Update thesis and portfolio position

---

### Workflow 3: Reusable Snapshot Templates

**Scenario**: You monitor 15 stocks with identical quarterly workflow.

**Template**: "Quarterly Monitoring Snapshot"

**Standardized tasks** (same for every stock every quarter):
1. Review quarterly earnings vs. consensus
2. Update DCF valuation with latest results
3. Assess competitive positioning changes
4. Identify new risk factors
5. Recommend buy/hold/sell

**Implementation**:
1. Create snapshot for Stock A Q1: "Apple - Q1 2025 Monitoring"
2. Add all 5 standardized tasks
3. Copy snapshot structure to Stock B, Stock C, etc.
4. Copy snapshot to Q2 for all stocks (repeat quarterly)

**Benefit**: Institutional consistency, reduced setup time, easy comparison across holdings.

---

## Best Practices for Snapshot Design

### Practice 1: Limit Snapshots Per Project

**Guideline**: 3-10 snapshots per project is optimal. More than 10 becomes cluttered.

**Why**:
- Too few snapshots (1-2): Loses temporal organization benefits
- Too many snapshots (15+): Navigation becomes difficult; loses focus

**If you need more than 10 snapshots**: Consider whether this is actually multiple projects. Example: "Apple 2024 Analysis" with 20 snapshots might be better as two projects: "Apple H1 2024" and "Apple H2 2024."

---

### Practice 2: Create Snapshots Just-in-Time

Don't create all snapshots upfront for a project. Create snapshots as you reach that phase.

**Bad**:
- Day 1: Create all 5 snapshots for coverage initiation project
- Problem: Snapshot names may change as research evolves; unused snapshots clutter interface

**Good**:
- Week 1: Create "Foundational Research" snapshot and complete tasks
- Week 2: Create "Financial Analysis" snapshot after Week 1 is done
- Week 3: Create "Valuation" snapshot after financial work is complete

**Benefit**: Snapshot names reflect actual workflow; no premature planning that becomes outdated.

---

### Practice 3: Use Descriptions to Document Context

Snapshot descriptions should answer: "Why was this snapshot created? What were we trying to learn?"

**Weak descriptions**:
- "Analysis snapshot"
- "Research phase"
- "Q4 earnings"

**Strong descriptions**:
- "Pre-earnings analysis focused on iPhone demand in China and Services revenue sustainability. Created 2 weeks before Q4 announcement to establish baseline expectations."
- "Post-FDA decision analysis assuming approval denied. Modeling downside scenario impact on valuation and portfolio positioning."
- "Monthly monitoring as of February 2025. Key focus: competitive positioning vs. Samsung following Galaxy S25 launch."

---

### Practice 4: Archive Old Snapshots Promptly

Keep your active snapshot list clean by archiving completed phases.

**When to archive**:
- Earnings cycle complete (all 3 snapshots done; thesis updated)
- Coverage initiation published (final recommendation delivered)
- Quarterly monitoring superseded by next quarter
- M&A decision finalized (GO/NO-GO determined)

**Exception**: Keep snapshots active if you're doing longitudinal comparison. Example: Don't archive "Q1 Monitoring" if you're actively comparing Q1 vs. Q2 vs. Q3 trends.

---

### Practice 5: Standardize Naming Within Your Organization

If multiple team members create snapshots, enforce a naming convention.

**Example organizational standards**:
- Earnings snapshots: "[Stock] - [Quarter] [Year] - [Phase]" (e.g., "AAPL - Q4 2024 - Pre-Earnings")
- Monitoring snapshots: "[Stock] - [Month] [Year] Monitoring" (e.g., "MSFT - February 2025 Monitoring")
- M&A snapshots: "[Target] - Phase [Number]: [Description]" (e.g., "Company XYZ - Phase 2: Valuation")

**Benefit**: Easy to search, filter, and compare across team members' work.

---

## Troubleshooting Common Issues

### Issue 1: Snapshot Name Too Long

**Symptom**: Snapshot name gets truncated in UI; hard to distinguish snapshots.

**Solution**:
- Keep snapshot names under 50 characters
- Use abbreviations for common terms (e.g., "Q4" not "Fourth Quarter")
- Put most important context first (e.g., "Q4 2024 Pre-Earnings" not "Analysis of Apple Inc. Fourth Quarter 2024 Pre-Earnings Phase")

---

### Issue 2: Too Many Snapshots in One Project

**Symptom**: Snapshot list becomes overwhelming; hard to find relevant phase.

**Solution**:
- Archive completed snapshots
- Consider splitting project into multiple projects (e.g., split by year or by thesis angle)
- Use search/filter functionality to narrow snapshot list

---

### Issue 3: Unclear Which Snapshot to Use for New Task

**Symptom**: Multiple snapshots could logically contain a new task.

**Solution**:
- Follow temporal order: Put task in snapshot representing current time phase
- If task spans multiple phases: Choose the snapshot where task is most relevant (e.g., valuation task goes in "Valuation" snapshot, not "Foundational Research")
- If still unclear: Create a new snapshot for this analytical angle

---

### Issue 4: Snapshot Created in Wrong Project

**Symptom**: Snapshot created under wrong project by mistake.

**Solution**:
- Snapshots cannot be moved between projects
- Delete the incorrectly placed snapshot (warning: this deletes all tasks within it)
- Recreate snapshot in correct project
- Future prevention: Always verify project selector before clicking "Create Snapshot"

---

### Issue 5: Cannot Find Old Snapshot

**Symptom**: Snapshot existed before but is now missing.

**Solution**:
- Check if snapshot was archived: Look in "Archived Snapshots" view
- Check if you're viewing correct project: Verify project selector
- Check permissions: Ensure you still have access to the project
- If snapshot was deleted: Cannot recover; contact support if critical data loss

---

## Integration with Other Hub Features

### Snapshots and Tasks

Every task belongs to exactly one snapshot. When creating a task:

1. Select project
2. Select snapshot (or create new snapshot)
3. Configure task details
4. Task is permanently associated with that snapshot

**Task-level visibility**:
- From Tasks page: Filter by project and snapshot to see tasks in specific phase
- Task results include snapshot context (useful for temporal analysis)

### Snapshots and Agents

Agents are snapshot-aware:
- Agent results are stored with snapshot context
- You can configure agents to consider temporal factors (e.g., "pre-earnings" vs. "post-earnings" context)
- Future: Agents may provide different analysis based on snapshot phase

### Snapshots and Results Export

When exporting project results:
- Option to export specific snapshot (e.g., export only "Q4 Pre-Earnings" results)
- Option to export full project (all snapshots)
- Snapshot name appears in exported reports for traceability

---

## Next Steps

- **Ready to create tasks within snapshots?** See [Tasks Guide](/docs/02-intelligence-hub/tasks-guide.md)
- **Want to configure agents for your snapshots?** See [Agents Configuration](/docs/02-intelligence-hub/agents-configuration.md)
- **Ready to execute tasks and monitor progress?** See [Task Execution](/docs/02-intelligence-hub/task-execution.md)
- **Want to see snapshot patterns in action?** See [Project Workflows](/docs/02-intelligence-hub/project-workflows.md)
- **Need to understand the full project hierarchy?** See [Projects Guide](/docs/02-intelligence-hub/projects-guide.md)
