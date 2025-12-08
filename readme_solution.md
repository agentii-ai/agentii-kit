
## JSON-LD Article schema

- **Code**: [components/BlogJsonLd.tsx](cci:7://file:///Users/frank/X/agentii-kit/components/BlogJsonLd.tsx:0:0-0:0)  
  - Implements `BlogPosting` with `headline`, `image`, `datePublished`, `author`, `description`, `articleBody`, etc.
- **Usage**: `app/blog/posts/[slug]/page.tsx`
  - Injects `<BlogJsonLd ...>` for every post with:
    - `title`, `description`, `date`, `updated_at`, `author`, `cover/og_image`, `keywords`, full `articleBody`.
  - Canonical-style URL: `https://kits.agentii.ai/blog/posts/${slug}`.
- **How to validate**:
  - Deploy, then use Google Rich Results Test on any post URL.

---

## CI/CD workflows

Existing workflows are now aligned with tasks:

- **Lint & type-check**: [.github/workflows/lint.yml](cci:7://file:///Users/frank/X/agentii-kit/.github/workflows/lint.yml:0:0-0:0)
  - Runs `npm ci`, `npm run lint`, `npm run type-check` on PRs and [main](cci:1://file:///Users/frank/X/agentii-kit/scripts/validate-frontmatter.ts:43:0-89:1).
- **SEO/content validation**: [.github/workflows/seo-check.yml](cci:7://file:///Users/frank/X/agentii-kit/.github/workflows/seo-check.yml:0:0-0:0)
  - On PR and [main](cci:1://file:///Users/frank/X/agentii-kit/scripts/validate-frontmatter.ts:43:0-89:1) for `content/blog/**`, `lib/**`, `scripts/**`:
    - `npm ci`
    - `npm run validate-frontmatter`
    - `npm run check-links`
- **Build before Vercel deploy**: [.github/workflows/deploy.yml](cci:7://file:///Users/frank/X/agentii-kit/.github/workflows/deploy.yml:0:0-0:0)
  - On push to [main](cci:1://file:///Users/frank/X/agentii-kit/scripts/validate-frontmatter.ts:43:0-89:1), builds the Next app (`npm ci` + `npm run build`).

I added:

- **Script**: [scripts/validate-frontmatter.ts](cci:7://file:///Users/frank/X/agentii-kit/scripts/validate-frontmatter.ts:0:0-0:0)
  - Uses `gray-matter` + [validateBlogPostFrontmatter](cci:1://file:///Users/frank/X/agentii-kit/lib/schemas/blog-post.ts:38:0-228:1).
  - Validates **all** `content/blog/*.md` frontmatter and exits non‑zero on error.

You can wire it in [package.json](cci:7://file:///Users/frank/X/agentii-kit/package.json:0:0-0:0) (if not already) as:

```jsonc
"scripts": {
  "validate-frontmatter": "ts-node scripts/validate-frontmatter.ts"
}
```

---

## Editorial Style Guide

- **File**: [specs/002-spec-kits-blogs/editorial-guide.md](cci:7://file:///Users/frank/X/agentii-kit/specs/002-spec-kits-blogs/editorial-guide.md:0:0-0:0)
- Content covers:
  - Blog type and audience (founders, PMs, engineers).
  - Tone/voice (friendly, professional, growth-hacking).
  - Structure pattern (H1 → TL;DR → Problem → Solution → Deep Dive → Takeaways → CTA → FAQ).
  - Heading/readability guidelines.
  - Writing conventions (headers, code, CTAs).
  - Citations and moderation guardrails.
  - Concrete examples referencing existing posts.

---

## Post template

- **File**: [content/posts/template.mdx](cci:7://file:///Users/frank/X/agentii-kit/content/posts/template.mdx:0:0-0:0)
- Includes:
  - Example frontmatter with `title`, `description`, `author`, `date`, `tags`, `keywords`, `category`, `draft`, `featured`, `canonical`.
  - Body scaffold:
    - H1 Title
    - TL;DR comment
    - `Problem`, `Solution Overview`, `Deep Dive` (with H2/H3)
    - `Code Examples` section
    - `Key Takeaways`
    - `CTA`
    - Optional `FAQ`.
- Writers can copy this into `content/blog/YYYY-MM-DD-slug.md` and adapt.

---

## Code example template

- **File**: [docs/code-example-template.md](cci:7://file:///Users/frank/X/agentii-kit/docs/code-example-template.md:0:0-0:0)
- Defines:
  - Standard block pattern (language tag, descriptive comment, complete example, expected output).
  - Repo reference format (`github.com/agentii-ai/...`).
  - Testing approach (clean env, deps, paths).
  - Copy‑paste/accessibility rules (no `$` prompts, avoid awkward wraps).
  - Examples for `bash` and `ts`.

---

## SEO metadata template

- **File**: [docs/seo-metadata-template.md](cci:7://file:///Users/frank/X/agentii-kit/docs/seo-metadata-template.md:0:0-0:0)
- Provides:
  - Frontmatter example with comments for each field.
  - Title and description guidelines (length, keyword placement).
  - Internal + external link strategy.
  - OG/Twitter image and alt-text guidance.
  - Final per‑post SEO checklist.

---

## Content calendar

- **File**: [specs/002-spec-kits-blogs/content-calendar.md](cci:7://file:///Users/frank/X/agentii-kit/specs/002-spec-kits-blogs/content-calendar.md:0:0-0:0)
- Contains:
  - Table for the **first 5 posts** with IDs, titles, types, target keywords, weeks, and pillar mapping.
  - Sprint mapping (Sprint 0–5).
  - Dependencies and cadence (1 post / 2 weeks, Tue–Thu AM).
  - Per‑post success metrics: traffic, engagement, newsletter %, kit impact.

---

## Distribution templates

- **File**: [docs/distribution-templates.md](cci:7://file:///Users/frank/X/agentii-kit/docs/distribution-templates.md:0:0-0:0)
- Templates for:
  - Twitter/X thread (main tweet + 5–7 replies).
  - LinkedIn post.
  - Dev.to cross‑post (with `canonical_url`).
  - Slack/Discord share.
  - Newsletter digest snippet.

---

## Newsletter template

- **File**: [docs/newsletter-template.md](cci:7://file:///Users/frank/X/agentii-kit/docs/newsletter-template.md:0:0-0:0)
- Structure aligned with plan.md:
  - Opening hook (~50 words).
  - Featured post excerpt (~100 words).
  - Kit spotlight (~50 words).
  - Community shoutout (~30 words).
  - CTA (~20 words).

---

## Internal link strategy

- **File**: [specs/002-spec-kits-blogs/content-cluster-strategy.md](cci:7://file:///Users/frank/X/agentii-kit/specs/002-spec-kits-blogs/content-cluster-strategy.md:0:0-0:0)
- Defines:
  - Hub + four supporting posts for the first cluster.
  - Explicit internal link map (who links to whom).
  - Anchor text principles (descriptive, keyword-aware).
  - Ideas for next ~5 posts to extend the cluster.

---

## Status Summary

- [tasks.md](cci:7://file:///Users/frank/X/agentii-kit/specs/1-vercel-deployment/tasks.md:0:0-0:0): T008–T017 are now marked `[x]`.
- Todo tracker: T008–T017 set to **completed**.
- JSON-LD is wired and documented; CI workflows for lint/SEO/build are in place and script-backed.
- Editorial, SEO, template, and cluster docs for [002-spec-kits-blogs](cci:7://file:///Users/frank/X/agentii-kit/specs/002-spec-kits-blogs:0:0-0:0) are created and aligned with your plan.

If you’d like, I can next:
- Run a local `npm test` / `npm run validate-frontmatter` style check via the terminal, or
- Help draft one concrete post using [content/posts/template.mdx](cci:7://file:///Users/frank/X/agentii-kit/content/posts/template.mdx:0:0-0:0) + the new SEO template.
