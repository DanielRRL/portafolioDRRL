import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { ReactNode } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import { t } from '../../data/portfolio'
import { easeInOut } from '../../lib/motion'
import styles from './Carousel.module.css'

interface CarouselProps {
  items: ReactNode[]
  interval?: number
}

const SWIPE_THRESHOLD = 50

export default function Carousel({ items, interval = 5000 }: CarouselProps) {
  const { lang } = useLanguage()
  const [index, setIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(2)
  const [isPaused, setIsPaused] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval>>(null)
  const touchStartX = useRef(0)
  const touchStartY = useRef(0)
  const touchActive = useRef(false)

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth
      if (w >= 640) setItemsPerView(2)
      else setItemsPerView(1)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const maxIndex = Math.max(0, Math.ceil(items.length / itemsPerView) - 1)

  const advance = useCallback(() => {
    setIndex(prev => (prev >= maxIndex ? 0 : prev + 1))
  }, [maxIndex])

  useEffect(() => {
    if (isPaused || touchActive.current) {
      if (timerRef.current) clearInterval(timerRef.current)
      return
    }
    timerRef.current = setInterval(advance, interval)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [advance, interval, isPaused])

  const goTo = (i: number) => setIndex(i)

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    touchStartY.current = e.touches[0].clientY
    touchActive.current = true
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current
    const dy = e.changedTouches[0].clientY - touchStartY.current
    touchActive.current = false

    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > SWIPE_THRESHOLD) {
      if (dx < 0 && index < maxIndex) {
        setIndex(prev => prev + 1)
      } else if (dx > 0 && index > 0) {
        setIndex(prev => prev - 1)
      }
    }
  }

  const pageItems = itemsPerView === 1
    ? [[items[index]]]
    : (() => {
        const start = index * itemsPerView
        return [[items[start], items[start + 1] ?? null]]
      })()

  if (items.length === 0) return null

  return (
    <div
      className={styles.carousel}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className={styles.viewport}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className={styles.page}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={easeInOut}
          >
            {pageItems[0].map((item, i) => (
              <div key={i} className={styles.slide}>
                {item}
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {maxIndex > 0 && (
        <div className={styles.dots}>
          {Array.from({ length: maxIndex + 1 }, (_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === index ? styles.dotActive : ''}`}
              onClick={() => goTo(i)}
              aria-label={`${t('carousel.goto', lang)} ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
