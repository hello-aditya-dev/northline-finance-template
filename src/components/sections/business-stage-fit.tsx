"use client";

import { BusinessStageIndicator } from "@/components/finance/business-stage-indicator";

export function BusinessStageFit() {
  return (
    <section className="section-padding bg-warm-gray-100/50" id="business-stage" aria-labelledby="business-stage-heading">
      <div className="content-max-width">
        <div className="max-w-2xl mb-10">
          <span className="section-marker mb-2 block">§4</span>
          <span className="eyebrow text-finance-green mb-3 block">
            Business stage
          </span>
          <h2 id="business-stage-heading" className="font-display heading-2 text-charcoal text-balance">
            The right financial capability at the right stage
          </h2>
          <p className="text-sm text-warm-gray-600 mt-3 leading-relaxed">
            The finance function that worked at $3M won&apos;t work at $10M. We help
            businesses build finance capability ahead of growth — so you have the
            information and infrastructure you need before you need it.
          </p>
        </div>

        <div className="border border-warm-border">
          <BusinessStageIndicator />
        </div>
      </div>
    </section>
  );
}
