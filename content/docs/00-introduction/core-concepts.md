---
title: "Core Concepts"
description: "Master the fundamental concepts: Projects, Tasks, Snapshots, Agents, Runs, Sessions, and Confidence Scores."
author: "Agentii Documentation"
date: "2025-11-26"
updated: "2025-11-26"
audience: "Beginner"
domain: "General"
tags: ["core-concepts", "introduction", "projects", "tasks", "agents"]
relatedDocs:
  - "/docs/00-introduction/what-is-agentii.md"
  - "/docs/00-introduction/terminology-glossary.md"
  - "/docs/02-intelligence-hub/hub-fundamentals.md"
  - "/docs/03-agent-workbench/workbench-fundamentals.md"
---

# Core Concepts

Agentii uses a consistent vocabulary across both Intelligence Hub and Agent Workbench. Understanding these core concepts unlocks the platform.

---

## Project

**Definition**: A container for analyzing a specific stock, sector, or investment thesis over time.

A project groups related analysis and provides consistent context. Think of it as a "case file" for a stock you're researching.

### Key Properties
- **Primary Ticker**: The main stock being analyzed (e.g., AAPL for Apple Inc.)
- **Related Tickers**: Competitive context or sector comparisons (e.g., MSFT, GOOGL for tech comparison)
- **Sector**: Industry classification (Technology, Healthcare, Financials, etc.)
- **Lookback Period**: Historical analysis window (typically 4-8 quarters for earnings cycle analysis)

### Example
```
Project: Apple Inc. Q4 Earnings Analysis
├─ Primary Ticker: AAPL
├─ Related Tickers: MSFT, GOOGL, NVDA
├─ Sector: Technology
└─ Lookback Period: 8 quarters
```

### When to Create a Project
- Initiating coverage on a new stock
- Planning multi-week research campaign
- Analyzing a sector rotation
- Evaluating M&A opportunity
- Building ongoing surveillance

**Learn more**: See [Projects Guide](/docs/02-intelligence-hub/projects-guide.md) for detailed project creation and configuration instructions.

---

## Task

**Definition**: An independent agent job configured to answer a specific analytical question within a project.

A task is a single unit of analysis. It includes a question/prompt, an assigned agent, and custom instructions.

### Key Properties
- **Agent Type**: Retrieval, Valuation, Risk, or other specialized agents
- **Custom Prompt**: Instructions to guide agent behavior
- **Configuration**: Agent-specific settings (methodology selection, time periods, etc.)
- **Status**: todo → queued → in progress → done (or canceled)
- **Results**: Agent output, findings, data sources

### Example Tasks in Apple Project
1. **Task: Historical EPS Analysis**
   - Agent: Retrieval-Focused
   - Prompt: "Analyze Apple's EPS trend over 8 quarters, identify drivers of growth/decline"
   - Status: Done
   - Results: [Detailed EPS decomposition with growth drivers]

2. **Task: DCF Valuation**
   - Agent: Valuation
   - Prompt: "Build DCF model with 5-year explicit forecast, 3% terminal growth rate"
   - Status: Done
   - Results: [DCF valuation range with sensitivity analysis]

### When to Create a Task
- Need analysis of a specific document or metric
- Want to record methodology for consistency
- Planning research campaign with multiple steps
- Building team workflow

**Learn more**: See [Tasks Guide](/docs/02-intelligence-hub/tasks-guide.md) for comprehensive task creation, configuration, and management instructions.

---

## Snapshot

**Definition**: A temporal grouping of related tasks within a project, often aligned with market events or earnings phases.

Snapshots organize analysis around key corporate events. They enable comparing analyses across time.

### Common Snapshot Types

**Pre-Earnings Snapshot** (2 weeks before announcement)
- Retrieves analyst consensus estimates
- Calculates DCF valuation scenarios
- Analyzes historical earnings surprises
- Identifies key guide metrics

**Earnings Snapshot** (day of/after announcement)
- Analyzes earnings release and guidance
- Calculates actual results vs. expectations
- Evaluates management commentary tone
- Updates valuation post-results

