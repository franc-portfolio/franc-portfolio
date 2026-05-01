import { useTranslation } from '../hooks/useTranslation'
import biographyData from '../data/biography.json'

export default function Biography() {
  const { t } = useTranslation()
  const { biography } = biographyData

  return (
    <div className="page-container">
      <div className="bio-content">
        <div className="bio-header">
          <h2>{biography.name}</h2>
          <p className="bio-title">{biography.title}</p>
        </div>

        <div className="bio-section">
          <h3>{t('pages.biography.about', 'About')}</h3>
          <p>{biography.bio}</p>
        </div>

        <div className="bio-section">
          <h3>{t('pages.biography.highlights', 'Highlights')}</h3>
          <ul className="highlights-list">
            {biography.highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </div>

        <div className="bio-section"> 
          <h3>{t('pages.biography.details', 'Details')}</h3>
          <div className="stats-grid">
            <div className="stat">
              <strong>{t('pages.biography.age', 'Age')}:</strong> {biography.stats.age}
            </div>
            <div className="stat">
              <strong>{t('pages.biography.height', 'Height')}:</strong> {biography.stats.height}
            </div>
            <div className="stat">
              <strong>{t('pages.biography.languages', 'Languages')}:</strong> {biography.stats.languages}
            </div>
            <div className="stat">
              <strong>{t('pages.biography.location', 'Base Location')}:</strong> {biography.stats.baseLocation}
            </div>
            {biography.stats.phone && (
              <div className="stat">
                <strong>{t('pages.biography.phone', 'Phone')}:</strong> <a href={`tel:${biography.stats.phone}`}>{biography.stats.phone}</a>
              </div>
            )}
            {biography.stats.email && (
              <div className="stat">
                <strong>{t('pages.biography.email', 'Email')}:</strong> <a href={`mailto:${biography.stats.email}`}>{biography.stats.email}</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
