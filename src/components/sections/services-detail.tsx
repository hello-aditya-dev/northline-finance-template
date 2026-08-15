"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { serviceFamilies } from "@/content/services";
import { faqItems } from "@/content/faq";
import { Compass, Settings, BookOpen, ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const iconMap: Record<string, React.ElementType> = {
  compass: Compass,
  settings: Settings,
  "book-open": BookOpen,
};

const serviceDetails: Record<
  string,
  {
    whenNeeded: string[];
    problems: string[];
    deliverables: string[];
  }
> = {
  "Fractional-CFO": {
    whenNeeded: [
      "Making important decisions without financial analysis",
      "Board or investors requesting consistent reporting",
      "CEO spending too much time on financial matters",
      "Planning for fundraising, debt, or strategic transactions",
      "No forward-looking financial planning in place",
    ],
    problems: [
      "Cash position unclear or managed by feel",
      "No scenario planning for growth or contraction",
      "Board materials inconsistent or assembled ad hoc",
      "Investor expectations not being met on reporting",
      "Strategic decisions made without financial context",
    ],
    deliverables: [
      "Financial model with scenario planning",
      "Rolling cash flow forecast (13-week)",
      "Board and investor reporting packages",
      "Monthly management reporting with narrative",
      "Decision support analysis for key choices",
      "Stakeholder communication frameworks",
    ],
  },
  "Forecasting-&-Planning": {
    whenNeeded: [
      "Budgeting is annual-only and quickly outdated",
      "No connection between financial plan and business operations",
      "Growth requires understanding financial implications",
      "Planning for hiring, expansion, or capital needs",
    ],
    problems: [
      "Decisions based on gut feel rather than modeled outcomes",
      "No ability to stress-test business assumptions",
      "Hiring and spending plans disconnected from financial reality",
      "Budget-to-actual variances unexplained or ignored",
    ],
    deliverables: [
      "Multi-scenario financial model",
      "Annual budget with monthly targets",
      "Rolling forecast that updates with actuals",
      "Long-range planning (3-5 year)",
      "Variance analysis and commentary",
    ],
  },
  "Decision-Support": {
    whenNeeded: [
      "Evaluating pricing changes or new product launches",
      "Considering expansion, acquisition, or partnerships",
      "Capital allocation decisions with competing priorities",
      "Hiring plans that need financial justification",
    ],
    problems: [
      "Opportunities evaluated without financial modeling",
      "No framework for comparing investment alternatives",
      "Pricing decisions made without margin analysis",
      "Growth plans untested against financial constraints",
    ],
    deliverables: [
      "Financial analysis for specific decisions",
      "ROI and payback calculations",
      "Sensitivity analysis on key assumptions",
      "Comparison frameworks for alternatives",
      "Memo-style decision summaries",
    ],
  },
  "Board-&-Investor-Reporting": {
    whenNeeded: [
      "Preparing for board meetings or investor updates",
      "Investors requesting standardized reporting",
      "Fundraising requires financial track record",
      "Communication with lenders or capital partners",
    ],
    problems: [
      "Board materials assembled at the last minute",
      "KPIs tracked informally or inconsistently",
      "No standardized format for stakeholder communication",
      "Investor expectations unclear or unmet",
    ],
    deliverables: [
      "Board deck with financial summary and KPIs",
      "Investor update templates",
      "KPI dashboards with trend analysis",
      "Capitalization and dilution modeling",
      "Communication calendar and cadence",
    ],
  },
  "Management-Reporting": {
    whenNeeded: [
      "Monthly financials arrive without context or commentary",
      "No variance analysis against budget or prior periods",
      "Leadership team lacks visibility into financial performance",
      "Reporting is compliance-focused, not decision-focused",
    ],
    problems: [
      "P&L and balance sheet without narrative explanation",
      "Variances not identified, explained, or addressed",
      "Operational and financial data live in separate worlds",
      "Reporting arrives too late to inform decisions",
    ],
    deliverables: [
      "Monthly financial package with variance analysis",
      "Narrative commentary on performance and trends",
      "Cash summary and forward-looking context",
      "KPI dashboard tied to business objectives",
      "Quarterly rolling forecast comparison",
    ],
  },
  "Cash-Flow-Management": {
    whenNeeded: [
      "Cash surprises despite revenue growth",
      "No forward view of cash position",
      "Working capital not actively managed",
      "Collections, payables, or inventory timing causing pressure",
    ],
    problems: [
      "Cash position only known by checking the bank",
      "No visibility into cash needs 4+ weeks out",
      "Growth consuming cash faster than it's collected",
      "Seasonal or cyclical cash patterns unmanaged",
    ],
    deliverables: [
      "13-week rolling cash flow forecast",
      "Working capital analysis and optimization",
      "Collections and payables management framework",
      "Cash flow monitoring dashboard",
      "Bank covenant tracking (if applicable)",
    ],
  },
  "KPI-Reporting": {
    whenNeeded: [
      "Metrics tracked in spreadsheets that nobody updates",
      "No connection between operational and financial performance",
      "Leadership asking for different numbers from different sources",
      "Business-specific metrics undefined or unmeasured",
    ],
    problems: [
      "Too many metrics, none tracked consistently",
      "No targets or benchmarks for comparison",
      "KPIs chosen by default, not by relevance",
      "Operational teams and finance speaking different languages",
    ],
    deliverables: [
      "KPI framework with 5-8 key metrics",
      "Dashboard with trend and target comparison",
      "Operational-to-financial metric connections",
      "Measurement cadence and ownership",
      "Reporting templates for leadership review",
    ],
  },
  "Process-Improvement": {
    whenNeeded: [
      "Month-end close takes too long",
      "Reporting workflows are manual and error-prone",
      "Same mistakes recurring in financial output",
      "Finance team spending time on mechanics instead of analysis",
    ],
    problems: [
      "Close process undocumented and inconsistent",
      "Manual workarounds creating risk and delays",
      "No close calendar or accountability for deadlines",
      "Processes designed for a smaller organization",
    ],
    deliverables: [
      "Documented close process with checklist",
      "Close calendar with milestones and ownership",
      "Workflow automation recommendations",
      "Process documentation and playbooks",
      "Cycle time reduction and quality metrics",
    ],
  },
  "Monthly-Accounting": {
    whenNeeded: [
      "Books are behind or unreliable",
      "Financial statements can't be trusted for decisions",
      "No consistent monthly close process",
      "Accounting is handled ad hoc or by an overwhelmed bookkeeper",
    ],
    problems: [
      "Transactions miscategorized or missed",
      "Reconciliations not performed or out of date",
      "Adjusting entries not made timely",
      "Financial statements produced without review",
    ],
    deliverables: [
      "Complete monthly accounting cycle",
      "Reconciled balance sheet each month",
      "Accruals and adjustments applied timely",
      "Reviewed financial statements (P&L, BS, CF)",
      "Close within target timeline",
    ],
  },
  "Bookkeeping": {
    whenNeeded: [
      "Transactions not recorded consistently",
      "Categories disorganized or inconsistent",
      "Records not audit-ready",
      "Daily financial activity unmanaged",
    ],
    problems: [
      "Bank and credit card transactions unrecorded",
      "Expense categorization inconsistent month to month",
      "No system for maintaining clean records",
      "Audit risk from disorganized books",
    ],
    deliverables: [
      "Transaction recording and categorization",
      "Clean, organized general ledger",
      "Audit-ready financial records",
      "Consistent categorization standards",
      "Monthly reconciliation support",
    ],
  },
  "Close-Support": {
    whenNeeded: [
      "Month-end close takes 15+ days",
      "Close process has no structure or checklist",
      "Each month feels different from the last",
      "Close delays blocking reporting and decisions",
    ],
    problems: [
      "No defined close process or procedures",
      "Dependencies and timing not coordinated",
      "Reconciliation and review steps skipped",
      "Close quality inconsistent month to month",
    ],
    deliverables: [
      "Close checklist and procedures",
      "Close calendar with deadlines and owners",
      "Standardized journal entries and accruals",
      "Close review and sign-off process",
      "Cycle time reduction plan",
    ],
  },
  "Controller-Services": {
    whenNeeded: [
      "Accounting needs oversight but not full-time",
      "Technical accounting questions going unanswered",
      "Controls and procedures need development",
      "Accuracy and compliance can't be verified internally",
    ],
    problems: [
      "No one reviewing the work of the accounting team",
      "Technical accounting matters handled informally",
      "Policy gaps creating compliance risk",
      "Multi-entity or complex transactions unmanaged",
    ],
    deliverables: [
      "Accounting oversight and review",
      "Technical accounting guidance",
      "Policy and procedure development",
      "Internal controls framework",
      "Multi-entity coordination",
    ],
  },
};

export function ServicesDetail() {
  const [expandedFamily, setExpandedFamily] = useState<string | null>(null);

  const serviceFaqs = faqItems.filter(
    (f) =>
      f.category === "Fractional CFO" ||
      f.category === "Management Reporting" ||
      f.category === "General"
  );

  return (
    <section className="section-padding content-max-width" id="services-detail" aria-labelledby="services-detail-heading">
      <div className="max-w-2xl mb-12">
        <span className="eyebrow text-finance-green mb-3 block">
          Service Details
        </span>
        <h2 id="services-detail-heading" className="font-display heading-2 text-charcoal mb-4">
          What each service addresses, when you need it, and what you receive
        </h2>
        <p className="text-sm text-warm-gray-600 leading-relaxed">
          Not every business needs every service. The detail below is intended to
          help you identify which problems match your situation — so we can
          structure an engagement around what you actually need.
        </p>
      </div>

      {/* Service families with expandable sub-services */}
      <div className="space-y-0">
        {serviceFamilies.map((family, fi) => {
          const Icon = iconMap[family.icon];
          const isExpanded = expandedFamily === family.family;

          return (
            <div
              key={family.family}
              className="border-t border-warm-border last:border-b"
            >
              {/* Family header */}
              <button
                onClick={() =>
                  setExpandedFamily(isExpanded ? null : family.family)
                }
                className="w-full text-left py-6 md:py-8 flex items-start justify-between gap-4 group focus-visible:ring-1 focus-visible:ring-finance-green focus-visible:ring-offset-0 rounded-sm"
                aria-expanded={isExpanded}
                aria-controls={`service-family-${fi}`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-navy/5 flex items-center justify-center shrink-0 mt-0.5" aria-hidden="true">
                    {Icon && (
                      <Icon
                        className="w-5 h-5 text-navy"
                        strokeWidth={1.5}
                      />
                    )}
                  </div>
                  <div>
                    <h3 className="font-display heading-3 text-charcoal group-hover:text-finance-green transition-colors duration-200">
                      {family.family}
                    </h3>
                    <p className="text-sm text-warm-gray-500 mt-1 leading-relaxed">
                      {family.tagline}
                    </p>
                  </div>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-warm-gray-400 shrink-0 mt-2 transition-transform duration-300 ${
                    isExpanded ? "rotate-180" : ""
                  }`}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </button>

              {/* Expanded sub-services */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    id={`service-family-${fi}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                    role="region"
                    aria-label={`${family.family} services`}
                  >
                    <div className="pb-8 pl-0 md:pl-14 space-y-6">
                      {family.services.map((service) => {
                        const key = service.name.replace(/\s+/g, "-");
                        const details = serviceDetails[key];

                        return (
                          <div
                            key={service.name}
                            className="border-l-2 border-finance-green/20 pl-6"
                          >
                            <h4 className="font-display heading-4 text-charcoal mb-1">
                              {service.name}
                            </h4>
                            <p className="text-sm text-warm-gray-600 leading-relaxed mb-4">
                              {service.description}
                            </p>

                            {details && (
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {/* When you need it */}
                                <div>
                                  <div className="text-xs font-medium text-finance-green uppercase tracking-wider mb-2">
                                    When you need it
                                  </div>
                                  <ul className="space-y-1.5">
                                    {details.whenNeeded.map((item) => (
                                      <li key={item} className="text-xs text-warm-gray-600 leading-relaxed flex items-start gap-1.5">
                                        <span className="text-warm-gray-400 mt-0 shrink-0" aria-hidden="true">—</span>
                                        {item}
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                {/* Problems it addresses */}
                                <div>
                                  <div className="text-xs font-medium text-navy uppercase tracking-wider mb-2">
                                    Problems it addresses
                                  </div>
                                  <ul className="space-y-1.5">
                                    {details.problems.map((item) => (
                                      <li key={item} className="text-xs text-warm-gray-600 leading-relaxed flex items-start gap-1.5">
                                        <span className="text-warm-gray-400 mt-0 shrink-0" aria-hidden="true">—</span>
                                        {item}
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                {/* Deliverables */}
                                <div>
                                  <div className="text-xs font-medium text-charcoal uppercase tracking-wider mb-2">
                                    Deliverables
                                  </div>
                                  <ul className="space-y-1.5">
                                    {details.deliverables.map((item) => (
                                      <li key={item} className="text-xs text-warm-gray-600 leading-relaxed flex items-start gap-1.5">
                                        <span className="text-warm-gray-400 mt-0 shrink-0" aria-hidden="true">—</span>
                                        {item}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Services FAQ */}
      <div className="mt-16 pt-12 border-t border-warm-border">
        <div className="max-w-2xl mb-8">
          <h3 className="font-display heading-3 text-charcoal mb-2">
            Common questions about our services
          </h3>
          <p className="text-sm text-warm-gray-500 leading-relaxed">
            Questions that come up most often when businesses are evaluating
            whether this type of support is right for them.
          </p>
        </div>
        <Accordion type="single" collapsible className="max-w-3xl">
          {serviceFaqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border-warm-border"
            >
              <AccordionTrigger className="text-sm text-charcoal text-left hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-warm-gray-600 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
