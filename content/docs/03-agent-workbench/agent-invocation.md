---
title: "Agent Invocation and Selection"
description: "Master agent selection and invocation strategies for targeted financial analysis"
author: "Agentii Documentation"
date: "2025-11-26"
updated: "2025-11-26"
audience: "Intermediate"
domain: "Agent Workbench"
tags: ["agents", "selection", "financial-analyst", "specialization", "teams"]
relatedDocs:
  - "/docs/03-agent-workbench/query-formulation"
  - "/docs/04-agent-types/agent-overview"
  - "/docs/03-agent-workbench/multi-agent-orchestration"
---

# Agent Invocation and Selection

Agent selection is a critical decision point that determines the quality, depth, and perspective of your financial analysis. The Agent Workbench provides access to specialized AI agents, each trained with distinct methodologies, data source preferences, and analytical frameworks.

This guide provides institutional analysts with strategic frameworks for selecting optimal agents based on analytical objectives and market conditions.

## Agent Architecture Overview

### Individual Agents vs. Teams

**Individual Agents**: Specialized AI systems focused on specific analytical domains
- Consistent methodology and reasoning approach
- Deep expertise in particular analysis types
- Predictable output format and structure
- Optimal for targeted, domain-specific questions

**Agent Teams**: Collaborative multi-agent systems for comprehensive analysis
- Multiple analytical perspectives on complex scenarios
- Built-in consensus and disagreement detection
- Broader market context and cross-functional insights
- Optimal for comprehensive investment decisions

### Default Agent Configuration

When no agent is explicitly selected, the Workbench defaults to the **Financial Analyst** agent—a generalist designed for broad equity research and company analysis. This agent provides comprehensive coverage across:
- Fundamental analysis and valuation
- Earnings analysis and guidance assessment
- Competitive positioning and market dynamics
- Risk factor identification and scenario planning

## Available Agent Types

### Financial Analyst (Default)

**Core Expertise**:
- Comprehensive equity research and due diligence
- Financial statement analysis and ratio evaluation
- Industry analysis and competitive benchmarking
- Valuation methodologies (DCF, comps, precedent transactions)

**Optimal Use Cases**:
- Company research and investment thesis development
- Earnings analysis and quarterly updates
- Sector comparisons and relative value assessment
- General-purpose financial analysis questions

**Example Queries**:
```
"Analyze Microsoft's cloud business competitive positioning"
"Evaluate Apple's capital allocation strategy and shareholder returns"
"Compare Nvidia's valuation to semiconductor peers"
```

### Risk Assessment Specialists

**Core Expertise**:
- Downside scenario modeling and stress testing
- Credit risk evaluation and default probability assessment
- Operational risk identification and mitigation analysis
- Portfolio risk management and correlation analysis

**Optimal Use Cases**:
- Investment risk evaluation before position initiation
- Portfolio stress testing under adverse scenarios
- Credit analysis for bond and loan investments
- Risk factor prioritization and monitoring

**Example Queries**:
```
"Assess Tesla's execution risks for Full Self-Driving technology"
"Evaluate Boeing's operational risks following 737 MAX issues"
"Analyze regional bank credit risks in rising rate environment"
```

### Data and Quantitative Specialists

**Core Expertise**:
- Quantitative modeling and statistical analysis
- Market pattern recognition and trend identification
- Technical analysis and momentum indicators
- Data visualization and dashboard creation

**Optimal Use Cases**:
- Quantitative market analysis and backtesting
- Pattern recognition in historical performance data
- Statistical validation of investment hypotheses
- Technical analysis and timing considerations

**Example Queries**:
```
"Identify statistical patterns in biotech stock performance around FDA approvals"
"Analyze correlation between semiconductor inventory levels and stock prices"
"Build momentum indicators for technology sector rotation"
```

### Sector-Specific Specialists

**Healthcare/Biotech Specialists**:
- Clinical trial analysis and FDA approval probabilities
- Healthcare policy impact assessment
- Drug pipeline evaluation and competitive landscape
- Intellectual property and patent analysis

**Technology Specialists**:
- Software/hardware market dynamics
- Platform economics and network effects
- AI/ML adoption trends and competitive implications
- Cybersecurity and data privacy considerations

**Financial Services Specialists**:
- Banking regulation and capital requirements
- Insurance underwriting and actuarial analysis
- Fintech disruption and competitive dynamics
- Interest rate sensitivity and asset quality

## Agent Selection Strategy

### Match Agent Expertise to Analytical Objective

**For Company Analysis**:
- Financial Analyst: Comprehensive research and valuation
- Risk Specialist: Downside protection and stress testing
- Sector Specialist: Industry-specific dynamics and competitive intelligence

**For Portfolio Management**:
- Quantitative Specialist: Statistical analysis and optimization
- Risk Specialist: Portfolio stress testing and correlation analysis
- Financial Analyst: Individual position evaluation and size determination

**For Market Timing**:
- Quantitative Specialist: Technical analysis and momentum indicators
- Risk Specialist: Macroeconomic risk assessment
- Sector Specialist: Industry cycle positioning

### Agent Selection by Investment Style

**Value Investing**:
- Financial Analyst for fundamental analysis and intrinsic value estimation
- Risk Specialist for margin of safety assessment
- Sector Specialist for industry cyclicality and competitive moat analysis

**Growth Investing**:
- Financial Analyst for growth sustainability and market opportunity sizing
- Sector Specialist for innovation trends and competitive dynamics
- Quantitative Specialist for growth pattern analysis and momentum indicators

