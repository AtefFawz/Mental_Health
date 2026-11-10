export type MoodValue = 1 | 2 | 3 | 4 | 5;

export interface MoodEntry {
  /** Local calendar day, formatted YYYY-MM-DD. */
  date: string;
  mood: MoodValue;
}

const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;
export const MAX_STORED_ENTRIES = 60;

function isMoodValue(value: unknown): value is MoodValue {
  return typeof value === "number" && Number.isInteger(value) && value >= 1 && value <= 5;
}

/** Formats a Date as a local YYYY-MM-DD key (not UTC, so "today" matches the user's day). */
export function toDateKey(date: Date): string {
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${date.getFullYear()}-${month}-${day}`;
}

/** Parses stored JSON defensively: bad shapes are dropped, never thrown on. */
export function parseEntries(raw: string | null): MoodEntry[] {
  if (!raw) return [];
  let data: unknown;
  try {
    data = JSON.parse(raw);
  } catch {
    return [];
  }
  if (!Array.isArray(data)) return [];

  const byDate = new Map<string, MoodEntry>();
  for (const item of data) {
    if (typeof item !== "object" || item === null) continue;
    const { date, mood } = item as Record<string, unknown>;
    if (typeof date === "string" && DATE_PATTERN.test(date) && isMoodValue(mood)) {
      byDate.set(date, { date, mood });
    }
  }
  return [...byDate.values()].sort((a, b) => a.date.localeCompare(b.date));
}

/** Adds or replaces the entry for a day, keeping the list sorted and bounded. */
export function upsertEntry(entries: readonly MoodEntry[], entry: MoodEntry): MoodEntry[] {
  return [...entries.filter((e) => e.date !== entry.date), entry]
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(-MAX_STORED_ENTRIES);
}

export interface DaySlot {
  date: string;
  entry: MoodEntry | undefined;
}

/** The last `days` calendar days ending today (oldest first), with any entry for each. */
export function lastDays(entries: readonly MoodEntry[], days: number, today: Date): DaySlot[] {
  const byDate = new Map(entries.map((e) => [e.date, e]));
  return Array.from({ length: days }, (_, index) => {
    const offset = days - 1 - index;
    const date = toDateKey(
      new Date(today.getFullYear(), today.getMonth(), today.getDate() - offset),
    );
    return { date, entry: byDate.get(date) };
  });
}

export function averageMood(slots: readonly DaySlot[]): number | null {
  const values = slots.flatMap((slot) => (slot.entry ? [slot.entry.mood] : []));
  if (values.length === 0) return null;
  return values.reduce((sum, v) => sum + v, 0) / values.length;
}
