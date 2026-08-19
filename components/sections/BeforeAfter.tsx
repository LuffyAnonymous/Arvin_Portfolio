"use client";

import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WorkflowStrip } from "@/components/ui/WorkflowStrip";

const before = [
  { label: "Email" },
  { label: "Manual copy" },
  { label: "Excel" },
  { label: "Check another system" },
  { label: "Send notification" },
  { label: "Create report" },
];

const after = [
  { label: "Trigger" },
  { label: "Automation" },
  { label: "Database" },
  { label: "Notification" },
  { label: "Report" },
];

const STEP_MS = 450;

export function BeforeAfter() {
  const [activeStep, setActiveStep] = useState(2);
  const [playing, setPlaying] = useState(false);
  const [runId, setRunId] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  function playAutomation() {
    if (playing) return;

    const reducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion) {
      setActiveStep(after.length - 1);
      return;
    }

    setPlaying(true);
    setRunId((id) => id + 1);
    setActiveStep(0);

    let step = 0;
    const advance = () => {
      step += 1;
      if (step >= after.length) {
        setPlaying(false);
        return;
      }
      setActiveStep(step);
      timeoutRef.current = setTimeout(advance, STEP_MS);
    };
    timeoutRef.current = setTimeout(advance, STEP_MS);
  }

  return (
    <section className="bg-ink-900 py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="The difference"
          title="Same outcome, far less handling"
          tone="dark"
          description="One order, handled two ways. The steps don't disappear — they just stop needing a person."
        />

        <div className="mt-16 grid grid-cols-1 items-start gap-12 md:grid-cols-[1fr_auto_1fr] md:gap-8">
          <div>
            <p className="mb-8 font-mono text-xs uppercase tracking-[0.14em] text-ink-500">
              Before — manual
            </p>
            <WorkflowStrip steps={before} tone="dark" orientation="vertical" animated={false} />
          </div>

          <div className="flex justify-center md:h-full md:items-center">
            <button
              type="button"
              onClick={playAutomation}
              disabled={playing}
              className="inline-flex items-center gap-2 rounded-md border border-accent-500/40 bg-accent-500/10 px-5 py-2.5 text-sm font-medium text-accent-300 transition-colors duration-200 hover:bg-accent-500/20 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Play size={14} aria-hidden />
              {playing ? "Automating…" : "Automate it"}
            </button>
          </div>

          <div>
            <p className="mb-8 font-mono text-xs uppercase tracking-[0.14em] text-accent-300">
              After — automated
            </p>
            <WorkflowStrip
              key={runId}
              steps={after}
              tone="dark"
              orientation="vertical"
              activeIndex={activeStep}
              animated={playing}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
