export interface ServiceItem {
  name: string;
  description: string;
}

export interface ServiceFamily {
  family: string;
  tagline: string;
  services: ServiceItem[];
  icon: string;
}

export const serviceFamilies: ServiceFamily[] = [
  {
    family: "Strategic Finance",
    tagline: "Senior-level financial direction for decision-making and growth",
    icon: "compass",
    services: [
      {
        name: "Fractional CFO",
        description:
          "Part-time chief financial officer providing strategic finance leadership, stakeholder communication, and forward-looking financial guidance.",
      },
      {
        name: "Forecasting & Planning",
        description:
          "Multi-scenario financial models, annual budgets, rolling forecasts, and long-range planning tied to business objectives.",
      },
      {
        name: "Decision Support",
        description:
          "Financial analysis for key business decisions — pricing, expansion, hiring, capital allocation, and investment evaluation.",
      },
      {
        name: "Board & Investor Reporting",
        description:
          "Investor-ready financial packages, board decks, KPI reporting, and communication frameworks for stakeholders and capital partners.",
      },
    ],
  },
  {
    family: "Financial Operations",
    tagline: "Reliable financial infrastructure that supports growth",
    icon: "settings",
    services: [
      {
        name: "Management Reporting",
        description:
          "Monthly financial packages with variance analysis, trend reporting, and narrative commentary that makes the numbers useful.",
      },
      {
        name: "Cash Flow Management",
        description:
          "13-week rolling cash forecasts, working capital optimization, and cash flow monitoring that prevents surprises.",
      },
      {
        name: "KPI Reporting",
        description:
          "Business-specific key performance indicators, dashboards, and measurement frameworks that connect finance to operations.",
      },
      {
        name: "Process Improvement",
        description:
          "Streamlining close processes, reporting workflows, and financial operations to reduce cycle time and increase reliability.",
      },
    ],
  },
  {
    family: "Accounting",
    tagline: "Accurate, timely accounting as the foundation for everything else",
    icon: "book-open",
    services: [
      {
        name: "Monthly Accounting",
        description:
          "Complete monthly accounting cycle — transaction processing, reconciliations, adjustments, and financial statements.",
      },
      {
        name: "Bookkeeping",
        description:
          "Day-to-day transaction recording, categorization, and maintenance of clean, audit-ready financial records.",
      },
      {
        name: "Close Support",
        description:
          "Accelerating and improving the month-end close process with checklists, procedures, and close calendar management.",
      },
      {
        name: "Controller Services",
        description:
          "Accounting oversight, technical accounting matters, policy development, and ensuring accuracy and compliance across the finance function.",
      },
    ],
  },
];

export const allServices = serviceFamilies.flatMap((f) =>
  f.services.map((s) => ({
    ...s,
    family: f.family,
  }))
);
