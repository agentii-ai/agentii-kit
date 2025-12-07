# Research Articles Organization Guide

**Location**: `/specs/003-single-blog/research/external-articles/`

---

## Directory Structure

```
/specs/003-single-blog/research/
├── external-articles/              ← Store downloaded articles here
│   ├── tier-1-official/
│   │   ├── agentii-kit-readme.md
│   │   ├── spec-kit-docs.md
│   │   ├── pmf-kit-tutorial.md
│   │   └── blog-kit-guide.md
│   │
│   ├── tier-2-practitioner/
│   │   ├── indie-hackers-planning.md
│   │   ├── founder-story-scheduling.md
│   │   ├── agile-vs-specs-comparison.md
│   │   └── [other founder/blogger articles].md
│   │
│   ├── tier-3-technical/
│   │   ├── github-data-benchmarks.md
│   │   ├── prompt-engineering-research.md
│   │   ├── development-productivity-study.md
│   │   └── [technical papers/research].md
│   │
│   └── articles-index.md            ← Master index (you create)
│
├── post-001-spec-kit-intro-research.md   ← Your research summary (already created)
├── post-001-keywords.md                  ← Keyword research
└── post-001-code-examples.md             ← Code examples reference
```

---

## How to Organize Articles

### 1. **Create Tier Folders**

Create three main folders for the evidence tiers:

```bash
mkdir -p "/Users/frank/X/agentii-kit/specs/003-single-blog/research/external-articles/tier-1-official"
mkdir -p "/Users/frank/X/agentii-kit/specs/003-single-blog/research/external-articles/tier-2-practitioner"
mkdir -p "/Users/frank/X/agentii-kit/specs/003-single-blog/research/external-articles/tier-3-technical"
```

### 2. **Naming Convention for Articles**

Use this naming pattern:

```
[tier]-[topic]-[source-name].md
```

**Examples**:
- `tier-1-docs-agentii-kit-readme.md`
- `tier-2-case-study-founder-scheduling-app.md`
- `tier-3-research-prompt-engineering-llm.md`

**Or simpler**:
- `agentii-kit-readme.md` (in tier-1-official/)
- `founder-story-scheduling.md` (in tier-2-practitioner/)
- `development-productivity-study.md` (in tier-3-technical/)

### 3. **Article File Format**

When you save articles, use this header format:

```markdown
# Article Title

**Source**: [URL or source name]
**Date Accessed**: 2025-12-07
**Author**: [Name if known]
**Tier**: Tier 1 / Tier 2 / Tier 3
**Category**: [Official Docs / Case Study / Research / Blog Post]
**Relevance to Blog Post**: [Which section does this support? Post problem? Methodology? Evidence?]

---

## Key Quotes / Highlights

[Copy relevant quotes or key points]

---

## How This Supports Blog Post

[2-3 sentences on which claims this evidence supports]

---

## Raw Content

[Article content or summary goes here]
```

**Example**:
```markdown
# Agentii-Kit GitHub README

**Source**: https://github.com/agentii/agentii-kit
**Date Accessed**: 2025-12-07
**Author**: Agentii Team
**Tier**: Tier 1 (Official)
**Category**: Official Documentation
**Relevance**: Explains four-layer stack (Constitution → Spec → Plan → Tasks)

---

## Key Quotes

"The spec-driven approach starts with Constitution (principles), moves to Spec (what), Plan (how), and Tasks (action items)."

---

## How This Supports Blog Post

This is our primary source for the "Four-Layer Stack" section. It provides official definition and structure that founders reference.

---

## Raw Content

[Full README copied here, or summary of key sections]
```

---

## Recommended Articles to Download

Based on your blog post, here are articles to search for and save:

### **Tier 1: Official Sources**
- [ ] Agentii-Kit GitHub README (`https://github.com/agentii/agentii-kit`)
- [ ] Spec-Kit Documentation (`https://github.com/agentii/spec-kit`)
- [ ] PMF-Kit Tutorial (`https://github.com/agentii/pmf-kit`)
- [ ] Blog-Tech-Kit Guide (`https://github.com/agentii/blog-tech-kit`)

### **Tier 2: Practitioner Sources**
- [ ] Indie Hackers: "How to avoid scope creep" (search for planning/scope posts)
- [ ] Y Combinator Startup Blog: Posts on planning or requirements
- [ ] Founder case studies: Real examples of spec-driven approach
- [ ] Medium/Dev.to articles on "specification first development"
- [ ] Twitter threads on startup planning and product development

### **Tier 3: Technical/Research**
- [ ] Development productivity studies (Google, Stack Overflow, or industry reports)
- [ ] Prompt engineering research (LLM instruction following)
- [ ] Agile Manifesto or Agile Alliance resources (for comparison)
- [ ] GitHub data on kit adoption (star counts, forks)

---

## Master Index File

Create this file: `/specs/003-single-blog/research/external-articles/articles-index.md`

