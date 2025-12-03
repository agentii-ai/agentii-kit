---
title: "Project Design Best Practices"
description: "Master effective project structure and organization patterns for institutional financial research."
author: "Agentii Documentation"
date: "2025-11-26"
updated: "2025-11-26"
audience: "Intermediate"
domain: "Intelligence Hub"
tags: ["best-practices", "project-design", "organization", "workflows", "institutional"]
relatedDocs:
  - "/docs/02-intelligence-hub/projects-guide.md"
  - "/docs/02-intelligence-hub/hub-fundamentals.md"
  - "/docs/02-intelligence-hub/project-workflows.md"
  - "/docs/05-best-practices/knowledge-building.md"
  - "/docs/05-best-practices/team-collaboration.md"
---

# Project Design Best Practices

Effective project design is the foundation of scalable, repeatable institutional research. This guide presents proven patterns for organizing Intelligence Hub projects based on real-world usage at buy-side and sell-side institutions.

---

## Organizing by Research Mandate

### Principle: One Mandate, One Project

Each project should align with a single research mandate or investment decision. Mixing unrelated analyses creates confusion and dilutes focus.

**Good Examples**:
- "Apple Inc. Q4 2024 Earnings Coverage"
- "Technology Sector Rotation Analysis Q1 2025"
- "Semiconductor M&A Target Screening"
- "Portfolio Risk Monitoring - Energy Holdings"

**Poor Examples**:
- "All My Research" (too broad, no clear mandate)
- "2024 Analysis" (no specificity)
- "AAPL + MSFT + GOOGL" (separate companies = separate projects unless comparative analysis)

### Mandate Categories

**Coverage Initiation**
- Purpose: Comprehensive initial analysis for new stock coverage
- Duration: 2-4 weeks typically
- Structure: Research → Financials → Valuation → Competitive → Risk → Thesis
- Outcome: Published initiation report with price target

**Earnings Cycle**
- Purpose: Pre/during/post earnings analysis
- Duration: 3-4 weeks per quarter
- Structure: Pre-Earnings → Earnings Day → Post-Earnings Synthesis
- Outcome: Updated thesis and price target

**Sector Rotation**
- Purpose: Relative value analysis across sector peers
- Duration: 1-2 weeks for initial screen; ongoing monitoring
- Structure: Screening → Valuation → Risk → Ranking
- Outcome: Overweight/underweight recommendations

**M&A Screening**
- Purpose: Identify and evaluate acquisition targets
- Duration: 4-8 weeks
- Structure: Financial Screen → Valuation → Strategic Fit → Deal Structure
- Outcome: Target list with recommended valuations

**Portfolio Surveillance**
- Purpose: Ongoing monitoring of existing holdings
- Duration: Quarterly recurring
- Structure: Q1 Check → Q2 Check → Q3 Check → Q4 Check
- Outcome: Risk assessment and position updates

---

## Project Lifecycle Patterns

### Pattern 1: Time-Bound Research Campaign

**Use Case**: Coverage initiation, M&A due diligence, special situations

**Structure**:
```
Project: [Company] [Mandate] [Year]
├─ Snapshot 1: Initial Research (Week 1)
│  └─ Tasks: Company overview, business model, competitive landscape
├─ Snapshot 2: Financial Analysis (Week 2)
│  └─ Tasks: Historical metrics, margin trends, cash flow analysis
├─ Snapshot 3: Valuation (Week 3)
│  └─ Tasks: DCF, comps, precedent transactions
├─ Snapshot 4: Risk Assessment (Week 3-4)
│  └─ Tasks: Downside scenarios, risk factors, sensitivity
└─ Snapshot 5: Final Synthesis (Week 4)
   └─ Tasks: Recommendation, price target, catalysts
```

**Best Practices**:
- Create all snapshots upfront to visualize research plan
- Populate snapshots with tasks sequentially (complete Snapshot 1 before moving to 2)
- Document key findings in snapshot descriptions as you progress
- Archive project when research is published

### Pattern 2: Recurring Surveillance

**Use Case**: Portfolio monitoring, sector tracking, ongoing coverage

