---
title: "Task Execution"
description: "Master task execution: run analytical tasks, monitor real-time progress, manage parallel execution limits, handle queuing, and optimize workflow performance."
author: "Agentii Documentation"
date: "2025-01-26"
updated: "2025-01-26"
audience: "Intermediate"
domain: "Intelligence Hub"
tags: ["execution", "monitoring", "queuing", "performance", "real-time", "progress"]
relatedDocs:
  - "/docs/00-introduction/core-concepts.md"
  - "/docs/02-intelligence-hub/hub-fundamentals.md"
  - "/docs/02-intelligence-hub/tasks-guide.md"
  - "/docs/02-intelligence-hub/agents-configuration.md"
  - "/docs/02-intelligence-hub/results-analysis.md"
---

# Task Execution Guide

Task execution transforms analytical questions into agent-driven insights. This guide explains how to run tasks, monitor real-time progress, manage parallel execution limits, optimize workflow performance, and troubleshoot execution issues.

---

## Understanding Task Execution

### What Happens When You Execute a Task?

When you click "Run" on a task:

1. **Task enters queue**: Task status changes from `todo` → `queued`
2. **Resource allocation**: System checks parallel execution limits
3. **Agent initialization**: Selected agent loads configuration and tools
4. **Data retrieval**: Agent accesses financial data, filings, transcripts
5. **Analysis execution**: Agent applies methodology to answer your question
6. **Result generation**: Agent formats findings into structured output
7. **Status update**: Task status changes to `in progress` → `done`
8. **Real-time synchronization**: Frontend receives WebSocket updates throughout process

**Typical execution time**: 1-7 minutes depending on agent type and analysis complexity.

---

## Task Status Lifecycle

### Status Transitions

Tasks progress through a defined lifecycle:

```
todo → queued → in progress → done
```

**Status definitions**:

- **`todo`**: Task created but not yet executed
- **`queued`**: Task submitted for execution; waiting for available execution slot
- **`in progress`**: Task actively executing; agent is running analysis
- **`done`**: Task completed successfully; results available

**Additional states** (error handling):
- **`failed`**: Task execution encountered an error
- **`cancelled`**: User cancelled task before completion (if cancellation is supported)

### Status Indicators in Interface

From the Tasks page, you'll see status badges:

- **Todo** (gray badge): Task awaiting execution
- **Queued** (yellow badge): Task in queue, will start soon
- **In Progress** (blue badge with spinner): Task actively running
- **Done** (green badge with checkmark): Task completed

**Progress information** (while in progress):
- Progress percentage: "42% complete"
- Estimated time remaining: "~2 minutes remaining"
- Current step: "Analyzing financial statements"

---

## Running Tasks

### Method 1: Run Individual Task

**From Tasks page**:
1. Locate task in task table
2. Click **Run** button in the Actions column
3. Task status changes to `queued` immediately
4. Monitor progress in real-time

**Status updates**:
- WebSocket connection provides real-time progress updates every 2-5 seconds
- No page refresh needed; progress bar updates automatically
- Notifications appear when task completes

### Method 2: Run Multiple Tasks (Batch Execution)

**From Tasks page**:
1. Select multiple tasks using checkboxes
2. Click **Run Selected** button (top action bar)
3. All selected tasks enter queue simultaneously
4. Tasks execute in parallel up to your plan's limit

**Benefit**: Launch entire research phase at once (e.g., all pre-earnings tasks) without manual intervention.

### Method 3: Run All Tasks in Snapshot

**From Snapshots view** (if supported):
1. Navigate to specific snapshot
2. Click **Run All Tasks** button
3. All tasks in snapshot queue for execution
4. Ideal for executing complete research phases

---

## Parallel Execution Limits

### Understanding Concurrency Constraints

Your Agentii plan determines how many tasks can execute simultaneously:

| Plan Tier | Parallel Task Limit |
|-----------|---------------------|
| Foundation | 8 concurrent tasks |
| Professional | 32 concurrent tasks |
| Enterprise | 50-500+ (custom) |

**What this means**:
- **Foundation user**: If you run 12 tasks, first 8 execute immediately; tasks 9-12 wait in queue
- **Professional user**: If you run 35 tasks, first 32 execute immediately; tasks 33-35 wait in queue
- **Enterprise user**: Typically no practical limit for normal workflows

