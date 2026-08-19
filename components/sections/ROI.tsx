import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const terms = [
  { value: "30", unit: "min / day", op: "×" },
  { value: "22", unit: "working days", op: "=" },
  { value: "11", unit: "hours / month", op: "=" },
  { value: "132", unit: "hours / year", op: null },
];

export function ROI() {
  return (
    <section id="roi" className="bg-ink-50 py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Worth doing the math"
          title="How much time is a repetitive task costing you?"
        />

        <div className="mt-12 rounded-lg border border-ink-200 bg-white p-8 md:p-12">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-ink-500">
            Illustrative example
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-6 md:gap-x-8">
            {terms.map((term) => (
              <div key={term.unit} className="flex items-center gap-x-6 md:gap-x-8">
                <div>
                  <span className="font-display text-4xl font-semibold tracking-tight text-ink-900 md:text-5xl">
                    {term.value}
                  </span>
                  <span className="ml-2 font-mono text-sm text-ink-500">{term.unit}</span>
                </div>
                {term.op ? (
                  <span className="font-mono text-2xl text-accent-500" aria-hidden>
                    {term.op}
                  </span>
                ) : null}
              </div>
            ))}
          </div>

          <p className="mt-10 max-w-2xl border-t border-ink-200 pt-8 text-base leading-relaxed text-ink-700">
            That&apos;s one task, taken from one person. Most businesses have more than
            one. The goal of automation isn&apos;t to add more technology — it&apos;s to
            give your team time back.
          </p>

          <div className="mt-8">
            <Button href="#contact" variant="secondary">
              Find a Process to Automate
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
