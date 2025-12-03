---
title: "Agent Configuration"
description: "Master agent selection, customization, and configuration: choose specialized agents, modify prompts, create ensembles, and optimize analytical workflows."
author: "Agentii Documentation"
date: "2025-01-26"
updated: "2025-01-26"
audience: "Advanced"
domain: "Intelligence Hub"
tags: ["agents", "configuration", "prompts", "ensembles", "customization"]
relatedDocs:
  - "/docs/00-introduction/core-concepts.md"
  - "/docs/02-intelligence-hub/hub-fundamentals.md"
  - "/docs/02-intelligence-hub/tasks-guide.md"
  - "/docs/02-intelligence-hub/task-execution.md"
  - "/docs/04-agent-types/agent-overview.md"
  - "/docs/04-agent-types/agent-confidence-reliability.md"
---

# Agent Configuration Guide

Agents are specialized AI systems configured with prompts, tools, and methodologies for financial analysis. This guide explains how to select appropriate agents, customize their behavior through prompt engineering, create multi-agent ensembles, and optimize configurations for different analytical workflows.

---

## What Is Agent Configuration?

**Definition**: The process of selecting, customizing, and combining agents to optimize analytical outcomes for specific research questions.

### Why Configuration Matters

Agentii provides pre-built agents optimized for common financial workflows. However, sophisticated users often need:

- **Custom prompts**: Tailored instructions for specific analytical approaches
- **Agent combinations**: Multi-agent consensus for complex questions
- **Ensemble workflows**: Parallel or sequential agent orchestration
- **Behavioral tuning**: Adjusting agent behavior for industry-specific analysis

Proper configuration increases analytical accuracy, reduces false positives, and enables institutional-grade research at scale.

---

## Agent Management Interface

### Accessing Agents

From Intelligence Hub:
1. Click **Agents** in the left sidebar
2. You'll see the Agents Management page

**Interface sections**:
- **Header**: "Agents Management" with search bar
- **Filter tabs**: "All", "Templates", "Custom"
- **Agent cards**: Grid or table view of available agents
- **Primary actions**: "Create Agent", "Create Ensemble"

### Agent Card Information

Each agent card displays:

- **Agent name**: Descriptive identifier (e.g., "Valuation Agent - DCF", "Risk Agent - Downside Scenarios")
- **Agent type badge**: Template (pre-built) or Custom (user-created)
- **Description**: Brief summary of agent's specialization
- **Prompt preview**: First 100 characters of agent prompt
- **Last modified date**: When agent was last updated
- **Actions**: Edit, Duplicate, Delete (permissions-dependent)

---

## Pre-Built Agent Templates

### Understanding Template Agents

**Template agents** (also called "Group A agents") are pre-configured by Agentii for common financial workflows. They are:

- **Immutable**: Cannot modify prompts directly (preserves institutional consistency)
- **Optimized**: Professionally tuned for accuracy and reliability
- **Tested**: Validated across thousands of financial analysis scenarios
- **Versioned**: Updated by Agentii when methodologies improve

**When to use templates**:
- Standard financial analysis (valuation, risk, competitive analysis)
- Compliance-sensitive workflows requiring audit trails
- Team collaboration where consistency is critical
- Learning how agents work (templates serve as examples)

### Available Template Agents

#### Retrieval-Focused Agents

**Purpose**: Document synthesis, fact-finding, and information extraction

**Specializations**:
- **Company Overview Agent**: Business model, products/services, competitive positioning
- **Financial Metrics Agent**: Revenue trends, profitability, balance sheet analysis
- **Management Commentary Agent**: Earnings call transcripts, guidance, tone analysis
- **Industry Research Agent**: Sector trends, regulatory changes, macro factors

**Best for**: Foundational research, coverage initiation, quick stock checks

---

#### Valuation Agents

**Purpose**: Financial modeling and intrinsic value estimation

**Specializations**:
- **DCF Valuation Agent**: Discounted cash flow models with sensitivity analysis
- **Comparable Company Agent**: Peer valuation multiples (P/E, EV/EBITDA, P/S)
- **Precedent Transaction Agent**: M&A comps and acquisition multiples
- **Sum-of-the-Parts Agent**: Conglomerate valuation and segment analysis

