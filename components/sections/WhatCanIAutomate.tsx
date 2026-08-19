import {
  PackageCheck,
  Mail,
  ArrowLeftRight,
  FileBarChart2,
  BellRing,
  Radar,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const examples = [
  {
    icon: PackageCheck,
    title: "Orders & Operations",
    description:
      "Automatically process incoming orders, update systems and notify your team.",
  },
  {
    icon: Mail,
    title: "Email",
    description: "Extract information from incoming emails and route it automatically.",
  },
  {
    icon: ArrowLeftRight,
    title: "Data Entry",
    description:
      "Move information between spreadsheets, databases and business systems without manual copying.",
  },
  {
    icon: FileBarChart2,
    title: "Reporting",
    description: "Automatically collect data and generate recurring reports.",
  },
  {
    icon: BellRing,
    title: "Notifications",
    description:
      "Send the right information to Telegram, email or other systems automatically.",
  },
  {
    icon: Radar,
    title: "Website Monitoring",
    description:
      "Monitor websites or external systems and notify your team when something changes.",
  },
];

export function WhatCanIAutomate() {
  return (
    <section id="what-can-i-automate" className="bg-white py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="In practice"
          title="What can I automate for you?"
          description="A few concrete examples of the kind of work that usually turns out to be automatable."
        />

        <div className="mt-14 grid grid-cols-1 border-t border-l border-ink-200 sm:grid-cols-2 lg:grid-cols-3">
          {examples.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex gap-4 border-r border-b border-ink-200 p-7">
              <Icon size={18} strokeWidth={1.75} className="mt-0.5 shrink-0 text-accent-600" aria-hidden />
              <div>
                <h3 className="font-display text-base font-semibold tracking-tight text-ink-900">
                  {title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
