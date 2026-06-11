import { Monitor, Server, Database, Cloud } from 'lucide-react'
import { motion, type Variants } from 'framer-motion'
import SectionTitle from '../../ui/SectionTitle'
import { portfolioData } from '../../../data/portfolio'
import { easeOutFast } from '../../../lib/motion'
import styles from './Technologies.module.css'

const categoryIcons: Record<string, typeof Monitor> = {
  frontend: Monitor,
  backend: Server,
  database: Database,
  devops: Cloud,
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
  return (
    <section id="technologies" className={styles.section}>
      <div className={styles.inner}>
        <SectionTitle
          label="Tecnologías"
          title="Stack tecnológico"
          description="Herramientas y tecnologías con las que trabajo día a día."
          center
        />

        {Object.entries(portfolioData.technologies).map(([category, techs]) => {
          const Icon = categoryIcons[category] ?? Monitor
          return (
            <motion.div
              key={category}
              className={styles.category}
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              <div className={styles.categoryLabel}>
                {category === 'frontend' && 'Frontend'}
                {category === 'backend' && 'Backend'}
                {category === 'database' && 'Bases de Datos'}
                {category === 'devops' && 'DevOps & Infra'}
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