**Post-Earnings Snapshot** (days after announcement)
- Synthesizes all earnings-related findings
- Updates thesis given new information
- Identifies next key catalysts
- Plans follow-up analysis

### Example: Apple Inc. Earnings Cycle
```
Project: Apple Inc.
├─ Snapshot: Q4 2024 Pre-Earnings (Sept 1-25)
│  ├─ Task: Analyst Consensus
│  ├─ Task: DCF Valuation
│  └─ Task: Risk Factors
├─ Snapshot: Q4 2024 Earnings (Sept 26-27)
│  ├─ Task: Earnings Analysis
│  └─ Task: Guidance Assessment
└─ Snapshot: Q4 2024 Post-Earnings (Sept 28-Oct 2)
   ├─ Task: Thesis Update
   └─ Task: Next Catalysts
```

### Why Snapshots Matter
- **Temporal context**: Agents understand earnings phase when analyzing
- **Historical comparison**: Compare pre vs. post analysis
- **Workflow organization**: Clear phases in research process
- **Team collaboration**: Everyone understands timeline

**Learn more**: See [Snapshots Guide](/docs/02-intelligence-hub/snapshots-guide.md) for temporal organization patterns and earnings cycle workflows.

---

## Agent

**Definition**: A specialized AI system configured with specific prompts and tools to answer financial questions.

Agents are the analysts of the Agentii platform. Different agent types excel at different analytical tasks.

### Agent Types

**Retrieval-Focused Agent**
- Specializes in document synthesis and fact-finding
- Use for: Gathering specific data points, literature reviews, consensus building
- Example: "What are the historical trends in Apple's gross margins?"

**Valuation Agent**
- Specializes in financial modeling and valuation methodology
- Use for: DCF, comparable company analysis, precedent transactions
- Example: "Build a DCF model with consensus revenue growth assumptions"

**Risk Agent**
- Specializes in risk identification and downside scenario analysis
- Use for: Identifying key risks, stress testing, scenario modeling
- Example: "What are the key downside scenarios if iPhone sales decline 10%?"

**Dashboard Agent**
- Specializes in visual pattern recognition and data presentation
- Use for: Identifying trends, comparative analysis, formatting for presentations
- Example: "Compare Apple's ROIC vs. peers and identify inflection points"

### Configuration

Each agent can be configured with:
- **Custom Prompt**: Specific instructions to guide analysis
- **Methodology Selection**: For valuation agents, choose DCF vs. comps vs. precedent
- **Data Sources**: Which documents/data to analyze
- **Output Format**: Tables, narratives, visualizations

**Learn more**: See [Agent Configuration](/docs/02-intelligence-hub/agents-configuration.md) for detailed agent selection, customization, and ensemble creation guidance.

---

## Agent Run

**Definition**: A single execution of an agent responding to a prompt.

An agent run is a basic unit of work. A task may involve one or multiple agent runs.

### Characteristics
- Takes input (prompt, configuration, data sources)
- Executes analytical methodology
- Returns output (findings, analysis, confidence score)
- Tracks execution time and resource usage

### Example
```
Agent Run: Retrieve Apple Quarterly Revenues
├─ Input: "What were Apple revenues for past 8 quarters?"
├─ Agent: Retrieval-Focused
├─ Duration: 15 seconds
├─ Output: Table with quarterly revenues, growth rates, YoY changes
├─ Confidence: High (structured financial data)
└─ Status: Completed
```

### Multiple Runs Per Task
Some tasks involve multiple sequential or parallel agent runs:
```
Task: Comprehensive Earnings Analysis
├─ Run 1 (Retrieval): Get consensus estimates
├─ Run 2 (Valuation): Build DCF model
├─ Run 3 (Risk): Identify downside scenarios
└─ Synthesis: Agent evaluates all three and provides integrated conclusion
```

---

## Session (Backend Concept)

**Definition**: The backend equivalent of a frontend Task; a conversation thread with one or more agent runs.

In the Python backend, a Session represents a task execution including all agent runs, messages, and state. You don't directly interact with Sessions, but understanding the concept helps:

