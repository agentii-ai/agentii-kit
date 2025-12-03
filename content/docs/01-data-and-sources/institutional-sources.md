---
title: "Institutional Sources"
description: "Explore the diverse data sources Agentii leverages: SEC filings, research, expert networks, and industry intelligence."
author: "Agentii Documentation"
date: "2025-11-26"
updated: "2025-11-26"
audience: "Intermediate"
domain: "General"
tags: ["sources", "SEC-filings", "research", "data-sources"]
relatedDocs:
  - "/docs/01-data-and-sources/data-overview.md"
  - "/docs/01-data-and-sources/data-taxonomy.md"
  - "/docs/01-data-and-sources/data-quality.md"
  - "/docs/02-intelligence-hub/results-analysis.md"
---

# Institutional Sources

Agentii's power derives from its access to institutional data sources. This document catalogues the sources Agentii integrates and explains when each is most valuable. Understanding source characteristics helps you interpret agent analysis and identify appropriate confidence levels for different types of conclusions.

---

## SEC Filings & Regulatory Documents

**Importance**: Foundation of US equity analysis. Official, audited, regulatory-verified.

### 10-K: Annual Report
**Filed**: Within 60-90 days after fiscal year-end
**Contains**:
- Audited financial statements (income statement, balance sheet, cash flow)
- Comprehensive business description and strategy
- Risk factors (Item 1A—mandatory risk disclosure)
- Management's Discussion and Analysis (MD&A) of financial performance
- Executive compensation details
- Corporate governance structure
- Related-party transactions

**Agent Use**: Valuation agents use 10-K financial statements for DCF models; Retrieval agents use MD&A for context; Risk agents extract risk factor disclosures.

**Freshness**: Updated once yearly; most recent snapshot available within 90 days of fiscal year-end

**Reliability**: Very high (audited by Big Four accounting firms, verified by SEC)

### 10-Q: Quarterly Report
**Filed**: Within 40-45 days after quarter-end
**Contains**:
- Unaudited quarterly financial statements
- Updated MD&A for quarter
- Related-party transactions for quarter
- Legal proceedings updates
- Risk factor updates

**Agent Use**: Valuation agents use quarterly financials to track trends; Retrieval agents use MD&A for quarterly context; Dashboard agents identify quarterly inflection points.

**Freshness**: Updated four times yearly; available within 45 days of quarter-end

**Reliability**: High (reviewed but not audited; less thorough than 10-K audits)

### 8-K: Current Report
**Filed**: Within 4 business days of material event
**Contains**:
- Material acquisitions or dispositions
- Bankruptcy or receivership
- Changes in control
- Costs associated with exit or disposal activities
- Completion of acquisition or disposition
- Amendments to charter or bylaws
- Changes in auditor or audit-related items
- Significant debt transactions
- Officer or director departures or appointments

**Agent Use**: Risk agents monitor 8-Ks for unexpected corporate events; Retrieval agents summarize material announcements; Valuation agents adjust models based on M&A announcements.

**Freshness**: Updated in real-time as material events occur; available within 4 days

**Reliability**: High (material events are rigorously defined by SEC)

### Proxy Statements (DEF 14A)
**Filed**: At least 10 days before shareholder meeting (typically annual)
**Contains**:
- Executive compensation in detail
- Board composition and independence
- Say-on-pay vote information
- Compensation governance
- Shareholder proposals
- Director and executive officer biographies

**Agent Use**: Retrieval agents extract executive compensation trends; Risk agents identify governance risks; Dashboard agents visualize compensation vs. performance.

**Freshness**: Annual; typically filed in March-April for summer shareholder meetings

**Reliability**: High (audited compensation disclosure; required for public companies)

### Global Equivalents
Beyond US SEC filings, Agentii accesses:
- **UK**: RNS (Regulatory News Service) announcements and annual reports (Form 20-F for US-listed foreign private issuers)
- **EU**: Official gazette filings and stock exchange disclosures
- **Canada**: SEDAR filings
- **Japan**: Stock exchange filings

