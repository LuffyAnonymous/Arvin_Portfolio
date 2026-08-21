"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    number: "01",
    title: "Understand",
    description: "I learn how your current process works and identify repetitive tasks.",
    detail: "A screen share, a doc, or a two-line message — whatever shows me the process as it runs today.",
  },
  {
    number: "02",
    title: "Map",
    description: "I map the workflow and identify what can be automated.",
    detail: "What triggers what, what's already structured, and what's still living in someone's head.",
  },
  {
    number: "03",
    title: "Build",
    description: "I connect the required tools, APIs, databases and automation workflows.",
    detail: "n8n workflows, Python scripts, direct API calls, a database — whichever combination the job needs.",
  },
  {
    number: "04",
    title: "Improve",
    description: "I monitor the workflow and refine it as your business grows.",
    detail: "Once it's running, I watch for edge cases and adjust as volume or requirements change.",
  },
];

export function Process() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const manualRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (manualRef.current) return;
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

    function onScroll() {
      manualRef.current = false;
    }
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  function selectStep(index: number) {
    manualRef.current = true;
    setActive(index);
  }

  return (
    <section id="process" className="bg-ink-50 py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="The operating loop"
            title="Every project runs through the same loop."
            description="No lengthy discovery decks — just a clear path from a manual process to a working automation. Click a stage to see what happens there."
          />
        </Reveal>

        <Reveal delay={100} className="relative mt-16 max-w-2xl">
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

          {steps.map((step, index) => {
            const isActive = index <= active;
            const isSelected = index === active;
            return (
              <div
                key={step.number}
                ref={(el) => {
                  refs.current[index] = el;
                }}
                className="relative pb-12 last:pb-0"
              >
                <button
                  type="button"
                  onClick={() => selectStep(index)}
                  aria-pressed={isSelected}
                  className="group flex w-full gap-6 rounded-sm text-left outline-none focus-visible:ring-2 focus-visible:ring-accent-500/50"
                >
                  <span
                    className={`relative z-10 mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 transition-colors duration-300 ${
                      isActive ? "border-accent-500 bg-accent-500" : "border-ink-300 bg-ink-50"
                    }`}
                    aria-hidden
                  />
                  <div>
                    <span
                      className={`font-mono text-sm transition-colors duration-300 ${
                        isActive ? "text-accent-600" : "text-ink-400"
                      }`}
                    >
                      {step.number}
                    </span>
                    <h3
                      className={`mt-1 font-display text-xl font-semibold tracking-tight transition-colors duration-300 ${
                        isActive ? "text-ink-900" : "text-ink-400"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-600">
                      {step.description}
                    </p>
                  </div>
                </button>

                {isSelected ? (
                  <p className="animate-fade-up mt-3 max-w-md pl-10 font-mono text-xs leading-relaxed text-ink-500">
                    {step.detail}
                  </p>
                ) : null}
              </div>
            );
          })}
        </Reveal>
      </Container>
    </section>
  );
}
