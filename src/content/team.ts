export interface TeamMember {
  name: string;
  role: string;
  shortBio: string;
  expertise: string[];
}

export const team: TeamMember[] = [
  {
    name: "Catherine Hale",
    role: "Managing Partner & Fractional CFO",
    shortBio:
      "Catherine spent 15 years in CFO and VP Finance roles across technology and professional services companies before founding Northline. She works directly with founder-CEOs who need senior financial counsel but aren't ready for a full-time CFO.",
    expertise: [
      "Strategic financial planning",
      "Board and investor communication",
      "Growth-stage finance operations",
      "Cash flow and scenario modeling",
    ],
  },
  {
    name: "Daniel Reeves",
    role: "Finance Director",
    shortBio:
      "Daniel brings deep experience in management reporting and financial operations from both corporate and consulting environments. He focuses on building reporting systems that make financial information genuinely useful for business decisions.",
    expertise: [
      "Management reporting design",
      "KPI framework development",
      "Financial process improvement",
      "Cross-functional reporting alignment",
    ],
  },
  {
    name: "Sarah Chen",
    role: "Controller",
    shortBio:
      "Sarah has managed accounting operations for companies ranging from $2M to $50M in revenue. She specializes in cleaning up accounting functions, accelerating the close process, and building the controls and procedures that growing companies need.",
    expertise: [
      "Month-end close optimization",
      "Technical accounting",
      "Process and controls development",
      "Multi-entity accounting",
    ],
  },
  {
    name: "Marcus Webb",
    role: "Senior Accountant",
    shortBio:
      "Marcus handles the detail work that keeps financial records accurate and close processes on schedule. He's methodical about reconciliations and takes pride in clean, audit-ready financials delivered on time.",
    expertise: [
      "Financial statement preparation",
      "Account reconciliations",
      "Close process execution",
      "Tax readiness and coordination",
    ],
  },
  {
    name: "Ainsley Porter",
    role: "Operations & Client Services",
    shortBio:
      "Ainsley manages client onboarding, engagement logistics, and the operational systems that keep Northline running smoothly. She's the primary point of contact for day-to-day coordination and ensures nothing falls through the cracks.",
    expertise: [
      "Client engagement management",
      "Onboarding and transition",
      "Operational systems and workflows",
      "Quality assurance and delivery tracking",
    ],
  },
];
