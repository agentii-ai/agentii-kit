# Analytics Implementation Guide: Plausible & Google Analytics 4

**Purpose**: Complete implementation guide for both Plausible Analytics (privacy-first, recommended) and Google Analytics 4 (advanced tracking) for the Agentii-Kit blog.

**Tech Stack**: Next.js 14 (App Router) + TypeScript
**Expected Time**: 45-60 minutes
**Technical Level**: Intermediate (requires code editing)

---

## Table of Contents

1. [Analytics Strategy Overview](#analytics-strategy-overview)
2. [Option 1: Plausible Analytics (Recommended)](#option-1-plausible-analytics-recommended)
3. [Option 2: Google Analytics 4](#option-2-google-analytics-4)
4. [Option 3: Dual Setup (Plausible + GA4)](#option-3-dual-setup-plausible--ga4)
5. [Custom Event Tracking](#custom-event-tracking)
6. [Verification & Testing](#verification--testing)
7. [Privacy Compliance](#privacy-compliance)
8. [Troubleshooting](#troubleshooting)

---

## Analytics Strategy Overview

### Why Use Analytics?

From your blog spec ([specs/002-spec-kits-blogs/spec.md](../specs/002-spec-kits-blogs/spec.md)), you need to track:

**Traffic Metrics (SC-001, SC-002)**:
- Organic visitors: 500 (M1) → 2K (M3) → 8K (M6) → 25K (M12)
- Organic traffic %: 70%+ of total traffic

**Engagement Metrics (SC-003, SC-005)**:
- Time-on-page: 3+ minutes average
- Newsletter signup rate: 12%

**Business Metrics (SC-009, SC-010)**:
- GitHub stars attributed to blog: 30%+
- Kit discovery attribution: 20% cite blog

---

### Plausible vs. Google Analytics 4

| Feature | Plausible | Google Analytics 4 | Recommendation |
|---------|-----------|-------------------|----------------|
| **Privacy** | GDPR compliant, no cookies | Requires cookie consent | Plausible wins |
| **Setup Complexity** | 5 minutes, one script tag | 20 minutes, complex config | Plausible wins |
| **Cost** | $29/mo (or $9/mo <10K visitors) | Free | GA4 wins |
| **Data Ownership** | You own data | Google owns data | Plausible wins |
| **Advanced Features** | Basic (pageviews, referrers, events) | Advanced (funnels, cohorts, retention) | GA4 wins |
| **Performance** | Lightweight (< 1KB script) | Heavy (~45KB script) | Plausible wins |
| **Real-time Data** | Updates every 60 seconds | Delays 24-48 hours | Plausible wins |
| **Historical Data** | Retains forever | Free tier: 14 months | Plausible wins |

**Our Recommendation**:
- **Start with Plausible** (fast setup, privacy-first, real-time)
- **Add GA4 later** if you need advanced funnels, cohort analysis, or Google Ads integration

---

## Option 1: Plausible Analytics (Recommended)

### Step 1: Sign Up for Plausible

1. Go to [plausible.io](https://plausible.io)
2. Click **"Get Started"** → **"Start your free trial"**
3. Fill in:
   - Email: your@email.com
   - Domain: `agentii.ai` (or `agentii.ai/blog` if tracking only blog)
   - Plan: Select **$9/mo** (for <10K visitors) or **$29/mo** (for 10K-100K visitors)
4. Confirm email and complete signup

**Pricing**:
- 30-day free trial (no credit card required)
- After trial: $9/mo (up to 10K visitors/month) or $29/mo (up to 100K visitors/month)
- Open-source self-hosted option available (free, requires server)

---

### Step 2: Get Your Plausible Script

After signup, Plausible provides a script tag:

```html
<script defer data-domain="agentii.ai" src="https://plausible.io/js/script.js"></script>
```

**If tracking only `/blog` subdirectory**:
```html
<script defer data-domain="agentii.ai/blog" src="https://plausible.io/js/script.js"></script>
```

---

### Step 3: Add Plausible to Next.js

#### Method A: Add to Root Layout (Recommended)

Open `/Users/frank/X/agentii-kit/app/layout.tsx` and add Plausible to the `<head>`:

```tsx
import Script from 'next/script'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  // ... your existing metadata
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Plausible Analytics */}
        <Script
          defer
          data-domain="agentii.ai"
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
```

**Key points**:
- `defer`: Script loads asynchronously (doesn't block page rendering)
- `data-domain`: Must match your Plausible domain setting
- `strategy="afterInteractive"`: Loads script after page is interactive (optimal for performance)

---

#### Method B: Add to Blog Layout Only

If you only want analytics on blog pages:

Open `/Users/frank/X/agentii-kit/app/blog/layout.tsx`:

```tsx
import Script from 'next/script'

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* Plausible Analytics for Blog */}
      <Script
        defer
        data-domain="agentii.ai/blog"
        src="https://plausible.io/js/script.js"
        strategy="afterInteractive"
      />
      {children}
    </>
  )
}
```

---

### Step 4: Enable Custom Events (Optional but Recommended)

For tracking newsletter signups, button clicks, etc., use Plausible's custom events.

**Update your script tag**:

```tsx
<Script
  defer
  data-domain="agentii.ai"
  src="https://plausible.io/js/script.tagged-events.js" // Note: changed from script.js
  strategy="afterInteractive"
/>
```

**Create a custom event tracker component**:

Create `/Users/frank/X/agentii-kit/lib/analytics/plausible.ts`:

```typescript
/**
 * Plausible Analytics Event Tracker
 * Docs: https://plausible.io/docs/custom-event-goals
 */

declare global {
  interface Window {
    plausible?: (
      eventName: string,
      options?: { props?: Record<string, string | number> }
    ) => void
  }
}

export function trackEvent(
  eventName: string,
  props?: Record<string, string | number>
) {
  if (typeof window !== 'undefined' && window.plausible) {
    window.plausible(eventName, { props })
  }
}

// Pre-defined events (from spec.md SC-005, SC-009)
export const PlausibleEvents = {
  // Newsletter tracking (SC-005: 12% signup rate goal)
  NEWSLETTER_SIGNUP: 'Newsletter Signup',
  NEWSLETTER_FORM_VIEW: 'Newsletter Form View',

  // GitHub tracking (SC-009: 30%+ stars from blog)
  GITHUB_STAR_CLICK: 'GitHub Star Click',
  GITHUB_REPO_CLICK: 'GitHub Repo Click',

  // Kit discovery tracking (SC-010: 20% cite blog)
  KIT_DOWNLOAD_CLICK: 'Kit Download Click',
  KIT_DOCS_CLICK: 'Kit Docs Click',

  // Content engagement
  POST_SCROLL_50: 'Post Scroll 50%',
  POST_SCROLL_100: 'Post Scroll 100%',
  CODE_COPY: 'Code Copy',

  // Social sharing
  SOCIAL_SHARE_TWITTER: 'Social Share Twitter',
  SOCIAL_SHARE_LINKEDIN: 'Social Share LinkedIn',
}
```

---

### Step 5: Add Event Tracking to Components

Example: Track newsletter signups

```tsx
'use client'

import { useState } from 'react'
import { trackEvent, PlausibleEvents } from '@/lib/analytics/plausible'

export default function NewsletterForm() {
  const [email, setEmail] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Track newsletter signup
    trackEvent(PlausibleEvents.NEWSLETTER_SIGNUP, {
      source: 'blog-footer',
    })

    // Submit to Substack or your newsletter service
    await fetch('/api/newsletter', {
      method: 'POST',
      body: JSON.stringify({ email }),
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
      />
      <button type="submit">Subscribe</button>
    </form>
  )
}
```

---

### Step 6: Configure Plausible Goals

To track custom events in the Plausible dashboard:

1. Log in to [plausible.io](https://plausible.io)
2. Go to your site settings
3. Click **"Goals"** tab
4. Click **"Add Goal"** → **"Custom Event"**
5. Add these goals:
   - `Newsletter Signup`
   - `GitHub Star Click`
   - `Kit Download Click`
   - `Post Scroll 100%`
6. Save

Now these events will appear in your Plausible dashboard under **"Goal Conversions"**.

---

### Step 7: Deploy and Verify

1. **Commit your changes**:
   ```bash
   git add app/layout.tsx lib/analytics/plausible.ts
   git commit -m "feat: add Plausible Analytics with custom event tracking"
   git push
   ```

2. **Wait for Vercel deployment** (1-2 minutes)

3. **Test tracking**:
   - Visit your blog: `https://agentii.ai/blog`
   - Open browser DevTools → Network tab
   - Look for request to `plausible.io/api/event`
   - If you see it: ✅ Tracking works!

4. **Check Plausible dashboard**:
   - Go to [plausible.io](https://plausible.io)
   - Your visit should appear within 60 seconds
   - Real-time visitors count should show 1+

---

## Option 2: Google Analytics 4

### Step 1: Create GA4 Property

1. Go to [analytics.google.com](https://analytics.google.com)
2. Sign in with your Google account
3. Click **"Admin"** (bottom left gear icon)
4. Click **"Create Property"**
5. Fill in:
   - **Property name**: `Agentii Blog`
   - **Reporting time zone**: Your timezone
   - **Currency**: USD (or your currency)
6. Click **"Next"**
7. Fill in business details (optional)
8. Click **"Create"**
9. Accept Terms of Service

---

### Step 2: Set Up Data Stream

1. After creating property, you'll see **"Data streams"** setup
2. Click **"Web"**
3. Enter:
   - **Website URL**: `https://agentii.ai`
   - **Stream name**: `Agentii Blog`
4. Click **"Create stream"**

5. **Copy your Measurement ID**:
   - Format: `G-XXXXXXXXXX`
   - You'll need this for Next.js integration

---

### Step 3: Add GA4 to Next.js

#### Create GA4 Component

Create `/Users/frank/X/agentii-kit/components/GoogleAnalytics.tsx`:

```tsx
'use client'

import Script from 'next/script'

interface GoogleAnalyticsProps {
  measurementId: string
}

export default function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${measurementId}', {
              page_path: window.location.pathname,
              anonymize_ip: true, // GDPR compliance
            });
          `,
        }}
      />
    </>
  )
}
```

---

#### Add to Root Layout

Open `/Users/frank/X/agentii-kit/app/layout.tsx`:

```tsx
import GoogleAnalytics from '@/components/GoogleAnalytics'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* Google Analytics 4 */}
        <GoogleAnalytics measurementId="G-XXXXXXXXXX" />
        {children}
      </body>
    </html>
  )
}
```

**Replace `G-XXXXXXXXXX`** with your actual Measurement ID from Step 2.

---

### Step 4: Environment Variables (Recommended)

Instead of hardcoding the Measurement ID:

1. **Create `.env.local`** (if it doesn't exist):

   ```env
   # Google Analytics 4
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

2. **Update GoogleAnalytics component** to use env var:

   ```tsx
   export default function GoogleAnalytics() {
     const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

     if (!measurementId) {
       console.warn('GA4 Measurement ID not found')
       return null
     }

     return (
       <>
         {/* ... rest of component */}
       </>
     )
   }
   ```

3. **Update layout.tsx**:

   ```tsx
   <GoogleAnalytics /> {/* No props needed now */}
   ```

4. **Add to Vercel environment variables**:
   - Go to Vercel dashboard → Your project → Settings → Environment Variables
   - Add: `NEXT_PUBLIC_GA_MEASUREMENT_ID` = `G-XXXXXXXXXX`
   - Deploy

---

### Step 5: Track Custom Events (GA4)

Create `/Users/frank/X/agentii-kit/lib/analytics/ga4.ts`:

```typescript
/**
 * Google Analytics 4 Event Tracker
 * Docs: https://developers.google.com/analytics/devguides/collection/ga4/events
 */

declare global {
  interface Window {
    gtag?: (
      command: string,
      action: string,
      params?: Record<string, any>
    ) => void
  }
}

export function trackEvent(
  action: string,
  category: string,
  label?: string,
  value?: number
) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Pre-defined events
export const GA4Events = {
  // Newsletter tracking (SC-005)
  NEWSLETTER_SIGNUP: (source: string) =>
    trackEvent('newsletter_signup', 'Engagement', source),

  // GitHub tracking (SC-009)
  GITHUB_CLICK: (repo: string) =>
    trackEvent('github_click', 'External Link', repo),

  // Kit tracking (SC-010)
  KIT_DOWNLOAD: (kitName: string) =>
    trackEvent('kit_download', 'Conversion', kitName),

  // Content engagement
  POST_READ: (postTitle: string, timeSpent: number) =>
    trackEvent('post_read', 'Engagement', postTitle, timeSpent),

  // Social sharing
  SOCIAL_SHARE: (platform: string, postTitle: string) =>
    trackEvent('social_share', 'Social', `${platform}: ${postTitle}`),
}
```

---

### Step 6: Deploy and Verify

1. **Test in development**:
   ```bash
   npm run dev
   ```
   - Visit `http://localhost:3000`
   - Open DevTools → Network → filter "google-analytics"
   - Should see requests to `google-analytics.com/g/collect`

2. **Verify in GA4 dashboard**:
   - Go to [analytics.google.com](https://analytics.google.com)
   - Click **"Reports"** → **"Realtime"**
   - Visit your blog in another tab
   - You should see 1 active user within 30 seconds

**Expected delay**:
- Real-time: 30-60 seconds
- Standard reports: 24-48 hours (GA4 has processing delay)

---

## Option 3: Dual Setup (Plausible + GA4)

You can run both analytics side-by-side:

**Benefits**:
- Plausible: Real-time traffic tracking, privacy-first, lightweight
- GA4: Advanced funnels, cohort analysis, Google Search Console integration

**Implementation**:

```tsx
// app/layout.tsx
import GoogleAnalytics from '@/components/GoogleAnalytics'
import Script from 'next/script'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Plausible Analytics (lightweight, privacy-first) */}
        <Script
          defer
          data-domain="agentii.ai"
          src="https://plausible.io/js/script.tagged-events.js"
          strategy="afterInteractive"
        />
      </head>
      <body>
        {/* Google Analytics 4 (advanced tracking) */}
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  )
}
```

**Unified event tracking**:

Create `/Users/frank/X/agentii-kit/lib/analytics/index.ts`:

```typescript
import { trackEvent as plausibleTrack, PlausibleEvents } from './plausible'
import { GA4Events } from './ga4'

/**
 * Unified Analytics Tracker
 * Sends events to both Plausible and GA4
 */

export function trackNewsletterSignup(source: string) {
  plausibleTrack(PlausibleEvents.NEWSLETTER_SIGNUP, { source })
  GA4Events.NEWSLETTER_SIGNUP(source)
}

export function trackGitHubClick(repo: string) {
  plausibleTrack(PlausibleEvents.GITHUB_REPO_CLICK, { repo })
  GA4Events.GITHUB_CLICK(repo)
}

export function trackKitDownload(kitName: string) {
  plausibleTrack(PlausibleEvents.KIT_DOWNLOAD_CLICK, { kit: kitName })
  GA4Events.KIT_DOWNLOAD(kitName)
}

export function trackSocialShare(platform: string, postTitle: string) {
  plausibleTrack(`Social Share ${platform}`, { post: postTitle })
  GA4Events.SOCIAL_SHARE(platform, postTitle)
}
```

**Usage in components**:

```tsx
import { trackNewsletterSignup } from '@/lib/analytics'

// In your component
const handleSubmit = () => {
  trackNewsletterSignup('blog-footer') // Sends to both Plausible and GA4
}
```

---

## Custom Event Tracking

### Newsletter Signup Tracking (SC-005: 12% goal)

Add to your newsletter form component:

```tsx
'use client'

import { trackNewsletterSignup } from '@/lib/analytics'

export default function NewsletterForm({ source = 'unknown' }: { source?: string }) {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Track signup event
    trackNewsletterSignup(source)

    // Submit to newsletter service
    // ...
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* form fields */}
    </form>
  )
}
```

---

### GitHub Star Tracking (SC-009: 30% goal)

Add to GitHub links:

```tsx
import { trackGitHubClick } from '@/lib/analytics'

export default function GitHubButton() {
  return (
    <a
      href="https://github.com/agentii-ai/spec-kit"
      onClick={() => trackGitHubClick('spec-kit')}
      target="_blank"
      rel="noopener noreferrer"
    >
      Star on GitHub
    </a>
  )
}
```

---

### Scroll Depth Tracking (SC-003: 3+ min time-on-page)

Create `/Users/frank/X/agentii-kit/components/ScrollTracker.tsx`:

```tsx
'use client'

import { useEffect } from 'react'
import { trackEvent } from '@/lib/analytics/plausible'

export default function ScrollTracker() {
  useEffect(() => {
    let scrolled50 = false
    let scrolled100 = false

    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100

      if (scrollPercent > 50 && !scrolled50) {
        trackEvent('Post Scroll 50%')
        scrolled50 = true
      }

      if (scrollPercent > 90 && !scrolled100) {
        trackEvent('Post Scroll 100%')
        scrolled100 = true
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return null // No UI, just tracking
}
```

Add to blog post layout:

```tsx
// app/blog/posts/[slug]/page.tsx
import ScrollTracker from '@/components/ScrollTracker'

export default function BlogPostPage() {
  return (
    <>
      <ScrollTracker />
      {/* rest of your post */}
    </>
  )
}
```

---

## Verification & Testing

### Test Checklist

After deploying analytics:

**Plausible**:
- [ ] Script loads (check Network tab: `plausible.io/js/script.js`)
- [ ] Pageview event fires (Network tab: `plausible.io/api/event`)
- [ ] Dashboard shows your visit within 60 seconds
- [ ] Custom events appear in Goals section

**GA4**:
- [ ] gtag.js loads (check Network tab: `googletagmanager.com/gtag/js`)
- [ ] Events fire (Network tab: `google-analytics.com/g/collect`)
- [ ] Real-time report shows active users
- [ ] Demographic/device data appears (after 24-48 hours)

---

### Testing Custom Events

1. **Open your blog in incognito mode**

2. **Perform test actions**:
   - Submit newsletter form
   - Click GitHub link
   - Scroll to bottom of post
   - Click social share button

3. **Check Plausible**:
   - Go to dashboard → "Goal Conversions"
   - Events should appear within 60 seconds

4. **Check GA4**:
   - Go to "Reports" → "Realtime" → "Event count by Event name"
   - Events should appear within 30-60 seconds

---

## Privacy Compliance

### GDPR & CCPA Compliance

**Plausible**:
- ✅ **No cookies**: Fully GDPR compliant without consent banners
- ✅ **No PII**: Doesn't collect IP addresses, user agents, or personal data
- ✅ **Data ownership**: You own all data

**GA4**:
- ⚠️ **Requires cookie consent** (in EU, UK, California)
- ⚠️ **Google-owned data**: Google can use your data for their purposes
- ✅ **IP anonymization**: Enabled in our setup (`anonymize_ip: true`)

**Recommended approach**:

If you have EU or California traffic:
1. **Use Plausible only** (no consent banner needed)
2. OR: Add cookie consent banner for GA4 (use library like `react-cookie-consent`)

**Cookie consent example** (if using GA4):

```bash
npm install react-cookie-consent
```

```tsx
// app/layout.tsx
import CookieConsent from 'react-cookie-consent'
import GoogleAnalytics from '@/components/GoogleAnalytics'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Only load GA4 if consent is given */}
        <GoogleAnalytics />

        <CookieConsent
          location="bottom"
          buttonText="Accept"
          declineButtonText="Decline"
          enableDeclineButton
          onAccept={() => {
            // Enable GA4
            window.gtag?.('consent', 'update', {
              analytics_storage: 'granted',
            })
          }}
        >
          We use cookies to understand how you use our site and improve your experience.
        </CookieConsent>

        {children}
      </body>
    </html>
  )
}
```

---

## Troubleshooting

### Issue 1: Plausible script not loading

**Symptoms**: No requests to `plausible.io` in Network tab

**Causes**:
- Ad blocker enabled (blocks Plausible)
- Wrong domain in `data-domain` attribute
- Script not in `<head>` (must be in `<head>`, not `<body>`)

**Fix**:
1. Disable ad blockers temporarily
2. Verify domain matches Plausible settings exactly
3. Check that Script component is in layout.tsx `<head>` section

---

### Issue 2: GA4 data not appearing

**Symptoms**: No data in GA4 Real-time report

**Causes**:
- Wrong Measurement ID
- Localhost traffic (GA4 may filter localhost by default)
- Browser extensions blocking Google Analytics

**Fix**:
1. Verify Measurement ID: Go to GA4 Admin → Data Streams → copy ID
2. Test on production URL, not localhost
3. Disable browser extensions (uBlock, Privacy Badger, etc.)

---

### Issue 3: Custom events not tracking

**Symptoms**: Pageviews work, but custom events don't appear

**Causes**:
- Goals not configured in Plausible
- Event names don't match goal names exactly (case-sensitive)
- `window.plausible` or `window.gtag` not defined yet

**Fix**:
1. **Plausible**: Add custom event goals in dashboard (Settings → Goals)
2. **Match names exactly**: `Newsletter Signup` ≠ `newsletter_signup`
3. **Add null check**:
   ```typescript
   if (typeof window !== 'undefined' && window.plausible) {
     window.plausible('Event Name')
   }
   ```

---

### Issue 4: High bounce rate / Low time-on-page

**Symptoms**: GA4 shows 90%+ bounce rate or <30 seconds time-on-page

**Causes**:
- Single-page app (SPA) navigation not tracked
- Users leaving immediately (content quality issue)
- Bots/crawlers inflating traffic

**Fix**:
1. **Track SPA navigation** (Next.js App Router auto-tracks by default)
2. **Improve content**: Add TLDR, better headlines, clear value prop
3. **Filter bots**: GA4 Admin → Data Settings → Enable "Bot Filtering"

---

## Analytics Dashboard (Recommended)

Create a unified dashboard combining Plausible + GA4 + Google Search Console data:

**Tools**:
- [Plausible API](https://plausible.io/docs/stats-api) (real-time traffic)
- [GA4 API](https://developers.google.com/analytics/devguides/reporting/data/v1) (advanced metrics)
- [Google Search Console API](https://developers.google.com/webmaster-tools/v1/api_reference_index) (keyword rankings)

**Example: Monthly Analytics Report Script**

Create `/Users/frank/X/agentii-kit/scripts/monthly-analytics-report.ts`:

```typescript
/**
 * Monthly Analytics Report Generator
 * Combines Plausible + GA4 + GSC data into a single markdown report
 *
 * Usage: npx ts-node scripts/monthly-analytics-report.ts
 */

import fs from 'fs'
import path from 'path'

interface AnalyticsReport {
  month: string
  traffic: {
    totalVisitors: number
    organicVisitors: number
    organicPercentage: number
  }
  engagement: {
    averageTimeOnPage: number
    newsletterSignups: number
    signupRate: number
  }
  keywords: {
    keyword: string
    position: number
    clicks: number
    impressions: number
  }[]
}

async function generateMonthlyReport(): Promise<void> {
  const report: AnalyticsReport = {
    month: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
    traffic: {
      totalVisitors: 0, // Fetch from Plausible API
      organicVisitors: 0, // Fetch from Plausible API
      organicPercentage: 0,
    },
    engagement: {
      averageTimeOnPage: 0, // Fetch from GA4 API
      newsletterSignups: 0, // Fetch from Plausible custom events
      signupRate: 0,
    },
    keywords: [], // Fetch from GSC API
  }

  // TODO: Fetch data from APIs (requires API keys)
  // For now, this is a template structure

  const markdown = generateMarkdownReport(report)
  const outputPath = path.join(
    __dirname,
    '../specs/002-spec-kits-blogs/analytics-log.md'
  )

  fs.writeFileSync(outputPath, markdown, 'utf-8')
  console.log(`✅ Report generated: ${outputPath}`)
}

function generateMarkdownReport(report: AnalyticsReport): string {
  return `# Analytics Report: ${report.month}

## Traffic Metrics

- **Total Visitors**: ${report.traffic.totalVisitors.toLocaleString()}
- **Organic Visitors**: ${report.traffic.organicVisitors.toLocaleString()} (${report.traffic.organicPercentage}%)

## Engagement Metrics

- **Average Time on Page**: ${report.engagement.averageTimeOnPage.toFixed(1)} minutes
- **Newsletter Signups**: ${report.engagement.newsletterSignups}
- **Signup Rate**: ${report.engagement.signupRate.toFixed(1)}%

## Top Keywords

| Keyword | Position | Clicks | Impressions |
|---------|----------|--------|-------------|
${report.keywords.map((k) => `| ${k.keyword} | ${k.position} | ${k.clicks} | ${k.impressions} |`).join('\n')}

---

**Generated**: ${new Date().toISOString()}
`
}

generateMonthlyReport().catch(console.error)
```

---

## Next Steps

✅ **You've successfully set up analytics!**

**Recommended next actions**:

1. **Week 1**: Monitor daily for first 7 days to ensure data accuracy
2. **Week 2-4**: Establish baseline metrics (average visitors, time-on-page, etc.)
3. **Month 1**: Create first monthly report (compare against spec.md SC-001 goals)
4. **Month 3**: Review and optimize underperforming content

**Resources**:
- [Plausible Documentation](https://plausible.io/docs)
- [GA4 Event Tracking Guide](https://developers.google.com/analytics/devguides/collection/ga4/events)
- [Blog Spec](../specs/002-spec-kits-blogs/spec.md)
- [Blog Plan](../specs/002-spec-kits-blogs/plan.md)

---

**Last updated**: December 8, 2025
**Maintained by**: Agentii-Kit Team
**Estimated setup time**: 45-60 minutes
