# Agentii Blog & Documentation

A powerful, SEO-optimized blog and documentation platform built with **Nextra**, **Next.js 14**, and **Tailwind CSS**.

## 🎯 Overview

This project provides a separate Next.js application for Agentii's blog and documentation, deployed at `blog.agentii.ai` and `docs.agentii.ai`. It features:

- **🚀 Static Site Generation (SSG)** - Fast, secure, and SEO-optimized
- **📝 Markdown-First Authoring** - Write content in simple Markdown with YAML frontmatter
- **🔍 Full-Text Search** - Client-side search powered by Pagefind
- **📱 Responsive Design** - Works perfectly on all devices
- **🎨 Dark Theme** - Modern black/gradient design matching Agentii brand
- **📊 Admin-Only Publishing** - Secure Git-based workflow with PR reviews
- **🔗 RSS Feed** - Automatic RSS feed generation for blog posts
- **🌍 SEO Optimized** - Comprehensive meta tags, structured data, and sitemaps

## 📋 Architecture

### Design: Option B - Separate Next.js Application

This project is intentionally separated from the main Vite frontend to:
- Avoid framework conflicts (Vite vs Next.js)
- Leverage Nextra's full feature set
- Provide optimal static site generation for SEO
- Enable independent development and deployment
- Keep content (blog/docs) separate from application (main frontend)

### Technology Stack

