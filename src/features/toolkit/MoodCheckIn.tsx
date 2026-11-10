"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { LuLock, LuTrash2 } from "react-icons/lu";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { averageMood, lastDays, toDateKey, type MoodValue } from "@/lib/mood";
import {
  clearMoods,
  currentDate,
  getServerSnapshot,
  getSnapshot,
  saveMood,
  subscribe,
} from "./mood-store";

interface MoodOption {
  value: MoodValue;
  label: string;
  emoji: string;
  bar: string;
  message: string;
  link?: { label: string; href: string };
}

const MOODS: readonly MoodOption[] = [
  {
    value: 5,
    label: "Great",
    emoji: "😄",
    bar: "bg-mint",
    message: "Lovely to hear. Notice what's helping today — it's worth repeating.",
  },
  {
    value: 4,
    label: "Good",
    emoji: "🙂",
    bar: "bg-mint/70",
    message: "A steady day is a real win. Keep doing what's working.",
  },
  {
    value: 3,
    label: "Okay",
    emoji: "😐",
    bar: "bg-sun",
    message: "Middle-of-the-road days are normal. A few slow breaths can help you reset.",
    link: { label: "Try guided breathing", href: "#toolkit" },
  },
  {
    value: 2,
    label: "Low",
    emoji: "😕",
    bar: "bg-coral",
    message: "Thanks for being honest. Be gentle with yourself — talking to someone can really help.",
    link: { label: "Meet the therapists", href: "#therapists" },
  },
  {
    value: 1,
    label: "Rough",
    emoji: "😔",
    bar: "bg-blush",
    message:
      "I'm sorry it's been hard. You don't have to carry this alone — consider reaching out to a professional. If you feel unsafe, contact your local emergency number or a crisis line right away.",
    link: { label: "Find support", href: "#therapists" },
  },
];

export function MoodCheckIn() {
  const entries = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const hasEntries = entries.length > 0;

  // Date-dependent values are only computed once entries exist, which never happens on the
  // server render — so server and client markup always match.
  const today = hasEntries ? currentDate() : null;
  const todayKey = today ? toDateKey(today) : null;
  const selected = todayKey ? entries.find((e) => e.date === todayKey)?.mood : undefined;
  const week = today ? lastDays(entries, 7, today) : [];
  const average = averageMood(week);
  const feedback = MOODS.find((m) => m.value === selected);

  return (
    <article className="flex h-full flex-col gap-6 rounded-3xl bg-white p-8 shadow-sm md:p-10">
      <header className="space-y-2">
        <h3 className="text-2xl font-semibold md:text-3xl">How are you feeling today?</h3>
        <p className="flex items-center gap-2 text-ink-muted">
          <LuLock className="size-4 shrink-0" aria-hidden />
          Saved only in this browser. Nothing is sent anywhere.
        </p>
      </header>

      <div role="group" aria-label="Today's mood" className="grid grid-cols-5 gap-2">
        {MOODS.map((mood) => (
          <button
            key={mood.value}
            type="button"
            aria-pressed={selected === mood.value}
            onClick={() => saveMood({ date: toDateKey(currentDate()), mood: mood.value })}
            className={cn(
              "flex flex-col items-center gap-1 rounded-2xl border px-1 py-3 text-sm font-medium transition",
              selected === mood.value
                ? "border-ink bg-cream shadow-sm"
                : "border-ink/15 hover:border-ink/50 hover:bg-cream-soft",
            )}
          >
            <span className="text-3xl" aria-hidden>
              {mood.emoji}
            </span>
            {mood.label}
          </button>
        ))}
      </div>

      <div aria-live="polite" className="min-h-20 rounded-2xl bg-cream-soft p-4">
        {feedback ? (
          <>
            <p>{feedback.message}</p>
            {feedback.link && (
              <Link
                href={feedback.link.href}
                className="mt-2 inline-block font-semibold underline underline-offset-4"
              >
                {feedback.link.label}
              </Link>
            )}
          </>
        ) : (
          <p className="text-ink-muted">Pick the option that fits best. There are no wrong answers.</p>
        )}
      </div>

      {hasEntries && (
        <section aria-label="Your last 7 days" className="space-y-3">
          <div className="flex items-baseline justify-between">
            <h4 className="font-semibold">Your last 7 days</h4>
            {average !== null && (
              <p className="text-sm text-ink-muted">Average {average.toFixed(1)} / 5</p>
            )}
          </div>
          <ul className="grid grid-cols-7 items-end gap-2">
            {week.map(({ date, entry }) => {
              const mood = MOODS.find((m) => m.value === entry?.mood);
              const day = new Date(`${date}T12:00:00`).toLocaleDateString("en", {
                weekday: "short",
              });
              return (
                <li key={date} className="flex flex-col items-center gap-1.5">
                  <div className="flex h-20 w-full items-end rounded-lg bg-canvas">
                    {mood && (
                      <div
                        className={cn("w-full rounded-lg", mood.bar)}
                        style={{ height: `${mood.value * 20}%` }}
                        role="img"
                        aria-label={`${day}: ${mood.label}`}
                      />
                    )}
                  </div>
                  <span className="text-xs text-ink-muted">{day}</span>
                </li>
              );
            })}
          </ul>
          <Button variant="ghost" onClick={clearMoods} className="-ml-3 text-ink-muted">
            <LuTrash2 className="size-4" aria-hidden />
            Clear my history
          </Button>
        </section>
      )}
    </article>
  );
}
