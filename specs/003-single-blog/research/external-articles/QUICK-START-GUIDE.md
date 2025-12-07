# Quick Guide: How to Save Articles to Local Folder

**Location**: `/Users/frank/X/agentii-kit/specs/003-single-blog/research/external-articles/`

---

## The Setup (Already Done ✅)

Your folder structure is now ready:

```
external-articles/
├── tier-1-official/           ← Official docs (GitHub, official sources)
├── tier-2-practitioner/       ← Blogs, case studies, forums
├── tier-3-technical/          ← Research papers, benchmarks, technical
└── ARTICLES-INDEX.md          ← Master tracking index (read first!)
```

---

## 3 Easy Ways to Save Articles

### **Method 1: Copy-Paste (Easiest, 1 minute per article)**

Perfect for: Website articles, blogs, GitHub READMEs

**Steps**:
1. Open article in your browser
2. Select all content (⌘+A)
3. Copy (⌘+C)
4. Open VS Code or text editor
5. Create new file: `name-of-article.md`
6. Paste (⌘+V) the content
7. Add header with source info (see template below)
8. Save to correct tier folder

**Example**:
```bash
# Create file in tier-1-official
nano /Users/frank/X/agentii-kit/specs/003-single-blog/research/external-articles/tier-1-official/agentii-kit-readme.md
```

---

### **Method 2: Use `curl` Command (For Terminal Users)**

Perfect for: Quick downloads, GitHub raw files, direct URLs

**Steps**:
1. Copy the URL of the article
2. Run this command in terminal:

```bash
# Example: Download from URL
curl -s "https://raw.githubusercontent.com/agentii/agentii-kit/main/README.md" > \
  "/Users/frank/X/agentii-kit/specs/003-single-blog/research/external-articles/tier-1-official/agentii-kit-readme.md"
```

**Formula**:
```bash
curl -s "[ARTICLE_URL]" > "/Users/frank/X/agentii-kit/specs/003-single-blog/research/external-articles/[TIER]/[filename].md"
```

**Common URLs**:
- GitHub raw content: `https://raw.githubusercontent.com/[user]/[repo]/main/[file]`
- Direct links: Any `.md` or `.txt` file URL

---

### **Method 3: Browser Extension (Most Efficient)**

Perfect for: Saving full web pages as markdown

**Options**:
- **Markdown Here** (Chrome/Firefox)
- **Web Clipper** (OneNote integration)
- **Notion Web Clipper** (if using Notion)

**How**:
1. Install extension
2. Click extension icon on article page
3. Choose "Save as Markdown"
4. Copy to your tier folder

---

## Standard Article Header Template

Add this to the top of every article you save:

```markdown
# [Article Title]

**Source**: [Full URL or publication name]
**Date Accessed**: 2025-12-07
**Author**: [Author if known, or publication]
**Tier**: [Tier 1 / Tier 2 / Tier 3]
**Category**: [Official Docs / Blog Post / Case Study / Research / Forum Discussion]
**Blog Section**: [Which part of your blog does this support?]

---

## Summary

[1-2 sentences: What is this article about?]

---

## Key Points for Your Blog

[3-5 bullet points on how this supports your blog post]

---

## Content

[Full article text below]

---

[Article content starts here...]
```

---

## Quick Links to Start Downloading Today

### **Tier 1 (Easiest - Do These First!) ⭐**

```bash
# 1. Agentii-Kit README
curl -s "https://raw.githubusercontent.com/agentii/agentii-kit/main/README.md" > \
  "/Users/frank/X/agentii-kit/specs/003-single-blog/research/external-articles/tier-1-official/agentii-kit-readme.md"

# 2. Spec-Kit README
curl -s "https://raw.githubusercontent.com/agentii/spec-kit/main/README.md" > \
  "/Users/frank/X/agentii-kit/specs/003-single-blog/research/external-articles/tier-1-official/spec-kit-readme.md"

# 3. PMF-Kit README
curl -s "https://raw.githubusercontent.com/agentii/pmf-kit/main/README.md" > \
  "/Users/frank/X/agentii-kit/specs/003-single-blog/research/external-articles/tier-1-official/pmf-kit-readme.md"
```

Just copy-paste these into your terminal (one at a time) to download official docs.

---

### **Tier 2 (Search These - 30 minutes)**

Go to these sites and download articles that match:

