"use client";

import { useState } from "react";
import { ArrowLeft, Check } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { WorkflowStrip } from "@/components/ui/WorkflowStrip";
import type { WorkflowStep } from "@/lib/projects";

export function CaseStudyInspector({
  problem,
  solution,
  solutionHighlights,
  workflow,
}: {
  problem: string;
  solution: string;
  solutionHighlights?: string[];
  workflow: WorkflowStep[];
}) {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const step = activeStep !== null ? workflow[activeStep] : null;

  return (
    <div className="grid grid-cols-1 gap-16 md:grid-cols-[1.4fr_1fr]">
      <Reveal className="max-w-2xl">
        {step ? (
          <div key={activeStep} className="animate-fade-up space-y-4">
            <button
              type="button"
              onClick={() => setActiveStep(null)}
              className="inline-flex items-center gap-2 text-sm text-ink-500 transition-colors duration-150 hover:text-ink-900"
            >
              <ArrowLeft size={14} aria-hidden />
              Back to overview
            </button>
            <div>
              <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-accent-600">
                Step {String(activeStep! + 1).padStart(2, "0")} / {String(workflow.length).padStart(2, "0")}
                {" · "}
                {step.label}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-700">{step.detail}</p>
            </div>
          </div>
        ) : (
          <div className="animate-fade-up space-y-12">
            <div>
              <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-accent-600">
                The problem
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-700">{problem}</p>
            </div>

            <div>
              <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-accent-600">
                The approach
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-700">{solution}</p>

              {solutionHighlights ? (
                <ul className="mt-6 grid grid-cols-1 gap-3 border-t border-ink-200 pt-6 sm:grid-cols-2">
                  {solutionHighlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2 text-sm text-ink-700">
                      <Check size={16} className="mt-0.5 shrink-0 text-accent-600" aria-hidden />
                      {highlight}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        )}
      </Reveal>

      <Reveal
        delay={150}
        className="rounded-lg border border-ink-200 bg-ink-50 p-8 md:sticky md:top-24"
      >
        <h2 className="mb-2 font-mono text-xs uppercase tracking-[0.14em] text-ink-500">
          The workflow
        </h2>
        <p className="mb-8 text-xs text-ink-400">Click a step to inspect what happens there.</p>
        <WorkflowStrip
          steps={workflow}
          orientation="vertical"
          activeIndex={activeStep ?? undefined}
          onStepSelect={setActiveStep}
        />
      </Reveal>
    </div>
  );
}
