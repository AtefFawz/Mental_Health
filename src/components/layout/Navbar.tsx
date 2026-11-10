"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from "react";
import { LuMenu, LuX } from "react-icons/lu";
import { Button } from "@/components/ui/Button";
import { NAV_ITEMS, SECTION_IDS } from "@/content/navigation";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/cn";
import { site } from "@/lib/site";

const FOCUSABLE = "a[href], button:not([disabled])";

export function Navbar() {
  const active = useActiveSection(SECTION_IDS, "home");
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  const closeAndRestoreFocus = useCallback(() => {
    setOpen(false);
    toggleRef.current?.focus();
  }, []);

  // While the drawer is open: Escape closes it, the page behind can't scroll, focus moves inside.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") closeAndRestoreFocus();
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, closeAndRestoreFocus]);

  // Minimal focus trap so Tab can't escape the modal drawer.
  const trapFocus = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "Tab" || !dialogRef.current) return;
    const items = dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE);
    const first = items[0];
    const last = items[items.length - 1];
    if (!first || !last) return;
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6 md:pt-5">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full border border-ink/10 bg-white/80 px-5 py-2.5 shadow-sm backdrop-blur-md">
        <Link href="#home" className="font-display text-2xl font-bold tracking-tight">
          {site.name}
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              aria-current={active === item.id ? "location" : undefined}
              className={cn(
                "rounded-full px-3 py-1.5 text-sm font-medium transition-colors",
                active === item.id ? "bg-ink text-white" : "text-ink-muted hover:bg-ink/10",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Button href="#therapists" size="md" className="hidden lg:inline-flex">
          Find a therapist
        </Button>

        <button
          ref={toggleRef}
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(true)}
          className="grid size-10 place-items-center rounded-full hover:bg-ink/10 lg:hidden"
        >
          <LuMenu className="size-6" aria-hidden />
        </button>
      </div>

      {/* Rendered outside the blurred bar: backdrop-filter would otherwise become the containing block. */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              aria-hidden
              className="fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeAndRestoreFocus}
            />
            <motion.div
              ref={dialogRef}
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Site menu"
              onKeyDown={trapFocus}
              className="fixed inset-y-0 right-0 z-50 flex w-[82%] max-w-sm flex-col gap-2 bg-canvas p-6 shadow-xl lg:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.25, ease: "easeOut" }}
            >
              <button
                ref={closeRef}
                type="button"
                aria-label="Close menu"
                onClick={closeAndRestoreFocus}
                className="mb-4 grid size-10 place-items-center self-end rounded-full border border-ink/30 hover:bg-ink hover:text-white"
              >
                <LuX className="size-5" aria-hidden />
              </button>
              <nav aria-label="Mobile" className="flex flex-col gap-1">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    aria-current={active === item.id ? "location" : undefined}
                    className={cn(
                      "rounded-2xl px-4 py-3 text-lg font-medium",
                      active === item.id ? "bg-ink text-white" : "hover:bg-ink/10",
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <Button
                href="#therapists"
                size="lg"
                className="mt-auto"
                onClick={() => setOpen(false)}
              >
                Find a therapist
              </Button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
