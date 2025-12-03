---
title: "Valuation Agents"
description: "DCF analysis, comparable company valuation, and precedent transaction methodologies for institutional equity research"
author: "Agentii Documentation"
date: "2025-11-26"
updated: "2025-11-26"
audience: "Advanced"
domain: "Both"
tags: ["valuation", "DCF", "comps", "precedent transactions", "equity valuation", "fair value"]
relatedDocs:
  - "/docs/04-agent-types/agent-overview.md"
  - "/docs/04-agent-types/retrieval-agents.md"
  - "/docs/01-data-and-sources/data-quality.md"
  - "/docs/06-use-cases/equity-initiation.md"
---

# Valuation Agents

Valuation agents provide quantitative equity valuation using institutional-grade methodologies: Discounted Cash Flow (DCF), comparable company analysis, and precedent transaction analysis. These agents translate financial statements and market data into fair value estimates, enabling analysts to assess whether securities are attractively priced relative to fundamental value.

For buy-side and sell-side analysts, valuation agents function as modeling assistants—building comprehensive valuation frameworks across multiple methodologies, stress-testing assumptions, and providing defensible fair value ranges for investment recommendations.

## Core Valuation Methodologies

### 1. Discounted Cash Flow (DCF) Analysis

**Methodology**: Projects company free cash flow over explicit forecast period (typically 5-10 years), discounts to present value, and adds terminal value.

**When to Use**:
- Companies with predictable cash flows
- Mature businesses with established operating history
- Situations where intrinsic value matters more than market sentiment
- Long-term investment horizon analysis

**Key Assumptions Required**:
- Revenue growth rate by year
- Operating margins (EBIT or EBITDA margins)
- Capital expenditure as % of revenue
- Net working capital requirements
- Tax rate
- Weighted Average Cost of Capital (WACC)
- Terminal growth rate or exit multiple

**Agent Output**:
- Base case fair value per share
- Sensitivity analysis (varying WACC, terminal growth rate, margin assumptions)
- Implied valuation multiples (P/E, EV/EBITDA) at fair value
- Upside/downside to current market price

> **Key Insight**: DCF valuation is only as reliable as the underlying assumptions. Valuation agents use historical financial trends and analyst consensus estimates as inputs, but always validate reasonableness of agent assumptions before relying on fair value outputs.

#### Example DCF Valuation: Technology Company

**Scenario**: Valuing a SaaS company with $500M revenue, 75% gross margins, and 20% revenue growth.

**Agent DCF Framework**:

| Year | Revenue ($M) | EBIT Margin | Free Cash Flow ($M) | PV of FCF ($M) |
|------|-------------|-------------|---------------------|----------------|
| 1 | 600 | 15% | 70 | 64 |
| 2 | 720 | 18% | 95 | 79 |
| 3 | 850 | 20% | 125 | 95 |
| 4 | 990 | 22% | 160 | 110 |
| 5 | 1,140 | 23% | 195 | 120 |
| Terminal Value | - | - | - | 2,400 |

**Assumptions**:
- WACC: 10%
- Terminal growth rate: 3%
- Terminal EBIT margin: 25%

**Fair Value Calculation**:
- PV of 5-year FCF: $468M
- PV of terminal value: $2,400M
- Enterprise value: $2,868M
- Less: Net debt
- Equity value: $2,800M
- Shares outstanding: 100M
- **Fair value per share: $28.00**

**Current Market Price**: $24.00
**Implied Upside**: 17%

**Agent Sensitivity Analysis**:

| WACC / Terminal Growth | 2.5% | 3.0% | 3.5% |
|------------------------|------|------|------|
| 9.0% | $31.50 | $33.20 | $35.10 |
| 10.0% | $27.20 | $28.00 | $28.90 |
| 11.0% | $24.10 | $24.70 | $25.40 |

> **Warning**: DCF is highly sensitive to terminal value assumptions, which represent 70-85% of total value in growth companies. Small changes in terminal growth rate or exit multiple drive large valuation swings. Always stress-test key assumptions.

