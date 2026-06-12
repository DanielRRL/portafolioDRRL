import { useState, useEffect, useCallback, useRef } from 'react'
import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import { t } from '../../data/portfolio'
import styles from './Carousel.module.css'

interface CarouselProps {
  items: ReactNode[]
  interval?: number
}

const SWIPE_THRESHOLD = 50

export default function Carousel({ items, interval = 3000 }: CarouselProps) {
  const { lang } = useLanguage()
  const [index, setIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(2)
  const [isPaused, setIsPaused] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval>>(null)
  const touchStartX = useRef(0)
  const touchStartY = useRef(0)

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

  const maxIndex = Math.max(0, items.length - itemsPerView)

  const advance = useCallback(() => {
    setIndex(prev => (prev >= maxIndex ? 0 : prev + 1))
  }, [maxIndex])

  useEffect(() => {
    if (isPaused) {
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
    setIsPaused(true)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current
    const dy = e.changedTouches[0].clientY - touchStartY.current

    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > SWIPE_THRESHOLD) {
      if (dx < 0 && index < maxIndex) {
        setIndex(prev => prev + 1)
      } else if (dx > 0 && index > 0) {
        setIndex(prev => prev - 1)
      }
    }

    setIsPaused(false)
  }

  const step = 100 / itemsPerView

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
        <motion.div
          className={styles.track}
          animate={{ x: `${-step * index}%` }}
          transition={{ type: 'spring', stiffness: 200, damping: 26, mass: 1 }}
        >
          {items.map((item, i) => (
            <div key={i} className={styles.slide} style={{ flex: `0 0 ${step}%` }}>
              {item}
            </div>
          ))}
        </motion.div>
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
