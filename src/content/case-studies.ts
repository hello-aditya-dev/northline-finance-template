export interface CaseStudy {
  slug: string;
  company: string;
  industry: string;
  type: string;
  situation: string;
  problem: string;
  work: string[];
  outcomes: { label: string; value: string; description?: string }[];
  servicesUsed: string[];
  conclusion: string;
  isDemo: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "meridian-software",
    company: "Meridian Software",
    industry: "Technology",
    type: "SaaS",
    situation:
      "Meridian had raised a Series A and were scaling from $1.2M to $3.5M ARR over 18 months. Their finance function consisted of a bookkeeper and a part-time controller who handled basic compliance. The CEO was preparing for board meetings by pulling numbers together from spreadsheets the night before.",
    problem:
      "No forward-looking financial planning. Board materials were inconsistent and didn't meet investor expectations. Cash runway was unclear — they were making hiring and spend decisions without understanding the implications on their cash position. The CEO was spending too much time on finance and not enough on the business.",
    work: [
      "Established a financial model with scenario planning for growth, hiring, and burn rate",
      "Built a rolling 13-week cash flow forecast that became the primary decision tool",
      "Created standardized board reporting packages with KPI dashboards",
      "Implemented monthly management reporting with variance analysis and narrative commentary",
      "Set up ARR/MRR tracking with cohort analysis and churn reporting",
    ],
    outcomes: [
      { label: "Board prep time", value: "Reduced 70%", description: "CEO went from hours of manual assembly to a consistent, ready-to-review package" },
      { label: "Cash visibility", value: "13-week clarity", description: "Rolling forecast eliminated cash surprises and enabled proactive decisions" },
      { label: "Runway accuracy", value: "±2 weeks", description: "From uncertain cash position to precise runway calculation" },
      { label: "CEO time on finance", value: "Cut 60%", description: "Freed from ad hoc financial work to focus on product and customers" },
    ],
    servicesUsed: ["Fractional CFO", "Board & Investor Reporting", "Forecasting & Planning", "Cash Flow Management"],
    conclusion:
      "Meridian's CEO went into board meetings with confidence and clarity about the financial position. The team made faster, better-informed decisions about hiring and spend because they understood the cash implications in real time.",
    isDemo: true,
  },
  {
    slug: "atlas-commerce",
    company: "Atlas Commerce",
    industry: "Ecommerce",
    type: "DTC Brand",
    situation:
      "Atlas had grown from $2M to $8M in revenue over two years across their DTC site, Amazon, and two retail partnerships. They were doing $8M in topline but couldn't tell you their margin by channel, their true inventory carrying cost, or when they might run into cash pressure.",
    problem:
      "Accounting was behind and unreliable — close was taking 25+ days. COGS allocations were crude and masked channel-level profitability. Inventory was managed by feel, not by data. The founders were surprised by cash shortfalls twice in the past year despite strong revenue growth.",
    work: [
      "Cleaned up the accounting function and reduced close from 25 days to 8 days",
      "Implemented channel-level contribution margin analysis across DTC, Amazon, and wholesale",
      "Built an inventory planning model with carrying cost and reorder point analysis",
      "Established a 13-week cash flow forecast that incorporated inventory purchase timing",
      "Created monthly management reporting with a focus on cash and margin dynamics",
    ],
    outcomes: [
      { label: "Close cycle", value: "25 → 8 days", description: "Faster, more reliable close enabled better decision-making" },
      { label: "Channel visibility", value: "3 channels clear", description: "First time seeing true margin by sales channel" },
      { label: "Cash surprises", value: "Eliminated", description: "No more unexpected shortfalls — inventory and cash planned together" },
      { label: "Best channel margin", value: "Identified", description: "Discovered DTC was 22% more profitable per unit than Amazon" },
    ],
    servicesUsed: ["Controller Services", "Cash Flow Management", "Management Reporting", "KPI Reporting"],
    conclusion:
      "Atlas went from growth without financial clarity to growth with purpose. They could see which channels to invest in, when to order inventory, and where their cash was going — all of which made their growth more sustainable.",
    isDemo: true,
  },
  {
    slug: "pinnacle-advisory",
    company: "Pinnacle Advisory",
    industry: "Consulting",
    type: "Management Consulting",
    situation:
      "Pinnacle was a 35-person consulting firm doing $7M in annual revenue. They had a solid bookkeeper but no financial reporting beyond basic P&L and balance sheet. Partners made distribution decisions based on cash in the bank, not on actual profitability or projected cash needs.",
    problem:
      "No management reporting beyond compliance-level financials. Utilization was tracked in a separate system that didn't connect to financials. Partners couldn't see engagement-level margins. The firm was consistently surprised by tax obligations and had no visibility into whether they were investing the right amount in business development.",
    work: [
      "Built monthly management reporting with variance analysis and forward-looking commentary",
      "Connected utilization tracking to financial reporting for true engagement profitability",
      "Established partner distribution framework based on actual profitability and retained earnings targets",
      "Created KPI dashboards tracking utilization, realization, revenue per consultant, and pipeline coverage",
      "Implemented quarterly forecasting tied to pipeline and engagement start schedules",
    ],
    outcomes: [
      { label: "Engagement margins", value: "First visibility", description: "Partners could finally see which engagements and clients were most profitable" },
      { label: "Partner distributions", value: "Structured", description: "Moved from ad hoc to a framework that protected the firm's capital position" },
      { label: "Tax surprises", value: "Eliminated", description: "Quarterly estimates aligned to actual profitability, not guesses" },
      { label: "Utilization insight", value: "Connected", description: "Operations and finance finally spoke the same language" },
    ],
    servicesUsed: ["Fractional CFO", "Management Reporting", "KPI Reporting", "Forecasting & Planning"],
    conclusion:
      "Pinnacle's partners went from flying financially blind to having the information they needed to make better decisions about client mix, staffing, and how much to take out of the business versus reinvest.",
    isDemo: true,
  },
  {
    slug: "ridgeview-services",
    company: "Ridgeview Services",
    industry: "Professional Services",
    type: "Engineering Firm",
    situation:
      "Ridgeview was a 50-person professional services firm that had grown through reputation and relationships. Their accounting was done by an external bookkeeping service that delivered financials weeks after month-end. The managing partner knew they needed better financial operations but wasn't sure where to start.",
    problem:
      "Financial information arrived too late to be useful for decisions. Project costing was estimated, not tracked. The firm had grown to a size where the managing partner could no longer keep financial relationships in their head. They needed an accounting overhaul and someone to help them build a finance function that could support a firm their size.",
    work: [
      "Brought accounting in-house and restructured the monthly close process",
      "Implemented project-level tracking with actual vs. estimated margin reporting",
      "Built a management reporting package with monthly variance and quarterly rolling forecast",
      "Established working capital management and cash flow forecasting",
      "Created a financial operations playbook documenting processes, timelines, and responsibilities",
    ],
    outcomes: [
      { label: "Information timeliness", value: "Weeks → days", description: "Financials available within 5 business days instead of 3+ weeks" },
      { label: "Project margin accuracy", value: "Estimated → actual", description: "Replaced guesswork with tracked project-level profitability" },
      { label: "Finance function", value: "Built from scratch", description: "Went from outsourced bookkeeping to a functioning internal finance operation" },
      { label: "Forward planning", value: "Established", description: "First rolling forecast and cash flow planning in firm history" },
    ],
    servicesUsed: ["Monthly Accounting", "Controller Services", "Management Reporting", "Forecasting & Planning", "Process Improvement"],
    conclusion:
      "Ridgeview went from financial information that was late and incomplete to a finance function that supported the firm's size and complexity. The managing partner could finally make decisions with current, accurate financial information.",
    isDemo: true,
  },
];
