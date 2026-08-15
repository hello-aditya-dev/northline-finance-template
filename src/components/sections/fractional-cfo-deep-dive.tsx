"use client";

import { motion } from "framer-motion";
import { ArrowRight, Eye, TrendingUp, Wallet, Target } from "lucide-react";
import { siteConfig } from "@/config/site";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const signals = [
  {
    label: "Decisions without financial analysis",
    detail:
      "You're making choices about hiring, pricing, expansion, or spending without understanding the financial implications. The numbers exist, but they're not informing the decisions.",
  },
  {
    label: "Cash position unclear",
    detail:
      "You check the bank balance to understand cash, but there's no forward view. Revenue is growing but cash feels tight, and you can't predict when that will change.",
  },
  {
    label: "Board or investors need better reporting",
    detail:
      "Stakeholders are asking for financial visibility you can't easily provide. Board materials are assembled at the last minute from spreadsheets that don't tell a coherent story.",
  },
  {
    label: "Founder spending too much time on finance",
    detail:
      "The CEO or founder is doing work that should belong to a finance leader — reviewing reports, answering investor questions, managing cash, building models. Time on finance is time away from the business.",
  },
  {
    label: "No forward-looking planning",
    detail:
      "You have historical financials, but no forecast, no budget, no scenario planning. You're running the business looking in the rearview mirror.",
  },
  {
    label: "Growing past the finance function",
    detail:
      "The business has grown to a size and complexity where the current finance setup — a bookkeeper, a part-time controller, or the founder — can't keep up with what's needed.",
  },
];

const capabilities = [
  {
    icon: Eye,
    title: "Financial visibility",
    description:
      "Clear, current financial information delivered on a regular cadence. Not just what happened, but what it means and what's likely to happen next. Management reporting, variance analysis, and narrative commentary that makes the numbers useful.",
  },
  {
    icon: TrendingUp,
    title: "Forecasting and planning",
    description:
      "Multi-scenario financial models that let you test assumptions before committing resources. Rolling forecasts that stay current. Budgets that connect to operations. Long-range planning tied to business strategy.",
  },
  {
    icon: Wallet,
    title: "Cash management",
    description:
      "13-week rolling cash forecasts that prevent surprises. Working capital optimization. Understanding of collections timing, payables strategy, and the cash implications of growth decisions. Cash is too important to manage by feel.",
  },
  {
    icon: Target,
    title: "Strategic direction",
    description:
      "Financial analysis for the decisions that matter — pricing, expansion, capital allocation, fundraising, hiring. Board and investor communication that builds credibility. A financial perspective on the business strategy.",
  },
];

const engagementSteps = [
  {
    phase: "Discovery",
    description:
      "We start with a conversation about your business — where you are, what's working, what isn't, and what you need from a finance leader. This isn't a sales call; it's a diagnostic.",
  },
  {
    phase: "Assessment",
    description:
      "We review your current financial operations: accounting processes, reporting, tools, team, and output. We identify what's working, what's missing, and what needs to change.",
  },
  {
    phase: "Proposal",
    description:
      "Based on the assessment, we propose a specific scope of work with clear deliverables, timelines, and a monthly fee. No surprises. You decide what to engage on.",
  },
  {
    phase: "Engagement",
    description:
      "We get to work. Most clients are operating at full stride within 2-4 weeks. We establish reporting cadences, build the initial deliverables, and begin providing the financial leadership the business needs.",
  },
];

const cfoFaqs = [
  {
    question: "How is a fractional CFO different from a full-time CFO?",
    answer:
      "A fractional CFO provides the same strategic financial leadership, but on a part-time basis structured around your actual needs. You get senior-level capability and experience without the compensation, benefits, and overhead of a full-time executive. For most businesses in the $3-15M range, a fractional arrangement provides better value — you get an experienced CFO for the hours you need, not 40 hours you may not.",
  },
  {
    question: "How many hours per month is typical?",
    answer:
      "Engagements range from 10-30 hours per month depending on complexity. A simpler business might need 10-15 hours for reporting, cash management, and basic planning. A more complex business with board reporting, multiple entities, or active fundraising might need 20-30 hours. The scope is defined by your needs, not an arbitrary target.",
  },
  {
    question: "Will a fractional CFO work with our existing team?",
    answer:
      "Yes. Most of our engagements layer in on top of existing bookkeeping or accounting staff. We provide the oversight, strategic guidance, and reporting leadership that complements the operational accounting work. We can also help you evaluate, build, or supplement an internal team if needed.",
  },
  {
    question: "What does a fractional CFO actually do day-to-day?",
    answer:
      "It depends on the scope, but typically: leading the monthly reporting cycle, reviewing cash position and forecasts, advising on financial decisions, preparing board or investor materials, and ensuring the accounting function is producing accurate, timely information. The work varies — some months are heavier on planning, others on transactions or reporting — but the constant is providing financial leadership that the business can rely on.",
  },
  {
    question: "How do we know if we're ready for a fractional CFO?",
    answer:
      "If you're a founder-led business between $2M and $30M in revenue, and you recognize any of the signals we describe — cash uncertainty, late or inadequate reporting, no forward planning, too much founder time on finance — you're likely ready. The question isn't whether you need senior financial leadership; it's whether you need it full-time. Most businesses in this range don't.",
  },
];

