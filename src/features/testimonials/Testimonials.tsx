"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { LuArrowLeft, LuArrowRight, LuQuote } from "react-icons/lu";
import baza from "@/assets/images/partners/baza.png";
import medium from "@/assets/images/partners/medium.png";
import notion from "@/assets/images/partners/notion.png";
import ourPartners from "@/assets/images/partners/our-partners.png";
import sonson from "@/assets/images/partners/sonson.png";
import vector from "@/assets/images/partners/vector.png";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { TESTIMONIALS } from "@/content/testimonials";
import { cn } from "@/lib/cn";

const PARTNERS = [
  { src: sonson, name: "Sonson" },
  { src: vector, name: "Vector" },
  { src: baza, name: "Baza" },
  { src: ourPartners, name: "Our Partners" },
  { src: medium, name: "Medium" },
  { src: notion, name: "Notion" },
] as const;

const controlClass =
  "grid size-12 place-items-center rounded-full bg-white shadow-sm transition hover:bg-ink hover:text-white";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const count = TESTIMONIALS.length;
  const current = TESTIMONIALS[index]!;
  const dark = current.tone === "ink";

  const go = (delta: number) => setIndex((i) => (i + delta + count) % count);

  return (
    <Section id="testimonials" labelledBy="testimonials-title">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <Reveal direction="left" className="space-y-8">
          <SectionHeading
            id="testimonials-title"
            align="left"
            eyebrow="Stories"
            title="What our clients are saying"
            description="Positive experiences from people who have benefited from therapy or wellness programs."
          />
          <div className="flex items-center gap-4">
            <button type="button" aria-label="Previous story" onClick={() => go(-1)} className={controlClass}>
              <LuArrowLeft className="size-5" aria-hidden />
            </button>
            <button type="button" aria-label="Next story" onClick={() => go(1)} className={controlClass}>
              <LuArrowRight className="size-5" aria-hidden />
            </button>
            <ul className="ml-2 flex gap-2" aria-label="Choose a story">
              {TESTIMONIALS.map((item, i) => (
                <li key={item.id}>
                  <button
                    type="button"
                    aria-label={`Story ${i + 1} of ${count}`}
                    aria-current={i === index}
                    onClick={() => setIndex(i)}
                    className={cn(
                      "h-2.5 rounded-full transition-all",
                      i === index ? "w-8 bg-ink" : "w-2.5 bg-ink/25 hover:bg-ink/50",
                    )}
                  />
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal direction="right">
          <AnimatePresence mode="wait" initial={false}>
            <motion.figure
              key={current.id}
              aria-live="polite"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className={cn(
                "flex min-h-72 flex-col justify-between gap-8 rounded-3xl p-8 shadow-sm md:p-10",
                dark ? "bg-ink text-cream" : "bg-cream text-ink",
              )}
            >
              <LuQuote className="size-9 opacity-40" aria-hidden />
              <blockquote className="text-xl leading-relaxed md:text-2xl">{current.quote}</blockquote>
              <figcaption className="font-semibold">— {current.author}</figcaption>
            </motion.figure>
          </AnimatePresence>
        </Reveal>
      </div>

      <Reveal className="mt-16">
        <ul
          aria-label="Our partners"
          className="flex items-center justify-between gap-6 overflow-x-auto rounded-4xl bg-white px-8 py-6 shadow-sm"
        >
          {PARTNERS.map((partner) => (
            <li key={partner.name} className="shrink-0">
              <Image
                src={partner.src}
                alt={partner.name}
                className="h-5 w-auto opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 md:h-7"
              />
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
