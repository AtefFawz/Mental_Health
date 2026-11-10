import Image from "next/image";
import communityArt from "@/assets/images/community-shapes.png";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function Community() {
  return (
    <Section id="community" labelledBy="community-title" className="py-6 md:py-10">
      <Reveal>
        <div className="grid items-center gap-8 rounded-4xl bg-white p-8 shadow-sm md:grid-cols-2 md:p-12">
          <div className="flex flex-col items-start gap-6">
            <h2 id="community-title" className="text-3xl font-semibold md:text-4xl">
              You&apos;re not alone on this journey
            </h2>
            <p className="text-lg text-ink-muted md:text-xl">
              Connect with others, share experiences, and find encouragement in a safe,
              supportive space.
            </p>
            <Button href="#contact" size="lg">
              Join the waitlist
            </Button>
          </div>
          <Image
            src={communityArt}
            alt=""
            aria-hidden
            sizes="(min-width: 768px) 28rem, 0px"
            className="hidden w-full max-w-lg justify-self-center md:block"
          />
        </div>
      </Reveal>
    </Section>
  );
}
