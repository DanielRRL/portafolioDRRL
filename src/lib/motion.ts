import type { Transition, Variants } from 'framer-motion'

export const easeOut: Transition = { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] as const }
export const easeOutFast: Transition = { duration: 0.35, ease: [0.25, 0.4, 0.25, 1] as const }
export const easeOutSlow: Transition = { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as const }
export const easeOutCard: Transition = { duration: 0.45, ease: [0.25, 0.4, 0.25, 1] as const }
export const easeOutX: Transition = { duration: 0.4, ease: [0.25, 0.4, 0.25, 1] as const }
export const easeInOut: Transition = { duration: 0.35, ease: 'easeInOut' as const }

export const backInDown: Variants = {
  hidden: { opacity: 0, y: -80, rotateX: 8, scale: 0.94 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 140,
      damping: 14,
      mass: 0.9,
      delay: i * 0.08,
    },
  }),
}

export const backInDownSimple: Variants = {
  hidden: { opacity: 0, y: -16, scale: 0.98 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { ...easeOut, delay: i * 0.05 },
  }),
}

export const bounceInLeft: Variants = {
  hidden: { opacity: 0, x: -80 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 280,
      damping: 22,
      mass: 0.8,
      delay: i * 0.08,
    },
  }),
}

export const bounceInLeftSimple: Variants = {
  hidden: { opacity: 0, x: -12 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { ...easeOut, delay: i * 0.05 },
  }),
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: easeOutFast },
}

export const slideUpFade: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: easeOut },
}

export const cinematicLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] } },
}

export const cinematicRight: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] } },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.2, ease: [0.25, 0.4, 0.25, 1] } },
}
