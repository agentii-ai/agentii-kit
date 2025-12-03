---
title: "Results Analysis"
description: "Master results interpretation: read agent output, validate findings, assess confidence indicators, export results, build reports, and integrate insights into investment decisions."
author: "Agentii Documentation"
date: "2025-01-26"
updated: "2025-01-26"
audience: "Intermediate"
domain: "Intelligence Hub"
tags: ["results", "analysis", "interpretation", "export", "validation", "confidence"]
relatedDocs:
  - "/docs/00-introduction/core-concepts.md"
  - "/docs/02-intelligence-hub/hub-fundamentals.md"
  - "/docs/02-intelligence-hub/tasks-guide.md"
  - "/docs/02-intelligence-hub/task-execution.md"
  - "/docs/04-agent-types/agent-confidence-reliability.md"
---

# Results Analysis Guide

Task results transform agent output into actionable investment intelligence. This guide explains how to interpret agent findings, validate results, assess confidence indicators, export data, build professional reports, and integrate insights into research workflows.

---

## Understanding Task Results

### What Is a Task Result?

When a task completes, Agentii generates a structured result containing:

- **Agent output**: The answer to your analytical question
- **Confidence indicator**: Agent's assessment of result reliability (High/Medium/Low)
- **Data sources**: Which filings, transcripts, or databases were referenced
- **Methodology notes**: How the agent approached the analysis
- **Supporting evidence**: Key data points, calculations, or quotes
- **Timestamp**: When analysis was conducted
- **Execution metadata**: Task ID, agent used, execution time

---

## Viewing Task Results

### From Tasks Page

1. Navigate to **Tasks** in Intelligence Hub sidebar
2. Filter by project and snapshot (if needed)
3. Locate completed task (status: `done`, green checkmark)
4. Click task row to expand result details

**Result display sections**:
- **Header**: Task name, agent used, completion time
- **Summary**: 2-3 sentence executive summary of findings
- **Detailed output**: Full agent analysis
- **Confidence indicator**: Badge showing High/Medium/Low confidence
- **Data sources**: List of filings, transcripts, or databases referenced
- **Actions**: Export (PDF, Excel, JSON), Share, Archive

### Result View Modes

**Collapsed view** (task table):
- Shows task name, status, summary (first 100 characters)
- Quick scan of results without opening details

**Expanded view** (click task):
- Full result text
- All supporting evidence
- Data source citations
- Export options

**Full-screen view** (click "Expand"):
- Maximizes result on screen
- Removes navigation distractions
- Ideal for deep analysis or presentations

---

## Interpreting Agent Output

### Output Structure

Professional agent results follow a consistent structure:

#### 1. Executive Summary (100-200 words)

High-level answer to your question.

**Example** (DCF Valuation task):
> **Fair Value Estimate: $178-$192 per share (base case: $185)**
>
> Apple's intrinsic value is estimated at $185 per share using a 5-year DCF model with consensus revenue growth (6-8% CAGR), target operating margins (30%), and WACC of 8.2%. The valuation range reflects sensitivity to revenue growth (±200 bps) and discount rate (±100 bps). Current price of $175 suggests ~6% upside to fair value. Key drivers: Services revenue growth, iPhone demand stability, and capital allocation (buybacks).

#### 2. Methodology (100-300 words)

How the agent approached the analysis.

**Example**:
> **DCF Methodology:**
> - **Revenue projection**: 5-year forecast using consensus estimates (6% CAGR FY2024-2029)
> - **Operating margins**: Target 30% based on historical average and management guidance
> - **Capex & NWC**: Historical averages as % of revenue
> - **WACC**: 8.2% calculated using risk-free rate (4.5%), equity risk premium (6%), and beta (1.2)
> - **Terminal value**: Perpetuity growth model assuming 3% long-term growth
> - **Valuation date**: January 26, 2025

#### 3. Detailed Findings (300-800 words)

Core analytical content.

