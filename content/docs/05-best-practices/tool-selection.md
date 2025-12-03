---
title: "Tool Selection: Hub vs. Workbench"
description: "Master the decision framework for choosing between Intelligence Hub and Agent Workbench for different analytical workflows."
author: "Agentii Documentation"
date: "2025-11-26"
updated: "2025-11-26"
audience: "Intermediate"
domain: "Both"
tags: ["best-practices", "tool-selection", "hub", "workbench", "decision-framework", "workflows"]
relatedDocs:
  - "/docs/00-introduction/platform-architecture.md"
  - "/docs/02-intelligence-hub/hub-fundamentals.md"
  - "/docs/03-agent-workbench/workbench-fundamentals.md"
  - "/docs/02-intelligence-hub/project-workflows.md"
  - "/docs/03-agent-workbench/workbench-vs-hub.md"
---

# Tool Selection: Hub vs. Workbench

Agentii offers two distinct interfaces—Intelligence Hub and Agent Workbench—each optimized for different analytical workflows. Choosing the right tool for your task maximizes efficiency and insight quality. This guide provides a decision framework based on institutional usage patterns.

---

## The Core Distinction

### Intelligence Hub: Project-Based Analysis

**Architecture**: Projects → Snapshots → Tasks → Agents

**Optimized For**:
- Multi-week research campaigns
- Repeatable, structured workflows
- Parallel execution of many analyses
- Team collaboration and documentation
- Historical tracking and comparison

**Example**: Coverage initiation on Apple requiring 20+ analytical tasks across valuation, competitive analysis, and risk assessment over 3-4 weeks.

### Agent Workbench: Conversational Analysis

**Architecture**: Sessions → Queries → Agent Responses

**Optimized For**:
- Rapid, iterative questioning
- Exploratory research
- Real-time decision support
- Single-analyst workflows
- Ad-hoc investigation

**Example**: Quick validation of Tesla demand thesis after price cut announcement, requiring 3-5 follow-up questions in 10 minutes.

---

## Decision Framework

### Use Intelligence Hub When...

**1. Analysis Spans Multiple Days or Weeks**

If your research requires returning to work-in-progress over multiple sessions, Hub provides persistent organization.

**Example**: M&A target screening
- Week 1: Financial screening across 20 targets
- Week 2: Valuation deep-dive on top 5 finalists
- Week 3: Strategic fit analysis
- Week 4: Deal structure recommendations

**Why Hub**: Snapshots organize each phase; tasks track progress; results persist for comparison.

**2. You Need Parallel Execution at Scale**

Foundation tier: 8 parallel tasks; Professional/Enterprise: 32 parallel tasks.

**Example**: Quarterly earnings for portfolio holdings
- 15 stocks in portfolio
- Each requires: pre-earnings expectations, earnings day analysis, post-earnings synthesis
- 45 total tasks execute in parallel batches

**Why Hub**: Task queue manages parallel execution automatically; batch operations save hours.

**3. Team Collaboration Is Required**

Multiple analysts working on shared research benefit from Hub's permission system and documentation.

**Example**: Sector rotation analysis
- Analyst A: Technology sector deep-dive
- Analyst B: Healthcare sector deep-dive
- Analyst C: Financials sector deep-dive
- Team Lead: Comparative synthesis and ranking

**Why Hub**: Shared project with role-based permissions; snapshot ownership; audit trail for compliance.

**4. Repeatability and Templates Are Valuable**

Recurring analyses (quarterly monitoring, monthly risk surveillance) benefit from task templates.

**Example**: Monthly portfolio risk monitoring
- Save task configuration: "Risk Agent: Identify new downside scenarios for [TICKER]"
- Reuse monthly with updated data
- Compare results month-over-month

**Why Hub**: Task templates save configuration time; historical snapshots enable trend analysis.

**5. You Need Comprehensive Documentation**

Coverage initiation, M&A due diligence, and regulatory analyses require detailed audit trails.

**Example**: Sell-side research initiation
- Document all analytical steps
- Record methodology and assumptions
- Provide source attribution
- Enable peer review before publication

**Why Hub**: Project descriptions document thesis evolution; task prompts record methodology; exportable reports for compliance.

---

### Use Agent Workbench When...

**1. You Need Answers in Minutes, Not Hours**

Real-time decision support requires immediate results without setup overhead.

