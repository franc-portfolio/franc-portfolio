import { useTranslation } from '../hooks/useTranslation'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'
import { Sun, Moon } from 'lucide-react'
import DropdownMenu from './DropdownMenu'
import '../styles/sidebar.css'

export default function SidebarNav() {
  const { t, i18n } = useTranslation()
  const location = useLocation()
  const { theme, toggleTheme } = useTheme()

  const navItems = [
    { path: '/gallery', label: t('nav.gallery', 'Gallery') },
    { path: '/videobook', label: t('nav.videobook', 'Videobook') },
    { path: '/biography', label: t('nav.biography', 'Biography') },
    { path: '/cv', label: t('nav.cv', 'CV') },
    { path: '/contact', label: t('nav.contact', 'Contact') },
  ]

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' },
    { code: 'ca', label: 'Català' },
  ]

  const currentLang = languages.find((l) => l.code === i18n.language)

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode)
    document.documentElement.lang = langCode
  }

  const languageItems = languages.map((lang) => ({
    id: lang.code,
    label: `${lang.code.toUpperCase()} - ${lang.label}`,
    onClick: () => handleLanguageChange(lang.code),
    isActive: i18n.language === lang.code,
  }))

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <Link to="/" className="logo-link">
          <h1 className="logo">Franc Mier</h1>
        </Link>
        <ul className="nav-list">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`nav-link ${
                  location.pathname === item.path ? 'active' : ''
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        
        <div className="nav-footer">
          <DropdownMenu
            trigger={currentLang?.code.toUpperCase()}
            items={languageItems}
          />

          <button
            onClick={toggleTheme}
            className="theme-toggle"
            title={theme === 'light' ? t('footer.dark', 'Dark') : t('footer.light', 'Light')}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <Moon size={20} />
            ) : (
              <Sun size={20} />
            )}
          </button>
        </div>
      </nav>
    </aside>
  )
}
