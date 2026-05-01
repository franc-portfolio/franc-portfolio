import { useTranslation } from '../hooks/useTranslation'
import { Phone, Mail, MapPin, Instagram } from 'lucide-react'
import contactData from '../data/contact.json'
import cvData from '../data/cv.json'

export default function Contact() {
  const { t } = useTranslation()
  const { contact } = contactData
  const { cv } = cvData

  // Find Instagram link from social links
  const instagramLink = contact.socialLinks.find(
    (link) => link.platform.toLowerCase() === 'instagram'
  )

  return (
    <div className="page-container">
      <div className="contact-content">
        <section className="contact-section">
          <h2>{t('pages.contact.getInTouch', 'Get in Touch')}</h2>
          <div className="contact-info">
            {cv.contact?.email && (
              <div className="info-item">
                <Mail size={20} />
                <div className="info-content">
                  <strong>{t('pages.contact.email', 'Email')}:</strong>
                  <a href={`mailto:${cv.contact.email}`}>{cv.contact.email}</a>
                </div>
              </div>
            )}
            {cv.contact?.phone && (
              <div className="info-item">
                <Phone size={20} />
                <div className="info-content">
                  <strong>{t('pages.contact.phone', 'Phone')}:</strong>
                  <a href={`tel:${cv.contact.phone}`}>{cv.contact.phone}</a>
                </div>
              </div>
            )}
            {contact.location && (
              <div className="info-item">
                <MapPin size={20} />
                <div className="info-content">
                  <strong>{t('pages.contact.location', 'Location')}:</strong>
                  <span>{contact.location}</span>
                </div>
              </div>
            )}
            {instagramLink && (
              <div className="info-item">
                <Instagram size={20} />
                <div className="info-content">
                  <strong>Instagram:</strong>
                  <a
                    href={instagramLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @francescmier
                  </a>
                </div>
              </div>
            )}
          </div>
        </section>

        {contact.agency && (
          <section className="contact-section">
            <h2>{t('pages.contact.agencyInfo', 'Agency')}</h2>
            <div className="agency-info">
              <div className="info-item">
                <strong>{t('pages.contact.agencyName', 'Agency Name')}:</strong>
                <span>{contact.agency.name}</span>
              </div>
              <div className="info-item">
                <strong>{t('pages.contact.agencyEmail', 'Agency Email')}:</strong>
                <a href={`mailto:${contact.agency.email}`}>
                  {contact.agency.email}
                </a>
              </div>
              <div className="info-item">
                <strong>{t('pages.contact.agencyPhone', 'Agency Phone')}:</strong>
                <a href={`tel:${contact.agency.phone}`}>{contact.agency.phone}</a>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
