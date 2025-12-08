# SEO Metadata Template (002-Spec-Kits-Blogs)

Use this template when filling frontmatter and checking SEO metadata for each blog post.

## 1. Frontmatter Example

---
title: "[Primary Keyword]: Clear, Honest Promise for the Reader"
# 10–120 chars. Include primary keyword near the start.

description: "[150–160 character summary including the keyword, clear value, and a soft CTA.]"
# 150–160 chars, written as a natural sentence.

date: "2025-01-15"
# ISO 8601, not in the future.

author: "Agentii-Kit Team"

tags:
  - spec-driven-development
  - pmf-kit
  - blog-tech-kit
  - twitter-init-kit
# 1–8 tags, lowercase, hyphen-separated.

cover: "/images/blog/example-post/hero.jpg"
cover_alt: "[Short description of what the image shows]"

keywords:
  - spec driven development
  - pmf kit tutorial
  - blog tech workflows
  - twitter launch kit
  - ai agents for startups
# Up to 10 keywords, mix of primary and long-tail phrases.

category: "blog"

draft: false
featured: false

canonical: null  # or canonical URL if syndicated
---

## 2. Title Checklist

- 10–60 characters where possible.
- Includes the primary keyword once, naturally.
- Makes a specific promise ("How X helps Y", "Guide to Z").

## 3. Description Checklist

- 150–160 characters.
- Includes:
  - Primary keyword.
  - Clear benefit.
  - Soft CTA ("Learn how…", "See how…").
- Avoids keyword stuffing or comma-separated lists.

## 4. Internal Link Strategy

For each post:

- Add **3–5 internal links**:
  - 1–2 to hub/pillar posts (e.g., Spec-Driven 101, kit overviews).
  - 2–3 to related posts in the same cluster.
- Anchor text:
  - Descriptive ("spec-driven development 101"), not "here".
  - Matches the topic/keyword of the target page.

## 5. External Link Strategy

- Add **3–5 external links** to authoritative sources:
  - Research, official docs, high-quality practitioner posts.
- Use descriptive anchor text ("OpenAI’s practical guide to agents").

## 6. Open Graph & Twitter Cards

- `cover` should point to a real image (ideally 1200×630) under `public/images/blog/...`.
- `cover_alt` should describe the image clearly.
- Spot-check social previews via Twitter/Facebook debuggers once deployed.

## 7. Final Metadata Checklist Per Post

- [ ] Title includes primary keyword and matches the article’s actual promise.
- [ ] Description is 150–160 chars, compelling, and keyword-aware.
- [ ] Tags: 1–8, all lowercase and hyphenated.
- [ ] Keywords: ≤10, mix of core + long-tail phrases.
- [ ] Canonical: null for native posts; set to original URL for syndicated copies.
- [ ] Cover image exists and `cover_alt` is meaningful.
