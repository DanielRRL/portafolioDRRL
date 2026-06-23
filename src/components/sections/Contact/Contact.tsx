import { type FormEvent, useState, useEffect, useRef, useCallback } from 'react'
import { CheckCircle, Send, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionTitle from '../../ui/SectionTitle'
import Button from '../../ui/Button'
import { useLanguage } from '../../../context/LanguageContext'
import { getPortfolioData, t } from '../../../data/portfolio'
import { bounceInLeft, easeOut } from '../../../lib/motion'
import styles from './Contact.module.css'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

function useContactReveal() {
  const [revealed, setRevealed] = useState(false)
  const [everRevealed, setEverRevealed] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true)
          setEverRevealed(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3, rootMargin: '-40px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return { ref, show: revealed || everRevealed }
}

export default function Contact() {
  const { lang } = useLanguage()
  const data = getPortfolioData(lang)
  const { ref: panelRef, show } = useContactReveal()

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const validate = useCallback((): boolean => {
    const newErrors: FormErrors = {}
    if (!formData.name.trim()) newErrors.name = t('contact.error.name', lang)
    if (!formData.email.trim()) {
      newErrors.email = t('contact.error.email', lang)
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('contact.error.emailInvalid', lang)
    }
    if (!formData.message.trim()) newErrors.message = t('contact.error.message', lang)
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }, [formData, lang])

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => {
        const next = { ...prev }
        delete next[field as keyof FormErrors]
        return next
      })
    }
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1000)
  }

  if (submitted) {
    return (
      <section id="contact" className={styles.section}>
        <div className={styles.inner}>
          <motion.div
            className={styles.success}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={easeOut}
          >
            <CheckCircle className={styles.successIcon} />
            <h3 className={styles.successTitle}>{t('contact.success.title', lang)}</h3>
            <p className={styles.successText}>{t('contact.success.text', lang)}</p>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <SectionTitle
          label={t('contact.label', lang)}
          title={t('contact.title', lang)}
          description={t('contact.description', lang)}
          center
        />

        <div className={styles.grid}>
          {/* Contact Links Panel */}
          <div ref={panelRef} className={styles.contactPanel}>
            <a
              href={`mailto:${data.email}`}
              className={`${styles.contactLink} ${show ? styles.revealed : ''}`}
              style={{ transitionDelay: '0s' }}
            >
              <Mail size={20} className={styles.contactLinkIcon} />
              <div className={styles.contactLinkText}>
                <span className={styles.contactLinkLabel}>Email</span>
                <span className={styles.contactLinkValue}>{data.email}</span>
              </div>
            </a>
            <a
              href={data.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.contactLink} ${show ? styles.revealed : ''}`}
              style={{ transitionDelay: '0.1s' }}
            >
              <img src="/linkedin.png" alt="" width="20" height="20" className={styles.contactLinkIcon} />
              <div className={styles.contactLinkText}>
                <span className={styles.contactLinkLabel}>LinkedIn</span>
                <span className={styles.contactLinkValue}>Daniel Ramón Reina López</span>
              </div>
            </a>
            <a
              href={data.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.contactLink} ${show ? styles.revealed : ''}`}
              style={{ transitionDelay: '0.2s' }}
            >
              <img src="/github-icon.svg" alt="" width="20" height="20" className={styles.contactLinkIcon} />
              <div className={styles.contactLinkText}>
                <span className={styles.contactLinkLabel}>GitHub</span>
                <span className={styles.contactLinkValue}>@DanielRRL</span>
              </div>
            </a>
          </div>

          {/* Form */}
          <motion.form
            className={styles.form}
            onSubmit={handleSubmit}
            variants={bounceInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            noValidate
          >
            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="name" className={styles.label}>
                  {t('contact.name', lang)} <span className={styles.required}>*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                  placeholder={t('contact.namePlaceholder', lang)}
                  value={formData.name}
                  onChange={e => handleChange('name', e.target.value)}
                />
                {errors.name && <span className={styles.error}>{errors.name}</span>}
              </div>

              <div className={styles.field}>
                <label htmlFor="email" className={styles.label}>
                  {t('contact.email', lang)} <span className={styles.required}>*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                  placeholder={t('contact.emailPlaceholder', lang)}
                  value={formData.email}
                  onChange={e => handleChange('email', e.target.value)}
                />
                {errors.email && <span className={styles.error}>{errors.email}</span>}
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="subject" className={styles.label}>
                {t('contact.subject', lang)}
              </label>
              <input
                id="subject"
                type="text"
                className={styles.input}
                placeholder={t('contact.subjectPlaceholder', lang)}
                value={formData.subject}
                onChange={e => handleChange('subject', e.target.value)}
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="message" className={styles.label}>
                {t('contact.message', lang)} <span className={styles.required}>*</span>
              </label>
              <textarea
                id="message"
                className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                placeholder={t('contact.messagePlaceholder', lang)}
                value={formData.message}
                onChange={e => handleChange('message', e.target.value)}
              />
              {errors.message && <span className={styles.error}>{errors.message}</span>}
            </div>

            <Button type="submit" className={styles.submitBtn} disabled={loading}>
              {loading ? (
                <>
                  <span className={styles.spinner} />
                  {t('contact.sending', lang)}
                </>
              ) : (
                <>
                  <Send size={18} />
                  {t('contact.submit', lang)}
                </>
              )}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
