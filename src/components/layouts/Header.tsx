import { useState } from 'react'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'
import { useScrollPosition } from '../../hooks/useScrollPosition'
import { portfolioData } from '../../data/portfolio'
import Button from '../ui/Button'
import styles from './Header.module.css'

export default function Header() {
  const { theme, toggleTheme } = useTheme()
  const scrolled = useScrollPosition()
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.inner}>
          <a href="#hero" className={styles.logo}>
            &lt;<span className={styles.logoDot}>/</span>&gt;
          </a>

          <nav className={styles.nav}>
            {portfolioData.navLinks.map(link => (
              <a key={link.href} href={link.href} className={styles.navLink}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className={styles.actions}>
            <a href="#contact" className={styles.desktopCta}>
              <Button variant="secondary" size="small">
                Contactar
              </Button>
            </a>
            <button
              onClick={toggleTheme}
              className={styles.themeToggle}
              aria-label={theme === 'light' ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro'}
            >
              {theme === 'light' ? (
                <Moon className={styles.themeIcon} />
              ) : (
                <Sun className={styles.themeIcon} />
              )}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={styles.hamburger}
              aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {menuOpen ? (
                <X className={styles.hamburgerIcon} />
              ) : (
                <Menu className={styles.hamburgerIcon} />
              )}
            </button>
          </div>
        </div>
      </header>

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
        {portfolioData.navLinks.map(link => (
          <a
            key={link.href}
            href={link.href}
            className={styles.mobileNavLink}
            onClick={closeMenu}
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  )
}
