import type { ReactNode } from 'react'
import styles from './TechBadge.module.css'

interface TechBadgeProps {
  children: ReactNode
  icon?: ReactNode
}

export default function TechBadge({ children, icon }: TechBadgeProps) {
  return (
    <span className={styles.badge}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </span>
  )
}
