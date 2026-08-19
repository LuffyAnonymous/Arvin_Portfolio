import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const reasons = [
  {
    title: "Practical solutions",
    description:
      "I focus on solving real business problems rather than adding unnecessary technology.",
  },
  {
    title: "Built around your workflow",
    description: "I adapt the automation to how your business actually operates.",
  },
  {
    title: "Integration-focused",
    description:
      "I can connect the tools you already use instead of forcing you to replace everything.",
  },
  {
    title: "Data-driven",
    description: "I understand both automation and the data behind the process.",
  },
  {
    title: "Long-term thinking",
    description:
      "The goal isn't just to make something work once. It should be maintainable and scalable.",
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
