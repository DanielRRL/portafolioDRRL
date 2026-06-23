import { useState, useEffect, useRef, useCallback } from 'react'
import { Code2, MessageCircle, ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'
import { useLanguage } from '../../../context/LanguageContext'
import { getPortfolioData, t } from '../../../data/portfolio'
import { cinematicLeft } from '../../../lib/motion'
import styles from './Hero.module.css'

const MARQUEE_ICONS = [
  '/react.svg',
  '/typescript-icon.svg',
  '/nodejs-icon.svg',
  '/python.svg',
  '/java.svg',
  '/go.svg',
  '/dart.svg',
  '/php.svg',
  '/docker-icon.svg',
  '/postgresql.svg',
  '/mongodb-icon.svg',
  '/express.svg',
  '/fastapi-icon.svg',
  '/spring.svg',
  '/gin.svg',
  '/flutter.svg',
  '/linux-tux.svg',
  '/ubuntu.svg',
  '/github-icon.svg',
]

const ROLES = [
  'Desarrollador Full Stack',
  'Desarrollador React',
  'Entusiasta de IA',
  'Desarrollador Backend',
]

const TYPE_SPEED = 80
const ERASE_SPEED = 40
const PAUSE_TIME = 2000

export default function Hero() {
  const { lang } = useLanguage()
  const data = getPortfolioData(lang)

  const [displayText, setDisplayText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const timeoutRef = useRef<number>(0)

  const tick = useCallback(() => {
    const currentRole = ROLES[roleIndex]

    if (!isDeleting) {
      const next = currentRole.slice(0, displayText.length + 1)
      if (next === currentRole) {
        timeoutRef.current = window.setTimeout(() => setIsDeleting(true), PAUSE_TIME)
      } else {
        timeoutRef.current = window.setTimeout(() => {}, TYPE_SPEED)
      }
      setDisplayText(next)
    } else {
      const next = currentRole.slice(0, displayText.length - 1)
      if (next === '') {
        setIsDeleting(false)
        setRoleIndex(prev => (prev + 1) % ROLES.length)
        timeoutRef.current = window.setTimeout(() => {}, 200)
      } else {
        timeoutRef.current = window.setTimeout(() => {}, ERASE_SPEED)
      }
      setDisplayText(next)
    }
  }, [displayText, isDeleting, roleIndex])

  useEffect(() => {
    const delay = isDeleting ? ERASE_SPEED : displayText === '' ? 200 : TYPE_SPEED
    timeoutRef.current = window.setTimeout(tick, delay)
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [tick, displayText, isDeleting])

  const scrollToAbout = () => {
    const el = document.querySelector('#about')
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  const iconSize = 18

  return (
    <section id="hero" className={styles.hero}>
      <img
        src="/paronamica.webp"
        alt=""
        className={styles.bgImage}
        aria-hidden="true"
        loading="eager"
        fetchPriority="high"
        width="1920"
        height="1080"
      />
      <div className={styles.imageOverlay} aria-hidden="true" />
      <div className={styles.imageFade} aria-hidden="true" />

      <div className={styles.inner}>
        <motion.div
          className={styles.content}
          variants={cinematicLeft}
          initial="hidden"
          animate="visible"
        >
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot} aria-hidden="true" />
            {t('hero.eyebrow', lang)}
          </div>

          <h1 className={styles.headline}>{data.name}</h1>

          <span className={styles.typewriter}>
            {displayText}
            <span className={styles.cursor}>|</span>
          </span>

          <div className={styles.ctas}>
            <a href="#projects" className={styles.darkBtn}>
              <Code2 size={iconSize} />
              {t('hero.projectsBtn', lang)}
            </a>
            <a href="#contact" className={styles.whiteBtn}>
              <MessageCircle size={iconSize} />
              {t('hero.contactBtn', lang)}
            </a>
          </div>

          <div className={styles.socialLinks}>
            <a
              href={data.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="GitHub"
            >
              <img src="/github-icon.svg" alt="" width="20" height="20" />
            </a>
            <a
              href={data.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="LinkedIn"
            >
              <img src="/linkedin.png" alt="" width="20" height="20" />
            </a>
            <a
              href={data.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Instagram"
            >
              <img src="/instagram.png" alt="" width="20" height="20" />
            </a>
          </div>

          <div className={styles.marqueeWrap}>
            <div className={styles.marqueeTrack}>
              {MARQUEE_ICONS.concat(MARQUEE_ICONS).map((src, i) => (
                <span key={i} className={styles.marqueeIcon}>
                  <img src={src} alt="" width="30" height="30" loading="lazy" />
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <button
        className={styles.scrollIndicator}
        onClick={scrollToAbout}
        aria-label="Scroll to about"
      >
        <ChevronDown size={18} />
      </button>
    </section>
  )
}
