"use client";

import { motion } from "framer-motion";

const painPoints = [
  {
    situation: "Your month-end close takes three weeks",
    detail: "By the time financials arrive, they're too stale to inform decisions. You're operating on feel instead of data.",
  },
  {
    situation: "You can't see cash position beyond this week",
    detail: "Revenue is growing but cash feels unpredictable. You've been surprised by shortfalls despite strong topline.",
  },
  {
    situation: "Board meetings mean assembling spreadsheets the night before",
    detail: "Investor reporting is inconsistent and time-consuming. Your board materials don't reflect the professionalism of the business.",
  },
  {
    situation: "You don't know your margins by channel, project, or client",
    detail: "You know the overall number but can't see where profit is actually being made — or where it's leaking.",
  },
  {
    situation: "The founder is doing too much financial work",
    detail: "You're spending time on accounting, reporting, and cash management that should go to running the business.",
  },
  {
    situation: "You're making hiring and spending decisions without financial context",
    detail: "Important commitments are being made based on instinct rather than an understanding of the financial implications.",
  },
];

export function ProblemFraming() {
  return (
    <section className="section-padding bg-warm-gray-100/50" id="problem-framing" aria-labelledby="problem-heading">
      <div className="content-max-width">
        <div className="max-w-2xl mb-10">
          <span className="section-marker mb-2 block">§2</span>
          <span className="eyebrow text-finance-green mb-3 block">
            Common situations
          </span>
          <h2 id="problem-heading" className="font-display heading-2 text-charcoal text-balance">
            You might recognize these situations
          </h2>
          <p className="text-sm text-warm-gray-600 mt-3 leading-relaxed">
            These are the problems we hear most often from the businesses we work
            with. If any of them sound familiar, the underlying issue is usually
            the same: the finance function hasn&apos;t kept up with the business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-0">
          {painPoints.map((pain, i) => (
            <motion.div
              key={pain.situation}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className={`p-5 md:p-6 border border-warm-border ${
                i % 2 === 0 ? "md:border-r-0" : ""
              } ${i >= 2 ? "border-t-0 md:border-t" : ""} ${
                i === 0 || i === 1 ? "border-b-0 md:border-b" : ""
              }`}
            >
              <h3 className="text-sm font-semibold text-charcoal mb-1.5">
                {pain.situation}
              </h3>
              <p className="text-xs text-warm-gray-500 leading-relaxed">
                {pain.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
