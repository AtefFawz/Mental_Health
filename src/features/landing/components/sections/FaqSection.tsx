import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/features/landing/data/content";

export function FaqSection() {
  return (
    <section id="faq" className="section section-anchor faq-section">
      <div className="faq-aside">
        <Reveal>
          <SectionHeading
            eyebrow="A little clarity"
            title={<>Questions, meet <em>answers.</em></>}
            description="A few details about what this project is — and what it is not."
          />
        </Reveal>
        <Reveal delay={0.12} className="faq-illustration">
          <Image src="/images/solus/reflection-illustration.webp" alt="Colorful illustration about self-reflection" fill sizes="(max-width: 800px) 70vw, 30vw" className="contain-image" />
        </Reveal>
      </div>
      <div className="faq-list">
        {faqs.map((item, index) => (
          <Reveal key={item.question} delay={index * 0.045}>
            <details className="faq-item" open={index === 0}>
              <summary><span>{item.question}</span><span className="faq-toggle" aria-hidden="true">+</span></summary>
              <p>{item.answer}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
