import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "light" | "ghost";

const variants: Record<Variant, string> = {
  primary: "bg-wine text-ivory hover:bg-wine-deep border border-wine",
  secondary:
    "bg-transparent text-charcoal border border-charcoal/35 hover:border-wine hover:text-wine",
  light: "bg-ivory text-wine border border-ivory hover:bg-transparent hover:text-ivory",
  ghost:
    "bg-transparent text-current border border-transparent underline underline-offset-[6px] decoration-champagne decoration-1 hover:decoration-2",
};

const base =
  "inline-flex min-h-12 items-center justify-center whitespace-nowrap px-7 py-3 text-[0.8rem] font-medium uppercase tracking-[0.18em] transition-colors duration-300 ease-out";

type ButtonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
} & (
  | { href: string; external?: boolean; onClick?: never; type?: never; disabled?: never }
  | { href?: never; external?: never; onClick?: () => void; type?: "button" | "submit"; disabled?: boolean }
);

export function Button({ children, variant = "primary", className = "", href, external, ...rest }: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={rest.type ?? "button"}
      onClick={rest.onClick}
      disabled={rest.disabled}
      className={`${classes} disabled:cursor-not-allowed disabled:opacity-60`}
    >
      {children}
    </button>
  );
}