**Best for**: Equity research, M&A analysis, price target setting

---

#### Risk Agents

**Purpose**: Downside scenario analysis and risk factor identification

**Specializations**:
- **Downside Scenario Agent**: Bear case financial modeling
- **Risk Factor Agent**: Systematic risk identification and ranking
- **Credit Risk Agent**: Leverage analysis, covenant compliance, default probability
- **Competitive Threat Agent**: New entrants, substitutes, competitive erosion risks

**Best for**: Portfolio risk management, short thesis development, stress testing

---

#### Dashboard Agents

**Purpose**: Visual data presentation and pattern recognition

**Specializations**:
- **Financial Dashboard Agent**: Charts, graphs, and visual KPI summaries
- **Trend Analysis Agent**: Time-series visualization and inflection point detection
- **Peer Comparison Agent**: Comparative visualization across multiple companies
- **Performance Dashboard Agent**: Portfolio performance attribution and analytics

**Best for**: Executive presentations, board reports, quick visual insights

---

## Creating Custom Agents

### When to Create Custom Agents

Use custom agents when:

- **Industry-specific analysis**: Biotech clinical trial interpretation, SaaS cohort analysis, banking ALLL modeling
- **Proprietary methodologies**: Your firm's unique analytical frameworks
- **Specialized questions**: Niche research angles not covered by templates
- **Learning and experimentation**: Testing new analytical approaches

**Example scenarios**:
- "Create custom agent for analyzing semiconductor foundry utilization rates"
- "Build agent specialized in REIT FFO analysis with sector-specific adjustments"
- "Design agent for analyzing e-commerce retention cohorts and LTV/CAC"

### Step-by-Step Custom Agent Creation

#### Step 1: Click "Create Agent" Button

From Agents page, click **Create Agent** in the top-right corner.

A dialog appears with configuration fields.

#### Step 2: Choose Agent Type

**Template-based (Recommended for beginners)**:
- Select a pre-built template as starting point
- Modify prompt to specialize behavior
- Inherits template's tool configuration

**Blank Agent (Advanced users)**:
- Start from scratch
- Define all behavior via custom prompt
- More flexibility but requires prompt engineering expertise

#### Step 3: Configure Agent Details

**Agent Name** (Required)
- Descriptive identifier for your custom agent
- Use naming convention: "[Type] Agent - [Specialization]"

**Examples**:
- ✅ "Valuation Agent - SaaS ARR Modeling"
- ✅ "Risk Agent - Semiconductor Supply Chain"
- ✅ "Retrieval Agent - FDA Approval Documents"
- ❌ "My Agent" (too vague)
- ❌ "Agent 1" (no context)

**Agent Description** (Optional)
Brief explanation of agent's purpose and use cases.

**Example**:
"Specialized agent for analyzing SaaS companies using ARR growth, net retention, and Rule of 40 metrics. Optimized for multi-year cohort analysis and LTV/CAC calculation."

#### Step 4: Write Custom Prompt

The prompt defines agent behavior. This is the most critical step.

**Prompt structure**:
```
You are a [role] specializing in [domain].

Your task is to [objective].

When analyzing [subject], you should:
1. [Step 1 instruction]
2. [Step 2 instruction]
3. [Step 3 instruction]

Focus on [key areas].

Provide [output format] including [specific deliverables].

Use [data sources] and [methodologies].
```

**Example prompt** (SaaS Valuation Agent):
```
You are a financial analyst specializing in SaaS company valuation.

Your task is to build a comprehensive valuation model for the target SaaS company using industry-specific metrics.

When analyzing the company, you should:
1. Calculate ARR growth rate over the past 8 quarters
2. Determine net revenue retention (NRR) and gross retention rates
3. Compute CAC payback period and LTV/CAC ratio
4. Assess "Rule of 40" score (growth rate + FCF margin)
5. Build DCF model using ARR-based revenue projections

Focus on unit economics, retention trends, and sustainable growth rates.

Provide a detailed valuation range (low, base, high cases) including:
- DCF intrinsic value with sensitivity table
- Comparable SaaS company EV/ARR multiples
- Growth-adjusted valuation (PEG-like for SaaS)

Use company financial filings, earnings transcripts, and industry SaaS benchmarks.
```

