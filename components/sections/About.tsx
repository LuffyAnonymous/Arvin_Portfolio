import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="bg-white py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[minmax(0,1fr)_1.6fr] md:gap-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent-600">
              About
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink-900">
              {site.name}
            </h2>
            <p className="mt-1 text-ink-600">{site.role}</p>
            <p className="text-ink-500">{site.location}</p>

            <dl className="mt-8 space-y-3 border-t border-ink-200 pt-6 font-mono text-xs text-ink-500">
              <div className="flex justify-between gap-4">
                <dt>Education</dt>
                <dd className="text-right text-ink-700">BS, Computer Science</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt>Focus</dt>
                <dd className="text-right text-ink-700">Automation · Data · Dev</dd>
              </div>
            </dl>
          </div>

          <div className="max-w-2xl space-y-6 text-base leading-relaxed text-ink-700">
            <p>
              I work at the intersection of operations and engineering. Before building
              automations full-time, I spent years on the operations side — monitoring
              systems, tracking orders, validating data and dealing directly with the
              repetitive administrative work that comes with running things day to day
              in ticket operations, customer support and financial services accounts.
            </p>
            <p>
              That background is why I don&apos;t start with the technology. I start with
              what a task actually looks like when a person does it by hand, then build
              the automation, integration or dashboard that removes it — using Python,
              SQL, n8n, and full-stack tools like Next.js and PostgreSQL depending on
              what the job needs.
            </p>
            <p>
              I hold a Bachelor of Science in Computer Science and work independently
              and remotely with minimal supervision. If you&apos;re not sure whether
              something can be automated, that&apos;s a reasonable starting point for a
              conversation.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
