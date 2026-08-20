import type { Metadata } from "next";
import type { ComponentType } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Tag } from "@/components/ui/Tag";
import { WorkflowStrip } from "@/components/ui/WorkflowStrip";
import { Button } from "@/components/ui/Button";
import { getProjectBySlug, projects } from "@/lib/projects";
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

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      type: "article",
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const Preview = previews[project.slug];

  return (
    <article>
      <header className="bg-ink-900 pt-28 pb-16 md:pt-36">
        <Container>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-ink-400 hover:text-ink-100"
          >
            <ArrowLeft size={16} aria-hidden />
            All projects
          </Link>

          <p className="mt-8 font-mono text-xs uppercase tracking-[0.14em] text-accent-300">
            {project.category}
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-3xl font-semibold tracking-tighter text-ink-50 md:text-5xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-300">
            {project.summary}
          </p>
        </Container>
      </header>

      {Preview ? (
        <section className="bg-ink-900 pb-20 md:pb-28">
          <Container>
            <div className="mx-auto max-w-xl">
              <Preview />
            </div>
          </Container>
        </section>
      ) : null}

      <section className="bg-white py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-16 md:grid-cols-[1.4fr_1fr]">
            <div className="max-w-2xl space-y-12">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent-600">
                  The problem
                </p>
                <p className="mt-4 text-base leading-relaxed text-ink-700">
                  {project.problem}
                </p>
              </div>

              <div>
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent-600">
                  The approach
                </p>
                <p className="mt-4 text-base leading-relaxed text-ink-700">
                  {project.solution}
                </p>

                {project.solutionHighlights ? (
                  <ul className="mt-6 grid grid-cols-1 gap-3 border-t border-ink-200 pt-6 sm:grid-cols-2">
                    {project.solutionHighlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2 text-sm text-ink-700">
                        <Check size={16} className="mt-0.5 shrink-0 text-accent-600" aria-hidden />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>

            <div className="rounded-lg border border-ink-200 bg-ink-50 p-8 md:sticky md:top-24">
              <p className="mb-8 font-mono text-xs uppercase tracking-[0.14em] text-ink-500">
                The workflow
              </p>
              <WorkflowStrip steps={project.workflow} orientation="vertical" activeIndex={1} />
            </div>
          </div>

          <div className="mt-16 max-w-2xl border-t border-ink-200 pt-12">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent-600">
              The result
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-700">{project.result}</p>
          </div>

          <div className="mt-12 max-w-2xl border-t border-ink-200 pt-8">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-ink-500">Stack</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-ink-200 bg-ink-50 py-16">
        <Container className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-ink-500">
              Next project
            </p>
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group mt-2 inline-flex items-center gap-2 font-display text-xl font-semibold tracking-tight text-ink-900"
            >
              {nextProject.title}
              <ArrowRight
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden
              />
            </Link>
          </div>
          <Button href="/#contact" variant="secondary">
            Discuss a similar project
          </Button>
        </Container>
      </section>
    </article>
  );
}
