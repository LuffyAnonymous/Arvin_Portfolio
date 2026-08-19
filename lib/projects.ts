export type WorkflowStep = {
  label: string;
  detail: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  workflow: WorkflowStep[];
  tech: string[];
  context: string[];
  highlights?: string[];
};

export const projects: Project[] = [
  {
    slug: "ticket-operations-automation",
    title: "Ticket Operations Automation",
    category: "Automation / Operations",
    summary:
      "Built automation and internal tooling for football ticket operations, helping monitor orders, process information and streamline repetitive operational workflows.",
    workflow: [
      { label: "Platform", detail: "Orders and membership activity generated on the ticket platform" },
      { label: "Automate", detail: "Scripts and workflows pick up new activity on a schedule" },
      { label: "Database", detail: "Records are validated and written to a structured store" },
      { label: "Notify", detail: "Relevant updates are pushed out automatically" },
      { label: "Ops", detail: "The team works from clean, current data instead of raw feeds" },
    ],
    tech: ["n8n", "APIs", "Webhooks", "Python", "Databases", "Automation"],
    context: [
      "Ticket operations involve a high volume of orders, membership records and status changes that used to be checked and reconciled by hand. Missing, pending or inconsistent records were easy to miss when they had to be found by scrolling through platform dashboards.",
      "I built scrapers and automation scripts in Python to pull order and membership information on a schedule, and n8n workflows to sync that data across systems, trigger notifications and keep reporting current without anyone re-entering data.",
      "The result is a set of internal tools the operations team uses to catch inconsistent records early, monitor platform uptime and performance, and spend less time on manual cross-checking.",
    ],
  },
  {
    slug: "budgetflow",
    title: "BudgetFlow",
    category: "FinTech / Data",
    summary:
      "Built a personal finance platform that tracks transactions, budgets, debts, savings and financial cycles.",
    workflow: [
      { label: "Import", detail: "Transactions arrive via Telegram, SMS import or manual entry" },
      { label: "Classify", detail: "Incoming transactions are automatically categorised" },
      { label: "Store", detail: "Prisma and PostgreSQL keep a structured, queryable record" },
      { label: "Track", detail: "Budgets, debts and savings goals update against real data" },
      { label: "Report", detail: "Budget cycles and summaries are generated from the same data" },
    ],
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "APIs"],
    context: [
      "BudgetFlow is a full-stack personal finance web app built with Next.js, React, TypeScript, Prisma and PostgreSQL. It covers the parts of managing money that are usually spread across a spreadsheet, a banking app and a notes file: transactions, budgets, debt tracking, savings goals, remittances and reporting.",
      "Instead of manual entry for every transaction, it integrates Telegram and SMS import workflows and Apple Wallet transaction imports, automatically classifying and recording activity as it comes in. Authentication and role-based access control keep the data scoped to the right user.",
      "It's the same pattern I apply to business automation: pull data in from where it already happens, classify and structure it automatically, then make it usable without manual upkeep. Deployed on Vercel.",
    ],
    highlights: [
      "Transaction management",
      "Automated imports",
      "Financial categorisation",
      "Budget cycles",
      "Telegram integration",
      "Apple Wallet transaction imports",
    ],
  },
  {
    slug: "business-automation-workflows",
    title: "Business Automation Workflows",
    category: "Workflow Automation",
    summary:
      "Designed automated workflows that connect APIs, spreadsheets, messaging platforms and databases to reduce repetitive administrative work.",
    workflow: [
      { label: "Trigger", detail: "A new record, message or scheduled interval starts the workflow" },
      { label: "Connect", detail: "n8n calls the relevant APIs, sheets or databases" },
      { label: "Transform", detail: "Data is matched, validated and formatted for its destination" },
      { label: "Sync", detail: "Google Sheets, databases and internal tools are updated" },
      { label: "Notify", detail: "Telegram or email alerts reach the right person automatically" },
    ],
    tech: ["n8n", "APIs", "Webhooks", "Telegram", "Google Sheets", "Databases"],
    context: [
      "Day-to-day operations work generates a lot of small, repetitive administrative tasks — updating a sheet after an order comes in, notifying a teammate, keeping two systems in sync. None of it is complicated, but doing it by hand every day adds up.",
      "I design n8n workflows that connect the tools a business already uses — APIs, Google Sheets, Telegram, email and internal databases — so information moves between them automatically once a trigger fires, instead of someone copying it across manually.",
      "The focus is on reliability: workflows that keep running correctly as volume grows, fail in a way that's visible rather than silent, and are documented well enough that they can be handed off or extended later.",
    ],
  },
  {
    slug: "data-extraction-automation",
    title: "Data Extraction & Automation",
    category: "Data Engineering",
    summary:
      "Built automated data extraction workflows for websites and operational systems, transforming raw information into structured data that can be used by internal tools.",
    workflow: [
      { label: "Source", detail: "Websites and operational systems hold the raw information" },
      { label: "Extract", detail: "Python, Selenium and Playwright scrape and collect it on schedule" },
      { label: "Validate", detail: "Scripts check for missing fields and inconsistent records" },
      { label: "Structure", detail: "Clean data is written into SQL tables or spreadsheets" },
      { label: "Use", detail: "Internal tools and reports read from structured data, not raw pages" },
    ],
    tech: ["Python", "Web Scraping", "APIs", "SQL", "Automation"],
    context: [
      "Some of the information a business needs doesn't come through a clean API — it sits inside a website, a legacy system, or a dashboard that only shows the current state. Getting it out manually, on a recurring basis, is slow and error-prone.",
      "I built scraping and extraction tools using Python, Selenium and Playwright to collect this information automatically, along with SQL queries and validation scripts to catch missing or inconsistent data before it reaches a report.",
      "The output is structured data that internal tools and reporting can rely on — Excel and Google Sheets reports that generate themselves, and databases that stay current without someone checking a website every morning.",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
