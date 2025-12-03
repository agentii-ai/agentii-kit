---
title: "Project Workflows"
description: "Master proven workflows: earnings cycle analysis, coverage initiation, M&A screening, portfolio monitoring, and sector rotation patterns from institutional investors."
author: "Agentii Documentation"
date: "2025-01-26"
updated: "2025-01-26"
audience: "Advanced"
domain: "Intelligence Hub"
tags: ["workflows", "patterns", "best practices", "earnings", "coverage", "monitoring"]
relatedDocs:
  - "/docs/02-intelligence-hub/hub-fundamentals.md"
  - "/docs/02-intelligence-hub/projects-guide.md"
  - "/docs/02-intelligence-hub/tasks-guide.md"
  - "/docs/02-intelligence-hub/snapshots-guide.md"
  - "/docs/05-best-practices/project-design.md"
  - "/docs/06-use-cases/equity-research-overview.md"
---

# Project Workflows Guide

This guide presents proven workflows and patterns from institutional investors using Intelligence Hub. Each workflow includes step-by-step project setup, snapshot design, task configuration, and synthesis strategies.

---

## Workflow 1: Quarterly Earnings Cycle Analysis

### Overview

**Purpose**: Comprehensive earnings analysis from pre-earnings expectations through post-earnings thesis update.

**Timeline**: 3-4 weeks (2 weeks pre-earnings, earnings day, 1 week post-earnings)

**Typical output**: Updated price target, rating confirmation/change, investment thesis refinement

**Best for**: Active coverage stocks, high-conviction positions, client-facing research

---

### Project Setup

**Project name**: "[Company] Q[X] [Year] Earnings Cycle"

**Example**: "Apple Q4 2024 Earnings Cycle"

**Configuration**:
- **Primary ticker**: AAPL
- **Related tickers**: MSFT, GOOGL, NVDA (peers for comparative context)
- **Sector**: Technology
- **Lookback period**: 8 quarters
- **Description**: "Comprehensive Q4 earnings analysis focused on iPhone demand trends, Services revenue growth, and margin sustainability. Key risks: China demand, competitive positioning, regulatory pressure."

---

### Phase 1: Pre-Earnings (2 weeks before announcement)

#### Snapshot 1: Pre-Earnings Expectations

**Snapshot name**: "Q4 2024 Pre-Earnings Analysis"

**Description**: "Build earnings expectations model 2 weeks before announcement. Establish baseline for revenue, EPS, and key segment metrics."

**Tasks** (7-10 tasks):

1. **Consensus Expectations Retrieval**
   - Agent: Retrieval - Financial Metrics
   - Prompt: "Retrieve analyst consensus estimates for Apple Q4 2024: revenue, EPS, gross margin, iPhone revenue, Services revenue. Provide range (low/high) and mean estimates from at least 10 analysts."

2. **Historical Earnings Pattern Analysis**
   - Agent: Retrieval - Financial Metrics
   - Prompt: "Analyze Apple's historical Q4 earnings patterns over past 5 years. Focus on: typical beat/miss magnitude, guidance accuracy, seasonal trends, and key surprise factors."

3. **Management Guidance Review**
   - Agent: Retrieval - Management Commentary
   - Prompt: "Summarize Apple management's Q3 guidance for Q4 provided on the August earnings call. What metrics did management guide to? What qualitative commentary was provided about demand, supply chain, or competitive factors?"

4. **Pre-Earnings DCF Valuation**
   - Agent: DCF Valuation
   - Prompt: "Build DCF valuation for Apple using consensus FY2024-2026 estimates. Use WACC of 8%, terminal growth of 3%, target operating margin of 30%. Provide base, bear (+15% downside), and bull (+15% upside) cases."

5. **Key Risk Identification**
   - Agent: Risk - Risk Factor
   - Prompt: "Identify top 5 risks facing Apple heading into Q4 earnings. Focus on: iPhone demand (especially China), Services growth sustainability, margin pressure, competitive threats, regulatory risks. Rank by severity and probability."

6. **Comparable Company Check**
   - Agent: Comparable Company
   - Prompt: "Compare Apple's current valuation multiples (P/E, EV/EBITDA, P/S) to Microsoft, Google, and NVIDIA. Is Apple trading at a premium or discount? Justify based on growth and profitability profiles."

