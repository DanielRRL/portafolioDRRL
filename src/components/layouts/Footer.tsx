import { Mail, MapPin } from 'lucide-react'
import { portfolioData } from '../../data/portfolio'
import styles from './Footer.module.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.circuitGrid} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.brandName}>
              {portfolioData.name.split(' ')[0]}
              <span className={styles.brandDot}>.</span>
            </div>
            <p className={styles.brandDesc}>{portfolioData.tagline}</p>
            <div className={styles.socialLinks}>
              <a
                href={portfolioData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="GitHub"
              >
                <img src="/github-icon.svg" alt="GitHub" className={styles.socialIconImg} />
              </a>
              <a
                href={portfolioData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="LinkedIn"
              >
                <img src="/linkedin.png" alt="LinkedIn" className={styles.socialIconImg} />
              </a>
              <a
                href={portfolioData.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Instagram"
              >
                <img src="/instagram.png" alt="Instagram" className={styles.socialIconImg} />
              </a>
            </div>
          </div>

          <div>
            <div className={styles.columnTitle}>Navegación</div>
            <div className={styles.linkList}>
              {portfolioData.navLinks.map(link => (
                <a key={link.href} href={link.href} className={styles.linkItem}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className={styles.columnTitle}>Contacto</div>
            <div className={styles.contactInfo}>
              <span className={styles.contactRow}>
                <Mail className={styles.contactIcon} />
                {portfolioData.email}
              </span>
              <span className={styles.contactRow}>
                <Mail className={styles.contactIcon} />
                {portfolioData.emailSecondary}
              </span>
              <span className={styles.contactRow}>
                <MapPin className={styles.contactIcon} />
                {portfolioData.location}
              </span>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <span className={styles.copyright}>
            &copy; {currentYear} {portfolioData.name}. Todos los derechos reservados.
          </span>
          <span className={styles.madeWith}>
            Hecho con <span className={styles.heart}>&#9829;</span> y React
          </span>
        </div>
      </div>
    </footer>
  )
}
