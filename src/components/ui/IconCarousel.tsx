import { useEffect, useRef, useState } from 'react'
import techIcons from '../../data/techIcons'
import styles from './IconCarousel.module.css'

const ITEM_WIDTH = 64
const SET_WIDTH = techIcons.length * ITEM_WIDTH
const SPEED = 0.5

export default function IconCarousel() {
  const [offset, setOffset] = useState(0)
  const frameRef = useRef<number>(0)
  const lastTimeRef = useRef<number>(0)
  const pausedRef = useRef(false)

  useEffect(() => {
    const animate = (time: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = time
      const delta = time - lastTimeRef.current
      lastTimeRef.current = time

      if (!pausedRef.current) {
        setOffset(prev => {
          const next = prev - (delta * SPEED) / 16
          return next <= -SET_WIDTH ? next + SET_WIDTH : next
        })
      }

      frameRef.current = requestAnimationFrame(animate)
    }

    frameRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frameRef.current)
  }, [])

  return (
    <div
      className={styles.carousel}
      onMouseEnter={() => { pausedRef.current = true }}
      onMouseLeave={() => { pausedRef.current = false }}
    >
      <div
        className={styles.track}
        style={{ transform: `translateX(${offset}px)` }}
      >
        {techIcons.concat(techIcons).map((tech, i) => (
          <div
            key={i}
            className={styles.iconWrap}
            style={{ animationDelay: `${(i % 5) * 0.4}s` }}
            title={tech.name}
          >
            <div
              className={styles.icon}
              dangerouslySetInnerHTML={{ __html: tech.svg }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
