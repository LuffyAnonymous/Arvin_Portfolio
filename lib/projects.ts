export type WorkflowStep = {
  label: string;
  detail: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  problem: string;
  solution: string;
  solutionHighlights?: string[];
  workflow: WorkflowStep[];
  result: string;
  tech: string[];
};

export const projects: Project[] = [
  {
    slug: "ticket-operations-automation",
    title: "Ticket Operations Automation",
    category: "Automation / Operations",
    summary:
      "Built automation and internal tooling for football ticket operations, helping monitor orders, process information and streamline repetitive operational workflows.",
    problem:
      "Ticket operations involve a high volume of orders, membership records and status changes that used to be checked and reconciled by hand. Missing, pending or inconsistent records were easy to miss when they had to be found by scrolling through platform dashboards.",
    solution:
      "I built scrapers and automation scripts in Python to pull order and membership information on a schedule, and n8n workflows to sync that data across systems, trigger notifications and keep reporting current without anyone re-entering data.",
    workflow: [
      { label: "Platform", detail: "Orders and membership activity generated on the ticket platform" },
      { label: "Collect", detail: "Scripts collect order and membership data on a schedule" },
      { label: "Process", detail: "Automation validates and structures the incoming records" },
      { label: "Database", detail: "Clean records are written to a structured, queryable store" },
      { label: "Notify", detail: "The operations team gets automatic updates instead of raw feeds" },
    ],
    result:
      "The operations team catches inconsistent records earlier, monitors platform uptime from clean internal dashboards instead of raw feeds, and spends noticeably less time on manual cross-checking.",
    tech: ["n8n", "APIs", "Webhooks", "Python", "Databases", "Automation"],
  },
  {
    slug: "budgetflow",
    title: "BudgetFlow",
    category: "FinTech / Data",
    summary:
      "Built a personal finance platform that tracks transactions, budgets, debts, savings and financial cycles.",
    problem:
      "Managing personal finances usually means switching between a banking app, a spreadsheet and a notes file — transactions, budgets, debts and savings tracked in different places with no single source of truth and a lot of manual re-entry.",
    solution:
      "BudgetFlow is a full-stack personal finance web app built with Next.js, React, TypeScript, Prisma and PostgreSQL, covering transactions, budgets, debt tracking, savings goals, remittances and reporting in one place. Telegram and SMS import workflows, plus Apple Wallet transaction imports, automatically classify and record activity as it comes in, and authentication with role-based access keeps data scoped to the right user.",
    solutionHighlights: [
      "Transaction management",
      "Automated imports",
      "Financial categorisation",
      "Budget cycles",
      "Telegram integration",
      "Apple Wallet transaction imports",
    ],
    workflow: [
      { label: "Import", detail: "Transactions arrive via Telegram, SMS import or manual entry" },
      { label: "Classify", detail: "Incoming transactions are automatically categorised" },
      { label: "Store", detail: "Prisma and PostgreSQL keep a structured, queryable record" },
      { label: "Track", detail: "Budgets, debts and savings goals update against real data" },
      { label: "Report", detail: "Budget cycles and summaries are generated from the same data" },
    ],
    result:
      "It's the same pattern applied to business automation: pull data in from where it already happens, classify and structure it automatically, then make it usable without manual upkeep. Deployed and running on Vercel.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "APIs"],
  },
  {
    slug: "business-automation-workflows",
    title: "Business Automation Workflows",
    category: "Workflow Automation",
    summary:
      "Designed automated workflows that connect APIs, spreadsheets, messaging platforms and databases to reduce repetitive administrative work.",
    problem:
      "Day-to-day operations work generates a lot of small, repetitive administrative tasks — updating a sheet after an order comes in, notifying a teammate, keeping two systems in sync. None of it is complicated, but doing it by hand every day adds up.",
    solution:
      "I design n8n workflows that connect the tools a business already uses — APIs, Google Sheets, Telegram, email and internal databases — so information moves between them automatically once a trigger fires, instead of someone copying it across manually.",
    workflow: [
      { label: "Trigger", detail: "A new record, message or scheduled interval starts the workflow" },
      { label: "Connect", detail: "n8n calls the relevant APIs, sheets or databases" },
      { label: "Transform", detail: "Data is matched, validated and formatted for its destination" },
      { label: "Sync", detail: "Google Sheets, databases and internal tools are updated" },
      { label: "Notify", detail: "Telegram or email alerts reach the right person automatically" },
    ],
    result:
      "The focus is on reliability: workflows that keep running correctly as volume grows, fail in a way that's visible rather than silent, and are documented well enough that they can be handed off or extended later.",
    tech: ["n8n", "APIs", "Webhooks", "Telegram", "Google Sheets", "Databases"],
  },
  {
    slug: "data-extraction-automation",
    title: "Data Extraction & Automation",
    category: "Data Engineering",
    summary:
      "Built automated data extraction workflows for websites and operational systems, transforming raw information into structured data that can be used by internal tools.",
    problem:
      "Some of the information a business needs doesn't come through a clean API — it sits inside a website, a legacy system, or a dashboard that only shows the current state. Getting it out manually, on a recurring basis, is slow and error-prone.",
    solution:
      "I built scraping and extraction tools using Python, Selenium and Playwright to collect this information automatically, along with SQL queries and validation scripts to catch missing or inconsistent data before it reaches a report.",
    workflow: [
      { label: "Source", detail: "Websites and operational systems hold the raw information" },
      { label: "Extract", detail: "Python, Selenium and Playwright scrape and collect it on schedule" },
      { label: "Validate", detail: "Scripts check for missing fields and inconsistent records" },
      { label: "Structure", detail: "Clean data is written into SQL tables or spreadsheets" },
      { label: "Use", detail: "Internal tools and reports read from structured data, not raw pages" },
    ],
    result:
      "The output is structured data that internal tools and reporting can rely on — Excel and Google Sheets reports that generate themselves, and databases that stay current without someone checking a website every morning.",
    tech: ["Python", "Web Scraping", "APIs", "SQL", "Automation"],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
