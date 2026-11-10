import {
  parseEntries,
  upsertEntry,
  type MoodEntry,
} from "@/lib/mood";

const STORAGE_KEY = "solus:mood-entries:v1";
const EMPTY: readonly MoodEntry[] = [];

const listeners = new Set<() => void>();
let cachedRaw: string | null | undefined;
let cachedEntries: readonly MoodEntry[] = EMPTY;

function readRaw(): string | null {
  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch {
    return null; // storage blocked (private mode, disabled cookies, …)
  }
}

/**
 * useSyncExternalStore requires getSnapshot to return the *same reference* while the data is
 * unchanged, so we memoise on the raw string and only re-parse when it differs.
 */
export function getSnapshot(): readonly MoodEntry[] {
  const raw = readRaw();
  if (raw !== cachedRaw) {
    cachedRaw = raw;
    cachedEntries = raw === null ? EMPTY : parseEntries(raw);
  }
  return cachedEntries;
}

export function getServerSnapshot(): readonly MoodEntry[] {
  return EMPTY;
}

export function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  // The `storage` event keeps several open tabs in sync.
  const onStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY || event.key === null) listener();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

function write(entries: readonly MoodEntry[]) {
  try {
    if (entries.length === 0) window.localStorage.removeItem(STORAGE_KEY);
    else window.localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  } catch {
    /* ignore quota / blocked storage: the UI simply won't persist */
  }
  listeners.forEach((listener) => listener());
}

export function saveMood(entry: MoodEntry) {
  write(upsertEntry(getSnapshot(), entry));
}

export function clearMoods() {
  write(EMPTY);
}

/** Clock accessor, kept here so rendering code never reads the time directly. */
export function currentDate(): Date {
  return new Date();
}