---

### 2. Comparable Company Analysis

**Methodology**: Values company relative to publicly-traded peers using valuation multiples derived from market prices.

**When to Use**:
- Relative value assessment vs. sector
- Market-based valuation reflecting current investor sentiment
- Companies with comparable public peers
- Quick valuation checks or sanity tests on DCF outputs

**Common Valuation Multiples**:

| Multiple | Formula | Best For |
|----------|---------|----------|
| **EV/Revenue** | Enterprise Value / Revenue | Early-stage, high-growth companies; SaaS businesses |
| **EV/EBITDA** | Enterprise Value / EBITDA | Mature, profitable companies; capital-intensive businesses |
| **P/E** | Price / Earnings per Share | Profitable companies; consumer and financial stocks |
| **Price/Sales** | Market Cap / Revenue | Unprofitable growth companies; retail and consumer |
| **EV/EBIT** | Enterprise Value / EBIT | Manufacturing, industrials |
| **Price/Book** | Market Cap / Book Value | Banks, insurers, asset-heavy companies |

**Agent Process**:
1. Identifies comparable companies based on sector, business model, size, growth profile
2. Retrieves current market valuations and financial metrics for peers
3. Calculates median and mean multiples across peer group
4. Applies multiples to subject company's metrics
5. Produces implied valuation range

#### Example Comparable Company Analysis: Biotech Company

**Scenario**: Valuing pre-revenue biotech company with Phase 2 drug candidate.

**Peer Group Selection** (Agent-identified):
- Companies with similar pipeline stage
- Similar therapeutic area
- Comparable market capitalization

| Company | Market Cap ($M) | Pipeline Stage | EV/Peak Sales Estimate |
|---------|----------------|----------------|------------------------|
| Peer A | 1,200 | Phase 2 | 3.5x |
| Peer B | 950 | Phase 2 | 4.2x |
| Peer C | 1,400 | Phase 2/3 | 3.0x |
| Peer D | 800 | Phase 2 | 4.8x |
| **Median** | **1,075** | - | **3.85x** |

**Subject Company Valuation**:
- Peak sales estimate (from analyst consensus): $500M
- Applied multiple: 3.85x (peer median)
- **Implied valuation: $1,925M**
- Probability-adjusted for Phase 2 success (30%): **$578M**
- Shares outstanding: 50M
- **Fair value per share: $11.56**

**Current Market Price**: $9.50
**Implied Upside**: 22%

> **Key Insight**: For pre-revenue companies, multiples must be probability-adjusted for clinical or regulatory success. Valuation agents apply standard phase success rates unless custom probabilities are specified.

#### Selecting the Right Multiple

Different industries and company life-cycle stages require different multiples:

**High-Growth, Pre-Profit Companies**:
- Use revenue multiples (EV/Revenue, Price/Sales)
- Focus on growth rates and market opportunity
- Examples: SaaS, biotech, early-stage tech

**Mature, Profitable Companies**:
- Use earnings or cash flow multiples (P/E, EV/EBITDA, EV/FCF)
- Focus on profitability and cash generation
- Examples: Consumer staples, utilities, banks

**Asset-Heavy Companies**:
- Use book value or replacement cost multiples (Price/Book, Price/Tangible Book)
- Focus on asset quality and returns
- Examples: Banks, insurers, real estate

**Cyclical Companies**:
- Use through-cycle or normalized earnings multiples
- Avoid peak or trough earnings periods
- Examples: Industrials, materials, energy

---

### 3. Precedent Transaction Analysis

**Methodology**: Values company based on prices paid in historical M&A transactions for comparable companies.

**When to Use**:
- M&A scenarios (evaluating potential acquisition targets)
- Understanding strategic value vs. standalone value
- Assessing takeover premium expectations
- Activist or private equity situations

