---
title: "Multi-Agent Consensus Patterns"
description: "Learn how to use multiple agents to validate findings and build confidence in financial analysis."
author: "Agentii Documentation"
date: "2025-11-26"
updated: "2025-11-26"
audience: "Intermediate"
domain: "Both"
tags: ["best-practices", "multi-agent", "consensus", "validation", "confidence"]
relatedDocs:
  - "/docs/02-intelligence-hub/agents-configuration.md"
  - "/docs/02-intelligence-hub/results-analysis.md"
  - "/docs/03-agent-workbench/multi-agent-orchestration.md"
  - "/docs/04-agent-types/agent-overview.md"
  - "/docs/05-best-practices/risk-management.md"
---

# Multi-Agent Consensus Patterns

Single-agent analysis is fast but may miss important perspectives. Multi-agent consensus—running the same question through multiple specialized agents—provides validation, identifies blind spots, and increases confidence in conclusions. This guide presents institutional patterns for using agent consensus effectively.

---

## Why Multi-Agent Consensus Matters

### The Validation Problem

**Single-Agent Risk**:
- Agent may have methodology blind spots
- Data quality issues might go undetected
- Alternative interpretations not considered
- Confirmation bias in analysis approach

**Multi-Agent Benefit**:
- Cross-validates findings from different analytical angles
- Identifies data discrepancies early
- Surfaces alternative viewpoints
- Quantifies uncertainty when agents disagree

### Real-World Example

**Question**: "What is Apple's fair value?"

**Single-Agent Approach**:
- Run Valuation agent with DCF methodology
- Get result: $175 fair value
- Accept and move forward

**Multi-Agent Approach**:
- Agent 1 (Valuation-DCF): $175 fair value (using discounted cash flow)
- Agent 2 (Valuation-Comps): $168 fair value (using peer multiples)
- Agent 3 (Risk): $160-$180 range (scenario-weighted)
- **Consensus**: $168-$175 range with moderate confidence

**Outcome**: Multi-agent approach reveals $7 valuation range, prompting analyst to understand which assumptions drive the spread. Single-agent would have missed this nuance.

---

## Core Consensus Patterns

### Pattern 1: Triangulation

**Purpose**: Validate key findings from three independent perspectives

**Structure**:
```
Question: "What are Tesla's key risks heading into 2025?"

Agent 1 (Retrieval): Extract risk factors from 10-K, earnings calls, research
Agent 2 (Risk): Model downside scenarios using financial assumptions
Agent 3 (Dashboard): Identify inflection points in key metrics vs. history

Synthesis: Compare all three. Which risks appear in multiple analyses?
```

**When to Use**:
- High-stakes decisions (buy/sell recommendations)
- Uncertain situations (new technologies, regulatory changes)
- Controversial theses (going against consensus)

**Confidence Interpretation**:
- **3/3 agents agree**: High confidence, proceed with thesis
- **2/3 agents agree**: Moderate confidence, investigate divergence
- **0-1/3 agents agree**: Low confidence, rethink approach or get more data

### Pattern 2: Sequential Refinement

**Purpose**: Use one agent's output to inform next agent's analysis

**Structure**:
```
Step 1 (Retrieval): "What were Microsoft's cloud revenue growth rates last 8 quarters?"
→ Output: Growth slowing from 50% to 30% YoY

Step 2 (Valuation): "Build DCF assuming cloud growth decelerates from 30% to 20% over 5 years"
→ Output: Fair value $380-$420

Step 3 (Risk): "What are downside scenarios if cloud growth falls below 20%?"
→ Output: Fair value could drop to $320-$350

Synthesis: Base case $380-$420, bear case $320-$350
```

**When to Use**:
- Complex, multi-step analysis
- When each step builds on previous findings
- Iterative hypothesis testing

**Best Practice**: Document assumptions at each step. If Step 1 data changes, rerun Steps 2-3.

### Pattern 3: Parallel Validation

**Purpose**: Run same question through multiple agents simultaneously, compare results

**Structure**:
```
Question: "What is Nvidia's competitive moat strength?"

[Run in parallel]
Agent 1 (Retrieval): Extract competitive advantages from filings and research
Agent 2 (Dashboard): Compare market share trends vs. AMD over 5 years
Agent 3 (Risk): Identify threats to current positioning

[Compare]
- Which competitive factors appear in multiple analyses?
- Where do agents disagree?
- What's the confidence range?
```

