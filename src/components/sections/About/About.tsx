import { Download, GraduationCap, MapPin, BookOpen } from 'lucide-react'
import { motion, type Variants } from 'framer-motion'
import SectionTitle from '../../ui/SectionTitle'
import Button from '../../ui/Button'
import { portfolioData } from '../../../data/portfolio'
import { easeOut } from '../../../lib/motion'
import styles from './About.module.css'

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: easeOut },
}

export default function About() {
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
            className={styles.textBlock}
            variants={fadeIn}
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
              <div className={styles.pastelCard}>
                <Download size={18} className={styles.pastelIcon} />
                <div className={styles.pastelLabel}>Curriculum</div>
                <a href={portfolioData.cvUrl} download className={styles.pastelValue} style={{ color: 'var(--color-primary)' }}>
                  Descargar CV
                </a>
              </div>
            </div>
            <div className={styles.cvButton}>
              <a href={portfolioData.cvUrl} download>
                <Button variant="dark">
                  <Download size={18} />
                  Descargar CV
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
