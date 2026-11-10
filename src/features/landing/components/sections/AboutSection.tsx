import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutSection() {
  return (
    <section id="about" className="section section-anchor about-section">
      <div className="about-visual">
        <Reveal className="about-visual__frame">
          <Image
            src="/images/solus/about-illustration.webp"
            alt="Illustration representing thoughts, feelings, and self-understanding"
            fill
            sizes="(max-width: 800px) 90vw, 42vw"
            className="contain-image"
          />
        </Reveal>
        <div className="about-sticker"><span>✳</span><small>Care begins<br />with a pause</small></div>
      </div>
      <Reveal className="about-copy">
        <SectionHeading
          eyebrow="A thoughtful starting point"
          title={<>Your well-being deserves <em>attention.</em></>}
          description="Looking after yourself does not have to begin with a big change. Sometimes it starts with understanding what you need, finding reliable information, or knowing where to look for support."
        />
        <p className="body-copy">
          Solus brings these ideas together in one welcoming space. The project is designed to make mental-wellbeing topics feel easier to explore — with clarity, respect, and no pressure to have everything figured out.
        </p>
        <Link href="#how-it-works" className="text-link">Discover our approach <span aria-hidden="true">→</span></Link>
      </Reveal>
    </section>
  );
}
