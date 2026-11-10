import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { supportOptions } from "@/features/landing/data/content";

export function ServicesSection() {
  return (
    <section id="services" className="section section-anchor services-section">
      <Reveal>
        <SectionHeading
          eyebrow="Explore what may help"
          title={<>Different ways to care for <em>yourself.</em></>}
          description="A few starting points for learning about wellbeing and the kinds of support people may choose to explore."
          align="center"
        />
      </Reveal>
      <div className="support-grid">
        {supportOptions.map((option, index) => (
          <Reveal key={option.number} delay={index * 0.08} className={`support-card support-card--${option.tone}`}>
            <div className="support-card__top"><span>{option.number}</span><span className="support-card__spark">✳</span></div>
            <p className="card-tag">{option.tag}</p>
            <h3>{option.title}</h3>
            <p className="support-card__description">{option.description}</p>
            <Link href={index === 1 ? "#how-it-works" : "#resources"} className="circle-link" aria-label={`Explore ${option.title}`}>
              <span aria-hidden="true">↗</span>
            </Link>
          </Reveal>
        ))}
      </div>
      <div className="services-note">
        <span className="services-note__icon">i</span>
        <p>Solus is an educational project concept. It does not provide clinical services, appointments, or a directory of verified providers.</p>
      </div>
      <div className="services-illustration" aria-hidden="true">
        <Image src="/images/solus/mindfulness-illustration.webp" alt="" width={160} height={120} />
      </div>
    </section>
  );
}
