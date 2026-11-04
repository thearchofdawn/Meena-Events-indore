import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  children?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  as?: "h1" | "h2";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  children,
  align = "left",
  tone = "light",
  as: Tag = "h2",
  className = "",
}: Props) {
  const isDark = tone === "dark";
  return (
    <header className={`${align === "center" ? "mx-auto text-center" : ""} max-w-3xl ${className}`}>
      {eyebrow && (
        <p
          className={`mb-5 text-[0.72rem] font-medium uppercase tracking-[0.28em] ${
            isDark ? "text-champagne" : "text-wine"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <Tag
        className={`text-balance text-4xl leading-[1.08] sm:text-5xl lg:text-6xl ${
          isDark ? "text-ivory" : "text-charcoal"
        }`}
      >
        {title}
      </Tag>
      {children && (
        <div className={`mt-6 text-base leading-relaxed sm:text-lg ${isDark ? "text-ivory/80" : "text-charcoal/75"}`}>
          {children}
        </div>
      )}
    </header>
  );
}