| Component | Technology | Version |
|-----------|-----------|---------|
| Framework | Next.js | ^14.0.0 |
| React | React | ^18.2.0 |
| Content | Nextra | ^4.6.0 |
| Styling | Tailwind CSS | ^3.3.0 |
| Search | Pagefind | ^1.0.0 |
| MDX | @mdx-js | ^3.0.0 |
| Syntax Highlighting | rehype-highlight | ^6.1.0 |
| Language | TypeScript | ^5.3.0 |
| Package Manager | pnpm | ^8.0.0 |

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ ([Download](https://nodejs.org/))
- pnpm 8+ (`npm install -g pnpm`)
- Git

### Setup

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Open http://localhost:3000 in your browser
```

### Development Commands

```bash
pnpm dev              # Start development server
pnpm build            # Build for production
pnpm start            # Run production build
pnpm lint             # Run ESLint
pnpm type-check       # Check TypeScript types
pnpm validate-frontmatter  # Validate all blog/doc frontmatter
pnpm check-links      # Check for broken links
pnpm generate-sitemap # Generate XML sitemap (runs post-build)
```

## 📁 Project Structure

```
frontend-blog/
├── app/                    # Next.js App Router
│   ├── blog/              # Blog routes (powered by Nextra)
│   ├── docs/              # Documentation routes (powered by Nextra)
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Landing page
│   └── globals.css        # Global styles
├── content/
│   ├── blog/              # Blog post content (Markdown + YAML)
│   │   ├── 2025/11/       # Date-based organization
│   │   │   └── *.mdx      # Blog posts
│   │   └── authors/       # Author profiles (JSON)
│   ├── docs/              # Documentation (Markdown + YAML)
│   │   ├── getting-started/
│   │   ├── concepts/
│   │   ├── intelligence-hub/
│   │   ├── agent-workbench/
│   │   ├── agents/
│   │   └── ...
│   └── _meta.json         # Navigation configuration
├── components/            # Reusable React components
├── lib/                  # Utility functions and helpers
│   ├── schemas/          # Validation schemas
│   ├── validation/       # Validation utilities
│   ├── metadata/         # SEO metadata helpers
│   └── content/          # Content processing helpers
├── public/               # Static assets
│   ├── images/           # Blog/doc images
│   └── og-images/        # Social share preview images
├── scripts/              # Build and utility scripts
│   ├── validate-frontmatter.ts
│   ├── check-links.ts
│   ├── generate-sitemap.ts
│   └── generate-rss.ts
├── styles/               # Global and component styles
├── next.config.js        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
├── theme.config.jsx      # Nextra theme configuration
├── package.json          # Dependencies and scripts
├── QUICKSTART.md         # Content author guide
└── README.md             # This file
```

## ✍️ Creating Content

### Blog Posts

Create a new blog post in `content/blog/YYYY/MM/slug.mdx`:

```markdown
---
title: "Your Post Title (Max 60 chars)"
description: "Meta description (150-160 chars)"
date: 2025-11-23
author: Agentii Team
tags: [tag1, tag2, tag3]
cover: /images/blog/2025/11/cover.png
featured: false
draft: true
---

# Your Post Title

Your content here...
```

### Documentation

Create a new doc in `content/docs/section/page.mdx`:

```markdown
---
title: "Documentation Title"
description: "Page description"
---

# Documentation Title

Your content here...
```

**For detailed instructions, see [QUICKSTART.md](./QUICKSTART.md)**

## 🔍 SEO Features

This project prioritizes SEO (FR-2 - Highest Priority):

- ✅ **Open Graph Meta Tags** - Social sharing preview optimization
- ✅ **Twitter Card Tags** - Twitter-specific metadata
- ✅ **JSON-LD Structured Data** - BlogPosting schema for search engines
- ✅ **XML Sitemap** - Auto-generated at `/sitemap.xml`
- ✅ **Robots.txt** - Search engine crawl directives
- ✅ **Canonical URLs** - Duplicate content prevention
- ✅ **Core Web Vitals** - Optimized for LCP <2.5s, FID <100ms, CLS <0.1
- ✅ **Image Alt Text** - Accessible and SEO-friendly images
- ✅ **Heading Hierarchy** - Proper H1→H2→H3 structure
- ✅ **Meta Descriptions** - 150-160 character descriptions

## 🔐 Admin-Only Publishing

The blog uses a **Git-based publishing workflow**:

1. Content authors create/edit files in feature branches
2. Author runs `pnpm validate-frontmatter` and `pnpm check-links`
3. Author creates PR for team review
4. Vercel creates automatic preview deployment
5. Team reviews content and approves PR
6. Merge to `main` triggers automatic production deployment

**No web UI for publishing** - all changes go through code review.

## 📚 Documentation

- [Quickstart Guide](./QUICKSTART.md) - For content authors
- [Nextra Docs](https://nextra.site/) - Framework documentation
- [Next.js Docs](https://nextjs.org/docs) - Next.js 14 reference
- [MDX Docs](https://mdxjs.com/) - Markdown with React components

## 🧪 Validation & Testing

Before publishing, validate your content:

```bash
# Check frontmatter (title, description, date, author, tags)
pnpm validate-frontmatter

# Check for broken links
pnpm check-links

# Check TypeScript types
pnpm type-check

# Run linter
pnpm lint

# Run all checks
pnpm validate-frontmatter && pnpm check-links && pnpm type-check && pnpm lint
```

## 📊 Performance Targets

- **Lighthouse Score**: ≥90 on all pages
- **Largest Contentful Paint (LCP)**: <2.5s
- **First Input Delay (FID)**: <100ms
- **Cumulative Layout Shift (CLS)**: <0.1
- **Build Time**: <60 seconds
- **Search Index**: <10 seconds

## 📈 Analytics

This project integrates **Plausible Analytics** for privacy-first, GDPR-compliant analytics:

- No cookies required
- No user tracking
- Respectful analytics
- See [Plausible](https://plausible.io) for more info

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Deploy to Vercel
vercel

# Deploy to production
vercel --prod
```

### Manual Deployment

```bash
# Build for production
pnpm build

# Output is in .next/out/ directory
# Deploy contents to any static host
```

### Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://blog.agentii.ai
```

## 📦 Key Dependencies

- **nextra** - Content framework
- **nextra-theme-blog** - Blog theme
- **nextra-theme-docs** - Documentation theme
- **pagefind** - Client-side search
- **rss** - RSS feed generation
- **gray-matter** - Frontmatter parsing
- **tailwindcss** - Styling
- **rehype-highlight** - Syntax highlighting
- **remark-gfm** - GitHub Flavored Markdown

## 🤝 Contributing

### Adding Content

1. Fork and clone the repository
2. Create feature branch: `git checkout -b blog/my-post`
3. Add your content in `content/blog/` or `content/docs/`
4. Validate: `pnpm validate-frontmatter && pnpm check-links`
5. Commit: `git commit -m "Add: Post title"`
6. Push: `git push origin blog/my-post`
7. Create Pull Request on GitHub

### Code Changes

1. Create feature branch: `git checkout -b feat/feature-name`
2. Make changes
3. Run validation: `pnpm validate-frontmatter && pnpm type-check && pnpm lint`
4. Test locally: `pnpm dev`
5. Commit and push
6. Create Pull Request

## 🐛 Troubleshooting

**Q: Development server won't start**
```bash
rm -rf node_modules .next && pnpm install && pnpm dev
```

**Q: Changes not appearing**
- Hard refresh browser (Cmd+Shift+R or Ctrl+Shift+R)
- Restart development server

**Q: Frontmatter validation fails**
- Check title is 10-60 characters
- Check description is 150-160 characters
- Check date format is YYYY-MM-DD
- Check tags are lowercase-hyphenated

**Q: Images not loading**
- Place images in `/public/images/`
- Use path: `/images/blog/2025/11/image.png`

See [QUICKSTART.md](./QUICKSTART.md) for more troubleshooting.

## 📝 Specifications

- **Feature Specification**: [specs/4-nextra-blogs-docs/spec.md](../specs/4-nextra-blogs-docs/spec.md)
- **Implementation Plan**: [specs/4-nextra-blogs-docs/plan.md](../specs/4-nextra-blogs-docs/plan.md)
- **Task Breakdown**: [specs/4-nextra-blogs-docs/tasks.md](../specs/4-nextra-blogs-docs/tasks.md)

## 📅 Roadmap

### Phase 1: Setup & Infrastructure ✅
- [x] Initialize Next.js 14 project
- [x] Install and configure Nextra
- [x] Setup Tailwind CSS with design tokens
- [x] Create project structure
- [x] Create quickstart guide

### Phase 2: Foundational Components ⏳
- [ ] Create blog and docs layouts
- [ ] Implement shared components
- [ ] Setup validation utilities

### Phase 3: Blog Features ⏳
- [ ] Blog homepage and post pages
- [ ] Tag system and archives
- [ ] RSS feed generation
- [ ] Search functionality

### Phase 4: Reader Features ⏳
- [ ] Full-text search
- [ ] Social sharing
- [ ] Navigation improvements

### Phase 5: Documentation ⏳
- [ ] Docs structure and navigation
- [ ] Code highlighting
- [ ] Tables for financial data

### Phase 6: SEO & Analytics ⏳
- [ ] Meta tags and structured data
- [ ] Sitemap and robots.txt
- [ ] Analytics integration
- [ ] Performance optimization

## 📄 License

© 2025 Agentii AI. All rights reserved.

## 👥 Support

- **Issues**: [GitHub Issues](https://github.com/agentii/agentii/issues)
- **Discussions**: [GitHub Discussions](https://github.com/agentii/agentii/discussions)
- **Email**: [support@agentii.ai](mailto:support@agentii.ai)

---

**Built with ❤️ by the Agentii Team**

**Last Updated**: 2025-11-23 | **Version**: 1.0.0
