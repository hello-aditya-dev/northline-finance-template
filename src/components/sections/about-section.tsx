"use client";

import { motion } from "framer-motion";
import { ArrowRight, Layers, Users, Lightbulb, Target } from "lucide-react";
import { siteConfig } from "@/config/site";

const principles = [
  {
    title: "Finance should serve the business, not the other way around",
    description:
      "Financial reporting and processes exist to help people make better decisions. When the finance function becomes self-serving — processes for the sake of process, reports nobody reads, controls that slow things down without adding reliability — it needs to be redesigned.",
  },
  {
    title: "Accuracy before sophistication",
    description:
      "A simple financial model built on accurate data beats a sophisticated model built on assumptions. We start by making sure the numbers are right, then build the analysis and reporting on top of that foundation.",
  },
  {
    title: "Useful beats comprehensive",
    description:
      "A five-page management report that gets read and acted on is better than a twenty-page report that sits in an inbox. We design reporting, dashboards, and processes around what the business actually needs — not every possible metric or analysis.",
  },
  {
    title: "Consistency builds trust",
    description:
      "Financial information has to be reliable to be useful. That means consistent processes, consistent timing, consistent quality. When leadership knows they'll get accurate financials on the same schedule every month, they start using them.",
  },
];

const operatingModel = {
  title: "How we operate",
  points: [
    {
      label: "Senior people doing senior work",
      detail:
        "CFO-level work is done by CFOs. Controller work is done by controllers. We don't use junior staff to do work that requires experience and judgment. The people you talk to are the people doing the work.",
    },
    {
      label: "Engagements structured around scope, not hours",
      detail:
        "Monthly retainers defined by deliverables and outcomes, not hourly billing. You know what you're getting and what it costs. If the scope needs to change, we talk about it openly.",
    },
    {
      label: "Team, not individual",
      detail:
        `When you work with ${siteConfig.shortName}, you get a team with complementary skills — strategic, operational, and technical. The right person handles the right work, and there's coverage if someone is unavailable.`,
    },
    {
      label: "Honest about fit",
      detail:
        "We'll tell you if we're not the right solution for your situation. We'd rather have a good conversation that doesn't lead to an engagement than a bad engagement that shouldn't have started.",
    },
  ],
};

const bestFit = [
  "Founder-led businesses between $2M and $30M in revenue",
  "Companies that have grown past basic bookkeeping but haven't built a full finance function",
  "Businesses that need senior finance capability but not full-time overhead",
  "Teams that want financial information to drive decisions, not just satisfy compliance",
  "Companies in active growth mode where financial clarity affects the quality of decisions",
  "Organizations willing to invest in making their finance function better — not just bigger",
];

export function AboutSection() {
  return (
    <section className="section-padding content-max-width" id="about" aria-labelledby="about-heading">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 mb-16">
        <div className="lg:col-span-2">
          <span className="eyebrow text-finance-green mb-3 block">About</span>
          <h2 id="about-heading" className="font-display heading-2 text-charcoal text-balance">
            A finance firm built for how growing businesses actually operate
          </h2>
        </div>
        <div className="lg:col-span-3 space-y-4">
          <p className="text-sm text-warm-gray-600 leading-relaxed">
            {siteConfig.companyName} exists because we saw a gap in how growing
            businesses get financial support. The options were typically binary:
            a bookkeeping service that handles transactions but nothing beyond, or
            a Big Four firm with capabilities and price tags designed for much
            larger organizations.
          </p>
          <p className="text-sm text-warm-gray-600 leading-relaxed">
            There wasn&apos;t much in between — particularly for the strategic and
            operational finance work that founder-led businesses in the $2-30M
            range need most. That&apos;s the space we operate in: senior finance
            capability delivered practically, at a cost structure that makes
            sense for companies at this stage.
          </p>
          <p className="text-sm text-warm-gray-600 leading-relaxed">
            We&apos;re not a staffing firm placing a fractional CFO. We&apos;re a finance
            practice with a team, a methodology, and an operating model designed
            to produce consistent, high-quality work across accounting,
            operations, and strategy.
          </p>
        </div>
      </div>

      {/* Principles */}
      <div className="mb-16 pt-12 border-t border-warm-border">
        <h3 className="font-display heading-3 text-charcoal mb-8">
          How we think about the work
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {principles.map((principle, i) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <h4 className="font-display heading-4 text-charcoal mb-2">
                {principle.title}
              </h4>
              <p className="text-sm text-warm-gray-600 leading-relaxed">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Operating model */}
      <div className="mb-16 pt-12 border-t border-warm-border">
        <h3 className="font-display heading-3 text-charcoal mb-8">
          {operatingModel.title}
        </h3>
        <div className="max-w-3xl space-y-0">
          {operatingModel.points.map((point, i) => (
            <div
              key={point.label}
              className="py-5 border-b border-warm-border first:border-t"
            >
              <h4 className="text-sm font-medium text-charcoal mb-1">
                {point.label}
              </h4>
              <p className="text-sm text-warm-gray-600 leading-relaxed">
                {point.detail}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Who we work best with */}
      <div className="mb-12 py-10 px-6 md:px-10 border border-warm-border bg-warm-gray-100/30">
        <h3 className="font-display heading-3 text-charcoal mb-6">
          Who {siteConfig.shortName} works best with
        </h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
          {bestFit.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span className="text-finance-green mt-1 shrink-0 text-xs" aria-hidden="true">●</span>
              <span className="text-sm text-warm-gray-600 leading-relaxed">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
