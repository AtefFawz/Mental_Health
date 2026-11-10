type ClassValue = string | false | null | undefined;

/** Joins truthy class names. Tiny stand-in for clsx — no dependency needed. */
export function cn(...values: ClassValue[]): string {
  return values.filter(Boolean).join(" ");
}
