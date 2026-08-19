import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";

const groups = [
  { category: "Automation", items: ["n8n", "Webhooks", "APIs", "Cron Jobs"] },
  { category: "Development", items: ["Python", "TypeScript", "JavaScript", "Next.js"] },
  { category: "Data", items: ["PostgreSQL", "SQL", "Prisma", "Pandas"] },
  { category: "Integrations", items: ["Telegram", "Google Sheets", "Email", "REST APIs"] },
];

export function Technologies() {
  return (
    <section className="bg-ink-50 py-24 md:py-32">
      <Container>
        <SectionHeading eyebrow="Technologies" title="The toolkit behind the work" />

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((group) => (
            <div key={group.category}>
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-ink-500">
                {group.category}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
