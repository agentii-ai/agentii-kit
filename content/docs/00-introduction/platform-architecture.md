---
title: "Platform Architecture"
description: "Understand the two interfaces of Agentii—Intelligence Hub and Agent Workbench—and when to use each."
author: "Agentii Documentation"
date: "2025-11-26"
updated: "2025-11-26"
audience: "Beginner"
domain: "General"
tags: ["architecture", "hub", "workbench", "platform-overview"]
relatedDocs:
  - "/docs/00-introduction/what-is-agentii.md"
  - "/docs/00-introduction/core-concepts.md"
  - "/docs/02-intelligence-hub/hub-fundamentals.md"
  - "/docs/03-agent-workbench/workbench-fundamentals.md"
  - "/docs/02-intelligence-hub/project-workflows.md"
---

# Platform Architecture

Agentii provides two complementary interfaces for financial analysis: Intelligence Hub for structured, project-based research and Agent Workbench for conversational, real-time exploration. Understanding the strengths and limitations of each enables you to choose the right tool for your analysis.

---

## Intelligence Hub: Project-Based Analysis Environment

**Purpose**: Organize, document, and manage comprehensive financial research campaigns.

Intelligence Hub structures analysis into nested containers: **Projects** contain **Snapshots**, which contain **Tasks**, which invoke **Agents**. This hierarchy enables you to organize related analysis, track progress systematically, and build institutional knowledge.

### Data Flow

```
Project (e.g., "Apple Inc. Q4 Analysis")
└─ Snapshot (e.g., "Pre-Earnings Phase")
   └─ Task 1 (e.g., "Retrieve Analyst Consensus")
      └─ Agent Run 1 (Retrieval Agent executes)
         └─ Results + Confidence Score + Data Sources
   └─ Task 2 (e.g., "Build DCF Valuation")
      └─ Agent Run 1 (Valuation Agent executes)
         └─ Results + Confidence Score + Methodology
   └─ Task 3 (e.g., "Identify Risk Factors")
      └─ Agent Run 1 (Risk Agent executes)
         └─ Results + Confidence Score + Scenario Analysis
```

### Key Characteristics

**Advantages**:
- **Persistent documentation**: All analysis automatically recorded with timestamps and metadata
- **Reusable configurations**: Save task templates and agent prompts for recurring analysis
- **Team collaboration**: Share projects, assign tasks, track progress across team
- **Milestone tracking**: Snapshots create clear phases in analysis process
- **Scalable parallel execution**: Foundation tier supports 8 parallel tasks; Professional supports 32
- **Results management**: Export, archive, and reference historical analysis

**When to Use Hub**:
- Multi-week research campaigns (earnings cycles, sector rotations, M&A due diligence)
- Team-based analysis workflows
- Complex analyses requiring multiple sequential or parallel tasks
- Building long-term surveillance on positions
- Institutional knowledge capture and sharing
- Regulated analysis requiring full audit trails

**Typical Hub Workflow**:
1. Create project with primary stock and related context (ticker, sector, time period)
2. Define snapshots aligning with key events or phases
3. Create tasks within snapshots (agents handle specific analytical questions)
4. Monitor progress as agents execute in parallel
5. Review results, cross-check findings across agents
6. Export or archive for future reference
7. Update thesis based on synthesis of all agent outputs

### Hub for Pre-Earnings Analysis: Complete Example

You're tracking Apple Inc. (AAPL) ahead of earnings announcement:

**Setup** (10 minutes):
- Create project: "Apple Inc. Q1 2025 Analysis"
- Add related tickers: MSFT, GOOGL, NVDA (tech peer comparison)
- Set sector: Technology
- Set lookback period: 8 quarters (2 years of context)

**Pre-Earnings Snapshot** (30 minutes execution):
- Task 1: "Retrieve analyst consensus estimates for Q1 revenue and EPS" → Retrieval Agent
- Task 2: "Build DCF model with consensus revenue assumptions, 5-year explicit forecast" → Valuation Agent
- Task 3: "Analyze historical earnings surprises and identify key guidance metrics" → Retrieval Agent
- Task 4: "Identify downside scenarios if iPhone sales decline 10%" → Risk Agent

All four tasks execute in parallel (depending on your plan tier). While agents work, you review recent news and investor presentations offline. Results typically appear within 2-5 minutes.