**Prompt engineering tips**:
- **Be specific**: "Calculate net revenue retention" is better than "analyze retention"
- **Define output format**: Tell agent exactly what to deliver
- **Reference methodologies**: If you want DCF, explicitly say "DCF"
- **Set boundaries**: "Focus on last 8 quarters" prevents irrelevant historical analysis
- **Industry terminology**: Use domain-specific terms (ARR, NRR, Rule of 40) for precision

#### Step 5: Configure Agent Tools (Advanced)

**Tool selection** (available in advanced mode):
- **Document retrieval**: Access to earnings transcripts, filings, research reports
- **Financial data**: Structured financial statement data
- **Web search**: Real-time information gathering
- **Calculation tools**: Spreadsheet-like computation capabilities
- **Visualization**: Chart and graph generation

**For most custom agents**: Leave tool configuration as default (inherits from template or platform defaults).

#### Step 6: Save and Test

Click **Create Agent**.

**Immediate next steps**:
1. Navigate to Tasks page
2. Create a test task using your new custom agent
3. Run on a sample ticker to validate behavior
4. Iterate prompt if results don't meet expectations

---

## Editing and Duplicating Agents

### Editing Custom Agents

**Permissions**:
- **Template agents (Group A)**: Cannot edit directly (immutable)
- **Custom agents (Group B)**: Can edit if you created it or have appropriate permissions

**How to edit**:
1. From Agents page, locate your custom agent
2. Click **Edit** button (pencil icon)
3. Modify name, description, or prompt
4. Click **Save**

**When to edit**:
- Prompt isn't producing desired results (iterate prompt engineering)
- Adding new analytical steps to workflow
- Updating methodology as industry standards evolve
- Fixing typos or clarifying instructions

**Important**: Editing an agent updates all future task executions. Past task results remain unchanged (they used the original prompt at execution time).

### Duplicating Agents

**Purpose**: Create a copy of an existing agent (template or custom) as a starting point for a new custom agent.

**How to duplicate**:
1. Locate agent you want to copy
2. Click **Duplicate** button
3. System creates "[Original Name] (Copy)" with identical prompt
4. Edit the duplicated agent to specialize it

**When to duplicate**:
- Want to customize a template agent (duplicate, then modify prompt)
- Creating variations of a custom agent for different sectors
- Preserving original agent while testing new prompt

**Example workflow**:
1. Duplicate "DCF Valuation Agent" template
2. Rename to "DCF Valuation Agent - High Growth Tech"
3. Modify prompt: Add instructions for modeling high growth rates (>30% CAGR) and longer projection periods
4. Save and test on high-growth tech stocks

---

## Multi-Agent Ensembles

### What Is an Ensemble?

**Definition**: A coordinated group of agents executing in parallel or sequentially to answer complex questions requiring multi-method analysis.

**Why ensembles matter**:
- **Consensus validation**: Multiple agents agree → higher confidence
- **Methodological diversity**: DCF + Comps + Precedent Transactions → triangulated valuation
- **Bias reduction**: Single agent may have blindspots; ensembles surface diverse perspectives
- **Complex workflows**: Break multi-step analysis into specialized agent tasks

### Creating an Ensemble

#### Step 1: Click "Create Ensemble"

From Agents page, click **Create Ensemble** button.

#### Step 2: Configure Ensemble Details

**Ensemble Name** (Required)
Descriptive name indicating the analytical workflow.

**Examples**:
- "Comprehensive Valuation Ensemble" (DCF + Comps + Precedent)
- "Risk Consensus Ensemble" (Downside Scenario + Risk Factor + Credit Risk)
- "Earnings Analysis Ensemble" (Financial Metrics + Management Commentary + Valuation Update)

**Ensemble Description** (Optional)
Explain the purpose and expected outputs.

**Example**:
"Multi-method valuation ensemble combining DCF, comparable company, and precedent transaction analysis to establish intrinsic value range with triangulation. Use for coverage initiations and major price target revisions."

#### Step 3: Select Agents

Choose 2-5 agents to include in the ensemble.

