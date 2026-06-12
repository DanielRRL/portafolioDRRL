import { Download, GraduationCap, MapPin, BookOpen } from 'lucide-react'
import { motion, type Variants } from 'framer-motion'
import SectionTitle from '../../ui/SectionTitle'
import Button from '../../ui/Button'
import { portfolioData } from '../../../data/portfolio'
import { easeOut, bounceInLeft } from '../../../lib/motion'
import { useTilt } from '../../../hooks/useTilt'
import styles from './About.module.css'

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: easeOut },
}

export default function About() {
  const { tilt, onMouseMove, onMouseLeave } = useTilt(8)

  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>
        <SectionTitle
          label="Sobre mí"
          title="Ingeniero de Software en formación"
          description="Un vistazo a quién soy y qué me impulsa a crear tecnología."
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
              {portfolioData.about.map((paragraph, i) => (
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
                  <div className={styles.pastelLabel}>Universidad</div>
                  <div className={styles.pastelValue}>{portfolioData.university}</div>
                </div>
                <div className={styles.pastelCard}>
                  <BookOpen size={18} className={styles.pastelIcon} />
                  <div className={styles.pastelLabel}>Semestre</div>
                  <div className={styles.pastelValue}>{portfolioData.semester}</div>
                </div>
                <div className={styles.pastelCard}>
                  <MapPin size={18} className={styles.pastelIcon} />
                  <div className={styles.pastelLabel}>Ubicación</div>
                  <div className={styles.pastelValue}>{portfolioData.location}</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <a href={portfolioData.cvUrl} download>
                <Button variant="dark">
                  <Download size={18} />
                  Descargar CV
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
