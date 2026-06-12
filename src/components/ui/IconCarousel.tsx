import techIcons from '../../data/techIcons'
import styles from './IconCarousel.module.css'

const ITEM_WIDTH = 64
const SET_WIDTH = techIcons.length * ITEM_WIDTH

export default function IconCarousel() {
  return (
    <div className={styles.carousel}>
      <div
        className={styles.track}
        style={{ '--set-width': `${SET_WIDTH}px` } as React.CSSProperties}
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
