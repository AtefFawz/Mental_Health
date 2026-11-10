import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap transition duration-200 ease-out active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 motion-reduce:transition-none motion-reduce:active:scale-100";

const variants = {
  primary: "bg-ink text-white shadow-sm hover:bg-ink-700 hover:shadow-md",
  secondary: "border border-ink/30 text-ink hover:bg-ink hover:text-white",
  light: "bg-white text-ink shadow-sm hover:bg-cream",
  ghost: "text-ink hover:bg-ink/10",
} as const;

const sizes = {
  md: "px-5 py-2.5 text-sm md:text-base",
  lg: "px-7 py-3.5 text-base",
} as const;

interface Shared {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
}
type AnchorProps = Shared & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type NativeProps = Shared & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

/** Renders a Next.js <Link> when given an href, otherwise a real <button>. */
export function Button(props: AnchorProps | NativeProps) {
  const { variant = "primary", size = "md", className, ...rest } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if (rest.href !== undefined) {
    const { href, ...anchor } = rest;
    return <Link href={href} className={classes} {...anchor} />;
  }
  return <button type="button" className={classes} {...rest} />;
}
