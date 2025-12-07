


# Overview: SEO for Content-Driven Nextra/Next.js Blogs (AI Agent Product)

For an AI agent startup, **SEO success in 2024–2025** comes from three pillars:

1. **Deeply useful, intent-matched content** (not generic AI buzzwords).
    
2. **Clean, fast, structured site implementation** (which Nextra + Next.js already supports well).
    
3. **A consistent publishing + optimization loop** (measure → refine → expand content).
    

The rest of this overview.md can be used as a blueprint for your docs/blog repo.

---

## 1. Core Principles of Modern SEO (2024–2025)

## 1.1 What Google/Bing Actually Reward Now

Modern SEO is less about tricks and more about:

- **Search intent fit**: Each article should precisely answer a specific query and its sub-questions.
    
- **Topical authority**: Publishing a coherent set of content around related topics (content clusters), not random posts.
    
- **Experience, Expertise, Authoritativeness, Trustworthiness (E‑E‑A‑T)**:
    
    - Show who wrote it, their role at your AI startup.
        
    - Use real screenshots, logs, architectures, experiments.
        
- **Engagement and satisfaction**:
    
    - Low bounce rate, longer time on page, good internal navigation.
        
- **Technical quality**:
    
    - Fast, mobile-friendly, secure (HTTPS), no crawl issues.
        
    - Structured data and clean HTML.
        

Think in terms of: **“If this page disappeared, would someone miss it?”** If the answer is “no,” it likely won’t rank well long-term.

---

## 2. SEO Strategy for an AI Agent/Product Company

## 2.1 Positioning and Topic Strategy

Before individual posts, define:

- **Target audience**:
    
    - Developers integrating agents.
        
    - Product managers exploring agent use cases.
        
    - Founders looking to automate workflows.
        
- **Core topic pillars** for your product, for example:
    
    - “AI agents for software development”
        
    - “AI agents for operations / back office”
        
    - “Agent architectures and workflows”
        
    - “Implementation guides and case studies”
        

Each pillar should have:

- A **pillar page**: Long, comprehensive guide (3,000–6,000+ words).
    
- **Cluster posts**:
    
    - How‑to guides (e.g., “How to build an AI agent for triaging GitHub issues”).
        
    - Comparisons (e.g., “AI agents vs traditional RPA for internal tools”).
        
    - Case studies (“How we cut support time by 40% with internal agents”).
        
    - Deep dives (“Tool calling patterns for reliable agents”).
        

## 2.2 Keyword Research for AI/Agent Topics

For each topic pillar:

- Start with “problem” and “solution” phrases:
    
    - “automate code review with AI”
        
    - “AI agent for customer support tickets”
        
    - “LLM agent architecture example”
        
- Expand using:
    
    - Autocomplete suggestions (… “for”, “vs”, “with”, “in <framework>”).
        
    - “People also ask” questions.
        
    - Long-tail variations:
        
        - “how to build an ai agent that calls apis”
            
        - “ai code review bot for github pull requests”
            
- Prioritize **high-intent long-tail** keywords (lower volume, clearer intent) over fighting for broad “AI agent” queries initially.
    

Document keywords and map **one primary keyword + 2–5 secondary keywords** to each article.

---

## 3. On-Page SEO for Blog Articles

## 3.1 Content Structure

For each article:

- **Title (H1)**:
    
    - Include the primary keyword naturally.
        
    - Convey a concrete benefit:
        
        - “How to Build an AI Agent for GitHub PR Reviews (with Step-by-Step Code)”
            
- **Intro**:
    
    - State the problem in user language.
        
    - State the outcome and who it is for.
        
    - Briefly outline what the article covers.
        
- **Headings (H2/H3)**:
    
    - Break content into logical sections that follow the user’s journey:
        
        - What/Why → Design → Implementation → Examples → Pitfalls → Next steps.
            
    - Use keywords in headings when natural.
        
- **Depth and specificity**:
    
    - Include real commands, code snippets, logs/screenshots, and metrics.
        
    - Show workflows and decision-making, not just definitions.
        
- **Conclusion**:
    
    - Summarize key takeaways.
        
    - Suggest next article(s) (internal links).
        
    - Call to action (e.g., try the product, sign up, GitHub link).
        

## 3.2 Metadata (Title, Description, Open Graph)

For a Nextra/Next.js blog, each article should define meta:

- **Title tag** (max ~60–65 characters):
    
    - Include primary keyword and brand if space:
        
    - “GitHub AI Code Review Agent: Step-by-Step Guide | YourBrand”
        
- **Meta description** (max ~150–160 characters):
    
    - Summarize value + keyword + call-to-action:
        
    - “Learn how to build an AI agent that reviews GitHub PRs, comments on issues, and catches bugs before merge.”
        
- **OG tags**:
    
    - Custom image per article (diagram, screenshot, or workflow).
        
    - Clear text overlay: article title/product logo.
        

In Nextra, you typically set these via front matter or page-level configuration (e.g., `title`, `description`, `nav`, and custom `head`).

## 3.3 URL, Slugs, and Internal Linking

- **Slug guidelines**:
    
    - Use short, descriptive, hyphenated URLs:
        
        - `/blog/github-ai-code-review-agent`
            
        - Avoid dates in URLs unless your niche is news.
            
- **Internal links**:
    
    - From each article, link to:
        
        - Its pillar page.
            
        - 2–4 related posts.
            
        - Documentation pages that show how to implement with your product.
            
    - Use descriptive anchor text:
        
        - “see the full guide to building production agent workflows” instead of “click here”.
            

## 3.4 Content Quality and Readability

- **Write for humans first**:
    
    - Short paragraphs.
        
    - Use bold sparingly for key phrases.
        
    - Make heavy use of code blocks and diagrams for technical posts.
        
- **Avoid AI-generic fluff**:
    
    - Phrases like “AI is transforming industries…” should be minimal.
        
    - Replace with concrete stories: what changed, by how much, for whom.
        

---

## 4. Technical SEO for Nextra / Next.js Blogs

Nextra is already good for SEO when configured properly.

## 4.1 Performance and Core Web Vitals

- Use:
    
    - Image optimization (`next/image`).
        
    - Lazy loading for below-the-fold assets.
        
    - Minimal blocking scripts.
        
- Keep:
    
    - Bundle size reasonable (avoid heavy client-side libraries where not needed).
        
    - Fonts optimized (system fonts or properly preloaded web fonts).
        

## 4.2 Site Structure & Navigation

- Ensure:
    
    - Clear navigation: `/blog`, `/docs`, `/changelog`, `/tutorials`.
        
    - Breadcrumbs and sidebars (Nextra offers these) that reflect hierarchy.
        
- Use:
    
    - A clear content hierarchy: `docs` for product, `blog` for narrative/SEO content.
        
    - Logical sectioning in `_meta.json` or equivalent Nextra config to group related content.
        

## 4.3 Indexing and Sitemaps

- Make sure:
    
    - There is a **sitemap** (Nextra/Next.js plugins or simple Next.js API route).
        
    - **robots.txt** is correctly set up:
        
        - Allow most pages; disallow internal test/staging or low-value URLs.
            
