"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { industries } from "@/content/industries";

const industryApproach: Record<string, string> = {
  "professional-services":
    "Professional services firms live on utilization and project margins. We start by making sure those numbers are being measured accurately — then build the reporting and planning infrastructure that lets partners make better decisions about client mix, staffing, and distributions. The goal is financial information that matches the sophistication of the practice.",
  technology:
    "Technology companies need financial operations that match how they operate — fast-moving, capital-efficient, and oriented toward milestones. We build the reporting that investors expect, the cash management that growth requires, and the planning infrastructure that lets founders focus on product rather than finance.",
  ecommerce:
    "Ecommerce businesses have a specific set of financial dynamics: inventory, margin structure, channel performance, and cash conversion. We start by getting channel-level visibility — which channels are truly profitable after all costs — and build from there into inventory planning, cash management, and the operational reporting that growth requires.",
  agencies:
    "Agencies balance project work with retainers, and the financial dynamics are different for each. We build reporting that distinguishes between project and recurring revenue, tracks utilization against capacity, and gives leadership the visibility to make profitable decisions about staffing, client mix, and growth.",
  consulting:
    "Consulting firms need to understand engagement profitability, utilization economics, and the relationship between pipeline and capacity. We build the measurement and reporting systems that connect these operational metrics to financial outcomes — so partners can see which engagements, clients, and service lines drive the most value.",
  "recurring-revenue":
    "Recurring revenue businesses have unit economics that determine everything — CAC, LTV, churn, expansion revenue. We build the measurement and tracking infrastructure for these metrics, connect them to financial reporting, and build the forecasting models that let you plan around retention, expansion, and the cash dynamics of growth.",
};

export function IndustriesDetail() {
  const [activeIndustry, setActiveIndustry] = useState<string>(
    industries[0].slug
  );

  const active = industries.find((ind) => ind.slug === activeIndustry);

  return (
    <section className="section-padding content-max-width" id="industries-detail" aria-labelledby="industries-detail-heading">
      <div className="max-w-2xl mb-12">
        <span className="eyebrow text-finance-green mb-3 block">
          Industries
        </span>
        <h2 id="industries-detail-heading" className="font-display heading-2 text-charcoal mb-4">
          Financial concerns that are specific to how you operate
        </h2>
        <p className="text-sm text-warm-gray-600 leading-relaxed">
          The financial challenges of a professional services firm are different
          from those of an ecommerce business. We understand the dynamics of the
          verticals we serve — which means we can get to useful work faster.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-0 lg:gap-0 border border-warm-border">
        {/* Industry selector - sidebar on desktop, horizontal scroll on mobile */}
        <div className="lg:border-r border-warm-border overflow-x-auto lg:overflow-x-visible" role="tablist" aria-label="Industry selector">
          <div className="flex lg:flex-col p-2 lg:p-0 gap-0 min-w-max lg:min-w-0">
            {industries.map((industry) => {
              const isActive = activeIndustry === industry.slug;
              return (
                <button
                  key={industry.slug}
                  onClick={() => setActiveIndustry(industry.slug)}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`industry-panel-${industry.slug}`}
                  className={`flex items-center gap-2 px-4 lg:px-6 py-3 text-sm text-left whitespace-nowrap transition-colors duration-200 border-b-2 lg:border-b-2 lg:border-r-0 rounded-sm focus-visible:ring-1 focus-visible:ring-finance-green ${
                    isActive
                      ? "border-finance-green text-charcoal font-medium bg-finance-green/5"
                      : "border-transparent text-warm-gray-500 hover:text-charcoal hover:bg-warm-gray-100/50"
                  }`}
                >
                  {industry.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Industry content */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            {active && (
              <motion.div
                key={active.slug}
                id={`industry-panel-${active.slug}`}
                role="tabpanel"
                aria-label={`${active.name} details`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="p-6 md:p-8 lg:p-10"
              >
                <h3 className="font-display heading-3 text-charcoal mb-3">
                  {active.name}
                </h3>
                <p className="text-sm text-warm-gray-600 leading-relaxed mb-8">
                  {active.description}
                </p>

                {/* Financial concerns */}
                <div className="mb-8">
                  <div className="text-xs font-medium text-finance-green uppercase tracking-wider mb-3">
                    Industry-specific financial concerns
                  </div>
                  <div className="space-y-0">
                    {active.financialConcerns.map((concern, i) => (
                      <div
                        key={concern}
                        className="flex items-start gap-3 py-2.5 border-b border-warm-border last:border-b-0"
                      >
                        <span className="text-xs font-mono text-warm-gray-400 shrink-0 w-4 tabular-nums" aria-hidden="true">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-sm text-warm-gray-600">
                          {concern}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Common services */}
                <div className="mb-8">
                  <div className="text-xs font-medium text-navy uppercase tracking-wider mb-3">
                    Typical services
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {active.commonServices.map((service) => (
                      <span
                        key={service}
                        className="text-xs text-charcoal bg-warm-gray-100 border border-warm-border px-3 py-1.5 rounded-sm"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Northline approach */}
                {industryApproach[active.slug] && (
                  <div className="pt-6 border-t border-warm-border">
                    <div className="text-xs font-medium text-charcoal uppercase tracking-wider mb-3">
                      How we approach this vertical
                    </div>
                    <p className="text-sm text-warm-gray-600 leading-relaxed">
                      {industryApproach[active.slug]}
                    </p>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
