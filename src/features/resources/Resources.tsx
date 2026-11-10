import type { IconType } from "react-icons";
import { LuBookOpen, LuHeadphones, LuVideo } from "react-icons/lu";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { cn } from "@/lib/cn";

interface Resource {
  title: string;
  description: string;
  Icon: IconType;
  accent: string;
  action?: { label: string; href: string };
}

const RESOURCES: readonly Resource[] = [
  {
    title: "Articles & guides",
    description: "Practical tips on stress management, mindfulness, and emotional resilience.",
    Icon: LuBookOpen,
    accent: "bg-sun",
  },
  {
    title: "Meditation & relaxation",
    description: "Guided breathing exercises you can start in seconds, right on this page.",
    Icon: LuHeadphones,
    accent: "bg-mint",
    action: { label: "Try it now", href: "#toolkit" },
  },
  {
    title: "Webinars & workshops",
    description: "Live and recorded sessions with mental-health professionals.",
    Icon: LuVideo,
    accent: "bg-blush",
  },
];

export function Resources() {
  return (
    <Section id="resources" labelledBy="resources-title">
      <SectionHeading
        id="resources-title"
        eyebrow="Resources"
        title="Resources for your well-being"
        description="Explore expert insights, self-care guides, and tools to support your mental health."
      />

      <ul className="mt-12 grid gap-6 md:grid-cols-3">
        {RESOURCES.map(({ title, description, Icon, accent, action }, index) => (
          <li key={title}>
            <Reveal delay={index * 0.1} className="h-full">
              <article className="flex h-full flex-col gap-5 rounded-4xl bg-white p-8 shadow-sm">
                <span
                  className={cn("grid size-14 place-items-center rounded-2xl text-ink", accent)}
                >
                  <Icon className="size-7" aria-hidden />
                </span>
                <h3 className="text-2xl font-semibold">{title}</h3>
                <p className="text-lg text-ink-muted">{description}</p>
                <div className="mt-auto pt-2">
                  {action ? (
                    <Button href={action.href} variant="secondary">
                      {action.label}
                    </Button>
                  ) : (
                    <span className="inline-block rounded-full bg-canvas px-4 py-2 text-sm font-semibold text-ink-muted">
                      Coming soon
                    </span>
                  )}
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
