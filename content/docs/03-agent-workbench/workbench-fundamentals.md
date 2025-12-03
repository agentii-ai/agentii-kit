---
title: "Agent Workbench Fundamentals"
description: "Master the real-time conversational interface for AI-powered financial analysis"
author: "Agentii Documentation"
date: "2025-11-26"
updated: "2025-11-26"
audience: "Beginner"
domain: "Agent Workbench"
tags: ["workbench", "fundamentals", "chat", "sessions", "real-time"]
relatedDocs:
  - "/docs/00-introduction/core-concepts"
  - "/docs/02-intelligence-hub/hub-fundamentals"
  - "/docs/03-agent-workbench/workbench-vs-hub"
---

# Agent Workbench Fundamentals

The Agent Workbench is Agentii's real-time conversational interface, designed for immediate financial analysis through natural language queries. Unlike traditional research platforms that require complex navigation and pre-configured reports, the Workbench enables institutional analysts to engage directly with AI agents through conversation, receiving instant insights backed by comprehensive market data.

## What Is the Agent Workbench?

The Agent Workbench functions as a sophisticated chat interface where professional financial analysts interact with specialized AI agents. Each conversation creates a **session** that persists analysis context, tool invocations, and reasoning chains—enabling follow-up questions that build upon previous analysis without losing critical context.

Think of the Workbench as your personal research assistant that never forgets, has access to real-time market data, and can analyze complex financial scenarios in seconds rather than hours.

## Core Capabilities

### Real-Time Analysis
Submit natural language queries and receive immediate responses powered by multiple data sources:
- Securities filings and earnings transcripts
- Analyst estimates and institutional research
- Market data and trading patterns
- Industry intelligence and competitive analysis

### Multi-Agent Orchestration
Access specialized agents for different analysis types:
- **Financial Analysts**: Comprehensive equity research and valuation
- **Risk Agents**: Downside scenario analysis and risk factor identification
- **Data Agents**: Quantitative analysis and pattern recognition
- **Sector Specialists**: Industry-specific insights and comparisons

### Session Persistence
Every conversation creates a persistent session that maintains:
- Complete query and response history
- Agent reasoning and tool invocations
- Reference documents and data sources
- Analysis context for follow-up questions

## When to Use the Agent Workbench

The Workbench excels in scenarios requiring immediate insight or exploratory analysis:

**Ideal Use Cases:**
- Quick company research and due diligence
- Real-time earnings or news analysis
- Ad hoc competitive intelligence
- Hypothesis testing and validation
- Follow-up questions on complex scenarios

**Choose Workbench When:**
- You need immediate answers to specific questions
- The analysis doesn't require formal project structure
- You're exploring investment ideas or conducting initial research
- You want to test agent capabilities or methodology

**Consider Intelligence Hub Instead When:**
- You're conducting comprehensive, multi-phase analysis
- The work requires formal documentation and export
- Multiple team members need coordinated access
- You're tracking analysis over extended periods (quarterly updates, earnings cycles)

## Interface Components

### Chat Area
The primary interaction space where you submit queries and receive agent responses. Messages display in chronological order with clear distinction between your questions and agent analysis.

### Agent Selection
Choose from available financial agents or specialized teams. Each agent brings distinct expertise:
- Different analytical methodologies
- Varied data source preferences
- Specialized prompting and reasoning approaches
- Unique output formatting and presentation styles

### Session History
Access your conversation history through the Task History panel. Recent sessions are immediately available, with complete searchability across historical analysis.

### Reference Sidebar
Agent responses often include supporting documents, data extracts, and source citations. The reference sidebar provides full access to underlying materials without interrupting the conversation flow.

## Session Concept

**Sessions** are the fundamental unit of Workbench interaction. Each session represents:

- A continuous conversation thread with consistent context
- Persistent agent memory of previous questions and analysis
- Complete audit trail of reasoning and tool usage
- Exportable analysis record for documentation purposes

Sessions enable sophisticated follow-up analysis:
```
You: "Analyze MSFT's latest earnings"
Agent: [Comprehensive earnings analysis]

You: "How does this compare to their guidance?"
Agent: [Builds on previous analysis, no need to re-explain MSFT context]

You: "What are the main downside risks?"
Agent: [Risk analysis incorporating all previous conversation context]
```

## Getting Started

### First Query
Begin with a specific company or market question. Effective first queries:
- "Analyze Apple's Q3 2024 earnings results"
- "What are Tesla's main competitive advantages in EVs?"
- "Compare Microsoft's AI strategy with Google's"

Avoid overly broad queries that lack specific focus:
- "Tell me about the market" (too general)
- "What should I invest in?" (requires personal context the agent lacks)

### Agent Selection
Start with the **Financial Analyst** agent for comprehensive equity research. As you become familiar with the platform, experiment with specialized agents for focused analysis types.

### Follow-Up Strategy
Structure conversations as progressive analysis:
1. **Initial Analysis**: Broad company or sector overview
2. **Focused Deep-Dive**: Specific areas of interest or concern
3. **Comparative Analysis**: Relative positioning or competitive dynamics
4. **Risk Assessment**: Downside scenarios and limiting factors

## Best Practices for New Users

### Query Formulation
- Be specific about companies, time periods, and analysis focus
- Include relevant context (sector, market cap, recent events)
- Ask follow-up questions to deepen analysis rather than starting new sessions

### Session Management
- Use descriptive session names for future reference
- Keep related analysis within single sessions for context continuity
- Export important sessions before they scroll out of immediate history

### Agent Interaction
- Allow agents to complete reasoning before interrupting with follow-ups
- Review referenced documents to understand analysis foundations
- Challenge agent conclusions with specific counter-arguments for deeper analysis

## Integration with Intelligence Hub

While the Workbench operates independently, it complements Intelligence Hub workflows:

- **Exploratory Phase**: Use Workbench for initial company research
- **Structured Analysis**: Transfer insights to formal Hub projects
- **Quick Updates**: Use Workbench for rapid checks between formal project updates
- **Hypothesis Testing**: Validate Hub project assumptions through conversational analysis

The two platforms share underlying agent technology and data sources, ensuring consistency while serving different analytical workflows.

---

## Next Steps

- **Query Formulation**: Learn effective questioning techniques in [Query Formulation Guide](./query-formulation)
- **Agent Selection**: Understand different agent types in [Agent Invocation](./agent-invocation)
- **Advanced Analysis**: Master complex workflows in [Multi-Agent Orchestration](./multi-agent-orchestration)
- **Decision Framework**: Compare Workbench vs Hub in [Platform Selection Guide](./workbench-vs-hub)