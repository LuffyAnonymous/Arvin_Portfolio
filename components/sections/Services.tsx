import {
  Workflow,
  Plug2,
  Network,
  Sparkles,
  BarChart3,
  Layers,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const services = [
  {
    icon: Workflow,
    title: "Business Automation",
    description:
      "Automate repetitive business processes and remove unnecessary manual work.",
  },
  {
    icon: Plug2,
    title: "API Integrations",
    description:
      "Connect different systems so they can exchange information automatically.",
  },
  {
    icon: Network,
    title: "n8n Workflows",
    description:
      "Build reliable workflows connecting APIs, databases, email, Telegram, spreadsheets and other services.",
  },
  {
    icon: Sparkles,
    title: "AI Automation",
    description:
      "Use AI where it actually adds value — classification, extraction, summarisation, decision support and customer workflows.",
  },
  {
    icon: BarChart3,
    title: "Data & Reporting",
    description:
      "Transform raw data into clean reports, dashboards and actionable information.",
  },
  {
    icon: Layers,
    title: "Custom Systems",
    description:
      "Build lightweight internal tools, dashboards and backend systems tailored to a business's workflow.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-ink-50 py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="Where the time is actually going"
          description="Six ways I help businesses spend less time on manual, repetitive work."
        />

        <div className="mt-14 grid grid-cols-1 border-t border-l border-ink-200 md:grid-cols-2">
          {services.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex gap-5 border-r border-b border-ink-200 p-8"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-ink-300 text-accent-600">
                <Icon size={18} strokeWidth={1.75} aria-hidden />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold tracking-tight text-ink-900">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
