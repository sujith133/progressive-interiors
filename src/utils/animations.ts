import { useRef } from 'react'
import { useInView } from 'framer-motion'

/* ────────────────────────────────────────────
   Reusable animation variants
   ──────────────────────────────────────────── */

export const fadeUpVariant = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export const fadeLeftVariant = {
  hidden: { opacity: 0, x: -80, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export const fadeRightVariant = {
  hidden: { opacity: 0, x: 80, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export const scalePopVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
}

export const staggerChild = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
}

/* ── New animation variants ─────────────────── */

export const floatVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: [0, -8, 0],
    transition: {
      opacity: { duration: 0.6 },
      y: { duration: 4, repeat: Infinity, ease: 'easeInOut' as const },
    },
  },
}

export const glowPulseVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    boxShadow: [
      '0 0 0px rgba(248, 217, 132, 0)',
      '0 0 25px rgba(248, 217, 132, 0.4)',
      '0 0 0px rgba(248, 217, 132, 0)',
    ],
    transition: {
      opacity: { duration: 0.5 },
      scale: { duration: 0.5 },
      boxShadow: { duration: 3, repeat: Infinity, ease: 'easeInOut' as const },
    },
  },
}

export const textRevealVariant = {
  hidden: { opacity: 0, y: 80, rotateX: 40 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export const rotateInVariant = {
  hidden: { opacity: 0, rotate: -10, scale: 0.85 },
  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export const slideUpStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
}

export const slideUpChild = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
}

/* ────────────────────────────────────────────
   Hook: section in-view trigger
   ──────────────────────────────────────────── */
export function useSectionInView(amount = 0.2) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount })
  return { ref, inView }
}
