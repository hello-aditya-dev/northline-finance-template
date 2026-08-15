# Deployment Guide

## Vercel Deployment (Recommended)

### Prerequisites

- A [Vercel](https://vercel.com) account
- Your project pushed to a Git repository (GitHub, GitLab, or Bitbucket)

### Steps

1. **Push your code to Git**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Import on Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your Git repository
   - Framework Preset: **Next.js** (auto-detected)

3. **Set Environment Variables**
   - `NEXT_PUBLIC_SITE_URL` = `https://your-domain.com`
   - Optionally: `RESEND_API_KEY`, `CONTACT_FORM_RECIPIENT` (see [FORM_SETUP.md](./FORM_SETUP.md))

4. **Deploy**
   - Click "Deploy"
   - Vercel will build and deploy automatically

5. **Custom Domain** (optional)
   - In Vercel dashboard → Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed
   - Update `NEXT_PUBLIC_SITE_URL` to match

### Automatic Deployments

Once connected, Vercel deploys automatically on every push to `main`. Preview deployments are created for pull requests.

## Build Verification

Before deploying, verify locally:

```bash
# Run lint check
bun run lint

# The project uses Next.js 16 — do NOT run bun run build
# Vercel handles the build automatically
```

## Post-Deployment Checklist

- [ ] Replace all demo content (see [CONTENT_GUIDE.md](./CONTENT_GUIDE.md))
- [ ] Configure contact form email provider (see [FORM_SETUP.md](./FORM_SETUP.md))
- [ ] Set `NEXT_PUBLIC_SITE_URL` environment variable
- [ ] Add OG image at `public/og-image.png` (1200×630px)
- [ ] Add logo at `public/logo.png`
- [ ] Add favicon at `public/favicon.ico`
- [ ] Verify structured data with [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Verify meta tags with [Open Graph Debugger](https://www.opengraph.xyz/)
- [ ] Test contact form submission
- [ ] Run Lighthouse audit for performance and accessibility scores
- [ ] Replace privacy policy and terms with real legal copy
- [ ] Remove demo case study disclaimers (`isDemo` flags)