**Example sections**:
- **Financial projections**: Revenue, EBIT, FCF forecasts
- **Valuation summary**: NPV calculation, terminal value, equity value per share
- **Sensitivity analysis**: Tables showing impact of assumption changes
- **Comparison to market**: Current price vs. fair value; implied return
- **Key assumptions**: Critical inputs and their justification

#### 4. Supporting Evidence (100-400 words)

Data sources, quotes, and citations.

**Example**:
> **Data sources:**
> - Apple Inc. 10-K (FY2024): Revenue and margin trends
> - Consensus estimates: Refinitiv (15 analysts), average revenue growth 6.2%
> - Management guidance: Q4 2024 earnings call (October 31, 2024)
> - Comparable companies: Microsoft, Google, Amazon (for beta calculation)
>
> **Key quote from management:**
> "We remain confident in our ability to sustain operating margins around 30% through a combination of Services growth and operational leverage." - Tim Cook, Q4 2024 call

#### 5. Confidence Assessment (50-100 words)

Agent's self-evaluation of result reliability.

**Example**:
> **Confidence: High**
>
> Apple has extensive financial history, complete filings, and consistent reporting. Consensus estimates are available from 15+ analysts. The DCF model is standard methodology for mature technology companies. Key assumptions (revenue growth, margins, WACC) are well-supported by historical data and management guidance.
>
> **Uncertainty factors**: iPhone demand in China; Services growth sustainability; regulatory risks (App Store).

---

## Confidence Indicators Explained

### High Confidence

**Meaning**: Agent found strong, consistent data; methodology applied cleanly; results are reliable.

**When you see this**:
- Analyzing large-cap stocks with complete financial history (S&P 500)
- Standard analysis (DCF valuation, competitive analysis)
- Recent data available (earnings within past 90 days)
- No significant data gaps or inconsistencies

**How to use**:
- Results can be used directly in investment decisions
- Suitable for client presentations or board reports
- Low risk of material inaccuracy

**Example**: "DCF valuation for Apple shows $185 fair value with high confidence" → You can use $185 as your price target.

---

### Medium Confidence

**Meaning**: Agent completed analysis but encountered data gaps, inconsistencies, or required significant assumptions. Results are directional but should be cross-checked.

**When you see this**:
- Analyzing mid-cap stocks with less analyst coverage
- Complex analysis requiring multiple assumptions (emerging technologies, business model changes)
- Slightly dated data (earnings 90-180 days old)
- Minor data inconsistencies (e.g., management guidance conflicts with historical trends)

**How to use**:
- Results provide directional guidance; verify with additional analysis
- Supplement with Workbench queries or manual research
- Disclose assumptions when presenting to stakeholders
- Consider running multi-agent ensemble for validation

**Example**: "SaaS valuation suggests $120-$140 with medium confidence" → Use as starting point; validate with peer comps and management commentary analysis.

---

### Low Confidence

**Meaning**: Agent encountered significant data gaps, conflicting information, or methodological challenges. Results are preliminary; manual research required.

**When you see this**:
- Analyzing small-cap or micro-cap stocks with sparse financial history
- Pre-revenue companies (biotech in clinical trials, early-stage tech)
- Unusual situations (bankruptcy, major restructuring, recent IPO)
- Very limited analyst coverage or management disclosure
- Conflicting data sources

**How to use**:
- Treat results as hypotheses, not conclusions
- Conduct thorough manual research before making decisions
- Consider whether analysis is even feasible (some companies cannot be valued with traditional methods)
- Document uncertainties clearly in research reports

**Example**: "Pre-revenue biotech valuation shows $500M-$1.2B enterprise value with low confidence" → Use only as rough order of magnitude; conduct probability-weighted scenario analysis manually.

---

## Validating Agent Results

### Validation Checklist

Before relying on agent results, validate:

#### 1. Data Source Recency

**Check**: When was the most recent data used?

- ✅ **Acceptable**: Earnings within past 90 days, recent filings
- ⚠️ **Caution**: Data 90-180 days old; check for interim updates
- ❌ **Red flag**: Data older than 180 days; results may be stale