**Synthesis** (15 minutes):
- Compare valuations across DCF, comparable company analysis, precedent transactions
- Evaluate where consensus estimates sit relative to your DCF range
- Identify key risk factors to monitor during call
- Form preliminary thesis on likely stock reaction to results

**Total time**: 1 hour instead of 3-4 hours of manual research

---

## Agent Workbench: Conversational Analysis Interface

**Purpose**: Real-time, exploratory financial analysis through natural language conversation.

Agent Workbench enables instant analysis without project setup. You ask questions, agents respond with findings, and you can ask follow-up questions to explore tangents or dig deeper.

### Data Flow

```
User Query
└─ Workbench Interface (natural language input)
   └─ Agent Selection (automatic or manual)
      └─ Agent Run (real-time execution)
         └─ Results + Confidence Score (displayed immediately)
            └─ User asks follow-up question
               └─ Agent Run (sequential execution)
                  └─ Results (building on previous context)
```

### Key Characteristics

**Advantages**:
- **Instant results**: No setup required; get analysis in seconds
- **Conversational**: Ask follow-up questions naturally; agent maintains context
- **Exploratory**: Test hypotheses without committing to project structure
- **Low friction**: Perfect for quick stock checks and validation questions
- **Session history**: Results are recorded and exportable for documentation
- **Accessibility**: Fewer options means lower cognitive load for quick analysis

**When to Use Workbench**:
- Quick stock checks (5-15 minute analysis)
- Validating thesis changes from news or market events
- Testing new analytical approaches or questions
- Ad-hoc research questions that arise during the day
- Competitive intelligence gathering
- Exploratory analysis before committing to formal Hub project

**Typical Workbench Workflow**:
1. Think of your question and type it in natural language
2. Agent responds immediately with relevant findings
3. Ask follow-up questions as new angles emerge
4. Export session when complete (PDF, JSON, or text)
5. Optional: Start a formal Hub project if analysis becomes substantial

### Workbench for Quick Stock Check: Complete Example

It's 9:05 AM. You see news that Microsoft just released new AI capabilities. You want to understand implications for competitors:

**Initial Query** (30 seconds setup):
"What are the competitive implications if Microsoft's new AI tools significantly reduce software development cycle time across enterprise customers?"

**Agent Response** (15 seconds):
Returns analysis of:
- Current enterprise software development workflow costs
- Which competitors (Salesforce, Adobe, Oracle, etc.) are exposed to this shift
- Historical precedent for workflow disruption in software industry
- Estimated timeline for market impact

**Follow-up 1** (30 seconds):
"Which of these competitors have the strongest moat against AI-driven cycle time reduction?"

**Agent Response** (15 seconds):
Evaluates each competitor's business model, pricing structure, and lock-in mechanisms

**Follow-up 2** (30 seconds):
"Compare this to the cloud infrastructure shift 10 years ago—how did that play out for enterprise software companies?"

**Agent Response** (15 seconds):
Historical analysis showing winners and losers from last cycle, patterns to watch for

**Total time**: 3-4 minutes of focused exploration. All results exportable for documentation.

---

## Hub vs. Workbench: Decision Framework

| Dimension | Intelligence Hub | Agent Workbench |
|-----------|-----------------|-----------------|
| **Setup Time** | 5-10 minutes (project creation) | Instant |
| **Analysis Type** | Structured, comprehensive | Exploratory, ad-hoc |
| **Team Collaboration** | Built-in (shared projects, task assignment) | Individual or ad-hoc sharing |
| **Persistence** | Permanent project record | Session-based (exportable) |
| **Result Documentation** | Automatic in project | Manual export if desired |
| **Parallel Execution** | Yes (multiple tasks) | No (sequential queries) |
| **Methodology Validation** | Easy (multiple agents, multiple methodologies) | Possible (but requires manual comparison) |
| **Use Case** | Earnings cycle, sector rotation, M&A | Quick validation, competitive intelligence |
| **Time Commitment** | 1+ hours per analysis | 5-15 minutes |
| **Export Options** | Project archive, task export, PDF, Excel | Session export (PDF, JSON, text) |
| **Learning Curve** | Moderate (need to understand snapshots, tasks) | Minimal (just ask questions) |

### Decision Tree

