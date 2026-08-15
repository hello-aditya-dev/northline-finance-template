# Customization Guide

Everything in this template is designed to be customized without touching component code. Here's how to change each element.

## Company Name & Branding

**File**: `src/config/site.ts`

```ts
export const siteConfig = {
  companyName: "Your Firm Name",
  shortName: "ShortName",
  description: "Your firm's description",
  tagline: "Your tagline",
  // ...
};
```

The company name appears in: header, footer, consultation CTA, about section, contact section, meta tags, structured data.

## Contact Information

**File**: `src/config/site.ts`

```ts
contact: {
  email: "hello@yourfirm.com",
  phone: "+1 (555) 000-0000",
  address: "Your address here",
},
```

## Navigation

**File**: `src/config/site.ts`

The `navigation` array controls both desktop and mobile nav. Each item has `label` and `href` (section anchor).

## Colors

**File**: `src/app/globals.css`

Key variables in `:root`:
- `--background`: Main background (#FAFAF7 = warm off-white)
- `--foreground`: Main text color (#1A1A1A = charcoal)
- `--primary`: Navy (#2D3A4A)
- `--accent`: Financial green (#3D6B5E)
- `--border`: Warm border (#E2E2DD)

Custom color tokens in `@theme inline`:
- `--color-navy`, `--color-charcoal`, `--color-finance-green`
- `--color-warm-gray-100` through `--color-warm-gray-800`
- `--color-warm-border`, `--color-warm-border-strong`

## Fonts

**File**: `src/app/layout.tsx`

Currently uses Playfair Display (serif/display) and Inter (sans/body). To change:

1. Update the Google font imports in `layout.tsx`
2. Update CSS variable names (`--font-playfair`, `--font-inter`)
3. Update `globals.css` `.font-display` and `.font-body` classes

## Services

**File**: `src/content/services.ts`

Three service families, each with sub-services. Structure:

```ts
export const serviceFamilies = [
  {
    family: "Family Name",
    tagline: "Short description",
    icon: "compass", // maps to Lucide icon
    services: [
      {
        name: "Service Name",
        description: "What this service does",
      },
    ],
  },
];
```

**Also update**: `src/components/sections/services-detail.tsx` — the `serviceDetails` record maps service names (with spaces replaced by hyphens) to `whenNeeded`, `problems`, and `deliverables` arrays.

## Industries

**File**: `src/content/industries.ts`

Each industry has: `slug`, `name`, `description`, `financialConcerns[]`, `commonServices[]`.

**Also update**: `src/components/sections/industries-detail.tsx` — the `industryApproach` record maps industry slugs to approach descriptions.

## Team Members

**File**: `src/content/team.ts`

```ts
export const team: TeamMember[] = [
  {
    name: "Full Name",
    role: "Title",
    shortBio: "Brief bio for card display",
    expertise: ["Skill 1", "Skill 2"],
  },
];
```

**Also update**: `src/components/sections/team-detail.tsx` — the `extendedBios` record maps member names to full biographies.

**Structured data**: `src/app/layout.tsx` — update `personSchemas` in the `StructuredData` function.

## Case Studies

**File**: `src/content/case-studies.ts`

Each case study has: `slug`, `company`, `industry`, `type`, `isDemo`, `situation`, `problem`, `work[]`, `outcomes[]`, `servicesUsed[]`, `conclusion`.

Set `isDemo: false` for real case studies (removes demo disclaimer).

## Insights/Articles

**File**: `src/content/insights.ts`

Each article has: `slug`, `title`, `category`, `excerpt`, `author`, `date`, `readingTime`, optional `body`.

The `body` field supports: `**bold text**`, `- bullet lists`, `1. numbered lists`, and regular paragraphs.

## FAQ

**File**: `src/content/faq.ts`

Items have: `question`, `answer`, `category`. Categories filter which FAQs appear in which sections.

## CTAs (Call-to-Action)

CTAs are inline in section components. To change CTA text:
- `src/components/sections/hero.tsx` — Primary and secondary CTAs
- `src/components/sections/fractional-cfo-deep-dive.tsx` — CFO section CTA
- `src/components/sections/accounting-deep-dive.tsx` — Accounting section CTA
- `src/components/sections/consultation-cta.tsx` — General CTA section

## Legal Copy

**Files**:
- `src/components/sections/privacy-section.tsx`
- `src/components/sections/terms-section.tsx`

Both contain demo legal text with a warning banner. Replace with your firm's actual legal policies and remove the warning banner.

## Metadata & SEO

**File**: `src/app/layout.tsx`

Update the `metadata` export and `StructuredData` function. See [SEO_GUIDE.md](./SEO_GUIDE.md) for details.
