export type WorkflowStripStep = {
  label: string;
  detail?: string;
};

/**
 * The recurring "pipeline" motif used across the hero, project workflows and
 * the before/after comparison — a row of connected nodes with a small dot
 * animating along the line to suggest data moving through the system.
 */
export function WorkflowStrip({
  steps,
  tone = "light",
  activeIndex,
  animated = true,
  orientation = "auto",
}: {
  steps: WorkflowStripStep[];
  tone?: "light" | "dark";
  activeIndex?: number;
  animated?: boolean;
  /** "auto" switches to a horizontal layout at the md breakpoint; "vertical" stays a stacked timeline at every width. */
  orientation?: "auto" | "vertical";
}) {
  const isDark = tone === "dark";
  const isAuto = orientation === "auto";
  const lineColor = isDark ? "bg-ink-50/20" : "bg-ink-300";
  const nodeIdle = isDark ? "border-ink-50/40 bg-ink-900" : "border-ink-400 bg-ink-50";

  return (
    <ol
      className={`flex flex-col ${isAuto ? "md:flex-row md:gap-x-3" : ""}`}
      aria-label="Automation workflow"
    >
      {steps.map((step, i) => {
        const isLast = i === steps.length - 1;
        const isActive = i === activeIndex;
        return (
          <li
            key={step.label}
            className={`flex items-stretch ${isAuto ? "md:min-w-0 md:flex-1 md:flex-col" : ""}`}
          >
            <div
              className={`flex flex-col items-center pr-4 ${
                isAuto ? "md:w-full md:flex-row md:pr-0 md:pb-4" : ""
              }`}
            >
              <span
                className={`z-10 h-3 w-3 shrink-0 rounded-sm border-2 ${
                  isActive
                    ? `border-accent-500 bg-accent-500 ${animated ? "animate-node-pulse" : ""}`
                    : nodeIdle
                }`}
                aria-hidden
              />
              {!isLast ? (
                <span
                  className={`relative mt-1 w-px flex-1 ${lineColor} ${
                    isAuto ? "md:mt-0 md:ml-1 md:h-px md:w-auto md:flex-1" : ""
                  }`}
                >
                  {animated ? (
                    <span
                      className={`flow-dot absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-400 ${
                        isAuto ? "md:top-1/2" : ""
                      }`}
                      style={{ animationDelay: `${i * 0.45}s` }}
                      aria-hidden
                    />
                  ) : null}
                </span>
              ) : null}
            </div>
            <div className={`pb-6 ${isAuto ? "md:pb-0" : ""}`}>
              <p
                className={`break-words font-mono text-sm ${
                  isActive ? "text-accent-500" : isDark ? "text-ink-100" : "text-ink-800"
                }`}
              >
                {step.label}
              </p>
              {step.detail ? (
                <p
                  className={`mt-1 max-w-[16rem] break-words text-sm ${
                    isDark ? "text-ink-400" : "text-ink-500"
                  }`}
                >
                  {step.detail}
                </p>
              ) : null}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