**Agent Process**:
1. Identifies relevant M&A transactions in sector (typically past 3-5 years)
2. Retrieves transaction metrics (enterprise value, multiples paid, premiums)
3. Calculates median transaction multiples
4. Applies multiples to subject company metrics
5. Adjusts for market conditions and strategic considerations

#### Example Precedent Transaction Analysis: Software M&A

**Scenario**: Valuing software company as potential acquisition target.

**Recent M&A Transactions** (Agent-identified):

| Target | Acquirer | Year | EV ($M) | Revenue ($M) | EV/Revenue | Premium to Market |
|--------|----------|------|---------|-------------|-----------|-------------------|
| Software A | PE Firm | 2024 | 1,500 | 300 | 5.0x | 35% |
| Software B | Strategic | 2023 | 2,200 | 400 | 5.5x | 42% |
| Software C | Strategic | 2023 | 900 | 150 | 6.0x | 38% |
| Software D | PE Firm | 2024 | 1,100 | 220 | 5.0x | 30% |
| **Median** | - | - | - | - | **5.25x** | **37%** |

**Subject Company Valuation**:
- Current revenue (LTM): $250M
- Applied multiple: 5.25x (transaction median)
- **Implied enterprise value: $1,312M**
- Less: Net debt: $50M
- **Equity value: $1,262M**
- Shares outstanding: 80M
- **Implied acquisition price per share: $15.78**

**Current Market Price**: $12.00
**Implied Takeover Premium**: 31%

> **Warning**: Transaction multiples reflect strategic value and often include control premiums. Precedent transaction valuations typically exceed standalone DCF or trading comps valuations by 20-40%.

---

## Valuation Agent Outputs

### Fair Value Range

Valuation agents synthesize results across multiple methodologies to produce a fair value range:

**Example Output Summary**:

| Methodology | Low Case | Base Case | High Case | Weight |
|------------|----------|-----------|-----------|--------|
| DCF | $24 | $28 | $33 | 40% |
| Comparable Cos | $22 | $26 | $30 | 40% |
| Precedent Txns | $14 | $16 | $18 | 20% |
| **Weighted Avg** | **$21** | **$25** | **$29** | - |

**Current Market Price**: $23
**Investment Recommendation Context**: Trading near low end of fair value range; 9% upside to base case, 26% upside to high case.

### Sensitivity Analysis

Valuation agents stress-test key assumptions:

**DCF Sensitivity** (varying WACC and terminal growth):
```
             Terminal Growth Rate
WACC    |  2.0%  |  2.5%  |  3.0%  |  3.5%  |  4.0%
--------|--------|--------|--------|--------|--------
 8.0%   | $32.10 | $34.50 | $37.20 | $40.30 | $44.00
 9.0%   | $28.40 | $30.20 | $32.30 | $34.60 | $37.40
10.0%   | $25.50 | $26.90 | $28.50 | $30.30 | $32.40
11.0%   | $23.10 | $24.20 | $25.50 | $26.90 | $28.50
12.0%   | $21.10 | $22.00 | $23.00 | $24.10 | $25.30
```

**Interpretation**: Valuation highly sensitive to cost of capital assumptions. 1% change in WACC moves valuation by 10-12%.

---

## Data Requirements and Quality

Valuation agents require clean, structured financial data:

### Required Data Inputs

**DCF Analysis**:
- Historical financial statements (5+ years): Income statement, balance sheet, cash flow
- Analyst consensus estimates (if available)
- Current capital structure: Debt, equity, market cap
- Beta, risk-free rate, equity risk premium (for WACC calculation)

**Comparable Company Analysis**:
- Peer group financial metrics: Revenue, EBITDA, earnings, market cap
- Current stock prices and shares outstanding
- Debt and cash balances for EV calculations

**Precedent Transaction Analysis**:
- Historical M&A transaction data: Deal values, multiples, premiums
- Target company financials at time of transaction

### Data Quality Considerations

