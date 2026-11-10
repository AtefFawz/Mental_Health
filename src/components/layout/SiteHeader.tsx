"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { navigation } from "@/lib/site-config";

export function SiteHeader() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const sectionIds = ["home", ...navigation.map((item) => item.id), "contact", "project"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          const nextSection = visible[0].target.id;
          setActiveSection(nextSection === "project" ? "contact" : nextSection);
        }
      },
      { rootMargin: "-22% 0px -62% 0px", threshold: [0, 0.15, 0.35, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));
    const handleScroll = () => {
      if (window.scrollY < 180) setActiveSection("home");
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header-wrap">
      <motion.div
        className="site-header container"
        initial={reduceMotion ? false : { opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <Link href="#home" className="brand" aria-label="Solus home" onClick={closeMenu}>
          <span className="brand__mark" aria-hidden="true"><span /></span>
          <span className="brand__name">solus<span>.</span></span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link
              href={item.href}
              key={item.id}
              className={`nav-link ${activeSection === item.id ? "is-active" : ""}`}
              aria-current={activeSection === item.id ? "location" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#contact"
          className={`header-cta ${activeSection === "contact" ? "is-active" : ""}`}
          aria-current={activeSection === "contact" ? "location" : undefined}
        >
          Get in touch <span aria-hidden="true">↗</span>
        </Link>

        <button
          type="button"
          className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </motion.div>

      <AnimatePresence>
        {menuOpen ? (
          <>
            <motion.button
              type="button"
              className="mobile-menu-backdrop"
              aria-label="Close navigation menu"
              onClick={closeMenu}
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0 }}
            />
            <motion.nav
              id="mobile-navigation"
              className="mobile-nav"
              aria-label="Mobile navigation"
              initial={reduceMotion ? false : { opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: reduceMotion ? 0 : 0.2 }}
            >
              {navigation.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={reduceMotion ? false : { opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: reduceMotion ? 0 : index * 0.035 }}
                >
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className={`mobile-nav__link ${activeSection === item.id ? "is-active" : ""}`}
                    aria-current={activeSection === item.id ? "location" : undefined}
                  >
                    <span>{item.label}</span><span aria-hidden="true">↗</span>
                  </Link>
                </motion.div>
              ))}
              <Link href="#contact" onClick={closeMenu} className="button button--primary mobile-nav__cta">
                Get in touch <span aria-hidden="true">↗</span>
              </Link>
            </motion.nav>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
