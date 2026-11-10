import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { resources } from "@/features/landing/data/content";

export function ResourcesSection() {
  return (
    <section id="resources" className="section section-anchor resources-section">
      <Reveal>
        <SectionHeading
          eyebrow="Small moments, meaningful care"
          title={<>A few gentle ideas for <em>everyday life.</em></>}
          description="These are general reflection ideas, not treatment or a substitute for professional support. Choose what feels useful and leave the rest."
          align="center"
        />
      </Reveal>
      <div className="resource-grid">
        {resources.map((resource, index) => (
          <Reveal key={resource.number} delay={index * 0.08} className={`resource-card resource-card--${resource.tone}`}>
            <div className="resource-card__meta"><span>{resource.category}</span><span>{resource.number}</span></div>
            <h3>{resource.title}</h3>
            <p>{resource.description}</p>
            <details className="resource-details">
              <summary>Explore this idea <span aria-hidden="true">+</span></summary>
              <p>{resource.details}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
