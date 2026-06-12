import { createContext, useContext, useEffect, useState } from 'react'
import type { Lang } from '../i18n/types'

interface LanguageContextType {
  lang: Lang
  toggleLang: () => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const stored = localStorage.getItem('lang')
    if (stored === 'es' || stored === 'en') return stored
    return 'es'
  })

  useEffect(() => {
    document.documentElement.lang = lang
    localStorage.setItem('lang', lang)
  }, [lang])

  const toggleLang = () => setLang(prev => (prev === 'es' ? 'en' : 'es'))

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage debe usarse dentro de LanguageProvider')
  return context
}
