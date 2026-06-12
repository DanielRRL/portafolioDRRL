import { useState } from 'react'
import { Sun, Moon, Menu, X, Languages } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'
import { useLanguage } from '../../context/LanguageContext'
import { useScrollPosition } from '../../hooks/useScrollPosition'
import { getPortfolioData, t } from '../../data/portfolio'
import Button from '../ui/Button'
import styles from './Header.module.css'

export default function Header() {
  const { theme, toggleTheme } = useTheme()
  const { lang, toggleLang } = useLanguage()
  const scrolled = useScrollPosition()
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)
  const data = getPortfolioData(lang)

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.inner}>
          <a href="#hero" className={styles.logo}>
            &lt;<span className={styles.logoDot}>/</span>&gt;
          </a>

          <nav className={styles.nav}>
            {data.navLinks.map(link => (
              <a key={link.href} href={link.href} className={styles.navLink}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className={styles.actions}>
            <a href="#contact" className={styles.desktopCta}>
              <Button variant="secondary" size="small">
                {t('header.contactBtn', lang)}
              </Button>
            </a>
            <button
              onClick={toggleLang}
              className={styles.themeToggle}
              aria-label={t('header.langSwitch', lang)}
            >
              <Languages className={styles.themeIcon} />
              <span className={styles.langLabel}>{lang.toUpperCase()}</span>
            </button>
            <button
              onClick={toggleTheme}
              className={styles.themeToggle}
              aria-label={theme === 'light' ? t('header.themeDark', lang) : t('header.themeLight', lang)}
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
              aria-label={menuOpen ? t('header.menuClose', lang) : t('header.menuOpen', lang)}
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
        {data.navLinks.map(link => (
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
