export interface Industry {
  name: string;
  slug: string;
  description: string;
  financialConcerns: string[];
  commonServices: string[];
}

export const industries: Industry[] = [
  {
    name: "Professional Services",
    slug: "professional-services",
    description:
      "Law firms, architecture practices, engineering consultants, and other knowledge-based businesses where project economics and resource utilization drive profitability.",
    financialConcerns: [
      "Project margin visibility and tracking",
      "Utilization rate measurement and optimization",
      "Cash timing mismatches between project delivery and billing",
      "Realization rates and write-off management",
      "Partner compensation and distribution modeling",
    ],
    commonServices: ["Fractional CFO", "Management Reporting", "KPI Reporting", "Forecasting & Planning"],
  },
  {
    name: "Technology",
    slug: "technology",
    description:
      "SaaS companies, software businesses, and technology startups that need to manage capital efficiency, communicate with investors, and plan for financing milestones.",
    financialConcerns: [
      "Burn rate and runway monitoring",
      "ARR/MRR tracking and cohort analysis",
      "Financing milestone planning and preparation",
      "Board and investor reporting standards",
      "Revenue recognition and deferred revenue",
    ],
    commonServices: ["Fractional CFO", "Board & Investor Reporting", "Forecasting & Planning", "Decision Support"],
  },
  {
    name: "Ecommerce",
    slug: "ecommerce",
    description:
      "Direct-to-consumer brands and multi-channel retailers where inventory, margin structure, and cash conversion cycles determine financial health.",
    financialConcerns: [
      "Contribution margin by product and channel",
      "Inventory management and carrying cost optimization",
      "Channel performance and ROAS measurement",
      "Cash conversion cycle management",
      "COGS accuracy and margin protection",
    ],
    commonServices: ["Controller Services", "Cash Flow Management", "Management Reporting", "KPI Reporting"],
  },
  {
    name: "Agencies",
    slug: "agencies",
    description:
      "Creative, digital, and marketing agencies balancing project work with retainers, managing staffing costs against revenue, and dealing with client payment timing.",
    financialConcerns: [
      "Project margins vs. blended agency margins",
      "Staff utilization and capacity planning",
      "Recurring retainer revenue vs. project revenue mix",
      "Pipeline-to-capacity alignment",
      "Freelance vs. full-time cost trade-offs",
    ],
    commonServices: ["Fractional CFO", "KPI Reporting", "Management Reporting", "Forecasting & Planning"],
  },
  {
    name: "Consulting",
    slug: "consulting",
    description:
      "Management and strategy consulting firms where revenue is tied directly to consultant productivity and engagement profitability.",
    financialConcerns: [
      "Revenue per consultant and per engagement",
      "Project pipeline and revenue forecasting",
      "Utilization and bench cost management",
      "Engagement profitability by client and type",
      "Scaling economics and leverage modeling",
    ],
    commonServices: ["Fractional CFO", "Management Reporting", "Forecasting & Planning", "Decision Support"],
  },
  {
    name: "Recurring Revenue Businesses",
    slug: "recurring-revenue",
    description:
      "Subscription and membership-based businesses where unit economics, retention, and customer lifetime value determine long-term viability.",
    financialConcerns: [
      "MRR/ARR growth and composition analysis",
      "Churn and retention measurement",
      "Customer lifetime value (LTV) modeling",
      "CAC payback period tracking",
      "Expansion and contraction revenue dynamics",
    ],
    commonServices: ["Fractional CFO", "KPI Reporting", "Board & Investor Reporting", "Forecasting & Planning"],
  },
];
