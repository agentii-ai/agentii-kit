# Editorial & Technical Implementation Plan: Single Blog Creation Pipeline

**Branch**: `003-single-blog` | **Created**: 2025-12-07 | **Status**: Ready for Execution
**Specification**: [spec.md](./spec.md) | **Parent Spec**: [002-spec-kits-blogs](../002-spec-kits-blogs/spec.md)

---

## Executive Summary

This plan operationalizes the single blog creation pipeline defined in spec.md, bridging content objectives (6 user stories, 13 functional requirements) with technical execution using the existing Nextra blog system.

**Key Approach**: Semi-automated pipeline leveraging Claude Code + blogkit commands to reduce blog creation time from 12-16 hours to <8 hours while maintaining evidence-backed credibility and SEO optimization.

**Platform**: Nextra 4.6 + Next.js 14 (App Router) deployed on Vercel | **Timeline**: Phase 1 (setup) → Phase 2 (content production) → Phase 3 (measurement)

---

## 1. Content-First Validation ✅

**Specification Review**: spec.md passes Content-First gate

- ✅ ZERO technology implementation details in spec.md
- ✅ Spec defines WHAT pipeline stages and WHY (6 user stories, 13 functional requirements)
- ✅ All success metrics are user/business outcomes (time to publish, quality, traffic, engagement)
- ✅ Ready for technical planning (this document)

**Content Strategy Extracted**:

- **Blog Type**: Practitioner (tutorials, how-to guides, case studies)
- **Target Audience**: Founders, PMs, engineers on GitHub, Hacker News, Indie Hackers
- **Publishing Cadence**: 2-4 posts/month (target 3/month per 002-spec-kits-blogs)
- **Team Capacity**: 1.25 FTE (0.5 writer + 0.25 SME + 0.25 editor + 0.25 marketing)
- **Success Metrics**: 12 criteria from spec.md covering process efficiency, blog performance, content quality

---

## 2. Technical Context: Nextra Blog System

### Current Platform Architecture

**CMS/Framework**: Next.js 14 (App Router) + Nextra 4.6 + MDX 3.0

- **Deployed**: Vercel (auto-deploy from GitHub)
- **Static Export**: Enabled (output: 'export')
- **Build Time**: <3 minutes full site, <30 seconds incremental
- **Image Optimization**: AVIF/WebP formats, remote patterns enabled

**Content Management**:

- **Blog Directory**: `/content/blog/`
- **Naming Convention**: `YYYY-MM-DD-slug-title.md` (auto-sorted by date, newest first)
- **Slug Generation**: Automatic from filename or explicit in frontmatter
- **Routing**: `/blog/posts/[slug]/` (e.g., `/blog/posts/achieving-99-accuracy-agentic-search/`)

**Frontmatter Schema** (YAML):

```yaml
---
title: "Post Title (10-120 chars)"
description: "Brief summary (50-160 chars optimal for meta)"
date: "YYYY-MM-DD"                    # ISO 8601, not future date
author: "Author Name"
tags:
  - tag1                              # 1-8 tags, lowercase alphanumeric-hyphens
  - tag2
draft: false                          # Exclude from listings if true
featured: false                       # Show in featured section
cover: /images/blog/image-name.jpg    # Hero image
cover_alt: "Alt text"
category: "technical"                 # blog|docs|announcement|company
keywords:
  - keyword1                          # Max 10 keywords
  - keyword2
updated_at: "YYYY-MM-DD"              # Optional, for content updates
canonical: "https://..."              # Optional, for syndicated content
---
```

**Media Organization**:

- **Image Directory**: `/public/images/blog/`
- **Recommended Structure**: Separate subdirectory per post
  - `/public/images/blog/post-slug/image-01.jpg`
  - `/public/images/blog/post-slug/diagram.png`
  - `/public/images/blog/post-slug/screenshot.jpg`
- **Reference in Content**: `![Alt text](/images/blog/post-slug/image-01.jpg)`

**Blog Loader Functions** (available in templates/code generation):

- `getAllBlogPosts(includeDrafts)` - All published posts
- `getBlogPostBySlug(slug)` - Single post by slug
- `getPublishedPosts()` - Non-draft posts only
- `getFeaturedPosts(limit)` - Featured posts (default 3)
- `getRecentPosts(limit)` - Latest posts (default 10)
- `getPostsByTag(tag)` - Posts filtered by tag
- `getPostsByCategory(category)` - Posts filtered by category
- `searchPosts(query)` - Full-text search
- `getAllTags()` - Unique tags across all posts
- `getTagStatistics()` - Tag frequency

**Tag System**:

- **Format**: lowercase alphanumeric with hyphens (`a-z0-9-`)
- **Length**: 2-30 characters
- **Limit**: 1-8 tags per post
- **Discovery**: Tag pages at `/blog/tags/[tag]/`

---

## 3. Editorial Workflow: Practitioner Blog Pipeline

### Production Timeline: 8-Hour Sprint (Per User Story)

**Total Time Breakdown**:

| Stage | Duration | Activities | Owner |
|-------|----------|------------|-------|
| **S1: Ideation & Validation** | 0.5 hrs | Topic angles, keyword validation, audience fit | Writer |
| **S2: Research & Evidence** | 1.5 hrs | Gather 10-20 sources, organize by topic/claim | Writer |
| **S3: Outline & AI Draft** | 2.5 hrs | Detailed outline (3-4 levels), AI draft generation | Writer |
| **S4: Revision & Polish** | 1.5 hrs | Fact-checking, readability (FK 10-13), brand voice | Writer + Editor |
| **S5: Formatting & SEO** | 1.0 hrs | Markdown structure, Nextra frontmatter, metadata | Editor |
| **S6: Publishing & Tracking** | 1.0 hrs | GitHub commit, Nextra build, social distribution | Editor + Marketing |
| **SME Technical Review** | 0.5 hrs (async) | Validate claims, code examples, kit versions | SME (parallel with S4) |
| **Total** | **8 hrs** | Complete pipeline, end-to-end | ~1.5 FTE |

### Stage Details with Checklist

#### Stage 1: Ideation & Validation (0.5 hours)

**Activity**: Generate blog idea angles, validate keyword, confirm audience intent

**Process**:

1. Content creator inputs topic: "How to build AI agents for startups"
2. Run `/blogkit.clarify` (or similar tool) to generate 3-5 angles:
   - Angle A: "Building AI Agents with Claude Code" (transactional, how-to)
   - Angle B: "Why Agentic Search Beats RAG for Startups" (comparative, opinion)
   - Angle C: "Case Study: Agentii's Agent Architecture" (case study, social proof)
   - Angle D: "Agent Prompt Engineering for Financial AI" (technical, educational)
   - Angle E: "Multi-Agent Coordination Patterns" (advanced, architecture)

3. Select most promising angle based on:
   - ✓ Keyword target < 5,000 monthly search volume
   - ✓ Search intent matches blog type (informational/transactional)
   - ✓ Aligns with 002-spec-kits-blogs content pillars
   - ✓ Different from existing blog post topics

