# SEO Guide

## Current SEO Implementation

### Page Metadata

**File**: `src/app/layout.tsx`

The metadata export includes:
- **Title**: "Northline Finance | Fractional CFO & Accounting for Growing Businesses"
- **Description**: Optimized for the primary value proposition
- **Keywords**: Fractional CFO, accounting, finance operations, etc.
- **Open Graph**: Title, description, URL, site name, locale, image
- **Twitter**: summary_large_image card with title and description
- **Canonical URL**: Set via `NEXT_PUBLIC_SITE_URL` environment variable
- **Robots**: Full indexing allowed

### Structured Data (JSON-LD)

**File**: `src/app/layout.tsx` — `StructuredData` component

Two schemas are embedded:

1. **Organization + ProfessionalService** schema
   - Company name, description, URL
   - Contact information (email, phone, address)
   - Service types offered
   - Area served (United States)
   - Price range
   - LinkedIn sameAs link

2. **Person schemas** (for key team members)
   - Name, job title
   - worksFor relationship
   - knowsAbout expertise areas

## Customization

### Change Page Title & Description

Edit the `metadata` export in `src/app/layout.tsx`:

```ts
export const metadata: Metadata = {
  title: {
    default: "Your Firm | Your Value Proposition",
    template: "%s | Your Firm",
  },
  description: "Your optimized description (150-160 characters)",
  keywords: ["your", "keywords", "here"],
};
```

### Update Structured Data

In the `StructuredData` function in `layout.tsx`:

1. Update `organizationSchema` with your firm's information
2. Update `personSchemas` with your real team members
3. Add or remove Person schemas as needed

### Add More Structured Data

You can add additional schemas:

- **FAQPage**: Wrap FAQ sections with FAQPage schema
- **BreadcrumbList**: If you add sub-pages
- **LocalBusiness**: If you have a physical office clients visit

### Set Canonical URL

Add to `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://your-actual-domain.com
```

### Open Graph Image

Create an OG image at `public/og-image.png`:
- **Size**: 1200×630 pixels
- **Format**: PNG (or JPG)
- **Content**: Your logo + tagline on brand background
- **Keep text centered** — social platforms may crop edges

## Verification

After deployment, verify your SEO setup:

1. **Google Rich Results Test**: https://search.google.com/test/rich-results
   - Enter your URL
   - Verify Organization and Person schemas are detected

2. **Open Graph Debugger**: https://www.opengraph.xyz/
   - Enter your URL
   - Verify OG image, title, and description render correctly

3. **Twitter Card Validator**: https://cards-dev.twitter.com/
   - Verify summary_large_image card renders

4. **Lighthouse SEO Audit**:
   ```bash
   # In Chrome DevTools → Lighthouse → SEO category
   ```
   - Check for: title, meta description, canonical, structured data, hreflang, robots

## SEO Best Practices Applied

- Single H1 on page (hero heading)
- Proper heading hierarchy (H1 → H2 → H3 → H4)
- Semantic HTML landmarks (header, main, nav, section, footer)
- Alt text / aria-hidden on decorative icons
- Canonical URL support
- Descriptive meta description (under 160 chars)
- Open Graph and Twitter card metadata
- JSON-LD structured data
- `lang="en"` on html element
- Clean, descriptive link text (no "click here")
- Proper form labels and ARIA attributes
