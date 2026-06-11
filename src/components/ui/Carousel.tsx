import { useState, useEffect, useCallback, useRef } from 'react'
import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import styles from './Carousel.module.css'

interface CarouselProps {
  items: ReactNode[]
  interval?: number
}

export default function Carousel({ items, interval = 3000 }: CarouselProps) {
  const [index, setIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(2)
  const timerRef = useRef<ReturnType<typeof setInterval>>(null)

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
    timerRef.current = setInterval(advance, interval)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [advance, interval])

  const pause = () => {
    if (timerRef.current) clearInterval(timerRef.current)
  }

  const resume = () => {
    timerRef.current = setInterval(advance, interval)
  }

  const goTo = (i: number) => setIndex(i)

  const step = 100 / itemsPerView

  if (items.length === 0) return null

  return (
    <div className={styles.carousel} onMouseEnter={pause} onMouseLeave={resume}>
      <div className={styles.viewport}>
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
              aria-label={`Ir a proyecto ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
