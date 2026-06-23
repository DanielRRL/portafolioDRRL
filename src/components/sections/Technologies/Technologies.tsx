import { Monitor, Server, Database, Cloud, Shield, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionTitle from '../../ui/SectionTitle'
import ClosingPlasma from '../../ui/ClosingPlasma'
import { useLanguage } from '../../../context/LanguageContext'
import { getPortfolioData, t, techCategoryLabel } from '../../../data/portfolio'
import { staggerContainer, staggerItem } from '../../../lib/motion'
import styles from './Technologies.module.css'

const categoryIcons: Record<string, typeof Monitor> = {
  frontend: Monitor,
  backend: Server,
  database: Database,
  devops: Cloud,
  auth: Shield,
  ai: Sparkles,
}

const orbitIcons = [
  { Icon: Monitor, label: 'Frontend' },
  { Icon: Server, label: 'Backend' },
  { Icon: Database, label: 'Database' },
  { Icon: Cloud, label: 'DevOps' },
  { Icon: Shield, label: 'Auth' },
  { Icon: Sparkles, label: 'AI' },
]

const ORBIT_POSITIONS = [
  { left: 'calc(50% + 48%)', top: '50%' },
  { left: 'calc(50% + 24%)', top: 'calc(50% + 41.569%)' },
  { left: 'calc(50% - 24%)', top: 'calc(50% + 41.569%)' },
  { left: 'calc(50% - 48%)', top: '50%' },
  { left: 'calc(50% - 24%)', top: 'calc(50% - 41.569%)' },
  { left: 'calc(50% + 24%)', top: 'calc(50% - 41.569%)' },
]

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

        {/* Orbit */}
        <motion.div
          className={styles.orbitSection}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <div className={`${styles.orbitRing} ${styles.spinning}`}>
            <div className={styles.orbitPhoto}>
              <img
                src="/DRRL.png"
                alt="Daniel Ramón Reina López"
                className={styles.orbitImg}
                loading="lazy"
                width="200"
                height="200"
              />
            </div>
            {orbitIcons.map(({ Icon, label }, i) => (
              <div
                key={label}
                className={`${styles.orbitIcon} ${styles.counterSpin}`}
                style={{
                  left: ORBIT_POSITIONS[i].left,
                  top: ORBIT_POSITIONS[i].top,
                  transform: 'translate(-50%, -50%)',
                  animationDelay: `${-i * 6}s`,
                }}
                title={label}
              >
                <Icon size={22} />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Category Cards */}
        <motion.div
          className={styles.categories}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {Object.entries(data.technologies).map(([cat, techs]) => {
            const CatIcon = categoryIcons[cat] ?? Monitor
            return (
              <motion.div key={cat} className={styles.categoryCard} variants={staggerItem}>
                <div className={styles.categoryLabel}>
                  {techCategoryLabel(cat, lang)}
                </div>
                <div className={styles.chipGrid}>
                  {techs.map(tech => (
                    <span key={tech} className={styles.chip}>
                      <CatIcon size={14} className={styles.chipIcon} />
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
