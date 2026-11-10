import Image from "next/image";
import type { ReactNode } from "react";
import { LuHeartHandshake } from "react-icons/lu";
import hearts from "@/assets/images/service-hearts.png";
import mirror from "@/assets/images/service-mirror.png";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { cn } from "@/lib/cn";

interface ServiceCardProps {
  title: string;
  description: ReactNode;
  cta: { label: string; href: string };
  tone: "cream" | "white";
  className?: string;
  textClassName?: string;
  art?: ReactNode;
}

function ServiceCard({
  title,
  description,
  cta,
  tone,
  className,
  textClassName,
  art,
}: ServiceCardProps) {
  return (
    <article
      className={cn(
        "relative flex h-full min-h-80 overflow-hidden rounded-3xl p-8 shadow-sm md:p-10",
        tone === "cream" ? "bg-cream" : "bg-white",
        className,
      )}
    >
      <div
        className={cn(
          "relative z-10 flex max-w-md flex-col items-start justify-between gap-6",
          textClassName,
        )}
      >
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold md:text-3xl">{title}</h3>
          <div className="space-y-3 text-lg text-ink-muted">{description}</div>
        </div>
        <Button href={cta.href} variant="secondary">
          {cta.label}
        </Button>
      </div>
      {art}
    </article>
  );
}

export function Services() {
  return (
    <Section id="services" labelledBy="services-title">
      <SectionHeading
        id="services-title"
        eyebrow="Services"
        title="Your path to well-being"
        description="Discover expert guidance for a healthier mind and balanced life."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <Reveal direction="left" className="h-full">
          <ServiceCard
            tone="cream"
            title="Mindfulness & meditation"
            description={
              <p>
                Guided meditation sessions and stress-management techniques.
              </p>
            }
            cta={{ label: "Try it now", href: "#toolkit" }}
            art={
              <Image
                src={hearts}
                alt=""
                aria-hidden
                sizes="10rem"
                className="pointer-events-none absolute right-0 bottom-0 hidden h-3/4 w-auto sm:block md:hidden lg:block"
              />
            }
          />
        </Reveal>

        <Reveal direction="right" className="h-full">
          <ServiceCard
            tone="white"
            title="One-on-one therapy"
            description={
              <p>
                Virtual and in-person therapy sessions with licensed
                professionals.
              </p>
            }
            cta={{ label: "Meet the therapists", href: "#therapists" }}
            art={
              <LuHeartHandshake
                aria-hidden
                className="pointer-events-none absolute -right-4 -bottom-4 size-40 text-mint/30"
              />
            }
          />
        </Reveal>

        <Reveal className="md:col-span-2">
          <ServiceCard
            tone="white"
            title="Wellness coaching"
            textClassName="md:max-w-[55%]"
            description={
              <>
                <p>
                  Personalized guidance to help you build healthier habits,
                  manage stress, and achieve balance in all areas of your life.
                </p>
                <p>
                  Our coaches support you in creating sustainable routines for
                  mental, emotional and physical well-being.
                </p>
              </>
            }
            cta={{ label: "Ask about coaching", href: "#contact" }}
            art={
              <Image
                src={mirror}
                alt=""
                aria-hidden
                sizes="(min-width: 768px) 24rem, 0px"
                className="pointer-events-none absolute right-0 bottom-0 hidden h-full w-auto md:block"
              />
            }
          />
        </Reveal>
      </div>
    </Section>
  );
}