### Queue Management

**Automatic queuing**:
When parallel limit is reached, additional tasks automatically queue. As running tasks complete, queued tasks start immediately—no manual intervention needed.

**Queue visibility**:
- Tasks page shows how many tasks are queued: "3 tasks queued"
- Individual task cards show queue position (if supported): "Position 2 in queue"
- Estimated start time: "Expected to start in ~4 minutes"

**Queue priority** (FIFO - First In, First Out):
- Tasks are processed in the order they were submitted
- No priority system (all tasks treated equally)
- Exception: Enterprise plans may have configurable priority rules

### Optimizing Parallel Execution

**Strategy 1: Batch Similar Tasks**

Group tasks by execution time:
- **Quick tasks first** (Retrieval agents: 1-3 min) → Run 8-32 quick tasks in parallel
- **Then medium tasks** (Risk agents: 2-5 min)
- **Then long tasks last** (Valuation agents: 3-7 min)

**Benefit**: Maximize throughput; quick tasks don't wait behind slow tasks.

**Strategy 2: Stagger Complex Analyses**

Don't run 50 valuation tasks simultaneously (even if you're on Professional plan with 32 limit):
- Run 16 tasks → Review preliminary results → Refine remaining tasks → Run next batch

**Benefit**: Adaptive workflow; learn from early results before running all tasks.

**Strategy 3: Dedicated Analysis Windows**

For large projects:
- Morning: Run foundational retrieval tasks (20-30 tasks)
- Afternoon: Review retrieval results; launch valuation tasks (10-15 tasks)
- End of day: Review valuation; launch risk scenarios (5-10 tasks)

**Benefit**: Structured research process; reduces cognitive overload.

---

## Real-Time Progress Monitoring

### WebSocket-Powered Updates

Agentii uses WebSocket connections (via Supabase real-time) to push progress updates to your browser:

**What you see in real-time**:
- Task status changes (`queued` → `in progress` → `done`)
- Progress percentage (0% → 25% → 50% → 75% → 100%)
- Current execution step ("Retrieving financial data...", "Building valuation model...", "Generating report...")
- Estimated time remaining ("~3 minutes remaining", "~45 seconds remaining")

**No refresh needed**: Updates appear automatically without reloading the page.

### Progress Bar Interpretation

**Progress stages**:

- **0-20%**: Data retrieval and initialization
  - Agent loads configuration
  - Accesses financial databases
  - Retrieves documents (filings, transcripts)

- **20-60%**: Core analysis execution
  - Agent applies methodology
  - Performs calculations
  - Identifies patterns and insights

- **60-90%**: Result synthesis
  - Agent formats findings
  - Generates charts (if Dashboard agent)
  - Performs quality checks

- **90-100%**: Finalization
  - Saves results to database
  - Updates task status
  - Prepares output for display

**Note**: Progress is estimated based on typical execution patterns; actual time may vary.

### Execution Time Estimates

**Factors affecting execution time**:

1. **Agent type**:
   - Retrieval agents: 1-3 minutes (fastest)
   - Dashboard agents: 1-2 minutes (fast)
   - Risk agents: 2-5 minutes (medium)
   - Valuation agents: 3-7 minutes (slowest)

2. **Data availability**:
   - S&P 500 stocks: Faster (rich, structured data)
   - Small-cap stocks: Slower (sparse, unstructured data)
   - International stocks: Variable (depends on market)

3. **Analysis complexity**:
   - Simple query ("What is Apple's revenue trend?"): 1-2 minutes
   - Complex query ("Build DCF with 5 scenarios and sensitivity analysis"): 5-7 minutes

4. **System load**:
   - Off-peak hours: Faster execution
   - Peak hours (market hours, earnings season): May be slightly slower

**Typical expectations**:
- **80% of tasks**: Complete in 1-4 minutes
- **15% of tasks**: Complete in 4-7 minutes (complex valuation, extensive risk scenarios)
- **5% of tasks**: Take 7+ minutes (highly complex, data-sparse situations)

---

## Task Execution Monitoring Interface

### Real-Time Task Table Updates

From the Tasks page, the task table automatically updates as tasks execute:

**Visual indicators**:
- **Status badge color change**: Gray (todo) → Yellow (queued) → Blue (in progress) → Green (done)
- **Progress bar**: Horizontal bar showing completion percentage
- **Spinner animation**: Rotating icon indicates active execution
- **Time estimate**: Updates every few seconds ("~3 min remaining" → "~2 min remaining" → "~1 min remaining")

