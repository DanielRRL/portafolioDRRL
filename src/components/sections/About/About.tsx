import { Download, GraduationCap, MapPin, BookOpen } from 'lucide-react'
import { motion, type Variants } from 'framer-motion'
import SectionTitle from '../../ui/SectionTitle'
import Button from '../../ui/Button'
import { useLanguage } from '../../../context/LanguageContext'
import { getPortfolioData, t } from '../../../data/portfolio'
import { easeOut, bounceInLeft } from '../../../lib/motion'
import { useTilt } from '../../../hooks/useTilt'
import styles from './About.module.css'

const cardStagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const cardItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { ...easeOut, duration: 0.4 } },
}

export default function About() {
  const { lang } = useLanguage()
  const data = getPortfolioData(lang)
  const { tilt, onMouseMove, onMouseLeave } = useTilt(8)

  const pastelCards = [
    {
      icon: GraduationCap,
      labelKey: 'about.university' as const,
      value: data.university,
    },
    {
      icon: BookOpen,
      labelKey: 'about.semester' as const,
      value: data.semester,
    },
    {
      icon: MapPin,
      labelKey: 'about.location' as const,
      value: data.location,
    },
  ]

  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>
        <SectionTitle
          label={t('about.title', lang)}
          title={t('about.subtitle', lang)}
          description={t('about.description', lang)}
        />

        <div className={styles.grid}>
          <motion.div
            className={styles.tiltContainer}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={easeOut}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
          >
            <div
              className={styles.tiltInner}
              style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
            >
              <div className={styles.photoWrap}>
                <img
                  src="/DRRL.png"
                  alt="Daniel Ramón Reina López"
                  className={styles.photo}
                  loading="lazy"
                  decoding="async"
                  width="320"
                  height="320"
                />
                <div className={styles.photoFade} aria-hidden="true" />
              </div>
            </div>
          </motion.div>

          <div className={styles.rightCol}>
            <motion.div
              className={styles.textBlock}
              variants={bounceInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
            >
              {data.about.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </motion.div>

            <motion.div
              className={styles.pastelGrid}
              variants={cardStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              {pastelCards.map((card) => {
                const Icon = card.icon
                return (
                  <motion.div key={card.labelKey} className={styles.pastelCard} variants={cardItem}>
                    <Icon size={18} className={styles.pastelIcon} />
                    <div className={styles.pastelLabel}>{t(card.labelKey, lang)}</div>
                    <div className={styles.pastelValue}>{card.value}</div>
                  </motion.div>
                )
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              <a href={data.cvUrl} download>
                <Button variant="dark">
                  <Download size={18} />
                  {t('about.downloadCv', lang)}
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
