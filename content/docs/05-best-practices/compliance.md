---
title: "Compliance and Regulatory Best Practices"
description: "Navigate regulatory requirements and establish compliant workflows for institutional AI-assisted research."
author: "Agentii Documentation"
date: "2025-11-26"
updated: "2025-11-26"
audience: "Advanced"
domain: "Both"
tags: ["compliance", "regulatory", "audit", "documentation", "institutional", "governance"]
relatedDocs:
  - "/docs/05-best-practices/risk-management.md"
  - "/docs/05-best-practices/team-collaboration.md"
  - "/docs/02-intelligence-hub/project-workflows.md"
  - "/docs/09-account-management/compliance-audit.md"
  - "/docs/00-introduction/data-quality.md"
---

# Compliance and Regulatory Best Practices

AI-assisted research introduces new regulatory considerations for investment firms. This guide provides practical frameworks for maintaining compliance with SEC, FINRA, and internal governance requirements while using Agentii.

---

## Regulatory Landscape

### Key Regulations Affecting AI-Assisted Research

**SEC Investment Advisers Act (Rule 206(4)-7)**:
- Requires compliance policies and procedures
- Mandates supervision of research activities
- Requires documentation and recordkeeping

**FINRA Rule 2241 (Research Reports)**:
- Applies to sell-side research
- Requires disclosure of research methodologies
- Mandates analyst attestation and compliance review

**MiFID II (EU)**:
- Research unbundling requirements
- Research valuation and documentation
- Audit trail for research consumption

**Internal Governance**:
- Investment committee review processes
- Risk management documentation
- Analyst accountability and supervision

### AI-Specific Considerations

**Model Risk Management**:
- Understanding AI methodologies and limitations
- Validating AI-generated insights
- Documenting reliance on AI tools

**Data Provenance**:
- Knowing data sources and quality
- Attribution requirements
- Avoiding material non-public information (MNPI)

**Human Oversight**:
- Analyst review and validation required
- AI as augmentation, not replacement
- Professional judgment remains critical

---

## Compliant Research Workflows

### Workflow 1: Sell-Side Research Report Publication

**Regulatory Requirement**: FINRA 2241 requires specific disclosures and compliance review

**Agentii-Compliant Process**:

**Step 1: Research Execution (Intelligence Hub)**
```
Project: "Apple Inc. 2025 Initiation Report"
Documentation Requirements:
✓ Project description: Investment thesis and methodology
✓ Snapshots: Research phases with timestamps
✓ Tasks: Specific analytical steps with agent assignments
✓ Results: All agent outputs with confidence scores
```

**Step 2: Analyst Review and Validation**
```
Compliance Checkpoint:
□ Analyst reviews all agent outputs
□ Validates data sources cited by agents
□ Confirms findings align with independent analysis
□ Documents any discrepancies or corrections
□ Adds professional judgment and commentary

Documentation: Save annotated results with analyst notes
```

**Step 3: Research Report Drafting**
```
Report Structure:
- Executive Summary (analyst-written)
- Investment Thesis (analyst-written, informed by agents)
- Financial Analysis (agent-assisted, analyst-validated)
- Valuation (agent models, analyst assumptions documented)
- Risk Factors (agent-identified, analyst-prioritized)

Disclosure Requirements:
✓ "This report was prepared with assistance from Agentii AI research tools"
✓ "Analyst reviewed and validated all AI-generated insights"
✓ "Final investment rating reflects analyst's professional judgment"
```

**Step 4: Compliance Review**
```
Compliance Checklist:
□ Valuation methodology disclosed
□ Data sources attributed
□ Risks appropriately disclosed
□ Rating definitions included
□ Conflicts of interest disclosed
□ Analyst attestation obtained

Hub Export: Project summary and task results for compliance file
```

**Step 5: Publication and Recordkeeping**
```
Records Retained (7 years):
- Published research report (PDF)
- Agentii Hub project (full task history)
- Analyst validation notes
- Compliance review approval
- Distribution list and timestamp
```

### Workflow 2: Buy-Side Investment Recommendation

**Regulatory Requirement**: Investment Advisers Act requires documented investment process

**Agentii-Compliant Process**:

