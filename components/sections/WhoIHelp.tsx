import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const audiences = [
  {
    title: "Small businesses",
    description: "Fewer people wearing more hats, and less time to spend on repetition.",
  },
  {
    title: "Operations teams",
    description: "Order tracking, status checks and reporting that happen every single day.",
  },
  {
    title: "E-commerce businesses",
    description: "Orders, inventory and customer messages moving across several platforms.",
  },
  {
    title: "Ticketing & event businesses",
    description: "High order volume with tight timing around monitoring and notifications.",
  },
  {
    title: "Service businesses",
    description: "Bookings, client records and admin work that follow the same pattern weekly.",
  },
  {
    title: "Data-heavy teams",
    description: "Information scattered across spreadsheets, tools and inboxes.",
  },
];

export function WhoIHelp() {
  return (
    <section id="who-i-help" className="bg-ink-50 py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Who this is for"
          title="Built for businesses that have outgrown manual processes."
          description="Not a client list — this is the kind of business where this work tends to pay off fastest."
        />

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((audience) => (
            <div key={audience.title} className="border-l-2 border-accent-500 pl-5">
              <h3 className="font-display text-base font-semibold tracking-tight text-ink-900">
                {audience.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-600">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
