/**
 * Motion utilities that respect prefers-reduced-motion.
 * Use these instead of raw framer-motion variants to ensure
 * accessibility compliance.
 */

import type { Variants, Transition } from "framer-motion";

/** Check if the user prefers reduced motion (client-side only) */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Fade in variant - safe for reduced motion */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

/** Fade in + slide up variant */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

/** Fade in + slide from left */
export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 },
};

/** Scale in from 0 variant for line reveals */
export const scaleInX: Variants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1 },
};

/** Standard transition preset */
export const defaultTransition: Transition = {
  duration: 0.5,
  ease: [0.25, 0.1, 0.25, 1],
};

/** Slow transition for large elements */
export const slowTransition: Transition = {
  duration: 0.7,
  ease: [0.25, 0.1, 0.25, 1],
};

/** Stagger children container variant */
export function staggerContainer(staggerDelay = 0.08): Variants {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };
}

/** Get reduced-motion-safe initial/animate props */
export function getMotionProps(delay = 0) {
  if (typeof window !== "undefined" && prefersReducedMotion()) {
    return {
      initial: false as const,
      animate: undefined,
      whileInView: undefined,
      transition: { duration: 0 },
    };
  }
  return {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] },
  };
}

/** Get reduced-motion-safe props for items that animate on mount (not in-view) */
export function getMountMotionProps(delay = 0) {
  if (typeof window !== "undefined" && prefersReducedMotion()) {
    return {
      initial: false as const,
      animate: undefined,
      transition: { duration: 0 },
    };
  }
  return {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] },
  };
}
