"use client";

import Image from "next/image";
import { useId, useState } from "react";
import { LuPlus } from "react-icons/lu";
import faqArt from "@/assets/images/faq-bloom.png";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { FAQ_ITEMS } from "@/content/faq";
import { cn } from "@/lib/cn";

export function Faq() {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq" labelledBy="faq-title">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal direction="left" className="space-y-8">
          <SectionHeading
            id="faq-title"
            align="left"
            eyebrow="FAQ"
            title="Frequently asked questions"
            description="Find answers to common questions about our services, therapy, and mental well-being."
          />
          <Image
            src={faqArt}
            alt=""
            aria-hidden
            sizes="(min-width: 1024px) 24rem, 60vw"
            className="hidden w-full max-w-sm rounded-4xl lg:block"
          />
        </Reveal>

        <Reveal direction="right">
          <ul className="space-y-3">
            {FAQ_ITEMS.map((item, index) => {
              const open = openIndex === index;
              const buttonId = `${baseId}-button-${index}`;
              const panelId = `${baseId}-panel-${index}`;
              return (
                <li key={item.question} className="rounded-3xl bg-white shadow-sm">
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={open}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(open ? null : index)}
                      className="flex w-full items-center justify-between gap-4 rounded-3xl px-6 py-5 text-left text-lg font-semibold"
                    >
                      {item.question}
                      <span
                        aria-hidden
                        className={cn(
                          "grid size-9 shrink-0 place-items-center rounded-full bg-canvas transition-transform duration-300 motion-reduce:transition-none",
                          open && "rotate-45",
                        )}
                      >
                        <LuPlus className="size-5" />
                      </span>
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={cn(
                      "grid transition-[grid-template-rows] duration-300 motion-reduce:transition-none",
                      open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                    )}
                  >
                    <div className="overflow-hidden" inert={!open}>
                      <p className="px-6 pb-5 text-ink-muted">{item.answer}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
