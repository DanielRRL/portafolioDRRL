import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../../ui/SectionTitle'
import { useLanguage } from '../../../context/LanguageContext'
import { getPortfolioData, t } from '../../../data/portfolio'
import { bounceInLeft } from '../../../lib/motion'
import Carousel from '../../ui/Carousel'
import ProjectCard from '../../ui/ProjectCard'
import styles from './Projects.module.css'

export default function Projects() {
  const { lang } = useLanguage()
  const data = getPortfolioData(lang)

  const projectCards: ReactNode[] = data.projects.map(project => (
    <ProjectCard
      key={project.title}
      title={project.title}
      description={project.description}
      image={project.image}
      technologies={project.technologies}
      github={project.github}
      demo={project.demo}
    />
  ))

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.inner}>
        <SectionTitle
          label={t('projects.label', lang)}
          title={t('projects.title', lang)}
          description={t('projects.description', lang)}
          center
        />

        <motion.div
          variants={bounceInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          <Carousel items={projectCards} />
        </motion.div>
      </div>
    </section>
  )
}
