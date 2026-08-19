import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WorkflowStrip } from "@/components/ui/WorkflowStrip";

const before = [
  { label: "Employee receives email" },
  { label: "Copies information" },
  { label: "Opens Excel" },
  { label: "Updates spreadsheet" },
  { label: "Sends Telegram message" },
  { label: "Creates report manually" },
];

const after = [
  { label: "Email received" },
  { label: "Automation extracts information" },
  { label: "Database updated" },
  { label: "Team notified automatically" },
  { label: "Report generated automatically" },
];

export function BeforeAfter() {
  return (
    <section className="bg-ink-900 py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="The difference"
          title="Same outcome, far less handling"
          tone="dark"
          description="One order, handled two ways. The steps don't disappear — they just stop needing a person."
        />

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <p className="mb-8 font-mono text-xs uppercase tracking-[0.14em] text-ink-500">
              Before
            </p>
            <WorkflowStrip steps={before} tone="dark" orientation="vertical" animated={false} />
          </div>

          <div>
            <p className="mb-8 font-mono text-xs uppercase tracking-[0.14em] text-accent-300">
              After
            </p>
            <WorkflowStrip
              steps={after}
              tone="dark"
              orientation="vertical"
              activeIndex={2}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
