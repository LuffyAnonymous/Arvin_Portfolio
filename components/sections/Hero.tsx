import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { WorkflowStrip } from "@/components/ui/WorkflowStrip";
import { site } from "@/lib/site";

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
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent-300">
          {site.role} — {site.location}
        </p>

        <h1 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-tighter text-ink-50 md:text-6xl">
          Turn repetitive work into automated workflows.
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-300">
          I help businesses automate manual processes, connect their tools, and turn
          messy data into useful systems.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button href="#contact" variant="primary">
            Let&apos;s Work Together
          </Button>
          <Button href="#projects" variant="ghost">
            View My Work
          </Button>
        </div>

        <div className="mt-24 border-t border-ink-50/10 pt-10 md:mt-28">
          <p className="mb-8 font-mono text-xs uppercase tracking-[0.14em] text-ink-500">
            What automation looks like
          </p>
          <WorkflowStrip steps={heroFlow} tone="dark" activeIndex={1} />
        </div>
      </Container>
    </section>
  );
}