**Structure**:
```
Project: [Holdings/Sector] Annual Surveillance [Year]
├─ Snapshot: Q1 2025 Review
│  └─ Tasks: Quarterly results review, thesis validation, risk update
├─ Snapshot: Q2 2025 Review
│  └─ Tasks: [Same task structure, updated data]
├─ Snapshot: Q3 2025 Review
│  └─ Tasks: [Same task structure, updated data]
└─ Snapshot: Q4 2025 Review
   └─ Tasks: [Same task structure, updated data]
```

**Best Practices**:
- Save task templates from Q1; reuse for Q2-Q4 (update assumptions only)
- Compare quarter-over-quarter snapshot results to identify trend changes
- Update project description with evolving thesis
- Don't archive—keep active for annual reference

### Pattern 3: Event-Driven Analysis

**Use Case**: Earnings announcements, M&A deals, regulatory changes, catalyst-driven

**Structure**:
```
Project: [Company] [Event] [Date]
├─ Snapshot: Pre-Event Expectations
│  └─ Tasks: Consensus expectations, historical patterns, thesis positioning
├─ Snapshot: Event Day Analysis
│  └─ Tasks: Actual results vs. expectations, management commentary, initial reaction
└─ Snapshot: Post-Event Synthesis
   └─ Tasks: Thesis update, position change, next catalysts
```

**Best Practices**:
- Create project 2-3 weeks before event
- Complete Pre-Event snapshot before event occurs
- Execute Event Day snapshot immediately (within 24 hours)
- Complete Post-Event within 3-5 days while market reaction is fresh
- Archive project after 2 weeks unless ongoing monitoring needed

---

## Snapshot Design Principles

### Principle 1: Snapshots Represent Phases, Not Arbitrary Groups

**Good Snapshot Names**:
- ✅ "Pre-Earnings Phase (Jan 15-28)"
- ✅ "Financial Analysis"
- ✅ "Valuation Scenarios"
- ✅ "Risk Assessment - Downside Cases"

**Poor Snapshot Names**:
- ❌ "Snapshot 1"
- ❌ "Tasks"
- ❌ "Analysis"
- ❌ "Miscellaneous"

### Principle 2: Limit Snapshots to 3-7 Per Project

Too many snapshots fragment analysis; too few lose organization.

**For Short Projects** (1-2 weeks):
- 3 snapshots: Setup → Analysis → Synthesis

**For Medium Projects** (3-4 weeks):
- 5 snapshots: Research → Financials → Valuation → Risk → Thesis

**For Long Projects** (2+ months):
- 7 snapshots: Phase 1 → Phase 2 → Phase 3 → Synthesis → Updates → Monitoring → Final

**For Recurring Surveillance**:
- 4 snapshots per year: Q1 → Q2 → Q3 → Q4

### Principle 3: Snapshot Descriptions Should Document Progress

Each snapshot description should answer: "What did we learn in this phase?"

**Example Progression**:

**Snapshot 1: "Initial Research"**
- Description (Week 1): "Researching Apple's business model, competitive positioning, and strategic initiatives"
- Description (Week 2): "Key finding: Services revenue now 25% of total, accelerating shift away from hardware dependence"

**Snapshot 2: "Financial Analysis"**
- Description (Week 3): "Analyzing 8 quarters of financial trends"
- Description (Week 4): "Gross margins compressing 200bps due to iPhone cost inflation, partially offset by Services mix"

**Snapshot 3: "Valuation"**
- Description (Week 5): "Building DCF with consensus assumptions"
- Description (Week 6): "Fair value range: $175-$190, implying 10-15% upside from current $160"

This creates institutional memory visible to future analysts.

---

## Task Organization Within Snapshots

### Task Grouping Strategy

**Sequential Task Flow** (recommended for most analyses):
1. **Retrieval tasks first**: Gather data, consensus, historical context
2. **Valuation tasks second**: Build models using Retrieval findings
3. **Risk tasks third**: Stress-test valuations with downside scenarios
4. **Dashboard tasks fourth**: Contextualize vs. peers

