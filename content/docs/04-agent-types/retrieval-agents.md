---
title: "Retrieval-Focused Agents"
description: "Document synthesis, fact extraction, and information retrieval capabilities for financial documents and research"
author: "Agentii Documentation"
date: "2025-11-26"
updated: "2025-11-26"
audience: "Intermediate"
domain: "Both"
tags: ["retrieval agents", "document synthesis", "fact extraction", "information retrieval"]
relatedDocs:
  - "/docs/04-agent-types/agent-overview.md"
  - "/docs/01-data-and-sources/institutional-sources.md"
  - "/docs/02-intelligence-hub/tasks-guide.md"
  - "/docs/03-agent-workbench/query-formulation.md"
---

# Retrieval-Focused Agents

Retrieval-focused agents specialize in extracting, synthesizing, and organizing information from financial documents. Unlike valuation or risk agents that perform analytical calculations, retrieval agents answer the foundational question: "What does the documentation say?"

For institutional analysts, retrieval agents function as intelligent research assistants—rapidly parsing 10-Ks, earnings transcripts, analyst reports, and other documents to surface relevant information, track disclosure changes, and compile comprehensive answers from multiple sources.

## Core Capabilities

### 1. Document Synthesis

Retrieval agents read and synthesize information across multiple documents to provide comprehensive answers.

**Example Query**: "What has Microsoft disclosed about Azure revenue growth over the past 8 quarters?"

**Agent Process**:
1. Identifies relevant documents (10-Qs, earnings transcripts, investor presentations)
2. Extracts Azure-related revenue disclosures from each quarter
3. Organizes findings chronologically
4. Synthesizes trends and highlights disclosure changes

**Output**: Structured timeline of Azure revenue growth disclosures with direct quotes and source citations.

> **Key Insight**: Synthesis across multiple documents is where retrieval agents add the most value. Rather than reading 8 quarterly transcripts manually, the agent compiles a unified view in minutes.

---

### 2. Fact Extraction

Retrieval agents extract specific data points, metrics, or statements from lengthy documents.

**Example Queries**:
- "What is Apple's current share buyback authorization remaining?"
- "How many Nvidia H100 units did Tesla disclose in their AI infrastructure section?"
- "What were the specific covenant terms in Boeing's recent credit facility amendment?"

**Best For**:
- Numeric metrics buried in narrative text
- Specific disclosures (legal proceedings, management changes, capital allocation)
- Regulatory compliance details
- Technical specifications in industry-specific disclosures

**Limitations**: Retrieval agents report what is explicitly stated. If a company does not disclose a metric, the agent cannot estimate or infer it.

---

### 3. Thematic Tracking

Retrieval agents monitor how specific themes evolve across reporting periods.

**Example Themes**:
- **Supply Chain Commentary**: Track management's discussion of supply chain challenges quarter-over-quarter
- **Regulatory Risk Mentions**: Identify increases/decreases in regulatory risk disclosure
- **Capital Allocation Language**: Monitor shifts in language about dividends, buybacks, M&A priorities
- **Competitive Positioning**: Track how companies describe competitive dynamics

**Use Case: Earnings Prep**

Before quarterly earnings, use a retrieval agent to compile:
- Prior quarter guidance given
- Key priorities management emphasized
- Risk factors highlighted
- Metrics management tracked

This creates a baseline for evaluating whether the company met expectations and what changed in the quarter.

> **Tip**: Create a recurring Intelligence Hub task with a retrieval agent tracking specific themes quarter-to-quarter. This builds institutional memory and surfaces meaningful changes in management commentary.

---

## Retrieval Agent Methodology

### Data Sources Accessed

Retrieval agents access all document-based data in the Agentii ecosystem:

| Source Type | Examples | Typical Information Retrieved |
|------------|----------|-------------------------------|
| **SEC Filings** | 10-K, 10-Q, 8-K, S-1, proxy statements | Financial disclosures, risk factors, business descriptions, legal proceedings |
| **Investor Relations** | Earnings call transcripts, presentations, investor days | Management commentary, guidance, strategic priorities |
| **Analyst Research** | Initiation reports, updates, sector reports | Analyst opinions, price targets, estimate changes |
| **Expert Networks** | Channel checks, former executive interviews | Market intelligence, competitive dynamics, industry trends |
| **News & Media** | Press releases, industry publications, trade journals | Company announcements, industry developments, competitive moves |