1. **Indie Hackers** https://www.indiehackers.com
   - Search: "specification planning"
   - Search: "scope creep"
   - Copy article text → save as `.md`

2. **Y Combinator Blog** https://blog.ycombinator.com
   - Search: "planning requirements"
   - Search: "product development"
   - Copy → save

3. **Dev.to** https://dev.to
   - Search: "spec-driven development"
   - Search: "specification first"
   - Copy → save

4. **Medium** https://medium.com
   - Search: "specification first development"
   - Search: "founder planning tools"
   - Copy → save

**Naming example**: `tier-2-practitioner/indie-hackers-scope-creep.md`

---

### **Tier 3 (Research - 1 hour)**

1. **Agile Manifesto** (free, authoritative)
   ```bash
   curl -s "https://agilemanifesto.org/" | tee \
     "/Users/frank/X/agentii-kit/specs/003-single-blog/research/external-articles/tier-3-technical/agile-manifesto.md"
   ```

2. **Google Scholar** https://scholar.google.com
   - Search: "specification software development"
   - Download PDFs or copy text
   - Save to `tier-3-technical/`

3. **GitHub Stats** (DIY - get star counts)
   - Agentii-Kit: https://github.com/agentii/agentii-kit
   - Spec-Kit: https://github.com/agentii/spec-kit
   - PMF-Kit: https://github.com/agentii/pmf-kit
   - Create file documenting adoption/stars

---

## Tracking Your Progress

After downloading each article:

1. **Update the master index**: `/specs/003-single-blog/research/external-articles/ARTICLES-INDEX.md`
   - Change ⏳ to ✅ for downloaded articles
   - Add date downloaded

2. **Example update**:
   ```markdown
   | 1 | Agentii-Kit README | GitHub | `tier-1-official/agentii-kit-readme.md` | Four-Layer Stack | ✅ 2025-12-07 |
   ```

3. **Track in the table** which blog section each article supports

---

## Folder Structure After Downloading

After you finish, it should look like:

```
external-articles/
├── tier-1-official/
│   ├── agentii-kit-readme.md
│   ├── spec-kit-readme.md
│   ├── pmf-kit-readme.md
│   └── blog-tech-kit-readme.md
│
├── tier-2-practitioner/
│   ├── indie-hackers-scope-creep.md
│   ├── founder-story-6-week-mvp.md
│   ├── agile-vs-specs-comparison.md
│   └── [other practitioner articles].md
│
├── tier-3-technical/
│   ├── agile-manifesto.md
│   ├── llm-prompt-engineering-research.md
│   └── [other technical articles].md
│
└── ARTICLES-INDEX.md  ← Master tracking document
```

---

## Pro Tips

### **Tip 1: Save Time with Bookmarks**
Create a bookmark folder called "Blog Research - Post 001" with 15-20 URLs to research. Then work through them systematically.

### **Tip 2: Use VS Code Multi-Select**
In VS Code, you can open multiple files side-by-side. Paste articles into tabs, then save all at once.

### **Tip 3: Add Frontmatter in Batch**
After downloading all articles, add the header template to each file using Find & Replace:
1. Find: `^` (start of line)
2. Replace: `[Paste header template]`

### **Tip 4: Search as You Go**
As you download articles, note which ones support which blog sections in the ARTICLES-INDEX.md. This will help during the SME review phase.

### **Tip 5: Keep URLs Safe**
Always include the full source URL in the header. This helps if you need to revisit the original source for verification.

---

## Next Steps

1. **Today**: Download Tier 1 articles (4 files, 10-15 minutes)
   ```bash
   # Run the three curl commands above
   ```

2. **Tomorrow**: Search Tier 2 (blog posts, case studies, 30 minutes)
   - Visit Indie Hackers, Dev.to, Medium
   - Copy articles to `tier-2-practitioner/`

3. **Later**: Download Tier 3 (research, benchmarks, 1 hour)
   - Google Scholar, ArXiv
   - GitHub stats
   - Agile Manifesto

4. **Final**: Update ARTICLES-INDEX.md with completion status

---

## Questions?

- Where are my articles saved? `/specs/003-single-blog/research/external-articles/`
- How do I name files? Use hyphens, lowercase, descriptive: `agentii-kit-readme.md`
- Which tier for X article? Check ARTICLES-INDEX.md for guidance
- Can I reorganize? Yes! All files are organized by tier, rename as needed

**Ready to download?** Start with Tier 1 (easiest) using the curl commands above!