**Parallel Task Flow** (for independent analyses):
- All Retrieval tasks execute together
- All Valuation tasks execute together (if independent)
- All Risk tasks execute together

### Task Naming Conventions

**Format**: `[Agent Type]: [Specific Question]`

**Good Task Names**:
- ✅ "Retrieval: Q1-Q4 2024 Revenue Trends by Segment"
- ✅ "Valuation: DCF Model with Consensus Assumptions"
- ✅ "Risk: Downside if iPhone Demand Declines 15%"
- ✅ "Dashboard: Gross Margin Trends vs. Peer Average"

**Poor Task Names**:
- ❌ "Task 1"
- ❌ "Analysis"
- ❌ "Apple"
- ❌ "Check this"

### Task Templates for Recurring Analysis

For analyses you perform repeatedly (quarterly earnings, monthly monitoring), save task configurations as templates:

**Example Template: "Quarterly Earnings Check"**
- Task 1: Retrieve consensus estimates
- Task 2: Retrieve historical surprise patterns
- Task 3: Build valuation scenario (bull/base/bear)
- Task 4: Identify key risks flagged by management
- Task 5: Compare results to peer group

Each quarter, create new snapshot and apply template. Update only the specific assumptions (new quarter data, updated consensus).

---

## Multi-Company Project Patterns

### Pattern 1: Comparative Analysis

**Use Case**: Sector rotation, peer group benchmarking

**Structure Option A: Company-by-Company**
```
Project: Technology Mega-Caps Comparative Analysis Q1 2025
├─ Snapshot: Apple Inc. Analysis
│  └─ Tasks: Financials, valuation, risk
├─ Snapshot: Microsoft Analysis
│  └─ Tasks: Financials, valuation, risk
├─ Snapshot: Google Analysis
│  └─ Tasks: Financials, valuation, risk
└─ Snapshot: Comparative Synthesis
   └─ Tasks: Relative valuation, risk-adjusted ranking, recommendation
```

**Structure Option B: Dimension-by-Dimension**
```
Project: Technology Mega-Caps Comparative Analysis Q1 2025
├─ Snapshot: Financial Profile
│  └─ Tasks: Compare revenue growth, margin trends, cash flow across all 3
├─ Snapshot: Valuation
│  └─ Tasks: Compare DCF, EV/Sales, EV/EBITDA across all 3
├─ Snapshot: Risk Assessment
│  └─ Tasks: Compare key risks and exposure across all 3
└─ Snapshot: Recommendation
   └─ Tasks: Rank by risk-adjusted return, recommend overweight/underweight
```

**When to Use Each**:
- **Option A** (Company-by-Company): When you need deep dive on each company independently first
- **Option B** (Dimension-by-Dimension): When comparative context is primary goal

### Pattern 2: Portfolio-Level Analysis

**Use Case**: Portfolio risk monitoring, position sizing

**Structure**:
```
Project: Portfolio Risk Surveillance 2025
├─ Snapshot: Energy Sector Exposure
│  └─ Tasks: Aggregate energy holdings, stress test oil price scenarios
├─ Snapshot: Technology Sector Exposure
│  └─ Tasks: Aggregate tech holdings, stress test growth slowdown
├─ Snapshot: Portfolio-Level Synthesis
│  └─ Tasks: Aggregate risks, identify concentrated exposures, hedging opportunities
```

**Best Practices**:
- One project for entire portfolio (not per holding)
- Snapshots by sector or risk factor
- Quarterly refresh cadence
- Archive annually, start new project for new year

---

## Scaling Project Design for Teams

### Individual Analyst Pattern

**Characteristics**:
- 3-5 active projects at once
- Projects last 2-4 weeks typically
- Light on documentation (analyst knows context)
- High velocity (rapid iteration)

**Structure**:
```
Active Projects:
├─ AAPL Q4 Earnings (Event-Driven)
├─ MSFT Cloud Growth Analysis (Deep Dive)
├─ Tech Sector Rotation Screen (Comparative)
└─ Portfolio Monitoring Q1 (Surveillance)
```

### Team Collaboration Pattern

