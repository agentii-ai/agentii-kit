---
title: "Data Quality"
description: "Understand Agentii's data quality assurance processes and how data quality affects confidence scores."
author: "Agentii Documentation"
date: "2025-11-26"
updated: "2025-11-26"
audience: "Intermediate"
domain: "General"
tags: ["data-quality", "confidence", "validation", "qa"]
relatedDocs:
  - "/docs/01-data-and-sources/data-overview.md"
  - "/docs/01-data-and-sources/institutional-sources.md"
  - "/docs/01-data-and-sources/data-taxonomy.md"
  - "/docs/02-intelligence-hub/results-analysis.md"
  - "/docs/02-intelligence-hub/agents-configuration.md"
---

# Data Quality

Data quality directly impacts agent analysis quality. Understanding how Agentii validates data and what limitations remain helps you interpret confidence scores accurately and know when to apply additional validation.

---

## Quality Assurance Processes

Agentii implements multiple automated quality checks before data reaches agents.

### Duplicate Detection

**What**: Agentii identifies and deduplicates documents in the source system.

**Why It Matters**: SEC filing databases sometimes include multiple versions (amended filings, restatements). Without deduplication, an agent would accidentally "double-count" the same financial data.

**How It Works**:
- Compares document hash (content fingerprint) against previously indexed documents
- Flags documents with >95% similarity as potential duplicates
- Retains most recent version; archives earlier versions
- Maintains version history for audit trail

**Example**: A company files 10-Q, then immediately amends and refills with corrections (10-Q/A). Agentii deduplicates and uses the amended version.

### Recency Validation

**What**: Agentii flags when expected data is missing based on regulatory calendar.

**Why It Matters**: If you query "What were Apple's Q1 results?" and Q1 10-Q hasn't been filed yet, agent should explicitly note data is not yet available (rather than returning stale data).

**How It Works**:
- Tracks regulatory filing deadlines (45 days post quarter-end for 10-Q, 60 days for 10-K)
- Alerts if recent filing is missing from database
- Notes data currency in agent output ("Most recent quarter is Q4 2024; Q1 2025 results not yet available")
- Flags if historical data is surprisingly old

**Example**: You query "What was Microsoft's Q1 2025 EPS?" on February 1st. Agent notes "Q1 2025 ends March 31, so Q1 results won't be available until May. Showing most recent available quarter: Q4 2024."

### Source Verification

**What**: Agentii validates that data comes from authorized, legitimate sources.

**Why It Matters**: Prevents spoofed or fraudulent documents from being indexed (e.g., someone creating a fake SEC filing).

**How It Works**:
- Verifies SEC filings come from official EDGAR database (government source)
- Validates earnings transcripts match official corporate sources
- Cross-references analyst reports to registered broker databases
- Flags if document lacks proper source authentication

**Example**: If a document claiming to be "Apple 10-K" can't be verified against SEC's official filing system, it's flagged and not indexed.

### Anomaly Detection

**What**: Agentii identifies unusual values that might indicate data errors or fraud.

**Why It Matters**: Catches data entry errors or unusual accounting treatments that might mislead analysis.

**How It Works**:
- Monitors financial metrics against historical trends (sudden 50% swings trigger review)
- Compares metrics across multiple sources (if three sources report same metric, consistent; if they differ wildly, flags for review)
- Tracks unusual ratio changes (if P/E suddenly 10x higher than peer average, flags for investigation)
- Monitors for impossible values (negative square footage, negative employee count, etc.)

**Example**: Apple reports revenue of $150B in Q1, but Q2 historical data shows quarterly revenues in $80-100B range. Anomaly detection flags this as unusual and initiates manual review.

### Format Standardization

**What**: Agentii converts data from various formats into standardized structures.

**Why It Matters**: Different sources report data in different formats. Standardization enables comparison.

**How It Works**:
- Converts all currency to USD (standardizes FX conversions for international companies)
- Standardizes date formats across sources (all YYYY-MM-DD)
- Normalizes units (converts all revenue to millions or billions consistently)
- Adjusts for stock splits and dividends (historical prices are split-adjusted)
- Applies seasonal adjustments where standard (e.g., retail seasonality)

**Example**: Company A reports revenue in billions USD; Company B reports in millions GBP. Agentii standardizes to same currency and unit for comparison.

---

## Data Normalization Standards

Beyond quality checks, Agentii applies standard financial normalizations.

### Currency Conversion

**Standard**: Convert non-USD to USD using historical exchange rate on reporting date.

**Why It Matters**: Foreign companies report in home currency. Standardizing to USD enables cross-border comparison.

**Example**: ASML (Dutch semiconductor company) reports revenue in EUR. Agentii converts to USD using EUR/USD rate on reporting date.

**Limitation**: FX impacts disclosed in results. Agent notes "€10B revenue = $11B at 1.10 EUR/USD rate on report date; this is equivalent to prior year EUR conversion of..."

### Seasonal Adjustments