4. Create validated blog plan:
   - **Title**: Primary keyword in title
   - **Target Keyword**: Search volume, competition level
   - **Audience**: Primary persona (founders, PMs, engineers)
   - **Search Intent**: Informational/Transactional/Navigational
   - **Outline Skeleton**: 3-5 major sections (H2 level)
   - **Evidence Gap Analysis**: What sources will support each claim?

**Tools**: `.blogkit/` commands, Google Search Console (for keyword volume), SEO tools (Ahrefs/SEMrush optional)

**Output**: 1-page validated blog plan document

---

#### Stage 2: Research & Evidence Gathering (1.5 hours)

**Activity**: Systematically gather 10-20 credible sources, organize by claim/section

**Process**:

1. Identify evidence requirements by section:
   - Problem statement: Tier 2-3 (case studies, blogs, benchmarks)
   - Solution approach: Tier 1-2 (academic, documentation, tutorials)
   - Proof points: Tier 1-3 (benchmarks, case studies, GitHub repos)
   - Call-to-action: Tier 2-3 (kit docs, tutorials, testimonials)

2. Gather sources across Tier categories:
   - **Tier 1**: Academic papers, official documentation, published benchmarks
   - **Tier 2**: Practitioner blogs, case studies, interviews, technical writing
   - **Tier 3**: GitHub repos, public data, community discussions, live examples

3. For each source, document:
   - URL & title
   - Type (Tier 1/2/3)
   - 1-2 sentence summary
   - Key claims it supports
   - Relevance score (high/medium/low)
   - Date accessed (to detect stale sources)

4. Organize evidence into research document:
   - **Section 1: Problem** → Sources A, B, C with quotes
   - **Section 2: Solution** → Sources D, E, F with context
   - **Section 3: Proof** → Sources G, H, I with data/metrics
   - (etc. per outline)

5. Validation checkpoint:
   - ✓ Every major claim has ≥2 evidence sources
   - ✓ Balanced Tier distribution (not all Tier 3)
   - ✓ All links verified (no 404s)
   - ✓ Sources current (not >12 months old for trending topics)

**Tools**: Browser bookmarks, ChatGPT/Claude for research summarization, GitHub search

**Output**: Research document with 15-20 organized sources, 1-2 sentence summary per source

---

#### Stage 3: Detailed Outline & AI Draft Generation (2.5 hours)

**Activity**: Create detailed outline (3-4 levels) and generate AI-assisted first draft

**Process**:

1. Expand skeleton outline to 3-4 level hierarchy:
   - **H1**: Title (single, keyword-rich)
   - **H2**: Major sections (3-7 per post, ~250-400 words each)
   - **H3**: Subsections (as needed for depth, ~100-200 words each)
   - **H4**: Talking points or callouts (within H3s)

2. For each section, document:
   - **Key message**: 1-2 sentence summary of section purpose
   - **Talking points**: 3-5 bullet points of key concepts
   - **Evidence callouts**: Which sources support this section?
   - **Examples/code**: Pseudocode or code samples (if technical)
   - **Word count target**: Distribute 1,500-2,500 total across sections

3. Example detailed outline (for practitioner post):

```
H1: Building Production-Ready AI Agents: A Founder's Guide

H2: Introduction: Why Agents Matter for Startups
  - Key message: Agents reduce time-to-value from 6mo to 6 weeks
  - Talking points: [automation, reliability, cost reduction]
  - Evidence: [Case study A, Benchmark B, Testimonial C]
  - Word target: 150-200 words

H2: Understanding Agent Architecture
  H3: Core Components
    - Key message: Constitution → Spec → Plan → Tasks (4-layer stack)
    - Evidence: [Kit docs D, Diagram E, Example F]
    - Word target: 200-250 words
  H3: Reliability Patterns
    - Key message: Fault tolerance and retry logic
    - Evidence: [GitHub repo G, Pattern H]
    - Word target: 150-200 words

H2: Case Study: Agentii's $100M AI System
  - Key message: How to scale agents in production
  - Evidence: [Interview I, Metrics J, Architecture K]
  - Word target: 300-400 words

H2: Getting Started: Your First Agent
  - Key message: Step-by-step implementation guide
  - Evidence: [Tutorial L, Code example M, Kit docs N]
  - Word target: 250-350 words

H2: Common Pitfalls & Solutions
  - Key message: Learn from mistakes others made
  - Evidence: [Case study O, Lessons P]
  - Word target: 200-250 words

H2: Key Takeaways
  - Format: 3-5 extractable bullet points
  - Word target: 100-150 words

H2: What's Next?
  - CTA: Link to kit repository, tutorial, or community
  - Word target: 50-100 words
```

4. Generate AI draft using Claude Code with:
   - Evidence-aware prompting: "Here are sources for each section..."
   - Outline adherence: "Follow this exact section structure..."
   - Tone specification: "Practitioner-friendly, conversational, not academic..."
   - Word count targets: "Each section should be ~250 words..."
   - Evidence integration: "Cite sources with [bracketed references]..."

5. Validation checkpoint:
   - ✓ Draft follows outline structure (all H2s covered)
   - ✓ No major sections skipped
   - ✓ Evidence cited with source references
   - ✓ Practitioner tone maintained throughout
   - ✓ Word count within target (1,500-2,500 total)
   - ✓ Transitions smooth between sections

**Tools**: Claude Code, Notion/Google Docs for outlining, evidence document from S2

**Output**: 60-70% complete first draft (1,500-2,000 words), evidence-integrated, ready for revision

---

#### Stage 4: Revision, Fact-Check & Polish (1.5 hours)

**Activity**: Ensure accuracy, readability, clarity, and brand voice

**Process**:

1. **Fact-Check Pass** (30 min, done in parallel with SME review):
   - Compare every factual claim against source material
   - Flag unsupported claims: "This claim needs Tier 1-2 source"
   - Verify benchmarks/metrics are current
   - Check kit versions/API correctness with SME
   - Remove speculation, replace with evidence-based statements

2. **Readability Pass** (30 min):
   - Run readability analysis: Target Flesch-Kincaid grade 10-13
   - Flag passages above grade 14 (too complex)
   - Break long sentences (>20 words) into shorter ones
   - Replace jargon with explanations: "Agents (autonomous programs that...)"
   - Check paragraph length: Max 3-4 sentences per paragraph

3. **Brand Voice Pass** (30 min):
   - Ensure tone matches practitioner blog standard: conversational, actionable, not corporate
   - Check for consistent POV (first person "we", avoid "one should")
   - Verify CTA is clear and actionable (not wishy-washy)
   - Validate Key Takeaways are truly extractable bullets
   - Confirm problem-first framing (problem in opening 2 paragraphs)

4. **Example edits**:
   - Before: "The architecture encapsulates modularized components with layered abstraction patterns."
   - After: "Our agent system has 4 layers: Constitution (rules), Spec (goals), Plan (steps), Tasks (work)."

5. **Validation checkpoint**:
   - ✓ Flesch-Kincaid grade 10-13
   - ✓ All claims verified with sources
   - ✓ Tone matches blog standard
   - ✓ Key Takeaways are 3-5 bullets, extractable
   - ✓ Problem statement in first 2 paragraphs
   - ✓ CTA is clear ("Star the kit" / "Try tutorial" / "Join community")

**Tools**: Readability checker (Hemingway Editor, Grammarly), SME review (async parallel)

