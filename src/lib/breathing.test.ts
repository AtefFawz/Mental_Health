import { describe, expect, it } from "vitest";
import { BREATH_PATTERNS, initialBreathState, tickBreath } from "./breathing";

const box = BREATH_PATTERNS[0]!;

describe("tickBreath", () => {
  it("counts down within a phase", () => {
    expect(tickBreath({ phase: 0, remaining: 4, cycles: 0 }, box)).toEqual({
      phase: 0,
      remaining: 3,
      cycles: 0,
    });
  });

  it("moves to the next phase when the countdown ends", () => {
    expect(tickBreath({ phase: 0, remaining: 1, cycles: 0 }, box)).toEqual({
      phase: 1,
      remaining: 4,
      cycles: 0,
    });
  });

  it("wraps around and counts a completed cycle", () => {
    const last = box.phases.length - 1;
    expect(tickBreath({ phase: last, remaining: 1, cycles: 2 }, box)).toEqual({
      phase: 0,
      remaining: box.phases[0]!.seconds,
      cycles: 3,
    });
  });

  it("completes a full cycle in exactly the sum of phase durations", () => {
    const total = box.phases.reduce((sum, p) => sum + p.seconds, 0);
    let state = initialBreathState(box);
    for (let i = 0; i < total; i++) state = tickBreath(state, box);
    expect(state).toEqual({ phase: 0, remaining: box.phases[0]!.seconds, cycles: 1 });
  });
});
