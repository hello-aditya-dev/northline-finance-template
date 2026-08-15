"use client";

import { motion } from "framer-motion";
import { CaseStudy } from "@/content/case-studies";

interface CaseStudyMetricsProps {
  caseStudy: CaseStudy;
  index?: number;
}

export function CaseStudyMetrics({ caseStudy, index = 0 }: CaseStudyMetricsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="border border-warm-border"
    >
      {/* Header */}
      <div className="p-6 md:p-8 border-b border-warm-border bg-warm-gray-100/50">
        <div className="flex items-center gap-2 mb-2">
          <span className="eyebrow text-finance-green">{caseStudy.industry}</span>
          <span className="text-warm-gray-300">·</span>
          <span className="text-xs text-warm-gray-500">{caseStudy.type}</span>
        </div>
        <h3 className="font-display text-xl text-charcoal tracking-tight">
          {caseStudy.company}
        </h3>
      </div>

      {/* Situation */}
      <div className="p-6 md:p-8 border-b border-warm-border">
        <div className="text-xs font-medium text-warm-gray-500 uppercase tracking-wider mb-2">
          Situation
        </div>
        <p className="text-sm text-warm-gray-600 leading-relaxed">
          {caseStudy.situation}
        </p>
      </div>

      {/* Outcomes */}
      <div className="p-6 md:p-8">
        <div className="text-xs font-medium text-warm-gray-500 uppercase tracking-wider mb-4">
          Outcomes
        </div>
        <div className="grid grid-cols-2 gap-4">
          {caseStudy.outcomes.map((outcome) => (
            <div key={outcome.label}>
              <div className="font-display text-2xl text-finance-green tracking-tight">
                {outcome.value}
              </div>
              <div className="text-xs font-medium text-charcoal mt-0.5">
                {outcome.label}
              </div>
              {outcome.description && (
                <div className="text-xs text-warm-gray-500 mt-1 leading-relaxed">
                  {outcome.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
