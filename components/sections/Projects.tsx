import { ComponentType } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/lib/projects";
import {
  TicketOpsPreview,
  BudgetFlowPreview,
  DataExtractionPreview,
  BusinessWorkflowsPreview,
} from "@/components/projects/ProjectPreviews";

const previews: Record<string, ComponentType> = {
  "ticket-operations-automation": TicketOpsPreview,
  budgetflow: BudgetFlowPreview,
  "data-extraction-automation": DataExtractionPreview,
  "business-automation-workflows": BusinessWorkflowsPreview,
};

export function Projects() {
  return (
    <section id="projects" className="bg-ink-900 py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Featured work"
            title="Systems I've actually built"
            description="Not mockups — the same automation and data patterns running in real operations, applied to different problems."
            tone="dark"
          />
        </Reveal>

        <div className="mt-16 flex flex-col">
          {projects.map((project, index) => {
            const reversed = index % 2 === 1;
            const Preview = previews[project.slug];
            return (
              <Reveal
                key={project.slug}
                delay={(index % 2) * 100}
                as="article"
                className="grid grid-cols-1 gap-10 border-t border-ink-50/10 py-14 first:pt-0 md:grid-cols-2 md:gap-16 md:py-20"
              >
                <div className={reversed ? "md:order-2" : ""}>
                  <span className="font-mono text-sm text-accent-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-3 font-mono text-xs uppercase tracking-[0.14em] text-accent-300">
                    {project.category}
                  </p>
                  <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink-50 md:text-4xl">
                    {project.title}
                  </h3>
                  <p className="mt-4 max-w-lg text-base leading-relaxed text-ink-300">
                    {project.summary}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <Tag key={item} tone="dark">
                        {item}
                      </Tag>
                    ))}
                  </div>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="group mt-7 inline-flex items-center gap-2 text-sm font-medium text-ink-50"
                  >
                    View case study
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-150 group-hover:translate-x-1"
                      aria-hidden
                    />
                  </Link>
                </div>

                <Link
                  href={`/projects/${project.slug}`}
                  className={`group block transition-transform duration-300 hover:-translate-y-1 ${
                    reversed ? "md:order-1" : ""
                  }`}
                >
                  {Preview ? <Preview /> : null}
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
