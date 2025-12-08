# Google Search Console Setup Guide for Agentii-Kit Blog

**Purpose**: Complete step-by-step guide to set up Google Search Console (GSC) for tracking blog performance, keyword rankings, and search visibility.

**Expected Time**: 30-45 minutes
**Technical Level**: Beginner-friendly (no coding required)

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Step 1: Create Google Account & Access GSC](#step-1-create-google-account--access-gsc)
3. [Step 2: Add Your Property (Domain or URL Prefix)](#step-2-add-your-property-domain-or-url-prefix)
4. [Step 3: Verify Ownership](#step-3-verify-ownership)
5. [Step 4: Submit Sitemap](#step-4-submit-sitemap)
6. [Step 5: Configure Settings](#step-5-configure-settings)
7. [Step 6: Monitor Initial Indexing](#step-6-monitor-initial-indexing)
8. [Step 7: Track Target Keywords](#step-7-track-target-keywords)
9. [Ongoing Maintenance](#ongoing-maintenance)
10. [Troubleshooting](#troubleshooting)

---

## Prerequisites

Before starting, ensure you have:

- ✅ Google account (personal or business Gmail account)
- ✅ Access to your blog's hosting/deployment platform (Vercel, Netlify, etc.)
- ✅ Ability to edit DNS records OR add HTML files to your blog
- ✅ Blog is live and publicly accessible (not behind a password)
- ✅ At least 1-3 blog posts published

---

## Step 1: Create Google Account & Access GSC

### 1.1 Sign Up for Google Account (if needed)

If you don't have a Google account:

1. Go to [accounts.google.com](https://accounts.google.com)
2. Click **"Create account"**
3. Fill in your details (name, email, password)
4. Verify your email address

**Tip**: Use a business email if you plan to grant team access later.

### 1.2 Access Google Search Console

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Sign in with your Google account
3. You'll see the GSC welcome screen or dashboard

---

## Step 2: Add Your Property (Domain or URL Prefix)

Google Search Console offers two property types:

### Option A: Domain Property (Recommended)

**Best for**: Verifying all subdomains and protocols (http, https, www, non-www) at once

**Example**: `agentii.ai` (covers `blog.agentii.ai`, `www.agentii.ai`, etc.)

**How to set up**:

1. On GSC home screen, click **"Add property"**
2. Select **"Domain"** tab
3. Enter your domain: `agentii.ai` (without `https://` or `www`)
4. Click **"Continue"**

**Verification method**: DNS record (requires DNS access)

---

### Option B: URL Prefix Property (Easier for beginners)

**Best for**: Verifying a specific URL path only

**Example**: `https://agentii.ai/blog` (only tracks `/blog` section)

**How to set up**:

1. On GSC home screen, click **"Add property"**
2. Select **"URL prefix"** tab
3. Enter your blog URL: `https://agentii.ai/blog`
4. Click **"Continue"**

**Verification method**: HTML file upload, HTML tag, or Google Analytics

---

**Which should you choose?**

| Property Type | Pros | Cons | Recommended For |
|---------------|------|------|-----------------|
| **Domain** | Verifies all subdomains and protocols at once | Requires DNS access (technical) | Production sites, multi-subdomain setups |
| **URL Prefix** | Easy verification (HTML tag or file) | Only tracks specific URL path | Single blog, quick setup, beginners |

**For this guide, we'll use URL Prefix** (easier for most users).

---

## Step 3: Verify Ownership

After adding your property, you need to prove you own the site.

### Method 1: HTML Tag Verification (Recommended for Next.js/Vercel)

1. **GSC shows you a meta tag** like this:
   ```html
   <meta name="google-site-verification" content="ABC123XYZ..." />
   ```

2. **Add this tag to your blog's `<head>` section**:

   **For Next.js (App Router)**:

   Open `/Users/frank/X/agentii-kit/app/layout.tsx` and add to the `<head>` metadata:

   ```tsx
   export const metadata: Metadata = {
     // ... existing metadata
     verification: {
       google: 'ABC123XYZ...', // Replace with your actual code
     },
   }
   ```

   **Alternative: Add directly in layout.tsx**:

   ```tsx
   import Head from 'next/head'

   export default function Layout({ children }) {
     return (
       <>
         <Head>
           <meta name="google-site-verification" content="ABC123XYZ..." />
         </Head>
         {/* ... rest of your layout */}
       </>
     )
   }
   ```

3. **Deploy your changes**:
   - Commit and push to GitHub
   - Wait for Vercel to redeploy (usually 1-2 minutes)

4. **Verify in GSC**:
   - Go back to Google Search Console
   - Click **"Verify"**
   - If successful, you'll see: ✅ "Ownership verified"

---

### Method 2: HTML File Upload (Alternative)

1. **GSC provides a file** (e.g., `google1234567890abcdef.html`)

2. **Download the file**

3. **Add it to your blog's public folder**:

   For Next.js: Place in `/Users/frank/X/agentii-kit/public/`

   The file will be accessible at: `https://agentii.ai/google1234567890abcdef.html`

4. **Deploy and verify** (same steps as Method 1, step 3-4)

---

### Method 3: DNS Verification (For Domain Property)

1. **GSC shows a TXT record**:
   ```
   TXT record: google-site-verification=ABC123XYZ...
   ```

2. **Add this to your DNS provider** (Cloudflare, Namecheap, etc.):
   - Log in to your DNS provider
   - Go to DNS management
   - Add a new **TXT record**:
     - **Name**: `@` (or leave blank for root domain)
     - **Value**: `google-site-verification=ABC123XYZ...`
     - **TTL**: 1 hour (or automatic)

3. **Wait for DNS propagation** (15 minutes - 48 hours, usually < 1 hour)

4. **Verify in GSC** (click "Verify" button)

---

## Step 4: Submit Sitemap

A sitemap tells Google which pages to crawl and index.

### 4.1 Generate Sitemap (Next.js)

**For Next.js 14+ (App Router)**, create a dynamic sitemap:

Create `/Users/frank/X/agentii-kit/app/sitemap.ts`:

```typescript
import { MetadataRoute } from 'next'
import { getAllBlogPosts } from '@/lib/content/blog-loader'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllBlogPosts(false)

  const blogPosts = posts.map((post) => ({
    url: `https://agentii.ai/blog/posts/${post.slug}`,
    lastModified: post.frontmatter.updated_at || post.frontmatter.date,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: 'https://agentii.ai',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://agentii.ai/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...blogPosts,
  ]
}
```

**Verify sitemap works**:
- Visit `https://agentii.ai/sitemap.xml` in your browser
- You should see an XML file with all your blog URLs

---

### 4.2 Submit Sitemap to GSC

1. **In Google Search Console**, go to **"Sitemaps"** (left sidebar)

2. **Enter your sitemap URL**:
   ```
   https://agentii.ai/sitemap.xml
   ```

3. **Click "Submit"**

4. **Check status**:
   - Status should show: ✅ "Success"
   - "Discovered URLs" will show the number of pages Google found

**Expected result**:
- If you have 3 blog posts: ~5-6 URLs (homepage, blog index, 3 posts)
- GSC will start crawling these URLs within 1-7 days

---

## Step 5: Configure Settings

### 5.1 Set Target Country (Optional)

If your blog targets a specific country:

1. Go to **"Settings"** → **"Site Settings"**
2. Under **"Geographic target"**, select your country (e.g., United States)
3. Click **"Save"**

**When to use**: If you write in a specific language for a specific country (e.g., "US-focused startup content")

**When to skip**: If your blog is global or technical (code, AI, open-source)

---

### 5.2 Set Crawl Rate (Usually automatic)

Google automatically adjusts crawl rate. Only change if:
- Your server is overloaded (slow down crawl)
- You want faster indexing (speed up crawl)

**For most blogs**: Leave on **"Automatic"**

---

### 5.3 Add Team Members (Optional)

If you have a team:

1. Go to **"Settings"** → **"Users and permissions"**
2. Click **"Add user"**
3. Enter their email address
4. Select permission level:
   - **Owner**: Full control (can delete property)
   - **Full**: Can view and modify data
   - **Restricted**: View-only access

---

## Step 6: Monitor Initial Indexing

After submitting your sitemap, Google will start crawling and indexing your blog.

### 6.1 Check Indexing Status

1. Go to **"Pages"** (left sidebar under "Indexing")

2. **What to expect**:
   - **Indexed**: Pages successfully added to Google Search
   - **Not indexed**: Pages Google found but hasn't indexed yet (reasons listed)
   - **Crawled - not indexed**: Google crawled but decided not to index (low quality, duplicate content, etc.)

**Timeline**:
- **Day 1-2**: GSC discovers URLs from sitemap
- **Day 3-7**: Google crawls pages
- **Day 7-14**: Pages start appearing in "Indexed" (if quality is good)
- **Day 14-30**: Full indexing and keyword rankings begin

---

### 6.2 Request Indexing Manually (For urgent posts)

If you want a post indexed immediately:

1. **Go to "URL Inspection"** (top search bar in GSC)

2. **Enter your post URL**:
   ```
   https://agentii.ai/blog/posts/2025-11-15-dont-code-specify
   ```

3. **Click "Request Indexing"**

4. **Wait 1-3 days** for Google to crawl

**Limit**: You can request ~10 URLs per day (manual limit)

---

## Step 7: Track Target Keywords

Now that GSC is set up, monitor your keyword performance.

### 7.1 View Search Performance

1. Go to **"Performance"** (left sidebar)

2. **Enable these metrics** (checkboxes at top):
   - ✅ Total clicks
   - ✅ Total impressions
   - ✅ Average CTR
   - ✅ Average position

3. **View data**:
   - **Queries**: Keywords people used to find your blog
   - **Pages**: Which blog posts get the most traffic
   - **Countries**: Geographic distribution
   - **Devices**: Mobile vs. desktop traffic

---

### 7.2 Track Target Keywords

From your blog spec, you're targeting:
- **"spec driven development"** (~1,200 searches/mo)
- **"build ai agent kit"** (~800 searches/mo)
- **"organizational methodology"** (competitive term)

**How to track**:

1. Go to **"Performance"** → **"Queries"** tab

2. **Filter by query**:
   - Click **"+ NEW"** → **"Query"**
   - Select **"Queries containing"**
   - Enter: `spec driven development`

3. **Monitor ranking**:
   - **Position**: Your average ranking for that keyword (1-100+)
   - **Clicks**: How many people clicked your result
   - **Impressions**: How many times your result appeared
   - **CTR**: Clicks / Impressions (higher = better title/description)

**Success metrics** (from your spec):
- **Month 1**: 30% of posts indexed
- **Month 3**: 60% on page 2+ (positions 11-20)
- **Month 6**: 40% on page 1 (positions 1-10)
- **Month 12**: 60% on page 1

---

### 7.3 Set Up Email Reports (Recommended)

1. Go to **"Settings"** → **"Email notifications"**

2. **Enable these alerts**:
   - ✅ **Search performance report** (weekly or monthly)
   - ✅ **Index coverage issues** (if pages aren't indexed)
   - ✅ **Manual actions** (if Google penalizes your site)
   - ✅ **Security issues** (hacking, malware warnings)

3. **Choose frequency**: Weekly (for active blogs) or Monthly (for slower blogs)

---

## Ongoing Maintenance

### Weekly Tasks (5-10 minutes)

1. **Check Performance Dashboard**:
   - Go to "Performance" → review clicks, impressions, average position
   - Identify: Which posts are growing? Which are stagnating?

2. **Monitor Indexing**:
   - Go to "Pages" → check "Not indexed" count
   - If count is high, investigate why (quality issues, robots.txt blocking, etc.)

3. **Review Queries**:
   - Look for new keywords you're ranking for
   - Optimize underperforming posts (add those keywords to content)

---

### Monthly Tasks (30-60 minutes)

1. **Analyze Top Pages**:
   - Go to "Performance" → "Pages" tab
   - Identify top 5 performing posts
   - Double down: Create related content, improve internal linking

2. **Keyword Ranking Progress**:
   - Export CSV: "Performance" → "Queries" → click download icon
   - Track: Position changes for target keywords (spec driven development, etc.)
   - Update: [specs/002-spec-kits-blogs/analytics-log.md] with findings

3. **Backlink Tracking**:
   - Go to "Links" (left sidebar)
   - Review: "Top linking sites" (domains linking to your blog)
   - Target: 5+ backlinks per post within 6 months (from spec)

4. **Fix Indexing Issues**:
   - Go to "Pages" → "Not indexed" tab
   - Fix: Common issues (duplicate content, thin content, crawl errors)
   - Re-submit: Fixed URLs via "URL Inspection" tool

---

### Quarterly Review (1-2 hours)

1. **Compare Against Spec Goals**:
   - Organic traffic: Are you hitting 500 (M1) → 2K (M3) → 8K (M6) targets?
   - Keyword rankings: On track for page 2+ (M3) → page 1 (M6) targets?

2. **Content Audit**:
   - Identify: Posts with low CTR (< 2%)
   - Fix: Rewrite meta descriptions, improve titles
   - Update: Refresh content with new data, case studies

3. **Competitive Analysis**:
   - Search your target keywords in Google
   - Analyze: Who's ranking #1-3? What makes their content better?
   - Improve: Update your posts to match or exceed quality

---

## Troubleshooting

### Issue 1: "Property verification failed"

**Cause**: Meta tag or HTML file not detected

**Fix**:
1. Verify tag is in `<head>` section (not `<body>`)
2. Clear browser cache and redeploy site
3. Wait 1-2 hours for DNS/cache propagation
4. Try alternative verification method (HTML file instead of tag)

---

### Issue 2: "Sitemap couldn't be read"

**Cause**: Sitemap URL returns 404 or malformed XML

**Fix**:
1. Test sitemap URL in browser: `https://agentii.ai/sitemap.xml`
2. Verify Next.js sitemap.ts file exists in `/app/` folder
3. Check for XML syntax errors (validate at [xmlvalidation.com](https://www.xmlvalidation.com/))
4. Redeploy and re-submit sitemap

---

### Issue 3: "Crawled - currently not indexed"

**Cause**: Google crawled page but decided not to index (low quality, duplicate content, etc.)

**Fix**:
1. **Improve content quality**:
   - Add 300-500 more words
   - Include original data or case studies
   - Fix grammar and spelling errors

2. **Check for duplicate content**:
   - Use [copyscape.com](https://www.copyscape.com/) or Google search for exact phrases
   - If duplicate, rewrite unique sections

3. **Add internal links**:
   - Link from high-authority pages (homepage, popular posts) to new post

4. **Wait 2-4 weeks** and check again (Google re-crawls periodically)

---

### Issue 4: "Server error (5xx)"

**Cause**: Your server returned error 500/503 when Google tried to crawl

**Fix**:
1. Check Vercel deployment logs for errors
2. Test URL in browser (does it load correctly?)
3. Monitor uptime (use UptimeRobot.com for free monitoring)
4. If persistent, contact Vercel support

---

### Issue 5: "Soft 404 error"

**Cause**: Page returns 200 OK but has no content (or very little content)

**Fix**:
1. Add more content (aim for 1,200+ words per blog spec)
2. Ensure page has heading tags (H1, H2, H3)
3. Add structured data (JSON-LD - already implemented in Task 1)

---

## Success Checklist

Use this checklist to verify your GSC setup is complete:

### Initial Setup (Week 1)

- [ ] Google account created
- [ ] Property added to GSC (URL prefix: `https://agentii.ai/blog`)
- [ ] Ownership verified (HTML tag or file)
- [ ] Sitemap submitted (`https://agentii.ai/sitemap.xml`)
- [ ] Email notifications enabled
- [ ] Target keywords documented (spec driven development, build ai agent kit, etc.)

### Validation (Week 2-3)

- [ ] At least 3 posts discovered in "Pages" report
- [ ] Sitemap status shows "Success" with correct URL count
- [ ] No critical errors in "Coverage" report
- [ ] First impressions showing in "Performance" report (may take 7-14 days)

### Optimization (Month 1-3)

- [ ] Weekly performance reviews scheduled
- [ ] Monthly keyword ranking tracking implemented
- [ ] Analytics log created: [specs/002-spec-kits-blogs/analytics-log.md]
- [ ] Underperforming posts identified and updated
- [ ] Internal linking strategy executed (3-5 internal links per post)

---

## Next Steps

✅ **You've completed GSC setup!**

**What to do next**:

1. **Set up Plausible Analytics** (Task 3) for privacy-first traffic tracking
2. **Integrate with Google Analytics 4** (Task 3) for deeper user behavior insights
3. **Create monthly reporting dashboard** combining GSC + Plausible + GA4 data

**Resources**:
- [Google Search Console Help Center](https://support.google.com/webmasters)
- [Search Console Training Course (free)](https://developers.google.com/search/docs/beginner/search-console-training)
- [Agentii Blog SEO Strategy](../specs/002-spec-kits-blogs/spec.md)

---

**Last updated**: December 8, 2025
**Maintained by**: Agentii-Kit Team
**Estimated setup time**: 30-45 minutes
