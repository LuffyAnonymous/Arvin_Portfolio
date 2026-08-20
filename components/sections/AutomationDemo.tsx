"use client";

import { useEffect, useRef, useState } from "react";
import { Play, RotateCcw } from "lucide-react";
import { Container } from "@/components/ui/Container";

const manualSteps = [
  "New order",
  "Open email",
  "Copy information",
  "Open Excel",
  "Find customer",
  "Update row",
  "Send notification",
  "Create report",
];

const automatedSteps = ["New order", "Automation", "Database", "Notification", "Report"];

type Phase = "manual" | "collapsing" | "automating" | "done";

const STEP_MS = 420;
const COLLAPSE_MS = 500;

export function AutomationDemo() {
  const [phase, setPhase] = useState<Phase>("manual");
  const [activeIndex, setActiveIndex] = useState(-1);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  function clearTimers() {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
  }

  useEffect(() => () => clearTimers(), []);

  function run() {
    clearTimers();
    const reducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion) {
      setPhase("done");
      setActiveIndex(automatedSteps.length - 1);
      return;
    }

    setPhase("collapsing");
    setActiveIndex(-1);

    timeoutsRef.current.push(
      setTimeout(() => {
        setPhase("automating");
        let step = 0;
        setActiveIndex(0);
        const tick = () => {
          step += 1;
          if (step >= automatedSteps.length) {
            setPhase("done");
            return;
          }
          setActiveIndex(step);
          timeoutsRef.current.push(setTimeout(tick, STEP_MS));
        };
        timeoutsRef.current.push(setTimeout(tick, STEP_MS));
      }, COLLAPSE_MS),
    );
  }

  function reset() {
    clearTimers();
    setPhase("manual");
    setActiveIndex(-1);
  }

  const manualCollapsed = phase !== "manual";
  const showAutomated = phase === "automating" || phase === "done";

  return (
    <section className="bg-ink-900 py-24 md:py-32">
      <Container className="mx-auto max-w-3xl text-center">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent-300">
          The signature move
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink-50 md:text-4xl">
          Watch a manual process disappear.
        </h2>
        <p className="mt-4 text-base leading-relaxed text-ink-300">
          Same order, same outcome. One version needs a person at every single step.
        </p>

        <div className="mt-12 rounded-lg border border-ink-50/10 bg-ink-800/40 p-8 text-left sm:p-10">
          <div
            className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${
              manualCollapsed ? "grid-rows-[0fr] opacity-0" : "grid-rows-[1fr] opacity-100"
            }`}
          >
            <div className="overflow-hidden">
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.1em] text-ink-500">
                Manual process
              </p>
              <ol>
                {manualSteps.map((step, i) => (
                  <li
                    key={step}
                    className="flex items-center gap-3 border-t border-ink-50/10 py-2.5 first:border-t-0"
                  >
                    <span className="font-mono text-xs text-ink-600">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-mono text-sm text-ink-300">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {showAutomated ? (
            <div className="animate-fade-up">
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.1em] text-accent-400">
                Automated
              </p>
              <ol>
                {automatedSteps.map((step, i) => {
                  const state =
                    i < activeIndex ? "done" : i === activeIndex ? "active" : "waiting";
                  return (
                    <li
                      key={step}
                      className="flex items-center gap-3 border-t border-ink-50/10 py-2.5 first:border-t-0"
                    >
                      <span
                        className={`h-2 w-2 shrink-0 rounded-sm border ${
                          state === "active"
                            ? "animate-node-pulse border-accent-500 bg-accent-500"
                            : state === "done"
                              ? "border-accent-600/60 bg-accent-600/60"
                              : "border-ink-50/25 bg-transparent"
                        }`}
                        aria-hidden
                      />
                      <span
                        className={`font-mono text-sm ${
                          state === "waiting" ? "text-ink-500" : "text-ink-100"
                        }`}
                      >
                        {step}
                      </span>
                    </li>
                  );
                })}
                {phase === "done" ? (
                  <li className="flex items-center gap-3 border-t border-ink-50/10 py-2.5 font-mono text-sm text-accent-400">
                    <span aria-hidden>✓</span> Done
                  </li>
                ) : null}
              </ol>
            </div>
          ) : null}

          <div className="mt-8 border-t border-ink-50/10 pt-6">
            {phase === "manual" ? (
              <button
                type="button"
                onClick={run}
                className="inline-flex items-center gap-2 rounded-md bg-accent-600 px-6 py-3 text-sm font-medium text-ink-50 transition-colors duration-200 hover:bg-accent-700"
              >
                <Play size={14} aria-hidden />
                Automate This
              </button>
            ) : phase === "done" ? (
              <button
                type="button"
                onClick={reset}
                className="inline-flex items-center gap-2 rounded-md border border-ink-50/20 px-6 py-3 text-sm font-medium text-ink-100 transition-colors duration-200 hover:border-ink-50/40"
              >
                <RotateCcw size={14} aria-hidden />
                Run It Again
              </button>
            ) : (
              <button
                type="button"
                disabled
                className="inline-flex items-center gap-2 rounded-md border border-ink-50/10 px-6 py-3 text-sm font-medium text-ink-500"
              >
                Automating…
              </button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