**Example**: Market reaction to Fed announcement
- Question: "How will 50bp rate hike impact AAPL valuation?"
- Follow-up: "What about if rates stay elevated for 18+ months?"
- Follow-up: "Compare to impact on MSFT and GOOGL"

**Why Workbench**: No project setup; instant agent invocation; conversational refinement; results in 2-5 minutes.

**2. Your Analysis Is Exploratory and Iterative**

When you don't know what questions to ask yet, Workbench enables rapid iteration.

**Example**: New investment idea exploration
- Initial: "What are Tesla's key competitive advantages?"
- Refine: "How sustainable is Tesla's battery cost advantage vs. BYD?"
- Pivot: "What risks could erode this advantage in next 3 years?"

**Why Workbench**: Conversational flow adapts to evolving understanding; no upfront structure required; fast pivots.

**3. You're Validating a Thesis or Sanity-Checking**

Quick validation doesn't warrant full project setup.

**Example**: Idea screening
- Scan 10 stocks for potential coverage
- Ask 2-3 questions per stock
- Identify 2-3 worth deeper Hub analysis

**Why Workbench**: Low overhead for rapid filtering; move promising ideas to Hub for deep-dive.

**4. You're Working Solo Without Documentation Requirements**

Individual portfolio managers or analysts without regulatory documentation needs benefit from Workbench speed.

**Example**: Personal portfolio adjustment
- Review recent earnings for 3 holdings
- Validate thesis still intact
- Decide on position adjustments

**Why Workbench**: Minimal documentation; fast answers; no collaboration overhead.

**5. You Need Natural Language Flexibility**

Complex, multi-part questions that don't fit structured task templates work well in Workbench.

**Example**: Strategic scenario analysis
- "If Microsoft acquires Databricks for $40B, how does that change Azure's competitive positioning vs. AWS and Google Cloud, and what's the impact on MSFT's valuation multiple given current AI infrastructure investment cycle?"

**Why Workbench**: Handles complex, multi-dimensional questions naturally; agent synthesizes across multiple analytical dimensions.

---

## Hybrid Workflows: Combining Hub and Workbench

Many institutional workflows benefit from using both tools strategically.

### Pattern 1: Workbench Validation → Hub Deep-Dive

**Workflow**:
1. Workbench: Rapidly screen 10 investment ideas (10-15 minutes each)
2. Identify 2-3 promising candidates
3. Hub: Create projects for deep-dive analysis (2-4 weeks each)

**Example**:
- Workbench: "Which semiconductor companies have best pricing power in current environment?"
- Result: NVDA, ASML, TSLA emerge as interesting
- Hub: Create "NVDA Competitive Moat Analysis 2025" project with 15+ tasks

**Benefit**: Workbench filters efficiently; Hub provides comprehensive analysis for final candidates.

### Pattern 2: Hub Structured Work → Workbench Ad-Hoc Follow-Up

**Workflow**:
1. Hub: Execute structured quarterly earnings analysis
2. Identify unexpected finding or data discrepancy
3. Workbench: Quick investigation of anomaly
4. Return to Hub with refined understanding

**Example**:
- Hub task result: "Apple Services revenue growth decelerated to 15% vs. 25% prior quarters"
- Workbench: "What's driving Services slowdown? Is it App Store regulatory pressure or broader subscription saturation?"
- Insight: Regulatory headwinds in EU
- Hub: Create follow-up task analyzing regulatory risk scenarios

**Benefit**: Hub provides structured baseline; Workbench handles unplanned investigation; Hub documents resolution.

### Pattern 3: Workbench Exploration → Hub Operationalization

**Workflow**:
1. Workbench: Explore new analytical methodology or question structure
2. Refine through iteration
3. Hub: Save refined prompt as task template for recurring use

**Example**:
- Workbench experimentation: Test 5 different ways to analyze margin sustainability
- Find effective approach: "Compare gross margin trends vs. peer average over 8 quarters, identify inflection points, assess sustainability using management commentary"
- Hub: Save as task template for all coverage stocks

**Benefit**: Workbench enables low-cost experimentation; Hub scales validated approaches.

### Pattern 4: Hub Batch Execution → Workbench Interpretation

**Workflow**:
1. Hub: Run 20+ parallel valuation tasks across sector
2. Review results and identify outliers
3. Workbench: Investigate why specific stocks diverge from pattern

