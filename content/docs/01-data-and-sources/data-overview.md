---
title: "Data Overview"
description: "Understand what data Agentii accesses and why data quality matters for agent analysis."
author: "Agentii Documentation"
date: "2025-11-26"
updated: "2025-11-26"
audience: "Beginner"
domain: "General"
tags: ["data", "sources", "data-quality", "trust"]
relatedDocs:
  - "/docs/00-introduction/core-concepts.md"
  - "/docs/01-data-and-sources/data-taxonomy.md"
  - "/docs/01-data-and-sources/institutional-sources.md"
  - "/docs/01-data-and-sources/data-quality.md"
  - "/docs/02-intelligence-hub/results-analysis.md"
---

# Data Overview

Data is the foundation of Agentii's analysis. Understanding what data your agents can access, how fresh that data is, and what limitations exist enables you to trust and appropriately weigh agent findings.

---

## What Data Agentii Accesses

Agentii connects to institutional financial data sources that professional analysts use daily. Unlike consumer financial sites, Agentii integrates:

- **Regulatory filings** from the SEC (10-K, 10-Q, 8-K annual/quarterly reports)
- **Investor relations communications** from company websites (earnings calls, guidance, investor days)
- **Institutional research** from sell-side brokers and research firms
- **Expert network insights** from supplier, competitor, and management perspectives
- **Industry data** from specialized providers (healthcare bed utilization, telecom subscriber metrics, etc.)
- **News and market intelligence** from wire services and trade publications
- **Historical financial metrics** from standard financial databases

This is the same data institutional equity researchers, portfolio managers, and credit analysts rely on. Agentii doesn't invent data; it synthesizes data you'd manually gather.

### What Agentii Does NOT Access

Understanding limitations prevents misuse:

- **Real-time tick data**: Stock prices every second (only recent snapshots)
- **Proprietary/confidential information**: Not available to Agentii
- **Future predictions**: Agentii analyzes history and current information only
- **Non-public company data**: Focus is public equities and credit analysis
- **Personal/retail sentiment**: Individual investor opinions from forums or social media
- **Forward guidance beyond published guidance**: CEO commentary, rumor intelligence

---

## Why Data Matters to Agents

Agents analyze documents and data to extract insights. The quality of data directly affects the quality of analysis.

### High-Quality Data → High Confidence Results

Example: "What are Apple's quarterly revenues for the past 8 quarters?"

- **Source**: SEC filings (10-Q and 10-K reports)
- **Freshness**: Updated within 45 days of quarter-end
- **Certainty**: Audited financial statements—no ambiguity
- **Agent confidence**: 95-98% (structured financial data, official source)

### Incomplete Data → Lower Confidence Results

Example: "What is the current capacity utilization rate for semiconductor manufacturers?"

- **Source**: Mix of public guidance, analyst estimates, industry reports
- **Freshness**: Delayed 1-3 months (not real-time)
- **Certainty**: Some estimates vary between sources
- **Agent confidence**: 65-75% (good data but not official, some interpretation needed)

### Limited Data → Lower Confidence Results

Example: "What are the total software engineering costs as a percentage of revenue for each of Apple's internal divisions?"

- **Source**: Limited disclosure (not all divisions reported separately)
- **Freshness**: Disclosed annually, not quarterly
- **Certainty**: Must infer from proxy statements, investor calls (not official breakdown)
- **Agent confidence**: 45-55% (incomplete disclosure, significant estimation required)

---

## Data Freshness by Source Type

Financial data freshness varies significantly. Understanding latency helps you time your analysis:

### Near Real-Time (Same Day)
- **Stock prices and market data**: Current
- **Major news announcements**: Same day (hours to a day)
- **SEC filings (EDGAR)**: Same day of filing

### Delayed 1-3 Days
- **Analyst reports** from major brokers
- **Industry news and commentary**
- **Market reactions and trading patterns**

### Delayed 1-6 Weeks
- **Earnings call transcripts**: 1-3 days after call
- **Investor presentations**: Same day or next day
- **Quarterly financial guidance**: Day of earnings announcement

### Delayed 1-3 Months
- **Quarterly earnings releases**: 20-45 days after quarter-end (10-Q filings)
- **Industry production data** (autos, semiconductors, etc.)
- **Credit rating changes**: Days to weeks after announcement

### Annual or Delayed 2-4 Months
- **Annual reports** (10-K filings): Within 60-90 days of fiscal year-end
- **Audited financial statements**: 60-90 days post year-end
- **Annual investor day presentations**: Typically in January-March
- **Full-year management guidance**

### Understanding Latency Impact

When you ask about recent developments:
- "How did Apple's earnings surprise the market?" → Available same day
- "What was the consensus for Q1 revenue?" → Available within 1-3 days
- "How did Apple's guidance compare to expectations?" → Available within 1-3 days
- "What structural changes are underway in supply chain?" → Available after quarterly guidance and management calls (1-3 weeks)

Agentii agents understand this latency and note when data is dated or incomplete in results.

---

## Privacy and Data Usage

### Your Data Security

- **Your analysis is private**: Projects, tasks, and results are not shared with other users
- **Data encryption**: All data transmitted over secure HTTPS connection
- **Access controls**: Only you (and team members you explicitly add) can access your projects
- **No training data**: Your queries and results are never used to train agents on other instances

### Corporate vs. Personal Data

Agentii focuses on institutional financial data that's already public:
- SEC filings (public by definition)
- Earnings transcripts (published by companies)
- Research reports (available to institutional subscribers)
- Industry data (purchased by institutions)

