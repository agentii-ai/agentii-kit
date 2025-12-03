---
title: "Data Taxonomy"
description: "Master the three types of data Agentii uses: structured, semi-structured, and non-structured."
author: "Agentii Documentation"
date: "2025-11-26"
updated: "2025-11-26"
audience: "Beginner-Intermediate"
domain: "General"
tags: ["data-types", "structured-data", "taxonomy", "data-analysis"]
relatedDocs:
  - "/docs/01-data-and-sources/data-overview.md"
  - "/docs/01-data-and-sources/institutional-sources.md"
  - "/docs/01-data-and-sources/data-quality.md"
  - "/docs/02-intelligence-hub/agents-configuration.md"
  - "/docs/02-intelligence-hub/results-analysis.md"
---

# Data Taxonomy

Data isn't homogeneous. Agentii analyzes three distinct types of financial data, each with different characteristics, strengths, and limitations. Understanding these types helps you formulate better questions and interpret agent results with appropriate skepticism.

---

## Structured Data

**Definition**: Data with rigid format and precise values. Think spreadsheets with consistent columns and rows.

Structured data is the most reliable because it follows a fixed schema. Financial statements are the quintessential example—balance sheet accounts are defined by accounting standards, and values are precise.

### Characteristics
- **Format**: Fixed columns and rows, tables, databases
- **Precision**: Exact numeric values (no ambiguity)
- **Governance**: Audited, regulatory-verified, or standardized
- **Updatedness**: Current (latest available for reporting period)
- **Completeness**: Generally complete for major data points
- **Example**: Balance sheet showing Assets = Liabilities + Equity

### Financial Examples

**SEC Filings Data**
- Income statement line items (revenue, COGS, operating income, net income)
- Balance sheet accounts (assets, liabilities, equity, cash)
- Cash flow statement components (operating cash flow, capex, financing)
- Footnote data (debt terms, lease obligations, revenue by segment)

**Company-Provided Data**
- Quarterly earnings (EPS, revenue, key metrics from earnings releases)
- Dividend declarations and payment dates
- Share repurchase programs
- Capital allocation plans

**Financial Metrics**
- P/E ratios, Price/Sales ratios, Debt/Equity ratios
- ROE, ROA, ROIC (calculated from standardized formulas)
- Dividend yields (stock price ÷ dividend)
- Growth rates (calculated over consistent periods)

### Agent Use of Structured Data

Retrieval agents excel at structured data:
- "What were Microsoft's quarterly revenues for the past 8 quarters?" → Structured data from 10-Q filings
- "What is Apple's current debt-to-equity ratio?" → Structured data from balance sheet

Valuation agents require structured data:
- "Build a DCF model using 5 years of historical free cash flow and consensus growth assumptions" → Uses structured historical data

### Confidence in Structured Data

Structured financial data typically scores **85-98% confidence** because:
- Audited by Big Four accounting firms
- Verified by SEC
- Governed by GAAP (Generally Accepted Accounting Principles)
- No interpretation required—numbers speak for themselves
- Updated consistently with regulatory deadlines

---

## Semi-Structured Data

**Definition**: Data with some organization but flexible format. Think spreadsheets with occasional merged cells or notes columns.

Semi-structured data is more abundant than pure structured data but requires some interpretation. Industry KPIs (key performance indicators) are the quintessential example—production numbers from different manufacturers reported in different formats.

### Characteristics
- **Format**: Mostly organized but with variations (tables, text with embedded numbers, lists)
- **Precision**: Generally precise but sometimes estimated
- **Governance**: Standardized by industry or by convention, but not audited
- **Updatedness**: Current when reported, but reporting frequency varies
- **Completeness**: Sometimes gaps or estimates fill missing data points
- **Example**: Smartphone unit sales reported quarterly by manufacturers in various formats

### Financial Examples

**Industry KPIs**
- Smartphone unit sales and ASP (average selling price) by manufacturer
- Cloud revenue and cloud growth rates by provider
- Subscription counts (active users, ARPU—average revenue per user)
- Utilization metrics (bed occupancy for hospitals, flight capacity for airlines)
- Churn rates and retention metrics for SaaS companies

**Management Guidance**
- Quarterly revenue and earnings forecasts
- Full-year growth rate guidance ("low-single-digit growth")
- Capital allocation guidance
- M&A or restructuring plans

**Analyst Consensus Data**
- Consensus EPS estimates (average of analyst forecasts)
- Revenue growth consensus
- Price targets from research teams
- Rating consensus (buy/hold/sell)

