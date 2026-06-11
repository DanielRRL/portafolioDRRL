import type { Transition, Variants } from 'framer-motion'

export const easeOut: Transition = { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] as const }
export const easeOutFast: Transition = { duration: 0.35, ease: [0.25, 0.4, 0.25, 1] as const }
export const easeOutSlow: Transition = { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as const }
export const easeOutCard: Transition = { duration: 0.45, ease: [0.25, 0.4, 0.25, 1] as const }
export const easeOutX: Transition = { duration: 0.4, ease: [0.25, 0.4, 0.25, 1] as const }

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
