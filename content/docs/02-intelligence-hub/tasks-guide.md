---
title: "Tasks Guide"
description: "Comprehensive guide to creating, configuring, and managing analytical tasks in Intelligence Hub."
author: "Agentii Documentation"
date: "2025-01-26"
updated: "2025-01-26"
audience: "Intermediate"
domain: "Intelligence Hub"
tags: ["tasks", "agents", "execution", "monitoring", "workflows"]
relatedDocs:
  - "/docs/02-intelligence-hub/hub-fundamentals.md"
  - "/docs/02-intelligence-hub/projects-guide.md"
  - "/docs/02-intelligence-hub/agents-configuration.md"
  - "/docs/02-intelligence-hub/task-execution.md"
  - "/docs/04-agent-types/agent-overview.md"
---

# Tasks Guide

Tasks represent the fundamental unit of analytical work in Intelligence Hub. Each task assigns a specific question or analysis to an agent, executes within the context of a project and snapshot, and produces structured results. This guide provides comprehensive coverage of task creation, configuration, monitoring, and management workflows.

---

## Understanding Tasks

### Task Definition

A **task** is an independent analytical job that:
- Belongs to a specific project and snapshot
- Executes using a pre-built agent template or custom prompt
- Produces structured output with confidence scores and source attribution
- Transitions through defined status states (todo → queued → in progress → done)
- Maintains execution metadata (start time, duration estimate, progress percentage)

### Task Lifecycle

```
Creation → Configuration → Queuing → Execution → Completion
    ↓           ↓             ↓          ↓           ↓
  Status:    todo        queued    in progress    done
```

**Status Descriptions**:
- **todo**: Task created but not yet started; awaiting user action
- **queued**: Task submitted for execution but waiting for available execution slot
- **in progress**: Task currently executing; agent making tool calls and generating output
- **done**: Task completed successfully; results available for review

---

## Creating Tasks

### Prerequisites

