# Research Articles Setup - Complete & Ready ✅

**Date Completed**: 2025-12-07
**Location**: `/Users/frank/X/agentii-kit/specs/003-single-blog/research/external-articles/`

---

## What Was Set Up

### ✅ Folder Structure Created

```
external-articles/
├── tier-1-official/       ← Official docs from GitHub repos
├── tier-2-practitioner/   ← Blog posts, case studies, founder stories
├── tier-3-technical/      ← Research papers, benchmarks, technical sources
├── ARTICLES-INDEX.md      ← Master tracking document
└── QUICK-START-GUIDE.md   ← How-to guide for saving articles
```

### ✅ Documentation Created (3 Files)

1. **QUICK-START-GUIDE.md** (8.0 KB)
   - Easiest guide to get started
   - 3 methods for saving articles (copy-paste, curl, browser extension)
   - Ready-to-use curl commands for Tier 1 downloads
   - Pro tips and next steps

2. **ARTICLES-INDEX.md** (11 KB)
   - Master tracking document
   - Lists all 18-22 articles needed
   - Shows which section of blog post each supports
   - Progress checklist (0/18 downloaded)
   - Search suggestions for each tier

3. **ARTICLES-ORGANIZATION-GUIDE.md** (9.4 KB)
   - Detailed organizational instructions
   - Directory structure explanation
   - Naming conventions
   - Article template format
   - Evidence sources mapped to blog sections

---

## Where to Save Your Articles

### **Tier 1: Official Sources** (4 articles)
**Path**: `/specs/003-single-blog/research/external-articles/tier-1-official/`

Official documentation and first-party sources:
- `agentii-kit-readme.md` - From GitHub
- `spec-kit-readme.md` - From GitHub
- `pmf-kit-readme.md` - From GitHub
- `blog-tech-kit-readme.md` - From GitHub

**Easiest to download**: Just copy the README from each GitHub repo

---

### **Tier 2: Practitioner Sources** (8-10 articles)
**Path**: `/specs/003-single-blog/research/external-articles/tier-2-practitioner/`

Blogs, case studies, founder experiences:
- Articles from Indie Hackers
- Blog posts from Dev.to, Medium
- Y Combinator posts
- Founder stories and case studies
- Forum discussions on Hacker News

**How to find**: Search the sites listed in ARTICLES-INDEX.md

---

### **Tier 3: Technical & Research** (6-8 articles)
**Path**: `/specs/003-single-blog/research/external-articles/tier-3-technical/`

Research papers, benchmarks, technical sources:
- Development productivity studies
- LLM/AI research papers
- Agile Manifesto
- GitHub adoption statistics
- IEEE or academic standards

**How to find**: Google Scholar, ArXiv, GitHub

---

## How to Use These Articles

### **Step 1: Read the Guides** (5 minutes)
Start with this priority:
1. QUICK-START-GUIDE.md (fastest)
2. ARTICLES-INDEX.md (what to download)
3. ARTICLES-ORGANIZATION-GUIDE.md (detailed help)

### **Step 2: Download Tier 1** (15 minutes)
These are the easiest - just copy GitHub READMEs
- Use the curl commands in QUICK-START-GUIDE.md
- Or copy-paste the README content manually
- Save to `tier-1-official/`

### **Step 3: Download Tier 2** (30-45 minutes)
Search practitioner sources for relevant articles
- Visit Indie Hackers, Dev.to, Medium
- Search for "specification", "planning", "spec-driven"
- Copy 8-10 articles to `tier-2-practitioner/`

### **Step 4: Download Tier 3** (60 minutes)
Find technical/research sources
- Google Scholar, ArXiv for papers
- GitHub for adoption data
- Agile Manifesto (free online)
- Save to `tier-3-technical/`

### **Step 5: Update ARTICLES-INDEX.md**
As you download each article:
- Change ⏳ to ✅ in the tracking table
- Add the date downloaded
- Update % complete

---

## What Each Article Supports

### Your Blog Post Sections

| Section | Articles Needed | Tier |
|---------|-----------------|------|
| **Introduction: Blank Page Problem** | Problem statement, rework costs | T2 + T3 |
| **What is Spec-Driven** | Definition, explanation | T1 |
| **Four-Layer Stack** | Structure diagram, examples | T1 |
| **Spec vs Agile** | Comparison, context | T2 + T3 |
| **Why Specs Matter** | Case studies, metrics | T2 + T3 |
| **Real Example: 6 Weeks** | Founder story proof | T2 |
| **Getting Started** | Templates, how-to | T1 + T2 |
| **Why Future** | AI trends, thought leadership | T2 + T3 |

