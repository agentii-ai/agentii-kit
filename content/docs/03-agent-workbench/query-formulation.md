---
title: "Query Formulation Guide"
description: "Master natural language queries for effective financial analysis with AI agents"
author: "Agentii Documentation"
date: "2025-11-26"
updated: "2025-11-26"
audience: "Beginner"
domain: "Agent Workbench"
tags: ["queries", "natural-language", "prompting", "questions", "analysis"]
relatedDocs:
  - "/docs/03-agent-workbench/workbench-fundamentals"
  - "/docs/03-agent-workbench/agent-invocation"
  - "/docs/03-agent-workbench/results-interpretation"
---

# Query Formulation Guide

Effective query formulation is the foundation of productive Agent Workbench interaction. Unlike traditional financial terminals that require specific syntax and navigation patterns, the Workbench understands natural language—but strategic query design dramatically improves analysis quality and relevance.

This guide provides proven frameworks for constructing queries that generate institutional-grade insights.

## Query Structure Fundamentals

### The SCAR Framework

Structure effective financial queries using **Scope, Context, Action, Refinement**:

**Scope**: Define the analytical boundary
- Company focus: "AAPL", "Apple Inc.", "iPhone manufacturer"
- Sector focus: "semiconductor sector", "FAANG stocks", "biotech companies"
- Market focus: "S&P 500", "emerging markets", "high-yield bonds"

**Context**: Provide temporal and situational awareness
- Time periods: "Q3 2024 earnings", "over the past year", "since 2020"
- Market events: "following the Fed announcement", "post-earnings", "during the selloff"
- Industry conditions: "amid chip shortage", "during interest rate cycle", "in current regulatory environment"

**Action**: Specify the analytical task
- Analyze, evaluate, compare, assess, project, identify, quantify, validate
- Be specific about desired output depth and focus

**Refinement**: Add constraints or specific interests
- Risk factors, growth drivers, competitive positioning, valuation methodology
- Specific metrics, time horizons, or comparison benchmarks

### Effective Query Examples

**Strong Query Structure**:
```
Analyze Microsoft's cloud infrastructure revenue growth [Scope]
in Q3 2024 [Context]
compared to Amazon and Google [Action]
focusing on market share trends and competitive positioning [Refinement]
```

**Weak Query Structure**:
```
How is Microsoft doing?
```
*Problem: Lacks scope definition, timeframe, specific analysis focus*

## Query Categories and Templates

### Company Analysis Queries

**Earnings Analysis**:
- "Analyze [COMPANY]'s [Q# YEAR] earnings results focusing on revenue guidance and margin trends"
- "Evaluate [COMPANY]'s latest earnings surprise relative to consensus estimates and management guidance"
- "Compare [COMPANY]'s quarterly performance against [COMPETITOR1] and [COMPETITOR2] in [SPECIFIC METRICS]"

**Valuation Analysis**:
- "Assess [COMPANY]'s current valuation using DCF and comparable company multiples"
- "Evaluate whether [COMPANY] is fairly valued given its [SPECIFIC GROWTH DRIVERS/RISKS]"
- "Compare [COMPANY]'s valuation metrics to sector averages and historical ranges"

**Strategic Analysis**:
- "Analyze [COMPANY]'s competitive position in [SPECIFIC MARKET/PRODUCT AREA]"
- "Evaluate [COMPANY]'s M&A strategy and integration success with [RECENT ACQUISITION]"
- "Assess [COMPANY]'s response to [SPECIFIC INDUSTRY CHALLENGE/OPPORTUNITY]"

### Market and Sector Queries

**Sector Analysis**:
- "Compare valuations across [SECTOR NAME] focusing on companies with market caps above $10B"
- "Analyze [SECTOR] performance drivers during [TIME PERIOD] and identify key trends"
- "Evaluate competitive dynamics in [SPECIFIC INDUSTRY SUBSECTOR]"

**Thematic Analysis**:
- "Identify AI exposure across semiconductor companies and analyze revenue potential"
- "Assess ESG performance trends in energy sector companies with climate commitments"
- "Evaluate subscription revenue models across SaaS companies in different verticals"

### Risk and Scenario Analysis

**Risk Assessment**:
- "Identify top 5 downside risks for [COMPANY] over the next 12 months"
- "Analyze [COMPANY]'s exposure to [SPECIFIC RISK FACTOR] and potential mitigation strategies"
- "Evaluate credit risk indicators for [COMPANY] given current debt levels and cash flow"

**Scenario Planning**:
- "Model [COMPANY]'s performance under recession scenario with 15% revenue decline"
- "Assess [COMPANY]'s resilience to supply chain disruptions in [SPECIFIC GEOGRAPHY/PRODUCT]"
- "Evaluate impact of [REGULATORY CHANGE] on [COMPANY/SECTOR] business model"

## Advanced Query Techniques

### Progressive Query Chains

Build sophisticated analysis through sequential, related queries:

**Initial Query**: Establish baseline understanding
```
"Analyze Tesla's Q3 2024 delivery numbers compared to consensus estimates"
```

**Follow-Up Queries**: Deepen analysis without losing context
```
"What factors drove the variance from estimates?"
"How does this affect full-year guidance?"
"What are the implications for gross margin trends?"
"How should investors position ahead of Q4 results?"
```

### Multi-Dimensional Analysis

Combine different analytical perspectives in single queries:

**Financial + Operational**:
```
"Analyze Netflix's subscriber growth trends alongside content spending
efficiency and competitive positioning against Disney+ and HBO Max"
```

**Quantitative + Qualitative**:
```
"Evaluate Nvidia's data center revenue growth with DCF valuation model
while assessing management's AI market opportunity commentary"
```

### Comparative Analysis Frameworks

**Peer Group Comparisons**:
- Define relevant peer set: "Compare [COMPANY] against [PEERS] in [METRICS]"
- Specify comparison dimensions: revenue growth, margins, valuation multiples, market share
- Include temporal context: historical performance vs. forward-looking indicators

**Historical Context**:
- "Compare [COMPANY]'s current [METRICS] to historical averages over [TIME PERIOD]"
- "Analyze [COMPANY]'s performance relative to previous [ECONOMIC CYCLE/MARKET CONDITION]"

## Query Refinement Strategies

### Iterative Improvement

Start broad, then narrow focus based on initial insights:

1. **Baseline Query**: "Analyze Apple's iPhone business performance"
2. **Refined Query**: "Analyze Apple's iPhone revenue trends by geography, focusing on China market share and premium model mix"
3. **Targeted Query**: "Evaluate iPhone 15 Pro adoption rates in China and implications for Q1 2024 revenue guidance"

### Specificity Escalation

Increase query precision for deeper analysis:

**Level 1** (General): "How is Amazon's cloud business doing?"
**Level 2** (Focused): "Analyze AWS revenue growth and operating margin trends"
**Level 3** (Specific): "Evaluate AWS Q3 2024 deceleration in enterprise customer acquisition and competitive pressure from Microsoft Azure"

### Context Enhancement

Add relevant market context to improve analysis relevance:

**Without Context**:
```
"Analyze Zoom's revenue trends"
```

**With Context**:
```
"Analyze Zoom's revenue trends in the post-pandemic normalization period,
focusing on enterprise retention and hybrid work adoption patterns"
```

## Common Query Pitfalls and Solutions

### Overly Broad Queries

**Problem**: "Tell me about the market"
**Solution**: "Analyze S&P 500 performance year-to-date, focusing on sector rotation trends and interest rate sensitivity"

### Insufficient Context

**Problem**: "Is Google a good investment?"
**Solution**: "Evaluate Alphabet's investment attractiveness given current AI competition, regulatory overhang, and search monetization trends"

### Unclear Objectives

**Problem**: "Look at Tesla"
**Solution**: "Assess Tesla's auto delivery growth sustainability amid increasing EV competition and market saturation concerns"

### Missing Time Frames

**Problem**: "Compare Facebook and Twitter"
**Solution**: "Compare Meta and Twitter/X user engagement trends over the past 18 months since platform changes and competitive pressures"

## Domain-Specific Query Guidelines

### Technology Sector

Focus on growth metrics, platform effects, competitive moats:
- "Analyze [COMPANY]'s user growth and engagement metrics relative to revenue per user trends"
- "Evaluate [COMPANY]'s platform ecosystem and developer adoption patterns"
- "Assess [COMPANY]'s AI integration strategy and competitive differentiation"

### Healthcare/Biotech

Emphasize pipeline, regulatory, and commercial factors:
- "Analyze [COMPANY]'s clinical pipeline progress and FDA approval probability"
- "Evaluate [COMPANY]'s drug launch performance and market penetration vs. expectations"
- "Assess [COMPANY]'s intellectual property protection and generic competition risks"

### Financial Services

Focus on credit quality, regulatory capital, and operational efficiency:
- "Analyze [BANK]'s credit loss trends and reserve adequacy amid economic uncertainty"
- "Evaluate [INSURANCE COMPANY]'s underwriting discipline and investment portfolio quality"
- "Assess [FINTECH]'s regulatory compliance and competitive positioning vs. traditional banks"

### Energy Sector

Emphasize commodity exposure, operational efficiency, and transition themes:
- "Analyze [COMPANY]'s production cost curve and breakeven levels at current commodity prices"
- "Evaluate [COMPANY]'s renewable energy transition strategy and capital allocation priorities"
- "Assess [COMPANY]'s hedging strategy and cash flow stability through commodity cycles"

## Query Optimization Tips

### Use Financial Terminology

Leverage industry-standard terms that agents recognize:
- "EBITDA margin expansion" vs. "profits getting better"
- "Working capital efficiency" vs. "cash management"
- "Return on invested capital" vs. "investment returns"

### Include Relevant Metrics

Specify key performance indicators relevant to your analysis:
- Revenue growth rates, margin trends, cash conversion
- Market share, customer acquisition costs, retention rates
- Debt-to-equity ratios, interest coverage, return metrics

### Reference Market Conditions

Provide macroeconomic context when relevant:
- Interest rate environment and Fed policy
- Economic cycle positioning and recession risks
- Regulatory changes and political developments
- Currency trends and international trade dynamics

---

## Next Steps

- **Agent Selection**: Learn to choose appropriate agents in [Agent Invocation Guide](./agent-invocation)
- **Response Analysis**: Master result interpretation in [Results Interpretation](./results-interpretation)
- **Complex Workflows**: Build sophisticated analysis chains in [Multi-Agent Orchestration](./multi-agent-orchestration)
- **Session Strategy**: Optimize conversation management in [Session Management](./session-management)