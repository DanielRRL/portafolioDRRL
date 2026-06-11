import type { Transition } from 'framer-motion'

export const easeOut: Transition = { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] as const }
export const easeOutFast: Transition = { duration: 0.35, ease: [0.25, 0.4, 0.25, 1] as const }
export const easeOutSlow: Transition = { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as const }
export const easeOutCard: Transition = { duration: 0.45, ease: [0.25, 0.4, 0.25, 1] as const }
export const easeOutX: Transition = { duration: 0.4, ease: [0.25, 0.4, 0.25, 1] as const }