| Issue | Impact | Mitigation |
|-------|--------|-----------|
| **Incomplete financials** | Cannot build full DCF model | Use comparable company analysis instead |
| **No analyst estimates** | Forecasting uncertainty increases | Agent uses historical growth rates; validate reasonableness |
| **Illiquid peers** | Trading multiples unreliable | Expand peer group or use precedent transactions |
| **Stale transaction data** | Multiples may not reflect current market | Focus on recent transactions (past 2-3 years) |
| **Non-standard accounting** | Metrics not comparable | Agent attempts normalization; verify adjustments |

> **Best Practice**: Always review the data sources and quality indicators in valuation agent output. Low data quality yields unreliable valuations regardless of methodology sophistication.

[Learn more: Data quality and validation](../01-data-and-sources/data-quality.md)

---

## Advanced Valuation Techniques

### Sum-of-the-Parts (SOTP) Valuation

For diversified companies or holding companies, valuation agents can value each business segment separately:

**Example: Conglomerate Valuation**

| Segment | Revenue ($M) | Applied Multiple | Method | Implied Value ($M) |
|---------|-------------|------------------|--------|-------------------|
| Software | 500 | 8x Revenue | Comps | 4,000 |
| Services | 300 | 12x EBITDA | Comps | 2,400 |
| Hardware | 200 | 0.8x Revenue | Comps | 160 |
| **Total EV** | - | - | - | **6,560** |

**Corporate Costs**: -$200M (capitalized at 15x)
**Net Debt**: -$500M
**Equity Value**: $5,860M
**Shares Outstanding**: 200M
**Fair Value per Share**: $29.30

**Use Case**: Activist situations arguing for breakup; private equity evaluating spin-off opportunities.

---

### Leveraged Buyout (LBO) Analysis

For private equity or leveraged situations, valuation agents model returns under leveraged capital structures:

**Key Inputs**:
- Purchase price (entry multiple)
- Debt financing (amount, terms, interest rate)
- Operational improvements (EBITDA growth, margin expansion)
- Exit multiple (after 5-7 years)
- Target IRR (typically 20-25%)

**Agent Output**:
- Maximum affordable purchase price given target returns
- Debt paydown schedule
- Equity returns under various exit scenarios
- Sensitivity to exit multiples and EBITDA growth

**Use Case**: Evaluating take-private scenarios; assessing whether buyout firms might bid for asset.

---

## Limitations and Cautions

### What Valuation Agents Cannot Assess

| Cannot Assess | Why | Required Alternative |
|--------------|-----|---------------------|
| **Management quality** | Qualitative judgment | Analyst assessment |
| **Competitive moat strength** | Strategic analysis | Industry expert judgment |
| **Execution risk** | Business-specific factors | Analyst scenario analysis |
| **Macroeconomic timing** | Market cycle forecasting | Macro strategist input |
| **Emotional market factors** | Behavioral finance | Market technicals, sentiment analysis |

> **Key Insight**: Valuation establishes fundamental value, but stock prices can trade above or below fair value for extended periods due to sentiment, momentum, or liquidity factors. Valuation agents provide a reference point, not a trading signal.

---

### Common Valuation Pitfalls

**1. Garbage In, Garbage Out**
- Poor financial data quality yields unreliable valuations
- Always validate underlying data before trusting valuation outputs

**2. Over-Precision**
- Fair value ranges are estimates, not exact figures
- Avoid false precision (e.g., "$28.47 per share"); use ranges ("$26-30")

**3. Ignoring Business Quality**
- High-quality businesses deserve premium multiples
- Low-quality businesses deserve discount multiples
- Mechanical application of median multiples can mislead

**4. Neglecting Capital Structure**
- Highly leveraged companies carry more risk
- Adjust WACC and discount rates for financial leverage

**5. Failing to Normalize Earnings**
- Cyclical companies require normalized or through-cycle earnings
- One-time items and non-recurring charges must be adjusted

---

## Integration with Other Agents

Valuation agents work best in combination with other analytical agents:

### Example: Comprehensive Equity Analysis

**Step 1: Retrieval Agent** → "What are the key business drivers, recent strategic initiatives, and management guidance for Company XYZ?"

**Step 2: Valuation Agent** → "What is Company XYZ worth using DCF, comparable companies, and precedent transactions?"

**Step 3: Risk Agent** → "What are the primary downside risks that could cause Company XYZ to trade below fair value?"

**Step 4: Dashboard Agent** → "How do Company XYZ's margins, returns, and growth rates compare to peers?"

**Synthesis**: Comprehensive investment thesis combining fundamental analysis (retrieval), intrinsic value (valuation), risk assessment, and competitive positioning.

[Learn more: Multi-agent orchestration](../03-agent-workbench/multi-agent-orchestration.md)

---

## Getting Started with Valuation Agents

### In Intelligence Hub

1. Create project for target company
2. Add task: "Valuation - Fair Value Analysis"
3. Select **Valuation Agent**
4. Specify methodologies (DCF, comps, or precedent transactions)
5. Customize assumptions if needed (terminal growth rate, peer group, etc.)
6. Run task and review fair value outputs with sensitivity analysis

[Learn more: Agent configuration in Intelligence Hub](../02-intelligence-hub/agents-configuration.md)

### In Agent Workbench

**Example Query**: "What is Apple worth using DCF and comparable company analysis?"

**Agent Response**:
- DCF fair value with assumption details and sensitivity table
- Comparable company analysis with peer group and median multiples
- Implied fair value range
- Current market price and upside/downside

**Follow-Up Questions**:
- "What happens to fair value if we assume 2% terminal growth instead of 3%?"
- "Who are the comparable companies you used?"
- "What precedent M&A transactions are relevant?"

[Learn more: Query formulation in Workbench](../03-agent-workbench/query-formulation.md)

---

## Valuation Agent Best Practices

### 1. Triangulate Across Methodologies

Never rely on a single valuation method. Use:
- DCF for intrinsic value
- Comparable companies for market-relative value
- Precedent transactions (if relevant) for strategic value

**Convergence = Confidence**: When all three methods yield similar values, confidence increases.

---

### 2. Stress-Test Assumptions

Run sensitivity analysis on:
- DCF: WACC, terminal growth rate, margin assumptions
- Comps: Peer group selection, which multiples used
- Precedent transactions: Time period, strategic vs. financial buyers

**Identify Key Drivers**: Which assumptions most impact valuation? Focus analytical effort there.

---

### 3. Validate Data Quality

Before trusting valuation outputs:
- Check data completeness (are financials missing key periods?)
- Verify comparability (are peers truly comparable?)
- Confirm timeliness (is data recent?)

**Red Flags**: Large data gaps, illiquid peers, stale transactions → lower confidence in valuation.

---

### 4. Contextualize Fair Value

Fair value is a reference point, not a trading recommendation:
- **Overvalued** (price > fair value): Requires growth or multiple expansion to justify
- **Undervalued** (price < fair value): Potential opportunity if fundamentals intact
- **Fairly valued** (price ≈ fair value): Neutral unless fundamentals improving/deteriorating

**Investment Decision**: Combine valuation with catalysts, risk factors, and portfolio construction considerations.

---

## Next Steps

- [Agent Overview: Selecting the Right Agent Type](./agent-overview.md)
- [Retrieval Agents: Information Synthesis](./retrieval-agents.md)
- [Risk Agents: Downside Scenario Analysis](./risk-agents.md)
- [Agent Confidence and Reliability](./agent-confidence-reliability.md)
- [Equity Initiation Use Case](../06-use-cases/equity-initiation.md)
- [Data Quality Considerations](../01-data-and-sources/data-quality.md)

---

**Questions about valuation methodology?** Review our [FAQ](../../07-troubleshooting/faq-general.md) or [contact support](../../07-troubleshooting/support-escalation.md) for methodology clarifications.
