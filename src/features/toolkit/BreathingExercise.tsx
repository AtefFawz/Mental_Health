"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import {
  BREATH_PATTERNS,
  initialBreathState,
  tickBreath,
  type BreathPattern,
} from "@/lib/breathing";
import { cn } from "@/lib/cn";

const IDLE_SCALE = 0.55;

export function BreathingExercise() {
  const [pattern, setPattern] = useState<BreathPattern>(BREATH_PATTERNS[0]!);
  const [state, setState] = useState(() => initialBreathState(BREATH_PATTERNS[0]!));
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(() => setState((s) => tickBreath(s, pattern)), 1000);
    return () => window.clearInterval(id);
  }, [running, pattern]);

  const phase = pattern.phases[state.phase];

  function selectPattern(next: BreathPattern) {
    setPattern(next);
    setState(initialBreathState(next));
    setRunning(false);
  }

  function toggle() {
    if (running) {
      setRunning(false);
      setState(initialBreathState(pattern));
    } else {
      setRunning(true);
    }
  }

  return (
    <article className="flex h-full flex-col gap-6 rounded-3xl bg-ink p-8 text-cream shadow-sm md:p-10">
      <header className="space-y-2">
        <h3 className="text-2xl font-semibold text-white md:text-3xl">Guided breathing</h3>
        <p className="text-cream/80">
          Follow the circle. Breathe in as it grows, out as it shrinks.
        </p>
      </header>

      <div role="radiogroup" aria-label="Breathing pattern" className="grid gap-2 sm:grid-cols-2">
        {BREATH_PATTERNS.map((option) => {
          const selected = option.id === pattern.id;
          return (
            <button
              key={option.id}
              type="button"
              role="radio"
              aria-checked={selected}
              onClick={() => selectPattern(option)}
              className={cn(
                "rounded-2xl border px-4 py-3 text-left transition-colors",
                selected
                  ? "border-cream bg-cream text-ink"
                  : "border-cream/30 hover:border-cream/70",
              )}
            >
              <span className="block font-semibold">{option.name}</span>
              <span className={cn("block text-sm", selected ? "text-ink-muted" : "text-cream/70")}>
                {option.description}
              </span>
            </button>
          );
        })}
      </div>

      <div className="relative mx-auto grid size-56 place-items-center md:size-64">
        <div className="absolute inset-0 rounded-full border border-cream/20" aria-hidden />
        <motion.div
          aria-hidden
          className="absolute inset-0 rounded-full bg-mint/80"
          animate={{ scale: running && phase ? phase.scale : IDLE_SCALE }}
          transition={{ duration: running && phase ? phase.seconds : 0.4, ease: "easeInOut" }}
        />
        <div className="relative text-center text-ink">
          <p className="font-display text-3xl font-semibold">
            {running && phase ? phase.label : "Ready?"}
          </p>
          {running && <p className="text-4xl font-semibold tabular-nums">{state.remaining}</p>}
        </div>
      </div>

      {/* Announces phase changes to screen readers without moving focus. */}
      <p className="sr-only" aria-live="polite">
        {running && phase ? `${phase.label}, ${state.remaining}` : ""}
      </p>

      <footer className="mt-auto flex flex-wrap items-center justify-between gap-4">
        <Button variant="light" size="lg" onClick={toggle} aria-pressed={running}>
          {running ? "Stop" : "Start"}
        </Button>
        <p className="text-cream/80 tabular-nums">
          Completed cycles: <strong className="text-white">{state.cycles}</strong>
        </p>
      </footer>
    </article>
  );
}
