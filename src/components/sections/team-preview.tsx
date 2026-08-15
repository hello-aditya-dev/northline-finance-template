"use client";

import { team } from "@/content/team";
import { AdvisorCard } from "@/components/finance/advisor-card";

export function TeamPreview() {
  const featured = team.slice(0, 4);

  return (
    <section className="section-padding content-max-width" id="team" aria-labelledby="team-preview-heading">
      <div className="max-w-2xl mb-10">
        <span className="section-marker mb-2 block">§9</span>
        <span className="eyebrow text-finance-green mb-3 block">
          Team
        </span>
        <h2 id="team-preview-heading" className="font-display heading-2 text-charcoal text-balance">
          People who&apos;ve done this work before, at this scale
        </h2>
        <p className="text-sm text-warm-gray-600 mt-3 leading-relaxed">
          Our team has operated in CFO, controller, and finance leadership roles
          at companies in the size range we serve. We bring practical experience,
          not just technical skill.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-warm-border">
        {featured.map((member, i) => (
          <div
            key={member.name}
            className={`${
              i < 3 ? "lg:border-r" : ""
            } ${
              i < 1 ? "sm:border-r" : ""
            } ${
              i === 1 ? "sm:border-r-0 lg:border-r" : ""
            } ${
              i >= 2 ? "border-t sm:border-t-0 lg:border-t" : ""
            } ${
              i === 2 ? "sm:border-t lg:border-t-0" : ""
            }`}
          >
            <AdvisorCard member={member} index={i} />
          </div>
        ))}
      </div>
    </section>
  );
}