**Regulatory or Semi-Regulatory Data**
- Production data from industry associations
- Market share estimates from market research firms
- Regulatory filings (like network speed data for telcos)
- Supply chain data from customs records

### Agent Use of Semi-Structured Data

Retrieval agents synthesize semi-structured data:
- "What are the growth rates for cloud services providers?" → Synthesizes differently formatted growth data from multiple providers

Valuation agents use semi-structured data to build models:
- "Build a DCF for semiconductor manufacturers using consensus growth assumptions and industry production data" → Uses both structured (historical) and semi-structured (consensus) data

### Confidence in Semi-Structured Data

Semi-structured data typically scores **65-85% confidence** because:
- Based on authoritative sources (management, industry bodies)
- But subject to interpretation and rounding
- Reporting standards vary between companies
- Analyst consensus can be biased
- Updated less frequently than structured data

---

## Non-Structured Data

**Definition**: Data in narrative form without rigid organization. Think long-form text, documents, interviews.

Non-structured data is the most abundant and richest source of context. Earnings call transcripts and research reports are pure non-structured data—analysts explain reasoning, describe competitive dynamics, and discuss risks in prose.

### Characteristics
- **Format**: Text, prose, narratives, audio transcripts
- **Precision**: Interpreted through judgment; inherently subjective
- **Governance**: Editorial standards vary widely; not audited
- **Updatedness**: Current when produced, but timeliness varies
- **Completeness**: Selective (authors choose what to emphasize)
- **Example**: CEO commentary on earnings call explaining margin compression drivers

### Financial Examples

**Company Communications**
- Earnings call transcripts (CEO/CFO prepared remarks + Q&A)
- Shareholder letters (often rich in strategic context)
- Investor presentation speeches
- Press releases beyond earnings (new product announcements, partnerships, challenges)
- Management commentary in 10-K/10-Q filings (Item 7 MD&A—Management Discussion & Analysis)

**Expert Insights**
- Sell-side research reports (analyst write-ups with ratings and price targets)
- Expert network interviews (direct insights from suppliers, competitors, customers)
- Industry conference transcripts and presentations
- Earnings call Q&A sections (particularly management guidance and color)

**Industry and Market Data**
- Trade publication articles
- Industry consultant reports
- News articles and commentary
- Supply chain intelligence
- Social sentiment (with caveats about reliability)

**Internal Analyses**
- Competitor analysis notes
- Market intelligence summaries
- Due diligence reports (for M&A)
- Risk assessments

### Agent Use of Non-Structured Data

Retrieval agents synthesize non-structured data:
- "What are the key risks management flagged on the earnings call?" → Pulls relevant excerpts from transcript
- "Compare the competitive positioning commentary across Microsoft and Amazon cloud services" → Synthesizes MD&A sections and investor presentations

Risk agents heavily rely on non-structured data:
- "What are the downside scenarios if enterprise cloud adoption slows?" → Interprets management commentary and analyst concerns

### Confidence in Non-Structured Data

Non-structured data typically scores **50-80% confidence** because:
- Subject to interpretation (different readers may draw different conclusions)
- Authors may have bias or incomplete information
- Statements can be forward-looking or speculative
- Requires synthesis across multiple sources
- Audio transcripts depend on transcription accuracy

---

## How Different Data Types Enable Different Analyses

Understanding data taxonomy helps you formulate better questions:

### Example: Apple iPhone Sales Analysis

**Using Structured Data Alone** (Limited):
- "What were Apple's revenue and gross margin last 8 quarters?" → ✅ Excellent, high confidence
- "How much revenue came from iPhone sales?" → ❌ Limited, Apple doesn't break out by hardware type
- "Why did iPhone sales decline in Q4?" → ❌ Can't infer causation from numbers alone

**Using Structured + Semi-Structured Data** (Better):
- "What were iPhone unit sales and ASP trends?" → ✅ Combines structured historical financials with semi-structured industry unit data
- "How does iPhone pricing compare to peer flagships?" → ✅ Combines structured pricing data with analyst estimates

**Using Structured + Semi-Structured + Non-Structured Data** (Best):
- "Why did iPhone sales decline in Q4 despite higher pricing?" → ✅ Combines financial data (structured), unit sales data (semi-structured), and management commentary on competition and consumer behavior (non-structured)
- "What are the strategic implications of declining iPhone market share?" → ✅ Uses all three data types to assess business model resilience

### Example: Semiconductor Industry Analysis

**Using Structured Data Alone**:
- Profitable if historical financials show margins—but why? Limited.

