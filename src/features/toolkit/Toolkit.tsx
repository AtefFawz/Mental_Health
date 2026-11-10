import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { BreathingExercise } from "./BreathingExercise";
import { MoodCheckIn } from "./MoodCheckIn";

export function Toolkit() {
  return (
    <Section id="toolkit" labelledBy="toolkit-title">
      <SectionHeading
        id="toolkit-title"
        eyebrow="Toolkit"
        title="Small practices, right now"
        description="Try a calming exercise or check in with yourself. No account needed — everything stays on your device."
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <Reveal direction="left" className="h-full">
          <BreathingExercise />
        </Reveal>
        <Reveal direction="right" className="h-full">
          <MoodCheckIn />
        </Reveal>
      </div>
    </Section>
  );
}
