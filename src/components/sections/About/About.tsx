import { Download, GraduationCap, MapPin, BookOpen } from 'lucide-react'
import { motion, type Variants } from 'framer-motion'
import SectionTitle from '../../ui/SectionTitle'
import Button from '../../ui/Button'
import { useLanguage } from '../../../context/LanguageContext'
import { getPortfolioData, t } from '../../../data/portfolio'
import { easeOut, bounceInLeft } from '../../../lib/motion'
import { useTilt } from '../../../hooks/useTilt'
import styles from './About.module.css'

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: easeOut },
}

export default function About() {
  const { lang } = useLanguage()
  const data = getPortfolioData(lang)
  const { tilt, onMouseMove, onMouseLeave } = useTilt(8)

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
                  src="/DRRL.webp"
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
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
            >
              <div className={styles.pastelGrid}>
                <div className={styles.pastelCard}>
                  <GraduationCap size={18} className={styles.pastelIcon} />
                  <div className={styles.pastelLabel}>{t('about.university', lang)}</div>
                  <div className={styles.pastelValue}>{data.university}</div>
                </div>
                <div className={styles.pastelCard}>
                  <BookOpen size={18} className={styles.pastelIcon} />
                  <div className={styles.pastelLabel}>{t('about.semester', lang)}</div>
                  <div className={styles.pastelValue}>{data.semester}</div>
                </div>
                <div className={styles.pastelCard}>
                  <MapPin size={18} className={styles.pastelIcon} />
                  <div className={styles.pastelLabel}>{t('about.location', lang)}</div>
                  <div className={styles.pastelValue}>{data.location}</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
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