**Output**: Polished draft with revision notes, ready for formatting

---

#### Stage 5: Formatting for Nextra & SEO Optimization (1.0 hour)

**Activity**: Convert to Nextra-compatible Markdown, add metadata, optimize for SEO

**Process**:

1. **Markdown Formatting** (20 min):
   - Add proper header hierarchy: H1 (title only) → H2 (sections) → H3 (subsections)
   - Format code blocks with language tags: ` ```python ... ``` `
   - Add callout boxes for Key Takeaways: `> **Key Takeaway**: ...`
   - Format lists (bullets/numbers) consistently
   - Add emphasis (bold/italics) for key terms
   - Create table if needed for comparisons/data

2. **Nextra Frontmatter** (15 min):
   - Generate from template:

```yaml
---
title: "Building Production-Ready AI Agents: A Founder's Guide"
description: "Learn how to architect AI agents that work reliably in production. This guide covers founding principles, case studies, and step-by-step implementation patterns."
date: "2025-12-07"
author: "Your Name"
tags:
  - ai-agents
  - technical
  - tutorial
  - founders
draft: false
featured: false
cover: /images/blog/ai-agents-guide/hero-image.jpg
cover_alt: "AI Agent Architecture Diagram"
category: "technical"
keywords:
  - AI agents
  - agent architecture
  - production AI
  - founder's guide
  - agentic systems
updated_at: "2025-12-07"
canonical: null
---
```

3. **SEO Metadata Optimization** (15 min):
   - **Title** (60 chars max, include keyword): "Building Production-Ready AI Agents: A Founder's Guide"
   - **Description** (150-160 chars, include keyword + value): "Learn how to architect reliable AI agents. This guide covers architecture, case studies, and step-by-step implementation patterns."
   - **Keywords** (max 10, 1-2 per section): ai-agents, agent-architecture, production-ai, founders, reliability, patterns
   - **URL Slug** (from title): `/blog/posts/building-production-ready-ai-agents-founders-guide/`

4. **Internal Linking** (10 min):
   - Identify 3-5 related posts from existing blog (same tags or category)
   - Add natural links in body: "[See our tutorial on Agent Patterns](/blog/posts/agent-patterns-guide/)"
   - Add "Related Posts" section at bottom with linked titles

5. **External Linking** (5 min):
   - Link to evidence sources: "[Agentic Search Architecture](https://github.com/...)"
   - Link to kit repositories: "[Claude Code Kit](https://github.com/...)"
   - Link to official docs: "[Next.js Docs](https://nextjs.org/docs/)"

6. **Media Organization** (10 min):
   - Create subdirectory: `/public/images/blog/ai-agents-guide/`
   - Place hero image: `/public/images/blog/ai-agents-guide/hero-image.jpg`
   - Place any supporting images: diagram.png, screenshot-01.jpg, etc.
   - Update references in markdown: `![Alt text](/images/blog/ai-agents-guide/diagram.png)`

7. **Validation checkpoint**:
   - ✓ Title 60 chars, includes keyword
   - ✓ Description 150-160 chars
   - ✓ H1→H2→H3 hierarchy correct (no skipped levels)
   - ✓ 3-5 internal links added
   - ✓ 5+ external links to sources
   - ✓ Media subdirectory created with all images
   - ✓ Frontmatter valid YAML, all required fields present
   - ✓ Slug format: lowercase alphanumeric-hyphens

**Tools**: Markdown editor (VS Code), YAML validator, Nextra schema checker

**Output**: Nextra-ready `.md` file with frontmatter, Markdown formatting, metadata, media directory

---

#### Stage 6: Publishing & Distribution (1.0 hour)

**Activity**: Deploy to Nextra, distribute on social channels, set up analytics

**Process**:

1. **Pre-Publish Checklist** (10 min):
   - ✓ Frontmatter valid (no YAML errors)
   - ✓ All images referenced in media directory
   - ✓ No broken links (internal or external)
   - ✓ SEO metadata complete (title, description, keywords)
   - ✓ Draft field is false (to publish)
   - ✓ Date is today or past (not future)

2. **GitHub Commit & Deploy** (5 min):
   - File location: `/content/blog/YYYY-MM-DD-slug-title.md`
   - Media location: `/public/images/blog/slug/...`
   - Create Git branch: `blog/post-slug`
   - Commit: `feat: add blog post - "[Title](slug)"`
   - Push to GitHub → Vercel auto-deploys (~2-3 min build)
   - Verify live: `https://agentii-kit.dev/blog/posts/slug/`

3. **Social Distribution** (30 min):
   - **Day 0 (Morning)**: Author posts Twitter thread (5-8 tweets):
     - Tweet 1: Hook + problem statement (most engaging)
     - Tweets 2-4: Key insights from post (3-5 bullets each)
     - Tweet 5-7: Evidence/case study highlights
     - Tweet 8: CTA ("Read full post → link", "Star kit → link")
     - Pin thread to profile

   - **Day 0 (Afternoon)**: Share on LinkedIn (copy → connect-style post)
     - Format: 1-2 paragraph summary, 3 key insights
     - Tag relevant people (kit creators, community members)
     - CTA: "Read the full technical deep dive"

   - **Day 1**: Cross-post to Dev.to (with canonical tag):
     - Copy post to Dev.to
     - Add canonical tag: `<link rel="canonical" href="https://agentii-kit.dev/blog/posts/slug/">`
     - Add note: "Also published on our blog: [link]"

   - **Day 1**: Submit to Hacker News (if technical content):
     - Title format: "[Tutorial] Building AI Agents in Production"
     - Goes to HN Front Page → 50+ points → 200+ organic visitors possible
     - Engage in comments (author participation important)

   - **Day 1**: Share on Indie Hackers:
     - Link post + 2-3 paragraph summary
     - Engage with community feedback

4. **Newsletter Inclusion** (10 min):
   - Add to weekly digest (if using Substack/ConvertKit)
   - Format: Title, cover image, 1-2 sentence summary, "Read more →" link
   - Include 2-3 other recent posts for variety
   - Send: End of week (Friday)

5. **Analytics Setup** (5 min):
   - Add to analytics dashboard (Plausible, GA4)
   - UTM parameters for social links: `?utm_source=twitter&utm_medium=social&utm_campaign=post-slug`
   - Set up goal tracking: Page views, time-on-page, scroll depth
   - Create custom dashboard: Traffic, engagement, conversions

6. **Validation checkpoint**:
   - ✓ Post live on Nextra (verify URL working)
   - ✓ Twitter thread posted + pinned
   - ✓ LinkedIn post shared
   - ✓ Dev.to cross-post with canonical tag
   - ✓ HN/IH submitted (if applicable)
   - ✓ Newsletter included
   - ✓ Analytics tracking active
   - ✓ UTM parameters in social links

**Tools**: GitHub CLI, TweetDeck, Buffer, Dev.to, Plausible Analytics

**Output**: Published, distributed, tracked blog post with social amplification

---

### Parallel: SME Technical Review (0.5 hours, async)

**Timing**: Happens in parallel with Stage 4 (Revision) — SME reviews draft while writer polishes

**Process**:

