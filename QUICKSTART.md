# Quickstart Guide - Agentii Blog & Docs

Welcome to the Agentii Blog & Docs development environment. This guide will help you get started with creating and publishing content.

## 📋 Table of Contents

1. [Setup](#setup)
2. [Project Structure](#project-structure)
3. [Writing Blog Posts](#writing-blog-posts)
4. [Writing Documentation](#writing-documentation)
5. [Local Development](#local-development)
6. [Validation & Testing](#validation--testing)
7. [Publishing](#publishing)
8. [Troubleshooting](#troubleshooting)

---

## 🚀 Setup

### Prerequisites

- Node.js 18+ ([Download](https://nodejs.org/))
- pnpm 8+ (`npm install -g pnpm`)
- Git
- Text editor (VS Code, Vim, etc.)

### Initial Setup

```bash
# Navigate to the frontend-blog directory
cd frontend-blog

# Install dependencies
pnpm install

# Verify installation
pnpm dev
```

The development server will start at `http://localhost:3000`.

### First Time Setup Checklist

- [ ] Clone the repository
- [ ] Navigate to `frontend-blog` directory
- [ ] Run `pnpm install`
- [ ] Run `pnpm dev`
- [ ] Open `http://localhost:3000` in your browser
- [ ] See the homepage load successfully

---

## 📁 Project Structure

```
frontend-blog/
├── app/                          # Next.js App Router
│   ├── blog/                     # Blog routes
│   │   ├── layout.tsx
│   │   ├── page.mdx             # Blog homepage
│   │   ├── posts/               # Individual posts
│   │   ├── tags/                # Tag archive pages
│   │   └── rss.xml/             # RSS feed
│   ├── docs/                     # Docs routes
│   │   └── [...slug]/            # Dynamic doc pages
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Landing page
│   └── globals.css              # Global styles
├── content/
│   ├── blog/                     # Blog post content
│   │   ├── 2025/
│   │   │   ├── 11/              # Date-based organization
│   │   │   │   └── post-slug.mdx
│   │   │   └── 10/
│   │   ├── authors/             # Author profiles
│   │   └── _meta.json           # Navigation config
│   ├── docs/                     # Documentation
│   │   ├── getting-started/
│   │   ├── concepts/
│   │   ├── intelligence-hub/
│   │   ├── agent-workbench/
│   │   ├── agents/
│   │   └── _meta.json
│   └── authors/                 # Author JSON profiles
├── components/                   # Reusable React components
├── lib/                         # Utility functions
│   ├── schemas/                 # Validation schemas
│   ├── validation/              # Validation utilities
│   ├── metadata/                # SEO metadata helpers
│   └── content/                 # Content helpers
├── public/                      # Static assets
│   ├── images/
│   ├── og-images/              # Social share images
│   └── favicons/
├── scripts/                     # Build and utility scripts
│   ├── validate-frontmatter.ts
│   ├── check-links.ts
│   ├── generate-sitemap.ts
│   └── generate-rss.ts
├── styles/                      # Global and component styles
├── next.config.js              # Next.js configuration
├── tailwind.config.js          # Tailwind CSS config
├── tsconfig.json               # TypeScript config
├── theme.config.jsx            # Nextra theme config
└── package.json
```

---

## ✍️ Writing Blog Posts

### Creating a New Blog Post

1. **Create the file in the correct date directory:**

```bash
# For November 2025
mkdir -p content/blog/2025/11
touch content/blog/2025/11/my-post-slug.mdx
```

2. **Add frontmatter metadata:**

```yaml
---
title: "Your Post Title (Max 60 Characters)"
description: "Your meta description (150-160 characters for optimal SEO)"
date: 2025-11-23
author: Agentii Team
tags: [tag1, tag2, tag3]
cover: /images/blog/2025/11/cover-image.png
featured: false
draft: true
---
```

3. **Write your content in Markdown:**

```markdown
# Your Post Title

Your content here...

## Section 2

More content...

### Code Examples

\`\`\`typescript
const example = "code"
\`\`\`

### Tables

| Column 1 | Column 2 |
|----------|----------|
| Value 1  | Value 2  |
```

### Frontmatter Reference

| Field | Required | Type | Notes |
|-------|----------|------|-------|
| `title` | ✅ | string | Max 60 chars for SEO |
| `description` | ✅ | string | 150-160 chars for meta description |
| `date` | ✅ | date | Format: YYYY-MM-DD |
| `author` | ✅ | string | Name of author |
| `tags` | ✅ | array | 1-5 lowercase-hyphenated tags |
| `cover` | ❌ | string | Path to cover image |
| `featured` | ❌ | boolean | Show in featured section (default: false) |
| `draft` | ❌ | boolean | Hide from production (default: false) |
| `slug` | ❌ | string | URL slug (auto-generated if not provided) |
| `updatedAt` | ❌ | date | Last update date |

### Blog Post Best Practices

✅ **Do:**
- Use descriptive titles (60 chars max)
- Write a compelling meta description (150-160 chars)
- Use proper heading hierarchy (H1 → H2 → H3)
- Include alt text on all images
- Add 1-5 relevant tags per post
- Link to related documentation
- Set `draft: true` until ready to publish

❌ **Don't:**
- Skip frontmatter fields
- Use more than 5 tags
- Create URLs with spaces (use hyphens)
- Forget to add cover images
- Write meta descriptions over 160 chars
- Mix heading levels (e.g., H1 → H3)

### Example Blog Post

```markdown
---
title: "Introducing Matrix 2.0: AI-Driven Analysis"
description: "Discover how Matrix 2.0 transforms complex financial data into actionable insights with advanced agent orchestration."
date: 2025-11-20
author: Agentii Team
tags: [product, ai, financial-analysis]
cover: /images/blog/2025/11/matrix-2.0-cover.png
featured: true
draft: false
---

# Introducing Matrix 2.0

We're excited to announce the release of Matrix 2.0...

## Key Features

- Advanced agent orchestration
- Real-time streaming responses
- Financial document analysis

### Real-World Example

\`\`\`python
# Query financial documents
response = agent.analyze_document(
    document=earnings_report,
    query="What are key financial metrics?"
)
\`\`\`

## Learn More

- [Documentation](/docs/getting-started)
- [API Reference](/docs/api)
```

---

## 📚 Writing Documentation

### Creating a New Doc Page

1. **Create the file in the appropriate section:**

```bash
# For getting-started section
touch content/docs/getting-started/quickstart.mdx
```

2. **Add frontmatter:**

```yaml
---
title: "Quick Start Guide"
description: "Get started with Agentii in 5 minutes"
---
```

3. **Write documentation content:**

```markdown
# Quick Start Guide

## Step 1: Create a Project

\`\`\`
1. Log in to Agentii
2. Click "New Project"
3. Enter project name
\`\`\`

## Step 2: Configure Agents

[Content here...]

## Code Examples

\`\`\`javascript
const agent = new Agent({
  role: 'analyst',
  capabilities: ['document-analysis']
})
\`\`\`

## Tables for Financial Data

| Metric | Value |
|--------|-------|
| P/E Ratio | 15.2 |
| ROE | 12.5% |
```

### Documentation Best Practices

✅ **Do:**
- Use clear headings and hierarchies
- Include code examples with language specified
- Add tables for structured data
- Use callouts for important notes
- Link between related docs
- Include screenshots/diagrams when helpful

❌ **Don't:**
- Write very long pages (break into sections)
- Skip code syntax highlighting
- Use vague language
- Forget to update docs when features change

### Available Code Languages

- `javascript`, `js`
- `typescript`, `ts`
- `python`, `py`
- `sql`
- `bash`, `shell`
- `json`
- `yaml`, `yml`
- `html`, `xml`
- `css`, `scss`
- `markdown`, `md`

---

## 💻 Local Development

### Running the Development Server

```bash
cd frontend-blog
pnpm dev
```

Visit `http://localhost:3000` to see your changes. The development server supports hot module reloading (HMR) - changes are reflected automatically.

### Creating a Blog Post (Development Workflow)

1. **Create your post file:**

```bash
touch content/blog/2025/11/my-new-post.mdx
```

2. **Add content with `draft: true`:**

```yaml
---
title: "My New Post"
description: "Post description"
date: 2025-11-23
author: Your Name
tags: [tag1, tag2]
draft: true
---

Content here...
```

3. **View in development:**
   - Navigate to `http://localhost:3000/blog/posts/my-new-post`
   - Changes auto-refresh as you save

4. **When ready, change `draft: false` and save**

### Creating a Documentation Page (Development Workflow)

1. **Create your doc file:**

```bash
mkdir -p content/docs/my-section
touch content/docs/my-section/my-doc.mdx
```

2. **Add content:**

```yaml
---
title: "My Documentation"
description: "Description"
---

Content here...
```

3. **Update `_meta.json` for sidebar navigation:**

```json
{
  "my-section": {
    "title": "My Section",
    "type": "folder"
  }
}
```

4. **View in development:**
   - Navigate to `http://localhost:3000/docs/my-section/my-doc`

---

## ✅ Validation & Testing

### Validate Frontmatter

```bash
pnpm validate-frontmatter
```

This checks all `.mdx` files for:
- Required fields (title, description, date, author, tags)
- Field formats (date is valid, title length, etc.)
- Tag format (lowercase-hyphenated)

### Check Links

```bash
pnpm check-links
```

Validates all internal and external links in content.

### Type Check

```bash
pnpm type-check
```

Checks TypeScript types throughout the project.

### Run All Checks Before Publishing

```bash
pnpm validate-frontmatter
pnpm check-links
pnpm type-check
pnpm lint
```

---

## 🚀 Publishing

### Publishing Workflow (Git-Based)

Since Agentii blog is admin-only, all publishing happens through Git PRs:

1. **Create a feature branch:**

```bash
git checkout -b blog/new-post-title
```

2. **Make your changes:**

```bash
# Add your post or doc changes
git add content/blog/2025/11/my-post.mdx
git add content/docs/my-section/my-doc.mdx
```

3. **Run validation:**

```bash
pnpm validate-frontmatter
pnpm check-links
pnpm type-check
```

4. **Commit your changes:**

```bash
git commit -m "Add blog post: My Post Title"
```

5. **Push to remote:**

```bash
git push origin blog/new-post-title
```

6. **Create a Pull Request:**
   - Go to GitHub repository
   - Create PR from your branch to `main`
   - Add description of changes
   - Request review from team

7. **Review & Merge:**
   - Team reviews content
   - Vercel creates automatic preview deployment
   - After approval, merge to `main`
   - Vercel automatically deploys to production

### Production Build

```bash
pnpm build
```

Generates static HTML/CSS/JS files in `.next/out/` directory for deployment.

### Generate Search Index (post-build)

```bash
pnpm postbuild
```

Automatically generates Pagefind search index after build.

---

## 🆘 Troubleshooting

### Issue: Development server won't start

**Solution:**
```bash
# Clear cache and reinstall
rm -rf node_modules .next
pnpm install
pnpm dev
```

### Issue: Changes not reflected in browser

**Solution:**
```bash
# Hard refresh browser (Cmd+Shift+R or Ctrl+Shift+R)
# Or clear Next.js cache
rm -rf .next
pnpm dev
```

### Issue: Frontmatter validation fails

**Solution:**
```bash
# Check the error message
pnpm validate-frontmatter

# Fix issues:
# - title: 10-60 characters
# - description: 150-160 characters
# - date: YYYY-MM-DD format
# - tags: lowercase-hyphenated, 1-5 tags
# - author: must exist in content/authors/
```

### Issue: Images not loading

**Solution:**
```bash
# Ensure images are in /public/images/
# Use correct path in markdown: /images/blog/2025/11/image.png
# Check file exists: ls public/images/blog/2025/11/
```

### Issue: Build takes too long

**Solution:**
- Optimize images (< 200KB each)
- Remove unused dependencies
- Check for large files in content/

---

## 📝 Common Tasks

### Add a new author

1. Create `content/authors/author-name.json`:

```json
{
  "name": "Author Name",
  "bio": "Brief bio (max 160 chars)",
  "avatar": "/images/authors/author-name.jpg",
  "role": "Role/Title",
  "social": {
    "twitter": "@handle",
    "linkedin": "profile-url",
    "github": "github-username"
  }
}
```

2. Reference in blog post frontmatter: `author: Author Name`

### Update navigation

Edit `content/blog/_meta.json` or `content/docs/_meta.json`:

```json
{
  "index": "Blog",
  "my-section": {
    "title": "My Section Title",
    "type": "folder"
  }
}
```

### Add social sharing

Use the built-in Nextra social share buttons - no configuration needed!

---

## 📚 Additional Resources

- [Nextra Documentation](https://nextra.site/)
- [MDX Syntax Guide](https://mdxjs.com/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [GitHub Markdown](https://guides.github.com/features/mastering-markdown/)

---

**Questions?** Open an issue on [GitHub](https://github.com/agentii/agentii) or contact the development team.

**Ready to get started?**
1. Create your first blog post or doc
2. Run `pnpm validate-frontmatter`
3. Run `pnpm dev` to see it locally
4. Create a PR and get it reviewed!

---

**Last Updated**: 2025-11-23
**Version**: 1.0.0