**Step 1: Initial Research (Workbench or Hub)**
```
Use Workbench for exploration:
- Rapid idea validation
- Initial risk identification
- Preliminary valuation ranges

Move to Hub for formal analysis:
- Structured due diligence
- Comprehensive risk assessment
- Documented methodology
```

**Step 2: Investment Committee Documentation**
```
Investment Memo Structure:
1. Thesis (analyst judgment)
2. Supporting Analysis (agent-assisted research)
   - Note: "Analysis supported by Agentii agents; validated by analyst"
3. Risk Assessment (agent-identified, analyst-prioritized)
4. Valuation (agent models with documented assumptions)
5. Position Size Recommendation (analyst judgment with risk framework)

Attached: Hub project export showing full analytical process
```

**Step 3: Investment Committee Review**
```
Committee Evaluation:
□ Analyst presents thesis and supporting research
□ Committee questions methodology and assumptions
□ Agent outputs reviewed as supporting materials
□ Committee renders decision based on full record

Minutes Document:
- Analyst presentation summary
- Committee discussion points
- Decision and rationale
- Reference to Agentii project ID for audit trail
```

**Step 4: Ongoing Monitoring and Documentation**
```
Quarterly Review Process:
- Hub surveillance project tracks thesis evolution
- Monthly risk monitoring documents emerging concerns
- Position changes documented with supporting analysis
- Annual review includes full Agentii audit trail
```

---

## Documentation and Audit Trail

### What to Document

**Project-Level Documentation**:
- Investment thesis and research objective
- Time period and analytical scope
- Primary and related tickers
- Analyst responsible and reviewers

**Task-Level Documentation**:
- Agent selected and methodology
- Custom prompts and instructions
- Execution timestamp
- Results and confidence scores
- Data sources cited

**Validation Documentation**:
- Analyst review notes
- Discrepancies identified and resolved
- Alternative analyses considered
- Final conclusions and rationale

### Hub as Natural Audit Trail

Intelligence Hub projects provide comprehensive audit trail:

**Built-In Compliance Features**:
- Immutable task history (cannot edit completed tasks)
- Timestamp tracking (created, executed, completed)
- Agent methodology documentation (pre-configured in templates)
- Source attribution (agents cite data sources)
- Version control (snapshot-based organization)

**Exporting for Compliance**:
```
Export Options:
- Full project PDF: All snapshots, tasks, and results
- Individual task results: Detailed output with sources
- Project summary: High-level overview with timestamps
- Audit log: Chronological activity record
```

### Retention Requirements

**US Regulatory Requirements** (SEC/FINRA):
- Investment recommendations: 7 years
- Research reports: 7 years (3 years accessible)
- Supporting documentation: 7 years
- Electronic communications: 7 years

**Agentii Retention**:
- Projects retained indefinitely (unless deleted by user)
- Archived projects accessible anytime
- Export before deletion if shorter retention needed

---

## Compliance Controls and Governance

### Role-Based Access Control

**Analyst Role**:
- Can create projects and tasks
- Can execute analyses
- Cannot delete others' work
- All activity logged

**Supervisor Role**:
- Can review all analyst work
- Can access archived projects
- Can export for compliance review
- Can enforce documentation standards

**Compliance Role**:
- Read-only access to all projects
- Can export audit trails
- Can run compliance reports
- Cannot modify research

### Pre-Clearance and Review

**Pre-Clearance Process** (Optional):
```
Step 1: Analyst creates project with thesis
Step 2: Supervisor reviews and approves scope
Step 3: Analyst executes research
Step 4: Supervisor reviews before IC presentation
Step 5: Compliance review before publication (sell-side)
```

**Hub Implementation**:
- Project description includes clearance status
- Snapshot for "Pending Review" before final
- Shared project with supervisor access
- Comments/notes for feedback

### Information Barriers

**Chinese Walls for Multi-Service Firms**:

**Challenge**: Investment banking and research must be separated

**Agentii Controls**:
- Separate accounts for banking vs. research
- No cross-account data sharing
- Individual user access logs
- Project-level permissions restrict visibility

**Best Practice**: Dedicated Agentii instances for separated businesses

---

## AI-Specific Compliance Considerations

### Model Risk Management

**Understanding Agent Limitations**:

**Required Documentation**:
1. **Agent Methodology**: What analytical approach does each agent use?
   - Documented in agent descriptions (available in Hub)
   - Retrieval: Document synthesis from structured sources
   - Valuation: DCF, comps, precedent transactions
   - Risk: Scenario modeling and stress testing
   - Dashboard: Pattern recognition from visual data