---

## Quick Reference Commands

### Download Tier 1 Immediately (Copy-Paste)

```bash
# Command 1: Agentii-Kit
curl -s "https://raw.githubusercontent.com/agentii/agentii-kit/main/README.md" > \
  "/Users/frank/X/agentii-kit/specs/003-single-blog/research/external-articles/tier-1-official/agentii-kit-readme.md"

# Command 2: Spec-Kit
curl -s "https://raw.githubusercontent.com/agentii/spec-kit/main/README.md" > \
  "/Users/frank/X/agentii-kit/specs/003-single-blog/research/external-articles/tier-1-official/spec-kit-readme.md"

# Command 3: PMF-Kit
curl -s "https://raw.githubusercontent.com/agentii/pmf-kit/main/README.md" > \
  "/Users/frank/X/agentii-kit/specs/003-single-blog/research/external-articles/tier-1-official/pmf-kit-readme.md"
```

Just paste these into your terminal (one at a time) to download the 3 main READMEs.

---

## Naming Convention

When you save articles, use this format:

```
[tier]-[source]-[topic].md

Examples:
tier-1-official/agentii-kit-readme.md
tier-2-practitioner/indie-hackers-scope-creep.md
tier-3-technical/llm-prompt-engineering-research.md
```

---

## Article Template

When saving articles, add this header:

```markdown
# [Article Title]

**Source**: [URL]
**Date Accessed**: 2025-12-07
**Tier**: [1/2/3]
**Category**: [Official Docs / Blog / Case Study / Research]
**Supports Blog Section**: [Which part does this support?]

---

## Summary
[1-2 sentences]

---

## Key Points
[3-5 bullets for your blog]

---

[Article content below]
```

---

## Progress Tracking

### Current Status

| Tier | Target | Downloaded | Status |
|------|--------|------------|--------|
| **T1: Official** | 4 | 0 | Not started |
| **T2: Practitioner** | 8-10 | 0 | Not started |
| **T3: Technical** | 6-8 | 0 | Not started |
| **TOTAL** | 18-22 | 0 | 0% |

### How to Update
1. Download articles to appropriate tier folder
2. Open ARTICLES-INDEX.md
3. Find the article in the table
4. Change ⏳ to ✅ and add date
5. Update % complete

---

## What Happens Next

### During Phase 3 (SME Review)
The SME will check:
- Are cited articles credible?
- Do articles actually support the claims?
- Any sources missing or outdated?

### During Phase 4 (Copyedit & SEO)
The editor will:
- Add proper citations to blog post
- Ensure all Tier 1 sources are linked
- Verify external links work

### During Phase 5 (Publish)
Marketing will:
- Reference articles in social posts
- Use quotes/key points for promotion

---

## Files & Paths Quick Reference

```
Main folder:
/Users/frank/X/agentii-kit/specs/003-single-blog/research/external-articles/

Tier 1 (Official):
/Users/frank/X/agentii-kit/specs/003-single-blog/research/external-articles/tier-1-official/

Tier 2 (Practitioner):
/Users/frank/X/agentii-kit/specs/003-single-blog/research/external-articles/tier-2-practitioner/

Tier 3 (Technical):
/Users/frank/X/agentii-kit/specs/003-single-blog/research/external-articles/tier-3-technical/

Master Index:
/Users/frank/X/agentii-kit/specs/003-single-blog/research/external-articles/ARTICLES-INDEX.md

How-To Guide:
/Users/frank/X/agentii-kit/specs/003-single-blog/research/external-articles/QUICK-START-GUIDE.md
```

---

## You're All Set! 🎉

Everything is ready for you to start downloading articles.

**Recommended order**:
1. Read QUICK-START-GUIDE.md (5 min)
2. Run curl commands for Tier 1 (15 min)
3. Search and download Tier 2 (30-45 min)
4. Find and save Tier 3 (60 min)
5. Update ARTICLES-INDEX.md with completion status

**Total time to complete**: ~2 hours for a fully researched blog post with 18-22 source articles.

---

**Status**: ✅ **SETUP COMPLETE - READY FOR ARTICLE DOWNLOADS**

Start with QUICK-START-GUIDE.md whenever you're ready!
