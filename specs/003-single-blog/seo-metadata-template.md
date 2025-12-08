# SEO Metadata Template

Use this template when filling frontmatter and checking SEO metadata for each post.

## 1. Frontmatter Fields

```yaml
---
title: "Three Domains, One Method: How Spec-Driven Workflows Are Transforming Product, Content, and Marketing"
# 10–120 chars, includes primary keyword naturally.

description: "How PMF‑Kit, Blog‑Tech‑Kit, and Twitter‑Init‑Kit use one spec‑driven method to transform product, content, and marketing into agent‑ready workflows."
# 150–160 chars, includes keyword + value + soft CTA.

date: "2025-12-08"
# ISO 8601, not in the future.

author: "AgentII Team"

tags:
  - spec-driven-development
  - ai-agents
  - workflow-automation
  - professional-tools
  - cross-functional
# 1–8 tags, lowercase alphanumeric + hyphens.

cover: "/images/blog/three-kits/hero.jpg"
cover_alt: "Illustration of three spec-driven kits resting on a shared foundation."

keywords:
  - spec-driven workflows
  - AI agents
  - product-market fit
  - content marketing
  - social media strategy
  - professional productivity
  - workflow automation
# Up to 10 keywords, mix of primary + long-tail.

category: "blog"

draft: false
featured: false

canonical: null  # or original URL if syndicated
---
```

## 2. Title Guidelines

- ≤ 60 characters where possible.
- Includes primary keyword near the beginning.
- Clearly communicates the benefit or topic (e.g., "How X helps Y" or "Guide to Z").

## 3. Description Guidelines

- 150–160 characters.
- Includes:
  - Primary keyword.
  - Clear value proposition.
  - Soft CTA ("Learn how...", "See how...").
- Written as a natural sentence, not a keyword list.

## 4. Internal Link Strategy

- 3–5 internal links per post:
  - 1–2 links to **hub / pillar** posts.
  - 2–3 links to **related** posts in the same cluster.
- Anchor text should:
  - Be descriptive ("spec-driven development 101"), not "here" or "this post".
  - Reflect the topic/keyword of the target page.

## 5. External Link Strategy

- 3–5 external links to **authoritative sources**:
  - Primary research, official docs, high‑quality practitioner blogs.
- Use descriptive anchor text ("McKinsey on the agentic organization") rather than bare URLs.

## 6. Open Graph & Twitter Cards

- OG/Twitter fields come from frontmatter and global metadata, but per post ensure:
  - `cover` is a 1200×630 (or similar) image with clear subject.
  - `cover_alt` accurately describes the image.
- Spot‑check with:
  - Twitter Card validator.
  - Facebook/OG debugger (if used).

## 7. Final Metadata Checklist

- [ ] Title includes primary keyword and matches the post’s actual promise.
- [ ] Description is 150–160 chars and compelling.
- [ ] Tags are 1–8, all lowercase and hyphenated.
- [ ] Keywords list is ≤ 10 items, with mix of main + long‑tail phrases.
- [ ] Canonical is `null` for native posts, set to original URL for syndicated ones.
- [ ] Cover image path exists and alt text is meaningful.
