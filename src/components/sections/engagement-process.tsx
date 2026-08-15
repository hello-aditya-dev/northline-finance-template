"use client";

import { EngagementSteps } from "@/components/finance/engagement-steps";

export function EngagementProcess() {
  return (
    <section className="section-padding content-max-width" id="engagement" aria-labelledby="engagement-heading">
      <div className="max-w-2xl mb-10">
        <span className="section-marker mb-2 block">§5</span>
        <span className="eyebrow text-finance-green mb-3 block">
          How it works
        </span>
        <h2 id="engagement-heading" className="font-display heading-2 text-charcoal text-balance">
          From conversation to working finance function
        </h2>
        <p className="text-sm text-warm-gray-600 mt-3 leading-relaxed">
          We don&apos;t start with a prescriptive package. We start by understanding
          your business, assessing where things stand, and proposing work that
          addresses your specific needs — with clear deliverables and a defined
          scope before anything begins.
        </p>
      </div>

      <EngagementSteps />
    </section>
  );
}
