import { Code2, MessageCircle } from 'lucide-react'
import { motion, type Variants } from 'framer-motion'
import { portfolioData } from '../../../data/portfolio'
import { easeOut, backInDown, bounceInLeft } from '../../../lib/motion'
import IconCarousel from '../../ui/IconCarousel'
import styles from './Hero.module.css'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { ...easeOut, delay: i * 0.1 },
  }),
}

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <img
        src="/paronamica.png"
        alt=""
        className={styles.bgImage}
        aria-hidden="true"
      />
      <div className={styles.imageOverlay} aria-hidden="true" />
      <div className={styles.imageFade} aria-hidden="true" />

      <div className={styles.inner}>
        <motion.div
          className={styles.eyebrow}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          <span className={styles.eyebrowDot} aria-hidden="true" />
          Disponible para proyectos
        </motion.div>

        <motion.h1
          className={styles.headline}
          variants={backInDown}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          {portfolioData.name}
        </motion.h1>

        <motion.p
          className={styles.subhead}
          variants={bounceInLeft}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          {portfolioData.role} — {portfolioData.tagline}
        </motion.p>

        <motion.div
          className={styles.ctas}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          <a href="#projects" className={styles.darkBtn}>
            <Code2 size={18} />
            Ver Proyectos
          </a>
          <a href="#contact" className={styles.whiteBtn}>
            <MessageCircle size={18} />
            Contactarme
          </a>
        </motion.div>

        <motion.div
          className={styles.techRow}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          <IconCarousel />
        </motion.div>
      </div>
    </section>
  )
}
