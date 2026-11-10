"use client";

import { motion, type HTMLMotionProps } from "motion/react";

type Direction = "up" | "left" | "right" | "none";

const OFFSETS = {
  up: { y: 24 },
  left: { x: -32 },
  right: { x: 32 },
  none: {},
} as const;

interface RevealProps
  extends Omit<HTMLMotionProps<"div">, "initial" | "animate" | "whileInView" | "viewport"> {
  direction?: Direction;
  delay?: number;
}

/** Fades/slides content in once, the first time it scrolls into view. */
export function Reveal({
  direction = "up",
  delay = 0,
  transition,
  children,
  ...rest
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, ...OFFSETS[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay, ...transition }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