**Characteristics**:
- 5-10 active shared projects
- Projects may last weeks to months
- Heavy documentation (multiple analysts need context)
- Defined ownership (each project has lead)

**Structure**:
```
Team Projects:
├─ Coverage Initiation: Tesla (Lead: Analyst A)
│  └─ Shared with Analysts B, C for review
├─ Earnings Season: FAANG Stocks (Lead: Analyst B)
│  └─ Each analyst assigned 1-2 stocks
├─ M&A Screening: Semiconductors (Lead: Analyst C)
│  └─ Shared for collaborative evaluation
└─ Portfolio Surveillance: Tech Holdings (Lead: Team Lead)
   └─ All analysts contribute quarterly
```

**Best Practices for Teams**:
- Assign project lead (appears in project metadata)
- Document assumptions and methodology in project description
- Use snapshot descriptions to communicate progress
- Schedule regular check-ins to review results together
- Lock completed snapshots to prevent accidental edits

---

## Project Metadata Best Practices

### Project Name Format

**Recommended Format**: `[Company/Sector] [Mandate] [Time Context]`

**Examples**:
- "Apple Inc. Q4 2024 Earnings Coverage"
- "Healthcare Sector M&A Target Screening 2025"
- "Portfolio Risk Assessment Q1 2025"
- "Nvidia Competitive Moat Analysis - Post-Jensen"

### Project Description Template

```markdown
**Thesis**: [One sentence investment thesis]

**Key Questions**:
1. [Question 1]
2. [Question 2]
3. [Question 3]

**Catalysts**: [Upcoming events or milestones]

**Time Horizon**: [Expected project duration]

**Initial View**: [Your starting hypothesis before analysis]
```

**Example**:
```markdown
**Thesis**: Apple's services transition provides downside protection as hardware growth slows

**Key Questions**:
1. What is sustainable Services revenue growth rate?
2. How resilient is iPhone demand to economic downturn?
3. What margin profile can Services achieve at scale?

**Catalysts**: Q4 earnings Jan 28, new product announcements March

**Time Horizon**: 3-4 weeks (through post-earnings)

**Initial View**: Neutral to slightly positive; need to validate Services margin sustainability
```

### Related Tickers Strategy

**Primary Ticker**: The main subject of analysis
**Related Tickers**: Add 2-4 peers for context

**Example for Apple**:
- Primary: AAPL
- Related: MSFT (cloud/services comparison), GOOGL (ecosystem), NVDA (hardware margins)

**When to Skip Related Tickers**:
- Deep-dive on single company (no competitive context needed)
- Portfolio-level analysis (multiple primaries)
- Sector-agnostic screening (focus on criteria, not peers)

---

## Common Anti-Patterns to Avoid

### Anti-Pattern 1: "Kitchen Sink" Projects

**Problem**: One massive project containing all research on a company/sector
**Impact**: Impossible to navigate, loses temporal context, dilutes focus

**Example**:
```
Project: "Apple - Everything" ❌
├─ Snapshot: Random Tasks (50+ tasks)
└─ No clear organization or progression
```

**Fix**: Break into focused mandates
```
Project 1: "Apple Q1 Earnings Coverage" ✅
Project 2: "Apple Services Growth Analysis" ✅
Project 3: "Apple Portfolio Monitoring 2025" ✅
```

### Anti-Pattern 2: Over-Snapshotting

**Problem**: Too many snapshots (10+) make navigation difficult
**Impact**: Fragmented analysis, hard to find results

**Example**:
```
Project: "Apple Q1 Earnings"
├─ Snapshot 1: Initial Thoughts
├─ Snapshot 2: More Thoughts
├─ Snapshot 3: Even More Thoughts
├─ Snapshot 4-15: ...
```

**Fix**: Consolidate into meaningful phases (3-7 snapshots)
```
Project: "Apple Q1 Earnings"
├─ Snapshot: Pre-Earnings Expectations ✅
├─ Snapshot: Earnings Day Analysis ✅
└─ Snapshot: Post-Earnings Synthesis ✅
```

### Anti-Pattern 3: Orphan Tasks

**Problem**: Tasks created without snapshots or poorly organized
**Impact**: Lose context of when/why task was created

