import { Mail, MapPin } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import { getPortfolioData, t } from '../../data/portfolio'
import styles from './Footer.module.css'

export default function Footer() {
  const { lang } = useLanguage()
  const data = getPortfolioData(lang)
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.circuitGrid} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.brandName}>
              {data.name.split(' ')[0]}
              <span className={styles.brandDot}>.</span>
            </div>
            <p className={styles.brandDesc}>{data.tagline}</p>
            <div className={styles.socialLinks}>
              <a
                href={data.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="GitHub"
              >
                <img src="/github-icon.svg" alt="GitHub" className={styles.socialIconImg} />
              </a>
              <a
                href={data.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="LinkedIn"
              >
                <img src="/linkedin.webp" alt="LinkedIn" className={styles.socialIconImg} width="24" height="24" />
              </a>
              <a
                href={data.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Instagram"
              >
                <img src="/instagram.webp" alt="Instagram" className={styles.socialIconImg} width="24" height="24" />
              </a>
            </div>
          </div>

          <div>
            <div className={styles.columnTitle}>{t('footer.nav', lang)}</div>
            <div className={styles.linkList}>
              {data.navLinks.map(link => (
                <a key={link.href} href={link.href} className={styles.linkItem}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className={styles.columnTitle}>{t('footer.contact', lang)}</div>
            <div className={styles.contactInfo}>
              <span className={styles.contactRow}>
                <Mail className={styles.contactIcon} />
                {data.email}
              </span>
              <span className={styles.contactRow}>
                <Mail className={styles.contactIcon} />
                {data.emailSecondary}
              </span>
              <span className={styles.contactRow}>
                <MapPin className={styles.contactIcon} />
                {data.location}
              </span>
            </div>  
          </div>
        </div>

        <div className={styles.bottom}>
          <span className={styles.copyright}>
            &copy; {currentYear} {data.name}. {t('footer.rights', lang)}
          </span>
          <span className={styles.madeWith}>
            {t('footer.madeWith', lang)} <span className={styles.heart}>&#9829;</span> y React
          </span>
        </div>
      </div>
    </footer>
  )
}
