import { useTranslation } from '../hooks/useTranslation'
import { User, Calendar, GraduationCap, Zap } from 'lucide-react'

type EducationItem = {
  id: string
  program: string
  institution: string
  status: string
  startYear?: string
  endYear?: string
}

type TheaterItem = {
  id: string
  title: string
  type: string
  year?: string
  character?: string
  characters?: string[]
}

type AudiovisualItem = {
  id: string
  role: string
  type: string
}

type LanguageItem = {
  language: string
  proficiency: string
}

type CVContent = {
  education: EducationItem[]
  theater: TheaterItem[]
  audiovisual: AudiovisualItem[]
  skills: string[]
  languages: LanguageItem[]
}

export default function CV() {
  const { t } = useTranslation()
  const cv = t('pages.cv.content', { returnObjects: true }) as CVContent

  return (
    <div className="page-container">
      <div className="cv-content">
        <section className="cv-section">
          <h2>{t('pages.cv.education', 'Education')}</h2>
          <div className="education-list">
            {cv.education?.map((education) => (
              <div key={education.id} className="education-item">
                <div className="education-header">
                  <h3>{education.program}</h3>
                  {education.startYear && education.endYear && (
                    <span className="year-range">
                      <Calendar size={14} /> {education.startYear} - {education.endYear}
                    </span>
                  )}
                </div>
                <span className="institution-badge">
                  <GraduationCap size={14} />
                  {education.institution}
                </span>
                <p className="status">{education.status}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="cv-section">
          <h2>{t('pages.cv.theater', 'Theater')}</h2>
          <div className="theater-list">
            {cv.theater?.map((production) => (
              <div key={production.id} className="theater-item">
                <div className="theater-header">
                  <h3>{production.title}</h3>
                  {production.year && (
                    <span className="year-text">
                      - <Calendar size={14} /> {production.year}
                    </span>
                  )}
                </div>
                <p className="type">{production.type}</p>
                {production.characters && (
                  <div className="characters-badges">
                    {production.characters.map((char, idx) => (
                      <span key={idx} className="character-badge">
                        <User size={14} />
                        {char}
                      </span>
                    ))}
                  </div>
                )}
                {production.character && (
                  <span className="character-badge">
                    <User size={14} />
                    {production.character}
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="cv-section">
          <h2>{t('pages.cv.audiovisual', 'Audiovisual Work')}</h2>
          <div className="audiovisual-list">
            {cv.audiovisual?.map((work) => (
              <div key={work.id} className="audiovisual-item">
                <h3>{work.role}</h3>
                <p className="type">{work.type}</p>
                <span className="role-badge">
                  <Zap size={14} />
                  {work.type}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="cv-section">
          <h2>{t('pages.cv.skills', 'Skills')}</h2>
          <div className="skills-grid">
            {cv.skills?.map((skill, index) => (
              <span key={index} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="cv-section">
          <h2>{t('pages.cv.languages', 'Languages')}</h2>
          <div className="languages-list">
            {cv.languages?.map((lang, index) => (
              <div key={index} className="language-item">
                <strong>{lang.language}</strong>
                <span className="proficiency">{lang.proficiency}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
