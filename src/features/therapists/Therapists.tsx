"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import {
  SPECIALTIES,
  THERAPISTS,
  type Accent,
  type Specialty,
  type Therapist,
} from "@/content/therapists";
import { cn } from "@/lib/cn";

type Filter = "All" | Specialty;

const ACCENT_STYLES: Record<Accent, string> = {
  sun: "bg-sun",
  mint: "bg-mint",
  blush: "bg-blush",
  cream: "bg-cream",
};

function initials(name: string): string {
  return name
    .replace(/^Dr\.\s+/, "")
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);
}

function TherapistCard({ therapist }: { therapist: Therapist }) {
  return (
    <motion.li
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.25 }}
      className="flex flex-col gap-4 rounded-3xl bg-white p-6 shadow-sm"
    >
      <div className="flex items-center gap-4">
        <span
          aria-hidden
          className={cn(
            "grid size-14 shrink-0 place-items-center rounded-full font-display text-xl font-semibold",
            ACCENT_STYLES[therapist.accent],
          )}
        >
          {initials(therapist.name)}
        </span>
        <div>
          <h3 className="text-xl font-semibold">{therapist.name}</h3>
          <p className="text-ink-muted">{therapist.role}</p>
        </div>
      </div>

      <p className="text-ink-muted">{therapist.bio}</p>

      <ul className="flex flex-wrap gap-2" aria-label="Specialties">
        {therapist.specialties.map((specialty) => (
          <li key={specialty} className="rounded-full bg-cream px-3 py-1 text-sm font-medium">
            {specialty}
          </li>
        ))}
      </ul>

      <dl className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-sm">
        <dt className="font-semibold">Languages</dt>
        <dd className="text-ink-muted">{therapist.languages.join(", ")}</dd>
        <dt className="font-semibold">Sessions</dt>
        <dd className="text-ink-muted">{therapist.formats.join(" · ")}</dd>
      </dl>

      <Button href="#contact" variant="secondary" className="mt-auto self-start">
        Request a session
      </Button>
    </motion.li>
  );
}

export function Therapists() {
  const [filter, setFilter] = useState<Filter>("All");
  const visible =
    filter === "All" ? THERAPISTS : THERAPISTS.filter((t) => t.specialties.includes(filter));

  return (
    <Section id="therapists" labelledBy="therapists-title">
      <SectionHeading
        id="therapists-title"
        eyebrow="Therapists"
        title="Find someone who fits"
        description="Filter by what you're going through. Every professional lists their languages and session formats."
      />

      <div
        role="group"
        aria-label="Filter by specialty"
        className="mt-10 flex flex-wrap justify-center gap-2"
      >
        {(["All", ...SPECIALTIES] as const).map((option) => (
          <button
            key={option}
            type="button"
            aria-pressed={filter === option}
            onClick={() => setFilter(option)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              filter === option
                ? "border-ink bg-ink text-white"
                : "border-ink/25 bg-white hover:border-ink/60",
            )}
          >
            {option}
          </button>
        ))}
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {visible.length} of {THERAPISTS.length} professionals
      </p>

      <ul className="mt-8 grid gap-6 md:grid-cols-2">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((therapist) => (
            <TherapistCard key={therapist.id} therapist={therapist} />
          ))}
        </AnimatePresence>
      </ul>

      <p className="mt-8 text-center text-sm text-ink-muted">
        Profiles shown are illustrative — Solus is a portfolio project and does not list real
        clinicians.
      </p>
    </Section>
  );
}
