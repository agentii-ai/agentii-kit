# Post Template: Practitioner Blog

Use this as a starting point for new posts in `/content/blog/YYYY-MM-DD-slug-title.md`.

## 1. Frontmatter (YAML)

```yaml
---
title: "Post Title: Make the Promise Clear"
description: "150-160 character summary with target keyword + value + CTA."
date: "2025-12-08"
author: "AgentII Team"
tags:
  - spec-driven-development
  - ai-agents
  - workflow-automation
  - cross-functional
cover: "/images/blog/post-slug/hero.jpg"
cover_alt: "Short, descriptive alt text for hero image."
keywords:
  - primary keyword
  - secondary keyword
  - related long-tail phrase
category: "blog" # or "technical"/"announcement" as needed
draft: false
featured: false
canonical: null  # or original URL if syndicated
---
```

## 2. Content Structure

```markdown
# {{Title comes from frontmatter}}

**Opening tension statement highlighting the core problem.**

A short intro (1–3 paragraphs) that:
- Names the audience and context.
- States the problem in concrete terms.
- Hints at the spec-driven or agentic method you’ll use to solve it.

## Section 1: Problem / Context

Set up why this topic matters now. Bring in 1–2 key data points or trends.

## Section 2: Framework or Method

Introduce the core model (e.g., five-phase workflow, four pillars, etc.):
- Explain each phase or pillar.
- Use H3s for sub-points.

### Subsection Example

- Key point 1
- Key point 2

## Section 3: Applied Example or Case Study

Walk through a concrete scenario:
- Starting point.
- What changed with spec-driven workflows or agents.
- Measurable outcomes.

## Section 4: Step-by-Step Guide / Playbook

Break the method into actionable steps:
1. Step 1 …
2. Step 2 …
3. Step 3 …

## Section 5: Limitations & Edge Cases

Be explicit about:
- When this approach might not work.
- Preconditions for success.
- Risks or tradeoffs.

## Frequently Asked Questions

**Q: Common question 1?**  
A: 2–3 sentence answer.

**Q: Common question 2?**  
A: 2–3 sentence answer.

(4–6 Q&A pairs for posts >1,500 words.)

## Key Takeaways

- Takeaway 1: Clear, quotable statement.
- Takeaway 2: Clear, quotable statement.
- Takeaway 3: Clear, quotable statement.

## Call to Action

End with a clear next step, for example:

- Read the next post in the cluster.  
- Try a specific kit or example repo.  
- Start a 2-week pilot using the described workflow.
```

## 3. Word Count Targets

- Practitioner pillar posts: **1,200–1,800 words**.
- Intros: 150–250 words.
- Key Takeaways: 100–150 words.
- FAQ: 2–3 sentences per answer.

## 4. Internal Link Format

- Use descriptive anchor text:
  - `See our guide on [spec-driven development 101](/blog/posts/spec-driven-development-101/).`
- Aim for **3–5 internal links** per post:
  - 1–2 links up to the hub (e.g., foundational 101 posts).
  - 2–3 links sideways to related posts.

## 5. Code Blocks (if applicable)

- Always specify language:
  - ```ts
    // TypeScript example
    ```
  - ```bash
    # Bash example
    ```
- Include:
  - Enough context to run the snippet.
  - Comments explaining why this code matters.
  - Expected output or behavioral description.

## 6. Style Reminders

- Use H2s generously for scanning.
- Prefer short paragraphs and bullet lists where possible.
- Keep sentences straightforward; avoid nested clauses.
