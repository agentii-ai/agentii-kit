# Editorial Guide: 002-Spec-Kits-Blogs

## Blog Type

- Practitioner content focused on **spec-driven development** and **kits**:
  - Tutorials and how-to guides for using Spec-Kit, PMF-Kit, Blog-Tech-Kit, Twitter-Init-Kit.
  - Case studies grounded in real adoption stories.
  - Strategy/leadership pieces that end in concrete playbooks.

## Target Audience

- **Primary**: Founders, builders, PMs, and engineers who are comfortable with GitHub and AI tools.
- **Secondary**: Operators and marketers responsible for growth, distribution, and experimentation.

## Tone & Voice

- Friendly but professional, with a **growth-hacking mindset**.
- Problem-first: open with a sharp description of the readers pain.
- Confident, evidence-backed; avoid hype or vague claims.
- Use **"you"** for the reader and **"we"** for the team.
- Prefer active voice and concrete verbs.

### Good Phrases

- "Heres the failure mode most teams hit..."
- "In practice, this looks like..."
- "Heres the workflow we recommend..."

### Avoid

- Jargon without explanation ("synergy", "disruption").
- Over-promising without evidence.

## Structure Pattern for Most Posts

1. **H1 Title** (from frontmatter `title`)
2. **TL;DR** (23 sentences)
3. **Problem Statement**
4. **Solution / Framework** (often the spec-driven method or kit)
5. **Deep Dive Sections** (H2 / H3)
6. **Code Examples or Workflows** (where applicable)
7. **Key Takeaways** (35 bullets)
8. **CTA** (clear next step)
9. **FAQ / Objections** (optional but recommended)

## Headings & Readability

- Exactly one **H1** per post (handled by frontmatter title).
- Use **H2** for major sections and **H3** for sub-sections.
- Do not skip levels (no H4 without H2/H3 above).
- Aim for **FleschKincaid grade 1013**:
  - Short paragraphs (34 sentences).
  - Break long sentences (>20 words).

## Writing Conventions

- **Headers**: Use sentence case for headings (except proper nouns).
- **Code**:
  - Use fenced code blocks with language tags (```ts, ```bash, ```md).
  - Show complete, runnable examples when possible.
  - Add a short comment or sentence before each block explaining what it does.
- **CTAs**:
  - Place one primary CTA near the end of the post.
  - Reference a kit, a follow-up post, or a concrete action (e.g., "Fork PMF-Kit and run your first sprint").

## Citations & References

- Use numbered footnotes at the bottom of the post for key claims.
- Prefer Tier 13 sources:
  - Research papers, official docs, reputable practitioner blogs.
- Use descriptive anchor text for links ("Thoughtworks on spec-driven development" instead of "link").

## Content Moderation & Community

- Encourage genuine discussion and questions.
- Remove or down-rank:
  - Spam, personal attacks, or harassment.
  - Off-topic promotion.
- When responding:
  - Be transparent about limitations.
  - Invite readers to open GitHub issues for deeper technical questions.

## Examples to Model

- Foundation explainer: `content/blog/2025-11-15-dont-code-specify.md`.
- Cross-functional article: `content/blog/2025-11-22-every-job-one-method.md`.
- Kit-focused deep dive: `content/blog/2025-11-29-elegance-spec-kit.md`.
