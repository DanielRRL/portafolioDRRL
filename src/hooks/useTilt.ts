import { useState, useCallback } from 'react'

export function useTilt(maxDeg = 8) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const el = e.currentTarget as HTMLElement
      const rect = el.getBoundingClientRect()
      const cx = (e.clientX - rect.left) / rect.width - 0.5
      const cy = (e.clientY - rect.top) / rect.height - 0.5
      setTilt({ x: cy * -maxDeg, y: cx * maxDeg })
    },
    [maxDeg],
  )

  const onMouseLeave = useCallback(() => setTilt({ x: 0, y: 0 }), [])

  return { tilt, onMouseMove, onMouseLeave }
}
