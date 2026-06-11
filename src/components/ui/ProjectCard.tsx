import { ExternalLink, Code2 } from 'lucide-react'
import styles from './ProjectCard.module.css'

interface ProjectCardProps {
  title: string
  description: string
  image?: string
  technologies: readonly string[]
  github?: string
  demo?: string
}

export default function ProjectCard({
  title,
  description,
  technologies,
  github,
  demo,
}: ProjectCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <div className={styles.imagePlaceholder}>
          {title.slice(0, 2).toUpperCase()}
        </div>
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.techList}>
          {technologies.map(tech => (
            <span key={tech} className={styles.techItem}>
              {tech}
            </span>
          ))}
        </div>
        <div className={styles.links}>
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className={styles.link}>
              <Code2 className={styles.linkIcon} />
              Código
            </a>
          )}
          {demo && (
            <a href={demo} target="_blank" rel="noopener noreferrer" className={styles.link}>
              <ExternalLink className={styles.linkIcon} />
              Demo
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
