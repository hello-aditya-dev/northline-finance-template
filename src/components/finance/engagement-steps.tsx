"use client";

import { motion } from "framer-motion";
import { Search, ClipboardList, Handshake, TrendingUp } from "lucide-react";

const steps = [
  {
    step: 1,
    title: "Discovery",
    description:
      "We start with a conversation about your business, your current financial operations, and what's working and what isn't. No prescriptive pitch — we need to understand your specific situation.",
    icon: Search,
    deliverable: "Understanding of your business and financial operations",
  },
  {
    step: 2,
    title: "Assessment",
    description:
      "We review your current accounting, reporting, processes, and tools. This gives us a clear picture of where things stand and what the priorities should be.",
    icon: ClipboardList,
    deliverable: "Documented assessment with findings and recommendations",
  },
  {
    step: 3,
    title: "Engagement Design",
    description:
      "Based on the assessment, we propose a specific scope of work with clear deliverables, timelines, and a monthly fee. You know exactly what you're getting and what it costs before we start.",
    icon: Handshake,
    deliverable: "Defined scope, deliverables, and fee structure",
  },
  {
    step: 4,
    title: "Ongoing",
    description:
      "We execute against the agreed scope, reporting progress and adjusting as your business evolves. Regular check-ins ensure the work stays aligned with what you need — not what we assumed at the start.",
    icon: TrendingUp,
    deliverable: "Deliverables on schedule, with ongoing review and adaptation",
  },
];

export function EngagementSteps() {
  return (
    <div className="space-y-0">
      {steps.map((step, i) => {
        const Icon = step.icon;
        return (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className={`flex gap-6 md:gap-8 py-6 md:py-8 ${
              i > 0 ? "border-t border-warm-border" : ""
            }`}
          >
            <div className="shrink-0 flex flex-col items-center">
              <div className="w-10 h-10 rounded-sm bg-navy flex items-center justify-center">
                <Icon className="w-4.5 h-4.5 text-white" strokeWidth={1.5} />
              </div>
              {i < steps.length - 1 && (
                <div className="w-px flex-1 bg-warm-border mt-3" />
              )}
            </div>
            <div className="flex-1 pt-0.5">
              <div className="flex items-baseline gap-3 mb-1">
                <span className="text-xs font-medium text-finance-green uppercase tracking-wider">
                  Step {step.step}
                </span>
              </div>
              <h3 className="font-display text-lg text-charcoal tracking-tight mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-warm-gray-600 leading-relaxed mb-3">
                {step.description}
              </p>
              <div className="text-xs text-warm-gray-500">
                <span className="font-medium text-charcoal">Deliverable:</span>{" "}
                {step.deliverable}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
