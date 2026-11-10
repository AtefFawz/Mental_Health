import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/site-config";

export function ProjectSection() {
  return (
    <section id="project" className="section section-anchor project-section">
      <Reveal>
        <div className="project-heading">
          <SectionHeading
            eyebrow="Behind the work"
            title={<>A learning project with a <em>human focus.</em></>}
            description="Solus was developed as a field-training project, bringing together interface design, responsive development, and a thoughtful approach to wellbeing information."
          />
          <div className="project-logo-wrap">
            <Image src="/images/solus/institute-logo.webp" alt="Raya Higher Institute logo" width={92} height={92} />
          </div>
        </div>
      </Reveal>
      <Reveal delay={0.1} className="project-card">
        <div className="project-image">
          <Image src="/images/solus/institute-building.webp" alt="Raya Higher Institute building" fill sizes="(max-width: 800px) 100vw, 48vw" />
        </div>
        <div className="project-details">
          <p className="eyebrow">FIELD TRAINING · WEB DEVELOPMENT</p>
          <h3>Raya Higher Institute for Management and Foreign Trade</h3>
          <p className="project-description">This website was created as the primary output of a field-training program and demonstrates practical work in modern front-end development.</p>
          <dl className="project-meta">
            <div><dt>Student</dt><dd>{siteConfig.student}</dd></div>
            <div><dt>Department</dt><dd>Information Systems</dd></div>
            <div><dt>Training track</dt><dd>Web Development</dd></div>
            <div><dt>Supervisor</dt><dd>{siteConfig.supervisor}</dd></div>
          </dl>
        </div>
      </Reveal>
    </section>
  );
}
