"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Understand",
    description: "I learn how your current process works and identify repetitive tasks.",
  },
  {
    number: "02",
    title: "Map",
    description: "I map the workflow and identify what can be automated.",
  },
  {
    number: "03",
    title: "Build",
    description: "I connect the required tools, APIs, databases and automation workflows.",
  },
  {
    number: "04",
    title: "Improve",
    description: "I monitor the workflow and refine it as your business grows.",
  },
];

export function Process() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = refs.current.findIndex((el) => el === entry.target);
            if (index !== -1) setActive(index);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 },
    );

    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" className="bg-ink-50 py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="How I work"
          title="A straightforward process"
          description="No lengthy discovery decks — just a clear path from a manual process to a working automation."
        />

        <div className="relative mt-16 max-w-2xl">
          <div className="absolute top-2 bottom-2 left-[7px] w-px bg-ink-200" aria-hidden />
          <div
            className="absolute top-2 left-[7px] w-px bg-accent-500 transition-[height] duration-500 ease-out"
            style={{
              height: `calc(${(active / (steps.length - 1)) * 100}% - ${
                active === steps.length - 1 ? "16px" : "0px"
              })`,
            }}
            aria-hidden
          />

          {steps.map((step, index) => (
            <div
              key={step.number}
              ref={(el) => {
                refs.current[index] = el;
              }}
              className="relative flex gap-6 pb-12 pl-0 last:pb-0"
            >
              <span
                className={`relative z-10 mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 transition-colors duration-300 ${
                  index <= active
                    ? "border-accent-500 bg-accent-500"
                    : "border-ink-300 bg-ink-50"
                }`}
                aria-hidden
              />
              <div>
                <span
                  className={`font-mono text-sm transition-colors duration-300 ${
                    index <= active ? "text-accent-600" : "text-ink-400"
                  }`}
                >
                  {step.number}
                </span>
                <h3
                  className={`mt-1 font-display text-xl font-semibold tracking-tight transition-colors duration-300 ${
                    index <= active ? "text-ink-900" : "text-ink-400"
                  }`}
                >
                  {step.title}
                </h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
