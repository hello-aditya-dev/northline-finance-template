"use client";

import { ServiceMatrix } from "@/components/finance/service-matrix";

export function ServiceArchitecture() {
  return (
    <section className="section-padding content-max-width" id="services" aria-labelledby="services-heading">
      <div className="max-w-2xl mb-10">
        <span className="section-marker mb-2 block">§3</span>
        <span className="eyebrow text-finance-green mb-3 block">
          Services
        </span>
        <h2 id="services-heading" className="font-display heading-2 text-charcoal text-balance">
          Three service families, structured around what growing businesses
          actually need
        </h2>
        <p className="text-sm text-warm-gray-600 mt-3 leading-relaxed">
          Not every business needs the full scope. We structure engagements
          around the specific problems you&apos;re facing — whether that&apos;s accounting
          accuracy, operational reporting, or strategic financial direction.
        </p>
      </div>

      <ServiceMatrix />
    </section>
  );
}