2. **Agent Limitations**: What can agents not do?
   - Cannot predict future stock prices
   - Cannot access MNPI
   - Cannot replace professional judgment
   - May misinterpret complex or ambiguous data

3. **Validation Requirements**: How to validate agent outputs?
   - Cross-reference data sources cited
   - Compare to independent analysis
   - Use multi-agent consensus
   - Apply professional skepticism

**Compliance Policy Template**:
```
[Firm Name] AI-Assisted Research Policy

1. Purpose: Define appropriate use of Agentii AI research tools

2. Scope: All research analysts using Agentii

3. Principles:
   - AI tools augment, not replace, analyst judgment
   - All AI outputs require analyst review and validation
   - Final investment decisions rest with analyst/committee
   - Documentation of AI usage required for audit trail

4. Procedures:
   - Analysts must review agent methodologies before use
   - Analysts must validate data sources cited by agents
   - Analysts must document review and validation
   - Supervisors must review high-stakes recommendations

5. Prohibited Uses:
   - Relying solely on AI output without validation
   - Using AI for mechanical trading signals
   - Publishing AI-generated content without disclosure

6. Recordkeeping:
   - Retain all Agentii projects for 7 years
   - Export key analyses for compliance files
   - Document validation in project descriptions
```

### Data Quality and Provenance

**Compliance Question**: "What data sources does Agentii use?"

**Answer Documentation**:
- See [Data Overview](/docs/01-data-and-sources/data-overview.md)
- See [Institutional Sources](/docs/01-data-and-sources/institutional-sources.md)
- See [Data Quality](/docs/01-data-and-sources/data-quality.md)

**Key Points for Compliance**:
- Public filings (SEC EDGAR): 10-K, 10-Q, 8-K, proxies
- Earnings call transcripts (public)
- Company investor relations materials (public)
- Licensed third-party data (properly licensed)
- No MNPI (material non-public information)

**Source Attribution**:
- Agents cite sources in results
- Users can verify source documents
- Data quality metrics provided

### MNPI and Inside Information

**Risk**: Accidentally incorporating material non-public information

**Agentii Safeguards**:
- Only public data sources accessed
- No expert network transcripts (potential MNPI)
- No social media scraping (potential MNPI)
- No insider communications

**Compliance Procedures**:
1. If analyst has MNPI, do NOT use Agentii for that security
2. If MNPI obtained after analysis, quarantine and document
3. Maintain insider lists separately from Agentii
4. Train analysts on MNPI policies

---

## Disclosure and Transparency

### Client Disclosure

**For Investment Advisers** (Buy-Side):

**ADV Part 2A Disclosure Template**:
```
"Our investment research process is supported by Agentii, an AI-powered
research platform that synthesizes public company filings, earnings
transcripts, and financial data. All AI-generated insights are reviewed
and validated by our investment professionals. Final investment decisions
reflect the professional judgment of our portfolio managers and analysts."
```

**For Research Providers** (Sell-Side):

**Research Report Disclosure Template**:
```
"This report was prepared with analytical support from Agentii AI research
tools. The analyst reviewed and validated all AI-generated content. The
investment rating, price target, and recommendations reflect the analyst's
independent professional judgment."
```

### Methodology Transparency

**What to Disclose**:
- Use of AI tools in research process (Yes)
- Specific AI vendor and tools (Agentii)
- Human oversight and validation (Required)
- Final judgment rests with analyst (Always)

**What NOT to Disclose**:
- Proprietary prompts or methodologies (Optional)
- Specific agent configurations (Optional)
- Task-by-task breakdowns (Too granular)

---

## Compliance Monitoring and Reporting

### Ongoing Compliance Surveillance

**Monthly Compliance Review**:
```
Review Checklist:
□ Sample 10% of research projects
□ Verify analyst validation documented
□ Check source attribution present
□ Confirm disclosure language included
□ Review any compliance exceptions
□ Document review in compliance file
```

