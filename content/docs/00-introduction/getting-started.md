---
title: "Getting Started"
description: "Your first steps with Agentii: system requirements, first login, and your first project."
author: "Agentii Documentation"
date: "2025-11-26"
updated: "2025-11-26"
audience: "Beginner"
domain: "General"
tags: ["getting-started", "first-project", "onboarding", "navigation"]
relatedDocs:
  - "/docs/00-introduction/what-is-agentii.md"
  - "/docs/00-introduction/core-concepts.md"
  - "/docs/00-introduction/platform-architecture.md"
  - "/docs/02-intelligence-hub/projects-guide.md"
  - "/docs/03-agent-workbench/workbench-fundamentals.md"
  - "/docs/10-quick-start/5-minute-quickstart.md"
---

# Getting Started

This guide walks you through your first session with Agentii: system setup, authentication, and creating your first project or query. You'll be productive within minutes.

---

## System Requirements

Agentii is a cloud-based application accessible from any modern web browser. You don't need to install software or configure your computer.

### Minimum Requirements
- **Browser**: Chrome, Firefox, Safari, or Edge (current version)
- **Connection**: Stable internet connection (broadband recommended for optimal performance)
- **Device**: Desktop, laptop, or tablet
- **Screen size**: Minimum 1024px wide (1440px+ recommended for comfortable viewing of analysis results)

### For Optimal Performance
- **Browser**: Latest version of Chrome or Firefox
- **Connection**: 10+ Mbps download speed
- **Device**: Desktop or large laptop
- **Monitor**: Dual monitor setup helpful (one for interface, one for reference documents)

### Accessibility
Agentii supports standard keyboard navigation and screen readers. For accessibility questions, contact support.

---

## Your First Login

### Step 1: Navigate to Agentii

