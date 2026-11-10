"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="home" className="hero-section section-anchor">
      <div className="hero-copy">
        <motion.p
          className="eyebrow eyebrow--light"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.5 }}
        >
          A LITTLE MORE ROOM TO BREATHE
        </motion.p>
        <motion.h1
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
        >
          Make space for <em>your</em> well-being.
        </motion.h1>
        <motion.p
          className="hero-description"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.34, duration: 0.65 }}
        >
          Thoughtful information, gentle everyday practices, and a clearer way to explore support — all at your own pace.
        </motion.p>
        <motion.div
          className="hero-actions"
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.46, duration: 0.55 }}
        >
          <Link href="#services" className="button button--light">Explore support <span aria-hidden="true">↗</span></Link>
          <Link href="#about" className="text-link text-link--light">Get to know Solus <span aria-hidden="true">→</span></Link>
        </motion.div>
        <motion.div
          className="hero-footnote"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75, duration: 0.6 }}
        >
          <span className="hero-footnote__dot" />
          <span>A student-built wellbeing website concept</span>
        </motion.div>
      </div>

      <div className="hero-art">
        <motion.div
          className="hero-art__halo"
          aria-hidden="true"
          animate={reduceMotion ? undefined : { rotate: 360 }}
          transition={reduceMotion ? { duration: 0 } : { duration: 48, ease: "linear", repeat: Infinity }}
        />
        <motion.div
          className="hero-art__main"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.88, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.25, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/images/solus/hero-illustration-1.webp"
            alt="Illustration of friendly shapes and faces representing different feelings"
            fill
            priority
            sizes="(max-width: 900px) 80vw, 42vw"
            className="hero-art__image"
          />
        </motion.div>
        <motion.div
          className="hero-art__side"
          initial={reduceMotion ? false : { opacity: 0, x: 28, y: 18 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 0.58, duration: 0.7 }}
        >
          <Image src="/images/solus/hero-illustration-2.webp" alt="Abstract heart and wellbeing illustration" fill sizes="150px" />
        </motion.div>
        <motion.div
          className="hero-note"
          animate={reduceMotion ? undefined : { y: [0, -7, 0] }}
          transition={reduceMotion ? { duration: 0 } : { duration: 5.5, ease: "easeInOut", repeat: Infinity }}
        >
          <span className="hero-note__symbol">✳</span>
          <span><strong>One step at a time.</strong><small>There is no perfect pace.</small></span>
        </motion.div>
      </div>
      <div className="hero-bottom-line" aria-hidden="true"><span /> Scroll to explore</div>
    </section>
  );
}