**Start here**: Do you have 30+ minutes for comprehensive analysis?

→ **YES**: Use Intelligence Hub. Create project, structure analysis into snapshots and tasks, leverage parallel execution, build long-term record.

→ **NO**: Use Agent Workbench. Ask your question, explore follow-ups, export results if needed.

**Special case**: Quick exploration before formal project. Start with Workbench to test questions, then create formal Hub project once scope is clear. Export your Workbench results and reference them in your Hub tasks.

---

## Hybrid Workflows: Combining Hub and Workbench

Most sophisticated Agentii users employ both interfaces as complementary tools:

### Pattern 1: Explore → Formalize
1. Use Workbench for 5-10 minute exploratory analysis
2. If the topic warrants deeper investigation, create a formal Hub project
3. Reference your Workbench session in the Hub project documentation
4. Conduct comprehensive analysis in Hub with multiple snapshots and agents
5. Archive final Hub project for institutional knowledge

**Example**: You're tracking Tesla (TSLA) supply chain risks. Use Workbench to quickly assess semiconductor exposure. Results suggest deeper analysis is warranted. Create Hub project, structure analysis into snapshots (current exposure, historical precedent, mitigation scenarios), document comprehensive findings.

### Pattern 2: Hub → Workbench Validation
1. Complete formal Hub project with multiple tasks and agents
2. Use Workbench to validate specific findings or test nuances
3. Document any changes in Hub for institutional record
4. Update thesis based on validation

**Example**: You complete Hub project analyzing Apple's services revenue drivers. Create a Hub task estimating cloud services growth. Use Workbench to validate: "How does Apple's cloud services competitive position compare to Microsoft and AWS?"

### Pattern 3: Rapid Thesis Iteration
1. Create Hub project with initial analysis snapshot
2. Use Workbench to test thesis changes as news emerges
3. Create new snapshot in Hub when thesis change is significant
4. Build historical record of hypothesis evolution

**Example**: Earnings season for semiconductor companies. Initial Hub project analyzes NVIDIA's fundamentals. During the week, market data shifts. Use Workbench to quickly validate: "What would 15% lower memory pricing mean for NVIDIA's margin profile?" Create new snapshot in Hub documenting the finding.

---

## Integration Between Hub and Workbench

While the interfaces serve different purposes, they share core infrastructure:

- **Same Agent Pool**: Both Hub and Workbench use identical agent types (Retrieval, Valuation, Risk, Dashboard)
- **Same Data Sources**: Both access identical institutional data, research coverage, and financial metrics
- **Same Confidence Scoring**: Results quality metrics apply across both interfaces
- **Session Export**: Hub tasks can reference or export Workbench session results
- **Prompt Flexibility**: Both support custom prompts to guide agent behavior

This means your investment in learning how to formulate queries, select agents, and interpret results applies equally to both interfaces.

---

## Resource Constraints and Plan Tiers

Your plan tier affects Hub's parallel execution capacity:

| Plan Tier | Concurrent Tasks | Use Case |
|-----------|-----------------|----------|
| **Foundation** | 8 parallel tasks | Individual users, small teams, moderate analysis |
| **Professional** | 32 parallel tasks | Large teams, high-volume analysis, complex workflows |
| **Enterprise** | Custom | White-label solutions, institutional deployment |

Workbench has no parallel limits—queries execute sequentially, and user typically waits only 15-30 seconds per query.

If you're on Foundation tier and need to run 12 parallel tasks:
1. Submit first 8 tasks (they execute immediately)
2. Remaining 4 tasks queue automatically
3. As first tasks complete, queued tasks begin automatically
4. Hub manages this automatically; you don't need to monitor

---

## Next Steps

- **Want structured project-based analysis?** See [Intelligence Hub Fundamentals](/docs/02-intelligence-hub/hub-fundamentals.md)
- **Want quick, conversational exploration?** See [Agent Workbench Fundamentals](/docs/03-agent-workbench/workbench-fundamentals.md)
- **Want to see common workflow patterns?** See [Project Workflows](/docs/02-intelligence-hub/project-workflows.md)
- **Want to get started immediately?** See [Getting Started](/docs/00-introduction/getting-started.md)
- **Want to understand timing and best practices?** See [Task Execution](/docs/02-intelligence-hub/task-execution.md)
