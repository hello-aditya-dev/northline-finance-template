export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const faqItems: FAQItem[] = [
  {
    question: "What does a fractional CFO actually do day-to-day?",
    answer:
      "A fractional CFO provides the same strategic financial leadership as a full-time CFO, but on a part-time basis tailored to your needs. Day-to-day, this typically includes leading the monthly reporting cycle, reviewing cash position and forecasts, advising on financial decisions, preparing board or investor materials, and ensuring the accounting function is producing accurate, timely information. The specific scope is defined by your business needs — not a fixed package.",
    category: "Fractional CFO",
  },
  {
    question: "How is this different from a bookkeeping service or accounting firm?",
    answer:
      "Bookkeeping services record transactions. Accounting firms prepare tax returns and financial statements. We do both of those things, but our core value is in the financial operations and strategic work that sits on top of clean accounting — management reporting, cash flow planning, forecasting, KPI development, decision support, and CFO-level guidance. If you only need tax and compliance, an accounting firm is the right choice. If you need financial information that drives better business decisions, that's where we operate.",
    category: "General",
  },
  {
    question: "How many hours per month does a fractional CFO engagement typically involve?",
    answer:
      "It varies significantly based on the complexity and stage of the business. Typical engagements range from 10-30 hours per month. Early-stage companies with straightforward operations might need 10-15 hours. More complex businesses with board reporting, multiple entities, or significant planning needs often require 20-30 hours. We structure engagements based on the actual scope of work, not an arbitrary hourly target.",
    category: "Fractional CFO",
  },
  {
    question: "Can you work with our existing bookkeeper or accounting team?",
    answer:
      "Yes — in fact, most of our engagements work this way. We frequently layer in on top of existing bookkeeping or accounting staff, providing the oversight, reporting, and strategic guidance that the team needs to operate effectively. We can also help you build or supplement an internal accounting team if needed.",
    category: "Engagement",
  },
  {
    question: "What does the onboarding process look like?",
    answer:
      "We start with a discovery conversation to understand your business, current financial operations, and what you need. From there, we do an assessment of your existing accounting, reporting, and processes. Based on that assessment, we propose a specific scope of work with clear deliverables and timelines. Onboarding typically takes 2-4 weeks before we're operating at full stride.",
    category: "Engagement",
  },
  {
    question: "How does management reporting differ from what we already get from our accountant?",
    answer:
      "Compliance reporting (what most accountants provide) tells you what happened in the past — a P&L and balance sheet that meet reporting requirements. Management reporting makes the numbers useful for running the business: variance analysis against budget and prior periods, cash flow commentary, KPI tracking, and forward-looking context about what the current results mean for the rest of the period. It's designed for decision-makers, not for compliance.",
    category: "Management Reporting",
  },
  {
    question: "Do you replace our CPA or tax advisor?",
    answer:
      "No. We work alongside your CPA or tax advisor, not in place of them. We focus on financial operations, reporting, and strategic guidance. Your CPA handles tax preparation, tax planning, and audit/assurance work. In fact, many of our clients find that having clean, well-organized financial records makes their CPA's job easier and can improve the quality of tax planning conversations.",
    category: "General",
  },
  {
    question: "What size companies do you typically work with?",
    answer:
      "Our clients are generally founder-led businesses with $2M to $30M in revenue. They've grown past the point where basic bookkeeping is sufficient, but they haven't reached the scale where a full internal finance department makes sense — or they have some internal capability and need to supplement it with senior-level expertise.",
    category: "General",
  },
  {
    question: "How does pricing work?",
    answer:
      "Most of our engagements are structured as monthly retainers based on the scope of work, not hourly billing. This gives you predictable costs and gives us the right incentive to be efficient. We'll define the scope, deliverables, and fee during the proposal process so there are no surprises. Some project-based work (like initial accounting clean-ups or system implementations) may be scoped separately.",
    category: "Engagement",
  },
  {
    question: "What if we only need help with one area, like cash flow forecasting or management reporting?",
    answer:
      "That's completely fine. Not every business needs the full scope of services. We regularly do engagements focused on a single area — building a cash flow forecast, setting up management reporting, or cleaning up the close process. We'll recommend what we think you need based on the assessment, but the scope is always your decision.",
    category: "Engagement",
  },
];
