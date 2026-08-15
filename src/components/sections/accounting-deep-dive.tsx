"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Clock, FileCheck, Shield } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const accountingServices = [
  {
    title: "Monthly accounting",
    description:
      "Complete monthly cycle — transaction processing, reconciliations, adjustments, and financial statements. Not just recorded, but reviewed, accurate, and delivered on time. This is the foundation that everything else is built on.",
    icon: BookOpen,
  },
  {
    title: "Month-end close",
    description:
      "Structured close process with checklists, calendars, and accountability. We accelerate the close, reduce errors, and make it consistent month to month. If your close takes 20+ days, we can typically get it to 8-10 within the first quarter.",
    icon: Clock,
  },
  {
    title: "Account reconciliation",
    description:
      "Balance sheet accounts reconciled every month — bank accounts, credit cards, loan balances, accruals, prepaids, and intercompany. Reconciliations aren't optional; they're how you know the numbers are right.",
    icon: FileCheck,
  },
  {
    title: "Controller oversight",
    description:
      "Senior accounting review — someone checking the work, handling technical questions, developing policies, and ensuring compliance. This is the layer between bookkeeping and strategic finance that keeps the accounting function reliable.",
    icon: Shield,
  },
];

const progression = [
  {
    stage: "Bookkeeping",
    description:
      "Transaction recording, categorization, and maintenance of clean records. The raw material of financial information.",
    produces: "Organized financial records",
  },
  {
    stage: "Accounting",
    description:
      "Monthly cycle with reconciliations, adjustments, and reviewed financial statements. Bookkeeping output made accurate and complete.",
    produces: "Reliable financial statements",
  },
  {
    stage: "Controller",
    description:
      "Oversight, technical accounting, policies, and process. Ensuring the accounting function produces trustworthy output at the right speed.",
    produces: "Trusted, timely financial data",
  },
  {
    stage: "CFO",
    description:
      "Strategic finance — reporting, forecasting, cash management, decision support, stakeholder communication. Turning trusted data into business direction.",
    produces: "Financial leadership and clarity",
  },
];

const accountingFaqs = [
  {
    question: "Our books are behind. Can you get us caught up?",
    answer:
      "Yes. Bringing books current is a common starting point. We'll assess what's needed — typically it's completing reconciliations, recording missing transactions, and making adjusting entries — and get you caught up before establishing the ongoing monthly process. Cleanup work is usually scoped separately from the monthly retainer.",
  },
  {
    question: "How fast can you close our books each month?",
    answer:
      "It depends on the starting point and complexity, but our target is 5-8 business days from month-end. If you're currently at 20+ days, we'll improve that incrementally — typically reaching 10 days within the first month or two and the 5-8 day target within a quarter.",
  },
  {
    question: "Do you replace our bookkeeper?",
    answer:
      "Not necessarily. If you have a bookkeeper who's doing good work, we'll provide the oversight, close management, and review that elevates the output. If you don't have a bookkeeper, or the current one isn't meeting the standard, we can handle the full accounting function or help you hire the right person.",
  },
  {
    question: "What's the difference between your accounting and what our CPA does?",
    answer:
      "Your CPA prepares tax returns and provides tax planning. We handle the ongoing accounting — recording transactions, reconciling accounts, closing the books, and producing financial statements throughout the year. Good monthly accounting makes your CPA's job easier and your tax planning more effective because the numbers are clean and current.",
  },
];

export function AccountingDeepDive() {
  return (
    <section className="section-padding content-max-width" id="accounting-deep-dive" aria-labelledby="accounting-heading">
      {/* Header - different composition: two column with ruled line */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-16">
        <div>
          <span className="eyebrow text-finance-green mb-3 block">
            Accounting &amp; Bookkeeping
          </span>
          <h2 id="accounting-heading" className="font-display heading-2 text-charcoal text-balance">
            Reliable books, timely close, accurate statements — the foundation
            for everything that follows
          </h2>
        </div>
        <div className="flex items-end">
          <p className="text-sm text-warm-gray-600 leading-relaxed">
            Strategic finance depends on accurate accounting. Management
            reporting depends on a timely close. Cash flow forecasting depends
            on reconciled numbers. If the accounting isn&apos;t right, nothing built
            on top of it can be trusted. We make sure the foundation is solid.
          </p>
        </div>
      </div>

      {/* Ruled line */}
      <div className="h-px bg-warm-border-strong mb-12" aria-hidden="true" />

      {/* Accounting services - horizontal flow, not cards */}
      <div className="mb-16">
        {accountingServices.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-4 md:gap-8 py-8 border-b border-warm-border first:border-t"
          >
            <div className="flex items-center gap-3">
              <service.icon
                className="w-5 h-5 text-finance-green shrink-0"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <h3 className="font-display heading-4 text-charcoal whitespace-nowrap">
                {service.title}
              </h3>
            </div>
            <p className="text-sm text-warm-gray-600 leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Progression: Bookkeeping → Accounting → Controller → CFO */}
      <div className="mb-16 py-12 border-y border-warm-border bg-warm-gray-100/30 -mx-[clamp(1.25rem,4vw,3rem)] px-[clamp(1.25rem,4vw,3rem)]">
        <div className="max-w-2xl mb-10">
          <h3 className="font-display heading-3 text-charcoal mb-2">
            How the finance function builds
          </h3>
          <p className="text-sm text-warm-gray-500 leading-relaxed">
            Each layer depends on the one below it. Clean bookkeeping feeds
            accurate accounting. Accurate accounting with controller oversight
            produces trustworthy data. Trustworthy data enables strategic
            finance. Skip a layer and the whole structure is compromised.
          </p>
        </div>

        <div className="max-w-3xl">
          {progression.map((step, i) => (
            <motion.div
              key={step.stage}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="relative"
            >
              <div className="flex items-start gap-6 py-5">
                <div className="shrink-0 w-24 text-right">
                  <span className="font-display text-sm text-charcoal tracking-tight">
                    {step.stage}
                  </span>
                </div>
                <div className="flex flex-col items-center shrink-0" aria-hidden="true">
                  <div className="w-2.5 h-2.5 rounded-full bg-finance-green border-2 border-finance-green" />
                  {i < progression.length - 1 && (
                    <div className="w-px h-full min-h-8 bg-finance-green/30" />
                  )}
                </div>
                <div className="pb-4">
                  <p className="text-sm text-warm-gray-600 leading-relaxed mb-1">
                    {step.description}
                  </p>
                  <div className="text-xs font-medium text-finance-green">
                    Produces: {step.produces}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="mb-12">
        <h3 className="font-display heading-3 text-charcoal mb-8">
          Accounting questions
        </h3>
        <Accordion type="single" collapsible className="max-w-3xl">
          {accountingFaqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`acct-faq-${i}`}
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
              Need accounting that produces reliable financials on time?
            </h3>
            <p className="text-sm text-warm-gray-500 leading-relaxed">
              We&apos;ll assess your current accounting and tell you what it would
              take to get it where it needs to be.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 text-sm font-medium hover:bg-charcoal transition-colors duration-200 rounded-sm shrink-0 focus-visible:ring-2 focus-visible:ring-finance-green focus-visible:ring-offset-2"
          >
            Start the conversation
            <ArrowRight className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