**Income/Dividend Investing**:
- Financial Analyst for dividend sustainability and payout ratio analysis
- Risk Specialist for credit quality and cash flow stability assessment
- Sector Specialist for regulatory and industry-specific dividend risks

## Agent Invocation Techniques

### Explicit Agent Selection

Use the agent selector dropdown to choose specific agents before submitting queries. This approach ensures:
- Consistent analytical methodology throughout the session
- Agent-specific data source preferences and expertise
- Predictable output format and reasoning structure

### Natural Language Agent References

While not yet implemented, future versions may support agent references within queries:
```
"@financial-analyst analyze Apple's latest earnings"
"#risk-specialist assess Tesla's regulatory exposure"
```

### Sequential Agent Consultation

Within a session, switch agents to gain multiple perspectives:

1. **Initial Analysis**: Financial Analyst for comprehensive overview
2. **Risk Assessment**: Risk Specialist for downside scenario evaluation
3. **Technical Perspective**: Quantitative Specialist for timing and momentum
4. **Sector Context**: Sector Specialist for industry-specific factors

## Team-Based Analysis

### Collaborative Multi-Agent Teams

Agent teams provide coordinated analysis from multiple specialists working together:

**Investment Committee Team**:
- Financial Analyst, Risk Specialist, Sector Specialist
- Comprehensive investment evaluation with built-in debate
- Consensus building and dissenting opinion identification

**Due Diligence Team**:
- Financial Analyst, Data Specialist, Compliance Specialist
- Thorough company analysis with quantitative validation
- Regulatory and operational risk assessment

### Team Invocation Strategy

**For Complex Decisions**:
Use teams when analysis requires multiple specialized perspectives:
- Large position sizing decisions
- Sector allocation changes
- Complex merger arbitrage situations
- Multi-factor investment thesis validation

**For Time-Sensitive Analysis**:
Use individual agents when speed and focused expertise matter:
- Earnings reaction analysis
- News-driven stock movements
- Quick competitive intelligence
- Rapid risk assessment updates

## Agent Performance and Reliability

### Understanding Agent Confidence

Different agents express confidence differently:

**Financial Analyst**: Provides confidence ranges around valuation estimates and growth projections
**Risk Specialist**: Expresses probability ranges for adverse scenarios and stress test outcomes
**Quantitative Specialist**: Offers statistical significance measures and backtesting confidence levels

### Agent Limitations by Type

**Financial Analyst Limitations**:
- May not capture rapidly changing technical market dynamics
- Limited real-time market sentiment analysis
- Requires sufficient fundamental data for comprehensive analysis

**Risk Specialist Limitations**:
- Conservative bias may underweight positive catalysts
- Scenario modeling dependent on historical precedent availability
- May not capture entirely novel risk factors

**Quantitative Specialist Limitations**:
- Statistical patterns may not predict regime changes
- Requires sufficient historical data for pattern recognition
- May not incorporate qualitative factors effectively

## Advanced Agent Selection Patterns

### Agent Rotation Strategy

Systematically rotate through different agents for comprehensive coverage:

**Weekly Portfolio Review**:
- Monday: Quantitative Specialist for technical setup analysis
- Wednesday: Financial Analyst for fundamental update assessment
- Friday: Risk Specialist for weekend risk evaluation

**Earnings Season Protocol**:
- Pre-earnings: Financial Analyst for expectations setting
- Post-earnings: Risk Specialist for guidance and outlook assessment
- Follow-up: Sector Specialist for competitive implications

### Conditional Agent Selection

Select agents based on market conditions and volatility:

**High Volatility Periods**:
- Prioritize Risk Specialist for downside protection
- Use Quantitative Specialist for technical support and momentum
- Consult Sector Specialist for stability and defensive characteristics

**Low Volatility Periods**:
- Emphasize Financial Analyst for fundamental opportunity identification
- Use Sector Specialist for growth opportunity assessment
- Consult Quantitative Specialist for momentum and breakout potential

## Best Practices for Agent Interaction

### Consistent Agent Selection

For related queries within a session, maintain agent consistency to preserve analytical methodology and reasoning approach.

**Good Practice**:
```
Session with Financial Analyst:
1. "Analyze Google's search business competitive position"
2. "How does this affect Google's advertising revenue outlook?"
3. "What are the valuation implications?"
```

### Strategic Agent Switching

Switch agents deliberately for different analytical perspectives:

**Good Practice**:
```
Financial Analyst: "Evaluate Netflix's content strategy effectiveness"
Risk Specialist: "What are the main risks to Netflix's subscriber growth?"
Quantitative Specialist: "Identify technical support levels for NFLX stock"
```

### Agent Specialization Respect

Direct questions appropriate to each agent's expertise:

**Financial Analyst**: Company fundamentals, valuation, industry comparison
**Risk Specialist**: Downside scenarios, stress testing, risk factor prioritization
**Quantitative Specialist**: Pattern analysis, statistical relationships, technical indicators
**Sector Specialist**: Industry dynamics, regulatory changes, competitive intelligence

---

## Next Steps

- **Multi-Agent Workflows**: Master complex analysis patterns in [Multi-Agent Orchestration](./multi-agent-orchestration)
- **Agent Capabilities**: Deep dive into methodologies in [Agent Types Overview](../04-agent-types/agent-overview)
- **Result Analysis**: Optimize output interpretation in [Results Interpretation](./results-interpretation)
- **Session Strategy**: Manage agent consistency in [Session Management](./session-management)