**Action**: If data is stale, re-run task after new earnings release.

---

#### 2. Assumption Reasonableness

**Check**: Are agent's assumptions aligned with your view and market consensus?

**Example** (DCF valuation):
- Agent assumes 8% revenue growth
- Consensus expects 6% revenue growth
- Your view is 5% revenue growth (demand concerns)

**Interpretation**: Agent's valuation may be too optimistic; adjust assumptions or request re-run with different inputs.

---

#### 3. Methodology Appropriateness

**Check**: Is the agent using the right methodology for this situation?

- ✅ **Appropriate**: DCF valuation for mature, profitable company
- ❌ **Inappropriate**: DCF valuation for pre-revenue biotech (better to use probability-weighted scenarios or precedent transaction analysis)

**Action**: If methodology doesn't fit, run task with different agent or use Workbench for alternative approach.

---

#### 4. Result Consistency

**Check**: Do results align with other analyses?

**Example**:
- DCF valuation: $185 per share
- Comparable company analysis: $180 per share
- Precedent transactions: $190 per share

**Interpretation**: Strong triangulation → High confidence in $185 target.

**Counter-example**:
- DCF valuation: $185 per share
- Comparable company analysis: $140 per share
- Precedent transactions: $200 per share

**Interpretation**: Wide divergence → Investigate why methods disagree; low confidence until resolved.

---

#### 5. Supporting Evidence Quality

**Check**: Are data sources authoritative and relevant?

- ✅ **Strong evidence**: Recent 10-K, management earnings call, consensus estimates from major brokerages
- ⚠️ **Weak evidence**: Outdated filings, informal management comments, single analyst estimate
- ❌ **Red flag**: No citations, generic statements, or unverifiable claims

**Action**: If evidence is weak, supplement with additional research or discount result confidence.

---

## Comparing Results Across Agents

### Multi-Agent Consensus

When using agent ensembles or running multiple agents on the same question:

**Strong consensus** (all agents agree):
- Increases confidence
- Validates result reliability
- Suitable for high-stakes decisions

**Example**:
- DCF Valuation Agent: $185
- Comparable Company Agent: $182
- Precedent Transaction Agent: $188

**Interpretation**: Fair value ~$185 with high confidence.

---

**Divergence** (agents disagree):
- Signals uncertainty or complexity
- Requires deeper investigation
- Human judgment critical

**Example**:
- DCF Valuation Agent: $185 (assumes strong Services growth)
- Comparable Company Agent: $160 (market values tech stocks at lower multiples currently)
- Risk Agent: "Significant downside risk from China demand"

**Interpretation**: Valuation debate centers on Services growth sustainability and China exposure. Conduct scenario analysis; consider $160-$185 range with bias toward caution.

---

### Agent-Specific Biases

Different agent types have inherent biases:

| Agent Type | Typical Bias | Mitigation |
|-----------|-------------|-----------|
| DCF Valuation | Optimistic (relies on growth projections) | Cross-check with comparable company multiples |
| Risk Agent | Pessimistic (designed to find problems) | Balance with opportunity analysis |
| Retrieval Agent | Neutral (fact-based) | Limited analytical interpretation |
| Dashboard Agent | Neutral (visual) | Doesn't provide recommendations |

**Best practice**: Use multiple agent types to balance biases; synthesize findings manually.

---

## Exporting Results

### Export Formats

Agentii supports multiple export formats:

#### PDF Export

**Use case**: Client reports, board presentations, compliance documentation

**Contents**:
- Formatted result text
- Charts and tables (if Dashboard agent)
- Data source citations
- Agentii branding and timestamp

**Best for**: Professional distribution, archival, regulatory submissions

---

#### Excel Export

**Use case**: Financial modeling, further analysis, data manipulation

**Contents**:
- Structured data tables
- Numerical data (valuation outputs, financial projections)
- Formulas preserved (if applicable)

