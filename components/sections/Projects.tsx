import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { WorkflowStrip } from "@/components/ui/WorkflowStrip";
import { projects } from "@/lib/projects";

export function Projects() {
  return (
    <section id="projects" className="bg-white py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Featured projects"
          title="What I've actually built"
          description="A mix of client operations tooling and independent projects — the same automation and data patterns applied to different problems."
        />

        <div className="mt-16 flex flex-col">
          {projects.map((project, index) => {
            const reversed = index % 2 === 1;
            return (
              <article
                key={project.slug}
                className="grid grid-cols-1 gap-10 border-t border-ink-200 py-12 first:pt-0 md:grid-cols-2 md:gap-16 md:py-16"
              >
                <div className={reversed ? "md:order-2" : ""}>
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent-600">
                    {project.category}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink-900 md:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-4 max-w-lg text-base leading-relaxed text-ink-600">
                    {project.summary}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <Tag key={item}>{item}</Tag>
                    ))}
                  </div>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="group mt-7 inline-flex items-center gap-2 text-sm font-medium text-ink-900"
                  >
                    View case study
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden
                    />
                  </Link>
                </div>

                <div className={`flex items-center ${reversed ? "md:order-1" : ""}`}>
                  <div className="w-full rounded-lg border border-ink-200 bg-ink-50 p-8">
                    <WorkflowStrip
                      steps={project.workflow.map((s) => ({ label: s.label }))}
                      animated={false}
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
