import { useTranslation } from '../hooks/useTranslation'

export default function Home() {
  const { t } = useTranslation()

  return (
    <div className="page-container">
      <div className="page-content">
        <h1>{t('pages.home.title', 'Welcome to Portfolio')}</h1>
        <p className="lead">
          {t('pages.home.subtitle', 'Explore my work in galleries, videos, biography and more.')}
        </p>
        <nav className="quick-nav">
          <ul>
            <li>
              <a href="/gallery">{t('nav.gallery', 'Gallery')}</a>
            </li>
            <li>
              <a href="/videobook">{t('nav.videobook', 'Videobook')}</a>
            </li>
            <li>
              <a href="/biography">{t('nav.biography', 'Biography')}</a>
            </li>
            <li>
              <a href="/cv">{t('nav.cv', 'CV')}</a>
            </li>
            <li>
              <a href="/contact">{t('nav.contact', 'Contact')}</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
