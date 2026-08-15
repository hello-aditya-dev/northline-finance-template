"use client";

import { caseStudies } from "@/content/case-studies";
import { CaseStudyMetrics } from "@/components/finance/case-study-metrics";

export function CaseStudyPreview() {
  const featured = caseStudies.slice(0, 2);

  return (
    <section className="section-padding content-max-width" id="case-studies" aria-labelledby="case-studies-preview-heading">
      <div className="max-w-2xl mb-10">
        <span className="section-marker mb-2 block">§7</span>
        <span className="eyebrow text-finance-green mb-3 block">
          Case studies
        </span>
        <h2 id="case-studies-preview-heading" className="font-display heading-2 text-charcoal text-balance">
          How the work translates into outcomes
        </h2>
        <p className="text-sm text-warm-gray-600 mt-3 leading-relaxed">
          These are demonstration case studies showing the types of engagements
          we typically do and the outcomes they produce. Each illustrates a
          different starting point and a different scope of work.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {featured.map((cs, i) => (
          <CaseStudyMetrics key={cs.slug} caseStudy={cs} index={i} />
        ))}
      </div>

      <div className="mt-6 text-xs text-warm-gray-400 italic">
        These are demonstration case studies with fictional companies and
        plausible outcomes.
      </div>
    </section>
  );
}
