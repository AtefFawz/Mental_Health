export interface BreathPhase {
  label: "Inhale" | "Hold" | "Exhale";
  seconds: number;
  /** Target size of the circle: 1 = fully expanded, lower = contracted. */
  scale: number;
}

export interface BreathPattern {
  id: string;
  name: string;
  description: string;
  phases: readonly BreathPhase[];
}

export const BREATH_PATTERNS: readonly BreathPattern[] = [
  {
    id: "box",
    name: "Box breathing",
    description: "4 · 4 · 4 · 4 — steady and grounding",
    phases: [
      { label: "Inhale", seconds: 4, scale: 1 },
      { label: "Hold", seconds: 4, scale: 1 },
      { label: "Exhale", seconds: 4, scale: 0.55 },
      { label: "Hold", seconds: 4, scale: 0.55 },
    ],
  },
  {
    id: "relax",
    name: "4-7-8",
    description: "Inhale 4, hold 7, exhale 8 — slows everything down",
    phases: [
      { label: "Inhale", seconds: 4, scale: 1 },
      { label: "Hold", seconds: 7, scale: 1 },
      { label: "Exhale", seconds: 8, scale: 0.55 },
    ],
  },
];

export interface BreathState {
  phase: number;
  remaining: number;
  cycles: number;
}

export function initialBreathState(pattern: BreathPattern): BreathState {
  return { phase: 0, remaining: pattern.phases[0]?.seconds ?? 0, cycles: 0 };
}

/** Advances the exercise by one second. Pure, so it can be unit-tested without timers. */
export function tickBreath(state: BreathState, pattern: BreathPattern): BreathState {
  if (state.remaining > 1) return { ...state, remaining: state.remaining - 1 };
  const next = (state.phase + 1) % pattern.phases.length;
  return {
    phase: next,
    remaining: pattern.phases[next]?.seconds ?? 0,
    cycles: next === 0 ? state.cycles + 1 : state.cycles,
  };
}