- **1 Session = 1 Task** (in Intelligence Hub)
- **1 Session = 1 Conversation Thread** (in Agent Workbench)
- Each Session contains all agent runs, results, and metadata

### Implication for You
Sessions are managed automatically. In Intelligence Hub, each task creates a session. In Workbench, each conversation thread is a session. Think "conversation thread" and you'll understand sessions correctly.

---

## Confidence Score

**Definition**: A reliability indicator (0-100) reflecting data quality, methodology certainty, and result confidence.

Not all agent outputs are equally reliable. Confidence scores help you weight findings.

### What Affects Confidence
- **Data Quality**: Clean, recent data scores higher than incomplete or dated data
- **Methodology Appropriateness**: Standard methodologies score higher than edge cases
- **Result Clarity**: Clear, unambiguous findings score higher than nuanced or contradictory results
- **Data Freshness**: Recent data scores higher than historical data

### Examples
```
Query: "What are Apple's current quarterly revenues?"
Agent: Retrieval-Focused
Confidence: 95% (recent, clean financial data)

Query: "What will Apple's market share be in 2030?"
Agent: Risk (scenario modeling)
Confidence: 45% (speculative, multiple unknowns)
```

### How to Use Confidence
- **Score 85-100**: High confidence, suitable for presentations and recommendations
- **Score 70-85**: Moderate confidence, useful for analysis but require human validation
- **Score 50-70**: Low confidence, use only for hypothesis generation or exploration
- **Score <50**: Very low confidence, treat as preliminary only

---

## Quick Reference: Concept Map

```
Project (e.g., Apple Inc.)
└─ Snapshot 1 (Pre-Earnings)
   └─ Task 1 (Analyst Consensus)
      └─ Agent Run 1 (Retrieval Agent executes)
         └─ Result + Confidence Score
   └─ Task 2 (DCF Valuation)
      └─ Agent Run 1 (Valuation Agent executes)
         └─ Result + Confidence Score
└─ Snapshot 2 (Post-Earnings)
   └─ Task 3 (Earnings Analysis)
      └─ Agent Run 1 (Retrieval Agent)
      └─ Agent Run 2 (Valuation Agent)
      └─ Agent Run 3 (Risk Agent)
         └─ Integrated Results
```

---

## Common Questions

**Q: Do I always need a Project?**
No. Use Agent Workbench for quick ad-hoc analysis without project structure. Use Intelligence Hub with Projects when you want to organize, save, and track analysis over time.

**Q: Can Tasks run in parallel?**
Yes. You can create multiple tasks and run them simultaneously. Hub manages parallel execution limits based on your plan (8 for Foundation, 32 for Professional/Enterprise).

**Q: What if I only need to ask one question?**
Use Agent Workbench. Just type your question and get immediate results. No project or task setup required.

**Q: How many Snapshots should I create?**
Start with few (pre-earnings, earnings, post-earnings for earnings analysis). Add more if your analysis naturally phases. Quality over quantity—too many snapshots obscures rather than clarifies.

---

## Next Steps

- **Learn how projects work**: [Intelligence Hub Fundamentals](/docs/02-intelligence-hub/hub-fundamentals.md)
- **Create your first project**: [Projects Guide](/docs/02-intelligence-hub/projects-guide.md)
- **Master task creation**: [Tasks Guide](/docs/02-intelligence-hub/tasks-guide.md)
- **Understand temporal organization**: [Snapshots Guide](/docs/02-intelligence-hub/snapshots-guide.md)
- **Configure agents**: [Agent Configuration](/docs/02-intelligence-hub/agents-configuration.md)
- **Execute and monitor tasks**: [Task Execution](/docs/02-intelligence-hub/task-execution.md)
- **Analyze results**: [Results Analysis](/docs/02-intelligence-hub/results-analysis.md)
- **See proven workflows**: [Project Workflows](/docs/02-intelligence-hub/project-workflows.md)
- **Learn Workbench**: [Agent Workbench Complete Guide](/docs/03-agent-workbench/workbench-fundamentals.md)
- **Reference terminology**: [Terminology Glossary](terminology-glossary.md)
- **Get hands-on**: [Getting Started](getting-started.md)
