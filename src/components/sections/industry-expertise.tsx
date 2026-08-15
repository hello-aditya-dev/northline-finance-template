"use client";

import { industries } from "@/content/industries";
import { IndustryChallenges } from "@/components/finance/industry-challenges";

export function IndustryExpertise() {
  return (
    <section className="section-padding bg-warm-gray-100/50" id="industries" aria-labelledby="industries-heading">
      <div className="content-max-width">
        <div className="max-w-2xl mb-10">
          <span className="section-marker mb-2 block">§6</span>
          <span className="eyebrow text-finance-green mb-3 block">
            Industries
          </span>
          <h2 id="industries-heading" className="font-display heading-2 text-charcoal text-balance">
            Financial concerns that are specific to how you do business
          </h2>
          <p className="text-sm text-warm-gray-600 mt-3 leading-relaxed">
            Generic financial advice doesn&apos;t help. The financial challenges that
            matter in professional services are different from those in ecommerce
            or SaaS. We work where we have relevant experience — so the guidance
            is specific and practical, not theoretical.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-warm-border">
          {industries.map((industry, i) => (
            <IndustryChallenges
              key={industry.slug}
              industry={industry}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
