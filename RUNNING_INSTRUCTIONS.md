# Running Instructions: Local Development on macOS

This guide explains how to run the **agentii-kit** frontend locally on macOS for development, while maintaining the production deployment on Vercel.

---

## Environment Overview

| Environment | URL | Purpose | Trigger |
|-------------|-----|---------|---------|
| **Local Dev** | `http://localhost:3002` | Active development, testing changes | Manual (`npm run dev`) |
| **Vercel Production** | `https://kits.agentii.ai` | Live site for users | Git push to `main` |
| **Vercel Preview** | `https://*.vercel.app` | PR preview deployments | Git push to feature branch |

**Key Point:** Local development and Vercel are completely independent. Running locally does NOT affect the live Vercel site. Changes only deploy to Vercel when you push to Git.

---

## Prerequisites (macOS)

### 1. Install Node.js 18+

```bash
# Option A: Using Homebrew (recommended)
brew install node@20

# Option B: Using nvm (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.zshrc
nvm install 20
nvm use 20

# Verify installation
node --version  # Should be v18.x.x or higher
npm --version   # Should be v9.x.x or higher
```

### 2. Install Git (if not already installed)

```bash
# Using Homebrew
brew install git

# Verify
git --version
```

---

## Quick Start

### First Time Setup

```bash
# 1. Navigate to the project directory
cd /Users/frank/X/agentii-kit

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

### Open in Browser

```
http://localhost:3002
```

The dev server runs on **port 3002** (not the default 3000) to avoid conflicts with other Next.js projects.

---

## Development Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build production bundle (same as Vercel) |
| `npm run start` | Run production build locally |
| `npm run lint` | Run ESLint |
| `npm run type-check` | Check TypeScript types |
| `npm run validate-frontmatter` | Validate blog/docs frontmatter |
| `npm run check-links` | Check for broken links |

### Daily Development Workflow

```bash
# Start your day
cd /Users/frank/X/agentii-kit
npm run dev

# Make changes, browser auto-refreshes

# Before committing, validate
npm run lint
npm run type-check

# Stop server: Ctrl+C
```

---

## Local vs Vercel: No Conflicts

### How It Works

```
┌─────────────────────────────────────────────────────────────┐
│                     Your Local Machine                       │
│                                                              │
│  ┌──────────────┐    npm run dev    ┌──────────────────┐   │
│  │   Code       │ ───────────────▶  │ localhost:3002   │   │
│  │   Changes    │                   │ (Dev Server)     │   │
│  └──────────────┘                   └──────────────────┘   │
│         │                                                   │
│         │ git push                                          │
│         ▼                                                   │
└─────────────────────────────────────────────────────────────┘
          │
          │ GitHub webhook
          ▼
┌─────────────────────────────────────────────────────────────┐
│                        Vercel                                │
│                                                              │
│  ┌──────────────┐   npm run build   ┌──────────────────┐   │
│  │   GitHub     │ ───────────────▶  │ kits.agentii.ai  │   │
│  │   Repo       │                   │ (Production)     │   │
│  └──────────────┘                   └──────────────────┘   │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Why No Conflicts?

1. **Isolated Environments** - Local dev server (`localhost:3002`) is completely separate from Vercel
2. **No Shared State** - Local changes only exist on your machine until pushed
3. **Git-Triggered Deploys** - Vercel only rebuilds when code is pushed to GitHub
4. **Same Build Command** - Both use `npm run build`, ensuring consistency

---

## Environment Variables

### Local Development

Create `.env.local` in the project root (this file is gitignored):

```bash
# /Users/frank/X/agentii-kit/.env.local

# Site URL for local development
NEXT_PUBLIC_SITE_URL=http://localhost:3002

# Optional: Disable analytics locally
NEXT_PUBLIC_DISABLE_ANALYTICS=true
```

### Vercel Production

Environment variables are set in the Vercel dashboard:
- Go to [vercel.com](https://vercel.com) → Project Settings → Environment Variables
- These are separate from your local `.env.local`

---

## Testing Production Build Locally

Before pushing to Vercel, test the production build locally:

```bash
# Build (same command Vercel uses)
npm run build

# Run production server locally
npm run start

# Open http://localhost:3002
```

This catches build errors before they affect the live site.

---

## Common Tasks

### Start Development

```bash
cd /Users/frank/X/agentii-kit && npm run dev
```

### Create a New Blog Post

```bash
# 1. Create the file
touch content/blog/2025-12-04-my-new-post.md

# 2. Add frontmatter and content
# 3. View at http://localhost:3002/blog/my-new-post
```

### Validate Before Commit

```bash
npm run validate-frontmatter && npm run type-check && npm run lint
```

### Deploy to Production

```bash
# Local changes → GitHub → Vercel (automatic)
git add .
git commit -m "feat: add new feature"
git push origin main

# Vercel automatically deploys within ~60 seconds
```

### Preview Deployment (PR)

```bash
# Create feature branch
git checkout -b feat/my-feature

# Make changes, then push
git push origin feat/my-feature

# Create PR on GitHub
# Vercel creates preview URL automatically
```

---

## Troubleshooting

### Port 3002 Already in Use

```bash
# Find process using port 3002
lsof -i :3002

# Kill the process
kill -9 <PID>

# Or use a different port
npm run dev -- -p 3002
```

### Node Modules Issues

```bash
# Clear and reinstall
rm -rf node_modules .next
npm install
npm run dev
```

### Hot Reload Not Working

```bash
# Restart dev server
# Press Ctrl+C, then:
npm run dev

# Hard refresh browser
# Cmd+Shift+R
```

### Build Fails Locally

```bash
# Check for TypeScript errors
npm run type-check

# Check for lint errors
npm run lint

# Clear cache and rebuild
rm -rf .next
npm run build
```

### Vercel Build Differs from Local

```bash
# Ensure same Node version
node --version  # Should match Vercel (Node 20.x)

# Use exact same build command
npm run build

# Check for environment variable differences
# Local: .env.local
# Vercel: Dashboard → Environment Variables
```

---

## Useful Aliases (Optional)

Add to `~/.zshrc`:

```bash
# Agentii Kit shortcuts
alias akit="cd /Users/frank/X/agentii-kit"
alias akit-dev="cd /Users/frank/X/agentii-kit && npm run dev"
alias akit-build="cd /Users/frank/X/agentii-kit && npm run build"
alias akit-validate="cd /Users/frank/X/agentii-kit && npm run validate-frontmatter && npm run type-check && npm run lint"
```

Then reload:

```bash
source ~/.zshrc
```

---

## Summary

| Action | Command | Result |
|--------|---------|--------|
| Start local dev | `npm run dev` | `http://localhost:3002` |
| Test prod build | `npm run build && npm run start` | Local production test |
| Deploy to Vercel | `git push origin main` | Auto-deploy to `kits.agentii.ai` |
| Preview deployment | Push to feature branch + PR | Auto-preview URL |

**Remember:** Local development is completely isolated. Make changes freely—nothing affects Vercel until you push to Git.
