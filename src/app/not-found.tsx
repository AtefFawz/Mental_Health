import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-4 text-center">
      <p className="font-display text-8xl font-semibold text-ink/20" aria-hidden>
        404
      </p>
      <h1 className="text-3xl font-semibold md:text-4xl">This page doesn&apos;t exist</h1>
      <p className="max-w-md text-lg text-ink-muted">
        The page may have moved, or the link may be incorrect. Let&apos;s get you back on track.
      </p>
      <Button href="/" size="lg">
        Back to home
      </Button>
    </div>
  );
}