**Example**:
```
Project: "Tesla Analysis"
└─ 20 tasks at project root, no snapshots ❌
```

**Fix**: Always use snapshots for organization
```
Project: "Tesla Analysis"
├─ Snapshot: Research Phase ✅
│  └─ Tasks 1-5
├─ Snapshot: Valuation Phase ✅
│  └─ Tasks 6-10
└─ Snapshot: Risk Phase ✅
   └─ Tasks 11-15
```

### Anti-Pattern 4: Generic Task Names

**Problem**: Can't tell what task does without opening it
**Impact**: Slows navigation, makes reuse impossible

**Example**:
- ❌ "Task 1"
- ❌ "Analysis"
- ❌ "Tesla"

**Fix**: Descriptive names with agent type and question
- ✅ "Retrieval: Tesla Production Ramp Timeline Q1-Q4"
- ✅ "Valuation: DCF with Automotive + Energy Storage"
- ✅ "Risk: Impact of Regulatory Changes on FSD Revenue"

---

## Advanced Patterns

### Pattern: Multi-Phase Deep Dive

**Use Case**: Complex, multi-week research requiring iterative refinement

**Structure**:
```
Project: "[Company] Comprehensive Analysis 2025"
├─ Phase 1: Information Gathering (Week 1-2)
│  └─ Snapshots: Business Model, Competitive Landscape, Historical Performance
├─ Phase 2: Analytical Foundation (Week 3-4)
│  └─ Snapshots: Financial Deep Dive, Valuation Frameworks
├─ Phase 3: Scenario Planning (Week 5-6)
│  └─ Snapshots: Bull Case, Base Case, Bear Case
└─ Phase 4: Synthesis & Recommendation (Week 7-8)
   └─ Snapshots: Thesis Formation, Risk Assessment, Final Recommendation
```

### Pattern: Hypothesis Testing

**Use Case**: Testing specific investment thesis with targeted analysis

**Structure**:
```
Project: "Hypothesis: Apple Services = 40% of Revenue by 2027"
├─ Snapshot: Current State
│  └─ Tasks: Current Services revenue, growth trajectory, margin profile
├─ Snapshot: Growth Drivers
│  └─ Tasks: Subscription adoption, App Store dynamics, new services potential
├─ Snapshot: Constraints
│  └─ Tasks: Regulatory risks, competitive threats, cannibalization
└─ Snapshot: Verdict
   └─ Tasks: Probability-weighted scenarios, recommendation
```

**Best Practice**: Document hypothesis in project name and description. Update with findings.

---

## Measuring Project Quality

### Quality Indicators

**Well-Designed Project**:
- ✅ Clear mandate reflected in name and description
- ✅ 3-7 snapshots with logical progression
- ✅ Each snapshot has 3-10 tasks (not too few, not too many)
- ✅ Task names are descriptive and specific
- ✅ Project description documents thesis evolution
- ✅ Snapshots have completion dates showing temporal progression

**Poorly-Designed Project**:
- ❌ Vague name ("Analysis")
- ❌ Either 1-2 snapshots (under-organized) or 10+ snapshots (over-fragmented)
- ❌ Tasks scattered without clear grouping
- ❌ Generic task names
- ❌ Project description never updated
- ❌ No clear beginning, middle, end

### Periodic Review Questions

Ask yourself quarterly:
1. Can a colleague understand my project structure without explanation?
2. Can I find a specific analysis result within 30 seconds?
3. Do my snapshots represent meaningful research phases?
4. Are my task names specific enough to know what they do?
5. Is my project description up-to-date with current thesis?

If any answer is "no," refactor before continuing.

---

## Next Steps

- **Ready to build institutional knowledge?** See [Knowledge Building](/docs/05-best-practices/knowledge-building.md)
- **Want team collaboration patterns?** See [Team Collaboration](/docs/05-best-practices/team-collaboration.md)
- **Need project workflow examples?** See [Project Workflows](/docs/02-intelligence-hub/project-workflows.md)
- **Want to understand multi-agent strategies?** See [Agent Consensus](/docs/05-best-practices/agent-consensus.md)
