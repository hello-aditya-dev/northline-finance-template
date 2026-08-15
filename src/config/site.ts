export const siteConfig = {
  companyName: "Northline Finance",
  shortName: "Northline",
  description: "Fractional CFO and accounting support for founder-led businesses",
  tagline: "Senior finance guidance, without the full-time overhead",
  contact: {
    email: "hello@northlinefinance.com",
    phone: "+1 (555) 234-5678",
    address: "Suite 400, 1200 Market Street, Denver, CO 80202",
  },
  social: {
    linkedin: "https://linkedin.com/company/northlinefinance",
  },
  navigation: [
    { label: "Services", href: "#services-detail" },
    { label: "Industries", href: "#industries-detail" },
    { label: "Case Studies", href: "#case-studies-detail" },
    { label: "About", href: "#about" },
    { label: "Team", href: "#team-detail" },
    { label: "Insights", href: "#insights-detail" },
    { label: "Contact", href: "#contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
