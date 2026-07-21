import { useEffect, useState } from 'react'
import { useTranslation } from '../hooks/useTranslation'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'
import { Sun, Moon, Menu, X } from 'lucide-react'
import DropdownMenu from './DropdownMenu'
import '../styles/sidebar.css'

export default function SidebarNav() {
  const { t, i18n } = useTranslation()
  const location = useLocation()
  const { theme, toggleTheme } = useTheme()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)')
    const updateIsMobile = () => setIsMobile(mediaQuery.matches)

    updateIsMobile()
    mediaQuery.addEventListener('change', updateIsMobile)

    return () => mediaQuery.removeEventListener('change', updateIsMobile)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    if (!isMobileMenuOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isMobileMenuOpen])

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

  const currentLang = languages.find((l) => i18n.language.startsWith(l.code))

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode)
    document.documentElement.lang = langCode
  }

  const languageItems = languages.map((lang) => ({
    id: lang.code,
    label: `${lang.code.toUpperCase()} - ${lang.label}`,
    onClick: () => handleLanguageChange(lang.code),
    isActive: i18n.language.startsWith(lang.code),
  }))

  return (
    <>
      <header className="mobile-header">
        <button
          type="button"
          className="mobile-menu-button"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="sidebar-nav"
          aria-label={t('nav.openMenu', 'Open menu')}
        >
          <Menu size={24} />
        </button>
        <Link to="/" className="mobile-logo-link" onClick={() => setIsMobileMenuOpen(false)}>
          <span className="mobile-logo">Franc Mier</span>
        </Link>
      </header>

      <button
        type="button"
        className={`sidebar-backdrop ${isMobileMenuOpen ? 'sidebar-backdrop--visible' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-label={t('nav.closeMenu', 'Close menu')}
        tabIndex={isMobileMenuOpen ? 0 : -1}
      />

      <aside
        id="sidebar-nav"
        className={`sidebar ${isMobileMenuOpen ? 'sidebar--open' : ''}`}
        aria-hidden={isMobile && !isMobileMenuOpen}
      >
        <nav className="sidebar-nav">
          <div className="sidebar-header">
            <Link to="/" className="logo-link" onClick={() => setIsMobileMenuOpen(false)}>
              <h1 className="logo">Franc Mier</h1>
            </Link>
            <button
              type="button"
              className="sidebar-close-button"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label={t('nav.closeMenu', 'Close menu')}
            >
              <X size={24} />
            </button>
          </div>

          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`nav-link ${
                    location.pathname === item.path ? 'active' : ''
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
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
    </>
  )
}
