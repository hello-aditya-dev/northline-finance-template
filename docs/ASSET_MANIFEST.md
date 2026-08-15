# Asset Manifest

## Fonts

| Asset | Source | License |
|-------|--------|---------|
| Playfair Display | Google Fonts | SIL Open Font License 1.1 |
| Inter | Google Fonts | SIL Open Font License 1.1 |

Both fonts are loaded via `next/font/google` with `display: "swap"` for optimal performance.

## Icons

| Asset | Source | License |
|-------|--------|---------|
| Lucide Icons | [lucide.dev](https://lucide.dev) | ISC License |

Used throughout for: navigation icons, section icons, CTA arrows, form icons, social icons.

## Images

### Currently Used

| Asset | Location | Notes |
|-------|----------|-------|
| Favicon | `public/favicon.ico` | Next.js default — replace with your own |

### Needed Before Deployment

| Asset | Recommended Size | Location | Purpose |
|-------|-----------------|----------|---------|
| OG Image | 1200×630px | `public/og-image.png` | Open Graph / social sharing |
| Logo | SVG or PNG | `public/logo.png` | Structured data logo reference |
| Team Photos | 400×400px | Consider `/public/team/` | Team member avatars (currently using initials) |

### Team Member Avatars

Currently, team members display initials in an AvatarFallback component. To add real photos:

1. Add image files to `public/team/` (e.g., `catherine-hale.jpg`)
2. Update `src/content/team.ts` to include an `image` field
3. Update `src/components/sections/team-detail.tsx` to render `<AvatarImage>` when an image is available

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| Paper / Background | #FAFAF7 | Main background |
| Charcoal | #1A1A1A | Primary text |
| Navy | #2D3A4A | Headings, primary buttons, accents |
| Finance Green | #3D6B5E | CTAs, key numbers, section markers |
| Finance Green Light | #4F8A78 | Hover states, secondary accents |
| Warm Border | #E2E2DD | Borders, dividers |
| Warm Border Strong | #CCCCC6 | Emphasized borders |

## Third-Party Dependencies

All dependencies are listed in `package.json`. Key ones:

| Package | Purpose | License |
|---------|---------|---------|
| Next.js 16 | Framework | MIT |
| Tailwind CSS 4 | Styling | MIT |
| Framer Motion | Animation | MIT |
| shadcn/ui | UI components | MIT |
| react-hook-form | Form handling | MIT |
| zod | Schema validation | MIT |
| Lucide React | Icons | ISC |
