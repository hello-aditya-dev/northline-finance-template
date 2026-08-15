export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  readingTime: string;
  body?: string;
}

export const insights: Article[] = [
  {
    slug: "building-13-week-cash-flow-forecast",
    title: "Building a Useful 13-Week Cash Flow Forecast",
    excerpt:
      "Most businesses know they should forecast cash flow. Few do it well. Here's how to build a 13-week rolling forecast that actually gets used — and how to avoid the common mistakes that make these exercises theoretical rather than practical.",
    author: "Catherine Hale",
    date: "2025-01-15",
    category: "Cash Flow",
    readingTime: "8 min read",
    body: `A 13-week cash flow forecast is one of the most practical financial tools a growing business can have. It's short enough to be accurate, long enough to be useful, and rolling — so it's always current.

**Start with what you know, not what you hope**

The biggest mistake businesses make is building an optimistic forecast and then relying on it. A useful cash flow forecast starts with known cash commitments — payroll, rent, loan payments, vendor payment terms — and then layers in expected receipts with appropriate skepticism.

For accounts receivable, use your actual collection history, not your payment terms. If your terms are Net 30 but customers typically pay in 45 days, model 45 days. If your largest client has been paying late, model them late.

**Structure it simply**

Week 1 should be your actual starting cash balance. Each subsequent week adds expected inflows and subtracts known outflows. Don't try to model every transaction — group meaningful categories (payroll, COGS, operating expenses, debt service, tax payments, capital expenditures) and make sure the big numbers are right.

**Update it weekly**

A forecast that gets built once and sits in a spreadsheet isn't a forecast — it's a snapshot. The value comes from weekly updates where you compare actual to projected, understand variances, and roll the forecast forward. This discipline is what turns a document into a decision tool.

**Use it for decisions, not just monitoring**

The forecast should inform decisions: when to delay a hire, when to push on collections, whether you can afford that office expansion, when to draw on a line of credit. If your forecast isn't changing decisions, it needs to be redesigned.

**Common pitfalls to avoid:**

- Modeling at too granular a level (creates maintenance burden and false precision)
- Ignoring seasonality or known timing differences
- Not reconciling back to the GL each month
- Building it alone in finance instead of with input from operations
- Treating it as a finance exercise rather than a business tool`,
  },
  {
    slug: "controller-vs-cfo-growing-business",
    title: "When a Growing Business Needs a Controller vs. CFO",
    excerpt:
      "These roles solve different problems. A controller makes your accounting accurate and timely. A CFO makes your financial information useful for decisions. Many businesses need both — but almost never at the same time or in the same way.",
    author: "Catherine Hale",
    date: "2025-01-02",
    category: "Finance Function",
    readingTime: "7 min read",
    body: `The controller vs. CFO question comes up constantly with growing businesses, and it's worth answering carefully because getting it wrong is expensive — either in money spent on the wrong role, or in problems that go unsolved.

**What a controller actually does**

A controller owns the accounting function. They ensure accurate financial statements, manage the close process, handle technical accounting questions, and maintain the controls and procedures that keep things reliable. A good controller means your books are right, your close is on time, and your financials can be trusted.

If your close takes too long, your financials have errors, you're finding reconciliation problems, or you don't have consistent processes — you need a controller.

**What a CFO actually does**

A CFO is a strategic role. They translate financial information into business decisions, manage stakeholder relationships (boards, investors, lenders), oversee financial planning and forecasting, and ensure the business has the financial visibility and infrastructure to support its strategy.

If you're making important decisions without financial analysis, your board reporting is inconsistent, you don't have forward-looking financial plans, or your CEO is doing too much financial work — you need a CFO.

**The typical progression**

Most founder-led businesses go through a predictable sequence:

1. **Early stage** ($1-3M revenue): A bookkeeper or external accounting service handles compliance. The founder keeps financial relationships in their head.

2. **Growing** ($3-10M revenue): The accounting function needs structure. This is usually the controller moment — get the numbers right, get the close on schedule, build reliable processes.

3. **Scaling** ($10M+ revenue): The business needs financial strategy, not just financial accuracy. This is the CFO moment — forward planning, board communication, decision support, financial infrastructure that scales.

**Where fractional makes sense**

Most businesses in the $3-15M range don't need a full-time CFO, and many don't need a full-time controller either. A fractional arrangement gives you access to senior-level capability at a fraction of the cost — and with firms like Northline, you get a team, not just an individual.`,
  },
  {
    slug: "monthly-management-reporting",
    title: "What Monthly Management Reporting Should Actually Tell You",
    excerpt:
      "If your monthly financial package is just a P&L and balance sheet with no context, it's not management reporting — it's compliance output with a different delivery schedule. Real management reporting makes the numbers useful.",
    author: "Daniel Reeves",
    date: "2024-12-18",
    category: "Management Reporting",
    readingTime: "6 min read",
    body: `There's a significant difference between producing financial statements and producing management reporting. Financial statements answer "what happened?" Management reporting answers "what happened, why, what it means, and what we should do about it."

**The minimum viable management reporting package:**

1. **Financial statements with context** — not just the numbers, but comparison to budget, prior period, and trend. A P&L without variance analysis is just a list.

2. **Variance analysis with narrative** — the numbers that deviated from plan, why they deviated, and whether it's a one-time event or a trend. This is where the value lives.

3. **Cash summary** — where cash sits, what changed, and what's coming. Cash is too important to be a footnote.

4. **KPI dashboard** — the 5-8 metrics that matter most to your business, tracked over time, with targets. Not every metric — the ones that drive decisions.

5. **Forward-looking commentary** — what the current results mean for the rest of the quarter and year. Management reporting that only looks backward is only doing half the job.

**What it shouldn't be:**

- Every number you can produce. Reporting overload is as bad as no reporting.
- Just financial data. The best reporting connects financial metrics to operational data.
- Always the same format. Your reporting should evolve as the business and its questions change.
- Written only for the finance team. If the CEO can't quickly understand it, it needs to be redesigned.

**The delivery standard**

Management reporting should be delivered within 5-7 business days of month-end. If it's arriving on day 20, the information is stale. Speed matters because the value of financial information depreciates quickly.`,
  },
  {
    slug: "preparing-finance-function-for-growth",
    title: "Preparing a Finance Function for Growth",
    excerpt:
      "The finance function that worked at $3M won't work at $8M, and the one that works at $8M won't work at $20M. Here's how to think about building finance capability ahead of the growth rather than in response to it.",
    author: "Catherine Hale",
    date: "2024-12-04",
    category: "Finance Function",
    readingTime: "9 min read",
  },
  {
    slug: "measuring-service-business-project-margins",
    title: "Measuring Service-Business Project Margins",
    excerpt:
      "In a service business, project margins are where profitability lives or dies. But measuring them properly requires connecting time tracking, compensation, and revenue data that often live in different systems.",
    author: "Daniel Reeves",
    date: "2024-11-20",
    category: "KPIs & Metrics",
    readingTime: "6 min read",
  },
  {
    slug: "evaluating-month-end-close-process",
    title: "How to Evaluate Your Month-End Close Process",
    excerpt:
      "Your close process is the foundation of your entire reporting cycle. If it's slow, error-prone, or inconsistent, everything built on top of it — management reporting, forecasting, board packages — will be compromised.",
    author: "Sarah Chen",
    date: "2024-11-06",
    category: "Accounting Operations",
    readingTime: "5 min read",
  },
  {
    slug: "cash-conversion-cycles-ecommerce",
    title: "Understanding Cash Conversion Cycles in Ecommerce",
    excerpt:
      "Ecommerce businesses face a particular cash challenge: you pay for inventory before you sell it, and you sell it before you collect on it. The cash conversion cycle measures how long your cash is trapped in that process.",
    author: "Catherine Hale",
    date: "2024-10-22",
    category: "Cash Flow",
    readingTime: "7 min read",
  },
  {
    slug: "kpi-reporting-that-drives-decisions",
    title: "Setting Up KPI Reporting That Drives Decisions",
    excerpt:
      "Most KPI reporting fails not because the metrics are wrong, but because they're disconnected from decisions. Here's how to build a measurement framework that actually influences how the business operates.",
    author: "Daniel Reeves",
    date: "2024-10-08",
    category: "KPIs & Metrics",
    readingTime: "6 min read",
  },
];
