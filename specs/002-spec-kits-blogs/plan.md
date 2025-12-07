# Editorial & Technical Implementation Plan: Agentii-Kit Practitioner Blog

**Feature Branch**: `002-spec-kits-blogs`
**Created**: 2025-12-06
**Status**: Ready for Execution
**Specification**: [spec.md](./spec.md)

---

## Executive Summary

This plan operationalizes the agentii-kit practitioner blog strategy, bridging content objectives (spec.md) with technical execution. The blog targets founders, product managers, and engineers building with spec-driven development kits.

**Key Strategy**: Lean, growth-hacking approach using battle-tested platforms (GitHub + Next.js + Vercel) to minimize overhead while maximizing discoverability through community channels (Hacker News, GitHub, Twitter).

**Timeline**: Phase 1 (2 weeks) → Phase 2 (12-15 weeks) → Phase 3 (ongoing measurement)

---

## 1. Content-First Validation ✅

**Specification Review**: spec.md passes Content-First gate
- ✅ ZERO technology implementation details in spec.md
- ✅ Spec defines WHAT content and WHY (5 pillars, 16 success criteria)
- ✅ All keywords, audience, and metrics are content-focused
- ✅ Ready for technical planning (this document)

**Content Strategy Extracted**:
- **Blog Type**: Practitioner (tutorials, case studies, how-to guides)
- **Publishing Cadence**: 3 posts/month (2-4 posts/month range)
- **Team Capacity**: 1.25 FTE (0.5 writer + 0.25 SME + 0.25 editor + 0.25 marketing)
- **Success Metrics**: 16 criteria across Traffic, Engagement, Business Impact, Authority (see spec.md Success Criteria section)

---

## 2. Technical Context & Stack Rationale

### User Context Analysis

From your input, the agentii-kit blog serves:
- **Primary Users**: Geeks, makers, founders (comfortable with GitHub/open source)
- **Secondary Users**: Stock investors, venture capitalists (evaluating defensibility)
- **Distribution**: GitHub, Hacker News, Twitter, Indie Hackers (where target audience hangs out)
- **Credibility**: Real kits (pmf-kit, blog-tech-kit, twitter-init-kit) used in production

### Recommended Tech Stack

| Component | Choice | Rationale |
|-----------|--------|-----------|
| **CMS/Blog Framework** | Next.js 14 + MDX | Code examples, fast builds, deployment on Vercel, markdown versioning, GitHub-native workflow |
| **Hosting** | Vercel (free tier) | Auto-deploy on push, instant scaling, edge functions, analytics included, founder-friendly |
| **Analytics** | Plausible Analytics | Privacy-first (no cookie law issues), simple dashboard, affordable ($29/mo for traffic tracking) |
| **Newsletter** | Substack | Creator-focused, built-in discoverability, free tier works, native to founder/maker audience |
| **Content Storage** | GitHub Repository | Version control, community contributions, serves both code examples and docs, transparent |
| **SEO Tools** | Google Search Console (free) + SEMrush (optional) | GSC free for rankings, SEMrush for competitive analysis (optional upgrade) |
| **Social Distribution** | TweetDeck + Buffer | TweetDeck for real-time engagement, Buffer for scheduling (free tier) |

### Simplicity & Focus Gate ✅

**Status**: PASS
- No custom CMS (using Next.js + MDX, battle-tested)
- No over-engineered infrastructure (Vercel handles scaling)
- Lean tooling (focus on content, not tools)
- Growth-hacking mindset aligned with startup culture

---

## 3. Editorial Workflow

### Practitioner Blog Timeline (2-Week Sprint)

**Days 1-2: Research & Outline**
- Topic selection (aligned with content pillars, spec.md)
- Competitive analysis (3-5 existing posts on same topic)
- Outline + angle identification ("What makes ours unique?")
- Keyword validation (target < 5,000 monthly search volume)
- Internal Links planning (which other posts to link to)

**Days 3-4: Draft**
- Main content write (1,200-1,800 words per spec.md CR-006)
- Code examples development (tested in clean environment per CR-002)
- Case study interviews (if applicable, spec.md Pillar 3)
- Screenshot/diagram prep

**Days 5-6: Review (SME)**
- Kit functionality validation (CR-005: technical claims validated by SME)
- Accuracy check (kit versions, API correctness)
- Evidence verification (Tier 1-3 sources per spec.md)
- No Self-Validation: SME must be different person than author

**Days 7-8: Polish**
- Copyediting (grammar, clarity, Flesch-Kincaid grade 10-13 per CR-010)
- SEO optimization (meta description 150-160 chars, H1→H2→H3 hierarchy per CR-011)
- JSON-LD Article schema insertion (CR-014)
- Open Graph tags for social preview

**Days 9-10: Publish & Distribute**
- Deploy to Next.js blog (Vercel auto-publishes on GitHub merge)
- Submit to Google Search Console (manual sitemap ping if needed)
- Twitter/LinkedIn distribution (Day 0: author thread, Day 1: cross-post)
- Dev.to cross-post with canonical tag (CR-018)
- Hacker News / Indie Hackers submission (if applicable, CR-019)
- Newsletter inclusion (weekly digest, spec.md Pillar topics)

