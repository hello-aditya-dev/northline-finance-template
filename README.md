# Northline Finance — Accounting & Fractional CFO Website Template

A production-ready, commercial website template for accounting firms, fractional CFO practices, and financial operations consultancies. Built with Next.js 16, TypeScript, Tailwind CSS, and shadcn/ui.

---

## What This Is

This is a **vertical-specific website template** designed for freelance web designers, developers, and small agencies who build websites for accounting and fractional CFO clients. It provides a complete, professional site that can be customized and delivered to a paying client.

**Fictional brand**: Northline Finance — a fractional CFO and accounting support firm serving founder-led businesses.

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open in browser
open http://localhost:3000
```

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| Next.js | 16 (App Router) | Framework |
| React | 19 | UI library |
| TypeScript | 5 | Type safety |
| Tailwind CSS | 4 | Styling |
| shadcn/ui | Latest | Component library |
| Framer Motion | 12+ | Animations |
| react-hook-form | 7+ | Form handling |
| Zod | 4+ | Validation |
| Lucide React | Latest | Icons |

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Main single-page composition
│   ├── layout.tsx            # Root layout with fonts, metadata, structured data
│   ├── globals.css           # Design tokens, typography, utilities
│   └── api/contact/route.ts  # Contact form API
│
├── components/
│   ├── layout/               # Header, Footer, MobileNav
│   ├── sections/             # 12+ page sections (hero, services, team, etc.)
│   ├── finance/              # Vertical-specific components
│   └── ui/                   # shadcn/ui primitives
│
├── config/
│   └── site.ts               # Centralized site configuration
│
├── content/
│   ├── services.ts           # 3 service families, 12 services
│   ├── industries.ts         # 6 industry verticals
│   ├── case-studies.ts       # 4 demo case studies
│   ├── team.ts               # 5 fictional team members
│   ├── insights.ts           # 8 articles (3 with full body content)
│   └── faq.ts                # 10 FAQ items
│
├── lib/
│   ├── motion.ts             # Reduced motion utilities
│   ├── utils.ts              # General utilities
│   └── db.ts                 # Prisma client
│
└── docs/                     # Template documentation
    ├── START_HERE.md
    ├── CUSTOMIZATION_GUIDE.md
    ├── CONTENT_GUIDE.md
    ├── DEPLOYMENT_GUIDE.md
    ├── FORM_SETUP.md
    ├── ASSET_MANIFEST.md
    ├── SEO_GUIDE.md
    └── DEMO_CONTENT_NOTICE.md
```

## Customization

All business data is centralized. To customize for a real client:

1. **Edit `src/config/site.ts`** — Company name, contact info, social links
2. **Edit `src/content/`** — Services, industries, team, case studies, articles
3. **Edit `src/app/globals.css`** — Color tokens and typography
4. **Replace images** in `public/` with client's brand assets

See [`docs/CUSTOMIZATION_GUIDE.md`](docs/CUSTOMIZATION_GUIDE.md) for detailed instructions with exact file paths.

## Design Direction

**Modern Financial Editorial** — The site feels like a combination of a strong independent financial consultancy, a considered editorial publication, and a precise professional-services brand.

### Color Palette

| Color | Hex | Usage |
|---|---|---|
| Paper | `#FAFAF7` | Background |
| Charcoal | `#1A1A1A` | Primary text |
| Navy | `#2D3A4A` | Headings, primary buttons |
| Finance Green | `#3D6B5E` | Accents, CTAs, highlights |
| Warm Gray scale | `#F5F5F2`–`#2A2A27` | Supporting grays |

### Typography

- **Display/Headings**: Playfair Display (serif) — editorial, authoritative
- **Body**: Inter (sans-serif) — highly legible, professional

## Sections

The site is a single-page application with scroll-to navigation:

| Section | Description |
|---|---|
| Hero | Restrained positioning statement with CTAs |
| Client Fit | Who Northline works with |
| Problem Framing | Common financial pain points |
| Service Architecture | Three service families with sub-services |
| Business Stage Fit | Services mapped to growth stages |
| Engagement Process | How working with Northline works |
| Industry Expertise | Vertical-specific financial concerns |
| Case Study Preview | Featured case studies with outcomes |
| Numerical Outcomes | Demo business metrics |
| Team Preview | Featured advisors |
| Insights Preview | Latest articles |
| Consultation CTA | Primary conversion section |
| Services Detail | Expandable service families with FAQ |
| Fractional CFO Deep Dive | Long-form editorial on CFO services |
| Accounting Deep Dive | Detailed accounting/bookkeeping content |
| Industries Detail | Interactive industry explorer |
| Case Studies Detail | All case studies with full detail dialogs |
| About | Philosophy, operating model, principles |
| Team Detail | Full team with extended bios |
| Insights Detail | All articles with category filter and reader |
| Contact | Validated consultation form |
| Privacy & Terms | Demo legal content |

## Key Scripts

```bash
npm run dev       # Development server (port 3000)
npm run build     # Production build
npm run lint      # ESLint check
```

## Contact Form Setup

The contact form works in demo mode by default (submissions logged to console). To enable email delivery:

1. Copy `.env.example` to `.env.local`
2. Add your email provider API key (Resend, SendGrid, etc.)
3. Update the API route in `src/app/api/contact/route.ts`

See [`docs/FORM_SETUP.md`](docs/FORM_SETUP.md) for detailed instructions.

## Deployment

The recommended deployment path is **Vercel**:

```bash
npx vercel
```

See [`docs/DEPLOYMENT_GUIDE.md`](docs/DEPLOYMENT_GUIDE.md) for full instructions.

## Demo Content Notice

**All content in this template is fictional and created for demonstration purposes only.**

- Company name "Northline Finance" is fictional
- Team members are fictional
- Case studies are demonstration scenarios with fictional companies and outcomes
- Contact information is placeholder
- Legal pages are demo content requiring legal review

**Replace all demo content before deploying for a real client.**

See [`docs/DEMO_CONTENT_NOTICE.md`](docs/DEMO_CONTENT_NOTICE.md) for a complete checklist.

## Documentation

| Document | Description |
|---|---|
| [START_HERE.md](docs/START_HERE.md) | Project overview and quick start |
| [CUSTOMIZATION_GUIDE.md](docs/CUSTOMIZATION_GUIDE.md) | How to customize every element |
| [CONTENT_GUIDE.md](docs/CONTENT_GUIDE.md) | How to manage and replace content |
| [DEPLOYMENT_GUIDE.md](docs/DEPLOYMENT_GUIDE.md) | Vercel deployment guide |
| [FORM_SETUP.md](docs/FORM_SETUP.md) | Contact form email integration |
| [ASSET_MANIFEST.md](docs/ASSET_MANIFEST.md) | Asset sources and licenses |
| [SEO_GUIDE.md](docs/SEO_GUIDE.md) | Metadata and structured data |
| [DEMO_CONTENT_NOTICE.md](docs/DEMO_CONTENT_NOTICE.md) | Fictional content identification |

## Accessibility

- Semantic HTML landmarks (header, main, nav, footer)
- Proper heading hierarchy (H1 → H2 → H3)
- ARIA labels and roles
- Keyboard navigation with visible focus states
- `prefers-reduced-motion` support
- Form labels and validation

## License

This template is provided for commercial use. See `LICENSE` for terms.

---

Built with [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), and [shadcn/ui](https://ui.shadcn.com/).
