import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronUp } from 'lucide-react'
import { scaleIn } from '../../lib/motion'
import styles from './ScrollToTop.module.css'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setVisible(window.scrollY > 400)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className={styles.wrapper}
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
        >
          <button className={styles.btn} onClick={scrollToTop} aria-label="Scroll to top">
            <ChevronUp size={20} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