**Freshness**: Varies by jurisdiction (1-10 days typical for material disclosures)

**Reliability**: High (government-mandated regulatory filing)

---

## Investor Relations Communications

**Importance**: Forward-looking context and management interpretation. More timely than SEC filings.

### Earnings Call Transcripts
**When Available**: Day of or 1-3 days after earnings announcement
**Contains**:
- Prepared remarks from CEO and CFO
- Question and answer session with analysts
- Forward guidance (revenue, EPS, capex, etc.)
- Management color on competitive dynamics
- Explanation of results vs. consensus
- Capital allocation plans
- Strategic initiatives and priorities

**Agent Use**: Retrieval agents synthesize transcript to extract key messages and surprises; Risk agents identify concerns raised; Dashboard agents identify inflection points in strategy.

**Freshness**: Same day to 3 days after earnings

**Reliability**: High (official company communications; audited for material accuracy)

**Special Value**: Q&A section provides unique insight into analyst views and management concerns.

### Earnings Release
**When Available**: Date of earnings announcement
**Contains**:
- Key financial metrics (revenue, EPS, margins)
- Segment performance
- Forward guidance
- Conference call details and participant information
- Official company commentary on results

**Agent Use**: Quick retrieval of headline numbers; baseline for comparing to consensus.

**Freshness**: Same day as earnings announcement

**Reliability**: Very high (official announcement; subject to SEC scrutiny)

### Investor Presentations and Investor Day Materials
**When Available**: Varies (earnings calls, investor conferences, dedicated investor days)
**Contains**:
- Strategic positioning and market opportunity
- Competitive differentiation
- Capital allocation and return targets
- Growth initiatives
- Investment thesis articulation
- Long-term guidance (when provided)

**Agent Use**: Dashboard agents identify strategic positioning; Retrieval agents extract growth expectations; Risk agents identify strategic risks.

**Freshness**: As presented (sometimes 6-12 months old if from annual investor day)

**Reliability**: Medium-high (less audited than filings but official company positioning)

### Management Guidance
**When Available**: Typically quarterly with earnings
**Contains**:
- Revenue guidance (often as range)
- EPS guidance
- Operating margin targets
- Capex expectations
- Growth rate expectations

**Agent Use**: Valuation agents use guidance as input to DCF models; Retrieval agents track guidance trends; Dashboard agents compare actual vs. guided.

**Freshness**: Quarterly with earnings; sometimes mid-quarter announcements if significant changes

**Reliability**: Very high (public guidance subject to forward-looking statement liability)

---

## Brokerage & Sell-Side Research

**Importance**: Professional analyst interpretation and models. Forward-looking perspective.

### Equity Research Reports
**When Available**: Initiated coverage (varies), quarterly updates (quarterly), special reports (irregular)
**Contains**:
- Analyst rating (buy/hold/sell) and price target
- Financial model and assumptions
- Competitive analysis
- Valuation methodology and ranges
- Risk assessment
- Investment thesis articulation

**Agent Use**: Valuation agents reference analyst models; Retrieval agents extract consensus and outlier views; Risk agents identify analyst concerns.

**Freshness**: Initial reports vary in timing; quarterly updates typically within 2-3 weeks of earnings

**Reliability**: Medium (subject to conflicts of interest and analyst bias; best used when multiple analysts agree)

### Initiation Reports
**When Available**: When analyst begins covering a stock (variable timing)
**Contains**:
- Comprehensive industry background
- Company positioning within industry
- Initial financial model
- Initial rating and price target
- Key catalysts and risks identified

**Agent Use**: Retrieval agents pull industry context and analyst thesis; Valuation agents reference initial model framework; Risk agents identify risks from inception.

**Freshness**: Timing varies widely; some stocks initiated on public debut, others after significant news

**Reliability**: Medium (first pass often more bullish; later quarterly updates more balanced)

### Quarterly Notes and Flash Reports
**When Available**: Within 1-3 days of earnings
**Contains**:
- Quick reaction to earnings
- Update to financial model
- Thesis change (if any)
- Flash assessment of results vs. consensus

