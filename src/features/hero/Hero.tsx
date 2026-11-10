import Image from "next/image";
import { LuShieldCheck, LuUsers, LuVideo } from "react-icons/lu";
import heroLeft from "@/assets/images/hero-left.png";
import heroRight from "@/assets/images/hero-right.png";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

const TRUST_POINTS = [
  { Icon: LuUsers, label: "Licensed professionals" },
  { Icon: LuVideo, label: "Online & in-person" },
  { Icon: LuShieldCheck, label: "Private by design" },
] as const;

export function Hero() {
  return (
    <Section
      id="home"
      labelledBy="hero-title"
      className="pt-28 pb-6 md:pt-36 md:pb-10"
    >
      <Reveal direction="none" transition={{ duration: 0.8 }}>
        <div className="relative isolate flex flex-col items-center overflow-hidden rounded-[2rem] bg-cream px-6 pt-14 pb-40 text-center shadow-sm md:px-44 md:py-20 lg:px-64 lg:py-24">
          <Image
            src={heroLeft}
            alt=""
            aria-hidden
            priority
            sizes="(min-width: 1024px) 11rem, 8rem"
            className="pointer-events-none absolute bottom-0 left-0 -z-10 h-36 w-auto md:h-72 lg:h-80"
          />
          <Image
            src={heroRight}
            alt=""
            aria-hidden
            priority
            sizes="(min-width: 1024px) 11rem, 8rem"
            className="pointer-events-none absolute right-0 bottom-0 -z-10 h-36 w-auto md:h-72 lg:h-80"
          />

          <h1
            id="hero-title"
            className="text-4xl leading-tight font-semibold tracking-tight md:text-5xl"
          >
            Support for your mental well-being
          </h1>
          <p className="mt-5 max-w-xl text-lg text-ink-muted md:text-xl">
            Connect with licensed therapists, counselors, and wellness coaches
            to support your journey — or start with a calming exercise, right
            now.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#therapists" size="lg">
              Find a therapist
            </Button>
            <Button href="#toolkit" variant="secondary" size="lg">
              Try a breathing exercise
            </Button>
          </div>
        </div>
      </Reveal>

      <ul className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-medium text-ink-muted">
        {TRUST_POINTS.map(({ Icon, label }) => (
          <li key={label} className="flex items-center gap-2">
            <Icon className="size-5 text-ink" aria-hidden />
            {label}
          </li>
        ))}
      </ul>
    </Section>
  );
}