**Standard**: Retail, hospitality, and seasonal industries often use "adjusted" metrics that remove seasonal effects.

**Why It Matters**: December revenue is unusually high for retailers due to holidays. Seasonal adjustment shows "organic" growth vs. calendar effect.

**Example**: Walmart's holiday quarter (Q4) is abnormally high. Agent reports both reported revenue and seasonally adjusted revenue.

**Limitation**: Not all seasonal adjustments are universal. Agentii applies standard methodology but notes if company uses different approach.

### Stock Split Adjustments

**Standard**: All historical stock prices and share counts adjusted for splits.

**Why It Matters**: Without adjustment, comparing pre-split and post-split stock prices is misleading.

**Example**: Apple had 7:1 stock split in 2014. Historical prices before 2014 are multiplied by 7 for comparison.

**Automation**: This is handled transparently; agent results show split-adjusted prices without requiring user configuration.

### Restatement Handling

**Standard**: When company restates financials, Agentii indexes both original and restated versions.

**Why It Matters**: Restatement might indicate accounting error or fraud. Historical record matters.

**Example**: Enron's restatement was massive. Agentii would index both original (fraudulent) and restated versions, noting the restatement in metadata.

**How Agent Uses**: By default, agents use restated (corrected) versions. Results note if restatement occurred.

---

## Cross-Source Verification

When data comes from multiple sources, Agentii compares them.

### When Sources Agree

**Confidence boost**: If structured data (10-Q filing) matches semi-structured data (analyst consensus), confidence increases.

**Example**:
- SEC filing reports Apple EPS of $2.00
- Three analyst consensus models estimate $1.95-$2.05
- These sources align → Agent confidence: 95%

### When Sources Disagree

**Explicit flagging**: If sources disagree significantly, agent notes the variance.

**Example**:
- SEC filing reports revenue of $100B
- Industry association estimates $95B
- Wire service reports $98B
- 5% variance is normal due to timing/definitions

**Agent output**: "Revenue reports vary by source: SEC $100B, industry estimates $95-98B. Variance is within normal range due to timing differences."

### Data Quality Issues

**Low confidence assignment**: If sources disagree widely (>10%), agent explicitly notes disagreement and lowers confidence.

**Example**:
- One analyst estimates market share at 40%
- Another estimates 25%
- 15-point spread is significant
- Agent confidence: 55% (high uncertainty)

**Agent output**: "Market share estimates vary significantly by source (25-40%). Recommend obtaining primary data from company or industry directly."

---

## Known Data Limitations and Workarounds

### Common Data Gaps

**Limitation 1: Segment-Level Margin Data Not Disclosed**

Example: Apple doesn't break out hardware vs. services margins; hardware vs. software margins.

Workaround:
1. Create Retrieval task: "What's management's commentary on hardware vs. services profitability trends?"
2. Create Valuation task: "Estimate Apple services margins using gross margin changes and revenue mix shifts"
3. Create Risk task: "How exposed is Apple to services margin compression?"
4. Compare three agent approaches; triangulate answer

**Limitation 2: Forward Guidance Is Imprecise**

Example: "We expect low-single-digit growth" (could mean 0-3% or 1-5%, depending on interpretation).

Workaround:
1. Create Retrieval task: "What's the historical range of actual results vs. management guidance for this company?"
2. Use Risk agent to model downside scenarios
3. In project notes, document your interpretation of guidance

**Limitation 3: Competitive Data Asymmetric**

Example: You have detailed data on Company A but limited data on Competitor B.

Workaround:
1. Use expert network calls to gather Competitor B insights
2. Create Retrieval task across industry peers
3. Use Risk agent to assess "What if we're wrong about Competitor B?"

**Limitation 4: TAM (Total Addressable Market) Is Estimated**

Example: Cloud TAM estimates vary from $500B to $2T depending on definition and source.

Workaround:
1. Create Valuation task: "Model revenue as percentage of various TAM estimates"
2. Create Risk task: "What happens if TAM is at low end of estimates?"
3. Document your TAM assumptions in project description

### Data Freshness Issues

**Issue 1: Earnings guidance is stale**

Example: Company guided in January. It's now September. Environment has changed but company hasn't updated guidance.

Workaround:
1. Note guidance currency in your project ("Guidance from Jan 2024; 8 months old as of Sept 2024")
2. Create Risk task: "What are likely changes to guidance given 8 months of developments?"
3. Weight recent commentary (earning call, news) more heavily

**Issue 2: Industry data lags actual developments**

Example: Industry research shows 2023 market share. You're analyzing 2025.

Workaround:
1. Flag data currency in project description
2. Create Retrieval task: "What's the most recent data on market share?"
3. Use expert network to validate if publicly available data has become stale

---

## How Data Quality Affects Confidence Scores

Confidence scores (0-100) reflect underlying data quality and methodology certainty.

### High Confidence (85-100%)
**Data characteristics**:
- From official, audited sources (SEC filings)
- Consistent across sources
- Recent (within 1 quarter for operating data)
- Objective, unambiguous (financial statements)
- Standard methodology (DCF with disclosed assumptions)

