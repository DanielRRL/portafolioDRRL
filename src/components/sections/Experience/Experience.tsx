import { motion } from 'framer-motion'
import SectionTitle from '../../ui/SectionTitle'
import { useLanguage } from '../../../context/LanguageContext'
import { getPortfolioData, t } from '../../../data/portfolio'
import { bounceInLeft } from '../../../lib/motion'
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

        <div className={styles.timeline}>
          {data.experience.map((entry, i) => (
            <motion.div
              key={i}
              className={styles.entry}
              variants={bounceInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              custom={i}
            >
              <div className={styles.marker} aria-hidden="true" />
              <div className={styles.card}>
                <div className={styles.header}>
                  <h3 className={styles.title}>{entry.title}</h3>
                  <span className={styles.company}>{entry.company}</span>
                  <span className={styles.period}>{entry.period}</span>
                </div>
                <p className={styles.description}>{entry.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
