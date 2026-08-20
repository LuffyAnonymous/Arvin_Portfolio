export type StatusItem = {
  label: string;
  value: string;
  tone?: "active" | "idle";
};

/**
 * A small "system status" readout — a mono label/value row with a live-looking
 * dot. Used for the hero status strip and project/contact status panels.
 */
export function StatusRow({ item }: { item: StatusItem }) {
  const isActive = item.tone !== "idle";
  return (
    <div className="flex items-center justify-between gap-4 border-t border-ink-50/10 py-2.5 first:border-t-0">
      <span className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.1em] text-ink-400">
        <span className="relative flex h-1.5 w-1.5 shrink-0">
          {isActive ? (
            <span className="absolute inset-0 animate-node-pulse rounded-full bg-accent-500" />
          ) : null}
          <span
            className={`relative h-1.5 w-1.5 rounded-full ${
              isActive ? "bg-accent-400" : "bg-ink-500"
            }`}
          />
        </span>
        {item.label}
      </span>
      <span
        className={`font-mono text-xs uppercase tracking-[0.1em] ${
          isActive ? "text-accent-400" : "text-ink-500"
        }`}
      >
        {item.value}
      </span>
    </div>
  );
}
