import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";

export function CommunitySection() {
  return (
    <section id="community" className="section section-anchor community-section">
      <Reveal className="community-panel">
        <div className="community-copy">
          <p className="eyebrow eyebrow--light">CONNECTION MATTERS</p>
          <h2>You do not have to have every answer <em>today.</em></h2>
          <p>Taking a first step can be as simple as talking with someone you trust, learning about your options, or giving yourself a little room to pause.</p>
          <Link href="#contact" className="button button--light">Continue exploring <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="community-art">
          <Image src="/images/solus/community-illustration.webp" alt="Colorful friendly illustration about community and connection" fill sizes="(max-width: 800px) 80vw, 38vw" className="contain-image" />
        </div>
        <span className="community-orbit community-orbit--one" aria-hidden="true" />
        <span className="community-orbit community-orbit--two" aria-hidden="true" />
      </Reveal>
    </section>
  );
}