Before creating tasks, ensure:
1. A project exists (see [Projects Guide](/docs/02-intelligence-hub/projects-guide.md))
2. You've selected the project using the **Project Selector** dropdown
3. System has auto-created a snapshot (or you've manually created one)

### Step-by-Step Task Creation

#### 1. Navigate to Tasks Page

Click **Tasks** in the left sidebar. The interface displays:
- **Project Selector**: Dropdown showing active project
- **Snapshot Information**: Current snapshot ID and metadata
- **Task List**: Table of existing tasks (empty for new projects)
- **New Agent Task** button: Primary action for task creation

#### 2. Click "New Agent Task"

When you click the button:
- System creates a new task with incremented short ID (T01, T02, T03...)
- Task appears in table with "todo" status
- Task row becomes clickable for configuration

#### 3. Configure Task

Click the task row to open configuration panel. You have two configuration modes:

**Mode A: Select Pre-Built Agent**
1. Click "Agent" selector (empty by default)
2. Browse agent library with filters:
   - All Agents
   - Templates (system-provided)
   - Custom (user-created)
   - Favorites
3. Select agent from list
4. Task inherits:
   - Agent name (displayed in "Name" column)
   - Agent dimension (displayed in "Label" column)
   - Agent prompt (pre-configured methodology)

**Mode B: Enter Custom Prompt**
1. Leave agent selector empty
2. Type or paste custom analytical prompt in the prompt field
3. Task displays:
   - Your custom prompt text as "Name"
   - "Custom" label in "Label" column

#### 4. Review Task Configuration

After configuration, verify:
- **Task ID**: Sequential identifier (T01, T02, etc.)
- **Name**: Agent name or custom prompt preview
- **Status**: Should be "todo"
- **Label**: Agent dimension or "Custom"
- **Agent Details**: Visible in expanded view

---

## Task Table Interface

The Tasks page displays all tasks in a sortable, filterable table:

### Table Columns

| Column | Description | Example |
|--------|-------------|---------|
| **Task** | Sequential short ID | T01, T02, T03 |
| **Name** | Agent name or custom prompt | "Earnings Call Analysis" |
| **Status** | Current execution state | todo, queued, in progress, done |
| **Label** | Agent dimension or "Custom" | Earnings, Competition, Custom |
| **Progress** | Execution progress or queue position | "3m 24s remaining" or "Position: #2 in queue" |
| **Actions** | Row-level operations | Edit, Delete, Run |

### Task Status Indicators

**Visual Indicators by Status**:
- **todo**: Gray badge, "Start Task" button visible
- **queued**: Yellow badge, "Position: #N in queue" text
- **in progress**: Blue badge, progress bar with time remaining
- **done**: Green badge, "Completed" text

### Progress Display Logic

**When task is in progress**:
- Progress bar shows completion percentage (0-100%)
- Text shows estimated time remaining (e.g., "3m 24s remaining")
- Progress updates in real-time via WebSocket connection

**When task is queued**:
- No progress bar
- Text shows queue position (e.g., "Position: #2 in queue")
- Position updates as tasks ahead complete

**When task is done**:
- Progress bar fills to 100% (green)
- Text changes to "Completed"
- Timestamp shows completion time

---

## Configuring Task Agents

### Using Pre-Built Agents

Pre-built agents provide tested methodologies for common analyses:

**Retrieval-Focused Agents**:
- Document synthesis from SEC filings, earnings calls, research reports
- Fact-finding and information extraction
- Summarization of complex financial documents

**Valuation Agents**:
- DCF (Discounted Cash Flow) modeling
- Comparable company analysis
- Precedent transaction analysis
- Valuation sensitivity scenarios

**Risk Agents**:
- Downside scenario modeling
- Risk factor identification
- Stress testing and sensitivity analysis
- Tail risk assessment

**Dashboard Agents**:
- Visual pattern recognition
- Financial metric trend analysis
- Comparative visualization across peers

**How to Select**:
1. Click agent selector in task configuration
2. Browse by dimension (Retrieval, Valuation, Risk, Dashboard)
3. Read agent description and methodology
4. Click to assign to task

### Using Custom Prompts

Custom prompts enable specialized analyses beyond template agents:

**When to Use Custom Prompts**:
- Highly specialized analytical questions unique to your thesis
- Combining multiple analytical techniques in one task
- Industry-specific analysis requiring domain knowledge
- Iterative refinement of analytical approach

**Custom Prompt Best Practices**:
- Be specific: "Analyze Apple's Services segment growth trajectory and margin expansion potential for FY2025-2027"
- Provide context: "Focus on subscription revenue, App Store policies, and competitive dynamics"
- Define output format: "Provide 3-year revenue forecast, margin assumptions, and key risk factors"
- Reference data sources: "Use latest 10-Q filings and management commentary from recent earnings calls"

**Example Custom Prompts**:

```
Prompt 1: Competitive Positioning Analysis
"Analyze Tesla's competitive position in the EV market relative to 
traditional OEMs (GM, Ford) and EV startups (Rivian, Lucid). Focus on 
production scale, technology differentiation, vertical integration, 
and brand loyalty. Provide market share projections for 2025-2027 
under base, bull, and bear scenarios."
```

```
Prompt 2: Supply Chain Risk Assessment
"Evaluate Microsoft Azure's supply chain risks related to AI chip 
availability. Assess dependency on NVIDIA GPUs, competitive dynamics 
with hyperscalers, and implications for Azure growth guidance. 
Quantify potential revenue impact under 20%, 40%, 60% chip shortage 
scenarios."
```

```
Prompt 3: M&A Strategic Fit
"Assess strategic fit of Salesforce acquiring Databricks. Analyze 
product overlap, customer base synergies, technical integration 
challenges, and cultural fit. Estimate standalone valuation, 
synergy value, and recommended bid range. Identify deal-breaker risks."
```

---

## Task Execution and Monitoring

### Starting Tasks

**Single Task Execution**:
1. Click **Start Task** button (play icon) in task row
2. Task transitions: todo → queued → in progress
3. Monitor progress bar and time estimate

**Bulk Task Execution**:
1. Select multiple tasks using checkboxes
2. Click bulk action "Run Selected Tasks"
3. All selected tasks queue simultaneously
4. Respect parallel execution limits (8 for Foundation, 32 for Professional/Enterprise)

### Parallel Execution Limits

Your subscription tier determines concurrent task capacity:

**Foundation Tier**: 8 parallel tasks
- Tasks 1-8: Execute immediately
- Tasks 9+: Queue automatically
- Queue resolves as tasks complete

**Professional/Enterprise Tiers**: 32 parallel tasks
- Tasks 1-32: Execute immediately
- Tasks 33+: Queue automatically
- Significantly faster for large analysis batches

**Queue Management**:
- System manages queue automatically
- No manual intervention required
- Queue position displayed in "Position: #N" format
- Tasks start immediately when execution slot opens

### Real-Time Progress Monitoring

Tasks update progress via WebSocket connection:

**Progress Updates Include**:
- **Status changes**: todo → queued → in progress → done
- **Progress percentage**: 0% → 100% (linear estimate based on typical execution time)
- **Time remaining**: Estimated seconds/minutes to completion
- **Queue position**: Real-time updates as queue advances

**Update Frequency**: Every 2-3 seconds during execution

**Troubleshooting Progress**:
- Progress stuck at 0%: Task may be waiting for data retrieval
- Progress jumping: Agent making rapid tool calls
- Progress exceeding estimate: Complex analysis taking longer than expected
- Progress paused: Execution queue management delay

---

## Managing Tasks

### Editing Tasks

**When task is "todo"**:
- Click task row to open configuration
- Change agent selection
- Modify custom prompt
- Update task metadata
- Save changes

**When task is "queued" or "in progress"**:
- Cannot edit (execution in progress)
- Must cancel task first, then edit

**When task is "done"**:
- Cannot edit (results finalized)
- Create new task with modified configuration instead

### Deleting Tasks

**Single Task Deletion**:
1. Click three-dot menu (⋮) in Actions column
2. Select "Delete Task"
3. Confirm deletion in dialog
4. Task removed from table and snapshot

**Bulk Task Deletion**:
1. Select multiple tasks using checkboxes
2. Click bulk action "Delete Selected Tasks"
3. Confirm deletion in dialog
4. All selected tasks removed

**Important**: Deletion is permanent. Task results cannot be recovered.

### Archiving Tasks

For tasks you want to preserve but exclude from active views:
1. Complete task execution (status = "done")
2. Use filtering to hide completed tasks
3. Access archived tasks via "Show Archived" filter

---

## Task Results and Output

### Viewing Results

**After task completes** (status = "done"):
1. Click task row to expand details
2. View agent output in structured format:
   - **Summary**: High-level findings
   - **Analysis**: Detailed methodology and results
   - **Sources**: Data sources used by agent
   - **Confidence Score**: Agent's self-assessment of result reliability (0-100%)

**Result Format Depends on Agent Type**:
- Retrieval agents: Narrative synthesis with source citations
- Valuation agents: Financial models with assumptions and sensitivity tables
- Risk agents: Ranked risk factors with probability and impact assessments
- Dashboard agents: Visual references and pattern descriptions

### Interpreting Confidence Scores

Agents assess their own output reliability:

**90-100% Confidence**:
- High-quality data available from authoritative sources
- Clear methodology with validated assumptions
- Historical data supports conclusions
- Low uncertainty in projections

**70-89% Confidence**:
- Good data quality but some gaps
- Reasonable assumptions but subject to change
- Moderate uncertainty in projections
- Results directionally accurate

**50-69% Confidence**:
- Limited data availability
- Significant assumptions required
- High uncertainty in projections
- Results should be triangulated with other analyses

**Below 50% Confidence**:
- Poor data quality or unavailable
- Methodology limitations
- Extreme uncertainty
- Results unreliable; consider alternative approaches

### Exporting Results

**Export Formats Available**:
- **PDF**: Formatted report with charts and tables
- **Excel**: Raw data and calculations
- **JSON**: Structured data for API integration
- **Text**: Plain-text output

**Export Process**:
1. Click task row to view results
2. Click "Export" button
3. Select desired format
4. File downloads automatically

---

## Advanced Task Workflows

### Task Templates

Save task configurations for reuse:

**Creating Template**:
1. Configure task with agent and prompt
2. Click "Save as Template" in task configuration
3. Name template (e.g., "Quarterly Earnings Analysis")
4. Template appears in "My Templates" list

**Using Template**:
1. Click "New Task from Template"
2. Select saved template
3. Task inherits all configuration
4. Modify if needed, then execute

**Template Use Cases**:
- Recurring quarterly analyses
- Standardized screening workflows
- Team-wide analytical methodologies
- Compliance-required analysis patterns

### Ensemble Task Creation

Create multiple related tasks simultaneously:

**Ensemble Workflow**:
1. Navigate to Agents page
2. Create or select agent ensemble (group of related agents)
3. Return to Tasks page
4. Click "Create Ensemble Tasks"
5. System creates one task per agent in ensemble
6. All tasks share same project and snapshot context

**Example Ensemble**: "Comprehensive Earnings Analysis"
- Task 1: Earnings Call Synthesis (Retrieval agent)
- Task 2: Financial Model Update (Valuation agent)
- Task 3: Risk Factor Review (Risk agent)
- Task 4: Competitive Comparison (Dashboard agent)

**Advantage**: Parallel execution of multi-faceted analysis with single action

### Task Dependencies (Future Feature)

Currently, tasks execute independently. Future releases will support:
- Sequential execution (Task B waits for Task A completion)
- Conditional execution (Task C runs only if Task A meets criteria)
- Result passing (Task B receives Task A output as input)

---

## Troubleshooting Common Issues

### Task Stuck in "Queued"

**Cause**: All parallel execution slots occupied
**Resolution**: Wait for in-progress tasks to complete, or upgrade plan for more parallel capacity

### Task Fails Immediately

**Possible Causes**:
- Invalid ticker symbol in project configuration
- Agent requires data unavailable for selected company
- Custom prompt too vague or contradictory
- Network connectivity issue

**Resolution Steps**:
1. Review error message in task details
2. Check project ticker validity
3. Simplify custom prompt
4. Retry task
5. Contact support if issue persists

### Task Takes Longer Than Expected

**Possible Causes**:
- Complex analysis requiring multiple data sources
- Agent performing thorough validation
- High system load during peak usage times
- Data source API slowness

**Normal Execution Times by Agent Type**:
- Retrieval: 1-4 minutes
- Valuation: 3-8 minutes
- Risk: 2-6 minutes
- Dashboard: 1-3 minutes

**When to Be Concerned**: Task exceeding 15 minutes may indicate issue; consider canceling and retrying

### Results Don't Match Expectations

**Common Reasons**:
- Agent interpreted prompt differently than intended
- Data sources used by agent differ from your expectations
- Assumptions in model diverge from your thesis
- Agent confidence score low (< 60%)

**Resolution**:
1. Review agent methodology in agent description
2. Check data sources cited in results
3. Refine custom prompt with more specific instructions
4. Try different agent specialization
5. Create follow-up task to address gaps

---

## Best Practices

### Task Naming and Organization

**Good Task Names**:
- ✅ "Q3 Earnings Call Key Takeaways"
- ✅ "DCF Valuation with Bull/Base/Bear Cases"
- ✅ "Supply Chain Risk Assessment - Chip Shortage Scenarios"

**Poor Task Names**:
- ❌ "Analysis 1"
- ❌ "Task"
- ❌ "Check this"

**Organizational Tips**:
- Group related tasks in same snapshot
- Use consistent naming conventions across projects
- Create tasks in logical execution order (retrieval → valuation → risk)

### Prompt Writing for Custom Tasks

**Effective Prompts**:
- **Specific**: Define exact analytical scope
- **Contextual**: Provide relevant background information
- **Structured**: Request specific output format
- **Sourced**: Reference preferred data sources

**Ineffective Prompts**:
- **Vague**: "Analyze Apple"
- **Overly Broad**: "Tell me everything about the semiconductor industry"
- **Contradictory**: "Be brief but comprehensive"
- **Unrealistic**: "Predict stock price in 10 years"

### Maximizing Parallel Execution

**Strategy 1: Batch by Phase**
1. Create all retrieval tasks, execute together (Phase 1)
2. Review retrieval results
3. Create valuation tasks based on findings, execute together (Phase 2)
4. Review valuations
5. Create risk tasks, execute together (Phase 3)

**Strategy 2: Comprehensive Launch**
1. Create all tasks at once (retrieval, valuation, risk, dashboard)
2. Execute all simultaneously (within parallel limits)
3. Review results as they complete
4. Create follow-up tasks based on findings

**When to Use Each**:
- Batch by Phase: When each phase informs the next
- Comprehensive Launch: When analyses are independent

---

## Next Steps

- **Learn about snapshot management**: [Snapshots Guide](/docs/02-intelligence-hub/snapshots-guide.md)
- **Configure agents effectively**: [Agents Configuration](/docs/02-intelligence-hub/agents-configuration.md)
- **Understand task execution mechanics**: [Task Execution](/docs/02-intelligence-hub/task-execution.md)
- **Analyze results effectively**: [Results Analysis](/docs/02-intelligence-hub/results-analysis.md)
- **Explore proven workflows**: [Project Workflows](/docs/02-intelligence-hub/project-workflows.md)

---

**Related Documentation**:
- [Intelligence Hub Fundamentals](/docs/02-intelligence-hub/hub-fundamentals.md)
- [Projects Guide](/docs/02-intelligence-hub/projects-guide.md)
- [Agent Types Overview](/docs/04-agent-types/agent-overview.md)
