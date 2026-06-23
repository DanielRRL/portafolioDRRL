import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Home, User, Monitor, Briefcase, Clock, Mail, Menu, X, Sun, Moon } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import { useTheme } from '../../context/ThemeContext'
import { getPortfolioData } from '../../data/portfolio'
import styles from './Nav.module.css'

const navIcons = [Home, User, Monitor, Briefcase, Clock, Mail]

export default function Nav() {
  const { lang, toggleLang } = useLanguage()
  const { theme, toggleTheme } = useTheme()
  const [expanded, setExpanded] = useState(false)
  const [active, setActive] = useState<string>('#hero')
  const navRef = useRef<HTMLElement>(null)
  const data = getPortfolioData(lang)

  useEffect(() => {
    const sections = data.navHrefs.map(h => h.slice(1))
    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`)
          }
        }
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )

    sections.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [data.navHrefs])

  useEffect(() => {
    if (!expanded) return
    const handleClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setExpanded(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [expanded])

  const scrollTo = useCallback((href: string) => {
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
    setExpanded(false)
  }, [])

  const isExpanded = expanded ? styles.expanded : ''

  return (
    <nav ref={navRef} className={`${styles.pill} ${isExpanded}`}>
      <motion.button
        className={styles.toggle}
        onClick={() => setExpanded(prev => !prev)}
        aria-label={expanded ? 'Close menu' : 'Open menu'}
        whileTap={{ scale: 0.9 }}
      >
        {expanded ? <X size={20} /> : <Menu size={20} />}
      </motion.button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            className={styles.inner}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
          >
            <motion.button
              key={`theme-${theme}`}
              className={styles.action}
              onClick={toggleTheme}
              initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>

            <motion.hr
              className={styles.divider}
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              transition={{ duration: 0.15 }}
            />

            {data.navHrefs.map((href, i) => {
              const Icon = navIcons[i]
              return (
                <motion.button
                  key={href}
                  className={`${styles.navItem} ${active === href ? styles.active : ''}`}
                  onClick={() => scrollTo(href)}
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.03, duration: 0.2 }}
                  aria-label={data.navLinks[i]?.label ?? href}
                  title={data.navLinks[i]?.label}
                >
                  <Icon size={18} />
                </motion.button>
              )
            })}

            <motion.hr
              className={styles.divider}
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              transition={{ duration: 0.15 }}
            />

            <motion.button
              className={styles.langBtn}
              onClick={toggleLang}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: data.navHrefs.length * 0.03, duration: 0.2 }}
              aria-label="Toggle language"
            >
              {lang.toUpperCase()}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