**Using Structured + Semi-Structured Data**:
- "What are TSMC vs. Samsung vs. Intel production utilization rates?" → Combines structured capex/revenue with semi-structured utilization data

**Using Structured + Semi-Structured + Non-Structured Data** (Best):
- "Compare the competitive positioning of TSMC vs. Intel and identify key risks from recent capacity announcements" → Uses financials (structured), utilization data (semi-structured), and analyst commentary on strategy (non-structured)

---

## Data Type Limitations

Each data type has blind spots:

### Structured Data Limitations
- **Trailing only**: Reflects past, not future
- **Aggregated**: Doesn't show segment-level details often
- **Backward-looking**: Can't explain causation
- **Seasonal patterns**: Raw numbers don't adjust for seasonality

**Workaround**: Combine with management commentary (non-structured) explaining drivers.

### Semi-Structured Data Limitations
- **Biased by reporting choice**: Companies highlight flattering metrics
- **Estimated**: Analyst estimates are guesses, not facts
- **Variable definitions**: Different providers may define "growth" differently
- **Outdated**: Some industry data is delayed 1-3 months

**Workaround**: Cross-reference multiple industry sources; don't rely on single consensus.

### Non-Structured Data Limitations
- **Subjective**: Two analysts may interpret same facts differently
- **Biased**: Authors have financial interests and viewpoints
- **Incomplete**: Authors choose what to emphasize, not what's comprehensive
- **Forward-looking**: Speculative statements about future are unreliable

**Workaround**: Seek multiple independent sources; weight recent over old; discount obvious marketing language.

---

## Agents and Data Type Preferences

Different agents are optimized for different data types:

| Agent Type | Best With | Struggles With |
|-----------|----------|-----------------|
| **Retrieval** | Non-structured (documents, transcripts) and semi-structured (industry data) | Can't interpret structured financial ratios deeply |
| **Valuation** | Structured (historical financials, consistent data) | Struggles without clear historical patterns |
| **Risk** | Non-structured (what could go wrong?) and semi-structured (consensus vs. outliers) | Can't identify risks from numbers alone |
| **Dashboard** | Structured (visualizable metrics) and semi-structured (comparative data) | Can't extract non-obvious insights from narrative text |

---

## Using Taxonomy to Improve Your Questions

### When to Use Each Data Type

**Ask about recent events** → Non-structured data:
- "What did management say about the competitive threat on the earnings call?"
- "What did the analyst community say about this acquisition?"

**Ask about metrics and trends** → Structured data:
- "What were the quarterly margin trends for the past 8 quarters?"
- "How has debt-to-equity ratio evolved?"

**Ask about industry dynamics** → Semi-structured data:
- "How does this company's market share compare to peers?"
- "What are the growth rate expectations for this industry segment?"

**Ask for comprehensive analysis** → All three types:
- "Apple faces competition from Android. How is this manifesting in financials, market share trends, and management commentary?"
- "Should we be concerned about this company's competitive position?"

---

## Best Practices for Data Type Awareness

### 1. Understand Your Confidence Source
When reviewing agent results, identify which data type supported which conclusion:
- Margin analysis = Structured (high confidence)
- Market share analysis = Semi-structured (medium confidence)
- Strategic positioning = Non-structured (lower confidence, verify with multiple sources)

### 2. Validate Cross-Type
Create multiple tasks to validate findings:
- Retrieval task: "What's the story from documents?"
- Valuation task: "What do the metrics suggest?"
- Risk task: "What are the downside scenarios?"

If all three point the same direction, confidence increases.

### 3. Request Source Transparency
Always review which data types agents used. In agent results, check:
- Is this based on audited financial data (high confidence)?
- Is this based on analyst estimates (medium confidence)?
- Is this based on management commentary (lower confidence)?

### 4. Segment Analysis by Confidence
In your project notes, document:
- What's high confidence (structured, audited data)?
- What's medium confidence (industry data, analyst consensus)?
- What's exploratory (interpretations of non-structured data)?

This clarity helps others (and future you) understand what's validated vs. speculative.

---

## Next Steps

- **Want to know which sources provide each data type?** See [Institutional Sources](/docs/01-data-and-sources/institutional-sources.md)
- **Want to understand data quality assurance processes?** See [Data Quality](/docs/01-data-and-sources/data-quality.md)
- **Want to learn how to interpret agent results properly?** See [Results Analysis](/docs/02-intelligence-hub/results-analysis.md)
- **Want to configure agents for specific data needs?** See [Agent Configuration](/docs/02-intelligence-hub/agents-configuration.md)