**Best for**: Building on agent results; integrating into existing models

---

#### JSON Export

**Use case**: Programmatic access, API integration, custom reporting

**Contents**:
- Machine-readable JSON structure
- Full result metadata
- Timestamps and execution details

**Best for**: Developers, automated workflows, data pipelines

---

#### Text Export

**Use case**: Quick copy-paste, note-taking, email sharing

**Contents**:
- Plain text result
- No formatting
- Easy to paste into any document

**Best for**: Informal sharing, internal notes

---

### How to Export

1. Open completed task result
2. Click **Export** button (top-right)
3. Select desired format (PDF, Excel, JSON, Text)
4. Download file or copy to clipboard
5. File naming: Auto-generated as `[TaskName]_[Date].[format]`

**Bulk export** (multiple tasks):
1. Select multiple completed tasks using checkboxes
2. Click **Export Selected** (top action bar)
3. Choose format
4. Downloads ZIP file containing all results

---

## Building Professional Reports

### Report Structure

When synthesizing multiple agent results into a research report:

#### 1. Executive Summary (1 page)

Synthesize key findings from all agents:
- Investment thesis (1-2 sentences)
- Price target and rating recommendation
- Top 3 supporting points
- Top 3 risks

**Sources**: DCF Valuation agent, Risk agent, Competitive Analysis agent

---

#### 2. Business Overview (2-3 pages)

Company fundamentals:
- Business model and revenue streams
- Competitive positioning
- Key management and strategic direction

**Sources**: Retrieval agents (Company Overview, Industry Research)

---

#### 3. Financial Analysis (3-5 pages)

Historical performance and projections:
- Revenue trends and growth drivers
- Profitability and margin analysis
- Balance sheet strength
- Cash flow generation

**Sources**: Retrieval agent (Financial Metrics), DCF Valuation agent (projections)

---

#### 4. Valuation (2-4 pages)

Intrinsic value assessment:
- DCF valuation (base, bear, bull cases)
- Comparable company analysis
- Precedent transaction analysis
- Valuation summary and price target

**Sources**: Valuation agents (DCF, Comps, Precedent)

---

#### 5. Risk Analysis (2-3 pages)

Downside scenarios and risk factors:
- Top 5 risks with severity and probability
- Downside valuation scenarios
- Mitigation strategies

**Sources**: Risk agents (Downside Scenario, Risk Factor, Competitive Threat)

---

#### 6. Investment Recommendation (1 page)

Synthesis and conclusion:
- Rating (Buy, Hold, Sell) with conviction level
- Price target (12-month)
- Key catalysts to monitor
- Investment thesis summary

**Sources**: Manual synthesis of all agent results

---

### Report Best Practices

**Practice 1: Cite Agent Results with Confidence Levels**

In your report, note which findings come from high-confidence vs. low-confidence agents:

✅ **Good**: "DCF valuation suggests $185 fair value (high confidence, based on complete financial history and consensus estimates)."

✅ **Good**: "Preliminary industry analysis suggests 15-20% market share (medium confidence due to limited third-party data)."

