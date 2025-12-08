# Analytics Tracking Configuration

This doc supports T014: how we track performance for 003-single-blog.

## 1. Tools

- **Plausible Analytics** for kits.agentii.ai
- (Optional) Google Search Console & other SEO tools for search performance.

## 2. Events & Goals

In Plausible, configure the following **custom events / goals**:

- `pageview` (default) – All page views.
- `newsletter_signup` – Newsletter form submits.
- `github_click` – Clicks on GitHub repo links (e.g., pmf-kit, blog-tech-kit, twitter-init-kit).
- `social_share` – Clicks on share buttons (Twitter, LinkedIn, etc.).

## 3. UTM Parameters

For all outbound links from blog → social / campaigns, use:

```text
?utm_source=<channel>&utm_medium=social&utm_campaign=<post-slug>
```

Examples:

- Twitter: `?utm_source=twitter&utm_medium=social&utm_campaign=three-kits-one-method`
- LinkedIn: `?utm_source=linkedin&utm_medium=social&utm_campaign=organizational-transformation-agentic-era`
- Dev.to: `?utm_source=devto&utm_medium=social&utm_campaign=spec-driven-101`

## 4. Dashboards

### Traffic Overview

Include at minimum:

- Pageviews and unique visitors.
- Top pages (by URL).
- Top referrers (Twitter, LinkedIn, Dev.to, newsletter, direct, organic search).
- Geography (optional, for context).

### Engagement & Conversion

- Avg time-on-page per post.
- Bounce rate.
- Scroll depth (if instrumented).
- Goal completions:
  - Newsletter signups.
  - GitHub clicks.
  - Social share clicks.

## 5. Weekly Review Template

Every week, capture:

- **Top posts** by pageviews.
- **Avg time-on-page** and scroll depth per top post.
- **Traffic by source**:
  - % from search.
  - % from social.
  - % from direct / referral.
- **Goal conversions** (newsletter, GitHub, social shares).
- **Actions for next week**:
  - Posts to highlight again.
  - Topics that resonated for future content.

## 6. Monthly Review Template

Every month, capture:

- **Traffic growth** vs. previous month.
- **Top 5 posts** and why they performed.
- **Search performance** (from GSC):
  - Top queries.
  - Average position for target keywords.
- **Backlinks / citations** (if using Ahrefs or manual checks).
- **Experiments run** (new formats, new distribution, etc.) and outcomes.
- **Plan for next month** based on learnings.
