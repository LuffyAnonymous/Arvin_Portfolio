type TerminalLine =
  | { type: "command"; text: string }
  | { type: "output"; text: string }
  | { type: "blank" };

const lines: TerminalLine[] = [
  { type: "command", text: "arvin --focus" },
  { type: "output", text: "automation" },
  { type: "output", text: "api-integrations" },
  { type: "output", text: "data-workflows" },
  { type: "output", text: "internal-tools" },
  { type: "output", text: "dashboards" },
  { type: "blank" },
  { type: "command", text: "status" },
  { type: "output", text: "available_for_projects: true" },
  { type: "output", text: "location: dubai" },
  { type: "output", text: "timezone: utc+4" },
];

export function Terminal() {
  return (
    <div className="rounded-md border border-ink-50/10 bg-ink-900 font-mono text-sm">
      <div className="flex items-center gap-1.5 border-b border-ink-50/10 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-ink-50/15" aria-hidden />
        <span className="h-2.5 w-2.5 rounded-full bg-ink-50/15" aria-hidden />
        <span className="h-2.5 w-2.5 rounded-full bg-ink-50/15" aria-hidden />
      </div>
      <div className="space-y-1.5 px-5 py-5">
        {lines.map((line, i) => {
          if (line.type === "blank") return <div key={i} className="h-2" aria-hidden />;
          if (line.type === "command") {
            return (
              <p key={i} className="text-ink-100">
                <span className="text-accent-400">$</span> {line.text}
              </p>
            );
          }
          return (
            <p key={i} className="text-ink-400">
              {line.text}
            </p>
          );
        })}
        <span className="cursor-blink inline-block h-3.5 w-2 bg-accent-500/70" aria-hidden />
      </div>
    </div>
  );
}
