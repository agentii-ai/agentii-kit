# Phase 2 Completion Guide: Vercel Dashboard Configuration

**Status**: 3 of 4 tasks complete | **Blocker**: T007 (manual Vercel setup)

---

## ✅ Completed Tasks

### T008: GitHub Repository Connected ✅
- **Status**: VERIFIED
- **Repository**: agentii-ai/agentii-kit on GitHub
- **Integration**: Connected to Vercel project
- **Auto-Deploy**: Enabled (default) - pushes to main trigger automatic builds

### T009: .env.production Created ✅
- **File**: `/Users/frank/X/agentii-kit/.env.production`
- **Content**: `NEXT_PUBLIC_SITE_URL=https://kits.agentii.ai`
- **Security**: Protected by `.gitignore` (pattern `.env*`)
- **Usage**: Automatically loaded by Vercel during production builds

### T010: next.config.js Configured ✅
- **File**: `/Users/frank/X/agentii-kit/next.config.js`
- **Configuration**:
  - `output: 'export'` - Static generation enabled
  - `experimental.outputFileTracingExcludes` - Platform-specific SWC handling
- **Output**: `.next/out/` directory (all platforms: macOS + Linux/Vercel)
- **Result**: Static HTML, CSS, JS files ready for Vercel deployment

---

## ⏳ Manual Step Required: T007

### Vercel Dashboard Configuration

**You need to complete this before the first deployment:**

#### Step 1: Access Vercel Project
1. Go to https://vercel.com/dashboard
2. Find your project: **agentii-kit**
3. Click on the project to open settings

#### Step 2: Build Settings (Settings → Build & Development)
1. **Build Command**: Set to `pnpm build`
2. **Output Directory**: Set to `.next/out`
3. **Install Command**: Set to `pnpm install --frozen-lockfile`
4. Click **Save**

#### Step 3: Environment Variables (Settings → Environment Variables)
1. Click **Add New**
2. **Name**: `NEXT_PUBLIC_SITE_URL`
3. **Value**: `https://kits.agentii.ai`
4. **Environments**: Select "Production" (for now; can add Preview later)
5. Click **Save**

#### Step 4: Node.js Version (Settings → Node.js Version)
1. **Version**: Select `18.x` (should be default)
2. Confirm and save

#### Step 5: Analytics (Settings → Analytics)
1. Find "Web Analytics"
2. **Status**: Set to **OFF** (we use Plausible Analytics only)
3. Save

#### Step 6: Verify Git Integration (Settings → Git)
1. Confirm "GitHub" is connected
2. Repository shows: `agentii-ai/agentii-kit`
3. Auto-deploy enabled on push to `main`

---

## 📋 Configuration Checklist

Print this and check off as you configure Vercel:

- [ ] Build Command set to `pnpm build`
- [ ] Output Directory set to `.next/out`
- [ ] Install Command set to `pnpm install --frozen-lockfile`
- [ ] NEXT_PUBLIC_SITE_URL = `https://kits.agentii.ai`
- [ ] Node.js version = 18.x
- [ ] Vercel Analytics = OFF
- [ ] GitHub integration verified
- [ ] Auto-deploy on main = ON

Once all checked ✅, proceed to Phase 3.

---

## 🚀 After T007 Complete

Once you've configured T007 on the Vercel dashboard:

### Trigger First Deployment
```bash
# From your local machine, push to main
git push origin main
# Or merge your feature branch to main on GitHub
```

### Monitor Deployment
1. Go to Vercel dashboard
2. Select agentii-kit project
3. Watch the build progress in real-time
4. View logs if build fails

### Phase 3 Can Begin
Once first deployment succeeds:
- Vercel creates preview deployment (T011-T018)
- Validate pages load without errors
- Test search, images, RSS feed
- Run Lighthouse validation
- Merge to main for production deployment

---

## 📊 Phase 2 Progress

| Task | Status | Details |
|------|--------|---------|
| T007 | ⏳ Manual | Vercel dashboard - awaiting user action |
| T008 | ✅ Done | GitHub integration verified |
| T009 | ✅ Done | .env.production created |
| T010 | ✅ Done | next.config.js configured |
| **Phase 2** | **75% Complete** | **Waiting on T007** |

---

## Next Steps

1. **Complete T007** - Configure Vercel dashboard using checklist above
2. **Push to GitHub** - Triggers automatic Vercel deployment
3. **Monitor build** - Check Vercel logs for success
4. **Proceed to Phase 3** - Test preview deployment and validate

---

**Time to complete T007**: ~5-10 minutes on Vercel dashboard

**Dependency**: T007 must complete before Phase 3 can begin