**Agent Use**: Retrieval agents capture immediate analyst reaction; Valuation agents see model adjustments; Dashboard agents identify sentiment shifts.

**Freshness**: 1-3 days after earnings (very timely)

**Reliability**: Medium (preliminary reaction; subject to bias and incomplete analysis)

### Target Price Revisions
**When Available**: Whenever analyst updates recommendation
**Contains**:
- New price target (and previous target)
- Rationale for change
- Updated assumptions
- Thesis articulation

**Agent Use**: Dashboard agents identify analyst sentiment shifts; Retrieval agents extract valuation rationale; Valuation agents benchmark against consensus.

**Freshness**: Variable (could be quarterly, or triggered by news)

**Reliability**: Medium (individual analyst views; check consensus before relying on single analyst)

---

## Expert Network Insights

**Importance**: Primary research. Direct access to market participants' perspectives.

### Expert Network Calls
**When Available**: Ongoing (can be requested on demand)
**Contains**:
- Supplier insights (understanding customer orders and trends)
- Distributor perspectives (sell-through and inventory dynamics)
- Competitor insights (competitive positioning and products)
- Customer feedback (usage patterns and satisfaction)
- C-suite perspectives (strategic plans and concerns)
- SME (subject matter expert) opinions on industry trends

**Agent Use**: Risk agents identify supply chain risks; Retrieval agents gather competitive intelligence; Dashboard agents assess market positioning.

**Freshness**: Recent (within weeks of expert conversation)

**Reliability**: Medium (firsthand observations but potentially biased; expert may have limited visibility or axe to grind)

### Expert Guidance Documentation
**When Available**: Post-interview summaries
**Contains**:
- Interview date and expert background
- Key takeaways and observations
- Quantified data (if shared by expert)
- Outlook and trends identified

**Agent Use**: Consolidated expert views on industry dynamics and competitive positioning.

**Freshness**: Same as underlying expert calls

**Reliability**: Medium (depends on expert quality and transparency)

---

## Industry Intelligence & Data

**Importance**: Supply-side and demand-side insights. Often forward-looking.

### Industry Association Data
**When Available**: Variable by association (sometimes real-time, sometimes quarterly/annual)
**Examples**:
- Semiconductor (SEMI): production data, wafer starts, equipment shipments
- Automotive (SEMA): unit sales, inventory levels, consumer sentiment
- Retail (NRF): same-store sales, traffic data
- Telecom (GSMA): subscriber data, penetration rates

**Agent Use**: Dashboard agents identify industry trends; Valuation agents use industry growth as input; Risk agents assess cyclicality.

**Freshness**: Variable (SEMI wafer starts monthly; some automotive data weekly; others annual)

**Reliability**: High (official industry source; audited where applicable)

### Market Research Reports
**When Available**: Variable (some quarterly, some annual, some on-demand)
**Sources**: Gartner, IDC, Forrester, eMarketer, Statista, others
**Contains**:
- Market sizing and forecasts
- Vendor market share
- Technology trends and adoption rates
- Customer satisfaction and preference data
- Industry forecasts and CAGR expectations

**Agent Use**: Valuation agents use TAM estimates for growth modeling; Dashboard agents assess market share; Risk agents identify disruption risks.

**Freshness**: Typically annual forecasts with quarterly updates

**Reliability**: Medium (often based on surveys and estimates; best validated against other sources)

### Production and Supply Chain Data
**When Available**: Varies (some real-time, some with lag)
**Sources**: Customs data, logistics networks, industry trackers
**Contains**:
- Production volumes by region
- Capacity utilization rates
- Supply chain flows
- Inventory levels (estimated)

**Agent Use**: Risk agents assess supply chain risks; Dashboard agents identify capacity constraints; Retrieval agents verify manufacturing trends.

**Freshness**: Varies (customs data 1-3 months delayed; logistics near real-time)

**Reliability**: Medium (subject to estimation and interpretation)

---

## News & Media Intelligence

**Importance**: Real-time market reaction and emerging intelligence. Often first signal of developments.

