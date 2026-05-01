import { useTranslation } from 'react-i18next'
import { useTheme } from '../hooks/useTheme'
import i18next from 'i18next'
import '../styles/footer.css'

export default function Footer() {
  const { t } = useTranslation()
  const { getTheme, setTheme } = useTheme()

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' },
    { code: 'ca', label: 'Català' },
  ]

  const handleLanguageChange = (lang: string) => {
    i18next.changeLanguage(lang)
  }

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <label className="footer-label">{t('footer.language', 'Language')}</label>
          <div className="language-selector">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`lang-button ${
                  i18next.language === lang.code ? 'active' : ''
                }`}
                title={lang.label}
              >
                {lang.code.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="footer-section">
          <label className="footer-label">{t('footer.theme', 'Theme')}</label>
          <div className="theme-selector">
            <button
              onClick={() => setTheme('light')}
              className={`theme-button ${
                getTheme() === 'light' ? 'active' : ''
              }`}
              title={t('footer.light', 'Light')}
            >
              ☀️
            </button>
            <button
              onClick={() => setTheme('dark')}
              className={`theme-button ${getTheme() === 'dark' ? 'active' : ''}`}
              title={t('footer.dark', 'Dark')}
            >
              🌙
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