**Scrolling behavior**:
- Table automatically scrolls to show newly completed tasks
- Notifications appear in bottom-right corner: "Task 'Apple Valuation' completed"
- Click notification to jump directly to result

### Execution Status Dashboard

**At-a-glance metrics** (top of Tasks page):
- **Active tasks**: "5 tasks running"
- **Queued tasks**: "3 tasks queued"
- **Completed today**: "12 tasks completed"
- **Parallel capacity**: "5 of 32 slots in use" (Professional plan)

**Benefit**: Understand current execution load; optimize batch sizes accordingly.

---

## Handling Execution Issues

### Issue 1: Task Stuck in "Queued" Status

**Symptom**: Task remains in `queued` status for 10+ minutes without progressing to `in progress`.

**Possible causes**:
1. **Parallel limit reached**: All execution slots occupied by long-running tasks
2. **System resource constraints**: Platform experiencing high load
3. **Upstream data provider delay**: Financial data source temporarily unavailable

**Solutions**:
- **Wait for running tasks to complete**: Queue will process automatically
- **Check parallel capacity**: View active tasks count; if at limit, wait or cancel non-critical tasks
- **Contact support**: If queued for 20+ minutes with capacity available, report issue

### Issue 2: Task Execution Fails

**Symptom**: Task status changes to `failed`; error message displayed.

**Common error messages and solutions**:

**"Ticker not found"**
- Cause: Invalid ticker symbol or delisted stock
- Solution: Verify ticker spelling; check if stock is actively traded

**"Insufficient data available"**
- Cause: Stock has limited financial history (e.g., recent IPO, small-cap)
- Solution: Simplify analysis (use Retrieval agent instead of Valuation agent); adjust time period

**"Agent timeout"**
- Cause: Analysis too complex; exceeded execution time limit (typically 10 minutes)
- Solution: Break analysis into smaller tasks; simplify prompt; use more focused agent

**"Data provider error"**
- Cause: Upstream financial data source temporarily unavailable
- Solution: Retry task in 5-10 minutes; contact support if persistent

**"Invalid configuration"**
- Cause: Custom agent prompt has syntax errors or unsupported instructions
- Solution: Review custom agent prompt; test with simpler prompt; duplicate working template agent

### Issue 3: Task Completes with Low Confidence

**Symptom**: Task completes successfully, but result confidence is marked "Low".

**Interpretation**:
- Agent completed analysis but encountered data gaps or inconsistencies
- Results are directional but should not be solely relied upon for decisions

**Solutions**:
1. **Review result details**: Read agent's explanation for why confidence is low
2. **Supplement with additional analysis**: Run different agent or use Workbench for manual research
3. **Adjust task prompt**: Narrow scope to areas where data is stronger
4. **Accept limitation**: Some stocks (small-cap, pre-revenue) inherently have low data quality

### Issue 4: Progress Bar Stuck at 90%

**Symptom**: Task progresses quickly to 90%, then remains stuck for 2-3 minutes.

**Explanation**: This is normal. Final 10% involves result finalization, quality checks, and database writes. These steps are quick but appear slow due to progress bar granularity.

**No action needed**: Task will complete within 1-2 minutes.

---

## Advanced Execution Strategies

### Strategy 1: Conditional Task Execution

**Scenario**: Run Task B only if Task A produces specific result.

**Current limitation**: Agentii does not support automatic conditional execution.

**Workaround**:
1. Run Task A
2. Review Task A result manually
3. Decide whether to run Task B based on findings
4. Run Task B if criteria met

**Future enhancement**: Planned support for conditional workflows and task dependencies.

---

### Strategy 2: Scheduled Task Execution

**Scenario**: Automatically run monitoring tasks every week.

**Current limitation**: Agentii does not support scheduled execution via UI.

**Workaround (API users)**:
- Use Agentii REST API to programmatically submit tasks
- Create external scheduler (cron job, AWS Lambda) to call API weekly
- See [API Reference](/docs/08-api-reference/tasks-api.md) for details

**Benefit**: Automate recurring surveillance workflows.

---

### Strategy 3: Task Chaining (Sequential Execution)