**When to Use**:
- Need results quickly (parallel execution faster than sequential)
- Independent analyses (no dependency between agents)
- Broad exploratory questions

**Advantages**:
- Fastest approach (parallel execution)
- Identifies consensus and outliers immediately
- No sequential dependency risk

---

## Consensus Confidence Scoring

### Interpreting Agent Agreement

**High Consensus (80-100% agreement)**:
- All agents point to same conclusion
- Confidence scores all above 75%
- Data sources overlap significantly
- **Action**: High confidence, proceed with thesis

**Example**: Three agents analyzing Apple's revenue trends all identify Services as fastest-growing segment with 25%+ growth rates.

**Moderate Consensus (60-79% agreement)**:
- Most agents agree on direction but differ on magnitude
- Confidence scores mixed (some high, some moderate)
- Data sources partially overlap
- **Action**: Proceed with caution, note uncertainty range

**Example**: Two valuation agents value Microsoft at $380-$420, one at $360. Direction (positive) agrees, magnitude varies.

**Low Consensus (40-59% agreement)**:
- Agents provide conflicting conclusions
- Confidence scores low (<60%)
- Data sources diverge
- **Action**: Investigate why disagreement exists; may indicate data gaps or methodology limitations

**Example**: One agent says Tesla demand is strong (based on order backlog), another says demand weakening (based on price cuts). Conflicting signals.

**No Consensus (<40% agreement)**:
- Agents fundamentally disagree
- Confidence scores very low
- No data overlap
- **Action**: Rethink question or get more/better data

**Example**: Agents disagree on whether crypto adoption will impact financial services. Too speculative, insufficient data.

### Quantifying Disagreement

**Valuation Range Example**:
- Agent 1 (DCF): $180 fair value
- Agent 2 (Comps): $165 fair value
- Agent 3 (Precedent): $175 fair value
- **Range**: $165-$180 ($15 spread = 8.6% variance)
- **Midpoint**: $173
- **Interpretation**: Moderate disagreement (8.6% spread is acceptable for valuation)

**Risk Ranking Example**:
- Agent 1 ranks risks: A > B > C > D
- Agent 2 ranks risks: B > A > D > C
- Agent 3 ranks risks: A > C > B > D
- **Consensus**: Risk A is top (3/3 agents); Risks B/C tied for second
- **Interpretation**: Strong agreement on top risk, moderate disagreement on 2nd/3rd

---

## Advanced Consensus Workflows

### Workflow 1: Comprehensive Earnings Analysis

**Objective**: Validate earnings impact from multiple angles

**Agent Sequence**:
```
[Parallel Execution - Pre-Earnings]
1. Retrieval: Gather consensus estimates and historical surprise patterns
2. Valuation: Build pre-earnings DCF with consensus assumptions
3. Risk: Identify key downside scenarios

[After Earnings Release]
4. Retrieval: Analyze actual results vs. expectations
5. Valuation: Update DCF with actual results
6. Risk: Reassess downside probability given new data

[Synthesis]
Compare pre vs. post:
- Did actual results validate or contradict pre-earnings thesis?
- How much did fair value change?
- Did identified risks materialize?
```

**Benefit**: Multi-period comparison shows thesis evolution and accuracy of predictions.

### Workflow 2: M&A Target Valuation

**Objective**: Establish valuation range with high confidence

**Agent Sequence**:
```
[Phase 1: Standalone Valuation]
Agent 1 (Valuation-DCF): Standalone intrinsic value
Agent 2 (Valuation-Comps): Peer group multiple-based value
Agent 3 (Valuation-Precedent): Historical M&A transaction multiples

[Phase 2: Strategic Value]
Agent 4 (Risk): Quantify synergies and integration risks
Agent 5 (Retrieval): Extract management commentary on strategic fit

[Phase 3: Deal Structure]
Agent 6 (Valuation): Model bid range scenarios (cash, stock, mixed)

[Synthesis]
Standalone value range: $X-$Y (Phase 1 consensus)
Strategic premium: +15-25% (Phase 2)
Recommended bid range: $X*1.15 to $Y*1.25
```