export function FractionalCfoDeepDive() {
  return (
    <section
      className="section-padding bg-warm-gray-100/50"
      id="fractional-cfo"
      aria-labelledby="cfo-heading"
    >
      <div className="content-max-width">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="eyebrow text-finance-green mb-3 block">
            Fractional CFO
          </span>
          <h2 id="cfo-heading" className="font-display text-3xl sm:text-4xl md:text-5xl text-charcoal tracking-tight leading-[1.1] mb-6 text-balance">
            Senior financial direction when the business needs it, structured
            around what the business can sustain
          </h2>
          <p className="text-base text-warm-gray-600 leading-relaxed">
            A fractional CFO provides the strategic finance leadership that
            growing businesses need — forecasting, cash management, board
            communication, decision support — without the cost and commitment of
            a full-time executive. For most businesses between $3M and $15M in
            revenue, it&apos;s the right level of finance leadership at the right
            cost.
          </p>
        </div>

        {/* Signals section */}
        <div className="mb-16">
          <h3 className="font-display heading-3 text-charcoal mb-2">
            Signals that a business needs fractional CFO support
          </h3>
          <p className="text-sm text-warm-gray-500 mb-8 leading-relaxed max-w-2xl">
            These are the situations we hear about most often from founders and
            operators. If several of these sound familiar, a fractional CFO
            engagement is likely worth exploring.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-0 border border-warm-border bg-background">
            {signals.map((signal, i) => (
              <motion.div
                key={signal.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className={`p-6 md:p-8 ${
                  i % 2 === 0 ? "md:border-r" : ""
                } ${
                  i < signals.length - 2 ? "border-b" : ""
                } ${
                  i === signals.length - 2
                    ? "border-b md:border-b-0"
                    : ""
                } border-warm-border`}
              >
                <div className="text-sm font-medium text-charcoal mb-2">
                  {signal.label}
                </div>
                <p className="text-xs text-warm-gray-500 leading-relaxed">
                  {signal.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Capabilities */}
        <div className="mb-16">
          <h3 className="font-display heading-3 text-charcoal mb-8">
            What a fractional CFO provides
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <cap.icon
                    className="w-5 h-5 text-finance-green"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <h4 className="font-display heading-4 text-charcoal">
                    {cap.title}
                  </h4>
                </div>
                <p className="text-sm text-warm-gray-600 leading-relaxed">
                  {cap.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Engagement process */}
        <div className="mb-16 pt-12 border-t border-warm-border">
          <h3 className="font-display heading-3 text-charcoal mb-2">
            How a fractional CFO engagement begins
          </h3>
          <p className="text-sm text-warm-gray-500 mb-8 leading-relaxed max-w-2xl">
            We don&apos;t start with a generic package. Every engagement begins with
            understanding your specific situation and building a scope of work
            around it.
          </p>
          <div className="max-w-3xl space-y-0">
            {engagementSteps.map((step, i) => (
              <div
                key={step.phase}
                className="flex items-start gap-6 py-6 border-b border-warm-border first:border-t"
              >
                <div className="text-xs font-mono text-warm-gray-400 pt-0.5 shrink-0 w-6 tabular-nums" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h4 className="text-sm font-medium text-charcoal mb-1">
                    {step.phase}
                  </h4>
                  <p className="text-sm text-warm-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-12">
          <h3 className="font-display heading-3 text-charcoal mb-8">
            Fractional CFO questions
          </h3>
          <Accordion type="single" collapsible className="max-w-3xl">
            {cfoFaqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`cfo-faq-${i}`}
                className="border-warm-border"
              >
                <AccordionTrigger className="text-sm text-charcoal text-left hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-warm-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA */}
        <div className="border-t border-warm-border pt-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-display heading-4 text-charcoal mb-1">
                Considering fractional CFO support?
              </h3>
              <p className="text-sm text-warm-gray-500 leading-relaxed">
                Start with a conversation. We&apos;ll talk through your situation and
                tell you whether we&apos;re the right fit.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 text-sm font-medium hover:bg-charcoal transition-colors duration-200 rounded-sm shrink-0 focus-visible:ring-2 focus-visible:ring-finance-green focus-visible:ring-offset-2"
            >
              Schedule a conversation
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
