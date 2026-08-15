"use client";

import { motion } from "framer-motion";

const businessStages = [
  {
    stage: "Early Growth",
    revenue: "$2–5M",
    typicalNeeds: ["Accounting structure", "First management reporting", "Close process cleanup"],
    financeMaturity: 1,
  },
  {
    stage: "Scaling",
    revenue: "$5–15M",
    typicalNeeds: ["Cash flow forecasting", "KPI development", "Fractional CFO guidance", "Controller oversight"],
    financeMaturity: 2,
  },
  {
    stage: "Established",
    revenue: "$15–30M",
    typicalNeeds: ["Board & investor reporting", "Strategic decision support", "Finance team leadership", "Process optimization"],
    financeMaturity: 3,
  },
];

export function BusinessStageIndicator() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-0">
      {businessStages.map((stage, i) => (
        <motion.div
          key={stage.stage}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.15 }}
          className={`p-6 md:p-8 ${
            i < 2 ? "md:border-r" : ""
          } ${i > 0 ? "border-t md:border-t-0" : ""} border-warm-border`}
        >
          {/* Stage header */}
          <div className="mb-4">
            <div className="font-display text-xl text-charcoal tracking-tight">
              {stage.stage}
            </div>
            <div className="text-xs font-medium text-finance-green mt-1">
              {stage.revenue} revenue
            </div>
          </div>

          {/* Maturity indicator */}
          <div className="flex gap-1 mb-4">
            {[1, 2, 3].map((level) => (
              <div
                key={level}
                className={`h-1 flex-1 rounded-full ${
                  level <= stage.financeMaturity
                    ? "bg-finance-green"
                    : "bg-warm-gray-200"
                }`}
              />
            ))}
          </div>

          {/* Typical needs */}
          <div className="text-xs text-warm-gray-500 mb-2 uppercase tracking-wider font-medium">
            Typical needs
          </div>
          <ul className="space-y-1.5">
            {stage.typicalNeeds.map((need) => (
              <li key={need} className="text-sm text-warm-gray-600 flex items-start gap-2">
                <span className="w-1 h-1 rounded-full bg-finance-green mt-2 shrink-0" />
                {need}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}
