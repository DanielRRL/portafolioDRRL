import styles from './SectionTitle.module.css'

interface SectionTitleProps {
  label: string
  title: string
  description?: string
  center?: boolean
}

export default function SectionTitle({ label, title, description, center }: SectionTitleProps) {
  return (
    <div className={`${styles.wrapper} ${center ? styles.center : ''}`}>
      <span className={styles.eyebrow}>{label}</span>
      <h2 className={styles.title}>{title}</h2>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  )
}
