import { motion } from 'framer-motion'
import SectionTitle from '../../ui/SectionTitle'
import { useLanguage } from '../../../context/LanguageContext'
import { getPortfolioData, t } from '../../../data/portfolio'
import { staggerContainer, staggerItem } from '../../../lib/motion'
import styles from './Experience.module.css'

export default function Experience() {
  const { lang } = useLanguage()
  const data = getPortfolioData(lang)

  return (
    <section id="experience" className={styles.section}>
      <div className={styles.inner}>
        <SectionTitle
          label={t('experience.label', lang)}
          title={t('experience.title', lang)}
          description={t('experience.description', lang)}
          center
        />

        <motion.div
          className={styles.timeline}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {data.experience.map((entry) => (
            <motion.div key={entry.title} className={styles.item} variants={staggerItem}>
              <div className={styles.dot} aria-hidden="true" />
              <h3 className={styles.title}>{entry.title}</h3>
              <div className={styles.meta}>
                <span className={styles.company}>{entry.company}</span>
                <span className={styles.period}>{entry.period}</span>
              </div>
              <p className={styles.description}>{entry.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
