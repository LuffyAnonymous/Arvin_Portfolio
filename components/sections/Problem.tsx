"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

type Item = {
  title: string;
  manual: string[];
  automated: string[];
};

const items: Item[] = [
  {
    title: "Copying data",
    manual: ["Open source", "Select", "Copy", "Paste"],
    automated: ["Trigger", "Sync", "Done ✓"],
  },
  {
    title: "Updating Excel",
    manual: ["Open file", "Find row", "Copy value", "Paste", "Save"],
    automated: ["Trigger", "Process", "Done ✓"],
  },
  {
    title: "Checking emails",
    manual: ["Open inbox", "Scan subject", "Open message", "Extract info"],
    automated: ["Trigger", "Extract", "Done ✓"],
  },
  {
    title: "Sending notifications",
    manual: ["Check status", "Open chat", "Type message", "Send"],
    automated: ["Trigger", "Notify", "Done ✓"],
  },
  {
    title: "Creating reports",
    manual: ["Collect data", "Open sheet", "Format", "Export"],
    automated: ["Trigger", "Generate", "Done ✓"],
  },
  {
    title: "Monitoring websites",
    manual: ["Open site", "Check page", "Compare", "Note change"],
    automated: ["Trigger", "Watch", "Done ✓"],
  },
];

function ProblemCard({ item }: { item: Item }) {
  const [open, setOpen] = useState(false);
  const [phase, setPhase] = useState<"manual" | "automated">("manual");
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  function play() {
    setOpen(true);
    setPhase("manual");
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setPhase("automated"), 550);
  }

  function reset() {
    setOpen(false);
    setPhase("manual");
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }

  const steps = phase === "manual" ? item.manual : item.automated;

  return (
    <button
      type="button"
      onMouseEnter={play}
      onFocus={play}
      onMouseLeave={reset}
      onBlur={reset}
      onClick={play}
      className="group flex h-full flex-col justify-between bg-ink-50 p-6 text-left transition-colors duration-150 hover:bg-white"
    >
      <div className="flex items-center justify-between gap-3">
        <h3 className="font-display text-lg font-semibold tracking-tight text-ink-900">
          {item.title}
        </h3>
        <span
          className={`h-2 w-2 shrink-0 rounded-sm transition-colors duration-150 ${
            open ? "bg-accent-500" : "bg-ink-300"
          }`}
          aria-hidden
        />
      </div>

      <div className="mt-6 min-h-32">
        {open ? (
          <div>
            <p
              className={`font-mono text-[0.65rem] uppercase tracking-[0.1em] transition-colors duration-150 ${
                phase === "automated" ? "text-accent-600" : "text-ink-500"
              }`}
            >
              {phase === "automated" ? "Automated" : "Manual"}
            </p>
            <ol className="mt-2 space-y-1">
              {steps.map((step) => (
                <li key={step} className="font-mono text-sm text-ink-700">
                  {step}
                </li>
              ))}
            </ol>
          </div>
        ) : (
          <p className="font-mono text-xs uppercase tracking-[0.1em] text-ink-400">
            Hover to see it automated
          </p>
        )}
      </div>
    </button>
  );
}

export function Problem() {
  return (
    <section id="problem" className="bg-ink-50 py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="The pattern"
            title="If you're doing this every day, we should talk."
            description="Hover — or tap — any of these. That's roughly what changes when it's automated."
          />
        </Reveal>

        <Reveal delay={100} className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-ink-200 bg-ink-200 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <ProblemCard key={item.title} item={item} />
          ))}
        </Reveal>

        <Reveal delay={200} className="mt-10 max-w-2xl border-l-4 border-accent-500 pl-6">
          <p className="text-xl font-medium leading-relaxed text-ink-900">
            If a process is repetitive, rule-based, and happens regularly, there’s a
            good chance it can be automated.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