7. **Earnings Call Prep Questions**
   - Agent: Retrieval - Management Commentary
   - Prompt: "Based on recent investor concerns and industry trends, suggest 5 key questions to ask Apple management on the Q4 earnings call. Focus on iPhone unit sales vs. ASP, Services growth drivers, AI product roadmap, and capital allocation."

**Execution**:
- Run all 7 tasks in parallel (use Professional plan's 32-task limit if analyzing multiple stocks)
- Review results within 24 hours
- Synthesize findings into pre-earnings model

---

### Phase 2: Earnings Day (day of announcement)

#### Snapshot 2: Earnings Announcement Analysis

**Snapshot name**: "Q4 2024 Earnings - Day of Announcement"

**Description**: "Immediate analysis of actual Q4 results vs. consensus and our pre-earnings expectations. Conducted within 2-3 hours of earnings release."

**Tasks** (3-5 tasks):

1. **Actuals vs. Consensus Comparison**
   - Agent: Retrieval - Financial Metrics
   - Prompt: "Compare Apple's actual Q4 2024 results to consensus estimates: revenue (beat/miss by $X, Y%), EPS (beat/miss by $X, Y%), iPhone revenue, Services revenue, gross margin. Identify key surprises."

2. **Management Commentary Tone Analysis**
   - Agent: Retrieval - Management Commentary
   - Prompt: "Analyze management's tone and key messages from Q4 earnings call. What changed from Q3 commentary? What guidance was provided for Q1 2025? What risks or opportunities were highlighted?"

3. **Immediate Valuation Update**
   - Agent: DCF Valuation
   - Prompt: "Update DCF valuation using actual Q4 results and revised management guidance for Q1 2025. Maintain prior WACC (8%) and terminal growth (3%). Provide updated fair value estimate."

4. **Earnings Surprise Analysis**
   - Agent: Retrieval - Financial Metrics
   - Prompt: "Identify the biggest positive and negative surprises in Apple's Q4 results. For each surprise, explain: (1) What was expected? (2) What actually happened? (3) Why did it happen? (4) Is this one-time or a trend?"

5. **Market Reaction Contextualization**
   - Agent: Dashboard - Trend Analysis
   - Prompt: "Visualize Apple's stock price reaction to Q4 earnings (day of and day after). Compare to historical earnings reactions. Is current reaction typical or unusual? What does market seem focused on?"

**Execution**:
- Run immediately after earnings release
- Review results within 2 hours
- Send quick take to portfolio manager or investment committee

---

### Phase 3: Post-Earnings (1 week after announcement)

#### Snapshot 3: Post-Earnings Synthesis

**Snapshot name**: "Q4 2024 Post-Earnings Synthesis"

**Description**: "Final thesis update after digesting earnings, management commentary, and market reaction. Updated price target and rating recommendation."

**Tasks** (5-7 tasks):

1. **Thesis Evolution Assessment**
   - Agent: Retrieval - Management Commentary
   - Prompt: "Compare our pre-earnings thesis on Apple (from 2 weeks ago) to actual Q4 results and management commentary. What changed? What was validated? What surprised us? Update investment thesis accordingly."

2. **Revised DCF with Full Integration**
   - Agent: DCF Valuation
   - Prompt: "Build comprehensive DCF valuation incorporating Q4 actuals, Q1 guidance, and any updated FY2025-2027 assumptions. Provide full sensitivity analysis (revenue growth ±200 bps, WACC ±100 bps, terminal growth ±50 bps). This is our official price target."

3. **Updated Risk Assessment**
   - Agent: Risk - Downside Scenario
   - Prompt: "Based on Q4 results and management commentary, model 2 downside scenarios: (1) iPhone demand declines 10% in China, (2) Services growth decelerates to 5% (vs. 10% historical). What's the fair value in each scenario?"

4. **Peer Comparison Post-Earnings**
   - Agent: Comparable Company
   - Prompt: "Now that Apple, Microsoft, and Google have all reported Q4 earnings, compare their results: revenue growth, margin trends, guidance. Has relative positioning changed? Should Apple's valuation premium/discount adjust?"

5. **Next Catalysts Identification**
   - Agent: Retrieval - Industry Research
   - Prompt: "Identify the next 3-5 key catalysts for Apple stock over the next 3-6 months. Consider: product launches (iPhone 16), regulatory developments (EU DMA), geographic demand trends (China), and competitive threats. Provide timeline for each."

6. **Recommendation Synthesis**
   - Agent: Custom - Thesis Synthesis (if you have this custom agent)
   - Prompt: "Synthesize all post-earnings findings into clear investment recommendation: (1) Rating (Buy/Hold/Sell), (2) 12-month price target with conviction level, (3) Top 3 reasons to own, (4) Top 3 risks, (5) Key monitoring points for next quarter."

**Execution**:
- Run 3-5 days after earnings (after market digests results)
- Review results over 1-2 days
- Finalize research report and price target
- Communicate to clients or portfolio manager
- Archive project or keep open for Q1 monitoring

---

### Workflow Success Metrics

**Time savings**: 10-15 hours vs. manual analysis (agent parallel execution, automated data retrieval)

**Output quality**: Multi-agent consensus, validated assumptions, documented methodology

**Repeatability**: Copy snapshot structure to next quarter; reuse task templates

---

## Workflow 2: Coverage Initiation

### Overview

**Purpose**: Comprehensive foundational research to initiate coverage on a new stock.

**Timeline**: 3-4 weeks

**Typical output**: Research initiation report with Buy/Hold/Sell rating, 12-month price target, investment thesis

**Best for**: Starting coverage on new stock, portfolio addition evaluation, competitive intelligence

---

### Project Setup

**Project name**: "[Company] Coverage Initiation [Year]"

**Example**: "Tesla Coverage Initiation 2025"

**Configuration**:
- **Primary ticker**: TSLA
- **Related tickers**: GM, F, RIVN, NIO (auto peers)
- **Sector**: Consumer Discretionary (or Technology, depending on classification)
- **Lookback period**: 12 quarters (3 years of historical data)
- **Description**: "Initiating coverage on Tesla. Focus areas: EV market share trends, profitability sustainability, valuation vs. auto and tech peers, execution risk on FSD and robotaxi, China competitive dynamics."

---

### Phase 1: Foundational Research (Week 1)

#### Snapshot 1: Business Model & Competitive Positioning

**Tasks** (8-10 tasks):

1. **Company Overview**: Business model, revenue streams, organizational structure
2. **Product Portfolio**: Current products, pipeline, competitive differentiation
3. **Management Quality**: Key executives, track record, strategic vision
4. **Industry Overview**: EV market size, growth trends, competitive landscape
5. **Competitive Positioning**: Market share, competitive advantages, threats
6. **Customer Analysis**: Target demographics, brand strength, loyalty metrics
7. **Technology Assessment**: Proprietary tech, R&D capabilities, innovation pipeline
8. **Regulatory Environment**: Industry regulations, subsidies, policy risks

**Agent types**: Primarily Retrieval agents (Company Overview, Industry Research, Management Commentary)

**Execution**: Run all tasks in parallel; review and synthesize over 2-3 days

---

### Phase 2: Financial Analysis (Week 2)

#### Snapshot 2: Historical Financial Performance

**Tasks** (10-12 tasks):

1. **Revenue Trends**: Historical revenue growth by segment, geographic mix
2. **Margin Analysis**: Gross margin, operating margin, net margin trends and drivers
3. **Profitability Sustainability**: One-time items, normalized earnings, ROIC trends
4. **Balance Sheet Strength**: Leverage, liquidity, asset quality
5. **Cash Flow Generation**: FCF trends, conversion rates, capital intensity
6. **Capital Allocation**: Capex, R&D, dividends/buybacks, M&A
7. **Working Capital**: Inventory turns, receivables, payables dynamics
8. **Off-Balance Sheet**: Leases, pension obligations, contingent liabilities
9. **Segment Performance**: Automotive vs. Energy vs. Services contributions
10. **Geographic Performance**: North America, Europe, China revenue and margin trends

**Agent types**: Retrieval - Financial Metrics, Dashboard - Trend Analysis

**Execution**: Run in parallel; build financial model manually using agent outputs as inputs

---

### Phase 3: Valuation (Week 3)

#### Snapshot 3: Multi-Method Valuation

**Tasks** (8-10 tasks):

1. **DCF Base Case**: 5-year DCF with consensus assumptions
2. **DCF Bull Case**: High-growth scenario (FSD success, robotaxi launch)
3. **DCF Bear Case**: Downside scenario (EV demand decline, margin compression)
4. **Comparable Company - Auto Peers**: P/E, EV/EBITDA vs. GM, Ford
5. **Comparable Company - Tech Peers**: P/S, EV/Sales vs. high-growth tech
6. **Precedent Transactions**: Recent auto/EV M&A multiples
7. **Sum-of-the-Parts**: Separate valuation for Automotive, Energy, Services, FSD
8. **Sensitivity Analysis**: Revenue growth, margin, and WACC sensitivities
9. **Scenario Weighting**: Probability-weight bull/base/bear cases
10. **Valuation Summary**: Triangulated fair value from all methods

**Agent types**: All Valuation agents (DCF, Comparable Company, Precedent Transaction, Sum-of-the-Parts)

**Execution**: Run valuation agents in parallel; synthesize into valuation range and price target

---

### Phase 4: Risk & Final Synthesis (Week 4)

#### Snapshot 4: Risk Assessment

**Tasks** (6-8 tasks):

1. **Top Risks Identification**: Systematic risk ranking
2. **Downside Scenario 1**: EV demand slowdown (model impact)
3. **Downside Scenario 2**: China competitive pressure (model impact)
4. **Downside Scenario 3**: FSD regulatory failure (model impact)
5. **Credit Risk**: Leverage, covenant compliance, refinancing risk
6. **Competitive Threats**: New entrants, technology disruption
7. **ESG Risks**: Environmental liabilities, social controversies, governance concerns
8. **Tail Risks**: Black swan scenarios (CEO departure, product recalls)

**Agent types**: All Risk agents (Risk Factor, Downside Scenario, Credit Risk, Competitive Threat)

#### Snapshot 5: Final Recommendation

**Tasks** (3-5 tasks):

1. **Thesis Synthesis**: Combine all findings into investment thesis
2. **Recommendation**: Buy/Hold/Sell rating with conviction level
3. **Price Target**: 12-month target with valuation method summary
4. **Key Catalysts**: Events that will drive stock over next 12 months
5. **Monitoring Points**: Metrics to track for thesis validation

**Agent types**: Custom synthesis agent or manual synthesis of all prior results

**Execution**: Review all prior snapshots; write research initiation report; present to investment committee

---

### Workflow Success Metrics

**Time savings**: 20-30 hours vs. manual research

**Comprehensive coverage**: 40-50 analytical tasks across all dimensions

**Audit trail**: Complete documentation of methodology and assumptions

---

## Workflow 3: Portfolio Monitoring (Ongoing Surveillance)

### Overview

**Purpose**: Quarterly or monthly check-ins on existing holdings to monitor thesis, identify risks, and update valuations.

**Timeline**: Recurring (monthly or quarterly)

**Typical output**: Updated investment memo, hold/trim/add recommendations

**Best for**: Active portfolio holdings, risk monitoring, thesis validation

---

### Project Setup

**Project name**: "[Company] Portfolio Monitoring [Year]"

**Example**: "Amazon Portfolio Monitoring 2025"

**Configuration**:
- **Primary ticker**: AMZN
- **Related tickers**: WMT, SHOP, GOOGL (retail and cloud peers)
- **Sector**: Consumer Discretionary / Technology
- **Lookback period**: 8 quarters
- **Description**: "Ongoing surveillance of Amazon position. Monthly check-ins on AWS growth, retail margins, competitive positioning, and investment thesis validation."

---

### Recurring Snapshot Pattern

#### Monthly Snapshot: "[Month] [Year] Monitoring"

**Example**: "January 2025 Monitoring"

**Tasks** (5-8 tasks - lightweight, repeatable):

1. **News and Developments Review**
   - Agent: Retrieval - Industry Research
   - Prompt: "Summarize key news and developments for Amazon in the past 30 days: product launches, competitive moves, regulatory changes, management commentary, analyst upgrades/downgrades."

2. **Thesis Validation Check**
   - Agent: Retrieval - Financial Metrics
   - Prompt: "Our investment thesis for Amazon centers on: (1) AWS growth at 20%+, (2) Retail margin expansion to 5%+, (3) Market share gains in e-commerce. Review latest data (if quarterly earnings occurred) or industry indicators to assess whether thesis remains intact."

3. **Risk Monitoring**
   - Agent: Risk - Risk Factor
   - Prompt: "Review top 5 risks to Amazon thesis: (1) AWS competitive pressure from Azure/GCP, (2) Retail margin compression, (3) Regulatory antitrust risk, (4) Labor cost inflation, (5) International expansion challenges. Have any of these risks intensified or materialized in the past 30 days?"

4. **Valuation Quick Check**
   - Agent: Comparable Company
   - Prompt: "Compare Amazon's current valuation multiples (P/E, EV/EBITDA, P/S) to Walmart, Shopify, and Google. Has relative valuation changed significantly (>10%) in the past month? If so, why?"

5. **Catalyst Tracking**
   - Agent: Retrieval - Management Commentary
   - Prompt: "Track progress on key catalysts we identified for Amazon: (1) Q4 earnings (late January), (2) AWS new product announcements, (3) Prime membership growth disclosure, (4) International expansion updates. Have any catalysts been triggered or updated?"

6. **Position Recommendation**
   - Agent: Custom - Position Sizing (if available)
   - Prompt: "Based on this month's findings, recommend portfolio action: (1) Hold at current weight, (2) Add (specify target weight increase), (3) Trim (specify target weight decrease). Justify recommendation based on thesis validation, risk changes, and valuation."

**Execution**:
- Run on 1st business day of each month
- Review results same day or within 24 hours
- Update portfolio manager with any material changes
- Archive snapshot and move to next month

**Quarterly Deep Dive** (if earnings occurred):
- Add 3-5 additional tasks for earnings analysis (similar to Workflow 1 - Earnings Cycle)
- Update DCF valuation with latest results
- Refine 12-month price target

---

### Workflow Success Metrics

**Consistency**: Same tasks each month enable trend tracking

**Early warning**: Identify thesis deterioration before major stock moves

**Efficiency**: 5-8 tasks take 30-60 minutes to review (vs. 3-4 hours manual monitoring)

---

## Workflow 4: M&A Target Screening

### Overview

**Purpose**: Systematic screening of potential acquisition targets for private equity, corporate development, or activist investors.

**Timeline**: 6-10 weeks

**Typical output**: Ranked target list with valuations, strategic fit assessments, and acquisition recommendations

**Best for**: Buy-side M&A teams, corporate development, activist campaigns

---

### Project Setup

**Project name**: "[Industry/Criteria] M&A Target Screening [Year]"

**Example**: "Industrial Automation M&A Screening 2025"

**Configuration**:
- **Primary ticker**: N/A (screening project, not single stock)
- **Related tickers**: 10-15 potential target tickers
- **Sector**: Industrials
- **Lookback period**: 8 quarters
- **Description**: "Screening industrial automation companies for acquisition. Criteria: Revenue $500M-$2B, EBITDA margin >15%, US-based, founder-led preferred. Strategic rationale: Expand manufacturing automation capabilities, geographic presence, customer base."

---

### Phase 1: Financial Screening (Week 1-2)

#### Snapshot 1: Initial Financial Filters

**For each potential target (10-15 companies), run:**

1. **Revenue and Growth Check**
   - Prompt: "Confirm [Company] revenue is between $500M-$2B. Calculate 3-year revenue CAGR. Is revenue growth >5% annually?"

2. **Profitability Check**
   - Prompt: "Confirm [Company] EBITDA margin is >15%. Calculate trend over past 3 years (improving, stable, or declining)."

3. **Leverage Check**
   - Prompt: "Calculate [Company] Net Debt / EBITDA ratio. Is leverage <3x (acceptable for acquisition)?"

4. **Cash Flow Check**
   - Prompt: "Calculate [Company] FCF conversion (FCF / Net Income). Is conversion >80% (capital efficiency)?"

**Agent type**: Retrieval - Financial Metrics (fast, 1-2 min per company)

**Execution**: Run all screening tasks in parallel (15 companies × 4 tasks = 60 tasks total; Professional plan processes 32 at a time)

**Output**: Eliminate companies that fail financial screens; narrow to 5-7 finalists

---

### Phase 2: Valuation Analysis (Week 3-4)

#### Snapshot 2: Stand-Alone Valuation

**For each finalist (5-7 companies), run:**

1. **DCF Stand-Alone Valuation**
   - Prompt: "Build standalone DCF valuation for [Company] assuming no synergies. Use company's historical margins, consensus growth, industry WACC. Provide valuation range."

2. **Comparable Company Valuation**
   - Prompt: "Compare [Company] to peer group (list 4-5 public peers). What's the median EV/EBITDA and EV/Sales multiple? Apply to [Company] to estimate implied value."

3. **Precedent Transaction Analysis**
   - Prompt: "Review recent M&A transactions in industrial automation sector (past 3 years). What multiples were paid (EV/EBITDA, EV/Sales)? Apply to [Company] to estimate M&A valuation."

4. **Valuation Summary**
   - Prompt: "Synthesize DCF, Comps, and Precedent methods. What's the estimated acquisition price range for [Company]? Is valuation attractive relative to strategic value?"

**Agent types**: Valuation agents (DCF, Comparable Company, Precedent Transaction)

**Execution**: Run valuation tasks for all finalists in parallel

**Output**: Valuation range ($X-Y per share or $X-Y enterprise value) for each target

---

### Phase 3: Strategic Fit (Week 5-6)

#### Snapshot 3: Strategic Fit Assessment

**For each finalist, run:**

1. **Synergy Quantification**
   - Agent: Custom - Synergy Analysis (or Valuation agent with custom prompt)
   - Prompt: "Estimate revenue synergies (cross-sell opportunities, geographic expansion) and cost synergies (G&A elimination, procurement scale) from acquiring [Company]. Provide low/base/high synergy estimates with timeframe to realization."

2. **Integration Complexity**
   - Agent: Retrieval - Management Commentary
   - Prompt: "Assess integration complexity for [Company]: technology stack compatibility, cultural fit (founder-led vs. corporate), customer concentration risk, geographic footprint overlap. Rate integration risk as Low/Medium/High."

3. **Competitive Impact**
   - Agent: Risk - Competitive Threat
   - Prompt: "How would acquiring [Company] change our competitive positioning in industrial automation? Would this transaction trigger competitive responses? Identify risks and opportunities."

4. **Strategic Rationale**
   - Agent: Retrieval - Industry Research
   - Prompt: "Explain strategic rationale for acquiring [Company]: What capabilities does it add? What markets does it unlock? How does it fit with our long-term strategy (manufacturing automation expansion)?"

**Execution**: Run strategic fit tasks for all finalists

**Output**: Strategic fit score (Low/Medium/High) for each target

---

### Phase 4: Final Recommendation (Week 7-8)

#### Snapshot 4: Recommendation Synthesis

**For top 2-3 targets, run:**

1. **Offer Price Recommendation**
   - Prompt: "Based on standalone valuation ($X-Y) and synergy value ($A-B), recommend offer price for [Company]. Consider: (1) Seller expectations, (2) Competitive bidding risk, (3) Maximum price we can justify to our board."

2. **Deal Structure Recommendation**
   - Prompt: "Recommend deal structure: cash vs. stock mix, earnouts (if any), retention packages for key management. Consider: seller's tax situation, our capital availability, need to incentivize management post-close."

3. **Risk Assessment**
   - Prompt: "Identify top 5 risks to acquiring [Company]: integration challenges, customer attrition, regulatory approval delays, hidden liabilities, competitive response. Rank by severity and probability. Recommend mitigation strategies."

4. **GO/NO-GO Recommendation**
   - Prompt: "Synthesize findings into clear recommendation: PURSUE (initiate formal bid process), MONITOR (attractive but not urgent; revisit in 6 months), or PASS (not strategic fit or valuation too high). Justify recommendation based on strategic fit, valuation, and risk assessment."

**Execution**: Deep synthesis of all prior snapshots

**Output**: Final M&A recommendation memo with ranked target list and offer price ranges

---

### Workflow Success Metrics

**Systematic coverage**: 10-15 targets screened comprehensively (vs. 3-4 targets manually)

**Speed**: 6-8 weeks vs. 12-16 weeks for manual screening

**Documentation**: Complete audit trail for board presentation and deal approval

---

## Workflow 5: Sector Rotation Analysis

### Overview

**Purpose**: Comparative analysis of 5-10 peer companies to identify relative attractiveness and rotation opportunities.

**Timeline**: 2-4 weeks

**Typical output**: Sector ranking, overweight/underweight recommendations, rotation trade ideas

**Best for**: Macro-oriented investors, sector funds, tactical asset allocation

---

### Project Setup

**Project name**: "[Sector] Rotation Analysis [Quarter] [Year]"

**Example**: "Technology Sector Rotation - Q1 2025"

**Configuration**:
- **Primary ticker**: N/A (multi-company sector analysis)
- **Related tickers**: 8-10 sector constituents (e.g., AAPL, MSFT, GOOGL, NVDA, ORCL, CRM, ADBE, INTC)
- **Sector**: Technology
- **Lookback period**: 8 quarters
- **Description**: "Quarterly sector rotation analysis for technology holdings. Identify relative winners and losers based on growth, valuation, and risk. Recommend overweight/underweight tilts."

---

### Phase 1: Uniform Analysis Across All Companies (Week 1-2)

#### Snapshot 1: Financial Metrics Comparison

**For each of 8-10 companies, run identical tasks:**

1. **Revenue Growth**
   - Prompt: "Calculate [Company]'s revenue CAGR over past 4 quarters and forward revenue growth estimate for next 4 quarters."

2. **Profitability Trends**
   - Prompt: "Calculate [Company]'s gross margin, operating margin, and net margin for most recent quarter. Compare to 4-quarter average. Is profitability improving or declining?"

3. **FCF Generation**
   - Prompt: "Calculate [Company]'s FCF margin (FCF / Revenue) and FCF per share growth over past 4 quarters."

4. **Balance Sheet Strength**
   - Prompt: "Assess [Company]'s leverage (Net Debt / EBITDA) and liquidity (cash as % of market cap). Rate financial health as Strong/Adequate/Weak."

**Agent type**: Retrieval - Financial Metrics

**Execution**: Run all tasks in parallel (8 companies × 4 tasks = 32 tasks; fits Professional plan limit)

**Output**: Standardized financial metrics for all companies in comparable format

---

### Phase 2: Valuation Comparison (Week 2-3)

#### Snapshot 2: Relative Valuation Analysis

**For each company:**

1. **Current Multiples**
   - Prompt: "Calculate [Company]'s current P/E, EV/EBITDA, P/S, and P/FCF multiples."

2. **Historical Context**
   - Prompt: "Compare [Company]'s current multiples to its 3-year average multiples. Is stock trading at premium, discount, or in-line with historical average?"

3. **Peer-Relative Valuation**
   - Prompt: "Compare [Company]'s valuation multiples to sector median (technology sector). Is stock trading at premium or discount? Is premium/discount justified by growth and profitability differentials?"

4. **Growth-Adjusted Valuation**
   - Prompt: "Calculate [Company]'s PEG ratio (P/E divided by forward EPS growth rate). Compare to peers. Does valuation reflect growth prospects appropriately?"

**Agent type**: Comparable Company (for relative valuation)

**Execution**: Run valuation tasks in parallel

**Output**: Valuation matrix showing all companies' multiples side-by-side

---

### Phase 3: Risk and Quality Assessment (Week 3)

#### Snapshot 3: Risk-Adjusted Rankings

**For each company:**

1. **Business Quality Score**
   - Prompt: "Rate [Company]'s business quality on scale of 1-10 based on: competitive moat (switching costs, network effects, brand), returns on capital (ROIC), margin sustainability, growth visibility."

2. **Risk Assessment**
   - Prompt: "Identify top 3 risks for [Company]. Rate overall risk profile as Low/Medium/High compared to sector peers."

3. **Momentum and Sentiment**
   - Prompt: "Review [Company]'s recent analyst rating changes (past 90 days) and management commentary tone. Is sentiment improving, stable, or deteriorating?"

**Agent types**: Risk agents, Retrieval - Management Commentary

**Output**: Risk-adjusted quality scores for all companies

---

### Phase 4: Synthesis and Rotation Recommendations (Week 4)

#### Snapshot 4: Sector Rotation Playbook

**Cross-company synthesis tasks:**

1. **Relative Ranking**
   - Agent: Custom - Ranking Synthesis
   - Prompt: "Rank all 8-10 technology companies from most attractive (1) to least attractive (10) based on: (1) Growth prospects (30% weight), (2) Valuation (30%), (3) Business quality (25%), (4) Risk profile (15%). Provide ranked list with scores and brief justification for each."

2. **Overweight Recommendations**
   - Prompt: "Identify top 3 overweight candidates from ranked list. For each, explain: Why is this stock attractive? What's the expected 12-month return? What's the key catalyst? What portfolio weight do you recommend?"

3. **Underweight Recommendations**
   - Prompt: "Identify top 3 underweight candidates (bottom of ranked list). For each, explain: Why is this stock unattractive? What's the key risk? Should we reduce weight or exit entirely? What's the alternative allocation?"

4. **Pairs Trade Ideas**
   - Prompt: "Suggest 2-3 pairs trade ideas: long [attractive stock] vs. short [unattractive stock] within technology sector. Explain relative value rationale and expected spread movement."

5. **Sector-Level View**
   - Prompt: "Based on analysis of these 8-10 technology stocks, what's your overall view on technology sector? Overweight, neutral, or underweight relative to market? What's driving sector outlook (macro factors, earnings growth, valuation, rotation trends)?"

**Execution**: Synthesize all prior snapshots; manual review and judgment critical

**Output**: Quarterly sector rotation playbook with specific portfolio recommendations

---

### Workflow Success Metrics

**Systematic coverage**: All sector holdings analyzed uniformly (no favoritism)

**Actionable output**: Clear overweight/underweight recommendations

**Repeatability**: Run quarterly; track performance of prior rotation calls

---

## Best Practices Across All Workflows

### Practice 1: Standardize Recurring Workflows

For workflows you run repeatedly (earnings cycles, monitoring, sector rotation):
- **Create task templates**: Save task prompts for reuse
- **Copy snapshot structure**: Duplicate previous quarter's snapshots
- **Maintain naming conventions**: Consistent project and snapshot names

**Benefit**: 60-80% time savings on setup; institutional consistency

---

### Practice 2: Front-Load Retrieval Tasks

Run fast retrieval agents first to gather context:
- **Week 1**: Retrieval tasks (business overview, financial metrics, management commentary)
- **Week 2**: Valuation tasks (DCF, comps, precedent - require context from Week 1)
- **Week 3**: Risk tasks and synthesis (require valuation and context)

**Benefit**: Adaptive workflow; refine later tasks based on early findings

---

### Practice 3: Use Parallel Execution Strategically

Maximize throughput by running all independent tasks simultaneously:
- **Good**: 20 retrieval tasks in parallel (all independent)
- **Bad**: Run retrieval tasks one-by-one (no dependencies, but sequential = slow)

But respect logical dependencies:
- **Bad**: Run valuation and risk tasks before retrieval tasks complete (need context first)

---

### Practice 4: Build Reusable Agent Ensembles

For common analytical bundles, create ensembles:
- **"Comprehensive Valuation Ensemble"**: DCF + Comps + Precedent Transaction
- **"Risk Assessment Ensemble"**: Risk Factor + Downside Scenario + Competitive Threat
- **"Earnings Package Ensemble"**: Financial Metrics + Management Commentary + Valuation Update

**Benefit**: One-click execution of multi-agent analysis; consistency across projects

---

### Practice 5: Document Workflows in Project Descriptions

In project description, note:
- Workflow type (earnings cycle, coverage initiation, monitoring)
- Key dates (earnings announcement, thesis update deadlines)
- Decision criteria (what would change our view?)
- Historical performance (track accuracy of past recommendations)

**Benefit**: Institutional memory; onboard new team members; retrospective learning

---

## Next Steps

- **Ready to design your first project?** See [Projects Guide](/docs/02-intelligence-hub/projects-guide.md)
- **Need deeper understanding of snapshots?** See [Snapshots Guide](/docs/02-intelligence-hub/snapshots-guide.md)
- **Want to configure agents for workflows?** See [Agent Configuration](/docs/02-intelligence-hub/agents-configuration.md)
- **Looking for domain-specific workflows?** See [Use Cases by Financial Domain](/docs/06-use-cases/equity-research-overview.md)
- **Want best practices for institutional use?** See [Best Practices](/docs/05-best-practices/project-design.md)