**Example**:
- Hub: DCF valuations for 20 healthcare stocks
- Observation: 3 stocks have fair values 40%+ below peers
- Workbench: "Why does [TICKER] have unusually low DCF fair value vs. healthcare peer group? Is it balance sheet risk, growth concerns, or methodology artifact?"

**Benefit**: Hub scales analysis; Workbench investigates anomalies efficiently.

---

## Decision Matrix

| Factor | Intelligence Hub | Agent Workbench |
|--------|------------------|-----------------|
| **Time Horizon** | Days to weeks | Minutes to hours |
| **Setup Overhead** | 5-10 minutes (project creation) | None (instant start) |
| **Parallel Execution** | 8-32 tasks simultaneously | Single query at a time |
| **Collaboration** | Full team features | Individual use |
| **Documentation** | Comprehensive audit trail | Minimal (session history only) |
| **Repeatability** | Task templates, saved configurations | Manual re-prompting |
| **Query Complexity** | Structured, predefined tasks | Open-ended, conversational |
| **Best For** | Coverage, M&A, surveillance | Validation, exploration, real-time |

---

## Real-World Workflow Examples

### Workflow 1: Equity Research Coverage Initiation

**Objective**: Publish initiation report on Netflix with price target

**Tool Strategy**:
- **Workbench (Week 0)**: Quick validation—"Is Netflix worth covering? Key investment debates?"
- **Hub (Weeks 1-4)**:
  - Project: "Netflix 2025 Coverage Initiation"
  - Snapshots: Business Model, Financial Analysis, Valuation, Competitive, Risk, Thesis
  - 25+ tasks across retrieval, valuation, risk agents
- **Workbench (Ad-hoc)**: Follow-up questions when Hub results surface unexpected findings
- **Hub (Week 4)**: Final synthesis and report generation

**Outcome**: Workbench validated coverage decision quickly; Hub provided comprehensive structured analysis; Workbench filled gaps.

### Workflow 2: Quarterly Earnings Monitoring

**Objective**: Track 15 portfolio holdings through Q4 earnings season

**Tool Strategy**:
- **Hub (Pre-Earnings)**:
  - 15 projects (one per holding)
  - Snapshot: "Pre-Earnings Expectations"
  - Tasks: Consensus estimates, historical surprise patterns, updated DCF
- **Workbench (Earnings Day)**: Real-time reaction—"What were key surprises in AAPL earnings? How does guidance compare to consensus?"
- **Hub (Post-Earnings)**:
  - Snapshot: "Post-Earnings Analysis"
  - Tasks: Results vs. expectations, thesis validation, updated risk assessment

**Outcome**: Hub managed structured pre/post analysis at scale; Workbench handled real-time earnings day questions.

### Workflow 3: M&A Target Screening

**Objective**: Identify 3 acquisition targets in cybersecurity space for strategic buyer

**Tool Strategy**:
- **Workbench (Week 1)**: Broad exploration—"What are attractive cybersecurity M&A targets with $500M-$2B revenue, strong growth, reasonable valuations?"
- **Hub (Weeks 2-4)**:
  - Project: "Cybersecurity M&A Screening 2025"
  - Snapshot 1: Financial screen across 12 candidates
  - Snapshot 2: Valuation deep-dive on top 5
  - Snapshot 3: Strategic fit for top 3
- **Workbench (Week 4)**: Final diligence questions—"What integration risks exist for [TARGET]? Cultural fit concerns?"
- **Hub (Week 4)**: Final recommendation snapshot with deal structures

**Outcome**: Workbench narrowed universe efficiently; Hub provided structured evaluation; Workbench validated final decisions.

### Workflow 4: Risk Monitoring and Surveillance

**Objective**: Monthly portfolio risk monitoring for 20 long positions

**Tool Strategy**:
- **Hub (Monthly Recurring)**:
  - Project: "Portfolio Risk Surveillance 2025"
  - Snapshots: Jan, Feb, Mar... (one per month)
  - Template: "Risk Agent: Identify new downside scenarios for [TICKER]"
  - 20 tasks execute in parallel (one per holding)
- **Workbench (As Needed)**: When Risk Agent flags new concern—"How material is new regulatory threat to GOOGL? Quantify revenue impact scenarios."

