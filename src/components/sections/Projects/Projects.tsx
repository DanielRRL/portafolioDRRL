import { motion, type Variants } from 'framer-motion'
import SectionTitle from '../../ui/SectionTitle'
import ProjectCard from '../../ui/ProjectCard'
import { portfolioData } from '../../../data/portfolio'
import { easeOutCard } from '../../../lib/motion'
import styles from './Projects.module.css'

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

const card: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: easeOutCard },
}

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.inner}>
        <SectionTitle
          label="Proyectos"
          title="Trabajo destacado"
          description="Una selección de proyectos que reflejan mi experiencia y pasión por el desarrollo de software."
          center
        />

        <motion.div
          className={styles.grid}
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {portfolioData.projects.map(project => (
            <motion.div key={project.title} variants={card}>
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
