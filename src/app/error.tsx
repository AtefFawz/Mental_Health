"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-4 text-center">
      <h1 className="text-4xl font-semibold">Something went wrong</h1>
      <p className="max-w-md text-lg text-ink-muted">
        An unexpected error occurred. You can try again, or head back to the start.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <Button onClick={reset}>Try again</Button>
        <Button href="/" variant="secondary">
          Back to home
        </Button>
      </div>
    </div>
  );
}
