# Agentii Documentation Style Guide

**Version**: 1.0
**Last Updated**: 2025-11-26
**Target Audience**: Professional financial analysts, institutional investors, fintech professionals

---

## Core Principles

### 1. Authority & Credibility
- Write as a trusted institutional advisor, not a salesperson
- Assume readers have financial expertise (Bloomberg, FactSet knowledge)
- Back claims with methodology, not hype
- Reference financial standards (CFA, SEC, etc.) where applicable

### 2. Clarity Over Simplicity
- Use precise financial terminology correctly
- Define industry-specific terms where they appear
- Explain concepts, not implementation details
- Use real-world examples with actual tickers and scenarios

### 3. Action-Oriented Guidance
- Lead with the "why" before the "how"
- Structure for scanning (headers, bullets, tables)
- End paragraphs with next steps or implications
- Avoid ambiguous language; be specific and direct

---

## Tone & Voice Examples

### ✅ CORRECT: Professional, Authoritative

> "Agentii complements traditional research tools by accelerating analysis of complex financial documents. Unlike spreadsheet-based workflows, Agentii agents can simultaneously evaluate multiple analytical frameworks—DCF valuation, comparable company analysis, and precedent transactions—reducing the time between question and insight from hours to minutes."

### ❌ WRONG: Marketing Language

> "Agentii's cutting-edge AI technology revolutionizes financial analysis with unprecedented speed and accuracy!"

### ✅ CORRECT: Specific, Practical

> "For pre-earnings analysis, create a snapshot with three agents: one retrieves analyst consensus estimates, another evaluates historical earnings surprises, and a third identifies key guidance metrics. Compare results across all three before forming thesis."

### ❌ WRONG: Vague

> "Use multiple agents to get better results."

---

## Document Structure

### Standard Sections
1. **Introduction** (1-2 paragraphs): What this document covers and why it matters
2. **Key Concepts** (if needed): Define terminology used throughout
3. **Main Content**: Organized by H2 (major topics), H3 (subtopics)
4. **Use Cases/Examples**: Real-world applications with specific tickers
5. **Next Steps**: Where to go from here, links to related docs

### Formatting Standards

**Headings**:
```markdown
# Title (H1 - page title only, once per document)
## Major Section (H2 - main topics)
### Subsection (H3 - related details)
#### Minor Point (H4 - rarely needed)
```

**Paragraphs**:
- Lead with key insight in first sentence
- Maximum 4-5 sentences before line break
- One idea per paragraph
- Use active voice: "You create projects" not "Projects are created"

**Lists**:
- Use bullets for 3+ related items
- Use numbered lists only for sequential steps
- Parallel structure: all items same grammatical form
- Example bullets:
  - Item one: action-oriented description
  - Item two: action-oriented description
  - Item three: action-oriented description

**Emphasis**:
- **Bold**: Feature names, important concepts, key takeaways
- *Italic*: Emphasis, financial terms on first mention
- `Code`: File paths, command names, variables
- > Blockquotes: Important warnings or key insights

### Examples with Real Context

**Good Example: Clear, Action-Oriented**
```markdown
## Creating Your First Project

A project groups related analysis around a specific stock. For example, if you're tracking Apple Inc., your project might include tasks for earnings analysis, competitive positioning, and supply chain risk.

### Steps

1. Click "New Project" in the Projects tab
2. Enter primary ticker: AAPL
3. Add related tickers: MSFT, GOOGL, NVDA (for competitive context)
4. Select sector: Technology
5. Set lookback period: 8 quarters (standard for earnings cycle)
6. Click "Create Project"

Your project is now ready to add tasks.
```

---

## Financial Terminology Standards

### First Mention
- Introduce with full phrase + abbreviation
- Example: "Discounted Cash Flow (DCF) analysis values companies..."
- Use abbreviation thereafter

### Precision Required
- **Not**: "market performance"
- **Yes**: "total shareholder return" or "outperformance vs. S&P 500"
- **Not**: "financial metrics"
- **Yes**: "EBITDA margins, ROE, debt-to-equity ratio"

### Reference Standards
- SEC terminology (10-K, 10-Q, 8-K, proxy statements)
- CFA concepts and methodology
- Industry-standard metrics by domain

### Examples in Context

```markdown
## Valuation Methodology

Agentii's valuation agent uses three approaches:

1. **Discounted Cash Flow (DCF)**: Projects free cash flow over explicit forecast period (typically 5-10 years), then applies terminal value. Useful for stable, profitable companies.

2. **Comparable Company Analysis**: Benchmarks against peer group on metrics like EV/EBITDA, Price/Sales, Price/Free Cash Flow. Useful for relative valuation in competitive markets.

3. **Precedent Transactions**: Analyzes historical M&A deals in sector to establish valuation multiples. Useful for understanding market consensus on strategic value.

Each approach has limitations discussed in the agent methodology section.
```

---

## Code & Technical Examples

### API Examples
```markdown
### Creating a Project via API

```python
import requests

