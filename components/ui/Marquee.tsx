const DEFAULT_ITEMS = [
  "AUTOMATE",
  "CONNECT",
  "EXTRACT",
  "TRANSFORM",
  "NOTIFY",
  "REPORT",
];

/**
 * A slow, subtle horizontal strip used sparingly between major sections.
 * Duplicated content + a translateX(-50%) loop keeps the scroll seamless.
 */
export function Marquee({
  items = DEFAULT_ITEMS,
  tone = "light",
}: {
  items?: string[];
  tone?: "light" | "dark";
}) {
  const track = [...items, ...items];
  return (
    <div
      className={`overflow-hidden border-y py-4 ${
        tone === "dark" ? "border-ink-50/10 bg-ink-900" : "border-ink-200 bg-ink-50"
      }`}
      aria-hidden
    >
      <div className="marquee-track flex w-max shrink-0 gap-4">
        {track.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className={`flex items-center gap-4 font-mono text-sm tracking-[0.14em] ${
              tone === "dark" ? "text-ink-500" : "text-ink-400"
            }`}
          >
            {item}
            <span className="text-accent-600" aria-hidden>
              ·
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
