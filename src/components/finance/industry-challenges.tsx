"use client";

import { motion } from "framer-motion";
import { Industry } from "@/content/industries";

interface IndustryChallengesProps {
  industry: Industry;
  index?: number;
}

export function IndustryChallenges({ industry, index = 0 }: IndustryChallengesProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className={`p-5 md:p-6 ${index > 0 ? "border-t md:border-t-0 md:border-l" : ""} border-warm-border`}
    >
      <h3 className="font-display text-base text-charcoal tracking-tight mb-2">
        {industry.name}
      </h3>
      <p className="text-xs text-warm-gray-500 leading-relaxed mb-3">
        {industry.description}
      </p>
      <div className="space-y-1.5">
        {industry.financialConcerns.slice(0, 4).map((concern) => (
          <div
            key={concern}
            className="text-xs text-warm-gray-600 flex items-start gap-2"
          >
            <span className="w-1 h-1 rounded-full bg-finance-green mt-1.5 shrink-0" />
            {concern}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
