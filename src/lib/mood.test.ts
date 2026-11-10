import { describe, expect, it } from "vitest";
import {
  MAX_STORED_ENTRIES,
  averageMood,
  lastDays,
  parseEntries,
  toDateKey,
  upsertEntry,
  type MoodEntry,
} from "./mood";

describe("toDateKey", () => {
  it("uses local calendar fields and zero-pads", () => {
    expect(toDateKey(new Date(2026, 0, 5))).toBe("2026-01-05");
    expect(toDateKey(new Date(2026, 11, 31))).toBe("2026-12-31");
  });
});

describe("parseEntries", () => {
  it("returns [] for null, invalid JSON and non-arrays", () => {
    expect(parseEntries(null)).toEqual([]);
    expect(parseEntries("{oops")).toEqual([]);
    expect(parseEntries('{"a":1}')).toEqual([]);
  });

  it("drops malformed items, de-duplicates by date and sorts", () => {
    const raw = JSON.stringify([
      { date: "2026-02-03", mood: 4 },
      { date: "2026-02-01", mood: 2 },
      { date: "2026-02-03", mood: 5 },
      { date: "bad", mood: 3 },
      { date: "2026-02-02", mood: 9 },
      null,
    ]);
    expect(parseEntries(raw)).toEqual([
      { date: "2026-02-01", mood: 2 },
      { date: "2026-02-03", mood: 5 },
    ]);
  });
});

describe("upsertEntry", () => {
  it("replaces the entry for the same day", () => {
    const start: MoodEntry[] = [{ date: "2026-02-01", mood: 2 }];
    expect(upsertEntry(start, { date: "2026-02-01", mood: 5 })).toEqual([
      { date: "2026-02-01", mood: 5 },
    ]);
  });

  it("keeps only the most recent entries", () => {
    let entries: MoodEntry[] = [];
    for (let day = 0; day < MAX_STORED_ENTRIES + 5; day++) {
      entries = upsertEntry(entries, { date: toDateKey(new Date(2026, 0, 1 + day)), mood: 3 });
    }
    expect(entries).toHaveLength(MAX_STORED_ENTRIES);
    expect(entries.at(-1)?.date).toBe(toDateKey(new Date(2026, 0, MAX_STORED_ENTRIES + 5)));
  });
});

describe("lastDays / averageMood", () => {
  const today = new Date(2026, 2, 3); // 3 March 2026

  it("returns consecutive days ending today, across month boundaries", () => {
    const slots = lastDays([], 7, today);
    expect(slots.map((s) => s.date)).toEqual([
      "2026-02-25",
      "2026-02-26",
      "2026-02-27",
      "2026-02-28",
      "2026-03-01",
      "2026-03-02",
      "2026-03-03",
    ]);
  });

  it("averages only the days that have entries", () => {
    const slots = lastDays(
      [
        { date: "2026-03-03", mood: 5 },
        { date: "2026-03-01", mood: 3 },
      ],
      7,
      today,
    );
    expect(averageMood(slots)).toBe(4);
    expect(averageMood(lastDays([], 7, today))).toBeNull();
  });
});
