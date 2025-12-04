# Quickstart Guide: Primary Frontend Redesign

**Feature**: Primary Frontend Redesign with Secondary Frontend Design
**Branch**: `001-redesign-primary-frontend`
**Date**: 2025-12-04
**Purpose**: Guide developers through setting up the redesigned frontend locally

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Quick Setup](#quick-setup)
3. [Project Structure](#project-structure)
4. [Running the Development Server](#running-the-development-server)
5. [Adding New Kits](#adding-new-kits)
6. [Customizing the Dark Theme](#customizing-the-dark-theme)
7. [Creating New Pages](#creating-new-pages)
8. [Testing & Validation](#testing--validation)
9. [Building for Production](#building-for-production)
10. [Deploying to Vercel](#deploying-to-vercel)
11. [Troubleshooting](#troubleshooting)

---

## Prerequisites

Ensure you have the following installed:

- **Node.js** 18.0.0 or higher ([Download](https://nodejs.org/))
- **npm** (comes with Node.js)
- **Git** ([Download](https://git-scm.com/))

**Check versions**:
```bash
node --version  # Should show v18.x.x or higher
npm --version   # Should show 9.x.x or higher
git --version   # Should show 2.x.x or higher
```

---

## Quick Setup

### 1. Clone the Repository

```bash
git clone https://github.com/agentii-ai/agentii-kit.git
cd agentii-kit
```

### 2. Checkout the Feature Branch

```bash
git checkout 001-redesign-primary-frontend
```

### 3. Install Dependencies

```bash
npm install
```

This will install all dependencies including:
- Next.js 14
- Nextra 4.6
- React 18
- Tailwind CSS 3.3
- TypeScript 5.3
- And all other required packages

### 4. Start Development Server

```bash
npm run dev
```

The site will be available at: **http://localhost:3002**

---

## Project Structure

Understanding the project structure will help you navigate and modify the codebase:

```text
agentii-kit/
├── app/                        # Next.js 14 App Router
│   ├── layout.tsx              # Root layout (Navbar, Footer, dark theme)
│   ├── page.tsx                # Homepage (Hero, Kits Grid, Testimonials, etc.)
│   ├── blog/
│   │   ├── layout.tsx          # Blog layout
│   │   ├── page.tsx            # Blog listing (BlogHero, ArticleCard grid)
│   │   └── [slug]/page.tsx     # Article detail page
│   ├── kits/
│   │   └── page.tsx            # Kits catalog page
│   ├── about/
│   │   └── page.tsx            # About page
│   └── donate/
│       └── page.tsx            # Donate page
├── components/                 # React components
│   ├── Navbar.tsx              # Fixed top navbar
│   ├── Footer.tsx              # Footer
│   ├── HeroSection.tsx         # Landing hero
│   ├── KitCard.tsx             # Kit card component
│   ├── KitsGrid.tsx            # Filterable kit grid
│   ├── FilterSidebar.tsx       # Search & category filters
│   ├── ArticleCard.tsx         # Blog post card
│   ├── BlogHero.tsx            # Blog landing hero
│   └── ui/                     # shadcn-ui primitives
│       ├── button.tsx
│       ├── input.tsx
│       ├── badge.tsx
│       └── ... (other UI components)
├── data/                       # Mock data
│   └── kits.ts                 # Kit definitions
├── content/                    # MDX content
│   └── blog/                   # Blog posts (Nextra-managed)
│       └── YYYY/MM/slug.mdx
├── lib/                        # Utilities
│   ├── content/
│   │   └── blog-loader.ts      # Nextra blog content loader
│   ├── types/                  # TypeScript interfaces
│   └── utils.ts                # Helper functions
├── public/                     # Static assets
│   ├── images/                 # Images
│   └── og-images/              # Social share images
├── styles/
│   └── globals.css             # Global styles (dark theme CSS variables)
├── tailwind.config.cjs         # Tailwind configuration
├── next.config.js              # Next.js configuration
├── package.json                # Dependencies and scripts
└── tsconfig.json               # TypeScript configuration
```

---

## Running the Development Server

### Start the Dev Server

```bash
npm run dev
```

This starts the Next.js development server with:
- Hot Module Replacement (HMR) for instant updates
- TypeScript compilation
- Tailwind CSS processing
- Port: 3002 (configurable in package.json)

### Access the Site

Open your browser and navigate to:
- **Homepage**: http://localhost:3002
- **Blog**: http://localhost:3002/blog
- **Kits Catalog**: http://localhost:3002/kits
- **About**: http://localhost:3002/about
- **Donate**: http://localhost:3002/donate

### Stop the Server

Press `Ctrl+C` in the terminal.

---

## Adding New Kits

### 1. Open the Kits Data File

```bash
# Open in your editor
code data/kits.ts
# or
nano data/kits.ts
```

### 2. Add a New Kit to the Array

```typescript
export const kits: Kit[] = [
  // ... existing kits

  // NEW KIT
  {
    id: "15",  // Increment from last ID
    title: "My New Spec Kit",
    description: "A comprehensive spec kit for [your use case]. Includes templates, examples, and best practices for [specific domain].",
    category: "DEV-KIT",  // Choose from: DEV-KIT, PM-KIT, MARKETING-KIT, LEGAL-KIT, FINANCE-KIT, DESIGN-KIT, OPS-KIT
    categoryColor: "dev",  // Must match category (dev, pm, marketing, legal, finance, design, ops)
    repo: "your-org/your-kit-repo",  // GitHub repo path
    stars: 0,  // Initial star count
    lastUpdated: "2025-12-04",  // Today's date (YYYY-MM-DD)
  },
];
```

### 3. Validation Rules

- **title**: 10-100 characters
- **description**: 20-500 characters
- **category**: Must be one of the 7 predefined categories (all caps with hyphens)
- **categoryColor**: Must match category (lowercase, no hyphens)
- **repo**: Format `owner/name` (GitHub repo path)
- **stars**: Non-negative integer
- **lastUpdated**: ISO 8601 date format (`YYYY-MM-DD`)

### 4. Save and Test

The development server will automatically reload. Visit http://localhost:3002 or http://localhost:3002/kits to see your new kit.

---

## Customizing the Dark Theme

### Color Variables

All colors are defined as HSL values in `styles/globals.css`. To customize:

```css
/* styles/globals.css */

@layer base {
  :root {
    /* Background colors */
    --background: 216 28% 7%;       /* Very dark blue-gray */
    --foreground: 216 12% 92%;      /* Off-white text */
    --surface: 216 22% 14%;         /* Slightly elevated surfaces */
    --surface-hover: 216 22% 18%;   /* Hover state */

    /* Text colors */
    --text-primary: 216 12% 92%;    /* Primary text */
    --text-secondary: 215 14% 64%;  /* Secondary text */
    --text-muted: 215 14% 46%;      /* Muted text */

    /* Accent colors */
    --primary: 217 91% 60%;         /* Bright blue (links, CTAs) */
    --accent: 217 91% 60%;          /* Same as primary */

    /* Status colors */
    --success: 142 71% 45%;         /* Green */
    --warning: 38 92% 50%;          /* Orange */
    --error: 0 84% 60%;             /* Red */

    /* Component colors */
    --card: 216 22% 11%;            /* Card backgrounds */
    --border: 215 19% 18%;          /* Border colors */
    --muted: 215 19% 15%;           /* Muted backgrounds */
  }
}
```

**How to modify**:
1. Open `styles/globals.css`
2. Change HSL values (format: `hue saturation% lightness%`)
3. Save (dev server auto-reloads)

**HSL Color Picker**: [hslpicker.com](https://hslpicker.com/)

### Fonts

Fonts are imported via `@fontsource` packages:

```css
/* styles/globals.css */
@import "@fontsource/inter/400.css";
@import "@fontsource/inter/500.css";
@import "@fontsource/inter/600.css";
@import "@fontsource/jetbrains-mono/400.css";
@import "@fontsource/jetbrains-mono/500.css";
```

**To change fonts**:
1. Install new font: `npm install @fontsource/your-font`
2. Import in `styles/globals.css`
3. Update Tailwind config:
   ```javascript
   // tailwind.config.cjs
   theme: {
     extend: {
       fontFamily: {
         sans: ["Your Font", "system-ui", "sans-serif"],
         mono: ["Your Mono Font", "monospace"],
       },
     },
   },
   ```

### Animations

Animation speeds and easing can be adjusted in `tailwind.config.cjs`:

```javascript
// tailwind.config.cjs
theme: {
  extend: {
    animation: {
      "fade-in": "fade-in 0.5s ease-out forwards",  // Change duration here
      "scroll-left": "scroll-left 40s linear infinite",  // Change speed here
    },
  },
},
```

---

## Creating New Pages

### 1. Create a Page File

```bash
# Create a new directory and page file
mkdir -p app/your-page
touch app/your-page/page.tsx
```

### 2. Write the Page Component

```typescript
// app/your-page/page.tsx
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function YourPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-semibold text-foreground mb-6">
          Your Page Title
        </h1>
        <p className="text-text-secondary">
          Your content here...
        </p>
      </main>

      <Footer />
    </div>
  );
}
```

### 3. Add to Navigation

Update `components/Navbar.tsx`:

```typescript
// components/Navbar.tsx
const navLinks: NavigationLink[] = [
  { label: "Kits", href: "/kits" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Your Page", href: "/your-page" },  // ADD THIS
  { label: "GitHub", href: "https://github.com/agentii-ai/agentii-kit", external: true },
];
```

### 4. Test the Page

Visit http://localhost:3002/your-page

---

## Testing & Validation

### Type Checking

```bash
npm run type-check
```

This runs TypeScript compiler to check for type errors without emitting files.

### Linting

```bash
npm run lint
```

This runs ESLint to check for code quality issues.

### Content Validation

```bash
# Validate blog post frontmatter
npm run validate-frontmatter

# Check for broken links
npm run check-links
```

### Run All Checks

```bash
npm run validate-frontmatter && npm run check-links && npm run type-check && npm run lint
```

**All checks must pass before merging to main** (per constitution).

---

## Building for Production

### 1. Run the Build

```bash
npm run build
```

This creates a production build in `.next/out/` directory.

**Build process**:
1. Type checks all TypeScript files
2. Compiles all pages to static HTML
3. Optimizes JavaScript bundles
4. Processes Tailwind CSS
5. Generates sitemap and RSS feed
6. Runs Pagefind search indexing

**Expected output**:
```
Route (app)                              Size     First Load JS
┌ ○ /                                    5 kB           85 kB
├ ○ /blog                                3 kB           83 kB
├ ○ /blog/[slug]                         8 kB           88 kB
├ ○ /kits                                4 kB           84 kB
├ ○ /about                               2 kB           82 kB
└ ○ /donate                              2 kB           82 kB
```

### 2. Test the Production Build

```bash
npm run start
```

This serves the production build locally at http://localhost:3002.

### 3. Run Lighthouse Audit

```bash
# Install Lighthouse CLI if needed
npm install -g lighthouse

# Run audit
lighthouse http://localhost:3002 --view
```

**Target scores** (per constitution):
- Performance: ≥90
- Accessibility: ≥90
- Best Practices: ≥90
- SEO: ≥90

---

## Deploying to Vercel

### Automatic Deployment (Recommended)

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "feat: complete primary frontend redesign"
   git push origin 001-redesign-primary-frontend
   ```

2. **Create Pull Request**:
   - Go to GitHub repository
   - Create PR from `001-redesign-primary-frontend` to `main`

3. **Vercel Auto-Deploy**:
   - Vercel automatically creates a preview deployment for the PR
   - Preview URL appears in PR comments
   - Review the preview before merging

4. **Merge to Main**:
   - After PR approval, merge to `main`
   - Vercel automatically deploys to production (kits.agentii.ai)

### Manual Deployment

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

---

## Troubleshooting

### Development Server Won't Start

**Issue**: `npm run dev` fails

**Solution**:
```bash
# Clean install
rm -rf node_modules .next
npm install
npm run dev
```

### Changes Not Appearing

**Issue**: Code changes don't reflect in browser

**Solution**:
1. Hard refresh: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows/Linux)
2. Restart dev server: `Ctrl+C` then `npm run dev`
3. Clear Next.js cache: `rm -rf .next`

### TypeScript Errors

**Issue**: `npm run type-check` shows errors

**Solution**:
1. Check error messages carefully
2. Ensure all imports use `@/` alias (configured in `tsconfig.json`)
3. Verify interface names match (case-sensitive)
4. Run `npm install` if types are missing

### Build Fails

**Issue**: `npm run build` fails

**Solution**:
1. Run validation checks first:
   ```bash
   npm run validate-frontmatter
   npm run check-links
   npm run type-check
   npm run lint
   ```
2. Fix any errors reported
3. Try build again

### Images Not Loading

**Issue**: Images show as broken

**Solution**:
1. Ensure images are in `public/images/` directory
2. Use absolute paths: `/images/your-image.png` (not `./images/`)
3. Check file names (case-sensitive)
4. Verify image format (JPEG, PNG, WebP supported)

### Styles Not Applied

**Issue**: Tailwind classes don't work

**Solution**:
1. Verify Tailwind config includes your files:
   ```javascript
   // tailwind.config.cjs
   content: [
     './app/**/*.{js,ts,jsx,tsx,mdx}',
     './components/**/*.{js,ts,jsx,tsx,mdx}',
   ],
   ```
2. Restart dev server
3. Check for typos in class names

### Port Already in Use

**Issue**: `Port 3002 is already in use`

**Solution**:
1. Kill the process using port 3002:
   ```bash
   # Mac/Linux
   lsof -ti:3002 | xargs kill -9

   # Windows
   netstat -ano | findstr :3002
   taskkill /PID <PID> /F
   ```
2. Or use a different port:
   ```bash
   npm run dev -- -p 3002
   ```

---

## Useful Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint |
| `npm run type-check` | Check TypeScript types |
| `npm run validate-frontmatter` | Validate blog frontmatter |
| `npm run check-links` | Check for broken links |

---

## Next Steps

1. **Explore the codebase**: Start with `app/page.tsx` (homepage)
2. **Make changes**: Edit components, add kits, customize colors
3. **Test locally**: Run dev server and validation checks
4. **Create PR**: Push changes and request review
5. **Deploy**: Merge to main for production deployment

---

## Additional Resources

- **Nextra Documentation**: [nextra.site](https://nextra.site/)
- **Next.js 14 Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **Tailwind CSS**: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- **TypeScript Handbook**: [typescriptlang.org/docs](https://www.typescriptlang.org/docs/)
- **Feature Specification**: [spec.md](./spec.md)
- **Implementation Plan**: [plan.md](./plan.md)
- **Data Model**: [data-model.md](./data-model.md)

---

## Support

If you encounter issues not covered in this guide:

1. **Check GitHub Issues**: [github.com/agentii-ai/agentii-kit/issues](https://github.com/agentii-ai/agentii-kit/issues)
2. **Create New Issue**: Include error messages, environment details, and steps to reproduce
3. **Ask in Discussions**: [github.com/agentii-ai/agentii-kit/discussions](https://github.com/agentii-ai/agentii-kit/discussions)

---

**Happy Coding! 🚀**