### Wire Services
**Source**: Bloomberg, Reuters, Dow Jones, others
**Contents**:
- Breaking news on companies and industries
- Market reactions and sentiment
- Analyst updates to ratings/estimates
- Economic data releases
- Macro developments

**Agent Use**: Risk agents monitor for emerging risks; Retrieval agents track news sentiment; Dashboard agents identify inflection points.

**Freshness**: Real-time to same day

**Reliability**: High (professional editorial standards; fact-checked before publication)

### Trade Publications
**Examples**: Industry-specific publications
- Tech: The Information, Protocol, Semafor
- Finance: American Banker, Financial News
- Automotive: Automotive News
- Pharma: STAT News, FiercePharma
- Healthcare: Modern Healthcare
- Retail: Retail Dive, Store Dive

**Contents**:
- Industry-specific news and analysis
- Expert commentary on trends
- Regulatory updates
- M&A and partnership announcements

**Agent Use**: Retrieval agents synthesize industry trends; Risk agents identify regulatory risks; Dashboard agents assess competitive dynamics.

**Freshness**: Daily to weekly

**Reliability**: Medium-high (professional editorial standards but may have industry bias)

### Earnings Call Summaries & Commentary
**Sources**: Bloomberg, Reuters, financial media
**Contents**:
- Professional summarization of earnings highlights
- Analyst commentary on implications
- Consensus reaction
- Forward-looking implications identified

**Agent Use**: Dashboard agents use summaries for consensus sentiment; Retrieval agents verify against full transcripts; Risk agents identify key risks flagged.

**Freshness**: Same day as earnings

**Reliability**: Medium (subject to editorial judgment on what's important)

---

## Data Freshness by Source: Quick Reference

| Source Category | Update Frequency | Typical Lag | Reliability |
|-----------------|-----------------|------------|-------------|
| **SEC Filings (10-K, 10-Q, 8-K)** | 10-K: Annual; 10-Q: Quarterly; 8-K: Real-time | 0-90 days | Very High |
| **Earnings Releases** | Quarterly | Same day | Very High |
| **Earnings Call Transcripts** | Quarterly | 0-3 days | Very High |
| **Investor Presentations** | Annual + Irregular | 0-30 days | High |
| **Equity Research Reports** | Quarterly updates + Event-driven | 2-14 days (quarterly) | Medium |
| **Price Targets** | Event-driven | Same day to weeks | Medium |
| **Expert Network Calls** | On-demand | 0-30 days | Medium |
| **Industry Association Data** | Varies (Monthly-Annual) | 0-30 days | High |
| **Market Research Reports** | Annual + Quarterly updates | 30-90 days | Medium |
| **Wire Service News** | Real-time | 0 days | High |
| **Trade Publications** | Daily-Weekly | 1-3 days | Medium-High |
| **Supply Chain Data** | Varies (Weekly-Quarterly) | 0-90 days | Medium |

---

## Source Characteristics Summary

### Use When You Need...

**Official, audited data**
→ SEC filings (10-K, 10-Q, 8-K)

**Forward-looking management guidance**
→ Earnings calls, earnings releases, investor presentations

**Professional analyst interpretation**
→ Equity research reports, price targets

**Primary research insights**
→ Expert network calls, industry data

**Real-time market reaction**
→ Wire services, media coverage

**Industry trends and sizing**
→ Market research reports, industry association data

**Supply chain/operational insight**
→ Production data, inventory data, customs data

**Comprehensive view (all perspectives)**
→ Combination of SEC filings (actuals) + analyst reports (interpretation) + expert calls (primary insights) + media (reactions)

---

## Next Steps

- **Want to understand data quality assurance?** See [Data Quality](/docs/01-data-and-sources/data-quality.md)
- **Want to know how to interpret multi-source analysis?** See [Results Analysis](/docs/02-intelligence-hub/results-analysis.md)
- **Want guidance on agent configuration for different source needs?** See [Agent Configuration](/docs/02-intelligence-hub/agents-configuration.md)
- **Want common workflow patterns?** See [Project Workflows](/docs/02-intelligence-hub/project-workflows.md)
