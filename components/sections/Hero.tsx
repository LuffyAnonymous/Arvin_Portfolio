import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { LiveWorkflowPanel } from "@/components/ui/LiveWorkflowPanel";
import { TypewriterCycle } from "@/components/ui/TypewriterCycle";
import { site } from "@/lib/site";
import { projects } from "@/lib/projects";

const focusAreas = ["automation workflows", "api integrations", "data pipelines", "internal tools"];

const statusItems = [
  { label: "Automation engine", value: "Online" },
  { label: "API integrations", value: "Ready" },
  { label: "Data pipelines", value: "Active" },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-ink-900">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #f7f8f6 1px, transparent 1px), linear-gradient(to bottom, #f7f8f6 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-hidden
      />

      <div
        className="pointer-events-none absolute -top-1/4 right-0 h-[900px] w-[900px] rounded-full opacity-70 motion-safe:animate-glow-drift"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--color-accent-500) 28%, transparent) 0%, transparent 65%)",
        }}
        aria-hidden
      />

      <Container className="relative pt-28 pb-16 md:pt-36">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:items-center lg:gap-10">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center rounded-full border border-accent-500/40 bg-accent-500/10 px-3 py-1 font-mono text-xs uppercase tracking-[0.14em] text-accent-300">
              {site.role}
            </span>

            <h1 className="mt-6 max-w-2xl text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tighter text-ink-50 md:text-6xl">
              Automate the work your team shouldn’t have to do.
            </h1>

            <p className="mt-5 flex items-center gap-2 font-mono text-sm text-accent-300">
              <span className="text-ink-600">$</span>
              <TypewriterCycle words={focusAreas} />
            </p>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-200">
              {site.heroSupport}
            </p>

            <div className="mt-6 flex items-center gap-2.5 text-sm text-ink-300">
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="absolute inset-0 animate-node-pulse rounded-full bg-accent-500" />
                <span className="relative h-2.5 w-2.5 rounded-full bg-accent-400" />
              </span>
              {site.location.replace(", United Arab Emirates", ", UAE")} · {site.availability}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href="#contact" variant="primary">
                Tell Me What You Want to Automate
              </Button>
              <Button href="#projects" variant="ghost">
                View My Work
              </Button>
            </div>

            <Link
              href="#problem"
              className="group mt-14 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.1em] text-ink-500 transition-colors duration-150 hover:text-accent-300"
            >
              Scroll to explore
              <ChevronDown size={14} className="motion-safe:animate-bounce" aria-hidden />
            </Link>
          </div>

          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div className="accent-glow relative aspect-[4/5] overflow-hidden rounded-lg border-2 border-accent-500/50">
                <Image
                  src="/arvin-photo.jpg"
                  alt={site.name}
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, (min-width: 640px) 60vw, 90vw"
                  className="object-cover"
                />
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 55%, color-mix(in srgb, var(--color-accent-900) 55%, transparent) 100%)",
                  }}
                  aria-hidden
                />
              </div>

              <div className="accent-glow relative z-10 -mt-8 ml-8 w-fit rounded-lg border border-accent-500/40 bg-ink-900 px-6 py-5 sm:-mt-10 sm:ml-10">
                <p className="font-display text-4xl font-semibold tracking-tight text-accent-400">
                  {projects.length}
                </p>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.14em] text-ink-300">
                  Case studies shipped
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-ink-50/10 pt-10 md:mt-20">
          <p className="mb-8 font-mono text-xs uppercase tracking-[0.14em] text-ink-500">
            What automation looks like
          </p>
          <div className="max-w-sm">
            <LiveWorkflowPanel />
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-x-10 gap-y-3 border-t border-ink-50/10 pt-6 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {statusItems.map((item) => (
              <span
                key={item.label}
                className="inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.1em] text-ink-400"
              >
                <span className="relative flex h-1.5 w-1.5 shrink-0">
                  <span className="absolute inset-0 animate-node-pulse rounded-full bg-accent-500" />
                  <span className="relative h-1.5 w-1.5 rounded-full bg-accent-400" />
                </span>
                {item.label}
                <span className="text-accent-400">{item.value}</span>
              </span>
            ))}
          </div>
          <span className="font-mono text-xs uppercase tracking-[0.1em] text-ink-600">
            Dubai / UTC+4
          </span>
        </div>
      </Container>
    </section>
  );
}
