"use client";

import { motion } from "framer-motion";

const metrics = [
  {
    label: "Average close acceleration",
    value: "60%",
    detail: "From 20+ days to under 8 business days",
  },
  {
    label: "Cash forecast accuracy",
    value: "±5%",
    detail: "Rolling 13-week forecast within 5% of actuals",
  },
  {
    label: "Board prep time reduction",
    value: "70%",
    detail: "CEO time on financial reporting, from hours to review",
  },
  {
    label: "Client reporting cycle",
    value: "5 days",
    detail: "Management reporting delivered within 5 business days",
  },
];

export function NumericalOutcomes() {
  return (
    <section className="section-padding bg-warm-gray-100/50" id="outcomes" aria-labelledby="outcomes-heading">
      <div className="content-max-width">
        <div className="max-w-2xl mb-10">
          <span className="section-marker mb-2 block">§8</span>
          <span className="eyebrow text-finance-green mb-3 block">
            By the numbers
          </span>
          <h2 id="outcomes-heading" className="font-display heading-2 text-charcoal text-balance">
            Reporting that changes how businesses operate
          </h2>
          <p className="text-sm text-warm-gray-600 mt-3 leading-relaxed">
            The point of this work isn&apos;t to produce more reports — it&apos;s to
            produce information that changes decisions. Here&apos;s what that looks
            like in practice.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-warm-border">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`p-6 md:p-8 ${
                i < 3 ? "lg:border-r" : ""
              } ${i < 1 ? "sm:border-r" : ""} ${
                i === 1 ? "sm:border-r-0 lg:border-r" : ""
              } ${
                i >= 2 ? "border-t sm:border-t-0 lg:border-t" : ""
              } ${
                i === 2 ? "sm:border-t lg:border-t-0" : ""
              } border-warm-border`}
            >
              <div className="font-display text-4xl text-charcoal tracking-tight tabular-nums">
                {metric.value}
              </div>
              <div className="text-sm font-medium text-finance-green mt-1">
                {metric.label}
              </div>
              <div className="text-xs text-warm-gray-500 mt-2 leading-relaxed">
                {metric.detail}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
