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

const TECH_ICONS = [
  { src: '/react.svg', label: 'React' },
  { src: '/typescript-icon.svg', label: 'TypeScript' },
  { src: '/nodejs-icon.svg', label: 'Node.js' },
  { src: '/python.svg', label: 'Python' },
  { src: '/java.svg', label: 'Java' },
  { src: '/go.svg', label: 'Go' },
  { src: '/dart.svg', label: 'Dart' },
  { src: '/php.svg', label: 'PHP' },
  { src: '/docker-icon.svg', label: 'Docker' },
  { src: '/postgresql.svg', label: 'PostgreSQL' },
  { src: '/mongodb-icon.svg', label: 'MongoDB' },
  { src: '/express.svg', label: 'Express' },
  { src: '/fastapi-icon.svg', label: 'FastAPI' },
  { src: '/spring.svg', label: 'Spring' },
  { src: '/gin.svg', label: 'Gin' },
  { src: '/flutter.svg', label: 'Flutter' },
  { src: '/linux-tux.svg', label: 'Linux' },
  { src: '/ubuntu.svg', label: 'Ubuntu' },
  { src: '/github-icon.svg', label: 'GitHub' },
]

const ORBIT_POSITIONS = [
  { left: 'calc(50% + 48%)', top: '50%' },
  { left: 'calc(50% + 45.40%)', top: 'calc(50% + 15.59%)' },
  { left: 'calc(50% + 37.88%)', top: 'calc(50% + 29.49%)' },
  { left: 'calc(50% + 26.24%)', top: 'calc(50% + 40.20%)' },
  { left: 'calc(50% + 11.84%)', top: 'calc(50% + 46.52%)' },
  { left: 'calc(50% - 3.96%)', top: 'calc(50% + 47.84%)' },
  { left: 'calc(50% - 19.30%)', top: 'calc(50% + 43.97%)' },
  { left: 'calc(50% - 32.50%)', top: 'calc(50% + 35.32%)' },
  { left: 'calc(50% - 42.24%)', top: 'calc(50% + 22.79%)' },
  { left: 'calc(50% - 47.33%)', top: 'calc(50% + 8.00%)' },
  { left: 'calc(50% - 47.33%)', top: 'calc(50% - 8.00%)' },
  { left: 'calc(50% - 42.24%)', top: 'calc(50% - 22.79%)' },
  { left: 'calc(50% - 32.50%)', top: 'calc(50% - 35.32%)' },
  { left: 'calc(50% - 19.30%)', top: 'calc(50% - 43.97%)' },
  { left: 'calc(50% - 3.96%)', top: 'calc(50% - 47.84%)' },
  { left: 'calc(50% + 11.84%)', top: 'calc(50% - 46.52%)' },
  { left: 'calc(50% + 26.24%)', top: 'calc(50% - 40.20%)' },
  { left: 'calc(50% + 37.88%)', top: 'calc(50% - 29.49%)' },
  { left: 'calc(50% + 45.40%)', top: 'calc(50% - 15.59%)' },
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
            {TECH_ICONS.map(({ src, label }, i) => (
              <div
                key={src}
                className={`${styles.orbitIcon} ${styles.counterSpin}`}
                style={{
                  left: ORBIT_POSITIONS[i].left,
                  top: ORBIT_POSITIONS[i].top,
                  animationDelay: `${-i * 1.895}s`,
                }}
                title={label}
              >
                <img
                  src={src}
                  alt={label}
                  className={styles.orbitSvg}
                  loading="lazy"
                  width="36"
                  height="36"
                />
              </div>
            ))}
          </div>
        </motion.div>

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