**Days 11-14: Measure & Iterate**
- Monitor organic traffic (Plausible dashboard)
- Track social engagement (shares, comments, bookmarks)
- Gather feedback (Twitter replies, GitHub issues)
- Iterate title/meta if rankings stall (Edge Case #1 mitigation)

### Roles & Responsibilities

| Role | Responsibilities | Time Allocation |
|------|-----------------|-----------------|
| **Writer** (0.5 FTE) | Research, draft, copyedit, publish workflow | 20 hrs/week → ~6 posts/week cycle → 3 posts/month output |
| **SME/Reviewer** (0.25 FTE) | Technical validation, kit accuracy, evidence check (Days 5-6) | 10 hrs/week across 3 posts |
| **Editor** (0.25 FTE) | Final copyedit, SEO polish, publication checklist (Days 7-8) | 10 hrs/week |
| **Marketing** (0.25 FTE) | Social distribution, newsletter curation, community engagement (Days 9-14) | 10 hrs/week across Twitter, Dev.to, HN, Indie Hackers |
| **Founder** (flex) | Oversight, kit updates, strategic direction, investor relations | As needed |

### Quality Gates (Mandatory)

Before publication, every post MUST pass:
1. **Content Requirements** (20 items from spec.md)
   - Problem statement clear ✓
   - 1,200-1,800 words ✓
   - 2-3 internal links ✓
   - Key Takeaways section ✓
   - Clear CTA ✓

2. **SEO Requirements** (15 items)
   - H1 → H2 → H3 hierarchy ✓
   - Meta description 150-160 chars ✓
   - JSON-LD Article schema ✓
   - Keyword density 1-2% ✓
   - Internal links to cluster ✓

3. **AI Discoverability** (5 items)
   - Key concepts defined in first mention ✓
   - Code examples with language tags ✓
   - 1-2 sentence summary at top ✓
   - Structured data present ✓
   - Heading hierarchy scannable ✓

4. **SME Technical Validation**
   - Kit functionality accurate ✓
   - API versions current ✓
   - Code examples tested ✓
   - Screenshots match current UI ✓

---

## 4. Technical Stack Implementation

### Repository Structure (GitHub)

```
agentii-kit-blog/  (public GitHub repo)
├── content/
│   ├── posts/
│   │   ├── 001-spec-driven-fundamentals.mdx
│   │   ├── 002-building-first-kit.mdx
│   │   └── ...
│   └── authors/
│       └── frank.json
├── public/
│   ├── images/
│   ├── diagrams/
│   └── og-images/
├── src/
│   ├── app/
│   ├── components/
│   ├── lib/
│   └── styles/
├── .github/
│   └── workflows/
│       ├── lint.yml (markdown, code examples)
│       ├── seo.yml (meta validation)
│       └── deploy.yml (Vercel auto-deploy)
├── package.json
├── next.config.js
├── mdx.config.js
└── README.md
```

### Deployment Pipeline

1. **Local Development**
   - Author writes post.mdx in `content/posts/`
   - Runs `npm run dev` locally to preview
   - Tests code examples in clean environment
   - Commits to feature branch

2. **Pull Request (GitHub)**
   - CI runs linting (markdown, code syntax)
   - SEO bot validates: meta descriptions, headings, JSON-LD
   - Spell check runs
   - Renders preview links for review

3. **Review & Merge**
   - SME approves technical accuracy
   - Editor approves copy/SEO
   - Merge to main branch

4. **Auto-Deploy (Vercel)**
   - Vercel webhook triggers on GitHub push
   - Builds Next.js site (2-3 min)
   - Deploys to production CDN
   - Submits sitemap to Google Search Console (automatic)

5. **Post-Publish**
   - Monitoring dashboard alerts on 404s, errors
   - Analytics (Plausible) begins tracking immediately
   - Social distribution begins (Day 0 → Day 7 timeline)

### Performance Requirements

| Metric | Target | Monitoring |
|--------|--------|-----------|
| **Page Load Time** | < 2 seconds (Core Web Vitals) | Vercel Analytics, Google PageSpeed Insights |
| **Lighthouse Score** | 90+ | CI/CD check on every deploy |
| **Cumulative Layout Shift (CLS)** | < 0.1 | Vercel Real Experience Monitoring |
| **Largest Contentful Paint (LCP)** | < 2.5s | Vercel Analytics dashboard |
| **Code Example Load** | Syntax highlighting inline (no JS load) | MDX processing, no runtime dependencies |

### SEO Technical Implementation

**JSON-LD Article Schema** (per CR-014)
```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "[Post Title]",
  "image": "[OG Image URL]",
  "datePublished": "[ISO Date]",
  "dateModified": "[ISO Date]",
  "author": {
    "@type": "Person",
    "name": "[Author Name]",
    "url": "[Author Bio URL]"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Agentii Kit Blog",
    "logo": "[Logo URL]"
  },
  "description": "[Meta Description]",
  "articleBody": "[Full Article Text]"
}
```

**Heading Hierarchy Standard** (per CR-011)
```
H1: [Post Title - appears once]
  H2: [Section 1]
    H3: [Subsection 1.1]
    H3: [Subsection 1.2]
  H2: [Section 2]
    H3: [Subsection 2.1]
    H3: [Subsection 2.2]
  H2: Key Takeaways
  H2: Conclusion & CTA
```

**Meta Tags** (per CR-010)
```html
<title>[Keyword] | Agentii Kit Blog</title>
<meta name="description" content="[150-160 chars]">
<meta name="keywords" content="[primary keyword, 3-4 related terms]">
<meta property="og:title" content="[Title]">
<meta property="og:description" content="[150-160 chars]">
<meta property="og:image" content="[OG Image URL]">
<meta property="og:url" content="[Canonical URL]">
<meta property="og:type" content="article">
```

---

## 5. Analytics & Success Criteria Tracking

### Plausible Analytics Dashboard

**Metrics to Track** (per spec.md Success Criteria):

1. **SC-001: Organic Traffic Growth**
   - Tool: Plausible (default dashboard)
   - Dashboard: "Visitors" card filtered by organic traffic
   - Milestones: 500 (M1) → 2K (M3) → 8K (M6) → 25K (M12)
   - Cadence: Daily check, weekly summary

2. **SC-002: Organic Search % of Total Traffic**
   - Tool: Plausible (referrer breakdown)
   - Calculation: (organic / total) × 100
   - Target: 70%+
   - Cadence: Weekly

3. **SC-003: Average Time-on-Page**
   - Tool: Plausible (pages report)
   - Metric: Avg. Duration
   - Target: 3+ minutes
   - Cadence: Weekly per post

4. **SC-004: Keyword Rankings**
   - Tool: Google Search Console (free) + SEMrush (optional)
   - Tracking: Top 20 keywords, position tracking
   - Target: 30% indexed (M1) → 60% page 2+ (M3) → 40% page 1 (M6) → 60% page 1 (M12)
   - Cadence: Monthly GSC audit

### Newsletter Analytics (Substack)

5. **SC-005: Newsletter Signup Rate**
   - Tool: Substack dashboard + Plausible custom events
   - Calculation: (signups / blog visitors) × 100
   - Target: 12%
   - Tracking: On-page CTA, newsletter link in footer, post CTAs

6. **SC-006: Social Shares Per Post**
   - Tool: Manual tracking (Twitter Analytics, LinkedIn Analytics, Dev.to stats)
   - Target: 50+ shares/post in first week
   - Tracking: Create post hashtag (#agentiikit), monitor mentions

### Manual Tracking

7. **SC-007: Comment Rate**
   - Tool: GitHub Discussions + Dev.to comments + Hacker News threads
   - Target: 15%+ of posts with 10+ comments
   - Cadence: Weekly community review

8. **SC-008: Backlinks**
   - Tool: Google Search Console (inbound links) + SEMrush (optional)
   - Target: 5+ backlinks per post within 6 months
   - Tracking: Monthly review of "Top Linking Sites" in GSC

9. **SC-009: GitHub Stars & Forks**
   - Tool: GitHub repository insights
   - Target: Blog drives 30%+ of agentii-kit repository stars
   - Tracking: Survey new stars (if possible), referrer tracking
   - Cadence: Monthly

10. **SC-010: Kit User Discovery Attribution**
    - Tool: Onboarding survey (optional) + UTM parameters
    - Question: "How did you hear about agentii-kit?"
    - Target: 20% cite blog
    - Cadence: Quarterly review

11. **SC-011: AI Citations**
    - Tool: Manual search (ChatGPT, Claude, Perplexity)
    - Query: Search for "spec driven development"
    - Target: 3+ posts cited by AI within 12 months
    - Cadence: Quarterly

12. **SC-012: Community Contributions**
    - Tool: GitHub / community issue tracking
    - Metric: Kit variations or plugins created after tutorials
    - Target: 5+ by Month 12
    - Tracking: Community feedback, GitHub mentions

### Authority & Brand Metrics

13. **SC-013: Referring Domains**
    - Tool: Google Search Console + SEMrush
    - Target: 50+ referring domains within 12 months
    - Cadence: Monthly

14. **SC-014: Branded Searches**
    - Tool: Google Search Console (query tracking) + Google Trends
    - Target: 30%+ increase ("agentii kit," "spec kit") by Month 12
    - Cadence: Quarterly

15. **SC-015: Speaking/Podcast Invitations**
    - Tool: Manual tracking (email/Twitter DMs)
    - Target: 5+ invitations by Month 12
    - Cadence: Ongoing

16. **SC-016: Keyword Rankings (Top 3)**
    - Tool: Google Search Console
    - Target: Top 3 ranking for "spec driven development," "build ai agent kit"
    - Cadence: Monthly

### Analytics Dashboard Setup (Week 1)

```bash
# Plausible Setup
1. Create Plausible account ($29/mo)
2. Add domain (blog.agentii.ai or agentii.ai/blog)
3. Install Plausible script in Next.js layout
4. Create custom event "newsletter_signup" (CR-005 tracking)
5. Create segments:
   - Organic Traffic (source: organic)
   - Direct Traffic (source: direct)
   - Social Referrals (source: twitter, linkedin, dev.to)
   - Community (source: hackernews, indie-hackers, github)

# Google Search Console Setup
1. Verify domain ownership
2. Submit sitemap.xml (auto-generated by Next.js)
3. Add target keywords (5 primary from spec.md)
4. Set up monthly alerts for ranking changes
5. Monitor: "Top Pages," "Top Queries," "Impressions vs. Clicks"

# Substack Integration
1. Add Substack embed form to blog
2. Create automation: new post → newsletter email
3. Track: signup rate, engagement rate, unsubscribe rate
4. Monthly email for community (case studies, kit updates)
```

---

## 6. Distribution Strategy (3-Tier Model)

### Tier 1: Owned Channels (Day 0 → Day 1)

**Blog Website**
- Publish to Next.js blog (day-of-writing)
- Add to sitemap (auto-generated)
- Add to on-page navigation / recent posts
- Enable comments (GitHub Discussions)

**Newsletter (Substack)**
- Day 0 evening: Teaser + link in Substack email
- Include: headline, first 2 paragraphs, CTA to read full post
- Subscriber count target: 500+ by Month 3

**RSS Feed**
- Auto-generated from Next.js MDX
- Subscribe buttons on blog, in footer
- Submit to: Feedly, OPML.app, podcasting directories

### Tier 2: Amplification Channels (Day 0 → Day 3)

**Twitter/X** (Day 0)
- Author thread (5-8 tweets per spec.md)
- Key quote: Pull attention-grabbing stat from post
- Link: blog URL + custom slug (e.g., `#agentiikit`)
- Hashtags: #SpecDriven #SDD #StartupHacks #BuildInPublic #AI

**LinkedIn** (Day 1)
- Cross-post version or announcement
- Tag relevant communities (Product Hunt, founder groups)
- Reach secondary audience (investors)

**Dev.to** (Day 1-2)
- Cross-post markdown (with canonical tag back to blog)
- Dev.to has 2-3M developers; secondary reach
- Canonical URL in YAML front matter: `canonical_url: https://blog.agentii.ai/posts/...`

**Hashnode / Medium** (Day 3, optional)
- Additional amplification if initial post performs well (50+ shares)
- Lower priority; repurpose if team capacity allows

### Tier 3: Community Channels (Day 1 → Day 7)

**Hacker News** (Day 1)
- Post by author account (if applicable, per CR-019)
- Criteria: Meets audience, shows-vs-tells, open about limitations
- Engage in comments (respond to questions, acknowledge feedback)
- Typical reach: 1-5K visitors if reaches front page

**Indie Hackers** (Day 1)
- Post to "Show" community or relevant group
- Include: one-liner, link, context
- Engage with community (helpful comments on other posts)
- Typical reach: 500-2K visitors

**GitHub Issues / GitHub Discussions** (Day 1)
- Start discussion thread in agentii-kit repositories
- Link blog post as resource
- Encourage kit users to share experiences

**Relevant Slack Communities** (Day 2)
- React/Next.js groups (if tech-focused post)
- AI/LangChain communities (if AI agents topic)
- Startup/founder communities
- Post: Link + 1-line description (avoid spam, genuine share)

**Product Hunt** (Optional, only for major releases)
- If blog post accompanies new kit release
- Create Hunt page with blog content + kit repo link
- Day 0 focus: get 100+ upvotes for ranking

### Distribution Timeline (Example)

```
Day 0 (Tuesday, 9am):
  - Publish blog post to agentii-kit-blog
  - Tweet thread (author + 1-2 cofounder retweets)
  - Substack newsletter teaser
  - GitHub issue in main repo

Day 1 (Wednesday):
  - LinkedIn post
  - Hacker News submission
  - Indie Hackers post
  - Dev.to cross-post
  - Slack communities share

Day 2-3 (Thursday-Friday):
  - Monitor comments & engagement
  - Respond to HN / IH discussions
  - Boost under-performing channels

Day 4-7 (Weekend):
  - Engagement peaks, track metrics
  - If viral (100+ shares): Email to newsletter, highlight on blog
  - Prepare next post while momentum high
```

---

## 7. Newsletter Strategy

### Substack Launch (Week 1)

**Cadence**: Weekly digest on Fridays

**Structure** (250-300 words):
1. **Opening Hook** (50 words)
   - What's new with agentii-kit or spec-driven development
   - Real-world update or founder story

2. **Featured Blog Post** (100 words)
   - Title + excerpt from latest post
   - "Read the full post: [link]"

3. **Kit Spotlight** (50 words)
   - One of the kits (pmf-kit, blog-tech-kit, twitter-init-kit)
   - New feature or use case

4. **Community Shoutout** (30 words)
   - Highlight a kit user, contributor, or community win
   - "What are you building? Reply to this email"

5. **CTA** (20 words)
   - Invite feedback, github star requests, subscriber growth

**Growth Tactics**:
- On-site CTA: "Subscribe to weekly tips" in post CTAs
- Twitter: "Subscribe to weekly digest" in bio
- Footer link on all blog posts
- Mention in case studies (secondary audience reach)
- Target: 500 subscribers by Month 3, 1K by Month 6

### Email Automation (Later Phase)

Once audience grows:
- Welcome sequence (new subscriber)
- Weekly digest (every Friday)
- Monthly roundup (best of the month)
- Kit release announcements (async, as needed)

---

## 8. Content Calendar & Production Roadmap

### Year 1 Planning (Quarterly Breakdown)

**Q1 2025 (Jan-Mar): Foundation & Launch**
- **Target**: 6 posts (2 per pillar foundation)
- **Focus**: Establish presence, early traction
- **Posts**:
  1. Hub page: "What is Spec-Driven Development?" (Pillar 1)
  2. Tutorial: "Getting Started with PMF-Kit" (Pillar 2)
  3. Case Study: "[Founder X] Shipped MVP in 8 Weeks" (Pillar 3)
  4. How-to: "Building Your First Kit with Agentii" (Pillar 2)
  5. Comparison: "Spec-Driven Development vs. Agile" (Pillar 1)
  6. Patterns: "Constitution Engineering for AI Agents" (Pillar 4)

**Q2 2025 (Apr-Jun): Social Proof & Growth**
- **Target**: 9 posts (2-3 per pillar)
- **Focus**: Amplify case studies, attract early adopters
- **Posts**:
  - 3 case studies (Pillar 3: more founders)
  - 2 advanced tutorials (Pillar 2: intermediate users)
  - 2 AI patterns posts (Pillar 4: agents, multi-agent)
  - 1 scaling guide (Pillar 5)
  - 1 hub page update (Pillar 1)

**Q3 2025 (Jul-Sep): Authority Building**
- **Target**: 9 posts
- **Focus**: Original research, deep content, investor audience
- **Posts**:
  - Original benchmark: "Spec-Driven vs. Traditional: Productivity Benchmark"
  - Founder roundtable (multiple perspectives)
  - Technical deep dives (Pillars 4-5)
  - Industry analysis: "AI Agents in Startup Development"
  - Kit customization guides (Pillar 2)

**Q4 2025 (Oct-Dec): Scale & Measurement**
- **Target**: 9 posts + review/update existing
- **Focus**: Year-end roundup, evergreen content refresh, holiday traffic
- **Posts**:
  - Year review: "2025 Spec-Driven Development Trends"
  - Updated case studies with results
  - Scaling stories (Pillar 5: mature startups)
  - Beginner guide updates
  - FAQ / troubleshooting posts

**Year 1 Cumulative Goals**:
- 33 total posts published
- 25K+ monthly visitors by Dec 2025
- 500+ newsletter subscribers
- 1K+ GitHub stars on agentii-kit
- 50+ referring domains
- 3+ citations in AI systems (ChatGPT, Claude, Perplexity)
- 5+ community kit variations

### First 5 Foundation Posts (Detailed)

**Post 1: Hub Page — "What is Spec-Driven Development? The Practitioner's Guide"**
- Target Keyword: "spec driven development" (~1,200 searches/mo)
- Length: 2,800 words
- Structure:
  - Problem: Blank-page syndrome in startups
  - Solution: Spec-driven approach
  - How it works: 4-file architecture (constitution, spec, plan, tasks)
  - Comparison: vs. Agile, vs. waterfall
  - Getting started: Link to Pillar 2 tutorials
  - Case studies: 2-3 founder testimonials
  - FAQ: Common questions
- Publishing: Week 2 (Day 14 of project)

**Post 2: Tutorial — "Getting Started with PMF-Kit: A Product Manager's First Project"**
- Target Keyword: "pmf kit tutorial" (~800 searches/mo)
- Length: 1,500 words
- Structure:
  - Your first product: Scenario setup
  - Fork the kit: Step-by-step (GitHub fork, local setup)
  - Customize for your market: Exercise walkthrough
  - Write your first spec: Template + example
  - Run the process: What to expect
  - Troubleshooting: Common errors
  - Next steps: Join community
- Publishing: Week 3

**Post 3: Case Study — "[Founder Name] Shipped MVP in 6 Weeks Using Spec-Kits"**
- Target Keyword: "rapid mvp development case study" (~500 searches/mo)
- Length: 1,600 words
- Structure:
  - The problem: Founder's initial situation
  - The kit: Which kit they chose + why
  - The process: Timeline of spec → plan → tasks → build
  - Results: Metrics (time, cost, revenue)
  - Honest lessons: What worked, what didn't, limitations
  - Quotes: Pull from interview
  - Your turn: How to replicate
- Publishing: Week 4

**Post 4: How-To — "Building Your First Kit from Spec-Kit Templates"**
- Target Keyword: "build ai agent kit" (~800 searches/mo)
- Length: 1,400 words
- Structure:
  - When to build a kit: Use cases
  - Architecture: 4-file system explained
  - Template: Constitution.md, Spec.md examples
  - Git setup: Repository structure
  - Documentation: README best practices
  - Sharing: GitHub guidelines
  - Community: Where to post your kit
- Publishing: Week 5

**Post 5: Comparison — "Why Spec-Driven Development Works Better Than Agile for Early-Stage Startups"**
- Target Keyword: "spec driven development vs agile" (~400 searches/mo)
- Length: 1,700 words
- Structure:
  - Agile's problem: For startups specifically (not vs enterprise)
  - Spec-driven approach: How it differs
  - Key differences: Table (ceremony, feedback, iteration)
  - When Agile is better: Honest tradeoffs
  - When Spec-Driven wins: Speed, clarity, onboarding
  - Hybrid approaches: Can they coexist?
  - Real feedback: What founders say
- Publishing: Week 6

---

## 9. Constitution Check (8 Core Blog Principles)

### Validation Results

| Principle | Implementation | Status |
|-----------|-----------------|--------|
| **Content-First** | Spec.md defined BEFORE tech choices (this plan). Tech serves content goals. | ✅ PASS |
| **No Self-Validation** | Editorial workflow requires SME review by different person (spec.md, Day 5-6). | ✅ PASS |
| **Simplicity & Focus** | Using Next.js + MDX + Vercel (battle-tested). No custom CMS before 10 posts. | ✅ PASS |
| **AI-Native Distribution** | JSON-LD schema, H2/H3 hierarchy, FAQ sections documented in technical stack. | ✅ PASS |
| **Community Over Broadcast** | Distribution strategy includes 3 tiers: owned, amplification, community channels. | ✅ PASS |
| **Transparency Over Perfection** | Edge cases documented (spec.md 10 scenarios). Limitations sections in case studies. | ✅ PASS |
| **Long-term Over Quick Wins** | Year 1 plan spans 12 months, 4 phases. Not chasing viral. | ✅ PASS |
| **Measurable Outcomes** | 16 success criteria (spec.md) with tracking implementation (analytics section above). | ✅ PASS |

**Overall**: ✅ **ALL PRINCIPLES VALIDATED**

---

## 10. Project Structure

### Documentation Directory

```
specs/002-spec-kits-blogs/
├── spec.md                          (Content strategy - DONE)
├── plan.md                          (This file - Technical plan)
├── research.md                      (Research notes, if needed)
├── checklists/
│   ├── requirements.md              (Quality checklist - DONE)
│   ├── plan-validation.md           (Plan validation checklist)
│   ├── editorial-checklist.md       (Pre-publication checklist)
│   └── seo-checklist.md             (SEO validation per post)
├── editorial-guide.md               (Detailed editorial instructions)
├── content-calendar.md              (Month-by-month breakdown)
└── team-onboarding.md              (Role definitions, tools, training)
```

### Blog Repository Structure

```
github.com/agentii-ai/blog/
├── README.md
├── CONTRIBUTING.md
├── package.json
├── vercel.json
├── next.config.js
├── tsconfig.json
├── mdx.config.js
├── .env.local (secrets: PLAUSIBLE_KEY, SUBSTACK_API)
│
├── public/
│   ├── robots.txt
│   ├── sitemap.xml (auto-generated)
│   ├── images/
│   │   ├── og-fallback.png
│   │   └── posts/
│   │       ├── 001-og.png
│   │       └── ...
│   └── diagrams/
│
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx (homepage, latest posts)
│   │   ├── posts/
│   │   │   ├── [slug]/
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx (all posts archive)
│   │   ├── subscribe/ (newsletter signup success)
│   │   └── about/ (about the blog)
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── PostCard.tsx
│   │   ├── SEO.tsx
│   │   ├── Newsletter.tsx (Substack embed)
│   │   └── CodeBlock.tsx (syntax highlighting)
│   ├── lib/
│   │   ├── mdx.ts (MDX processing)
│   │   ├── seo.ts (meta tag generation)
│   │   ├── analytics.ts (Plausible client)
│   │   └── api-clients.ts (external integrations)
│   └── styles/
│       └── globals.css
│
├── content/
│   ├── posts/
│   │   ├── 001-spec-driven-fundamentals.mdx
│   │   ├── 002-building-first-kit.mdx
│   │   └── ...
│   └── authors/
│       ├── frank.json
│       └── ...
│
├── .github/
│   └── workflows/
│       ├── lint.yml (markdown, code validation)
│       ├── seo-check.yml (meta, schema validation)
│       └── deploy.yml (Vercel auto-deploy on push)
│
└── .gitignore
```

---

## 11. Phases & Milestones

### Phase 0: Research (If Needed)
- **Duration**: 0-1 weeks (only if spec clarifications needed)
- **Deliverable**: research.md with findings
- **Status**: SKIPPED (spec.md is complete)

### Phase 1: Platform Setup & Foundation (Weeks 1-2)

**Week 1: Infrastructure**
- [ ] Create GitHub repository (agentii-ai/blog)
- [ ] Set up Next.js 14 + MDX project
- [ ] Configure Vercel deployment (auto-deploy on push)
- [ ] Set up Google Search Console (verify domain)
- [ ] Set up Plausible Analytics (install script)
- [ ] Create Substack newsletter account
- [ ] Configure DNS (if custom domain blog.agentii.ai)

**Week 2: Editorial Foundation**
- [ ] Create editorial style guide (tone, brand voice)
- [ ] Create post template (front matter, structure)
- [ ] Set up GitHub Discussions (for comments)
- [ ] Create SEO metadata template
- [ ] Onboard team (writer, SME, editor, marketing)
- [ ] Create first post outline (Post 1: Spec-Driven Fundamentals)
- [ ] Set up social distribution workflow (Hootsuite / Buffer)

**Deliverables**:
- Live blog site (agentii-kit-blog.vercel.app or blog.agentii.ai)
- Analytics dashboard configured (Plausible)
- Newsletter list started (Substack)
- Team trained on workflow

### Phase 2: Content Production (Weeks 3-17, 15 weeks)

**Weeks 3-6: First 5 Foundation Posts**
- Post 1: Hub page (Pillar 1, Week 2)
- Post 2: Tutorial (Pillar 2, Week 3)
- Post 3: Case study (Pillar 3, Week 4)
- Post 4: How-to (Pillar 2, Week 5)
- Post 5: Comparison (Pillar 1, Week 6)
- **Metrics Target**: 500 visitors, 50+ newsletter signups, 100+ GitHub stars attributed

**Weeks 7-12: Q2 Content Sprint (9 posts)**
- 3 more case studies
- 2 tutorials (intermediate level)
- 2 AI patterns posts
- 1 scaling guide
- 1 hub update
- **Metrics Target**: 2K+ monthly visitors, 200+ signups

**Weeks 13-17: Q3 Content Sprint (9 posts)**
- Original research
- Founder roundtable
- Technical deep dives
- Industry analysis
- SEO optimizations for Q1 posts
- **Metrics Target**: 8K+ monthly visitors, 400+ signups

**Checkpoints (Monthly Reviews)**:
- Month 1: 500+ visitors, ranking progress on 5 keywords
- Month 3: 2K+ visitors, 40%+ of posts page 2+
- Month 6: 8K+ visitors, 40% page 1 rankings

### Phase 3: Measurement & Iteration (Ongoing)

**Months 7-12: Optimization & Scaling**
- Q4 content (9 posts) + refreshes
- Analyze top-performing posts
- Double down on winning keywords
- Improve underperforming content
- Expand to secondary audiences
- Target: 25K+ visitors by Month 12

**Monthly Reviews**:
- Analytics: Traffic, rankings, engagement, backlinks
- Community: GitHub stars, contributions, feedback
- Business: Kit adoption, user surveys, investor interest

---

## 12. Dependencies & Resource Requirements

### Team (Minimum Viable)

| Role | FTE | Experience | Key Skills |
|------|-----|-----------|-----------|
| **Writer** | 0.5 | 3+ years content marketing | Technical writing, SEO, storytelling |
| **SME/Reviewer** | 0.25 | 5+ years product/engineering | Product strategy, kit accuracy, credibility |
| **Editor** | 0.25 | 2+ years copyediting | Grammar, clarity, SEO optimization |
| **Marketing** | 0.25 | 2+ years growth/community | Social distribution, community engagement |
| **Founder** | Flex | 10+ years | Strategic direction, credibility, final approval |

**Onboarding Time**: 2-3 weeks (Week 1-2 of Phase 1)

### Tools & Services

| Tool | Purpose | Cost | Status |
|------|---------|------|--------|
| **GitHub Pro** | Repository, workflows, discussions | $4/mo | Required |
| **Vercel Pro** (optional) | Analytics, deployment | Free tier sufficient | Optional |
| **Plausible Analytics** | Privacy-first analytics | $29/mo | Required |
| **Substack** | Newsletter | Free tier sufficient | Required |
| **Google Search Console** | SEO tracking | Free | Required |
| **SEMrush** (optional) | Keyword research, competitors | $120/mo | Optional, start after Month 3 |
| **Buffer or Hootsuite** | Social scheduling | Free tier sufficient | Required |
| **Grammarly** (optional) | Copyediting | $12/mo | Optional |

**Total Monthly Cost**: ~$45-50 (required) + optional $132 (SEMrush) = ~$45-180/mo

### External Resources

- **Design Assets**: Diagrams, kit architecture visuals (Figma or Excalidraw)
- **Code Examples**: Tested in clean environment
- **Kit Documentation**: Reference pmf-kit, blog-tech-kit, twitter-init-kit repos
- **Interview Availability**: 2-3 founders for case studies (Q1-Q2)

---

## 13. Risk Mitigation

### Identified Risks & Mitigations

| Risk | Probability | Impact | Mitigation Strategy |
|------|-------------|--------|-------------------|
| **Content doesn't rank** | Medium | High | Low-competition keywords (< 5K/mo), cluster strategy, link building from community |
| **Writer capacity drops** | Medium | High | Start at 2/month, hire freelancer if traction, batch content creation |
| **Kit version breaks** | Low | Medium | Monthly version audit, version posts (e.g., "for Kit v1.2"), rapid update protocol |
| **Over-engineering** | Low | Medium | Follow Simplicity principle, don't customize before 10 posts |
| **Community backlash** | Low | High | Publish limitations, acknowledge tradeoffs, respond professionally |
| **Founder burnout** | Medium | High | Delegate to team, hire support early, measure workload |
| **Competitor content** | Medium | Medium | Monitor weekly, differentiate angle, add original research |
| **Newsletter listbuilding slow** | Medium | Medium | Add CTAs every post, highlight in email signature, grow organically (expect 6 months to 500) |

### Contingency Plans

**If content doesn't rank (Edge Case #1)**:
- Refresh posts with case studies
- Expand weak sections (add 500 words)
- Add internal links (internal linking boost)
- Re-promote on Twitter / HN

**If writer unavailable**:
- Reduce to 2 posts/month
- Hire freelancer ($1-3K per post)
- Batch content creation (write 3 posts in 2 weeks)

**If kit adoption stalls**:
- Create lead magnet (free template)
- Solicit testimonials from power users
- Host office hours or webinar

---

## 14. Success Criteria Tracking Implementation

### Weekly Review Cadence

Every Monday, check:
- **Plausible**: Visitors count, organic %
- **GSC**: Top queries, new rankings
- **GitHub**: Stars, forks, issues/feedback
- **Twitter**: Engagement on recent posts
- **Substack**: Signup rate, open rate

### Monthly Review Cadence (First Friday)

- **Analytics Deep Dive**: Traffic by source, time-on-page, bounce rate
- **SEO Analysis**: New rankings, position changes, top pages
- **Community Metrics**: Backlinks, mentions, contributor activity
- **Content Performance**: Which pillars resonating?
- **Adjustment**: Pivot if needed

### Quarterly Review Cadence (End of Q)

- **Phase Goals**: Did we hit visitor targets?
- **KPI Dashboard**: Update all 16 success criteria
- **Content Audit**: What worked? What didn't?
- **Strategic Decisions**: Should we adjust focus?
- **Next Quarter Plan**: Update content calendar

---

## 15. Next Steps & Handoff

### Before Proceeding to `/blogkit.tasks`

Review & approve:
- [ ] Tech stack choices (Next.js + Vercel + Plausible + Substack)
- [ ] Editorial workflow (2-week sprint per post)
- [ ] Distribution strategy (3-tier model)
- [ ] Analytics tracking (16 SC measurements)
- [ ] Content calendar (Q1 posts detailed)
- [ ] Team assignments (roles, FTE, onboarding)
- [ ] Budget approval ($45-50/mo + team time)

### Phase 1 Kickoff (After Approval)

1. **Week 1**: Infrastructure setup (GitHub, Vercel, analytics, newsletter)
2. **Week 2**: Editorial foundation (team training, templates, first outline)
3. **Week 3**: First post draft (Post 1: Spec-Driven Fundamentals hub)

### Timeline to First Post

- **Day 1-7**: Phase 1 setup
- **Day 8-21**: First post draft + review cycle
- **Day 22**: Publish Post 1
- **Day 23-35**: Post 2 draft + publish
- **Day 36-49**: Post 3 draft + publish

**Target**: First 3 posts live by end of Week 7 (late March 2025)

---

## 16. Technical Deployment Checklist

### Pre-Launch (Week 2)

- [ ] Domain configured (DNS, HTTPS, CDN)
- [ ] Next.js build passes all checks (no build errors)
- [ ] Vercel deployment successful (auto-deploy on push works)
- [ ] Analytics tracking confirms page views
- [ ] Newsletter signup form works (test subscription)
- [ ] RSS feed generates correctly
- [ ] Sitemap.xml accessible
- [ ] robots.txt allows crawling
- [ ] 404 page configured (custom error page)
- [ ] Server-side redirects in place (if migrating old blog)

### SEO Pre-Flight

- [ ] Google Search Console verified
- [ ] First 5 posts submitted to GSC
- [ ] Meta descriptions finalized (150-160 chars)
- [ ] JSON-LD schema validated (schema.org)
- [ ] Heading hierarchy correct (H1→H2→H3)
- [ ] Internal links added (2-3 per post)
- [ ] Mobile responsive (tested on phone, tablet)
- [ ] Page load time < 2sec (Vercel Analytics)
- [ ] Core Web Vitals green (Lighthouse 90+)

### Social & Community Integration

- [ ] Twitter account linked in footer
- [ ] GitHub repo linked in footer
- [ ] Newsletter signup CTA in sidebar + footer
- [ ] GitHub Discussions enabled (comments)
- [ ] Developer community links added (Hacker News, Indie Hackers, Dev.to)

---

## 17. Success & Measurement Framework

### Definition of Success (Month 1)

✅ **Month 1 Goals** (by end of Week 4):
- [ ] 3 posts published (hub, tutorial, case study)
- [ ] 500+ organic visitors to blog
- [ ] 50+ newsletter subscribers
- [ ] 100+ GitHub stars attributed to blog (survey users)
- [ ] 0 technical errors (100% uptime)
- [ ] 3 posts indexed by Google

✅ **Month 3 Goals** (by end of Week 12):
- [ ] 2K+ monthly organic visitors
- [ ] 200+ newsletter subscribers
- [ ] 60% of published posts on page 2+ for target keywords
- [ ] 5+ backlinks from external sources
- [ ] 10+ GitHub contributions/discussions from blog posts
- [ ] 2+ case studies with metrics published

✅ **Month 6 Goals** (by end of Week 24):
- [ ] 8K+ monthly organic visitors
- [ ] 400+ newsletter subscribers
- [ ] 40%+ of posts on page 1 for target keywords
- [ ] 20+ backlinks from authority sites
- [ ] 50+ GitHub forks attributed to blog
- [ ] 1+ AI system citation (ChatGPT, Claude, etc.)

✅ **Month 12 Goals** (by end of Year 1):
- [ ] 25K+ monthly organic visitors
- [ ] 500+ newsletter subscribers
- [ ] 60%+ of posts on page 1 for target keywords
- [ ] 50+ referring domains
- [ ] 500+ GitHub stars
- [ ] 3+ AI system citations
- [ ] 5+ community kit contributions

---

## References & Related Documents

- **Specification**: [spec.md](./spec.md)
- **Quality Checklist**: [checklists/requirements.md](./checklists/requirements.md)
- **Editorial Workflow**: [Editorial Checklist (to be created)](./checklists/editorial-checklist.md)
- **SEO Standards**: [SEO Checklist (to be created)](./checklists/seo-checklist.md)
- **Content Calendar**: [Content Calendar (to be created)](./content-calendar.md)
- **Team Onboarding**: [Team Guide (to be created)](./team-onboarding.md)

---

**Status**: ✅ **READY FOR EXECUTION**

Next step: Run `/blogkit.tasks` to generate detailed task breakdown for Phase 1 implementation.