1. **Validation Gates**:
   - ✓ Kit functionality claims accurate (kit versions, API correctness)
   - ✓ Code examples work in clean environment
   - ✓ Screenshots match current kit UI
   - ✓ Benchmarks/metrics properly cited
   - ✓ No unverified claims about kit features

2. **Review Output**:
   - Approve: "Technically accurate, ready to publish"
   - Request changes: "Line 3: API changed in v2, update example"
   - Block: "This benchmark is outdated, use current data"

3. **Turnaround**: <4 hours (async review during Stage 4)

**Owner**: SME (person other than writer — per "No Self-Validation" principle)

---

### Quality Gates: 4-Pass Editorial Checklist

**BEFORE publishing, post MUST pass all 4 gates:**

#### Pass 1: Structural Edit

- [ ] Outline matches title's promise (title says "Guide to X", post delivers guide)
- [ ] Information in logical order (problem → solution → evidence → CTA)
- [ ] Each section supports main thesis
- [ ] No filler or off-topic content
- [ ] Flow between sections smooth (transitions present)

#### Pass 2: Clarity Edit

- [ ] Each concept explained before use (don't assume knowledge)
- [ ] Would non-expert follow? (avoid jargon or explain when used)
- [ ] Jargon level consistent (not switching between technical and beginner)
- [ ] Sentences clear and concise (max 20 words per sentence)
- [ ] Paragraphs short (3-4 sentences max)

#### Pass 3: Technical Accuracy

- [ ] All code examples tested in clean environment (not theoretical)
- [ ] Benchmarks current and properly cited with date
- [ ] Kit functionality matches current version
- [ ] No unverified claims about features/performance
- [ ] SME validation from person other than author

#### Pass 4: SEO & AI Optimization

- [ ] H1 → H2 → H3 hierarchy (no skipped levels)
- [ ] Target keyword in first 100 words
- [ ] 3-5 internal links to related posts
- [ ] 5+ external links to evidence sources
- [ ] JSON-LD Article schema present (auto-generated in Nextra)
- [ ] Meta description 150-160 chars
- [ ] FAQ section (for posts 1,500+ words)
- [ ] Key Takeaways extractable bullets (for AI summarization)

---

### Role Assignments & Time Allocation

| Role | Time/Post | Responsibility | Posts Supported |
|------|-----------|-----------------|-----------------|
| **Writer** | 5-6 hours | S1-S3, S4 (draft+polish), S5 | 3-4 posts/month |
| **SME** | 0.5-1 hour | Technical validation (S4 parallel) | 3-4 reviews/month |
| **Editor** | 2-3 hours | S4 (copyedit), S5 (formatting), S6 (publish) | 3-4 edits/month |
| **Marketing** | 1-2 hours | S6 social distribution, newsletter, community engagement | 3-4 promotions/month |

**Total FTE**: 1.5 FTE (0.5 writer + 0.25 SME + 0.5 editor + 0.25 marketing)

**Capacity Check**:
- 3 posts/month requires ~4.5 hours writer time → 0.5 FTE ✓
- 3 posts/month requires ~1.5 hours SME time → 0.25 FTE ✓
- 3 posts/month requires ~6 hours editor time → 0.5 FTE (includes copyedit + formatting + publish)
- 3 posts/month requires ~3-4 hours marketing → 0.25 FTE
- **Total**: 1.5 FTE available = sufficient ✓

---

## 4. Technical Stack Rationale

### CMS/Framework: Next.js 14 + MDX

**Choice**: Next.js 14 (App Router) + Nextra 4.6 + MDX 3.0

**Rationale**:
- ✓ Markdown-native (edit in GitHub, version controlled)
- ✓ Code examples with React components (interactive tutorials)
- ✓ Fast builds (<30s incremental)
- ✓ Excellent SEO out-of-the-box (semantic HTML, structured data)
- ✓ Founder-friendly (GitHub-native workflow, no admin panel needed)
- ✓ Already implemented in agentii-kit repo (no setup needed)

**Cost**: Free (open source)

---

### Hosting: Vercel

**Choice**: Vercel (free tier)

**Rationale**:
- ✓ Auto-deploy on GitHub push (0 friction)
- ✓ Edge caching for fast global performance
- ✓ Built-in analytics (pageviews, geography, referrers)
- ✓ Instant preview environments for PR review
- ✓ Zero configuration needed
- ✓ Scales automatically (no manual intervention)

**Cost**: Free tier sufficient for 3-4 posts/month (under 100K monthly pageviews)

---

### Analytics: Plausible Analytics

**Choice**: Plausible (privacy-first alternative to Google Analytics)

**Rationale**:
- ✓ Privacy-compliant (no cookie consent needed)
- ✓ Simple dashboard (easy to understand)
- ✓ Event tracking (newsletter signups, kit forks)
- ✓ Goal tracking (article completion, CTA clicks)
- ✓ Integration with Vercel Analytics API
- ✓ Founder-friendly pricing ($29/month)

**Alternative**: Google Analytics 4 (free but more complex)

**Metrics Tracked**:
- Pageviews, unique visitors, bounce rate
- Time on page, scroll depth
- Traffic sources (organic, social, referral)
- Goal completions (newsletter signup, GitHub fork)
- Geographic distribution

---

### Newsletter: Substack

**Choice**: Substack (built for independent writers/founders)

**Rationale**:
- ✓ Free tier (covers initial audience)
- ✓ Built-in discoverability (Substack recommendations)
- ✓ Creator-first mindset (audience owns relationship)
- ✓ Integration via RSS feed or manual curation
- ✓ Community expectations for technical content

**Alternative**: ConvertKit (more features, $25/month)

**Newsletter Strategy**:
- **Frequency**: Weekly digest (Fridays)
- **Content**: 3-5 recent blog posts + 1-2 external links
- **Signup CTA**: Bottom of every blog post
- **Growth**: Target 5%+ signups from blog traffic

---

### SEO Tools: Google Search Console + Ahrefs (optional)

**Google Search Console** (free):
- Keyword rankings and impressions
- Click-through rates
- Search query analytics
- Mobile usability issues

**Ahrefs** (optional, $99/month if traffic justifies):
- Backlink analysis
- Content gap analysis
- Competitive benchmarking
- Long-tail keyword suggestions

**For MVP**: Google Search Console only (free, sufficient for <20K monthly visitors)

---

## 5. AI Discoverability & SEO Optimization Strategy

### AI-Native Content Requirements (for Claude, ChatGPT, Perplexity)

#### Header Hierarchy for LLM Parsing

**Standard**:
- **H1**: Title only (appears once per page)
- **H2**: Major sections (3-7 per post)
- **H3**: Subsections and detail
- No skipped levels (don't jump H2 → H4)

**Example** (from blog post):
```markdown
# Building Production-Ready AI Agents: A Founder's Guide  ← H1

## Introduction: Why Agents Matter  ← H2

## Understanding Agent Architecture  ← H2
### Core Components  ← H3
### Reliability Patterns  ← H3

## Case Study: Agentii's System  ← H2

## Getting Started  ← H2

## Key Takeaways  ← H2

## What's Next?  ← H2
```

#### Concept Definitions

**Rule**: Define key terms before first use; assume non-specialist knowledge

**Example - Before**:
> "The spec-driven approach leverages anthropic agents with recursive hierarchical planning."

**Example - After**:
> "The spec-driven approach uses AI agents (programs that make decisions autonomously) to break down work into small, executable tasks. This 'recursive' planning means agents create plans, execute them, and refine plans based on results."

#### Code Examples Best Practices

**Requirements**:
- Language tags: ` ```python ... ``` `, ` ```javascript ... ``` `
- Complete, runnable examples (not fragments)
- Context comments explaining what code does
- Link to full GitHub repo when applicable

**Example**:
````markdown
```python
# Create an agent that validates financial data
from agentii import Agent

agent = Agent(
    name="financial-validator",
    role="Verify accuracy of stock prices"
)

# Agent will use these tools
agent.add_tool("price_api", endpoint="https://...")
agent.add_tool("historical_data", endpoint="https://...")

# Execute the agent
result = agent.run(input="Validate AAPL price")
```

See full implementation: [GitHub Repo](https://github.com/...)
````

#### FAQ Section for Long Posts

**Rule**: For posts 1,500+ words, include FAQ (4-6 Q&A pairs) at end

**Purpose**:
- Helps AI systems summarize main questions
- Captures long-tail search queries
- Improves dwell time (readers re-engage for FAQs)

**Example**:
```markdown
## Frequently Asked Questions

**Q: How is agentic search different from RAG?**
A: RAG (Retrieval-Augmented Generation) retrieves documents once and answers based on retrieval. Agentic search iteratively refines queries and validates answers, achieving higher accuracy (99% vs. 30% in finance).

**Q: Can I use agents for non-technical tasks?**
A: Yes! Agents work for any task that can be broken into steps: marketing campaigns, legal review, hiring workflows, etc.

...
```

#### JSON-LD Article Schema

**Automatic in Nextra**, but verify presence in HTML head:

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Building Production-Ready AI Agents: A Founder's Guide",
  "author": {
    "@type": "Person",
    "name": "Author Name"
  },
  "datePublished": "2025-12-07",
  "dateModified": "2025-12-07",
  "image": "/images/blog/post-slug/hero.jpg"
}
```

---

### SEO Implementation Checklist (40 Items)

#### Keyword & Content (10 items)

- [ ] Target keyword identified (< 5,000 monthly search volume)
- [ ] Search intent validated (informational/transactional/navigational)
- [ ] Keyword in H1 title (natural placement)
- [ ] Keyword in first 100 words of body
- [ ] Keyword in 1-2 H2 headings (natural placement)
- [ ] Keyword in URL slug (hyphenated, lowercase)
- [ ] Long-tail variations in H3s and body text
- [ ] Content length meets requirement (practitioner: 1,200-1,800 words)
- [ ] Problem-first framing (problem in opening 2 paragraphs)
- [ ] Key Takeaways section (3-5 extractable bullets)

#### Metadata & Schema (10 items)

- [ ] Meta title ≤60 chars, includes keyword + brand
- [ ] Meta description 150-160 chars, includes keyword + value + CTA
- [ ] Open Graph tags: og:title, og:description, og:image, og:url, og:type
- [ ] Twitter Card tags: twitter:card, twitter:title, twitter:description, twitter:image
- [ ] Canonical URL set (self-referencing or original if syndicated)
- [ ] JSON-LD Article schema: headline, author, datePublished, dateModified, image
- [ ] JSON-LD Author schema: name, url, jobTitle (if available)
- [ ] JSON-LD Organization schema: name, url, logo
- [ ] robots meta: index, follow
- [ ] Slug format: lowercase, alphanumeric-hyphens only

#### Structure & Linking (10 items)

- [ ] H1 → H2 → H3 hierarchy (no skipped levels)
- [ ] 3-7 H2 sections per post
- [ ] Internal links to 3-5 related posts (topical cluster)
- [ ] Internal links to hub/pillar post (if applicable)
- [ ] External links to 2-3 authoritative sources
- [ ] Anchor text descriptive (not "click here")
- [ ] Breadcrumb navigation present
- [ ] Table of Contents for posts 2,000+ words
- [ ] FAQ section for posts 1,500+ words
- [ ] Related posts widget at bottom

#### Technical & Performance (10 items)

- [ ] Page load <2 seconds (Core Web Vitals passing)
- [ ] Mobile responsive (works on mobile)
- [ ] Images optimized (AVIF/WebP, <100KB per image)
- [ ] No broken links (internal or external)
- [ ] No redirect chains (direct to final URL)
- [ ] HTTPS enabled (secure protocol)
- [ ] Sitemap updated (post included in /sitemap.xml)
- [ ] RSS feed includes new post (for newsletter integration)
- [ ] Structured data valid (JSON-LD validates)
- [ ] No JavaScript errors in console

---

## 6. Directory & File Structure

### Blog Content Organization

**Location**: `/content/blog/`

**Structure**:
```
content/blog/
├── 2025-12-07-building-production-ready-ai-agents.md    ← Individual post
├── 2025-12-14-agent-prompt-engineering-patterns.md
├── 2025-12-21-case-study-agentii-financial-ai.md
├── _meta.json                                            ← Navigation config
└── tags/                                                 ← (auto-generated)
    ├── ai-agents/
    ├── technical/
    └── tutorial/
```

**Naming Convention**: `YYYY-MM-DD-slug-title.md`
- Date: Publication date (ISO 8601: YYYY-MM-DD)
- Slug: lowercase, alphanumeric-hyphens (auto-generated from filename)
- Title: Descriptive, human-readable (in filename, helps with understanding)

**Example Post File**:
```
/content/blog/2025-12-07-building-production-ready-ai-agents.md

Content:
---
title: "Building Production-Ready AI Agents: A Founder's Guide"
description: "..."
date: "2025-12-07"
author: "Author Name"
tags: [...]
cover: /images/blog/ai-agents-guide/hero.jpg
---

# Building Production-Ready AI Agents: A Founder's Guide

## Introduction
...
```

---

### Media Organization (Images, Diagrams)

**Location**: `/public/images/blog/`

**Structure** (per-post subdirectories):
```
public/images/blog/
├── hero_background.jpg                                   ← Shared assets
├── ai-agents-guide/                                      ← Per-post directory
│   ├── hero.jpg                  (hero image, 1200x630)
│   ├── architecture-diagram.png  (H2 section)
│   ├── code-example-01.jpg       (code example screenshot)
│   ├── screenshot-01.jpg         (UI screenshot)
│   └── testimonial-graphic.jpg   (social proof graphic)
├── agent-patterns-guide/
│   ├── hero.jpg
│   ├── pattern-diagram-01.png
│   └── comparison-table.jpg
└── ...
```

**Naming Convention**:
- Hero image: `hero.jpg` (1200×630px, for social/SEO)
- Diagrams: `[section]-diagram.png` (semantic naming)
- Screenshots: `screenshot-[order].jpg` (sequential)
- Graphics: `[type]-graphic.jpg` (social, testimonial, comparison)

**Image Specs**:
- **Format**: JPG (photos), PNG (diagrams/charts), SVG (icons)
- **Size**: Optimize for web (<100KB per image)
  - Hero: 1200×630 (@2x: 600×315)
  - Diagram: 800×600 or wider for landscape
  - Screenshot: Crop to 900×600
- **Compression**: Use TinyPNG or ImageOptim

**Markdown References**:
```markdown
![AI Agent Architecture](/images/blog/ai-agents-guide/architecture-diagram.png)

or with alt text:

![Agent architecture showing 4 layers: Constitution, Spec, Plan, Tasks](/images/blog/ai-agents-guide/architecture-diagram.png)
```

---

### Blog Configuration Files

**Navigation & Metadata**:

**File**: `/content/blog/_meta.json`
```json
{
  "index": "Blog",
  "tags": "Tags",
  "archive": "Archive"
}
```

**Tags Pages** (auto-generated by blog loader):
- `/blog/tags/[tag-name]/` → All posts with that tag
- Example: `/blog/tags/ai-agents/` → All posts tagged "ai-agents"

---

## 7. Content Publication Workflow (Git-Based)

### Step-by-Step Publishing Process

#### 1. Create Feature Branch

```bash
git checkout -b blog/post-slug
git pull origin main
```

#### 2. Create Post Files

```bash
# Create post markdown
touch content/blog/2025-12-07-building-production-ready-ai-agents.md

# Create media directory
mkdir -p public/images/blog/ai-agents-guide/

# Add images
cp hero.jpg public/images/blog/ai-agents-guide/
cp diagram.png public/images/blog/ai-agents-guide/
```

#### 3. Edit & Commit

```bash
# Edit post in VS Code
code content/blog/2025-12-07-building-production-ready-ai-agents.md

# Stage changes
git add content/blog/ public/images/blog/

# Commit with semantic message
git commit -m "feat: add blog post - building production-ready AI agents

- Practitioner tutorial post, 1,800 words
- Covers agent architecture, case study, getting started
- 5+ evidence sources, internal linking to agent patterns guide
- Hero image: 1200x630px optimized"
```

#### 4. Create Pull Request

```bash
git push origin blog/post-slug

# Create PR on GitHub with checklist:
```

**PR Template**:
```markdown
## Blog Post: Building Production-Ready AI Agents

**Author**: [Your Name]
**Publication Date**: 2025-12-07
**Target Keyword**: "AI agents" (2.1K monthly volume)
**Est. Reading Time**: 12 minutes

### Pre-Publication Checklist

- [ ] Frontmatter valid (no YAML errors)
- [ ] All images present in media directory
- [ ] No broken links (internal or external)
- [ ] SEO metadata complete (title, description, keywords)
- [ ] Internal links (3-5) to related posts added
- [ ] External links (5+) to evidence sources
- [ ] Draft field is `false` (to publish)
- [ ] Date is today or past (not future)
- [ ] Readability grade 10-13 (Hemingway Editor)
- [ ] SME technical validation passed
- [ ] 4-pass editorial gate passed:
  - [ ] Structural edit
  - [ ] Clarity edit
  - [ ] Technical accuracy
  - [ ] SEO & AI optimization

### Social Distribution Plan

- [ ] Twitter thread drafted (5-8 tweets)
- [ ] LinkedIn post drafted
- [ ] Dev.to cross-post planned
- [ ] HN/IH submission planned
- [ ] Newsletter inclusion confirmed

**Ready to merge and publish**
```

#### 5. Merge & Deploy

```bash
# After PR approval:
git checkout main
git pull origin main
git merge --squash blog/post-slug
git push origin main

# Vercel auto-deploys (~2-3 min)
# Verify live: https://agentii-kit.dev/blog/posts/slug/
```

---

## 8. Success Criteria Implementation & Tracking

### Mapping Spec Success Metrics to Tracking

| Spec SC | Metric | Tool | Tracking | Review Cadence |
|---------|--------|------|----------|----------------|
| **SC-001** | <8 hrs end-to-end | Time tracking | Toggl or manual log | Per post |
| **SC-002** | 80%+ idea acceptance | Notion/spreadsheet | Ideas generated vs. pursued | Monthly |
| **SC-003** | 90%+ claims with evidence | SME checklist | Evidence sources per post | Per post |
| **SC-004** | 100% FK grade 10-13 | Hemingway Editor | Readability score | Per post |
| **SC-005** | 100% Nextra compatible | QA check | Build success rate | Per post |
| **SC-006** | 500+ visitors/month | Plausible | Pageviews per post | Monthly |
| **SC-007** | 3+ min time-on-page | Plausible | Avg. session duration | Monthly |
| **SC-008** | 5% conversion rate | Plausible + links | UTM tracking, goal events | Monthly |
| **SC-009** | 40% page 1 in 3mo | Google Search Console | Keyword ranking #1-10 | Quarterly |
| **SC-010** | NPS ≥50 (95%+ satisfied) | Post-publish survey | Net Promoter Score | Per post |
| **SC-011** | 100% fact-check pass | SME review | Unsupported claims flagged | Per post |
| **SC-012** | 100% format automated | QA check | Manual fixes needed | Per post |

### Measurement Dashboard

**Tool**: Plausible Analytics (primary), Google Search Console (secondary), Notion (tracking log)

**Dashboard Layout**:

```
BLOG PERFORMANCE OVERVIEW

Overall Metrics (past 30 days):
  - Pageviews: [target 1.5K for 3 posts]
  - Unique Visitors: [target 1.2K]
  - Avg. Time on Page: [target 3+ min]
  - Bounce Rate: [target <50%]
  - Conversion Rate: [target 5%+]

Traffic Sources:
  - Organic Search: [target 70%+]
  - Social (Twitter/LinkedIn): [target 15-20%]
  - Referral (Dev.to, HN): [target 5-10%]
  - Direct: [target <5%]

Recent Posts Performance:
  - Post A: 420 views, 4:12 avg time, 7% conversion
  - Post B: 380 views, 3:45 avg time, 6% conversion
  - Post C: 290 views, 2:30 avg time, 3% conversion

SEO Rankings (Google Search Console):
  - "AI agents": #8 (target #3 in 3mo)
  - "agent architecture": #15 (target #10)
  - "production AI systems": #12 (target #5)

Keyword Gaps (next posts to write):
  - "agent testing patterns" (340/mo, competitor has #2)
  - "multi-agent orchestration" (520/mo, no strong competitor)
```

**Review Cadence**:
- **Weekly**: Traffic dashboard (top-level numbers)
- **Monthly**: Full analytics review (sources, conversions, search rankings)
- **Quarterly**: Content performance analysis (which posts perform best, why?)

---

## 9. Constitution Check: Blog Principles Validation

### 8 Core Blog Principles (agentii-kit constitution)

#### 1. Content-First ✅

**Principle**: Technology choices SERVE content strategy, not vice versa

**Validation**:
- ✅ Spec.md written first (zero tech mentions)
- ✅ Plan.md now adds tech choices to support spec
- ✅ Content calendar drives post frequency (3/month), not platform capacity
- ✅ Nextra chosen because it supports Markdown + code examples (content needs)

---

#### 2. No Self-Validation ✅

**Principle**: SME technical review by person OTHER than author

**Validation**:
- ✅ Workflow shows SME review (S4, parallel with revision)
- ✅ "Mandatory: Technical validation MUST be done by someone other than author"
- ✅ Quality gates include "SME who didn't write the post validate claims"
- ✅ Capacity plan allocates 0.25 FTE SME (dedicated reviewer)

---

#### 3. Simplicity & Focus ✅

**Principle**: No custom CMS before 10 published posts; use battle-tested platforms

**Validation**:
- ✅ Chosen Next.js + Nextra (battle-tested, not custom)
- ✅ Hosting: Vercel free tier (proven, no custom infrastructure)
- ✅ Analytics: Plausible (simple, not custom dashboard)
- ✅ Newsletter: Substack (existing platform, not custom email)
- ✅ No overengineering detected

---

#### 4. AI-Native Distribution ✅

**Principle**: Content optimized for AI agent discovery (JSON-LD, H2/H3, FAQ)

**Validation**:
- ✅ SEO checklist includes JSON-LD implementation
- ✅ Header hierarchy requirements documented (H1 → H2 → H3)
- ✅ FAQ section requirement for posts 1,500+ words
- ✅ Code example best practices documented (language tags, context)
- ✅ Concept definitions before first use (for LLM parsing)

---

#### 5. Community Over Broadcast ✅

**Principle**: Blog amplifies community, not just announces products

**Validation**:
- ✅ Distribution includes community channels (HN, Indie Hackers, GitHub, Slack)
- ✅ Content designed for engagement (ask for feedback, iterate)
- ✅ SME validation = community feedback incorporated
- ✅ Analytics track community engagement (comments, discussions, shares)

---

#### 6. Transparency Over Perfection ✅

**Principle**: Document limitations, edge cases, failure modes

**Validation**:
- ✅ Spec.md includes 8 edge cases with mitigations
- ✅ Blog posts include "Limitations" or "When NOT to use" sections
- ✅ Content Requirements include "Honest limitations in case studies"
- ✅ Risk mitigation plan documented in plan (competitor content, writer capacity, etc.)

---

#### 7. Long-term Over Quick Wins ✅

**Principle**: 2-3 year strategy, not viral chasing

**Validation**:
- ✅ 002-spec-kits-blogs defines 12-month+ content calendar
- ✅ Publishing cadence 2-4 posts/month (sustainable, not sporadic)
- ✅ Success metrics include quarter/year milestones, not just Month 1
- ✅ Team capacity = sustainable (1.5 FTE, not founder burnout)
- ✅ Editorial workflow = 2-week cycles, not "move fast and break things"

---

#### 8. Measurable Outcomes ✅

**Principle**: Every success criterion has tracking implementation

**Validation**:
- ✅ SC-001 to SC-012 each have tool + formula documented
- ✅ Dashboard defined (Plausible primary, GSC secondary)
- ✅ Review cadence specified (weekly, monthly, quarterly)
- ✅ Conversion tracking via UTM parameters documented
- ✅ Goal events configured in analytics

**Summary**: ✅ ALL 8 PRINCIPLES VALIDATED — Plan is constitution-compliant

---

## 10. Phases & Milestones

### Phase 0: Research & Clarification (IF NEEDED)

**Trigger**: If spec.md has [NEEDS CLARIFICATION] markers

**Status**: Spec.md has ZERO clarifications ✅ → Skip Phase 0

---

### Phase 1: Platform Setup & Editorial Foundation (1-2 weeks)

**Goal**: Repository ready for blog publication, editorial process defined, team trained

**Tasks**:

1. **Repository Setup**:
   - ✅ Nextra blog system live (already configured in agentii-kit)
   - ✅ `/content/blog/` directory ready for posts
   - ✅ `/public/images/blog/` directory structure created
   - ✅ `_meta.json` configured for navigation
   - Verify local build: `npm run dev` works on `/blog` route

2. **Editorial Process Documentation**:
   - ✅ This plan.md (editorial workflow, quality gates, roles)
   - Create blogkit.md template for creators (quick reference)
   - Create SEO checklist template (40-point gate, printable)
   - Create blog post template with frontmatter example

3. **Analytics & Tracking Setup**:
   - Set up Plausible account, add site ID to Next.js config
   - Create Google Search Console account, verify domain ownership
   - Set up conversion goals: newsletter signup, GitHub fork, social share
   - Create dashboards: traffic overview, goal events, keyword rankings

4. **Team Training**:
   - Editor: Nextra deployment, Git workflow, social distribution
   - Writer: Editorial process, SEO requirements, evidence gathering
   - SME: Technical validation checklist, code example testing
   - Marketing: Social channel strategy, newsletter curation

5. **Tools & Access**:
   - GitHub team access (write permissions to repo)
   - Plausible dashboard access (edit permissions)
   - Google Search Console access
   - Substack (newsletter platform) setup
   - Design assets: Hero image template (Figma), color palette, icon set

**Timeline**: 5-7 days

**Exit Criteria**:
- ✅ Blog build successful (`npm run build`)
- ✅ Local `/blog` route works, displays existing posts
- ✅ Analytics tracking verified (test event fires)
- ✅ Team trained on workflow (walkthrough meeting)
- ✅ First post schedule confirmed (Day 1 of Phase 2)

---

### Phase 2: Content Production (12-15 weeks for First 5 Posts)

**Goal**: Publish first 5 foundation posts, establish publishing rhythm, prove metrics

**Posts 1-5 Strategy** (from 002-spec-kits-blogs):

| # | Topic | Pillar | Type | Timeline |
|---|-------|--------|------|----------|
| 1 | Spec-Driven Development 101 | Fundamentals | Hub Post (2,500+ words) | Wks 1-3 |
| 2 | Getting Started with PMF-Kit | Tutorials | How-To (1,200-1,500 words) | Wks 4-5 |
| 3 | [Founder Story] Built MVP in 6 Weeks | Case Studies | Case Study (1,500-1,800 words) | Wks 6-7 |
| 4 | AI Agent Patterns for Startups | AI & Automation | Tutorial (1,200-1,500 words) | Wks 8-10 |
| 5 | Scaling Beyond the Starter Kit | Growth | Deep Dive (1,500-1,800 words) | Wks 11-15 |

**Publishing Cadence**:
- **Weeks 1-3**: Post 1 (hub post, longer)
- **Weeks 4-5**: Post 2 (tutorial)
- **Weeks 6-7**: Post 3 (case study)
- **Weeks 8-10**: Post 4 (tutorial)
- **Weeks 11-15**: Post 5 (deep dive)
- **After Week 15**: Transition to 3/month cadence (ongoing)

**Exit Criteria**:
- ✅ 5 published posts, live on blog
- ✅ Post 1 traffic: 400+ pageviews within 2 weeks
- ✅ Average bounce rate <60%
- ✅ Average time-on-page >2.5 minutes
- ✅ At least 1 post trending on HN/IH
- ✅ Newsletter subscriber count >100
- ✅ Team confident in workflow (predictable 2-week cycles)

**Success Metrics (Target)**:
- Combined 5-post traffic: 2K+ pageviews
- Social shares: 50+ per post average
- Keyword rankings: 2+ posts on page 2 (Google SERPs)
- GitHub forks: 5+ directly attributable to blog
- Newsletter conversion: 5%+ signup rate

---

### Phase 3: Measurement & Optimization (Ongoing, Quarterly Reviews)

**Goal**: Iterate on content based on data, optimize for traffic/engagement, scale to 3-4 posts/month

**Monthly Cadence**:

1. **Week 1**: Publish 1 new post (S1-S6 workflow)
2. **Week 2**: Publish 1 new post
3. **Week 3**: Publish 1 new post (optional 4th)
4. **Week 4**: Analytics review + content optimization

**Quarterly Review (Every 3 months)**:

**Metrics Analysis**:
- Which posts performed best? (traffic, engagement, conversions)
- Which keywords are ranking? (track progress toward 40%+ page 1)
- Which content types resonate? (tutorials vs. case studies vs. opinion)
- Which distribution channels work? (organic, social, community)

**Content Optimization**:
- Refresh underperforming posts (update examples, improve SEO)
- Double down on high-performing content (expand series, create variations)
- Identify keyword gaps (topics with search demand but no existing posts)
- Test new content formats (video summaries, interactive tools, etc.)

**Team Optimization**:
- Reduce cycle time toward <8 hours if not there
- Hire freelance writer if capacity maxed
- Delegate tasks (e.g., marketing takes over social distribution)
- Automate repetitive tasks (template generation, metadata creation)

**Growth Plan**:
- Month 1-3: Establish baseline (5 posts, ~2K pageviews)
- Month 4-6: Grow to 3/month cadence (9 posts, target 5K pageviews)
- Month 7-12: Maintain cadence, optimize for rankings (12+ posts, target 15K pageviews)
- Month 13+: Expand to 4/month if team capacity grows

---

## 11. Risk Mitigation Plan

| Risk | Probability | Impact | Mitigation | Owner |
|------|-------------|--------|-----------|-------|
| **Content doesn't rank (low traffic)** | Medium | High | Start with <1,500 search volume keywords; update thin content with new case studies; improve internal linking | Editor + SME |
| **Writer capacity exhausted** | Medium | High | Pre-write outlines during off-weeks; hire freelancer at $50-100/hour; batch content in Q1/Q4 | Founder |
| **SME unavailable for reviews** | Low | High | Cross-train team member; document checklist so anyone can validate basics | Founder |
| **Technical errors in posts** | Low | High | Mandatory code testing in clean environment; SME review gate; rollback procedure documented | SME |
| **Kit version breaks (outdated examples)** | Medium | Medium | Monthly audit of published posts; version examples (note kit version); rapid update SLA | SME |
| **Competitor publishes similar content** | High | Low | Differentiate via case studies, unique angle, better data; publish earlier or deeper | Writer |
| **Over-engineering tools/workflow** | Low | Medium | Stick to Phase 1 stack (Nextra, Vercel, Plausible); no custom CMS until >10K monthly traffic | Founder |
| **Algorithm change penalizes posts** | Low | Medium | Diversify distribution (social, newsletter, community); monitor GSC; analyze changes and adapt | Editor |
| **Newsletter fatigue (low engagement)** | Medium | Low | Keep frequency 1/week max; curate quality; test subject lines; monitor unsubscribe rate | Marketing |
| **Social platform changes (Twitter limits)** | Medium | Low | Diversify platforms (LinkedIn, Dev.to, Substack); build owned channel (email newsletter) | Marketing |

---

## 12. Tools & Dependencies

### Required Tools

| Tool | Purpose | Cost | Setup |
|------|---------|------|-------|
| **GitHub** | Version control, collaboration | Free | Already set up |
| **Next.js + Nextra** | Blog platform | Free | Already installed |
| **Vercel** | Hosting, deployment | Free tier OK | Already configured |
| **Google Search Console** | SEO analytics | Free | ~15 min setup |
| **Plausible Analytics** | Traffic analytics | $29/mo | ~30 min setup |
| **Substack** | Newsletter | Free tier OK | ~1 hour setup |
| **TweetDeck** | Social distribution | Free | ~10 min setup |
| **VS Code** | Markdown editing | Free | Already used |
| **Hemingway Editor** | Readability checking | Free web app | ~5 min per post |

### Optional Tools

| Tool | Purpose | Cost | When to Add |
|------|---------|------|------------|
| **Notion** | Content calendar | Free | When >3 posts/month |
| **Ahrefs** | Competitive analysis, backlinks | $99/mo | When traffic >20K/month |
| **Buffer** | Social scheduling | Free tier OK | When managing 5+ accounts |
| **Figma** | Design assets (images, graphics) | Free tier OK | For custom visuals |

---

## 13. Success Indicators Summary

### By Phase

**Phase 1 Completion**:
- ✅ Blog system live and tested
- ✅ Team trained
- ✅ Analytics tracking verified
- ✅ First post scheduled

**Phase 2 Completion** (5 posts published):
- ✅ 2K+ total pageviews across 5 posts
- ✅ >3 min avg time-on-page
- ✅ >100 newsletter subscribers
- ✅ 5%+ conversion rate (newsletter/social)
- ✅ At least 2 posts reaching page 2 (Google)

**Phase 3 Success** (Month 6):
- ✅ 5-8K monthly pageviews
- ✅ 3 posts/month published (sustainable cadence)
- ✅ 40%+ posts ranking page 1 (Google)
- ✅ 500+ newsletter subscribers
- ✅ 20+ GitHub forks attributed to blog
- ✅ NPS ≥50 (creator satisfaction)

---

## 14. Next Steps

### Immediate (This Week)

1. ✅ Review this plan.md
2. ✅ Approve tech stack choices (Next.js + Nextra, Vercel, Plausible)
3. ✅ Schedule Phase 1 kickoff (5-7 day window)
4. ✅ Assign team roles (Writer, SME, Editor, Marketing)

### Phase 1 (Next 1-2 Weeks)

1. Verify Nextra blog locally: `npm run dev` → `/blog` route
2. Set up Plausible account & link to site
3. Verify Google Search Console access
4. Create blog post template (Markdown + frontmatter example)
5. Team training on editorial workflow & QA gates

### Phase 2 (Weeks 3-17)

1. Execute first 5-post plan (see timeline above)
2. Weekly publishing (1 post/week, staggered)
3. Daily social distribution (Twitter, LinkedIn, Dev.to)
4. Weekly analytics monitoring

### Phase 3 (Ongoing)

1. Monthly reviews of performance
2. Quarterly optimization cycles
3. Gradual increase to 3-4 posts/month
4. Iterate based on data

---

## Conclusion

This plan operationalizes the blog creation pipeline (spec.md) using the existing Nextra platform. It balances automation (Claude Code + blogkit tools) with quality (SME review, 4-pass gates) to achieve the goal: **create high-quality, SEO-optimized blog posts in <8 hours**.

**Key Commitments**:
- ✅ Evidence-backed content (Tier 1-3 sources required)
- ✅ Creator-friendly workflow (semi-automated S1-S3)
- ✅ Quality assurance (4-pass gates, SME validation)
- ✅ Measurable outcomes (12 success criteria, analytics dashboard)
- ✅ Sustainable pace (1.5 FTE, 2-4 posts/month)
- ✅ Constitution-compliant (all 8 principles validated)

**Status**: Ready for Phase 1 execution → `/blogkit.tasks` to generate action items
