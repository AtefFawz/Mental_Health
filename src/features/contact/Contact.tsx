import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { LuClock, LuMail, LuMapPin } from "react-icons/lu";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { site } from "@/lib/site";
import { ContactForm } from "./ContactForm";

const DETAILS = [
  {
    Icon: LuMail,
    label: "Email",
    value: site.contact.email,
    href: `mailto:${site.contact.email}`,
  },
  { Icon: LuMapPin, label: "Location", value: site.contact.location },
  {
    Icon: LuClock,
    label: "Response time",
    value: `We typically reply within ${site.contact.responseTime}`,
  },
] as const;

const SOCIALS = [
  { label: "LinkedIn", href: site.author.linkedin, Icon: FaLinkedinIn },
  { label: "GitHub", href: site.author.github, Icon: FaGithub },
] as const;

export function Contact() {
  return (
    <Section id="contact" labelledBy="contact-title">
      <SectionHeading
        id="contact-title"
        eyebrow="Contact"
        title="We're here to support you"
        description="Whether you have questions, need help getting started, or want to learn more — reach out anytime."
      />

      <Reveal className="mt-12">
        <div className="grid gap-10 rounded-4xl bg-white p-6 shadow-sm md:grid-cols-2 md:p-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold md:text-3xl">Contact details</h3>
            <dl className="space-y-5">
              {DETAILS.map((detail) => (
                <div key={detail.label} className="flex items-start gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-cream">
                    <detail.Icon className="size-5" aria-hidden />
                  </span>
                  <div>
                    <dt className="text-sm font-semibold tracking-wide text-ink-muted uppercase">
                      {detail.label}
                    </dt>
                    <dd className="text-lg">
                      {"href" in detail ? (
                        <a href={detail.href} className="underline underline-offset-4">
                          {detail.value}
                        </a>
                      ) : (
                        detail.value
                      )}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
            <ul className="flex gap-3">
              {SOCIALS.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid size-11 place-items-center rounded-full bg-canvas text-xl transition hover:bg-ink hover:text-white"
                  >
                    <Icon aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6 rounded-3xl bg-cream-soft p-6 md:p-8">
            <h3 className="text-2xl font-semibold md:text-3xl">Send us a message</h3>
            <ContactForm />
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
