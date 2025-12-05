<div align="center">
  <h1>🎯 agentii-kit</h1>
  <h3><em>Curated Spec-Kits for AI Agent Workflows</em></h3>
</div>

<p align="center">
  <strong>An open-source ecosystem of production-ready specification templates that power AI coding agents like Claude Code, Cursor, and Windsurf.</strong>
</p>

<p align="center">
  <a href="https://github.com/agentii-ai/agentii-kit/stargazers"><img src="https://img.shields.io/github/stars/agentii-ai/agentii-kit?style=social" alt="GitHub stars"/></a>
  <a href="https://github.com/agentii-ai/agentii-kit/blob/main/LICENSE"><img src="https://img.shields.io/github/license/agentii-ai/agentii-kit" alt="License"/></a>
  <a href="https://kits.agentii.ai"><img src="https://img.shields.io/badge/website-kits.agentii.ai-blue" alt="Website"/></a>
  <a href="https://x.com/agentii_ai"><img src="https://img.shields.io/badge/Twitter-@agentii__ai-1DA1F2" alt="Twitter"/></a>
</p>

---

## 📖 Table of Contents

- [What is agentii-kit?](#-what-is-agentii-kit)
- [Spec-Driven Development](#-spec-driven-development)
- [The 4-File Architecture](#-the-4-file-architecture)
- [Featured Kits](#-featured-kits)
- [Website Features](#-website-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Contributing](#-contributing)
- [Roadmap](#-roadmap)
- [Acknowledgements](#-acknowledgements)
- [License](#-license)

---

## 🎯 What is agentii-kit?

**agentii-kit** is an open-source ecosystem built on **Spec-Driven Development (SDD)**—a methodology that makes specifications executable, not just documentation. We provide curated, battle-tested specification templates (called "kits") that empower:

- **Developers** to build high-quality software faster
- **Product Managers** to define features and find Product-Market Fit
- **Marketers** to run structured campaigns and growth experiments
- **Founders** to systematically launch and iterate on products
- **Teams** across legal, finance, design, and operations

Whether you're building with **Claude Code**, **Cursor**, **Windsurf**, or other AI coding agents—agentii-kit provides the structure you need to move from "vibe coding" to **predictable, repeatable outcomes**.

### Why Spec-Kits?

Traditional AI interactions are **chat-based improvisation**—you ask, the AI guesses. Spec-Driven Development flips this:

- **No more blank page problem**: Start with proven templates
- **AI thinks before it acts**: Structured files guide the agent's reasoning
- **Reproducible workflows**: Same spec, same quality results
- **Cross-functional collaboration**: PMs, devs, and marketers speak the same language

---

## 🌱 Spec-Driven Development

Spec-Driven Development (SDD) transforms how humans and AI agents collaborate. Instead of asking an AI to "write an app," you provide a structured set of files that act as the agent's **memory**, **constraints**, and **roadmap**.

### The Core Insight

The mechanism underlying SDD is **domain-agnostic**. It's essentially a standardized prompt-chaining architecture. By replacing the *content* of specification files while keeping the *structure*, we can create specialized "Operating Systems" for virtually any knowledge work—from launching a SaaS product to managing a marketing campaign.

### The Workflow

```
┌─────────────────────────────────────────────────────────────────┐
│                    SPEC-DRIVEN WORKFLOW                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  /specify  →  /clarify  →  /plan  →  /tasks  →  /implement     │
│      │           │          │          │            │          │
│      ▼           ▼          ▼          ▼            ▼          │
│  spec.md   clarifications  plan.md  tasks.md   execution       │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

1. **`/specify`** — Define what you want to build (requirements, user stories)
2. **`/clarify`** — Resolve ambiguities before planning
3. **`/plan`** — Create technical implementation plans
4. **`/tasks`** — Generate actionable, checkable task lists
5. **`/implement`** — Execute tasks systematically

---

## 📁 The 4-File Architecture

Every agentii-kit uses a structured file-based workflow inherited from [spec-kit](https://github.com/github/spec-kit):

| File | Function | Analogous Concept |
|:-----|:---------|:------------------|
| **`constitution.md`** | **The Laws.** Immutable rules, standards, and "don't do this" constraints. | Company Handbook / Brand Guidelines |
| **`spec.md`** | **The Goal.** Detailed requirements for the specific feature or project. | PRD / Brief |
| **`plan.md`** | **The Strategy.** High-level phases and research notes. | Roadmap |
| **`tasks.md`** | **The Execution.** Granular, checkable steps the agent executes. | Jira Tickets / To-Do List |

This architecture forces AI to **"think" before it acts** by requiring it to read and write to specific context files—turning chaotic chat sessions into structured engineering.

---

## 🚀 Featured Kits

### PMF Kit
*Discover and validate product-market fit faster with AI agents.*

- **Domain**: Product Management
- **Focus**: PMF discovery, user research, validation experiments
- **Repository**: [agentii-ai/pmf-kit](https://github.com/agentii-ai/pmf-kit)
- **Commands**: `/pmfkit.constitution`, `/pmfkit.pmf`, `/pmfkit.clarify`, `/pmfkit.plan`, `/pmfkit.tasks`, `/pmfkit.implement`

### Blog-Tech-Kit
*Build authority blogs faster with AI agents.*

- **Domain**: Content Marketing
- **Focus**: Content strategy, editorial workflows, SEO optimization
- **Repository**: [agentii-ai/blog-tech-kit](https://github.com/agentii-ai/blog-tech-kit)
- **Commands**: `/blogkit.constitution`, `/blogkit.specify`, `/blogkit.plan`, `/blogkit.tasks`, `/blogkit.implement`

### Twitter-Init-Kit
*Launch your AI product on Twitter with spec-driven marketing workflows.*

- **Domain**: Social Media Marketing
- **Focus**: Twitter campaigns, growth loops, founder-led content
- **Repository**: [agentii-ai/twitter-init-kit](https://github.com/agentii-ai/twitter-init-kit)
- **Commands**: `/twitterkit.constitution`, `/twitterkit.specify`, `/twitterkit.plan`, `/twitterkit.tasks`, `/twitterkit.implement`

---

## ✨ Website Features

The agentii-kit website ([kits.agentii.ai](https://kits.agentii.ai)) provides:

- **📦 Kits Catalog** — Browse production-ready spec-kits across categories (DEV, PM, MARKETING, LEGAL, FINANCE, DESIGN, OPS)
- **🔍 Search & Filter** — Find the perfect kit for your needs
- **⭐ Featured Kits** — Highlighted top-rated and most popular templates
- **📰 Blog** — Articles, tutorials, and best practices for spec-driven development
- **📊 Recently Updated** — Track the latest kit additions and improvements
- **💬 Testimonials** — Community feedback and success stories
- **🎯 Use Cases** — Real-world applications across industries

---

## 🛠 Tech Stack

This website is built with modern, performant technologies:

| Technology | Purpose |
|:-----------|:--------|
| **[Next.js 14](https://nextjs.org/)** | React framework with App Router |
| **[Nextra 4](https://nextra.site/)** | Documentation & blog framework |
| **[TypeScript](https://www.typescriptlang.org/)** | Type-safe development |
| **[Tailwind CSS](https://tailwindcss.com/)** | Utility-first styling |
| **[Radix UI](https://www.radix-ui.com/)** | Accessible component primitives |
| **[Lucide Icons](https://lucide.dev/)** | Beautiful, consistent icons |
| **[Vercel](https://vercel.com/)** | Deployment & hosting |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/agentii-ai/agentii-kit.git
cd agentii-kit

# Install dependencies
npm install

# Start development server
npm run dev
```

The website will be available at `http://localhost:3002`.

### Available Scripts

| Script | Description |
|:-------|:------------|
| `npm run dev` | Start development server on port 3002 |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run type-check` | Run TypeScript type checking |

---

## 📂 Project Structure

```
agentii-kit/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Landing page
│   ├── kits/              # Kits catalog
│   ├── about/             # About page
│   ├── blog/              # Blog section
│   └── ...
├── components/            # React components
│   ├── HeroSection.tsx    # Landing hero
│   ├── FeaturedKits.tsx   # Featured kits grid
│   ├── KitCard.tsx        # Individual kit card
│   ├── FilterSidebar.tsx  # Category filters
│   └── ...
├── content/               # MDX content (blog posts, docs)
├── data/                  # Data models and mock data
│   └── kits.ts           # Kit definitions and helpers
├── lib/                   # Utility functions
├── public/                # Static assets
├── refs/                  # Reference documentation
├── specs/                 # Feature specifications
├── styles/                # Global styles
└── templates/             # Kit templates
```

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Ways to Contribute

1. **Submit a Kit** — Create a new spec-kit for a domain you're expert in
2. **Improve Documentation** — Help us make the docs clearer
3. **Report Bugs** — Open issues for any problems you find
4. **Suggest Features** — Share ideas for new functionality
5. **Write Blog Posts** — Share your spec-driven development experiences

### Contribution Process

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-kit`)
3. Commit your changes (`git commit -m 'Add amazing-kit'`)
4. Push to the branch (`git push origin feature/amazing-kit`)
5. Open a Pull Request

Please read our [Contributing Guidelines](CONTRIBUTING.md) for more details.

---

## 🗺 Roadmap

We're actively expanding the agentii-kit ecosystem. Here's what's coming:

### In Development 🚧

- **Growth-Hacking-Kit** — Systematic growth experiments, viral loops, and acquisition funnels
- **Sales-Kit** — Outbound sequences, CRM workflows, and deal pipeline management

### Planned 📋

- **SEO-Kit** — Content optimization, keyword strategy, and technical SEO
- **Launch-Kit** — Product Hunt launches, press outreach, and launch day playbooks
- **Edu-Kit** — Course creation, curriculum design, and learning management
- **Legal-Kit** — Contract templates, compliance checklists, and policy generation
- **Startup-Kit** — Incorporation, fundraising, and pitch deck creation
- **Design-System-Kit** — Component libraries, design tokens, and UI documentation

### Future Vision 🔮

- **Kit Marketplace** — Community-contributed kits with ratings and reviews
- **Kit Composer** — Mix and match components from multiple kits
- **Agent Interoperability** — Kits that communicate with each other
- **Enterprise Templates** — Organization-wide constitution management

---

## 🙏 Acknowledgements

### Built On

<a href="https://github.com/github/spec-kit">
  <img src="https://img.shields.io/badge/Built%20on-spec--kit-emerald?style=for-the-badge" alt="Built on spec-kit"/>
</a>

**agentii-kit** is built on the foundations of [**spec-kit**](https://github.com/github/spec-kit) by GitHub—the original Spec-Driven Development toolkit that pioneered file-based AI agent workflows. We are deeply grateful to the spec-kit team for creating this revolutionary approach to human-AI collaboration.

### Created By

<a href="https://agentii.ai">
  <img src="https://img.shields.io/badge/Created%20by-agentii.ai-blue?style=for-the-badge" alt="Created by agentii.ai"/>
</a>

This project is developed and maintained by [**agentii.ai**](https://agentii.ai)—the first agentic-native intelligence platform built for institutional investors. We believe in open-source and giving back to the AI developer community.

### Website Framework

<a href="https://github.com/shuding/nextra">
  <img src="https://img.shields.io/badge/Powered%20by-Nextra-purple?style=for-the-badge" alt="Powered by Nextra"/>
</a>

This website is built with [**Nextra**](https://github.com/shuding/nextra) by [Shu Ding](https://github.com/shuding)—an elegant Next.js-based framework for documentation and blogs. Thank you for creating such a beautiful and developer-friendly tool.

### Special Thanks

- The [Claude Code](https://www.anthropic.com/claude-code), [Cursor](https://cursor.sh/), and [Windsurf](https://windsurf.com/) teams for making AI-assisted development a reality
- Our growing community of contributors and users
- Everyone building with spec-driven workflows

---

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2024 agentii.ai

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

<div align="center">
  <p>
    <strong>Ready to power your AI agents?</strong>
  </p>
  <p>
    <a href="https://kits.agentii.ai">🌐 Visit Website</a> •
    <a href="https://github.com/agentii-ai">📦 GitHub Organization</a> •
    <a href="https://x.com/agentii_ai">🐦 Twitter</a>
  </p>
  <p>
    <sub>Made with ❤️ by <a href="https://agentii.ai">agentii.ai</a></sub>
  </p>
</div>