- Avoid:
    
    - Indexing tag-only pages or thin content.
        
    - Duplicate content (e.g., same article under multiple routes).
        

## 4.4 Structured Data

- Use JSON-LD for:
    
    - `Article` schema on blog posts:
        
        - `headline`, `author`, `datePublished`, `image`, `description`.
            
    - `Organization` schema on main site:
        
        - `name`, `url`, `logo`, and brief description.
            
- This helps:
    
    - Rich results (e.g., article rich snippets).
        
    - Brand recognition in search.
        

---

## 5. Content Strategy & Editorial Practices

## 5.1 Content Types That Work Well for AI/Agent Startups

From observing leading AI/agent players, the following formats perform strongly:

- **Deep technical explainers**:
    
    - Agent architectures, tool-calling strategies, memory patterns.
        
    - “How we handle long context and retrieval for agents in production.”
        
- **Implementation guides**:
    
    - Step-by-step integration with popular tools:
        
        - GitHub, Jira, Notion, Slack, VS Code, etc.
            
- **Comparisons and “X vs Y”**:
    
    - “Agents vs copilot-style tools for developers.”
        
    - “Using agents vs Zapier/Make for internal automation.”
        
- **Case studies and benchmarks**:
    
    - “We reduced bug count by X% using our agent in CI.”
        
    - Include graphs, timelines, and raw data where possible.
        
- **Product deep dives**:
    
    - Explain a flagship feature:
        
        - “How our agent interprets multi-step natural language tasks into structured workflows.”
            
- **Opinion / thought leadership**:
    
    - Carefully argued pieces on the future of agents, reliability, safety, and evaluation.
        
    - Avoid overly speculative posts; tie back to real experience.
        

## 5.2 Publishing Cadence

- Aim for:
    
    - 1 high-quality pillar post per month.
        
    - 1–2 cluster/supporting posts per week.
        
- Keep:
    
    - A content roadmap mapped to your product roadmap:
        
        - New feature → docs → blog announcement → deep-dive article → customer story.
            

## 5.3 Using AI to Help Write — Without Hurting SEO

- AI is great for:
    
    - Drafting outlines.
        
    - Generating initial explanations.
        
    - Summarizing long internal docs into blog-ready content.
        
- But final articles should:
    
    - Include unique insights from your team.
        
    - Use your own screenshots, logs, and code.
        
    - Be edited for tone, coherence, and factual accuracy.
        

Search engines increasingly downrank generic, undifferentiated AI content. Your advantage is your **real-world agent product and users**.

---

## 6. Best Practices from Leading AI / Agent Startups (2024–2025)

This section distills patterns seen from companies like **OpenAI, Anthropic (Claude), Cursor, code assistants, Devin-like tools, and others**. Rather than copying, focus on the underlying principles.

## 6.1 OpenAI

- **Product-focused docs and blog**:
    
    - Heavy emphasis on clear, task-based docs:
        
        - “How to build X with the API.”
            
    - Launch posts that mix:
        
        - Clear capability description.
            
        - Code examples.
            
        - Constraints and limitations.
            
- **Strong developer storytelling**:
    
    - Real examples: “Build a support bot”, “Build an email assistant”, etc.
        
    - Public cookbook-style collections that function as both docs and SEO content.
        
- **Key lessons**:
    
    - Make each article very **practical and build-oriented**.
        
    - Use many short code snippets instead of long walls of text.
        
    - Maintain a coherent “playground/cookbook” that doubles as SEO entry points.
        

## 6.2 Claude / Anthropic

- **Long-form, thoughtful content**:
    
    - Deep dives on reliability, safety, and evaluation.
        
    - Technical writeups about model capabilities and limitations.
        
- **Voice of expertise**:
    
    - Articles often feel like research notes turned into accessible posts.
        
- **Key lessons**:
    
    - Show **research-level depth**, but keep explanations accessible.
        
    - Use blog posts to reinforce brand as thoughtful and careful, not just flashy.
        

## 6.3 Cursor / AI Coding Tools

- **Use-case driven technical posts**:
    
    - How to use tool X in Y workflow (e.g., refactoring, tests, debugging).
        
    - Very developer-centric examples and code.
        
- **Short but focused posts**:
    
    - Often highly actionable, with video/gif demos.
        
- **Key lessons**:
    
    - Emphasize real coding workflows, not just features.
        
    - Show before/after productivity improvements.
        
    - Include small “recipes” that developers can copy.
        

## 6.4 Devin-like AI Engineer Tools

- **Narrative and storytelling**:
    
    - Show multi-step tasks the agent can handle.
        
    - Stories of a “day in the life” with the agent.
        
- **Demo-heavy**:
    
    - Videos, screenshots, and transcripts of the agent operating.
        
- **Key lessons**:
    
    - Use narratives to show **end-to-end flows**, not just isolated API calls.
        
    - Create “story posts” where the reader follows a task from idea → agent instructions → result.
        

## 6.5 HeyGen / Video-AI Tools

- **Verticalized use-case content**:
    
    - “For sales”, “for training”, “for support”.
        
- **Template- and outcome-focused**:
    
    - Posts often show “plug-and-play” recipes.
        
- **Key lessons**:
    
    - Segment content by **industry and role**.
        
    - Provide frameworks/templates that non-technical users can adopt quickly.
        

## 6.6 Manus and Other Agent Startups

Common patterns across smaller but strong agent tools:

- **Changelogs and “building in public” posts**:
    
    - Frequent, short updates build trust and provide fresh content.
        
- **Architecture & infra posts**:
    
    - Posts about how they handle reliability, retries, and tooling.
        
- **Key lessons**:
    
    - Use your blog partly as an engineering journal.
        
    - Transparency about trade-offs and failures builds credibility and organic links.
        

---

## 7. Converting SEO Traffic into Product Usage

SEO is a means to put your **agent in front of people with a live problem**.

## 7.1 In-Article CTAs and Product Embeds

- Use:
    
    - Contextual CTAs inside content:
        
        - After a code example, a small box: “Try this agent in our sandbox.”
            
    - End-of-post CTAs:
        
        - “Create this workflow in 5 minutes with [Your Product].”
            
- Embed:
    
    - Screenshots, gifs, or short videos of the agent performing the exact task described.
        
    - Interactive components if possible (e.g., live demos, play buttons).
        

## 7.2 Lead Magnets for High-Value Posts

For your top pillar pieces:

- Offer:
    
    - Downloadable checklists or templates (agent workflow template, evaluation checklist).
        
    - Email course: “7 days to your first production agent.”
        
- This helps:
    
    - Capture email addresses from organic traffic.
        
    - Build sequences that deepen engagement.
        

---

## 8. Measurement and Iteration

## 8.1 Core Metrics

Monitor:

- **Organic traffic metrics**:
    
    - Impressions and clicks per URL.
        
    - Top queries per page.
        
- **Engagement metrics**:
    
    - Time on page, scroll depth.
        
    - Click-through to docs or signup pages.
        
- **Business metrics**:
    
    - Signups or trials from blog.
        
    - Users who first landed via SEO and converted later.
        

## 8.2 Optimization Loop

