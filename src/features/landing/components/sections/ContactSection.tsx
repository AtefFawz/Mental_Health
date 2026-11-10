"use client";

import Link from "next/link";
import { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/site-config";

export function ContactSection() {
  const [copyMessage, setCopyMessage] = useState("Copy email address");

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopyMessage("Email copied ✓");
    } catch {
      setCopyMessage("Copy is unavailable in this browser");
    }
  };

  return (
    <section id="contact" className="section section-anchor contact-section">
      <Reveal>
        <div className="contact-panel">
          <div className="contact-copy">
            <SectionHeading
              eyebrow="Keep the conversation open"
              title={<>A question about the <em>project?</em></>}
              description="For questions about this student project or its development, you can reach out by email."
            />
            <div className="contact-actions">
              <a className="button button--primary" href={`mailto:${siteConfig.email}?subject=Solus%20project%20enquiry`}>
                Send an email <span aria-hidden="true">↗</span>
              </a>
              <button className="copy-email-button" type="button" onClick={copyEmail}>
                {copyMessage}
              </button>
            </div>
            <p className="contact-email">{siteConfig.email}</p>
          </div>
          <div className="contact-side">
            <span className="contact-side__asterisk" aria-hidden="true">✳</span>
            <p>Made with care, curiosity, and a belief that thoughtful design can make information easier to approach.</p>
            <Link href="#project" className="text-link text-link--light">About this project <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