**Example**:
Query: "What were Apple's quarterly revenues last 8 quarters?"
Agent: Retrieves from 10-Q filings (audited, consistent)
Confidence: 96% (structured data, one official source)

### Good Confidence (70-85%)
**Data characteristics**:
- From credible sources (analyst consensus, industry data)
- Mostly consistent across sources (minor variations)
- Recent-ish (within 1-3 months for estimates)
- Mostly objective, some interpretation required
- Standard methodology with reasonable assumptions

**Example**:
Query: "What's the consensus EPS estimate for Q1 2025?"
Agent: Aggregates 15 analyst forecasts
Sources: Bloomberg consensus, Research reports
Confidence: 78% (consensus by definition incorporates analyst biases; estimates not actuals)

### Moderate Confidence (50-70%)
**Data characteristics**:
- From mixed credibility sources (some analyst opinions mixed with official data)
- Variable across sources (>5% variance)
- Somewhat aged (1-6 months old for actuals; estimates older)
- Requires interpretation (analyst commentary, expert opinions)
- Non-standard methodology or assumptions

**Example**:
Query: "What's the competitive threat to Apple from Android-based products?"
Agent: Synthesizes market share data, analyst opinions, expert commentary
Sources: Multiple industry reports, expert calls, research notes
Confidence: 62% (inherently subjective assessment; data varies by source)

### Low Confidence (30-50%)
**Data characteristics**:
- Sparse or inconsistent sources
- Aged data (6+ months for rapidly evolving topics)
- High estimation / interpretation required
- Non-standard methodology
- Forward-looking or speculative

**Example**:
Query: "What will Apple's market share be in 2030?"
Agent: Uses historical trends, analyst forecasts, trend analysis
Sources: Extrapolation from sparse data
Confidence: 38% (inherently speculative; too many unknowns)

### Very Low Confidence (<30%)
**Data characteristics**:
- Minimal data available
- Highly speculative or interpretive
- Forward-looking with high uncertainty
- No standardized methodology
- Outside normal analytical boundaries

**Example**:
Query: "How will AI disruption affect Apple's iPhone business model by 2032?"
Agent: Synthesizes emerging technology trends, speculative analyst commentary
Sources: Limited precedent, rapidly evolving field
Confidence: 22% (too many unknowns; treat as exploratory thinking only)

---

## Best Practices for Validating Agent Output

### 1. Check Confidence Scores First

Don't spend time validating low-confidence results. Instead:
- Score 85-100%: Trust for presentations and decisions
- Score 70-85%: Verify key conclusions but generally reliable
- Score 50-70%: Useful for analysis but requires validation
- Score <50%: Treat as exploratory only; don't rely on for decisions

### 2. Review Source Citations

Agent output includes source citations. Verification steps:
1. Click source to verify it's legitimate
2. Skim source to see if agent's quote/interpretation is fair
3. If sources are primarily one type (e.g., all analyst reports), recognize potential bias

### 3. Triangulate with Multiple Agents

Create tasks with different agents to validate:
- **Retrieval agent**: "What's management saying?"
- **Valuation agent**: "What do financial models suggest?"
- **Risk agent**: "What could go wrong?"

If all three point to same conclusion, confidence increases.

### 4. Validate Against Official Sources

For high-stakes decisions:
1. Retrieve agent's SEC filing source citation
2. Read relevant section yourself
3. Verify agent's summary is accurate and complete
4. Note if agent missed important nuance

### 5. Understand Assumptions

Review assumptions behind agent analysis:
- For valuations: What revenue growth assumptions? What WACC? What terminal growth?
- For risk analysis: What scenarios are being modeled?
- For comparisons: Which peers are being used?

Different assumptions produce different results. Validate assumptions match your thesis.

---

## Known Limitations to Accept

### Agentii Cannot Provide

- **Real-time stock price**: Data is delayed slightly; use Bloomberg or market data for current prices
- **Insider information**: Agentii only uses public data
- **Earnings surprises before announcement**: Impossible to predict; use Workbench to validate after announcement
- **Perfect valuation**: Multiple methodologies exist; Agentii doesn't declare one "correct"
- **Personal investment advice**: Agentii analysis is informational only; you make portfolio decisions

### Work Around These Limitations

- Use Workbench for quick validation questions immediately after news
- Create multiple valuation tasks and note range of outcomes
- Always apply human judgment to agent recommendations
- Treat Agentii as accelerator for research, not replacement for judgment

---

## Next Steps

- **Want to understand how to interpret results properly?** See [Results Analysis](/docs/02-intelligence-hub/results-analysis.md)
- **Want to know about specific agent capabilities?** See [Agent Configuration](/docs/02-intelligence-hub/agents-configuration.md)
- **Want best practices for data-driven analysis?** See [Project Workflows](/docs/02-intelligence-hub/project-workflows.md)
- **Ready to start analyzing?** See [Getting Started](/docs/00-introduction/getting-started.md)
