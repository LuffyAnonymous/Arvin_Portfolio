import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium transition-[color,background-color,border-color,transform] duration-150 ease-out hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500 disabled:pointer-events-none disabled:cursor-not-allowed disabled:translate-y-0 disabled:opacity-50";

// Primary is the one action that matters most per screen, so it's the only
// pill-shaped surface — every secondary/ghost action stays on the standard
// rounded-md scale, keeping the pill legible as a single, consistent signal.
const variants: Record<Variant, string> = {
  primary: "rounded-full bg-accent-600 text-ink-50 hover:bg-accent-700 active:bg-accent-800",
  secondary:
    "rounded-md border border-ink-300 text-ink-800 hover:border-ink-500 hover:bg-ink-100 active:bg-ink-200",
  ghost:
    "rounded-md text-ink-50 border border-ink-50/25 hover:border-ink-50/50 hover:bg-ink-50/10 active:bg-ink-50/15",
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

type LinkButtonProps = CommonProps & {
  href: string;
  onClick?: () => void;
};

type NativeButtonProps = CommonProps & {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
};

export function Button(props: LinkButtonProps | NativeButtonProps) {
  const { children, variant = "primary", className = "" } = props;
  const classes = `${base} ${variants[variant]} ${className}`;

  if ("href" in props) {
    return (
      <Link href={props.href} onClick={props.onClick} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      disabled={props.disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