response = requests.post(
    "https://api.agentii.ai/projects",
    headers={"Authorization": f"Bearer {api_key}"},
    json={
        "name": "Apple Analysis",
        "primary_ticker": "AAPL",
        "sector": "Technology"
    }
)
project_id = response.json()["id"]
```
```

### File Paths
- Use backticks: `frontend-blog/content/docs/00-introduction/`
- Use absolute paths in documentation: `/Users/frank/X/agentii/frontend-blog/...`
- For user-facing paths: `Projects tab` not `/projects`

---

## Tables

Use tables for:
- Feature comparisons
- Financial metrics
- Status indicators
- Reference matrices

### Good Table Example

| Agent Type | Best For | Limitations |
|-----------|----------|------------|
| Retrieval-Focused | Document synthesis, fact-finding | Cannot perform mathematical modeling |
| Valuation | DCF, comps, precedent analysis | Requires clean financial data |
| Risk | Downside scenarios, risk factors | Cannot assess probability weighting |

---

## Cross-References

### Internal Links
- Use descriptive anchor text, not "click here"
- Example: `See [best practices for multi-agent consensus](../05-best-practices/agent-consensus.md)`
- Always include related docs in YAML frontmatter

### External Links
- Use for: SEC documents, financial data sources, external research
- Format: `[description](https://...)`
- Verify links before publication

---

## Callouts & Warnings

### Important Patterns

```markdown
> **Key Insight**: For pre-earnings analysis, agent consensus across multiple methodologies (retrieval, valuation, risk) typically produces the most robust thesis.

> **Warning**: Data freshness for analyst estimates varies by broker. Always verify source dates in agent output before making trading decisions.

> **Tip**: Create project templates for recurring analysis types (e.g., quarterly earnings cycle). Templates save configuration time and ensure consistency.
```

### When to Use Callouts
- **Key Insight**: Central concept readers must understand
- **Warning**: Limitations, gotchas, or important caveats
- **Tip**: Efficiency improvements, best practices, pro tips

---

## Audience Levels

### Beginner Content
- Define all financial terms
- Explain "why" before "how"
- Provide step-by-step instructions
- Include conceptual diagrams (described in text)
- Example next steps for learning

### Intermediate Content
- Assume familiarity with basic navigation
- Focus on decision-making (which agent? which approach?)
- Explain methodology, not implementation
- Provide use-case examples
- Reference related advanced topics

### Advanced Content
- Assume expertise in financial analysis
- Discuss sophisticated workflows and patterns
- Include API reference, code examples
- Explain edge cases and limitations
- Provide optimization guidance

---

## YAML Frontmatter Template

All documents MUST include:

```yaml
---
title: "Document Title"
description: "One-sentence summary for search results and meta tags (60-160 characters)"
author: "Agentii Documentation"
date: "2025-11-26"
updated: "2025-11-26"
audience: "Beginner|Intermediate|Advanced"
domain: "Intelligence Hub|Agent Workbench|Both|General"
tags: ["tag1", "tag2", "tag3"]
relatedDocs:
  - "/docs/00-introduction/core-concepts.md"
  - "/docs/02-intelligence-hub/projects-guide.md"
---
```

---

## Proofreading Checklist

Before publication:

- [ ] **Tone**: Read aloud; sounds authoritative but not arrogant?
- [ ] **Clarity**: Could a smart person unfamiliar with Agentii understand?
- [ ] **Consistency**: Same terminology throughout (no "task" vs "job")?
- [ ] **Grammar**: Proofread for spelling, punctuation, subject-verb agreement
- [ ] **Links**: All cross-references tested and working?
- [ ] **Examples**: Real tickers and realistic scenarios?
- [ ] **Financial Accuracy**: Terminology correct, methodologies sound?
- [ ] **Completeness**: Covers the topic thoroughly?
- [ ] **Frontmatter**: YAML complete, tags relevant, related docs accurate?

---

## Common Mistakes to Avoid

| Mistake | Fix |
|---------|-----|
| "agent finds insights" | "agent retrieves documents containing relevant information" |
| "the system learns from your queries" | "agent optimizations are manual via custom prompts" |
| "use AI for better decisions" | "use multiple agents to cross-check analysis" |
| Undefined acronyms | Define on first mention: "Discounted Cash Flow (DCF)" |
| Vague benefits ("faster") | Specific claims: "analyze documents in minutes vs. hours" |
| Marketing language | Institutional, precise language |
| Implementation details | User benefits and workflows |

---

## Quick Reference: Best Practices Summary

1. **Lead with value**: Why should I care about this?
2. **Be specific**: Use real examples, actual tickers, specific metrics
3. **Respect time**: Scannable structure, clear headings, short paragraphs
4. **Assume expertise**: Readers know finance; they're learning Agentii
5. **Link logically**: Cross-references between related documentation
6. **Use standards**: Financial terminology, CFA concepts, SEC language
7. **Verify facts**: Especially financial methodology, data sources, limitations
8. **Show workflow**: How does this fit into analyst workflow?

---

**Questions or clarifications?** These standards should be applied consistently across all 31 MVP documentation files.
