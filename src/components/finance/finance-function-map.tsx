"use client";

import { serviceFamilies } from "@/content/services";

const businessStages = [
  {
    stage: "Early Growth",
    revenue: "$2–5M",
    description: "Growing past basic bookkeeping. Need accounting structure and first management reporting.",
    services: ["Monthly Accounting", "Bookkeeping", "Close Support", "Management Reporting"],
  },
  {
    stage: "Scaling",
    revenue: "$5–15M",
    description: "Finance function needs to keep up. Adding forecasting, KPI reporting, and cash flow management.",
    services: ["Controller Services", "Cash Flow Management", "KPI Reporting", "Forecasting & Planning", "Fractional CFO"],
  },
  {
    stage: "Established",
    revenue: "$15–30M",
    description: "Need senior financial leadership for boards, investors, and complex decisions.",
    services: ["Fractional CFO", "Board & Investor Reporting", "Decision Support", "Process Improvement", "Forecasting & Planning"],
  },
];

const allServiceNames = serviceFamilies.flatMap((f) => f.services.map((s) => s.name));

function getServiceFamily(serviceName: string): string {
  for (const family of serviceFamilies) {
    if (family.services.some((s) => s.name === serviceName)) {
      return family.family;
    }
  }
  return "";
}

const familyColors: Record<string, string> = {
  "Strategic Finance": "bg-finance-green",
  "Financial Operations": "bg-navy",
  Accounting: "bg-warm-gray-400",
};

export function FinanceFunctionMap() {
  return (
    <div className="space-y-0">
      {businessStages.map((stage, i) => (
        <div
          key={stage.stage}
          className={`py-6 md:py-8 ${i > 0 ? "border-t border-warm-border" : ""}`}
        >
          <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
            <div className="md:w-48 shrink-0">
              <div className="font-display text-lg text-charcoal tracking-tight">
                {stage.stage}
              </div>
              <div className="text-xs font-medium text-finance-green mt-0.5">
                {stage.revenue} revenue
              </div>
            </div>
            <div className="flex-1">
              <p className="text-sm text-warm-gray-600 mb-4 leading-relaxed">
                {stage.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {stage.services.map((service) => {
                  const family = getServiceFamily(service);
                  const colorClass = familyColors[family] || "bg-warm-gray-400";
                  return (
                    <span
                      key={service}
                      className={`inline-flex items-center gap-1.5 text-xs font-medium text-white ${colorClass} px-2.5 py-1 rounded-sm`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
                      {service}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="pt-4 flex flex-wrap gap-4 text-xs text-warm-gray-500">
        {Object.entries(familyColors).map(([family, color]) => (
          <span key={family} className="inline-flex items-center gap-1.5">
            <span className={`w-2.5 h-2.5 rounded-sm ${color}`} />
            {family}
          </span>
        ))}
      </div>
    </div>
  );
}
