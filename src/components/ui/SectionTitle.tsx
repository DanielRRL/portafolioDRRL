import { motion } from 'framer-motion'
import { bounceInLeftSimple } from '../../lib/motion'
import styles from './SectionTitle.module.css'

interface SectionTitleProps {
  label: string
  title: string
  description?: string
  center?: boolean
}

export default function SectionTitle({ label, title, description, center }: SectionTitleProps) {
  return (
    <motion.div
      className={`${styles.wrapper} ${center ? styles.center : ''}`}
      variants={bounceInLeftSimple}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
    >
      <span className={styles.eyebrow}>{label}</span>
      <h2 className={styles.title}>{title}</h2>
      {description && <p className={styles.description}>{description}</p>}
    </motion.div>
  )
}
