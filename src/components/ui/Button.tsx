import type { ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './Button.module.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'dark'
  size?: 'small' | 'normal' | 'large'
  children: ReactNode
}

export default function Button({
  variant = 'primary',
  size = 'normal',
  className = '',
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${size !== 'normal' ? styles[size] : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