[Learn more: Agentii's institutional data sources](../01-data-and-sources/institutional-sources.md)

### Search and Ranking

When you query a retrieval agent, it:

1. **Identifies Relevant Documents**: Searches document repository for sources likely to contain answers
2. **Extracts Candidate Information**: Pulls sections, paragraphs, or statements related to your query
3. **Ranks by Relevance**: Prioritizes information directly answering the question
4. **Synthesizes Response**: Combines information from multiple sources into coherent answer
5. **Cites Sources**: Attributes each piece of information to specific document and page

**Transparency**: All retrieval agent outputs include citations showing exactly where information came from and when it was published.

---

## Optimal Use Cases

### Pre-Earnings Research

**Scenario**: You cover Salesforce and earnings are in two weeks. You need to quickly refresh what management said last quarter.

**Retrieval Agent Query**:
"What guidance did Salesforce provide in their last earnings call? What metrics did management emphasize? What risks did they highlight?"

**Agent Output**:
- Revenue and operating margin guidance (with exact figures and source citation)
- Key focus areas (e.g., "AI-powered features driving seat expansion")
- Mentioned risks (e.g., "lengthening sales cycles in Europe")
- All sourced from Q3 FY2024 earnings transcript

**Time Saved**: 30 minutes reading transcript → 3 minutes reviewing agent summary.

---

### Coverage Initiation

**Scenario**: Starting coverage on a new company in your sector. Need to quickly understand business model, competitive position, and strategy.

**Retrieval Agent Query**:
"What are the key business segments, revenue drivers, and strategic priorities for Snowflake?"

**Agent Output**:
- Business model description from latest 10-K
- Revenue segment breakdown and growth drivers
- Strategic priorities from recent investor presentations
- Competitive positioning language from earnings calls

**Value**: Rapid baseline understanding before deeper quantitative analysis.

---

### Thematic Screening

**Scenario**: Interested in companies with significant exposure to AI infrastructure buildout.

**Retrieval Agent Query**:
"Which companies in my coverage universe disclosed increased capex related to AI or GPU infrastructure in the past two quarters?"

**Agent Output**:
- List of companies with relevant disclosures
- Specific capex figures or growth rates mentioned
- Context around AI infrastructure investments
- Source citations to verify findings

**Application**: Quickly narrow universe for detailed modeling and analysis.

---

### Monitoring Disclosure Changes

**Scenario**: Tracking if companies are increasing disclosure of a specific risk (e.g., credit risk, cybersecurity incidents).

**Retrieval Agent Query**:
"Compare cybersecurity risk disclosures in XYZ Corp's 10-Ks from 2022, 2023, and 2024. What changed?"

**Agent Output**:
- Comparison table showing disclosure evolution
- New risk factors added
- Changes in language tone or emphasis
- Specific incidents disclosed (if any)

**Value**: Early warning system for emerging risks before they impact results.

---

## Limitations and Boundaries

### What Retrieval Agents Cannot Do

| Cannot Do | Why | Alternative |
|----------|-----|-------------|
| **Perform calculations** | Not designed for quantitative modeling | Use valuation or dashboard agents |
| **Assess probability of events** | Retrieval reports facts, not probabilities | Use risk agents or analyst judgment |
| **Provide investment recommendations** | No "buy/sell/hold" conclusions | Analyst decision after reviewing agent outputs |
| **Fill in missing disclosures** | Cannot infer undisclosed information | Note disclosure gap; seek alternative data sources |
| **Interpret ambiguous language** | Reports what's stated, not implied meaning | Analyst interpretation required |

> **Warning**: Retrieval agents synthesize disclosed information but cannot read between the lines. If management language is intentionally vague, the agent output will reflect that vagueness.

---

### Data Quality Considerations

Retrieval agent reliability depends on:

1. **Document Availability**: Agent can only retrieve from documents in Agentii's database
2. **Disclosure Completeness**: If company doesn't disclose information, agent cannot retrieve it
3. **Document Timeliness**: Agent retrieves most recent available documents (check dates in citations)
4. **Text Quality**: OCR errors in older filings may cause occasional retrieval gaps

**Best Practice**: Always verify key facts from agent output by checking original source documents, especially for material investment decisions.

---

## Advanced Retrieval Techniques

### Comparative Queries

Ask retrieval agents to compare information across companies, time periods, or documents:

**Example Queries**:
- "Compare Apple and Samsung's R&D spending as a percentage of revenue over the past 5 years"
- "What did Amazon disclose about AWS margins in 2022 vs. 2024?"
- "How does Tesla's warranty reserve disclosure compare to Ford and GM?"

**Output**: Side-by-side comparison tables with source citations.

---

### Multi-Document Synthesis

Request information requiring synthesis across different document types:

**Example Query**:
"What has Meta disclosed about Reality Labs losses across their 10-Ks, earnings calls, and investor presentations over the past year?"

**Agent Process**:
1. Searches 10-Ks for segment reporting on Reality Labs
2. Reviews earnings transcripts for management commentary
3. Checks investor presentations for strategic rationale
4. Synthesizes comprehensive view with all sources cited

**Value**: Unified perspective across multiple disclosure channels.

---

### Temporal Tracking

Track how specific disclosures evolve over time:

**Example Query**:
"Show me how Pfizer's language about their COVID vaccine revenue expectations changed from Q1 2023 through Q4 2024"

**Agent Output**:
- Timeline of relevant statements
- Highlighted changes in language or tone
- Quantitative estimate changes (if disclosed)
- All sourced and dated

**Application**: Understanding management messaging evolution and identifying inflection points.

---

## Integration with Other Agents

Retrieval agents often serve as the first step in multi-agent workflows:

### Example: Comprehensive Company Analysis

**Step 1: Retrieval Agent** → "What are the key business segments, recent strategic initiatives, and disclosed risk factors for Company XYZ?"

**Step 2: Valuation Agent** → "What is Company XYZ worth using DCF and comparable company analysis?"

**Step 3: Risk Agent** → "What are the primary downside risks to Company XYZ's business model and financial structure?"

**Result**: Comprehensive analysis starting with information synthesis, followed by quantitative valuation and risk assessment.

[Learn more: Multi-agent orchestration](../03-agent-workbench/multi-agent-orchestration.md)

---

## Getting Started with Retrieval Agents

### In Intelligence Hub

1. Create a new project for the company you're researching
2. Add a task: "Retrieval - Business Overview"
3. Select **Retrieval-Focused** agent
4. Write your query (be specific about what you want to know)
5. Run task and review output with source citations

[Learn more: Creating tasks in Intelligence Hub](../02-intelligence-hub/tasks-guide.md)

### In Agent Workbench

1. Launch Workbench session
2. Enter your query (example: "What did Apple disclose about iPhone revenue in their latest 10-Q?")
3. Agent Workbench automatically selects retrieval-focused agent for document-based queries
4. Review results and follow up with refinement questions

[Learn more: Query formulation in Workbench](../03-agent-workbench/query-formulation.md)

---

## Retrieval Agent Best Practices

### Be Specific

**Weak Query**: "Tell me about Tesla"
**Strong Query**: "What did Tesla disclose about Full Self-Driving take rates and revenue in their Q4 2024 earnings call?"

**Why It Matters**: Specific queries yield focused, actionable answers. General queries produce general summaries.

---

### Request Source Citations

Always review source citations in retrieval agent output:

- Verify document type (10-K vs. transcript vs. presentation)
- Check publication date (is information recent?)
- Confirm page numbers/sections if validating key facts

**Best Practice**: For material facts influencing investment decisions, spot-check original sources.

---

### Use Time Bounds

Add temporal constraints to queries:

- "...over the past 8 quarters"
- "...since January 2024"
- "...in the most recent 10-K"

**Why**: Prevents agent from retrieving outdated information and focuses search on relevant period.

---

### Iterate and Refine

If initial retrieval doesn't fully answer your question:

1. Review what the agent returned
2. Refine your query with more specific language
3. Ask follow-up questions to drill deeper
4. Request additional document types if needed

**Example Iteration**:
- Query 1: "What did Microsoft say about Azure growth?"
- Query 2: "What specific Azure revenue growth rates did Microsoft disclose in their past 4 quarters?"
- Query 3: "How did Microsoft explain Azure revenue deceleration in Q3 vs. Q2?"

---

## Confidence Indicators

Retrieval agents provide confidence scores based on:

- **High Confidence (>85%)**: Information found in multiple authoritative documents with consistent messaging
- **Medium Confidence (60-85%)**: Information found but limited sources or some ambiguity in language
- **Low Confidence (<60%)**: Limited information available or conflicting statements across sources

> **Tip**: Low confidence often signals disclosure gaps—areas where the company provides limited information. This itself is a useful signal for further investigation.

[Learn more: Agent confidence and reliability](./agent-confidence-reliability.md)

---

## Next Steps

- [Agent Overview: Selecting the Right Agent Type](./agent-overview.md)
- [Valuation Agents: Quantitative Analysis](./valuation-agents.md)
- [Risk Agents: Downside Scenario Analysis](./risk-agents.md)
- [Multi-Agent Orchestration in Workbench](../03-agent-workbench/multi-agent-orchestration.md)
- [Agentii's Data Sources and Quality](../01-data-and-sources/institutional-sources.md)

---

**Questions about retrieval agents?** Review our [troubleshooting guide](../../07-troubleshooting/task-troubleshooting.md) or [contact support](../../07-troubleshooting/support-escalation.md).