**Scenario**: Run Task A, then use its result as input to Task B.

**Current approach**:
1. Run Task A
2. Review Task A result
3. Manually copy relevant findings into Task B prompt
4. Run Task B with enriched context

**Example**:
- Task A: "Identify Apple's top 3 competitive risks"
- Task A result: "1) China demand weakness, 2) Services growth deceleration, 3) Regulatory pressure"
- Task B: "Model downside scenarios for the following risks: [paste Task A results]"

**Future enhancement**: Planned support for automatic task chaining and result passing.

---

## Performance Optimization

### Optimization 1: Prompt Efficiency

**Problem**: Overly broad prompts cause longer execution times and lower result quality.

❌ **Inefficient prompt**:
"Analyze everything about Apple"

✅ **Efficient prompt**:
"Analyze Apple's iPhone revenue trends over the past 4 quarters. Focus on unit sales vs. ASP contribution to growth."

**Impact**: Execution time reduced from 7 minutes to 3 minutes; result quality improved due to focus.

---

### Optimization 2: Agent Selection

**Problem**: Using wrong agent type for the question.

❌ **Inefficient**:
Task: "What is Apple's business model?"
Agent: DCF Valuation Agent (overkill; takes 5-7 minutes)

✅ **Efficient**:
Task: "What is Apple's business model?"
Agent: Retrieval Agent (appropriate; takes 1-2 minutes)

**Impact**: 60-70% execution time reduction; better result quality (right tool for the job).

---

### Optimization 3: Batch Size Management

**Problem**: Submitting 100 tasks at once overwhelms you with results.

❌ **Inefficient**:
- Day 1: Submit 100 valuation tasks for entire portfolio
- Problem: Can't review results fast enough; insights lost in volume

✅ **Efficient**:
- Day 1: Submit 20 high-priority tasks → Review → Refine approach
- Day 2: Submit next 20 tasks with lessons learned
- Day 3-5: Continue iteratively

**Impact**: Better decision quality; adaptive learning; reduced cognitive overload.

---

### Optimization 4: Time Period Constraints

**Problem**: Analyzing excessive historical data slows execution and dilutes insights.

❌ **Inefficient**:
"Analyze Apple's revenue trends over the past 20 years"

✅ **Efficient**:
"Analyze Apple's revenue trends over the past 8 quarters"

**Impact**: Execution time reduced by 50%; focus on recent, actionable trends.

---

## Task Execution Best Practices

### Practice 1: Monitor First Batch Before Scaling

When starting a new project:
1. Run 3-5 test tasks
2. Review results for quality and relevance
3. Refine prompts and agent selection
4. Then scale to full task batch

**Benefit**: Avoid wasting 50+ task executions on suboptimal configurations.

---

### Practice 2: Use Real-Time Monitoring to Prioritize

While tasks are running:
- Check which tasks are completing fastest
- Review early results to identify patterns
- Adjust remaining queued tasks if needed (cancel and recreate with refined prompts)

**Benefit**: Adaptive workflow; learn while executing.

---

### Practice 3: Balance Speed and Thoroughness

**For quick checks** (5-15 minutes total):
- Use Retrieval agents
- Run 3-5 tasks in parallel
- Accept directional insights

**For comprehensive analysis** (1-2 hours total):
- Use multi-agent ensembles
- Run 15-30 tasks across multiple snapshots
- Demand high-confidence results

**Match execution strategy to decision importance.**

---

### Practice 4: Archive Completed Tasks Regularly

Completed tasks remain in `done` status indefinitely. Archive old tasks to keep active list clean:

1. Filter tasks by completion date
2. Select tasks older than 30-60 days
3. Archive (if supported) or simply ignore in active views

**Benefit**: Faster page loads; easier to find recent work.

---

## Next Steps

- **Ready to interpret task results?** See [Results Analysis](/docs/02-intelligence-hub/results-analysis.md)
- **Want to create more tasks?** See [Tasks Guide](/docs/02-intelligence-hub/tasks-guide.md)
- **Need to optimize agent configuration?** See [Agent Configuration](/docs/02-intelligence-hub/agents-configuration.md)
- **Want to see execution workflows in action?** See [Project Workflows](/docs/02-intelligence-hub/project-workflows.md)
- **Need API-based execution?** See [Tasks API Reference](/docs/08-api-reference/tasks-api.md)