For each article, periodically:

1. Check which queries it ranks for.
    
2. Expand sections that match high-impression queries.
    
3. Add missing subtopics and FAQs.
    
4. Improve internal links from other posts.
    
5. Refresh screenshots and code as product changes.
    

---

## 9. Practical Template for a High-Performing Blog Post

Use this skeleton when writing in Nextra/MDX:

text

`--- title: "How to Build an AI Agent for GitHub PR Reviews" description: "Step-by-step guide to building a GitHub PR review agent that catches bugs and comments automatically." date: "2025-02-10" author: "Your Name" --- # How to Build an AI Agent for GitHub PR Reviews [Short intro: who this is for, what they’ll get, quick outcome summary.] ## Why a GitHub PR Review Agent? [Problem, pain points, current manual process, why agents are a good fit.] ## High-Level Architecture [Diagram or explanation of components: triggers, tools, LLM, evaluation.] ## Step 1: Set Up the GitHub Integration [Concrete steps, code snippets, screenshots.] ## Step 2: Define Review Rules and Prompts [Examples of prompts, configurations, do/don’t.] ## Step 3: Handling Edge Cases and Failures [Retries, timeouts, guardrails.] ## Step 4: Deploying to Production [CI/CD integration, monitoring, logging.] ## Results: What to Expect [Hypothetical or real metrics, impact, caveats.] ## Try This with YourBrand Agent [CTA, links to docs, small pitch connecting article to your product.] ## FAQ [Common objections or questions sourced from users and search queries.]`

---

## 10. How to Use This Overview in Your Nextra Blog

- Add this as `overview.md` (or equivalent) in your content repo as an internal **SEO playbook**.
    
- Use it to:
    
    - Define your topic clusters.
        
    - Design the next 10–20 articles.
        
    - Review each draft before publishing:
        
        - Intent clear?
            
        - Metadata optimized?
            
        - Internal links added?
            
        - Real product insights included?
            

If you share more about your specific AI agent (target users, main workflows, tech stack), the next step would be to turn this into:

- A custom **content roadmap** with 15–30 prioritized article ideas.
    
- Example metadata (titles, descriptions, slugs) per article.
    
- A simple checklist your team can use for each new blog post.
    