**Outcome**: Hub scales monthly surveillance efficiently using templates; Workbench investigates flagged risks in real-time.

---

## Advanced Tool Selection Strategies

### Strategy 1: Start Narrow, Scale with Hub

For new research areas, use Workbench to learn, then scale with Hub.

**Example**:
1. Workbench: Explore ESG integration in equity analysis (10 queries over 2 days)
2. Identify repeatable ESG analytical framework
3. Hub: Create "ESG Integration Framework" project with task templates
4. Apply templates to all coverage stocks

### Strategy 2: Hub for Structure, Workbench for Flexibility

Within Hub projects, use Workbench for tasks that don't fit templates.

**Example**:
- Hub project: "Tesla Q4 Earnings"
- Standard tasks: Pre-earnings expectations, financial model update
- Unexpected: Major production issue emerges during earnings call
- Workbench: Immediate investigation of production impact while Hub tasks complete

### Strategy 3: Workbench for Training, Hub for Execution

Train junior analysts with Workbench; transition to Hub for production workflows.

**Rationale**: Workbench's conversational nature is intuitive for learning; Hub's structure ensures consistency in production.

### Strategy 4: Seasonal Tool Shifting

Shift tool usage by calendar season based on workload.

**Example**:
- Q4 earnings season: Heavy Hub usage (structure scales 40+ earnings analyses)
- Non-earnings periods: More Workbench (exploratory new idea generation)

---

## Common Tool Selection Mistakes

### Mistake 1: Using Hub for Quick Questions

**Problem**: Creating full Hub project for 5-minute question adds unnecessary overhead

**Example**: Creating "Quick Apple Check" project for "What was AAPL revenue last quarter?"

**Fix**: Use Workbench for anything under 30 minutes

### Mistake 2: Using Workbench for Multi-Week Research

**Problem**: Lose track of findings; can't resume work-in-progress; no team visibility

**Example**: Attempting 3-week M&A analysis entirely in Workbench sessions

**Fix**: Move to Hub when analysis spans 3+ days or requires team collaboration

### Mistake 3: Ignoring Parallel Execution Benefits

**Problem**: Running tasks sequentially in Hub when they could execute in parallel

**Example**: Creating 20 valuation tasks, running one at a time instead of batch execution

**Fix**: Batch independent tasks; use parallel limits (8 Foundation, 32 Professional/Enterprise)

### Mistake 4: Over-Documenting in Hub

**Problem**: Creating Hub projects with excessive snapshots and tasks for simple analyses

**Example**: 15 snapshots and 50 tasks for straightforward quarterly earnings review

**Fix**: Match structure complexity to analysis complexity (3-5 snapshots for most analyses)

### Mistake 5: Under-Documenting in Workbench

**Problem**: Using Workbench for work requiring audit trail or compliance documentation

**Example**: Regulatory due diligence performed entirely in Workbench with no persistent record

**Fix**: Use Hub when documentation, auditability, or compliance are required

---

## Tool Selection Checklist

Before starting analysis, ask:

1. **Time horizon**: Minutes/hours (Workbench) or days/weeks (Hub)?
2. **Collaboration**: Solo (either) or team (Hub)?
3. **Repeatability**: One-time (Workbench) or recurring (Hub)?
4. **Parallel scale**: 1-5 questions (Workbench) or 10+ tasks (Hub)?
5. **Documentation**: Informal (Workbench) or audit trail (Hub)?
6. **Question structure**: Open exploration (Workbench) or defined methodology (Hub)?

**If 4+ answers favor Hub → Use Intelligence Hub**

**If 4+ answers favor Workbench → Use Agent Workbench**

**If mixed → Start with Workbench; transition to Hub if needed**

---

## Next Steps

- **Understand Hub workflows**: See [Intelligence Hub Fundamentals](/docs/02-intelligence-hub/hub-fundamentals.md)
- **Understand Workbench workflows**: See [Agent Workbench Fundamentals](/docs/03-agent-workbench/workbench-fundamentals.md)
- **See decision framework in action**: See [Workbench vs. Hub](/docs/03-agent-workbench/workbench-vs-hub.md)
- **Master project design for Hub**: See [Project Design Best Practices](/docs/05-best-practices/project-design.md)
- **Explore platform architecture**: See [Platform Architecture](/docs/00-introduction/platform-architecture.md)
