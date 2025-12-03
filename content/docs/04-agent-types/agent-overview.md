---
title: "Agent Types Overview"
description: "Comprehensive guide to Agentii's specialized agents, their capabilities, and selection criteria for institutional financial analysis"
author: "Agentii Documentation"
date: "2025-11-26"
updated: "2025-11-26"
audience: "Intermediate"
domain: "Both"
tags: ["agents", "agent types", "agent selection", "methodology"]
relatedDocs:
  - "/docs/00-introduction/core-concepts.md"
  - "/docs/03-agent-workbench/agent-invocation.md"
  - "/docs/02-intelligence-hub/agents-configuration.md"
  - "/docs/04-agent-types/retrieval-agents.md"
  - "/docs/04-agent-types/valuation-agents.md"
  - "/docs/04-agent-types/risk-agents.md"
---

# Agent Types Overview

Agentii's analytical power derives from specialized agents trained for specific financial analysis tasks. Each agent type employs distinct methodologies, data sources, and analytical frameworks optimized for particular questions. Understanding which agent to deploy—and when—directly impacts the quality and relevance of your analysis.

This guide provides institutional analysts with a framework for agent selection, covering the core agent types available, their specializations, and decision criteria for matching agents to analytical objectives.

## Why Agent Specialization Matters

In traditional research workflows, analysts manually synthesize information from multiple sources—10-Ks, analyst reports, earnings transcripts—and apply different analytical frameworks depending on the question. Agentii replicates this specialization through purpose-built agents rather than a one-size-fits-all approach.

**The advantage**: A valuation agent trained on DCF methodology will outperform a general-purpose agent on pricing questions, just as a buy-side analyst specializing in healthcare will produce more nuanced sector analysis than a generalist. Agent specialization ensures you receive analysis calibrated to your specific question and analytical framework.

## Core Agent Types

Agentii offers four primary agent specializations, each with distinct capabilities and optimal use cases:

### 1. Retrieval-Focused Agents

**Primary Function**: Document synthesis, fact extraction, and information retrieval across financial documents.

**Best For**:
- Extracting specific metrics from filings (revenue growth, margin trends, capital allocation)
- Synthesizing management commentary across quarters
- Identifying disclosure changes between reporting periods
- Finding references to specific topics (regulatory risks, competitive dynamics, supply chain)

**Limitations**: Cannot perform quantitative modeling or valuation calculations; focused on information retrieval rather than analytical judgment.

**Typical Use Cases**: Pre-earnings research, thematic screening, initial coverage research, monitoring for specific risk factors.

> **Key Insight**: Retrieval agents excel at answering "what did management say?" questions but cannot answer "what should I conclude?" questions that require analytical judgment.

[Learn more: Retrieval Agents in depth](./retrieval-agents.md)

---

### 2. Valuation Agents

**Primary Function**: Quantitative valuation using Discounted Cash Flow (DCF), comparable company analysis, and precedent transaction methodologies.

**Best For**:
- Establishing fair value ranges using multiple methodologies
- Comparing valuation multiples to peer group or historical averages
- Analyzing acquisition pricing in M&A scenarios
- Sensitivity analysis around key assumptions (growth rates, terminal multiples, discount rates)

**Limitations**: Requires clean, structured financial data; cannot assess qualitative factors like management quality or competitive moat strength; assumes standard valuation frameworks apply.

**Typical Use Cases**: Initiation coverage, periodic target price updates, M&A fairness opinions, activist investment analysis.

> **Warning**: Valuation outputs are only as reliable as underlying financial data and assumptions. Always validate data quality and reasonableness of model assumptions before relying on agent valuations for investment decisions.

[Learn more: Valuation Agents in depth](./valuation-agents.md)

---

### 3. Risk Agents

**Primary Function**: Risk factor identification, downside scenario analysis, and vulnerability assessment.

**Best For**:
- Identifying key risks in business model, financial structure, or competitive position
- Stress-testing assumptions under adverse scenarios
- Evaluating covenant compliance and refinancing risk
- Monitoring emerging risks (regulatory, competitive, operational)