**Selection criteria**:
- **Complementary specializations**: Don't include two identical agents
- **Logical sequence**: If sequential execution, order matters
- **Manageable scope**: 2-5 agents is optimal; more becomes overwhelming

**Example ensemble compositions**:

**Valuation Ensemble**:
1. DCF Valuation Agent
2. Comparable Company Agent
3. Precedent Transaction Agent

**Risk Ensemble**:
1. Downside Scenario Agent
2. Risk Factor Agent
3. Competitive Threat Agent

**Comprehensive Analysis Ensemble**:
1. Company Overview Agent (context)
2. Financial Metrics Agent (data)
3. DCF Valuation Agent (valuation)
4. Risk Factor Agent (risks)

#### Step 4: Configure Execution Mode

**Parallel execution** (default):
- All agents run simultaneously
- Fastest option (no waiting for sequential completion)
- Agents operate independently
- Results appear as each agent completes

**Sequential execution**:
- Agents run one after another
- Later agents can reference earlier agents' results
- Slower but enables logical workflows
- Useful when Agent 2 needs Agent 1's output

**When to use sequential**:
- "First, get company overview. Then, based on that context, perform valuation."
- "First, identify risks. Then, model those risks in downside scenarios."

**When to use parallel**:
- "Get DCF, Comps, and Precedent valuations independently for triangulation."
- "Run risk analysis, competitive analysis, and financial analysis simultaneously."

#### Step 5: Save Ensemble

Click **Create Ensemble**.

**Using the ensemble**:
1. Navigate to Tasks page
2. Create new task
3. In agent selector, choose your ensemble
4. Run task → all ensemble agents execute on the same question
5. Review results from all agents for comprehensive analysis

---

## Advanced Prompt Engineering

### Prompt Components

Professional agent prompts typically include:

**1. Role Definition**
"You are a [role] with expertise in [domain]."

**2. Objective Statement**
"Your task is to [clear objective]."

**3. Methodology Instructions**
Step-by-step analytical process.

**4. Data Sources**
Where agent should look for information.

**5. Output Format**
Exactly what deliverables are expected.

**6. Constraints and Boundaries**
Time periods, scope limits, exclusions.

### Prompt Engineering Best Practices

**Practice 1: Be Explicit About Methodology**

❌ **Vague**: "Perform valuation analysis"

✅ **Explicit**: "Build a discounted cash flow (DCF) model using the following steps:
1. Project free cash flows for 5 years using consensus revenue growth and target operating margins
2. Calculate terminal value using perpetuity growth method (2-3% growth)
3. Discount cash flows using WACC calculated from comparable company betas
4. Provide sensitivity table varying revenue growth (±200 bps) and WACC (±100 bps)"

**Practice 2: Define Output Structure**

❌ **Vague**: "Analyze the company's competitive position"

✅ **Structured**: "Provide competitive analysis in the following format:
- Market share trends (past 3 years)
- Competitive advantages (list 3-5 key moats)
- Competitive threats (identify top 3 risks)
- Overall positioning assessment (leader/challenger/follower)
- Supporting evidence for each claim"

**Practice 3: Set Temporal Boundaries**

❌ **Unbounded**: "Analyze revenue growth"

✅ **Bounded**: "Analyze revenue growth over the past 8 quarters (2 years). Focus on most recent 4 quarters for trend assessment. Ignore pre-2022 data as business model changed."

**Practice 4: Use Examples**

Include examples in prompts to show desired format:

"Present risks in the following format:

**Risk 1: [Risk Name]**
- Severity: High/Medium/Low
- Probability: High/Medium/Low
- Impact: [What happens if risk materializes]
- Mitigation: [How company is addressing this]

Example:
**Risk 1: iPhone Demand Decline**
- Severity: High
- Probability: Medium
- Impact: Revenue decline of 10-15% if smartphone market shrinks
- Mitigation: Services revenue diversification, wearables growth"

**Practice 5: Reference Industry Standards**

When applicable, tell agent to follow industry methodologies:

"Use CFA Institute standards for DCF valuation. Follow GICS sector classification for peer selection. Reference SFDR regulations for ESG factor materiality."

### Testing and Iterating Prompts

