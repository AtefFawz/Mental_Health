import Image from "next/image";
import portrait from "@/assets/images/about-portrait.png";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";

const STEPS = [
  {
    title: "Browse",
    text: "Explore professionals by specialty, language and session format.",
  },
  {
    title: "Book",
    text: "Send a request and pick a time that suits your week.",
  },
  {
    title: "Begin",
    text: "Start your healing journey with someone you trust.",
  },
] as const;

export function About() {
  return (
    <Section id="about" labelledBy="about-title">
      <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
        <Reveal direction="left" className="order-2 md:order-1">
          <SectionHeading
            id="about-title"
            align="left"
            eyebrow="How it works"
            title="We help you prioritize your mental health"
            description="Browse therapists, book a session, and start your healing journey with trusted professionals."
          />
          <ol className="mt-8 space-y-5">
            {STEPS.map((step, index) => (
              <li key={step.title} className="flex gap-4">
                <span
                  aria-hidden
                  className="grid size-10 shrink-0 place-items-center rounded-full bg-ink font-semibold text-white"
                >
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-ink-muted">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <Button href="#therapists" size="lg" className="mt-10">
            Find a therapist
          </Button>
        </Reveal>

        <Reveal direction="right" className="order-1 md:order-2">
          <Image
            src={portrait}
            alt="Illustration of a person with a cloud of tangled emotions above their head"
            sizes="(min-width: 768px) 28rem, 90vw"
            className="mx-auto w-full max-w-md rounded-3xl"
          />
        </Reveal>
      </div>
    </Section>
  );
}
