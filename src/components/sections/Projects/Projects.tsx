import SectionTitle from '../../ui/SectionTitle'
import ProjectCard from '../../ui/ProjectCard'
import Carousel from '../../ui/Carousel'
import { portfolioData } from '../../../data/portfolio'
import styles from './Projects.module.css'

export default function Projects() {
  const cards = portfolioData.projects.map(project => (
    <ProjectCard key={project.title} {...project} />
  ))

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.inner}>
        <SectionTitle
          label="Proyectos"
          title="Trabajo destacado"
          description="Una selección de proyectos que reflejan mi experiencia y pasión por el desarrollo de software."
          center
        />

        <Carousel items={cards} interval={3000} />
      </div>
    </section>
  )
}
