import Link from "next/link";
import { navigation, siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand-block">
            <Link href="#home" className="brand brand--footer">
              <span className="brand__mark" aria-hidden="true"><span /></span>
              <span className="brand__name">solus<span>.</span></span>
            </Link>
            <p>A calmer place to begin exploring wellbeing.</p>
          </div>
          <div className="footer-links-wrap">
            <p className="footer-label">Explore</p>
            <div className="footer-links">
              {navigation.map((item) => (
                <Link href={item.href} key={item.id}>{item.label}</Link>
              ))}
              <Link href="#contact">Contact</Link>
            </div>
          </div>
          <div className="footer-contact">
            <p className="footer-label">Say hello</p>
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Solus. Student project.</span>
          <span className="footer-note">Educational concept · Not a clinical service</span>
          <Link href="#home" className="back-to-top">Back to top ↑</Link>
        </div>
        <p className="footer-disclaimer">
          Solus does not provide diagnosis, treatment, or emergency support and is not a substitute for care from a qualified professional.
        </p>
      </div>
    </footer>
  );
}
