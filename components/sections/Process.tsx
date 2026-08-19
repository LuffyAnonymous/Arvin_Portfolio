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
    title: "Design",
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
  return (
    <section id="process" className="bg-ink-50 py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="How I work"
          title="A straightforward process"
          description="No lengthy discovery decks — just a clear path from a manual process to a working automation."
        />

        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-0">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`pt-6 md:px-8 md:pt-0 ${
                index > 0 ? "border-t border-ink-200 md:border-t-0 md:border-l" : ""
              }`}
            >
              <span className="font-mono text-sm text-accent-600">{step.number}</span>
              <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-ink-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