**Benefit**: Rigorous, multi-stage process builds defensible valuation for M&A committee.

### Workflow 3: Sector Rotation Decision

**Objective**: Compare multiple sectors, identify best risk-adjusted opportunities

**Agent Sequence**:
```
[For Each Sector: Technology, Healthcare, Financials]

Agent 1 (Dashboard): Historical valuation multiples and trends
Agent 2 (Valuation): Forward valuation vs. historical average
Agent 3 (Risk): Key sector-specific risks and probability
Agent 4 (Retrieval): Analyst sentiment and positioning

[Synthesis Across Sectors]
Dashboard Agent: Compare all sectors on risk-adjusted return matrix
Final Ranking: Overweight / Neutral / Underweight by sector
```

**Benefit**: Systematic, repeatable process for sector rotation decisions.

---

## When Agents Disagree: Resolution Strategies

### Strategy 1: Investigate Data Sources

**Problem**: Agents provide conflicting conclusions

**Steps**:
1. Review data sources cited by each agent
2. Check if sources are dated or incomplete
3. Identify if agents used different time periods or definitions
4. Rerun agents with standardized data sources

**Example**:
- Agent 1 (Retrieval) says market share is 40% (using IDC data)
- Agent 2 (Dashboard) says market share is 35% (using Gartner data)
- **Resolution**: Both correct, different methodologies. Avg 37.5% or choose preferred source.

### Strategy 2: Examine Methodology Differences

**Problem**: Agents using different assumptions or methodologies

**Steps**:
1. Review agent methodology descriptions
2. Identify assumption differences (growth rates, discount rates, etc.)
3. Align assumptions and rerun
4. If still disagree, document as uncertainty range

**Example**:
- Valuation Agent 1 uses 8% WACC → $180 fair value
- Valuation Agent 2 uses 10% WACC → $160 fair value
- **Resolution**: WACC sensitivity is the driver. Report range: $160-$180 depending on risk assessment.

### Strategy 3: Weight by Confidence Scores

**Problem**: Agents disagree but have different confidence levels

**Steps**:
1. Note each agent's confidence score
2. Weight results by confidence (high confidence = higher weight)
3. Calculate weighted average or range
4. Document that low-confidence results are discounted

**Example**:
- Agent 1: $180 fair value (confidence: 85%)
- Agent 2: $150 fair value (confidence: 55%)
- Agent 3: $175 fair value (confidence: 90%)
- **Resolution**: Weight more heavily toward Agents 1 & 3 → $175-$180 range

### Strategy 4: Seek Additional Data

**Problem**: Agents disagree due to insufficient data

**Steps**:
1. Identify what data is missing or ambiguous
2. Use Workbench to ask clarifying questions
3. Rerun agents with additional context
4. If still disagree, flag as high uncertainty

**Example**:
- Question: "Will Company X's new product succeed?"
- Agents disagree wildly (no historical data on new product)
- **Resolution**: Insufficient data for reliable forecast. Flag as speculative, use scenario analysis instead.

---

## Consensus Patterns by Use Case

### Use Case 1: Coverage Initiation

**Goal**: Comprehensive, defensible research report

**Agent Strategy**:
```
Business Understanding: Retrieval x3 (company, competitors, industry)
Financial Analysis: Retrieval + Dashboard (trends and comparisons)
Valuation: Valuation x3 (DCF, Comps, Precedent)
Risk Assessment: Risk x2 (downside scenarios, stress tests)
Thesis Validation: All agents in ensemble review

Total: 10-12 agent runs for comprehensive coverage
```

**Why**: Coverage initiation is high-profile; multiple agents ensure thoroughness and defend against criticism.

### Use Case 2: Quarterly Earnings

**Goal**: Fast, focused update on key changes

**Agent Strategy**:
```
Pre-Earnings: Retrieval (consensus) + Valuation (DCF update)
Earnings Day: Retrieval (results analysis) + Risk (guidance implications)

Total: 4 agent runs for efficient quarterly update
```

**Why**: Earnings are recurring; focus on speed and key changes rather than comprehensive analysis.

### Use Case 3: Quick Idea Validation

**Goal**: Fast sanity check on investment idea