**Limitations**: Cannot quantify probability of risk events; focused on identification and qualitative assessment rather than probabilistic modeling.

**Typical Use Cases**: Credit analysis, short thesis development, portfolio risk monitoring, pre-earnings risk assessment.

> **Key Insight**: Risk agents are trained to identify downside scenarios but cannot assign probabilities. Combine risk agent output with your own judgment on likelihood and potential impact magnitude.

[Learn more: Risk Agents in depth](./risk-agents.md)

---

### 4. Dashboard Agents

**Primary Function**: Visual pattern recognition, trend analysis, and data presentation for metrics-driven insights.

**Best For**:
- Identifying trends in financial metrics over time (margins, returns, growth rates)
- Comparing performance metrics to peer groups
- Spotting anomalies or inflection points in operating data
- Visualizing relationships between variables (e.g., R&D spend vs. revenue growth)

**Limitations**: Focuses on quantitative patterns; cannot interpret qualitative context or explain why patterns exist; requires structured, time-series data.

**Typical Use Cases**: Quarterly operating metric tracking, peer benchmarking, identifying inflection points, portfolio monitoring dashboards.

> **Tip**: Dashboard agents are particularly valuable for portfolio managers tracking multiple positions. They surface emerging trends that might otherwise be missed in manual quarterly reviews.

[Learn more: Dashboard Agents in depth](./dashboard-agents.md)

---

## Agent Selection Framework

Selecting the right agent begins with understanding your analytical objective. Use this decision framework:

### Start With Your Question

| Question Type | Recommended Agent Type | Rationale |
|--------------|------------------------|-----------|
| "What did the company disclose about X?" | **Retrieval-Focused** | Information extraction from documents |
| "What is the company worth?" | **Valuation** | Requires quantitative modeling frameworks |
| "What are the key risks?" | **Risk** | Downside scenario identification |
| "How do margins compare to peers?" | **Dashboard** | Quantitative trend and peer analysis |
| "Should I buy this stock?" | **Multiple agents** | Requires synthesis across information, valuation, and risk |

### Consider Data Requirements

Different agents have different data quality and availability requirements:

- **Retrieval agents**: Work with any document-based data (filings, transcripts, research reports)
- **Valuation agents**: Require complete financial statements and clean historical data
- **Risk agents**: Work best with comprehensive disclosure documents (10-Ks, credit agreements)
- **Dashboard agents**: Require structured, time-series data with consistent definitions

**Practical Implication**: For early-stage companies or private firms with limited disclosure, retrieval and risk agents will be more useful than valuation or dashboard agents that depend on clean financial data.

### Combine Multiple Agents for Complex Questions

Most institutional-grade analysis benefits from multi-agent approaches:

**Example: Pre-Earnings Analysis**
1. **Retrieval agent**: Extract previous guidance and management priorities
2. **Valuation agent**: Establish current valuation multiples vs. historical range
3. **Risk agent**: Identify key risks that could drive downside surprise
4. **Dashboard agent**: Track recent operating trends that inform guidance

**Result**: Comprehensive pre-earnings view incorporating information synthesis, valuation context, risk factors, and operating momentum.

[Learn more: Multi-agent orchestration in Agent Workbench](../03-agent-workbench/multi-agent-orchestration.md)

---

## Agent Confidence and Reliability

Not all agent outputs carry equal reliability. Agentii agents produce confidence indicators based on:

1. **Data Quality**: Completeness and consistency of underlying data
2. **Methodological Fit**: Appropriateness of analytical framework for question
3. **Cross-Source Validation**: Agreement across multiple data sources
4. **Historical Performance**: Track record of similar analyses

**Interpreting Confidence Scores**:
- **High Confidence (>80%)**: Multiple data sources confirm findings; methodology well-suited to question
- **Medium Confidence (60-80%)**: Sufficient data but some gaps or methodology limitations
- **Low Confidence (<60%)**: Limited data, methodology concerns, or conflicting sources

> **Warning**: Even high-confidence agent outputs require analyst judgment. Agent confidence reflects data and methodology quality, not investment conviction. Always validate key findings independently.

