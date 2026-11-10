import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface SectionProps {
  id: string;
  /** id of the heading that names this landmark. */
  labelledBy?: string;
  className?: string;
  children: ReactNode;
}

export function Section({ id, labelledBy, className, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn("mx-auto w-full max-w-6xl scroll-mt-28 px-4 py-12 md:px-6 md:py-20", className)}
    >
      {children}
    </section>
  );
}

interface SectionHeadingProps {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <header
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "mx-auto max-w-2xl items-center text-center" : "items-start",
        className,
      )}
    >
      {eyebrow && (
        <p className="text-sm font-semibold tracking-[0.18em] text-ink-muted uppercase">
          {eyebrow}
        </p>
      )}
      <h2 id={id} className="text-3xl font-semibold tracking-tight md:text-4xl">
        {title}
      </h2>
      {description && <p className="text-lg text-ink-muted">{description}</p>}
    </header>
  );
}