**Workflow**:
1. Write initial prompt
2. Create test task with sample ticker (e.g., AAPL, MSFT)
3. Review results
4. Identify gaps (missing analysis, wrong format, incorrect methodology)
5. Revise prompt to address gaps
6. Re-test with same ticker
7. Repeat until results consistently meet standards

**Common prompt issues and fixes**:

| Issue | Fix |
|-------|-----|
| Results too generic | Add specificity: "Focus on [specific factor]" |
| Wrong time period analyzed | Add temporal constraint: "Last 8 quarters only" |
| Missing key analysis | Add explicit step: "Step 4: Calculate Rule of 40" |
| Output format inconsistent | Provide template: "Use the following format: ..." |
| Agent ignores instructions | Move critical instruction to beginning of prompt |

---

## Agent Confidence and Reliability

### Understanding Confidence Scores

Each agent result includes a confidence indicator:

- **High Confidence**: Agent found strong, consistent data; methodology applied cleanly
- **Medium Confidence**: Some data gaps or inconsistencies; methodology applied with assumptions
- **Low Confidence**: Significant data gaps or conflicting information; results are preliminary

**What affects confidence**:
- **Data availability**: Complete financial statements → high confidence; sparse data → low confidence
- **Data consistency**: Consistent trends → high confidence; volatile or contradictory data → low confidence
- **Methodology fit**: Standard analysis (S&P 500 DCF) → high confidence; unusual situation (pre-revenue biotech DCF) → low confidence

**How to use confidence scores**:
- **High confidence**: Can rely on results for decision-making
- **Medium confidence**: Verify with additional analysis or human review
- **Low confidence**: Use as directional input only; manual research required

### Multi-Agent Consensus

**Consensus strengthens confidence**:

If DCF, Comps, and Precedent Transaction agents all estimate fair value at $180-190, confidence in $185 target is **high**.

If DCF suggests $180, but Comps suggest $140, and Precedent suggests $200, confidence is **low** → investigate why methods diverge.

**Interpreting divergence**:
- **DCF much higher than Comps**: Market may be undervaluing the stock (opportunity) or DCF assumptions too aggressive (review growth rates)
- **Precedent Transactions higher than current trading**: M&A premium exists, but may not apply to stand-alone valuation
- **All methods converge**: Strong validation of fair value estimate

---

## Agent Performance Optimization

### Optimizing Task Prompts for Agent Execution

The task prompt (your question) matters as much as the agent's configuration.

**Poor task prompt** (even with great agent):
- "Analyze Apple"
- Problem: Too vague; agent doesn't know what to focus on

**Optimized task prompt**:
- "Build a DCF valuation for Apple (AAPL) using consensus revenue growth estimates, target operating margins of 30%, and WACC of 8%. Provide base, bear, and bull case valuations."
- Benefit: Agent knows exactly what to deliver; constraints are clear

**Best practices for task prompts**:
- Include ticker symbol explicitly
- Specify time period if relevant ("Q4 2024", "FY2025")
- Define key assumptions ("assume 5% revenue growth")
- Request specific deliverables ("provide sensitivity table")

### Managing Agent Execution Time

**Factors affecting execution time**:
- **Data richness**: Analyzing Apple (extensive data) takes longer than analyzing micro-cap (sparse data)
- **Prompt complexity**: Simple valuation (3 min) vs. comprehensive analysis with scenarios (7 min)
- **Agent type**: Retrieval agents (fast, 1-3 min) vs. Valuation agents (slower, 3-7 min)

**Optimization tips**:
- **Narrow scope**: "Analyze last 4 quarters" not "Analyze full history"
- **Limit deliverables**: Request 3 key risks, not exhaustive list
- **Use appropriate agent**: Don't use comprehensive ensemble for quick check

---

## Collaboration and Sharing Agents

### Team Agent Libraries

Custom agents can be shared across team members:

**Sharing workflow**:
1. Create custom agent optimized for your workflow
2. From Agents page, select agent
3. Click **Share** button
4. Add team members by email
5. Set permissions (view-only or edit)

