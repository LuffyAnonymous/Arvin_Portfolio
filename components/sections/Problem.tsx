import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const problems = [
  "Copying orders between systems",
  "Updating Excel spreadsheets manually",
  "Checking emails for important information",
  "Sending repetitive notifications",
  "Creating weekly reports",
  "Moving data between platforms",
  "Monitoring websites manually",
  "Extracting information from websites",
  "Repeating the same administrative process every day",
];

export function Problem() {
  return (
    <section className="bg-ink-50 py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="The pattern"
          title="Still doing this manually?"
        />

        <ul className="mt-12 grid gap-x-12 border-t border-ink-200 md:grid-cols-2">
          {problems.map((problem) => (
            <li
              key={problem}
              className="flex items-center gap-4 border-b border-ink-200 py-5"
            >
              <span className="h-2 w-2 shrink-0 rounded-sm bg-accent-500" aria-hidden />
              <span className="text-base text-ink-700">{problem}</span>
            </li>
          ))}
        </ul>

        <div className="mt-12 max-w-2xl border-l-4 border-accent-500 pl-6">
          <p className="text-xl font-medium leading-relaxed text-ink-900">
            If a process is repetitive, rule-based, and happens regularly, there&apos;s a
            good chance it can be automated.
          </p>
        </div>
      </Container>
    </section>
  );
}
