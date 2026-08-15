# Content Guide

## What's Real vs. Fictional

All content in this template is **fictional demonstration content**. It was written to be plausible and professionally appropriate, but no real companies, people, or outcomes are represented.

## Content That MUST Be Replaced Before Deployment

### 🔴 Critical — Identifying Information

| Content | File | What to Change |
|---------|------|----------------|
| Company name "Northline Finance" | `src/config/site.ts` | Your firm's name |
| Email "hello@northlinefinance.com" | `src/config/site.ts` | Your real email |
| Phone "+1 (555) 234-5678" | `src/config/site.ts` | Your real phone |
| Address "Suite 400, 1200 Market Street, Denver, CO 80202" | `src/config/site.ts` | Your real address |
| LinkedIn URL | `src/config/site.ts` | Your real LinkedIn |

### 🔴 Critical — Team Members

| Content | File | What to Change |
|---------|------|----------------|
| 5 fictional team members | `src/content/team.ts` | Your real team |
| Extended bios | `src/components/sections/team-detail.tsx` | Real bios |
| Person structured data | `src/app/layout.tsx` | Real people |

### 🔴 Critical — Case Studies

| Content | File | What to Change |
|---------|------|----------------|
| 4 demo case studies (Meridian, Atlas, Pinnacle, Ridgeview) | `src/content/case-studies.ts` | Real case studies (or remove) |
| `isDemo` flags | Same file | Set to `false` for real studies |

### 🟡 Important — Services & Industries

| Content | File | Notes |
|---------|------|-------|
| Service descriptions | `src/content/services.ts` | Likely close; adjust to your actual services |
| Service details (when needed/problems/deliverables) | `src/components/sections/services-detail.tsx` | Update to match your approach |
| Industry verticals | `src/content/industries.ts` | Replace with your actual verticals |
| Industry approach descriptions | `src/components/sections/industries-detail.tsx` | Update for your expertise |

### 🟡 Important — Articles/Insights

| Content | File | Notes |
|---------|------|-------|
| 8 demo articles | `src/content/insights.ts` | Write your own or remove |
| Article body content | Same file | Only 3 have full body content |

### 🟡 Important — Legal

| Content | File | Notes |
|---------|------|-------|
| Privacy policy | `src/components/sections/privacy-section.tsx` | Must be replaced by a lawyer |
| Terms of service | `src/components/sections/terms-section.tsx` | Must be replaced by a lawyer |

## Content That Can Be Kept (With Review)

- **Problem framing / pain points** — Generic enough to be useful for most fractional CFO firms, but review for accuracy
- **Operating model / principles** — Written to be broadly applicable, but should reflect your actual approach
- **Business stage model** — Standard framework, likely applicable
- **Finance function progression** — Industry-standard model
- **FAQ answers** — Well-researched but should reflect your specific policies

## How to Add New Content

### Add a Team Member

1. Add entry to `src/content/team.ts` array
2. Add extended bio in `src/components/sections/team-detail.tsx` `extendedBios` record
3. Optionally add to structured data in `src/app/layout.tsx`

### Add a Case Study

1. Add entry to `src/content/case-studies.ts` array
2. Set `isDemo: false` for real studies

### Add an Article

1. Add entry to `src/content/insights.ts` array
2. Include `body` field with markdown-like formatting for full article
3. The article will automatically appear in insights-detail section and category filter

### Add an Industry

1. Add entry to `src/content/industries.ts` array
2. Add approach text in `src/components/sections/industries-detail.tsx` `industryApproach` record