❌ **Bad**: "Fair value is $185" (no confidence context; reader doesn't know reliability)

**Benefit**: Transparency; readers understand strength of evidence.

---

**Practice 2: Triangulate Findings**

Don't rely on a single agent's output:

✅ **Good**: "Valuation is supported by DCF ($185), comparable companies ($182), and precedent transactions ($188), suggesting fair value ~$185."

❌ **Bad**: "DCF shows $185, therefore price target is $185" (no validation)

**Benefit**: Robust conclusions; reduces risk of single-method errors.

---

**Practice 3: Disclose Assumptions**

Agent results depend on assumptions. Document key assumptions in your report:

**Example**:
> **Key Valuation Assumptions:**
> - Revenue growth: 6% CAGR (FY2024-2029), aligned with consensus
> - Operating margins: 30%, based on management guidance and historical average
> - WACC: 8.2%, using risk-free rate of 4.5% and equity risk premium of 6%
> - Terminal growth: 3%, reflecting long-term GDP growth expectations

**Benefit**: Readers can assess reasonableness of assumptions; you maintain credibility.

---

## Integrating Results into Investment Process

### Step 1: Results Review

After tasks complete:
1. Read all agent outputs
2. Assess confidence indicators
3. Validate key assumptions
4. Identify consensus and divergence

---

### Step 2: Synthesis

Combine findings into coherent thesis:
- What's the investment opportunity?
- What's the fair value?
- What are the key risks?
- What catalysts will drive the stock?

---

### Step 3: Decision

Based on synthesis:
- Initiate coverage with Buy/Hold/Sell rating
- Update existing price target
- Adjust portfolio position (buy more, trim, exit)
- Communicate findings to portfolio manager or investment committee

---

### Step 4: Documentation

Archive results and decisions:
- Export results to PDF for compliance
- Document decision rationale
- Store in project for future reference
- Track performance vs. recommendation (for retrospective learning)

---

## Troubleshooting Result Issues

### Issue 1: Result Doesn't Answer the Question

**Symptom**: Agent output is generic or misses the core question.

**Causes**:
- Task prompt was too vague
- Agent type wasn't appropriate for question
- Data limitations prevented focused analysis

**Solutions**:
1. Refine task prompt to be more specific
2. Use different agent type (e.g., Retrieval agent instead of Valuation agent for qualitative questions)
3. Break complex question into multiple tasks
4. Re-run with clearer instructions

---

### Issue 2: Result Has Factual Errors

**Symptom**: Agent cites incorrect financial data or makes false claims.

**Causes**:
- Agent accessed outdated data
- Data source had errors (rare but possible)
- Agent misinterpreted data

**Solutions**:
1. Verify facts manually (check 10-K, earnings call transcript)
2. Report issue to Agentii support (helps improve agent quality)
3. Discard result; rely on manual research
4. Re-run task after data refreshes

---

### Issue 3: Result Contradicts Other Agents

**Symptom**: Multiple agents produce conflicting conclusions.

**Interpretation**: This is often normal and valuable:

- **DCF optimistic, Comps pessimistic**: Market may be undervaluing (opportunity) or DCF assumptions too aggressive (review growth rates)
- **Risk agent pessimistic, Valuation agent optimistic**: Highlights risk/reward debate; use scenario analysis

**Solutions**:
1. Investigate why agents diverge (read detailed methodologies)
2. Apply human judgment (which perspective do you agree with?)
3. Run additional agents for tiebreaker
4. Document divergence in research report (transparency)

---

## Best Practices Summary

### 1. Always Review Confidence Indicators
High confidence → reliable; Medium → verify; Low → supplement with manual research.

### 2. Validate Key Assumptions
Check that agent assumptions align with your view and market consensus.

### 3. Triangulate with Multiple Agents
Single agent = hypothesis; Multiple agents = validated finding.

### 4. Export and Archive Results
Preserve analysis for compliance, learning, and future reference.

### 5. Synthesize, Don't Just Aggregate
Combine agent findings into coherent investment thesis; don't just list outputs.

### 6. Disclose Limitations
When presenting results, note confidence levels and assumptions.

### 7. Iterate Based on Findings
If results raise new questions, create follow-up tasks to investigate.

---

## Next Steps

- **Want to understand agent confidence deeply?** See [Agent Confidence & Reliability](/docs/04-agent-types/agent-confidence-reliability.md)
- **Need to configure agents for better results?** See [Agent Configuration](/docs/02-intelligence-hub/agents-configuration.md)
- **Ready to see complete workflows?** See [Project Workflows](/docs/02-intelligence-hub/project-workflows.md)
- **Want to create more tasks?** See [Tasks Guide](/docs/02-intelligence-hub/tasks-guide.md)
- **Need to export via API?** See [Results API Reference](/docs/08-api-reference/results-api.md)
