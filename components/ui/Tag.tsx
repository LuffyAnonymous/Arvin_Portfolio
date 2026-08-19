export function Tag({
  children,
  tone = "light",
}: {
  children: string;
  tone?: "light" | "dark";
}) {
  return (
    <span
      className={`inline-flex items-center rounded-sm border px-2.5 py-1 font-mono text-xs ${
        tone === "dark"
          ? "border-ink-50/20 text-ink-200"
          : "border-ink-300 text-ink-700"
      }`}
    >
      {children}
    </span>
  );
}