**Benefits**:
- Institutional consistency (everyone uses same methodology)
- Efficiency (no need to recreate agents)
- Knowledge preservation (agents encode firm's analytical IP)

### Agent Permissions

| Role | View Templates | Create Custom | Edit Own Custom | Edit Shared Custom | Delete Agents |
|------|----------------|---------------|-----------------|-------------------|---------------|
| Viewer | ✅ | ❌ | ❌ | ❌ | ❌ |
| Analyst | ✅ | ✅ | ✅ | ❌ | ✅ (own only) |
| Lead | ✅ | ✅ | ✅ | ✅ | ✅ |

---

## Troubleshooting Agent Configuration

### Issue 1: Agent Not Producing Expected Results

**Symptom**: Agent results don't match your expectations; missing key analysis or wrong format.

**Solutions**:
1. **Review prompt specificity**: Add explicit instructions for missing elements
2. **Check temporal boundaries**: Ensure agent is analyzing correct time period
3. **Verify ticker context**: Confirm agent has access to correct company data
4. **Test with known benchmark**: Run agent on well-known stock (AAPL) to see if behavior is consistent
5. **Iterate prompt**: Revise and re-test until results improve

### Issue 2: Agent Results Have Low Confidence

**Symptom**: All results marked "Low Confidence"; agent frequently unable to complete analysis.

**Solutions**:
1. **Check data availability**: Analyze a larger, more liquid stock first (e.g., S&P 500 component)
2. **Simplify prompt**: Reduce scope ("Analyze last 4 quarters" instead of "Analyze last 10 years")
3. **Use appropriate agent type**: Valuation agents struggle with pre-revenue companies; use Retrieval agents instead
4. **Review ticker validity**: Ensure ticker symbol is correct and stock is actively traded

### Issue 3: Ensemble Results Conflict

**Symptom**: Agents in ensemble produce contradictory results (e.g., one says "High Risk", another says "Low Risk").

**Solutions**:
1. **This is normal**: Ensembles are designed to surface diverse perspectives
2. **Investigate divergence**: Read each agent's reasoning; understand why they differ
3. **Apply human judgment**: You decide which agent's perspective is most relevant
4. **Refine prompts**: If conflict is due to vague instructions, make prompts more specific
5. **Sequential execution**: If Agent 2 should reference Agent 1's findings, switch to sequential mode

### Issue 4: Cannot Edit Agent

**Symptom**: Edit button is disabled for an agent you want to modify.

**Solutions**:
1. **Template agents are immutable**: You cannot edit Group A (template) agents directly
2. **Duplicate instead**: Duplicate the template agent, then edit the copy
3. **Permission issue**: If it's a shared custom agent, you may not have edit permissions
4. **Contact team lead**: Request edit permissions or ask lead to make changes

---

## Best Practices Summary

### 1. Start with Templates, Customize When Needed
Use pre-built templates for 80% of workflows. Create custom agents only when templates don't fit.

### 2. Name Agents Descriptively
"Valuation Agent - SaaS ARR Modeling" is better than "My Custom Agent."

### 3. Write Explicit, Structured Prompts
Tell agents exactly what to do, how to do it, and what to deliver.

### 4. Test Before Deploying
Create test tasks with sample tickers before using custom agents in production research.

### 5. Use Ensembles for Validation
Multi-agent consensus increases confidence; divergence signals areas needing human judgment.

### 6. Iterate Prompts Based on Results
Prompt engineering is iterative; expect to refine prompts multiple times.

### 7. Share Successful Agents with Team
Build institutional agent library to preserve firm's analytical IP.

### 8. Archive Outdated Agents
Remove agents that are no longer used to keep library clean.

---

## Next Steps

- **Ready to execute tasks with configured agents?** See [Task Execution](/docs/02-intelligence-hub/task-execution.md)
- **Want to interpret agent results?** See [Results Analysis](/docs/02-intelligence-hub/results-analysis.md)
- **Learn more about agent types and methodologies?** See [Agent Types & Methodologies](/docs/04-agent-types/agent-overview.md)
- **See agent configuration in action?** See [Project Workflows](/docs/02-intelligence-hub/project-workflows.md)
- **Understand agent reliability?** See [Agent Confidence & Reliability](/docs/04-agent-types/agent-confidence-reliability.md)
