import { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  tone?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
}) {
  const isDark = tone === "dark";
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""} ${className}`}
    >
      {eyebrow ? (
        <p
          className={`font-mono text-xs uppercase tracking-[0.14em] ${
            isDark ? "text-accent-300" : "text-accent-600"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`mt-3 text-balance font-display text-3xl font-semibold tracking-tight md:text-4xl ${
          isDark ? "text-ink-50" : "text-ink-900"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-base leading-relaxed ${isDark ? "text-ink-300" : "text-ink-600"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
