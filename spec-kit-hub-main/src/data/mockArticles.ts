export interface Article {
  id: string;
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  gradient: string;
  tags: string[];
  content: string;
  relatedKitId?: string;
}

export const mockArticles: Article[] = [
  {
    id: "1",
    slug: "building-autonomous-pm-agents-with-claude",
    title: "Building Autonomous PM Agents with Claude",
    description: "A comprehensive guide on creating spec-kits that help product managers automate routine tasks while maintaining strategic control.",
    date: "Dec 1, 2025",
    author: "agentii",
    gradient: "from-lime-200 to-green-300",
    tags: ["guide", "pm-kit"],
    relatedKitId: "2",
    content: `When we built the **PM-Kit**, our goal was to explore new ideas on top of autonomous AI agents. Our playground — [agentii-kit](/) — has become a space where we test integrations, UX concepts, and ways to make agent-focused workflows more dynamic and useful.

After launching the first version of PM-Kit, a new idea struck me:

> *What if autonomous agents could handle the entire product management workflow? Could we automate routine tasks directly within Claude Code — without turning it into a full-fledged backend app?*
>
> ...
>
> ---

## The Core Concept

The PM-Kit framework is built around three core principles:

1. **Autonomous Task Management** - Agents can create, prioritize, and track tasks without human intervention
2. **Strategic Oversight** - Humans maintain control over high-level decisions
3. **Seamless Integration** - Works with existing tools like Jira, Linear, and Notion

### Getting Started

First, you'll need to install the spec-kit:

\`\`\`bash
git clone https://github.com/agentii/pm-kit
cd pm-kit
\`\`\`

Then configure your agent with the following settings:

\`\`\`yaml
agent:
  name: pm-agent
  version: 1.0.0
  capabilities:
    - task_management
    - sprint_planning
    - stakeholder_communication
\`\`\`

## Best Practices

When implementing the PM-Kit, keep these guidelines in mind:

- **Start small** — Begin with a single workflow before expanding
- **Monitor closely** — Review agent decisions during the first few weeks
- **Iterate quickly** — Adjust the spec-kit based on real-world performance

The key to success is finding the right balance between automation and human oversight.`
  },
  {
    id: "2",
    slug: "how-we-designed-the-legal-kit-framework",
    title: "How We Designed the Legal-Kit Framework",
    description: "With the help of Claude and Cursor, we built a compliance-first approach to autonomous legal document review.",
    date: "Nov 28, 2025",
    author: "agentii",
    gradient: "from-amber-200 to-orange-300",
    tags: ["case-study", "legal-kit"],
    relatedKitId: "3",
    content: `Legal document review has traditionally been one of the most time-consuming tasks in any organization. With the **Legal-Kit**, we set out to change that.

## The Challenge

Legal teams face several key challenges:

1. **Volume** — Thousands of documents to review
2. **Complexity** — Multiple jurisdictions and regulations
3. **Time pressure** — Tight deadlines for compliance

> *The average legal team spends 60% of their time on document review. What if we could automate 80% of that work?*

## Our Solution

The Legal-Kit provides a structured approach to autonomous document review:

### Document Classification

\`\`\`typescript
const classifier = new DocumentClassifier({
  categories: ['contract', 'policy', 'compliance'],
  confidence_threshold: 0.85
});
\`\`\`

### Risk Assessment

The agent automatically flags potential issues:

- Contract terms that deviate from standards
- Missing required clauses
- Compliance gaps

## Results

After implementing the Legal-Kit, our pilot customers saw:

- **70% reduction** in review time
- **95% accuracy** in document classification
- **Zero missed** compliance deadlines`
  },
  {
    id: "3",
    slug: "troubleshooting-agent-memory-persistence",
    title: "Troubleshooting: Agent Memory Persistence",
    description: "Common issues and solutions when implementing long-term memory in your autonomous agents using spec-kits.",
    date: "Nov 25, 2025",
    author: "agentii",
    gradient: "from-cyan-200 to-teal-300",
    tags: ["troubleshooting", "dev-kit"],
    relatedKitId: "1",
    content: `One of the most common challenges when building autonomous agents is managing memory persistence. This guide covers the most frequent issues and their solutions.

## Common Issues

### 1. Memory Overflow

When agents accumulate too much context:

\`\`\`javascript
// Bad: Storing everything
agent.memory.store(entireConversation);

// Good: Selective storage
agent.memory.store(summarize(conversation));
\`\`\`

### 2. Context Loss Between Sessions

> *"My agent forgets everything after restarting!"*

This usually happens when memory isn't properly persisted. Solution:

\`\`\`yaml
memory:
  persistence: true
  storage: local_file
  path: ./agent_memory.json
\`\`\`

### 3. Conflicting Memories

When the agent has contradictory information:

- Implement a **recency bias** for newer information
- Use **confidence scores** to resolve conflicts
- Set up **periodic memory cleanup**

## Best Practices

1. **Chunk your memory** — Break large contexts into smaller, retrievable pieces
2. **Use embeddings** — Semantic search is more effective than keyword matching
3. **Regular pruning** — Remove outdated or irrelevant memories

## Debugging Tips

If your agent is behaving unexpectedly, check:

- Memory utilization metrics
- Recent memory writes
- Context window size`
  },
];

export const getArticleBySlug = (slug: string): Article | undefined => {
  return mockArticles.find(article => article.slug === slug);
};
