import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { approachSteps } from "@/features/landing/data/content";

export function ApproachSection() {
  return (
    <section id="how-it-works" className="section section-anchor approach-section">
      <div className="approach-intro">
        <Reveal>
          <SectionHeading
            eyebrow="A simple way to begin"
            title={<>There is no single <em>right path.</em></>}
            description="Explore at a pace that feels comfortable. The aim is to help you make sense of the options, not to tell you what your journey should look like."
          />
        </Reveal>
        <Reveal delay={0.12} className="approach-image">
          <Image
            src="/images/solus/support-illustration.webp"
            alt="Colorful illustration about connection and emotional support"
            fill
            sizes="(max-width: 800px) 90vw, 36vw"
            className="contain-image"
          />
        </Reveal>
      </div>
      <div className="steps-list">
        {approachSteps.map((step, index) => (
          <Reveal key={step.number} delay={index * 0.08} className="step-row">
            <span className="step-number">{step.number}</span>
            <div className="step-content"><h3>{step.title}</h3><p>{step.description}</p></div>
            <span className="step-arrow" aria-hidden="true">↗</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
