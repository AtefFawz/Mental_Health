import Image from "next/image";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { LuMail } from "react-icons/lu";
import footerArt from "@/assets/images/footer-rainbow.png";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { NAV_ITEMS } from "@/content/navigation";
import { site } from "@/lib/site";

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: site.author.linkedin, Icon: FaLinkedinIn },
  { label: "GitHub", href: site.author.github, Icon: FaGithub },
  { label: "Email", href: `mailto:${site.contact.email}`, Icon: LuMail },
] as const;

const YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-6xl px-4 pt-6 pb-10 md:px-6">
      <div className="grid gap-6 md:grid-cols-2">
        <Reveal direction="left" className="order-2 md:order-1">
          <div className="flex h-full flex-col justify-between gap-8 rounded-4xl bg-white p-8 shadow-sm">
            <p className="font-display text-3xl font-bold">{site.name}</p>

            <nav aria-label="Footer">
              <ul className="flex flex-wrap gap-x-6 gap-y-3 text-lg">
                {NAV_ITEMS.filter((item) => item.id !== "home").map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} className="hover:underline">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <ul className="flex gap-3">
              {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    target={href.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="grid size-11 place-items-center rounded-full bg-canvas text-xl transition hover:bg-ink hover:text-white"
                  >
                    <Icon aria-hidden />
                  </a>
                </li>
              ))}
            </ul>

            <div className="space-y-2 text-sm text-ink-muted">
              <p>
                {site.name} is a portfolio project, not a medical service. If you are in crisis or in
                danger, contact your local emergency number or a crisis line right away.
              </p>
              <p>
                © {YEAR} {site.name}. Designed &amp; built by{" "}
                <a
                  href={site.author.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline underline-offset-2"
                >
                  {site.author.name}
                </a>
                .
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal direction="right" className="order-1 md:order-2">
          <div className="relative flex h-full min-h-80 flex-col justify-between gap-8 overflow-hidden rounded-4xl bg-ink p-8 text-white shadow-sm">
            <h2 className="max-w-[16ch] font-display text-3xl leading-tight font-semibold md:text-4xl">
              Find support, guidance, and balance.
            </h2>
            <Image
              src={footerArt}
              alt=""
              aria-hidden
              sizes="(min-width: 768px) 14rem, 10rem"
              className="pointer-events-none absolute top-0 right-0 h-40 w-auto md:h-52"
            />
            <Button href="#therapists" variant="light" size="lg" className="self-start">
              Find support now
            </Button>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