Agentii doesn't access:
- Personal financial data
- Private company information
- Non-public communications
- Insider information

If you input non-public information into Agentii (via custom prompts or documentation), it's stored within your private project per data security above.

---

## Data Compliance Overview

Agentii supports institutional compliance requirements:

### Audit Trail

Every task execution creates a detailed record:
- What question you asked (the prompt)
- Which agent answered
- What data sources were used
- What conclusions the agent reached
- Timestamp and user identification

This audit trail is essential for regulatory compliance in asset management and research contexts. You can export or archive it for regulatory review.

### Data Sourcing Transparency

Agent results include:
- **Source attribution**: Which documents the agent referenced
- **Quote preservation**: Exact excerpts from source documents
- **Data lineage**: Which databases and vendors provided underlying data

This transparency enables you to verify agent findings against original sources if needed for compliance documentation.

### Regulatory Considerations

Using Agentii in regulated contexts (asset management, broker research, credit analysis):
- Agent output should be treated as preliminary analysis, not final recommendations
- Human review and sign-off is required before publishing or distributing any analysis using Agentii
- Maintain records of agent output and your review for audit purposes
- Some firms may require separate approval workflows for agent-assisted research

---

## Data Quality Assurance

Agentii implements automated quality checks:

### Automated Validation
- **Duplicate detection**: Removes duplicate documents to avoid double-counting
- **Recency validation**: Flags if recent data is missing (e.g., quarterly earnings not yet available)
- **Source verification**: Validates data sources are from authorized providers
- **Anomaly detection**: Flags unusual values that might indicate data errors

### Cross-Source Verification
- **Consensus checking**: When multiple sources provide same metric, agent notes level of agreement
- **Discrepancy flagging**: If sources disagree significantly, agent explicitly notes the variance
- **Version control**: For data that updates (like analyst estimates), agent notes which version is current

### What This Means

Agent results include notes when:
- Data is from multiple sources (and whether they agree)
- Recent data is missing
- Estimates vary significantly between sources
- Data comes from a lower-confidence source

---

## Data Limitations and Workarounds

### Common Limitations

**Limitation 1: Segment-level data not disclosed**
- Example: Apple doesn't break out iPhone segment margins as precisely as analysts would like
- Workaround: Create multiple tasks using different agents (Retrieval for management commentary, Valuation for estimated margins) and compare results

**Limitation 2: Forward guidance uncertain**
- Example: Management's 5-year guidance is imprecise ("low-single-digit growth")
- Workaround: Create Risk agent task asking "What are the downside scenarios?" to test your thesis

**Limitation 3: Non-public market sizing**
- Example: TAM (total addressable market) for Apple's services is estimated, not disclosed
- Workaround: Create Valuation task building DCF with multiple TAM scenarios

**Limitation 4: Competitive data asymmetric**
- Example: You have detailed data on Company A but limited data on Competitor B
- Workaround: Create task comparing publicly available data on both

### Using Agents to Work Around Limitations

Agentii agents are specifically designed to work with incomplete data:
- **Synthesize multiple sources**: When official data is unavailable, agents pull from management commentary, analyst estimates, and industry data to build a picture
- **Quantify uncertainty**: Agents note confidence levels explicitly, showing where data is weak
- **Test scenarios**: Risk agent can model "what if" scenarios to stress-test your thesis against various data gaps
- **Contextualize estimates**: Agents explain reasoning behind estimates, so you can judge whether you believe them

---

## Best Practices for Data-Driven Analysis

### 1. Verify High-Stakes Conclusions

If an agent finding would materially change your investment decision, verify it:
- Click the source citations in agent output
- Read the original document yourself
- Consider whether agent interpretation is reasonable

### 2. Use Confidence Scores to Weight Findings

- **85-100%**: Trust this for presentations and recommendations
- **70-85%**: Good for analysis but verify key conclusions
- **50-70%**: Use for hypothesis generation but validate thoroughly
- **<50%**: Preliminary only; don't base decisions on low-confidence findings

### 3. Create Multiple Tasks to Validate

Important analysis warrants multiple agents:
- Retrieval agent: What do documents say?
- Valuation agent: What do standard models suggest?
- Risk agent: What are the downside scenarios?
- Compare results: Do they point to same conclusion?

### 4. Note Your Analysis Context

In project description, document:
- Date of analysis (data freshness matters)
- Key assumptions about forward guidance
- Limitations in available data
- Areas where you relied on estimates vs. official data

This creates institutional memory and helps others understand your reasoning.

### 5. Plan Your Timing

For earnings analysis, timing your research around data availability:
- Week before earnings: Use pre-earnings guidance and consensus estimates (known data)
- Day of earnings: Use actual results and management commentary (official data)
- Days after earnings: Use analyst reactions and updated guidance (consolidated view)

---

## Next Steps

- **Want to understand data types?** See [Data Taxonomy](/docs/01-data-and-sources/data-taxonomy.md)
- **Want to know which sources Agentii uses?** See [Institutional Sources](/docs/01-data-and-sources/institutional-sources.md)
- **Want to understand data quality assurance?** See [Data Quality](/docs/01-data-and-sources/data-quality.md)
- **Want to interpret agent results?** See [Results Analysis](/docs/02-intelligence-hub/results-analysis.md)
- **Ready to start analyzing?** See [Getting Started](/docs/00-introduction/getting-started.md)