**Quarterly Compliance Report**:
```
Report to Chief Compliance Officer:

1. Agentii Usage Statistics
   - Projects created: [#]
   - Active analysts: [#]
   - Reports published: [#]

2. Compliance Metrics
   - Projects sampled: [#]
   - Compliance exceptions: [#]
   - Remediation actions: [description]

3. Training and Updates
   - Analysts trained: [#]
   - Policy updates: [description]

4. Upcoming Actions
   - Additional training needed
   - Policy enhancements
```

### Regulatory Exam Preparedness

**If SEC/FINRA Examines Your Firm**:

**Documents to Provide**:
1. Agentii usage policy (written procedures)
2. Analyst training records
3. Sample research projects (exported from Hub)
4. Compliance review documentation
5. Disclosure language examples

**Questions to Expect**:
- "How do you ensure AI outputs are accurate?"
  - Answer: Multi-step validation process (see policy)
- "How do you supervise analysts using AI?"
  - Answer: Supervisor review of projects; compliance sampling
- "What data sources does the AI use?"
  - Answer: Public filings, transcripts, licensed data (see documentation)
- "How do you prevent MNPI contamination?"
  - Answer: Only public sources; separate insider lists; training

**Hub as Evidence**:
- Export sample projects showing full analytical process
- Demonstrate timestamp trail and task history
- Show analyst validation notes
- Prove disclosure compliance

---

## Common Compliance Pitfalls

### Pitfall 1: Insufficient Documentation

**Problem**: Analyst uses Agentii but doesn't document validation

**Risk**: Cannot prove compliance with supervision requirements

**Fix**:
- Require project descriptions documenting thesis
- Require analyst notes on task results
- Enforce snapshot descriptions for key findings
- Export and save final project for compliance file

### Pitfall 2: Over-Reliance on AI

**Problem**: Analyst accepts agent outputs without independent validation

**Risk**: Violates professional judgment requirements; potential errors

**Fix**:
- Training emphasizing AI as augmentation, not replacement
- Policy requiring multi-agent consensus for material conclusions
- Supervisor spot-checks for independent validation
- Compliance sampling reviews validation quality

### Pitfall 3: Inadequate Disclosure

**Problem**: Published research doesn't disclose AI assistance

**Risk**: Violates transparency requirements; potential client/regulator concerns

**Fix**:
- Standard disclosure language in all templates
- Compliance pre-clearance checks disclosure presence
- Training on disclosure requirements

### Pitfall 4: Poor Recordkeeping

**Problem**: Projects deleted; audit trail lost

**Risk**: Cannot satisfy regulatory examination requests

**Fix**:
- Policy prohibiting deletion of published research projects
- Archive (don't delete) completed projects
- Export and save critical analyses to compliance server
- Retain for 7 years per SEC/FINRA requirements

### Pitfall 5: Inconsistent Supervision

**Problem**: Some analysts supervised closely; others not reviewed

**Risk**: Inconsistent compliance; regulatory criticism

**Fix**:
- Document supervision procedures in policy
- Regular (monthly/quarterly) compliance sampling
- Track supervision in compliance system
- Supervisor dashboard showing review status

---

## Compliance Checklist

**Before Using Agentii**:
- [ ] Written compliance policy adopted
- [ ] Analysts trained on AI usage and limitations
- [ ] Disclosure language approved by compliance
- [ ] Recordkeeping procedures established
- [ ] Supervision process defined

**For Each Research Project**:
- [ ] Project description documents thesis and scope
- [ ] Analyst reviews and validates all agent outputs
- [ ] Data sources verified as appropriate
- [ ] Analyst validation documented
- [ ] Disclosure included (if published)
- [ ] Supervisor review (if required)
- [ ] Project exported for compliance file (if material)

**Ongoing Compliance**:
- [ ] Monthly/quarterly compliance sampling
- [ ] Analyst retraining annually
- [ ] Policy reviewed and updated annually
- [ ] Exam readiness maintained
- [ ] Retention requirements satisfied

---

## Next Steps

- **Understand risk management**: See [Risk Management Best Practices](/docs/05-best-practices/risk-management.md)
- **Set up team workflows**: See [Team Collaboration](/docs/05-best-practices/team-collaboration.md)
- **Learn about audit features**: See [Compliance & Audit](/docs/09-account-management/compliance-audit.md)
- **Review data sources**: See [Data Quality](/docs/00-introduction/data-quality.md)
- **Build compliant workflows**: See [Project Workflows](/docs/02-intelligence-hub/project-workflows.md)