[Learn more: Agent confidence scoring and trust factors](./agent-confidence-reliability.md)

---

## Advanced Agent Configurations

Beyond selecting agent type, you can customize agent behavior through:

### Custom Prompts

Modify the default agent prompt to focus analysis on specific dimensions:

**Example: Sector-Specific Valuation Agent**
```
For SaaS companies, prioritize revenue multiples and Rule of 40 analysis
over traditional EBITDA multiples. Focus on ARR growth, net dollar retention,
and CAC payback periods in valuation framework.
```

**When to Use**: Industry-specific analysis, non-standard business models, focus on particular risk factors.

[Learn more: Agent configuration in Intelligence Hub](../02-intelligence-hub/agents-configuration.md)

### Agent Resource Allocation

Enterprise tier users can adjust computational resources allocated to agent runs:

- **Standard**: Balanced speed and depth (default)
- **Deep Analysis**: Extended processing for comprehensive analysis (slower, more thorough)
- **Rapid Response**: Faster processing for time-sensitive questions (less comprehensive)

**Trade-off**: Depth vs. speed. For time-sensitive situations (earnings announcements, breaking news), rapid response may be appropriate. For initiation coverage or comprehensive diligence, deep analysis is preferred.

---

## Agent Methodology Transparency

Agentii agents do not operate as "black boxes." Each agent type documents its analytical approach:

- **Data Sources**: Which documents and databases the agent accesses
- **Analytical Framework**: The methodology applied (e.g., DCF assumptions, risk taxonomies)
- **Limitations**: What the agent cannot assess or where human judgment is required
- **Output Format**: How results are structured and what confidence indicators mean

**Why This Matters**: Institutional investors must understand analytical provenance for compliance, audit trails, and fiduciary responsibility. Agentii's transparent methodology enables analysts to defend recommendations based on agent-assisted analysis.

[Learn more: Agent methodology details](./agent-methodology.md) (future addition)

---

## When Agents Are Not the Right Tool

Agent-assisted analysis has boundaries. Situations where traditional analyst judgment is required:

- **Qualitative Management Assessment**: Evaluating management quality, strategic vision, execution capability
- **Macro/Market Timing**: Assessing broader market conditions, economic cycles, sentiment
- **Event-Driven Situations**: M&A rumors, activist situations, regulatory interventions with uncertain outcomes
- **Novel Business Models**: Companies operating in emerging sectors without comparable precedents
- **Ethical/ESG Judgments**: Subjective assessments of corporate responsibility or sustainability

**Best Practice**: Use agents to accelerate information gathering and quantitative analysis, then apply human judgment to qualitative factors and final investment decisions.

---

## Getting Started with Agent Selection

### New to Agentii?

1. **Start with retrieval agents**: Easiest to understand and validate; low risk of misinterpretation
2. **Progress to dashboard agents**: Visual outputs are intuitive; useful for familiar companies
3. **Add valuation agents**: Once comfortable with data quality and output validation
4. **Incorporate risk agents**: When you understand how to contextualize downside scenarios

### Experienced Users?

- **Combine multiple agents**: Build institutional-grade analysis through multi-agent consensus
- **Customize prompts**: Tailor agent behavior to your specific analytical frameworks
- **Optimize workflows**: Create reusable task templates with pre-configured agent selections

---

## Next Steps

- [Retrieval Agents: Document Synthesis and Fact-Finding](./retrieval-agents.md)
- [Valuation Agents: DCF and Comparable Company Analysis](./valuation-agents.md)
- [Risk Agents: Downside Scenario Analysis](./risk-agents.md)
- [Dashboard Agents: Visual Analysis and Pattern Recognition](./dashboard-agents.md)
- [Agent Confidence and Reliability Factors](./agent-confidence-reliability.md)
- [Agent Configuration in Intelligence Hub](../02-intelligence-hub/agents-configuration.md)
- [Agent Invocation in Workbench](../03-agent-workbench/agent-invocation.md)

---

**Questions about agent selection?** [Contact support](../../07-troubleshooting/support-escalation.md) or review our [FAQ](../../07-troubleshooting/faq-general.md) for common agent-related questions.