1. [https://slickplan.com/blog/seo-and-content-marketing-relationship](https://slickplan.com/blog/seo-and-content-marketing-relationship)
2. [https://www.youtube.com/watch?v=Av5120MvQk4](https://www.youtube.com/watch?v=Av5120MvQk4)
3. [https://aioseo.com/seo-for-bloggers/](https://aioseo.com/seo-for-bloggers/)
4. [https://firstpagesage.com/seo-blog/seo-best-practices/](https://firstpagesage.com/seo-blog/seo-best-practices/)
5. [https://staticmania.com/blog/create-a-stylish-documentation-site-effortlessly-with-nextra](https://staticmania.com/blog/create-a-stylish-documentation-site-effortlessly-with-nextra)
6. [https://backlinko.com/hub/content/blog-seo](https://backlinko.com/hub/content/blog-seo)
7. [https://emplibot.com/seo-driven-content-marketing-2025-guide](https://emplibot.com/seo-driven-content-marketing-2025-guide)
8. [https://github.com/topics/nextra?o=desc&s=forks](https://github.com/topics/nextra?o=desc&s=forks)
9. [https://feather.so/blog/seo-best-practices-for-blogs](https://feather.so/blog/seo-best-practices-for-blogs)
10. [https://emplibot.com/seo-driven-content-marketing-2025-guide/](https://emplibot.com/seo-driven-content-marketing-2025-guide/)



# nextra blog opensource project


# guides.md – SEO Guide for a Nextra Blog Module

This guide explains how to use **Nextra’s blog theme + Next.js** to build an SEO-friendly blog module for your company website. It focuses on:

- How Nextra works with MDX/front matter.
    
- How to configure metadata and structure for SEO.
    
- How to wire up features like RSS and sitemaps.
    
- Practical patterns and code snippets you can reuse.
    

Use this as a living guide inside your repo (e.g. `content/guides.md`).

---

## 1. Mental Model: How Nextra Helps SEO

Nextra is a **content-focused layer on top of Next.js**. That means:

- You get all **Next.js SEO capabilities** (file-based routing, SSR/SSG, metadata API).
    
- You write content in **Markdown/MDX** with **front matter**.
    
- Nextra themes (like `nextra-theme-blog`) provide:
    
    - Clean, semantic HTML for posts.
        
    - Built-in pagination, tags, dates, and layouts.
        
    - Easy navigation and internal linking.
        

For SEO, Nextra mainly helps you with:

- **Clean URLs** and consistent routing.
    
- **Metadata and front matter** for titles/descriptions.
    
- **Site structure** via folders and `_meta` files.
    
- Optional **RSS feed** and other integrations.
    

You still need to **configure and use these features intentionally** to get good SEO results.

---

## 2. Project Setup for a Nextra Blog

This assumes you already have a Next.js site (e.g. the marketing site for your AI agent product).

## 2.1 Install Nextra Blog Theme

Install dependencies:

bash

`npm install next react react-dom nextra nextra-theme-blog # or yarn add next react react-dom nextra nextra-theme-blog # or pnpm add next react react-dom nextra nextra-theme-blog`

## 2.2 Wrap Next.js with Nextra

In `next.config.js`:

js

`const withNextra = require('nextra')({   theme: 'nextra-theme-blog',  themeConfig: './theme.config.jsx', // or .ts }) module.exports = withNextra({   // Your Next.js config  reactStrictMode: true, })`

`theme.config.jsx` will control site-level options, navigation, and some SEO defaults.

---

## 3. SEO Fundamentals in Nextra: Front Matter & Metadata

Nextra blog posts are **MDX files** with front matter. This front matter is the core of per-page SEO.

## 3.1 Basic Front Matter for SEO

Each post should start with something like:

text

`--- title: "How to Build an AI Agent for GitHub PR Reviews" description: "Step-by-step guide to creating a GitHub PR review agent using YourProduct and Next.js." date: "2025-02-10" author: "Your Name" tag: ["ai-agents", "github", "code-review"] --- # How to Build an AI Agent for GitHub PR Reviews Your content here...`

Key fields and their SEO roles:

- **`title`**  
    Used for the page title and `<h1>` heading. Make it keyword-rich but natural.
    
- **`description`**  
    Used for meta description. Summarize the core value of the post in 1–2 sentences.
    
- **`date`**  
    Helps search engines understand freshness and users understand recency.
    
- **`tag` / `tags`**  
    Useful for organizing content and giving search engines more semantic context.
    
- **`author`**  
    Helps with E‑E‑A‑T (Experience, Expertise, Authoritativeness, Trustworthiness).
    

If your theme config or custom Head component reads these fields, they can be injected into `<head>`.

## 3.2 Using Next.js Metadata API (App Router)

If using the Next.js App Router, you can still let Nextra handle rendering but customize metadata.

Example: `app/(blog)/[...slug]/page.tsx`:

ts

``import { notFound } from 'next/navigation' import { getPageMap } from 'nextra/page-map' // or your own loader export async function generateMetadata({ params }: { params: { slug: string[] } }) {   const slug = '/' + params.slug.join('/')  const pageMap = await getPageMap() // adjust to your setup   const page = pageMap.find((p) => p.route === slug)  if (!page) return {}   const frontMatter = (page as any).frontMatter || {}   const title = frontMatter.title || 'Blog | YourBrand'  const description =    frontMatter.description ||    'Articles about AI agents, automation, and developer workflows from YourBrand.'   const url = `https://yourdomain.com${slug}`   return {    title,    description,    openGraph: {      title,      description,      url,      type: 'article',    },    twitter: {      card: 'summary_large_image',      title,      description,    },  } }``

This pattern ensures:

- Every post uses its **own** SEO metadata.
    
- You can define **fallback defaults** if front matter is missing.
    

---

## 4. URL Structure and Routing

SEO benefits from **predictable, clean URLs**.

## 4.1 Folder Structure for Blog

An example structure:

text

`pages/   blog/    index.mdx    _meta.json    ai-agents/      index.mdx      github-pr-review-agent.mdx      customer-support-agent.mdx    architecture/      index.mdx      tool-calling-patterns.mdx      memory-design.mdx`

URLs will look like:

- `/blog`
    
- `/blog/ai-agents/github-pr-review-agent`
    
- `/blog/architecture/tool-calling-patterns`
    

This creates:

- **Clear topical clusters** (good for search engines and users).
    
- A consistent routing scheme you can reason about.
    

## 4.2 Configuring `_meta` for Navigation

Nextra uses `_meta.json` or `_meta.ts` to control nav labels, ordering, and visibility.

Example: `pages/blog/_meta.json`:

json

`{   "index": {    "title": "All Posts",    "type": "page"  },  "ai-agents": {    "title": "AI Agents",    "type": "folder"  },  "architecture": {    "title": "Architecture",    "type": "folder"  } }`

Inside `ai-agents/_meta.json`:

json

`{   "index": {    "title": "AI Agent Guides"  },  "github-pr-review-agent": {    "title": "GitHub PR Review Agent"  },  "customer-support-agent": {    "title": "Customer Support Agent"  } }`

SEO benefits:

- Clean, descriptive navigation in sidebar and breadcrumbs.
    
- Consistent titles and slugs for internal linking.
    

---

## 5. Internal Linking and Navigation

Internal links are a major SEO signal and Nextra makes them easy.

## 5.1 Inline Internal Links in MDX

Use relative links in your MDX content:

text

`If you're new to agents, start with the [AI Agent Overview](/blog/ai-agents). To see how we design robust tool calls, read [Tool Calling Patterns for Reliable Agents](/blog/architecture/tool-calling-patterns).`

Best practices:

- Use **descriptive anchor text**:
    
    - “AI Agent Overview” instead of “click here”.
        
- Link:
    
    - From cluster posts to **pillar** posts.
        
    - From pillars to **implementation** posts and docs.
        

## 5.2 Nextra Layout Features

Depending on the theme configuration, Nextra provides:

- Automatic **previous/next** links.
    
- Table of contents and sidebars.
    
- Section and category grouping via `_meta`.
    

All of these improve:

- Crawlability and internal link flow.
    
- User engagement (which indirectly supports SEO).
    

---

## 6. Performance, Images, and Core Web Vitals

## 6.1 Images with `next/image` in MDX

To keep pages fast:

- Use `next/image` inside MDX:
    

text

`import Image from 'next/image' <Image   src="/images/github-agent-architecture.png"  alt="Architecture of GitHub PR review agent"  width={1200}  height={630} />`

Benefits:

- Optimized images.
    
- Lazy loading.
    
- Proper sizing (better CLS and LCP).
    

## 6.2 Code Blocks and Highlighting

- Use minimal, efficient code highlighting solutions.
    
- Avoid heavy client-side libraries if not needed.
    
- Prefer static highlighting or lightweight options.
    

This helps keep bundle size small and improves **Core Web Vitals**, which are SEO signals.

---

## 7. RSS Feed for Blog (Optional but Recommended)

An RSS feed is not a ranking factor by itself, but:

- It makes it easier for other sites and tools to follow your content.
    
- Can help discoverability and backlinks.
    

If your Nextra setup or theme supports RSS:

- Configure a feed generator (often a simple script that:
    
    - Reads page map or front matter.
        
    - Outputs XML at `/rss.xml` or `/blog/rss.xml`).
        

Minimal pattern (conceptual example):

ts

``// pages/rss.xml.tsx or app/rss.xml/route.ts import { getPageMap } from 'nextra/page-map' import { NextResponse } from 'next/server' export async function GET() {   const posts = await getPageMap() // filter to blog posts   const items = posts    .map((post) => {      const fm = (post as any).frontMatter || {}      const url = `https://yourdomain.com${post.route}`      return `        <item>          <title><![CDATA[${fm.title}]]></title>          <link>${url}</link>          <pubDate>${new Date(fm.date).toUTCString()}</pubDate>          <description><![CDATA[${fm.description || ''}]]></description>        </item>`    })    .join('\n')   const xml = `<?xml version="1.0" encoding="UTF-8" ?>  <rss version="2.0">    <channel>      <title>YourBrand Blog</title>      <link>https://yourdomain.com/blog</link>      <description>AI agents, automation, and developer workflows.</description>      ${items}    </channel>  </rss>`   return new NextResponse(xml, {    headers: { 'Content-Type': 'application/rss+xml' },  }) }``

Adjust based on your actual Nextra/Next.js version and routing style.

---

## 8. Sitemap and Robots Configuration

Nextra doesn’t force a specific sitemap approach, but Next.js makes it straightforward.

## 8.1 Sitemap

A sitemap helps search engines discover all your blog posts and pages.

With App Router, you can create `app/sitemap.ts`:

ts

``// app/sitemap.ts import { MetadataRoute } from 'next' import { getPageMap } from 'nextra/page-map' export default async function sitemap(): Promise<MetadataRoute.Sitemap> {   const baseUrl = 'https://yourdomain.com'   const pages = await getPageMap() // adjust to your adapter  const urls =    pages      .filter((p) => p.route && !p.meta?.draft) // example filters      .map((p) => ({        url: `${baseUrl}${p.route}`,        lastModified: new Date(p.meta?.date || Date.now()),      })) || []   return urls }``

Result: Every blog post with front matter is included in the sitemap.

## 8.2 robots.txt

Create `public/robots.txt`:

text

`User-agent: * Allow: / Sitemap: https://yourdomain.com/sitemap.xml`

If you have staging environments, you can inject a more restrictive robots.txt for those deployments.

---

## 9. Open Graph & Social Previews

Good OG tags improve click-through rates from social media and sometimes search.

## 9.1 OG Image Strategy

- Use a **default OG image** with your brand.
    
- For high-value posts, generate **custom OG images** (e.g., with a tool or script).
    
- Reference OG images via metadata (see `generateMetadata` example above).
    

Example OG config snippet in metadata:

ts

`openGraph: {   title,  description,  url,  type: 'article',  images: [    {      url: frontMatter.ogImage || 'https://yourdomain.com/default-og.png',      width: 1200,      height: 630,    },  ], },`

Then in MDX front matter:

text

`--- title: "Production-Ready AI Agents for Customer Support" description: "Design, build, and deploy reliable support agents with YourProduct." date: "2025-03-01" ogImage: "/og/production-support-agent.png" ---`

---

## 10. Developer Workflow: How to Use Nextra for SEO Daily

## 10.1 Author Workflow Checklist per Post

When creating a new blog post:

1. Create the file in the **correct folder/cluster**.
    
2. Add front matter:
    
    - `title`, `description`, `date`, `author`, `tag`/`tags`, optional `ogImage`.
        
3. Write content with:
    
    - Clear headings (`##`/`###`).
        
    - Internal links to related posts and docs.
        
    - At least one screenshot or diagram if relevant.
        
4. Run the dev server and check:
    
    - Title tag in browser tab.
        
    - Meta description (via dev tools).
        
    - URL path and breadcrumbs.
        
5. Confirm:
    
    - It appears in blog index pages / lists correctly.
        
    - It is reachable in fewer than 3 clicks from `/blog`.
        

## 10.2 Engineering Workflow

As an engineer:

- Maintain **content loaders** (e.g., `getPageMap` or custom functions) that:
    
    - Provide front matter to metadata.
        
    - Make sure new posts are picked up in sitemap and RSS.
        
- Periodically audit:
    
    - Lighthouse scores for blog pages.
        
    - Bundle size and image usage.
        
- Keep **Nextra and Next.js updated** to benefit from latest performance and SEO improvements.
    

---

## 11. Recommended Blog Module Architecture for Your Product Site

A practical layout for an AI agent company:

- `/blog`
    
    - **Purpose**: SEO entry point, thought leadership, product tutorials.
        
- `/docs`
    
    - Implementation documentation (can also be Nextra docs theme).
        
- `/changelog`
    
    - Short updates; helps keep content fresh and frequent.
        
- `/guides` (optional)
    
    - Long-form, evergreen “how-to” guides that complement both blog and docs.
        

Use Nextra blog theme specifically for:

- `/blog` and nested directories.
    
- Maybe `/guides` if you want consistent styling and MDX enhancements.
    

---

## 12. Summary: How to Take Full Advantage of Nextra for SEO

To get maximum SEO value from Nextra’s blog theme:

- Use **front matter** consistently for titles, descriptions, dates, authors, tags.
    
- Build a **logical folder/URL structure** that reflects topic clusters.
    
- Wire front matter into the **Next.js metadata API** so each post has correct `<title>`, meta description, and OG tags.
    
- Implement **internal linking** heavily using MDX links and Nextra navigation.
    
- Optimize **performance** via `next/image`, careful code highlighting, and minimal scripts.
    
- Provide a **sitemap and robots.txt** so search engines can discover and crawl your content.
    
- Optionally publish an **RSS feed** for discoverability and integrations.
    
- Establish a **clear workflow** for authors and engineers so every new post ships SEO-ready.
    

You can now drop this `guides.md` into your repo, adapt paths and code snippets to your actual setup, and use it as the central reference for building and maintaining an SEO-optimized Nextra blog module.

1. [https://www.youtube.com/watch?v=Av5120MvQk4](https://www.youtube.com/watch?v=Av5120MvQk4)
2. [https://www.nextr.in](https://www.nextr.in)
3. [https://github.com/shuding/nextra/discussions/681](https://github.com/shuding/nextra/discussions/681)
4. [https://nextra.site/docs](https://nextra.site/docs)
5. [https://nextr.in/blog/small-seo-tools/](https://nextr.in/blog/small-seo-tools/)
6. [https://www.brianchitester.com/posts/blog-tutorial](https://www.brianchitester.com/posts/blog-tutorial)
7. [https://nextra.site/docs/blog-theme/start](https://nextra.site/docs/blog-theme/start)
8. [https://nextr.in/blog/how-to-use-keywords-and-backlinks-for-a-powerful-seo-and-smo-strategy/](https://nextr.in/blog/how-to-use-keywords-and-backlinks-for-a-powerful-seo-and-smo-strategy/)
9. [https://blog.stackademic.com/how-i-built-my-next-js-blog-using-nextra-and-tailwind-css-03037983fa9a?gi=4a2ff4e3306c](https://blog.stackademic.com/how-i-built-my-next-js-blog-using-nextra-and-tailwind-css-03037983fa9a?gi=4a2ff4e3306c)
10. [https://best-of-web.builder.io/library/shuding/nextra](https://best-of-web.builder.io/library/shuding/nextra)
11. [https://mdx.do/blog/Mastering-Metadata:-How-mdx.do-Parses-Frontmatter-For-You](https://mdx.do/blog/Mastering-Metadata:-How-mdx.do-Parses-Frontmatter-For-You)
12. [https://nextra.site/docs/blog-theme/rss](https://nextra.site/docs/blog-theme/rss)
13. [https://nextra.site/docs/docs-theme/start](https://nextra.site/docs/docs-theme/start)
14. [https://nextra.site/docs/guide/markdown](https://nextra.site/docs/guide/markdown)
15. [https://github.com/shuding/nextra/issues/419](https://github.com/shuding/nextra/issues/419)
16. [https://nextra.site/docs/file-conventions/meta-file](https://nextra.site/docs/file-conventions/meta-file)
17. [https://github.com/shuding/nextra/discussions/2280](https://github.com/shuding/nextra/discussions/2280)
18. [https://nextra.site/docs/custom-theme](https://nextra.site/docs/custom-theme)


Now I have comprehensive information. Let me create a detailed guide for the user about setting up their Nextra blog for search engine discovery and indexing.

## Complete Guide to Launching Your Nextra Blog for Search Engine Discovery and Indexing

## Immediate Priority Actions (Week 1)

The foundation of search engine visibility begins with **Google Search Console and Bing Webmaster Tools setup**. These tools are essential for monitoring how search engines crawl, index, and display your website.

**Setting up Google Search Console:** Visit Google Search Console and click Start Now, then sign in with your Google account. You'll need to add your property using the "URL Prefix" method, entering your full domain URL including https:// and the trailing slash. You have multiple verification options: the recommended method uses an HTML tag that you add to your site's header, or you can verify through domain provider settings.[whitecanvasdesign+2](https://whitecanvasdesign.ca/blog/how-to-connect-your-website-to-google-search-console-supporting-seo-and-monitoring-your-websites-health/)​

**Setting up Bing Webmaster Tools:** Go to Bing Webmaster Tools and sign in with a Microsoft account. Add your website by clicking 'Add a Site' and follow the verification steps. The great advantage of Bing is that once you submit to Bing Webmaster Tools, your site automatically becomes eligible for Yahoo and DuckDuckGo as well, since both rely on Bing's search index.[abun+2](https://abun.com/how-to-submit-your-site-to-search-engines-google-bing-yahoo-yandex-duckduckgo-baidu)​

## Technical Foundation: Sitemap and Robots.txt

**Creating and submitting your XML sitemap** is critical for helping search engines discover all your content efficiently. Check if your Nextra installation automatically generates a sitemap at `yourdomain.com/sitemap.xml`. If it does, you're ahead—Nextra should handle this automatically since it's built on Next.js.[seo+1](https://www.seo.com/basics/how-search-engines-work/indexing/)​

**Adding your sitemap to robots.txt:** Your robots.txt file should contain a reference to your sitemap. Add this line to your robots.txt:[woorank+2](https://www.woorank.com/en/blog/how-to-locate-a-sitemap-in-a-robots-txt-file)​

text

`Sitemap: https://yourdomain.com/sitemap.xml User-agent: * Disallow:`

This simple addition helps search engines auto-discover your sitemap when they crawl your robots.txt file. If you have multiple sitemaps, reference your sitemap index instead.[woorank](https://www.woorank.com/en/blog/how-to-locate-a-sitemap-in-a-robots-txt-file)​

## Submitting Your Site for Indexing

After verification, take these immediate steps:

**Submit your sitemap:** In Google Search Console, navigate to the Sitemaps section and submit your XML sitemap URL. Bing has a similar process in Bing Webmaster Tools.[seranking+1](https://seranking.com/blog/how-to-set-up-google-search-console/)​

**Request indexing of key pages:** Use the URL Inspection tool in Google Search Console to submit important pages like your homepage and top blog posts for immediate crawling. This accelerates the indexing process compared to waiting for organic discovery.[whitecanvasdesign](https://whitecanvasdesign.ca/blog/how-to-connect-your-website-to-google-search-console-supporting-seo-and-monitoring-your-websites-health/)​

## On-Page SEO Optimization for Blog Content

**Meta tags implementation:** Each blog post must include:[hubspot+2](https://blog.hubspot.com/customers/bid/109668/how-to-use-meta-descriptions-keywords-and-tags-on-your-blog)​

- **Title tag (50-60 characters):** Include your primary keyword and make it compelling
    
- **Meta description (100-160 characters):** Summarize the post's value proposition and include your primary keyword naturally
    
- **Heading structure:** Use a single H1 per page, then organize with H2s, H3s, and H4s logically
    

The difference between a well-optimized and poorly-optimized page can significantly impact click-through rates from search results.[searchatlas](https://searchatlas.com/blog/meta-tag-optimization/)​

**Structured data with JSON-LD:** This is increasingly important for search engines and AI-driven search results. Add JSON-LD structured data for your blog posts in the `<head>` section of your HTML:[reddit+3](https://www.reddit.com/r/nextjs/comments/1he53gt/how_to_make_a_seo_friendly_blog/)​

json

`<script type="application/ld+json"> {   "@context": "https://schema.org",  "@type": "BlogPosting",  "headline": "Your Article Title",  "description": "Article description",  "image": "image-url",  "datePublished": "2025-12-07",  "author": {    "@type": "Person",    "name": "Author Name"  } } </script>`

Use Google's Rich Results Test to validate your structured data implementation.[schemaapp](https://www.schemaapp.com/schema-markup/what-is-schema-markup-a-guide-to-structured-data/)​

## Technical SEO Performance Optimization

**Core Web Vitals optimization:** Google prioritizes these three metrics in search rankings:[harmonweb+4](https://harmonweb.com/blog/technical-seo-the-best-practices-for-2025/)​

- **Largest Contentful Paint (LCP):** Target under 2.5 seconds
    
- **Cumulative Layout Shift (CLS):** Keep below 0.1
    
- **Interaction to Next Paint (INP):** Stay under 200 milliseconds
    

To improve Core Web Vitals: optimize image delivery using modern formats like WebP, enable lazy loading, minimize JavaScript execution, use a Content Delivery Network (CDN), and optimize server response times. Next.js/Nextra handle many of these automatically, but you should still test using Google PageSpeed Insights and Lighthouse.[upskillist+1](https://www.upskillist.com/blog/mobile-seo-best-practices-for-2025-the-complete-guide/)​

**Mobile-first optimization:** Since Google uses mobile-first indexing, ensure your Nextra blog is fully responsive with touch-friendly buttons and fast mobile load times. Mobile users on 3G/4G connections have lower tolerance for slow pages.[upskillist](https://www.upskillist.com/blog/mobile-seo-best-practices-for-2025-the-complete-guide/)​

## Content Foundation and Internal Linking Strategy

**Create quality, keyword-targeted content:** Before worrying about backlinks, focus on writing comprehensive, original content that answers your audience's search queries. Content should be:[crowdboostmarketing+1](https://crowdboostmarketing.com/seo-best-practices-in-2025/)​

- Topically comprehensive and in-depth
    
- Aligned with search intent (informational, transactional, navigational)
    
- Well-formatted with short paragraphs, bullet points, and clear headings
    
- Including relevant keywords naturally without stuffing
    

**Implement internal linking strategically:** This is crucial for new blogs without external backlinks yet. Create a hub-and-spoke structure where your pillar (main) content links to supporting articles, and those articles link back to the pillar. For blog posts, aim for 5-10 internal links depending on length (approximately 1-2 per 300 words). When publishing new content, spend 15 minutes updating 3-5 older posts with internal links to the new one.[writesonic+2](https://writesonic.com/blog/internal-linking-best-practices)​

**Image optimization:** Every image should have:[azariangrowthagency+3](https://azariangrowthagency.com/seo-image-optimization/)​

- Descriptive filename (e.g., "nextra-blog-setup-process.jpg" instead of "IMG_3294.jpg")
    
- Concise alt text (80-140 characters) that describes the image and relates to your content context
    
- Natural keyword integration without stuffing
    

Example good alt text: "Nextra blog dashboard showing published articles and SEO metadata fields" instead of just "dashboard screenshot"

## Accessibility and SEO Connection

**WCAG compliance benefits both accessibility and SEO:** Websites meeting WCAG 2.1 Level AA standards see a 23% increase in organic traffic. Key accessibility features that boost SEO include proper heading hierarchy, image alt text, form labels, sufficient color contrast, and descriptive link text. These same features make your content more crawlable and understandable for search engines.[thekestrel+1](https://thekestrel.co/website-accessibility-seo-boost/)​

## Building Initial Authority Without Backlinks

For a brand new blog, you don't start with backlinks. Instead:[reddit+3](https://www.reddit.com/r/SEO/comments/w2jpha/what_are_the_very_first_backlinks_i_should_be/)​

**Phase 1 - Social media presence:** Create social media profiles on Twitter, LinkedIn, Pinterest, and relevant platforms for your niche. Share your blog posts on these platforms. While social signals don't directly impact rankings, they drive visibility and can lead to organic backlinks as people discover your content.[reddit](https://www.reddit.com/r/SEO/comments/w2jpha/what_are_the_very_first_backlinks_i_should_be/)​

**Phase 2 - Content creation and natural promotion:** Write 10-15 pieces of quality content before aggressively pursuing backlinks. Focus on solving specific problems for your target audience. Content around low-volume or zero-volume keywords is easier to rank for initially.[laurajawadmarketing+1](https://www.laurajawadmarketing.com/blog/how-to-get-backlinks-to-your-blog/)​

**Phase 3 - Building backlinks organically:** Once you have solid content, pursue backlinks through podcast appearances, guest posting, creating link-worthy assets (original research, comprehensive guides), and relationship building. These methods attract higher-quality backlinks than link exchange schemes.[backlinko+1](https://backlinko.com/how-to-start-a-blog)​

## Analytics and Performance Tracking

**Google Analytics 4 setup:** Install GA4 to track organic traffic, user behavior, and conversions. Create conversion events for important actions like newsletter signups or content downloads. Link GA4 with Google Search Console to understand which keywords drive traffic.[voluum+1](https://voluum.com/blog/conversion-tracking-google-analytics-4/)​

**Monitoring tools for ongoing optimization:** Track your SEO performance using:[agencyanalytics+2](https://agencyanalytics.com/blog/seo-monitoring-tools)​

- Google Search Console (free, essential)
    
- Google Analytics (free, essential)
    
- Optional paid tools: Ahrefs, SEMrush, Moz, or SE Ranking for rank tracking and competitive analysis
    

Regular monitoring helps identify which content resonates, which keywords are driving traffic, and where technical issues exist.

## Content Publishing Schedule and Calendar

**Consistency matters more than volume:** Rather than sporadic posts, establish a realistic publishing frequency your team can maintain. Recommended frequencies by business type:[planable+2](https://planable.io/blog/blog-content-calendar/)​

- **Content-driven blogs/startups:** 12-16 posts per month
    
- **Small businesses:** 4-6 posts per month
    
- **B2B consulting:** 2-4 posts per month
    
- **Nonprofits:** 4-6 posts per month
    

For a new blog starting out, publishing 2-4 quality posts per month is more valuable than 1-2 posts weekly if you can't sustain the latter.

Create a content calendar planning 3 months in advance, including keywords, topics, publishing dates, and responsible team members. Consistency builds trust with search engines and your audience.

## Maintaining Content Freshness Over Time

**Evergreen content refresh strategy:** Even after initial launch, your existing content needs periodic updates:[newzdash+2](http://www.newzdash.com/guide/refreshing-evergreen-content-comprehensive-guide)​

- Review and update statistics every 9-12 months
    
- Fix broken links and update outdated references
    
- Add new information as industry standards evolve
    
- Enhance with new visuals, videos, or interactive elements
    
- Strengthen internal linking to newer related content
    

Keep these updates in Google Search Console so they're re-crawled promptly.

## Multi-Search Engine Strategy

While Google dominates, don't ignore other search engines:[wpbeginner+2](https://www.wpbeginner.com/beginners-guide/how-to-submit-your-website-to-search-engines/)​

- **Bing Webmaster Tools:** Covers Bing, Yahoo, and DuckDuckGo (which uses Bing's index)
    
- **Yandex Webmaster (if targeting Russia/Eastern Europe):** Register, verify ownership, and submit your sitemap[abun](https://abun.com/how-to-submit-your-site-to-search-engines-google-bing-yahoo-yandex-duckduckgo-baidu)​
    
- **Baidu (if targeting China):** Register on Baidu Webmaster Tools and submit your sitemap[abun](https://abun.com/how-to-submit-your-site-to-search-engines-google-bing-yahoo-yandex-duckduckgo-baidu)​
    

The submission process is consistent across platforms: verify ownership, submit your sitemap, and monitor indexing status.

## Implementation Timeline

**Week 1:** Set up Google Search Console and Bing Webmaster Tools with proper verification and sitemap submission. Ensure title tags and meta descriptions are on all pages.

**Week 2-3:** Implement JSON-LD structured data for your blog posts. Audit your mobile responsiveness and Core Web Vitals. Create your internal linking strategy.

**Week 3-4:** Submit individual high-priority pages for indexing. Create your content calendar and publishing schedule.

**Ongoing:** Publish consistently, monitor performance in Google Search Console and Analytics, refresh older content, build internal links when publishing new posts, and gradually develop your backlink profile through quality content and relationship building.

The key to long-term success is creating genuinely valuable content that addresses your audience's needs, optimizing that content technically for search engines, and consistently promoting and maintaining it over time. Search engine visibility doesn't happen overnight, but with these foundational practices in place, your Nextra blog will be well-positioned to grow its organic traffic steadily.

1. [https://whitecanvasdesign.ca/blog/how-to-connect-your-website-to-google-search-console-supporting-seo-and-monitoring-your-websites-health/](https://whitecanvasdesign.ca/blog/how-to-connect-your-website-to-google-search-console-supporting-seo-and-monitoring-your-websites-health/)
2. [https://seranking.com/blog/how-to-set-up-google-search-console/](https://seranking.com/blog/how-to-set-up-google-search-console/)
3. [https://yoast.com/help/how-to-add-your-website-to-google-search-console/](https://yoast.com/help/how-to-add-your-website-to-google-search-console/)
4. [https://abun.com/how-to-submit-your-site-to-search-engines-google-bing-yahoo-yandex-duckduckgo-baidu](https://abun.com/how-to-submit-your-site-to-search-engines-google-bing-yahoo-yandex-duckduckgo-baidu)
5. [https://www.wpbeginner.com/beginners-guide/how-to-submit-your-website-to-search-engines/](https://www.wpbeginner.com/beginners-guide/how-to-submit-your-website-to-search-engines/)
6. [https://www.interserver.net/tips/kb/submitting-your-site-to-search-engines-2025/](https://www.interserver.net/tips/kb/submitting-your-site-to-search-engines-2025/)
7. [https://www.seo.com/basics/how-search-engines-work/indexing/](https://www.seo.com/basics/how-search-engines-work/indexing/)
8. [https://www.shopify.com/ca/blog/how-to-get-website-indexed-by-google](https://www.shopify.com/ca/blog/how-to-get-website-indexed-by-google)
9. [https://www.woorank.com/en/blog/how-to-locate-a-sitemap-in-a-robots-txt-file](https://www.woorank.com/en/blog/how-to-locate-a-sitemap-in-a-robots-txt-file)
10. [https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
11. [https://ftdigital.ca/robots-txt-sitemap/](https://ftdigital.ca/robots-txt-sitemap/)
12. [https://blog.hubspot.com/customers/bid/109668/how-to-use-meta-descriptions-keywords-and-tags-on-your-blog](https://blog.hubspot.com/customers/bid/109668/how-to-use-meta-descriptions-keywords-and-tags-on-your-blog)
13. [https://searchatlas.com/blog/meta-tag-optimization/](https://searchatlas.com/blog/meta-tag-optimization/)
14. [https://www.seo.com/basics/glossary/meta-keywords/](https://www.seo.com/basics/glossary/meta-keywords/)
15. [https://www.reddit.com/r/nextjs/comments/1he53gt/how_to_make_a_seo_friendly_blog/](https://www.reddit.com/r/nextjs/comments/1he53gt/how_to_make_a_seo_friendly_blog/)
16. [https://simpleandsoulful.com/blog/add-json-ld-schema-to-your-squarespace-blog-post](https://simpleandsoulful.com/blog/add-json-ld-schema-to-your-squarespace-blog-post)
17. [https://www.schemaapp.com/schema-markup/what-is-schema-markup-a-guide-to-structured-data/](https://www.schemaapp.com/schema-markup/what-is-schema-markup-a-guide-to-structured-data/)
18. [https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)
19. [https://harmonweb.com/blog/technical-seo-the-best-practices-for-2025/](https://harmonweb.com/blog/technical-seo-the-best-practices-for-2025/)
20. [https://naturaily.com/blog/core-web-vitals-increase-in-traffic-and-sales](https://naturaily.com/blog/core-web-vitals-increase-in-traffic-and-sales)
21. [https://www.laurajawadmarketing.com/blog/how-to-get-backlinks-to-your-blog/](https://www.laurajawadmarketing.com/blog/how-to-get-backlinks-to-your-blog/)
22. [https://searchxpro.com/how-core-web-vitals-impact-mobile-seo/](https://searchxpro.com/how-core-web-vitals-impact-mobile-seo/)
23. [https://www.upskillist.com/blog/mobile-seo-best-practices-for-2025-the-complete-guide/](https://www.upskillist.com/blog/mobile-seo-best-practices-for-2025-the-complete-guide/)
24. [https://crowdboostmarketing.com/seo-best-practices-in-2025/](https://crowdboostmarketing.com/seo-best-practices-in-2025/)
25. [https://www.hostinger.com/ca/tutorials/write-seo-friendly-content](https://www.hostinger.com/ca/tutorials/write-seo-friendly-content)
26. [https://writesonic.com/blog/internal-linking-best-practices](https://writesonic.com/blog/internal-linking-best-practices)
27. [https://storychief.io/blog/internal-linking-guide](https://storychief.io/blog/internal-linking-guide)
28. [https://www.siteimprove.com/blog/internal-linking-strategy-for-seo/](https://www.siteimprove.com/blog/internal-linking-strategy-for-seo/)
29. [https://azariangrowthagency.com/seo-image-optimization/](https://azariangrowthagency.com/seo-image-optimization/)
30. [https://www.amsive.com/insights/seo/alt-text-to-supercharge-discoverability-seo-guidelines-for-smarter-image-optimization/](https://www.amsive.com/insights/seo/alt-text-to-supercharge-discoverability-seo-guidelines-for-smarter-image-optimization/)
31. [https://yoast.com/image-seo-alt-tag-and-title-tag-optimization/](https://yoast.com/image-seo-alt-tag-and-title-tag-optimization/)
32. [https://alttext.ai/blog/image-alt-text-seo-best-practices](https://alttext.ai/blog/image-alt-text-seo-best-practices)
33. [https://thekestrel.co/website-accessibility-seo-boost/](https://thekestrel.co/website-accessibility-seo-boost/)
34. [https://www.accessibility.works/blog/2025-wcag-ada-website-compliance-standards-requirements/](https://www.accessibility.works/blog/2025-wcag-ada-website-compliance-standards-requirements/)
35. [https://www.reddit.com/r/SEO/comments/w2jpha/what_are_the_very_first_backlinks_i_should_be/](https://www.reddit.com/r/SEO/comments/w2jpha/what_are_the_very_first_backlinks_i_should_be/)
36. [https://www.shopify.com/ca/blog/how-to-increase-domain-authority](https://www.shopify.com/ca/blog/how-to-increase-domain-authority)
37. [https://www.monsterinsights.com/domain-authority/](https://www.monsterinsights.com/domain-authority/)
38. [https://backlinko.com/increase-domain-authority](https://backlinko.com/increase-domain-authority)
39. [https://backlinko.com/how-to-start-a-blog](https://backlinko.com/how-to-start-a-blog)
40. [https://voluum.com/blog/conversion-tracking-google-analytics-4/](https://voluum.com/blog/conversion-tracking-google-analytics-4/)
41. [https://www.attributionapp.com/blog/google-analytics-conversion-tracking/](https://www.attributionapp.com/blog/google-analytics-conversion-tracking/)
42. [https://agencyanalytics.com/blog/seo-monitoring-tools](https://agencyanalytics.com/blog/seo-monitoring-tools)
43. [https://visualping.io/blog/top-seo-monitoring-tools](https://visualping.io/blog/top-seo-monitoring-tools)
44. [https://www.plesk.com/blog/business-industry/seo-monitoring-tools/](https://www.plesk.com/blog/business-industry/seo-monitoring-tools/)
45. [https://planable.io/blog/blog-content-calendar/](https://planable.io/blog/blog-content-calendar/)
46. [https://www.positional.com/blog/how-many-blogs-should-you-post-a-month](https://www.positional.com/blog/how-many-blogs-should-you-post-a-month)
47. [https://dotdigital.com/blog/marketing-content-calendar-guide/](https://dotdigital.com/blog/marketing-content-calendar-guide/)
48. [http://www.newzdash.com/guide/refreshing-evergreen-content-comprehensive-guide](http://www.newzdash.com/guide/refreshing-evergreen-content-comprehensive-guide)
49. [https://www.hostpapa.com/blog/web-hosting/evergreen-content-guide/](https://www.hostpapa.com/blog/web-hosting/evergreen-content-guide/)
50. [https://www.forbes.com/councils/forbescommunicationscouncil/2024/10/15/13-tips-to-keep-evergreen-content-fresh-year-after-year/](https://www.forbes.com/councils/forbescommunicationscouncil/2024/10/15/13-tips-to-keep-evergreen-content-fresh-year-after-year/)
51. [https://theyetilabs.com/blog/posts/technical-seo-checklist-boost-your-website-performance](https://theyetilabs.com/blog/posts/technical-seo-checklist-boost-your-website-performance)
52. [https://www.reddit.com/r/TechSEO/comments/1e7w9d8/what_else_should_i_do_to_get_indexed_by_google/](https://www.reddit.com/r/TechSEO/comments/1e7w9d8/what_else_should_i_do_to_get_indexed_by_google/)
53. [https://desishub-docs.vercel.app/programming-tutorials/nextjs/next-seo](https://desishub-docs.vercel.app/programming-tutorials/nextjs/next-seo)
54. [https://aioseo.com/how-to-set-up-google-search-console/](https://aioseo.com/how-to-set-up-google-search-console/)
55. [https://firstpagesage.com/seo-blog/seo-best-practices/](https://firstpagesage.com/seo-blog/seo-best-practices/)
56. [https://www.bluehost.com/blog/how-to-submit-your-website-to-search-engines/](https://www.bluehost.com/blog/how-to-submit-your-website-to-search-engines/)
57. [https://www.heatmap.com/blog/ga4-conversion-tracking](https://www.heatmap.com/blog/ga4-conversion-tracking)
58. [https://www.lovesdata.com/blog/google-analytics-4-conversion-tracking/](https://www.lovesdata.com/blog/google-analytics-4-conversion-tracking/)
59. [https://snapshot.internetx.com/en/domain-authority-how-to-build-it-successfully/](https://snapshot.internetx.com/en/domain-authority-how-to-build-it-successfully/)
60. [https://blackdot.ca/web-design-toronto/accessibility-compliance/](https://blackdot.ca/web-design-toronto/accessibility-compliance/)

