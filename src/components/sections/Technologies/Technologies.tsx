import { Monitor, Server, Database, Cloud, Shield, Sparkles } from 'lucide-react'
import { motion, type Variants } from 'framer-motion'
import SectionTitle from '../../ui/SectionTitle'
import ClosingPlasma from '../../ui/ClosingPlasma'
import { useLanguage } from '../../../context/LanguageContext'
import { getPortfolioData, t, techCategoryLabel } from '../../../data/portfolio'
import { easeOutFast } from '../../../lib/motion'
import styles from './Technologies.module.css'

const categoryIcons: Record<string, typeof Monitor> = {
  frontend: Monitor,
  backend: Server,
  database: Database,
  devops: Cloud,
  auth: Shield,
  ai: Sparkles,
}

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05 },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: easeOutFast },
}

export default function Technologies() {
  const { lang } = useLanguage()
  const data = getPortfolioData(lang)

  return (
    <section id="technologies" className={styles.section}>
      <ClosingPlasma
        speed={0.7}
        turbulence={2}
        mouseInfluence={1}
        grain={0.8}
        sparkle={0.65}
        vignette={1}
        opacity={1}
        interactive
        darkColorA="#071217"
        darkColorB="#2b616e"
        darkColorC="#63d8d2"
        lightColorA="#f0f2f7"
        lightColorB="#d7dceb"
        lightColorC="#bcc5e0"
      />
      <div className={styles.fadeTop} />
      <div className={styles.fadeBottom} />
      <div className={styles.inner}>
        <SectionTitle
          label={t('tech.label', lang)}
          title={t('tech.title', lang)}
          description={t('tech.description', lang)}
          center
        />

        {Object.entries(data.technologies).map(([category, techs]) => {
          const Icon = categoryIcons[category] ?? Monitor
          return (
            <motion.div
              key={category}
              className={styles.category}
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
            >
              <div className={styles.categoryLabel}>
                {techCategoryLabel(category, lang)}
              </div>
              <motion.div className={styles.grid} variants={stagger}>
                {techs.map(tech => (
                  <motion.div key={tech} className={styles.techCard} variants={item}>
                    <Icon className={styles.techIcon} />
                    <span className={styles.techName}>{tech}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