```markdown
# External Articles Index for Blog Post 001

**Post**: What is Spec-Driven Development 101
**Last Updated**: 2025-12-07

---

## Tier 1: Official Sources (4 articles)

| Article | Source | Status | Location |
|---------|--------|--------|----------|
| Agentii-Kit README | GitHub | ✅ Downloaded | `tier-1-official/agentii-kit-readme.md` |
| Spec-Kit Docs | GitHub | ⏳ Pending | `tier-1-official/spec-kit-docs.md` |
| PMF-Kit Tutorial | GitHub | ⏳ Pending | `tier-1-official/pmf-kit-tutorial.md` |
| Blog-Kit Guide | GitHub | ⏳ Pending | `tier-1-official/blog-kit-guide.md` |

---

## Tier 2: Practitioner Sources (8+ articles)

| Article | Source | Status | Location | Supports Section |
|---------|--------|--------|----------|------------------|
| Scope Creep Prevention | Indie Hackers | ⏳ Pending | `tier-2-practitioner/indie-hackers-scope.md` | Why Specs Matter |
| [Case Study] Founder Story | Medium | ⏳ Pending | `tier-2-practitioner/founder-story.md` | Real Example |
| Spec vs Agile | Dev.to | ⏳ Pending | `tier-2-practitioner/spec-vs-agile.md` | Methodology |

---

## Tier 3: Technical/Research (6+ articles)

| Article | Source | Status | Location | Supports Section |
|---------|--------|--------|----------|------------------|
| Dev Productivity Benchmark | [Source] | ⏳ Pending | `tier-3-technical/productivity-benchmark.md` | Rework Stats |
| LLM Prompt Engineering | ArXiv/Paper | ⏳ Pending | `tier-3-technical/llm-prompting.md` | AI Agent Section |
| Agile Manifesto | agilemanifesto.org | ✅ Downloaded | `tier-3-technical/agile-manifesto.md` | Comparison |

---

## Next Steps

1. Download articles using tools:
   - Web browser "Save as HTML → Markdown"
   - `curl` command for direct download
   - PDF converters (PDF → Markdown)
   - Manual copy-paste into `.md` files

2. Add to corresponding tier folder

3. Update this index

4. Cross-reference in blog draft (add citations)
```

---

## How to Download Articles

### **Option 1: Manual Copy-Paste (Easiest)**
1. Open article in browser
2. Select all text (Cmd+A)
3. Copy (Cmd+C)
4. Create new `.md` file in tier folder
5. Paste content
6. Add header with source info

### **Option 2: Using `curl` Command**
```bash
# Download webpage as text
curl -s "https://github.com/agentii/agentii-kit" > /Users/frank/X/agentii-kit/specs/003-single-blog/research/external-articles/tier-1-official/agentii-kit-readme.md
```

### **Option 3: Using VS Code**
1. Open file in VS Code
2. Install "Markdown All in One" extension
3. Paste HTML content
4. Select all → Right-click → "Convert HTML to Markdown"

### **Option 4: Browser Extension (Recommended)**
- **Markdown Here** or **Save as Markdown** browser extension
- Saves web pages directly as `.md` files
- Works on Chrome, Firefox, Safari

---

## Quick Links to Start With

Here are the easiest sources to access immediately:

```markdown
## Tier 1 (Official - Available Now)

1. **Agentii-Kit**: https://github.com/agentii/agentii-kit
   - Just copy the README.md content

2. **Spec-Kit**: https://github.com/agentii/spec-kit
   - Copy docs folder contents

3. **PMF-Kit**: https://github.com/agentii/pmf-kit
   - Copy examples and docs

4. **Blog-Kit**: https://github.com/agentii/blog-tech-kit
   - Copy specification and planning examples

## Tier 2 (Practitioner - Search These)

- Indie Hackers: https://www.indiehackers.com/search?q=specification+planning
- Y Combinator Blog: https://blog.ycombinator.com (search "planning" or "requirements")
- Dev.to: https://dev.to/search?q=specification%20first
- Medium: https://medium.com/search?q=spec-driven%20development
- Twitter: Advanced search for "spec-driven development" or "specification first"

## Tier 3 (Technical - May Need Searching)

- Google Scholar: https://scholar.google.com/ (search for research papers)
- ArXiv: https://arxiv.org/ (AI/LLM research)
- GitHub: Star counts and project adoption data (via GitHub API)
```

---

## File Count Target

**For Blog Post 001 (Spec-Driven Development 101):**
- **Tier 1**: 4 articles (official sources)
- **Tier 2**: 8-10 articles (practitioner blogs/case studies)
- **Tier 3**: 6-8 articles (technical papers/benchmarks)

**Total**: 18-22 external articles saved locally

This gives you rich, well-sourced content for the blog post and future reference.

---

## Commands to Create Full Structure

Run this to set up everything at once:

```bash
# Create all tier folders
mkdir -p "/Users/frank/X/agentii-kit/specs/003-single-blog/research/external-articles/tier-1-official"
mkdir -p "/Users/frank/X/agentii-kit/specs/003-single-blog/research/external-articles/tier-2-practitioner"
mkdir -p "/Users/frank/X/agentii-kit/specs/003-single-blog/research/external-articles/tier-3-technical"

# Verify structure
tree "/Users/frank/X/agentii-kit/specs/003-single-blog/research/"
```

---

**Status**: Ready for you to download articles ✅
