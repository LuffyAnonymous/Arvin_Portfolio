import { Container } from "@/components/ui/Container";
import { Terminal } from "@/components/ui/Terminal";
import { Technologies } from "@/components/sections/Technologies";
import { site } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="bg-white py-24 md:py-32">
      <Container>
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent-600">About</p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink-900 md:text-4xl">
          {site.name}
        </h2>
        <p className="mt-1 text-ink-600">
          {site.role} · {site.location}
        </p>

        <div className="mt-14 grid grid-cols-1 gap-16 md:grid-cols-[1.3fr_1fr]">
          <div>
            <blockquote className="border-l-4 border-accent-500 pl-6">
              <p className="font-display text-2xl font-medium leading-snug tracking-tight text-ink-900 md:text-3xl">
                I don&apos;t start with the technology.
                <br />I start with what a person actually has to do by hand.
              </p>
              <p className="mt-4 font-display text-xl font-medium text-accent-600">
                Then I figure out what can disappear.
              </p>
            </blockquote>

            <div className="mt-10 max-w-xl space-y-5 text-base leading-relaxed text-ink-700">
              <p>
                I work at the intersection of operations and engineering. Before building
                automations full-time, I spent years on the operations side — monitoring
                systems, tracking orders, validating data and dealing directly with the
                repetitive administrative work that comes with running things day to day
                in ticket operations, customer support and financial services accounts.
              </p>
              <p>
                That background is why the first question is never &quot;which tool?&quot;
                — it&apos;s &quot;what does this look like when a person does it by
                hand?&quot; The automation, integration or dashboard comes after, using
                Python, SQL, n8n, and full-stack tools like Next.js and PostgreSQL
                depending on what the job needs.
              </p>
              <p>
                I hold a Bachelor of Science in Computer Science and work independently
                and remotely with minimal supervision.
              </p>
            </div>

            <div className="mt-12">
              <Technologies />
            </div>
          </div>

          <div className="md:sticky md:top-24 md:self-start">
            <Terminal />
          </div>
        </div>
      </Container>
    </section>
  );
}
