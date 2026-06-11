import { motion } from 'framer-motion'
import SectionTitle from '../../ui/SectionTitle'
import { portfolioData } from '../../../data/portfolio'
import { bounceInLeft } from '../../../lib/motion'
import styles from './Experience.module.css'

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.inner}>
        <SectionTitle
          label="Experiencia"
          title="Trayectoria profesional"
          description="Mi camino en el desarrollo de software."
        />

        <div className={styles.timeline}>
          {portfolioData.experience.map((exp, i) => (
            <motion.div
              key={exp.title + exp.company}
              className={styles.item}
              variants={bounceInLeft}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
            >
              <div className={styles.dot} aria-hidden="true" />
              <h3 className={styles.title}>{exp.title}</h3>
              <div className={styles.meta}>
                <span className={styles.company}>{exp.company}</span>
                <span className={styles.period}>{exp.period}</span>
              </div>
              <p className={styles.description}>{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
