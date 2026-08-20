import { ReactNode } from "react";
import { WorkflowStrip } from "@/components/ui/WorkflowStrip";
import { RevealBar } from "@/components/ui/RevealBar";
import { StatusRow } from "@/components/ui/StatusRow";

function Panel({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-lg border border-ink-50/10 bg-ink-800/50 p-6 sm:p-8">
      {children}
    </div>
  );
}

function DemoTag({ label = "Demo data" }: { label?: string }) {
  return (
    <p className="mb-6 inline-flex items-center gap-1.5 rounded-sm border border-ink-50/15 px-2 py-1 font-mono text-[0.65rem] uppercase tracking-[0.1em] text-ink-500">
      {label}
    </p>
  );
}

/** Project 01 — Ticket Operations Automation: the pipeline, plus a live-looking status readout. */
export function TicketOpsPreview() {
  return (
    <Panel>
      <p className="mb-6 font-mono text-xs uppercase tracking-[0.14em] text-ink-500">
        System status
      </p>
      <WorkflowStrip
        steps={[
          { label: "Platform" },
          { label: "Collect" },
          { label: "Process" },
          { label: "Database" },
          { label: "Notify" },
        ]}
        tone="dark"
        orientation="vertical"
        activeIndex={2}
      />
      <div className="mt-6 border-t border-ink-50/10 pt-2">
        <StatusRow item={{ label: "Incoming orders", value: "Active" }} />
        <StatusRow item={{ label: "Processing", value: "Running" }} />
        <StatusRow item={{ label: "Notifications", value: "Ready" }} />
      </div>
    </Panel>
  );
}

/** Project 02 — BudgetFlow: a miniature dashboard preview, clearly demo data. */
export function BudgetFlowPreview() {
  return (
    <Panel>
      <div className="flex items-center justify-between">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-ink-500">
          Monthly overview
        </p>
        <DemoTag />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.1em] text-ink-500">Income</p>
          <p className="mt-1 font-display text-2xl font-semibold text-ink-50">AED 18,400</p>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.1em] text-ink-500">Expenses</p>
          <p className="mt-1 font-display text-2xl font-semibold text-ink-50">AED 11,250</p>
        </div>
      </div>

      <div className="mt-6">
        <div className="mb-2 flex items-center justify-between font-mono text-xs uppercase tracking-[0.1em] text-ink-500">
          <span>Budget used</span>
          <span className="text-accent-400">82%</span>
        </div>
        <RevealBar percent={82} tone="dark" />
      </div>

      <div className="mt-6 border-t border-ink-50/10 pt-4">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.1em] text-ink-500">
          Recent transactions
        </p>
        <ul className="space-y-2 font-mono text-sm">
          <li className="flex justify-between text-ink-300">
            <span>Netflix</span>
            <span>-45 AED</span>
          </li>
          <li className="flex justify-between text-ink-300">
            <span>Transport</span>
            <span>-120 AED</span>
          </li>
          <li className="flex justify-between text-ink-300">
            <span>Food</span>
            <span>-280 AED</span>
          </li>
        </ul>
      </div>
    </Panel>
  );
}

/** Project 03 — Data Extraction & Automation: a pipeline console with a fill animation. */
export function DataExtractionPreview() {
  const stages = [
    { label: "Validate", value: "OK" },
    { label: "Structure", value: "Ready" },
    { label: "Database", value: "Synced" },
  ];

  return (
    <Panel>
      <div className="flex items-center justify-between">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-ink-500">
          Extraction console
        </p>
        <DemoTag label="Demo mode" />
      </div>

      <div>
        <p className="font-mono text-xs uppercase tracking-[0.1em] text-ink-400">Source</p>
        <p className="mt-1 font-mono text-sm text-ink-100">Website</p>
      </div>

      <div className="mt-5">
        <div className="mb-2 flex items-center justify-between font-mono text-xs uppercase tracking-[0.1em] text-ink-400">
          <span>Extract</span>
          <span className="text-accent-400">82%</span>
        </div>
        <RevealBar percent={82} tone="dark" />
      </div>

      <div className="mt-5 border-t border-ink-50/10 pt-2">
        {stages.map((stage) => (
          <StatusRow key={stage.label} item={stage} />
        ))}
      </div>
    </Panel>
  );
}

function DiagramNode({ label, accent = false }: { label: string; accent?: boolean }) {
  return (
    <div
      className={`rounded-md border px-4 py-3 text-center ${
        accent ? "border-accent-500/30" : "border-ink-50/15"
      } bg-ink-900`}
    >
      <p
        className={`font-mono text-xs uppercase tracking-[0.1em] ${
          accent ? "text-accent-400" : "text-ink-100"
        }`}
      >
        {label}
      </p>
    </div>
  );
}

/** Project 04 — Business Automation Workflows: a modular, branching diagram. */
export function BusinessWorkflowsPreview() {
  return (
    <Panel>
      <p className="mb-6 font-mono text-xs uppercase tracking-[0.14em] text-ink-500">
        Workflow map
      </p>

      <DiagramNode label="Email" />

      <div className="relative h-10">
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-ink-50/15" aria-hidden />
        <div className="absolute left-1/2 top-2 flex -translate-x-1/2 items-center gap-2" aria-hidden>
          <span className="h-px w-4 bg-accent-500/60" />
          <span className="whitespace-nowrap rounded-sm border border-accent-500/30 bg-ink-900 px-2 py-1 font-mono text-[0.6rem] uppercase tracking-[0.1em] text-accent-400">
            AI / Extraction
          </span>
        </div>
      </div>

      <DiagramNode label="Database" />

      <div className="relative h-8">
        <div className="absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-accent-500/60" aria-hidden />
        <div className="absolute left-1/4 right-1/4 top-3 h-px bg-accent-500/60" aria-hidden />
        <div className="absolute left-1/4 top-3 h-5 w-px bg-accent-500/60" aria-hidden />
        <div className="absolute right-1/4 top-3 h-5 w-px bg-accent-500/60" aria-hidden />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <DiagramNode label="Telegram" />
        <DiagramNode label="Report" />
      </div>
    </Panel>
  );
}
