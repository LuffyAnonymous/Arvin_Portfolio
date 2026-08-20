"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/lib/useReducedMotion";

const SEQUENCE = [-1, 0, 0, 1, 1, 2, 2, 3, 3, 3, 3, -1, -1] as const;
const TICK_MS = 650;

type NodeStatus = "waiting" | "processing" | "done";

function statusFor(step: number, active: number): NodeStatus {
  if (active < 0) return "waiting";
  if (step < active) return "done";
  if (step === active) return "processing";
  return "waiting";
}

function Node({ label, status }: { label: string; status: NodeStatus }) {
  return (
    <div
      className={`rounded-md border px-4 py-3 text-center transition-colors duration-300 ${
        status === "processing"
          ? "border-accent-500 bg-accent-500/10 animate-node-pulse"
          : status === "done"
            ? "border-accent-600/40 bg-ink-800"
            : "border-ink-50/15 bg-ink-900"
      }`}
    >
      <p className="font-mono text-xs uppercase tracking-[0.1em] text-ink-100">{label}</p>
      <p
        className={`mt-1 font-mono text-[0.65rem] uppercase tracking-[0.1em] ${
          status === "processing"
            ? "text-accent-400"
            : status === "done"
              ? "text-accent-600"
              : "text-ink-500"
        }`}
      >
        {status === "processing" ? "Processing" : status === "done" ? "Completed" : "Waiting"}
      </p>
    </div>
  );
}

function VLine({ active }: { active: boolean }) {
  return (
    <div className="mx-auto h-6 w-px bg-ink-50/15">
      <div
        className={`h-full w-full origin-top bg-accent-500 transition-transform duration-500 ${
          active ? "scale-y-100" : "scale-y-0"
        }`}
      />
    </div>
  );
}

export function LiveWorkflowPanel() {
  const reducedMotion = useReducedMotion();
  const [tickActive, setTickActive] = useState(-1);
  const stepRef = useRef(0);

  useEffect(() => {
    if (reducedMotion) return;

    const id = setInterval(() => {
      stepRef.current = (stepRef.current + 1) % SEQUENCE.length;
      setTickActive(SEQUENCE[stepRef.current]);
    }, TICK_MS);

    return () => clearInterval(id);
  }, [reducedMotion]);

  const active = reducedMotion ? 3 : tickActive;

  return (
    <div className="accent-glow rounded-lg border border-accent-500/25 bg-ink-800/60 p-6 sm:p-8">
      <p className="mb-6 font-mono text-xs uppercase tracking-[0.14em] text-ink-500">
        Live pipeline
      </p>

      <Node label="New Order" status={statusFor(0, active)} />
      <VLine active={active >= 1} />
      <Node label="Processing" status={statusFor(1, active)} />
      <VLine active={active >= 2} />
      <Node label="Database" status={statusFor(2, active)} />

      <div className="relative h-8">
        <div
          className={`absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-accent-500 transition-opacity duration-500 ${
            active >= 2 ? "opacity-100" : "opacity-20"
          }`}
        />
        <div
          className={`absolute left-1/4 right-1/4 top-3 h-px bg-accent-500 transition-opacity duration-500 ${
            active >= 2 ? "opacity-100" : "opacity-20"
          }`}
        />
        <div
          className={`absolute left-1/4 top-3 h-5 w-px bg-accent-500 transition-opacity duration-500 ${
            active >= 3 ? "opacity-100" : "opacity-20"
          }`}
        />
        <div
          className={`absolute right-1/4 top-3 h-5 w-px bg-accent-500 transition-opacity duration-500 ${
            active >= 3 ? "opacity-100" : "opacity-20"
          }`}
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Node label="Telegram" status={statusFor(3, active)} />
        <Node label="Report" status={statusFor(3, active)} />
      </div>
    </div>
  );
}
