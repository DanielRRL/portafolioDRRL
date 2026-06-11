import { type FormEvent, useState } from 'react'
import { CheckCircle, Loader2, Send } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionTitle from '../../ui/SectionTitle'
import Button from '../../ui/Button'
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

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const validate = (): boolean => {
    const newErrors: FormErrors = {}
    if (!formData.name.trim()) newErrors.name = 'El nombre es requerido'
    if (!formData.email.trim()) {
      newErrors.email = 'El correo es requerido'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Ingresa un correo válido'
    }
    if (!formData.message.trim()) newErrors.message = 'El mensaje es requerido'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

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
            <h3 className={styles.successTitle}>¡Mensaje enviado!</h3>
            <p className={styles.successText}>
              Gracias por contactarme. Te responderé lo antes posible.
            </p>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <SectionTitle
          label="Contacto"
          title="Hablemos"
          description="¿Tienes un proyecto en mente o quieres colaborar? Escríbeme."
          center
        />

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
                Nombre <span className={styles.required}>*</span>
              </label>
              <input
                id="name"
                type="text"
                className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                placeholder="Tu nombre"
                value={formData.name}
                onChange={e => handleChange('name', e.target.value)}
              />
              {errors.name && <span className={styles.error}>{errors.name}</span>}
            </div>

            <div className={styles.field}>
              <label htmlFor="email" className={styles.label}>
                Correo <span className={styles.required}>*</span>
              </label>
              <input
                id="email"
                type="email"
                className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                placeholder="tu@correo.com"
                value={formData.email}
                onChange={e => handleChange('email', e.target.value)}
              />
              {errors.email && <span className={styles.error}>{errors.email}</span>}
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="subject" className={styles.label}>
              Asunto
            </label>
            <input
              id="subject"
              type="text"
              className={styles.input}
              placeholder="¿De qué quieres hablar?"
              value={formData.subject}
              onChange={e => handleChange('subject', e.target.value)}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="message" className={styles.label}>
              Mensaje <span className={styles.required}>*</span>
            </label>
            <textarea
              id="message"
              className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
              placeholder="Cuéntame sobre tu proyecto o idea..."
              value={formData.message}
              onChange={e => handleChange('message', e.target.value)}
            />
            {errors.message && <span className={styles.error}>{errors.message}</span>}
          </div>

          <Button type="submit" className={styles.submitBtn} disabled={loading}>
            {loading ? (
              <>
                <Loader2 size={18} style={{ animation: 'spin 1s linear infinite' }} />
                Enviando...
              </>
            ) : (
              <>
                <Send size={18} />
                Enviar mensaje
              </>
            )}
          </Button>
        </motion.form>
      </div>
    </section>
  )
}