**Agent Strategy**:
```
Workbench Query 1: Retrieval - "What are key financials and trends?"
Workbench Query 2: Valuation - "What's rough fair value range?"

Total: 2 agent queries in Workbench (5-10 minutes)
```

**Why**: Idea generation is rapid; use Workbench for fast validation before committing to formal project.

### Use Case 4: Risk Monitoring

**Goal**: Ongoing surveillance of existing holdings

**Agent Strategy**:
```
Monthly: Risk agent - "Any new risk factors emerged?"
Quarterly: Risk + Retrieval - "Validate thesis still intact"
Annual: Full ensemble - "Comprehensive re-evaluation"

Total: 1 agent/month, 2 agents/quarter, 10+ agents/year
```

**Why**: Surveillance is about catching changes; monthly risk agent catches emerging issues early.

---

## Best Practices for Multi-Agent Workflows

### Practice 1: Start with Retrieval

Always begin multi-agent workflows with Retrieval agent to gather facts:
- Establishes baseline understanding
- Identifies data gaps early
- Informs subsequent agent questions
- Provides source attribution

**Example**:
```
Step 1: Retrieval - "What were Q1-Q4 revenue growth rates?"
Step 2: Valuation - "Build DCF using growth rates from Step 1"
Step 3: Risk - "Model downside if growth falls below Step 1 averages"
```

### Practice 2: Document Agent Assumptions

Record assumptions used by each agent:
- **Agent 1 assumptions**: 5-year growth = 20%, WACC = 8%
- **Agent 2 assumptions**: 5-year growth = 15%, WACC = 10%
- **Difference**: More conservative assumptions in Agent 2 → lower valuation

This transparency helps explain discrepancies and builds trust.

### Practice 3: Use Ensemble Templates

For recurring analyses, save multi-agent configurations as templates:
- **Template: "Quarterly Earnings Check"** (4 agents pre-configured)
- **Template: "M&A Valuation"** (6 agents pre-configured)
- **Template: "Risk Surveillance"** (2 agents pre-configured)

Apply template each period with updated data inputs.

### Practice 4: Set Confidence Thresholds

Define minimum confidence scores for decision-making:
- **Buy/Sell decision**: Require 80%+ consensus with 75%+ confidence
- **Thesis update**: Require 70%+ consensus with 65%+ confidence
- **Exploratory research**: Accept 50%+ consensus with 50%+ confidence

Document your thresholds in project description.

### Practice 5: Compare to Benchmark

Add a "sanity check" agent that compares to external benchmark:
- **Question**: "What is Apple's fair value?"
- **Agents 1-3**: Internal valuation methods → $170-$180
- **Agent 4** (Dashboard): What is Wall Street consensus? → $175
- **Synthesis**: Internal valuation aligns with Street; confidence increases

---

## Common Pitfalls

### Pitfall 1: False Consensus

**Problem**: All agents agree because they use same flawed data source

**Example**: Three agents value company at $100, but all rely on outdated guidance
**Fix**: Vary data sources; explicitly test alternative scenarios

### Pitfall 2: Analysis Paralysis

**Problem**: Running too many agents, over-complicating simple questions

**Example**: Using 10 agents to answer "What was last quarter's revenue?"
**Fix**: Match agent count to question complexity (simple = 1-2 agents, complex = 5-10 agents)

### Pitfall 3: Ignoring Disagreement

**Problem**: Averaging agent results without investigating why they differ

**Example**: Agents say $150, $180, $200; average to $177 and move on
**Fix**: Understand root cause of disagreement before synthesizing

### Pitfall 4: Confirmation Bias

**Problem**: Only running agents that will confirm your thesis

**Example**: Bullish on stock, only run Valuation (ignores Risk perspective)
**Fix**: Deliberately include contrarian agents (Risk, alternative valuation methods)

---

## Next Steps

- **Want to understand agent types better?** See [Agent Overview](/docs/04-agent-types/agent-overview.md)
- **Ready to configure agents effectively?** See [Agent Configuration](/docs/02-intelligence-hub/agents-configuration.md)
- **Want to interpret agent results?** See [Results Analysis](/docs/02-intelligence-hub/results-analysis.md)
- **Need risk management strategies?** See [Risk Management](/docs/05-best-practices/risk-management.md)
