import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const reasons = [
  {
    title: "Business-first approach",
    description:
      "I focus on solving the actual workflow problem rather than adding unnecessary technology.",
  },
  {
    title: "Automation + data",
    description: "I can work across automation, APIs, databases and data processing.",
  },
  {
    title: "Works with your existing tools",
    description: "The goal is to connect the systems you already use whenever possible.",
  },
  {
    title: "Built for real workflows",
    description: "The automation should fit how your team actually works.",
  },
  {
    title: "Maintainable",
    description:
      "The goal is a system that remains understandable and useful after deployment.",
  },
];

export function WhyWorkWithMe() {
  return (
    <section className="bg-white py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[minmax(0,1fr)_1.6fr] md:gap-16">
          <SectionHeading
            eyebrow="Why work with me"
            title="What that actually means for you"
            className="md:sticky md:top-24"
          />

          <dl>
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="grid grid-cols-1 gap-2 border-t border-ink-200 py-6 first:border-t-0 first:pt-0 sm:grid-cols-[12rem_1fr] sm:gap-8"
              >
                <dt className="font-display text-lg font-semibold tracking-tight text-ink-900">
                  {reason.title}
                </dt>
                <dd className="text-base leading-relaxed text-ink-600">
                  {reason.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
