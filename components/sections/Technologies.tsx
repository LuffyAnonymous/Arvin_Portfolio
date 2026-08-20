const groups = [
  { category: "Automation", items: ["n8n", "APIs", "Webhooks"] },
  { category: "Data", items: ["Python", "SQL", "PostgreSQL", "Pandas"] },
  { category: "Development", items: ["TypeScript", "Next.js"] },
  { category: "Integrations", items: ["Telegram", "Google Sheets", "REST APIs"] },
];

/**
 * A de-emphasised tools list, meant to sit inside the About section rather
 * than stand on its own — the technologies support the story, not lead it.
 */
export function Technologies() {
  return (
    <div className="border-t border-ink-200 pt-10">
      <p className="font-display text-lg font-semibold tracking-tight text-ink-900">
        The tools change. The problem doesn&apos;t.
      </p>
      <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
        {groups.map((group) => (
          <p key={group.category} className="font-mono text-xs text-ink-500">
            <span className="uppercase tracking-[0.1em] text-ink-400">{group.category}</span>
            <span className="mx-2 text-ink-300">·</span>
            {group.items.join(" · ")}
          </p>
        ))}
      </div>
    </div>
  );
}
