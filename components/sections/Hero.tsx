import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { WorkflowStrip } from "@/components/ui/WorkflowStrip";
import { site } from "@/lib/site";
import { projects } from "@/lib/projects";

const heroFlow = [
  { label: "Trigger" },
  { label: "Process" },
  { label: "Database" },
  { label: "Notification" },
  { label: "Report" },
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

      <Container className="relative pt-28 pb-24 md:pt-36 md:pb-32">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:items-center lg:gap-10">
          <div className="lg:col-span-7">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent-300">
              {site.role}
            </p>

            <h1 className="mt-6 max-w-2xl font-display text-4xl font-semibold leading-[1.05] tracking-tighter text-ink-50 md:text-6xl">
              Automate the work your team shouldn&apos;t have to do.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-300">
              {site.heroSupport}
            </p>

            <div className="mt-6 flex items-center gap-2.5 text-sm text-ink-400">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inset-0 animate-node-pulse rounded-full bg-accent-500" />
                <span className="relative h-2 w-2 rounded-full bg-accent-400" />
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
          </div>

          <div className="lg:col-span-5">
            <div className="relative">
              <div className="accent-glow rounded-lg border border-accent-500/25 bg-ink-800/60 p-8">
                <p className="mb-8 font-mono text-xs uppercase tracking-[0.14em] text-ink-500">
                  What automation looks like
                </p>
                <WorkflowStrip
                  steps={heroFlow}
                  tone="dark"
                  activeIndex={1}
                  orientation="vertical"
                />
              </div>

              <div className="relative z-10 -mt-8 ml-8 w-fit rounded-lg border border-ink-50/10 bg-ink-900 px-6 py-5 sm:-mt-10 sm:ml-10">
                <p className="font-display text-4xl font-semibold tracking-tight text-ink-50">
                  {projects.length}
                </p>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.14em] text-ink-400">
                  Case studies shipped
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