Open your web browser and go to the Agentii platform URL (you'll have received this from your administrator or during account setup).

### Step 2: Sign In

Enter your email address and password. If you're signing in for the first time, your administrator will have created your account and sent you temporary credentials or a setup link.

**Troubleshooting login issues:**
- Clear browser cache and cookies
- Disable browser extensions temporarily (ad blockers sometimes interfere)
- Try a different browser to confirm it's not browser-specific
- Contact your administrator if you didn't receive setup instructions

### Step 3: Review Welcome Screen

Your first screen will show:
- **Navigation menu** (left sidebar): Projects, Workbench, Team, Settings
- **Empty state** (center): Options to create your first project or start Workbench
- **Help menu** (top right): Links to documentation and support

### Step 4: Set Your Preferences (Optional)

Click **Settings** to configure:
- **Display**: Dark mode or light mode
- **Notifications**: Email preferences for project updates
- **API Key**: Generate if you plan to use the Agentii API
- **Team Settings**: (Available if you have admin permissions)

You can update preferences anytime. Default settings work fine for getting started.

---

## Navigation Basics

Once logged in, here's the core interface:

### Left Sidebar
The navigation menu is consistent across all pages:

- **Projects**: View all your projects and create new ones (Intelligence Hub access point)
- **Workbench**: Quick exploratory analysis (Agent Workbench access point)
- **Team** (if enabled): Collaborate with colleagues on shared projects
- **Settings**: User preferences, API keys, account management
- **Help**: Documentation links and support contact

### Top Navigation Bar
- **Logo**: Click to return to dashboard/home
- **Search**: Find projects, previous analyses, or results across all your work
- **Profile Menu** (top right): Account settings, logout, preferences
- **Help Icon**: Quick access to documentation

### Main Content Area
This area changes based on your current view:
- In Projects, you'll see your project list
- In Workbench, you'll see a query input box and results panel
- In Settings, you'll see configuration options

---

## Creating Your First Project

A project is the container for analyzing a specific stock or sector. Let's create your first project analyzing Apple Inc.

### Step 1: Navigate to Projects

In the left sidebar, click **Projects**. You'll see a message indicating you have no projects yet.

Click **Create Project** (blue button in the main area).

### Step 2: Enter Project Details

A form appears with the following fields:

**Project Name** (required):
- Example: "Apple Inc. Q1 2025 Analysis"
- Use clear, descriptive names that indicate the stock and time period
- You can have multiple projects for the same stock (different time periods or research angles)

**Primary Ticker** (required):
- Example: AAPL
- Enter the stock ticker symbol (3-4 characters, uppercase)
- Agentii will verify this is a valid ticker
- This is the main company you're analyzing

**Related Tickers** (optional):
- Example: MSFT, GOOGL, NVDA
- Add competitor or sector peers for comparative analysis
- You can add up to 10 related tickers
- Useful for: Competitive positioning, sector context, valuation benchmarking
- You can edit this later

**Sector** (optional):
- Select from dropdown: Technology, Healthcare, Financials, Consumer, Industrials, Energy, Materials, Utilities, Real Estate, Communications
- Helps organize your projects and applies sector-specific agent configurations
- You can change this later

**Lookback Period** (optional):
- Default: 8 quarters (2 years of historical context)
- This tells agents how much historical data to analyze
- Typical values:
  - 4 quarters: Recent trends only
  - 8 quarters: Standard earnings cycle context
  - 12 quarters: Multi-year trend analysis
  - 20 quarters: Cycle analysis (5 years)

**Project Description** (optional):
- Example: "Analyzing Apple's resilience to iPhone demand cycles heading into Q1 2025. Focus on services revenue growth, India market penetration, and margin sustainability."
- Space to document your research thesis or project goals
- Only you see this; helpful for remembering why you created the project
- You can update this anytime

### Step 3: Create Project

Click **Create Project**. The platform will verify your ticker(s) and create the project. This usually takes 2-3 seconds.

You're now in your new project.

---

## Your First Project Screen

After creating your project, you'll see:

### Project Overview (Top Section)
- **Project name**: "Apple Inc. Q1 2025 Analysis"
- **Primary ticker and price**: AAPL at current price
- **Related tickers**: MSFT, GOOGL, NVDA (if you added them)
- **Sector badge**: Technology
- **Edit Project** button: To update settings

### Project Actions (Upper Right)
- **Create Snapshot**: Start organizing your analysis (explained next)
- **Create Task**: Jump to task creation (advanced—usually create snapshot first)
- **Share Project**: Add team members (if enabled)
- **Archive/Delete**: Move project when done

### Snapshots Section (Main Area)
Initially empty. This is where you'll organize analysis into phases.

---

## Creating Your First Snapshot

A snapshot groups related tasks within a time phase. For earnings analysis, create "Pre-Earnings", "Earnings", and "Post-Earnings" snapshots.

### Step 1: Click "Create Snapshot"

### Step 2: Name Your Snapshot

Example names:
- "Pre-Earnings Phase" (analysis before announcement)
- "Q4 2024 Earnings Analysis" (analysis immediately after announcement)
- "Initial Research" (if you're not analyzing earnings)

### Step 3: Add Optional Description

Example: "Analyze analyst consensus estimates and build valuation scenarios before earnings announcement on Jan 28th."

### Step 4: Create

Your snapshot is created and appears in the project.

---

## Creating Your First Task

A task is a single unit of analysis—one question for one agent.

### Within Your Snapshot

Click **Create Task** in the snapshot card.

### Task Configuration

**Agent Type** (required):
Select which agent type to use:
- **Retrieval**: For fact-finding, document synthesis, data gathering
- **Valuation**: For financial modeling, DCF, comparable company analysis
- **Risk**: For downside scenarios, risk assessment, stress testing
- **Dashboard**: For visualization, pattern recognition, comparative analysis

For your first task, select **Retrieval**.

**Custom Prompt** (optional but recommended):
- Example: "Retrieve analyst consensus estimates for Apple's Q1 revenue and EPS. Show me the range of estimates and the consensus view."
- This is where you instruct the agent specifically what to analyze
- Clear, specific prompts produce better results
- Leave blank to let agent use default behavior

**Data Sources** (optional):
- Default: All available sources
- You can filter to specific source categories (SEC filings, research reports, earnings call transcripts, etc.)
- For your first task, use default (all sources)

**Configuration** (depends on agent type):
- Retrieval agent: Usually no additional config
- Valuation agent: You can specify DCF assumptions, time period, methodology
- Risk agent: You can specify downside scenarios to evaluate
- Dashboard agent: Visualization preferences

### Step 5: Create Task

Click **Create Task**. The task appears in your snapshot with status "todo".

---

## Running Your First Task

### Start Execution

Click the **Run** button (play icon) on your task card.

Status changes to **queued** (waiting for agent to start), then **in progress** (agent actively working).

### Wait for Results

Most tasks complete in 1-5 minutes. Progress indicator shows estimated time remaining. You can:
- Leave the page and come back later
- Watch the progress in real-time
- Check other projects or use Workbench while waiting

### View Results

When status changes to **done**, click the task card to expand and see:
- **Key Findings**: Agent's headline conclusion
- **Detailed Analysis**: Full methodology and reasoning
- **Data Sources**: Where the agent found information (you can click to verify)
- **Confidence Score**: Reliability indicator (0-100)
- **Export Options**: Download as PDF, Excel, or JSON

---

## Quick Workbench Alternative

If you don't want to create a full project, try **Agent Workbench** for instant analysis.

### Access Workbench

Click **Workbench** in the left sidebar.

### Ask a Question

Type your question in natural language:
- "What are Apple's gross margin trends over the past 8 quarters?"
- "How exposed is Microsoft to AI regulation risks?"
- "Compare Tesla's competitive position in EVs vs. traditional automakers"

### Get Instant Results

Agent responds within 15-30 seconds with:
- Key findings
- Supporting data
- Confidence score
- Data sources

### Ask Follow-up Questions

Continue the conversation naturally:
- "Compare that to industry average"
- "What were the drivers of that margin compression?"
- "How does this compare to historical cycles?"

### Export When Done

Click **Export** to save the session as PDF, JSON, or text file.

---

## Common First Steps

After your first project and task, you have several options:

### Option 1: Deep Project Analysis
Continue building your first project:
1. Create additional snapshots (earnings phases, monthly monitoring, etc.)
2. Create multiple tasks per snapshot
3. Add team members to collaborate
4. Build comprehensive documentation over weeks/months

**Next reading**: [Projects Guide](/docs/02-intelligence-hub/projects-guide.md) and [Tasks Guide](/docs/02-intelligence-hub/tasks-guide.md)

### Option 2: Quick Exploration
Use Workbench for rapid ad-hoc analysis:
1. Test new stock ideas
2. Validate thesis changes from news
3. Competitive intelligence
4. Quick what-if scenarios

**Next reading**: [Agent Workbench Fundamentals](/docs/03-agent-workbench/workbench-fundamentals.md) and [Query Formulation](/docs/03-agent-workbench/query-formulation.md)

### Option 3: Hybrid Approach
Combine both:
1. Quick Workbench exploration to test a hypothesis
2. Create formal Hub project when analysis warrants deeper investigation
3. Reference your Workbench findings in Hub documentation
4. Continue with comprehensive multi-task analysis

**Next reading**: [Platform Architecture](/docs/00-introduction/platform-architecture.md) and [Workbench vs. Hub](/docs/03-agent-workbench/workbench-vs-hub.md)

### Option 4: Learn Best Practices
Before diving deep, review patterns others have used:

**Next reading**: [Project Workflows](/docs/02-intelligence-hub/project-workflows.md) covering:
- Equity research initiation (week-long project)
- Earnings cycle analysis (3-week project)
- M&A due diligence (2-week project)
- Portfolio monitoring (ongoing project)

---

## Tips for Success

### 1. Start Small
Create one project, one snapshot, one task. Get comfortable with the flow. You can always add complexity.

### 2. Use Clear Prompts
Instead of "Analyze Apple", use "Analyze Apple's services revenue growth drivers over 8 quarters, comparing to historical trends".

### 3. Cross-Check Results
Don't rely on a single agent. Create multiple tasks with different agents to validate findings.

### 4. Export Your Work
Your projects persist in Agentii, but always export important findings to PDF or Excel as backup documentation.

### 5. Build Snapshots Aligned with Events
For earnings analysis: Pre-Earnings snapshot → Earnings snapshot → Post-Earnings snapshot. This creates a narrative of your analysis evolution.

### 6. Reference Your Thesis
In project description, document your initial investment thesis. Update it as analysis proceeds. This creates institutional memory.

---

## Troubleshooting

### Task stuck in "queued" status
This means other tasks ahead of it are executing. Wait for available resources. Hub will automatically start your task.

### Task failed with error message
Click the error to see details. Common causes:
- Ticker not found: Verify the symbol (AAPL not APPL)
- Data not available: Some data sources have gaps—agent will note this in results
- Agent limitations: Some queries are outside agent capabilities

Contact support if error persists.

### Results seem incomplete or generic
Review your prompt. More specific prompts produce more focused results. Try rephrasing your question or running the task again with a more detailed custom prompt.

### Can't see related tickers in results
Not all agents use related ticker data. Retrieval and Risk agents typically do; Valuation agent primarily focuses on primary ticker.

---

## Next Steps

- **Ready to go deeper into Hub?** See [Intelligence Hub Fundamentals](/docs/02-intelligence-hub/hub-fundamentals.md)
- **Want to learn advanced project patterns?** See [Project Workflows](/docs/02-intelligence-hub/project-workflows.md)
- **Prefer conversational analysis?** See [Agent Workbench Fundamentals](/docs/03-agent-workbench/workbench-fundamentals.md)
- **Want to understand core concepts better?** See [Core Concepts](/docs/00-introduction/core-concepts.md)
- **Prefer to jump in?** See [5-Minute Quickstart](/docs/10-quick-start/5-minute-quickstart.md) for ultra-rapid onboarding

---

**Questions?** See [FAQ](/docs/07-troubleshooting/faq-general.md) or contact support.
