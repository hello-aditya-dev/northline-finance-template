# Northline Finance — Start Here

## What This Is

Northline Finance is a production-ready website template for fractional CFO and accounting firms. It's built as a single-page application with 22 distinct sections, a modern financial editorial aesthetic, and a complete content system.

**Live preview**: All content is demonstration/fictional. Before deploying, replace all content with your firm's real information.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 + shadcn/ui |
| Animation | Framer Motion |
| Forms | react-hook-form + zod |
| Fonts | Playfair Display (display) + Inter (body) |
| Database | Prisma ORM (SQLite) — available if needed |
| Deployment | Vercel-ready |

## Quick Start

```bash
# Install dependencies
bun install

# Start development server
bun run dev

# Push database schema (if using Prisma features)
bun run db:push

# Lint check
bun run lint
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (fonts, metadata, structured data)
│   ├── page.tsx            # Main page composing all sections
│   ├── globals.css         # Design tokens, typography, utilities
│   └── api/contact/        # Contact form API route
├── config/
│   └── site.ts             # Company name, contact, navigation, social links
├── content/
│   ├── services.ts         # Service families and sub-services
│   ├── industries.ts       # Industry verticals
│   ├── case-studies.ts     # Case studies (demo)
│   ├── team.ts             # Team members
│   ├── insights.ts         # Articles/insights
│   └── faq.ts              # FAQ items
├── components/
│   ├── layout/             # Header, Footer, MobileNav
│   ├── sections/           # All page sections (22 total)
│   ├── finance/            # Finance-specific components
│   └── ui/                 # shadcn/ui components
└── lib/
    ├── motion.ts           # Framer Motion utilities (reduced motion)
    ├── utils.ts            # General utilities
    └── db.ts               # Prisma client
```

## Customization Order

1. **Config**: `src/config/site.ts` — company name, contact info, navigation
2. **Content**: `src/content/*.ts` — all business content
3. **Colors**: `src/app/globals.css` — design tokens in `:root`
4. **Images**: Add real logos, team photos, OG images
5. **Legal**: Replace privacy/terms with real legal copy
6. **API**: Configure contact form with email provider
7. **Deploy**: Set `NEXT_PUBLIC_SITE_URL` and deploy to Vercel

## Documentation

| Document | Purpose |
|----------|---------|
| [CUSTOMIZATION_GUIDE.md](./CUSTOMIZATION_GUIDE.md) | How to change every element of the site |
| [CONTENT_GUIDE.md](./CONTENT_GUIDE.md) | Content that must be replaced before deployment |
| [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) | Vercel deployment instructions |
| [FORM_SETUP.md](./FORM_SETUP.md) | Contact form email provider setup |
| [ASSET_MANIFEST.md](./ASSET_MANIFEST.md) | All assets, sources, and licenses |
| [SEO_GUIDE.md](./SEO_GUIDE.md) | Metadata and structured data customization |
| [DEMO_CONTENT_NOTICE.md](./DEMO_CONTENT_NOTICE.md) | All fictional/demo content identified |
