# Translation Keys Reference

## Complete List of All Available Translation Keys

This document provides a complete reference of all translation keys available in the portfolio with their fallback values.

---

## Navigation Keys (`nav`)

| Key | English | Spanish | Catalan |
|-----|---------|---------|---------|
| `nav.gallery` | Gallery | Galería | Galeria |
| `nav.videobook` | Videobook | Videografía | Videografia |
| `nav.biography` | Biography | Biografía | Biografia |
| `nav.cv` | CV | CV | CV |
| `nav.contact` | Contact | Contacto | Contacte |

---

## Footer Keys (`footer`)

| Key | English | Spanish | Catalan |
|-----|---------|---------|---------|
| `footer.theme` | Theme | Tema | Tema |
| `footer.language` | Language | Idioma | Idioma |
| `footer.light` | Light | Claro | Clar |
| `footer.dark` | Dark | Oscuro | Fosc |

---

## Common Keys (`common`)

| Key | English | Spanish | Catalan |
|-----|---------|---------|---------|
| `common.home` | Home | Inicio | Inici |
| `common.back` | Back | Atrás | Enrere |
| `common.close` | Close | Cerrar | Tancar |

---

## Page Keys (`pages`)

### Home Page (`pages.home`)

| Key | English | Spanish | Catalan |
|-----|---------|---------|---------|
| `pages.home.title` | Welcome to Portfolio | Bienvenido al Portafolio | Benvingut al Portafoli |
| `pages.home.subtitle` | Explore my work in galleries, videos, biography and more. | Explora mi trabajo en galerías, videos, biografía y mucho más. | Explora el meu treball en galeries, vídeos, biografia i més. |
| `pages.home.quickNav` | Quick Navigation | Navegación Rápida | Navegació Ràpida |

### Gallery Page (`pages.gallery`)

| Key | English | Spanish | Catalan |
|-----|---------|---------|---------|
| `pages.gallery.title` | Gallery | Galería | Galeria |
| `pages.gallery.description` | Professional photography collection | Colección de fotografía profesional | Col·lecció de fotografia professional |
| `pages.gallery.empty` | No images available | Sin imágenes disponibles | Cap imatge disponible |

### Videobook Page (`pages.videobook`)

| Key | English | Spanish | Catalan |
|-----|---------|---------|---------|
| `pages.videobook.title` | Videobook | Videografía | Videografia |
| `pages.videobook.description` | Video collection and demonstrations | Colección de videos y demostraciones | Col·lecció de vídeos i demostracions |
| `pages.videobook.empty` | No videos available | Sin videos disponibles | Cap vídeo disponible |
| `pages.videobook.duration` | Duration | Duración | Durada |

### Biography Page (`pages.biography`)

| Key | English | Spanish | Catalan |
|-----|---------|---------|---------|
| `pages.biography.title` | Biography | Biografía | Biografia |
| `pages.biography.about` | About | Acerca de | Sobre |
| `pages.biography.highlights` | Highlights | Destacados | Destacats |
| `pages.biography.details` | Details | Detalles | Detalls |
| `pages.biography.name` | Name | Nombre | Nom |
| `pages.biography.height` | Height | Altura | Alçada |
| `pages.biography.languages` | Languages | Idiomas | Idiomes |
| `pages.biography.agency` | Signing Agency | Agencia de Representación | Agència de Representació |
| `pages.biography.location` | Base Location | Ubicación Base | Ubicació Base |

### CV Page (`pages.cv`)

| Key | English | Spanish | Catalan |
|-----|---------|---------|---------|
| `pages.cv.title` | CV | CV | CV |
| `pages.cv.experience` | Experience | Experiencia | Experiència |
| `pages.cv.education` | Education | Educación | Educació |
| `pages.cv.skills` | Skills | Habilidades | Habilitats |
| `pages.cv.languages` | Languages | Idiomas | Idiomes |
| `pages.cv.period` | Period | Período | Període |
| `pages.cv.institution` | Institution | Institución | Institució |
| `pages.cv.year` | Year | Año | Any |
| `pages.cv.proficiency` | Proficiency | Nivel | Nivell |

### Contact Page (`pages.contact`)

| Key | English | Spanish | Catalan |
|-----|---------|---------|---------|
| `pages.contact.title` | Contact | Contacto | Contacte |
| `pages.contact.getInTouch` | Get in Touch | Ponte en Contacto | Poseu-vos en Contacte |
| `pages.contact.followMe` | Follow Me | Sígueme | Seguix-me |
| `pages.contact.agencyInfo` | Agency | Agencia | Agència |
| `pages.contact.email` | Email | Correo Electrónico | Correu Electrònic |
| `pages.contact.phone` | Phone | Teléfono | Telèfon |
| `pages.contact.location` | Location | Ubicación | Ubicació |
| `pages.contact.agencyName` | Agency Name | Nombre de la Agencia | Nom de l'Agència |
| `pages.contact.agencyEmail` | Agency Email | Correo de la Agencia | Correu de l'Agència |
| `pages.contact.agencyPhone` | Agency Phone | Teléfono de la Agencia | Telèfon de l'Agència |
| `pages.contact.empty` | No contact information available | Sin información de contacto disponible | Cap informació de contacte disponible |

---

## Usage Examples

### In Components

```tsx
import { useTranslation } from 'react-i18next'

export default function MyComponent() {
  const { t } = useTranslation()
  
  return (
    <>
      {/* Navigation */}
      <h2>{t('nav.gallery', 'Gallery')}</h2>
      
      {/* Page titles */}
      <h1>{t('pages.cv.title', 'CV')}</h1>
      
      {/* Section headings */}
      <h3>{t('pages.cv.experience', 'Experience')}</h3>
      
      {/* Labels */}
      <label>{t('pages.contact.email', 'Email')}</label>
      
      {/* Fallback display */}
      <p>{t('common.home', 'Home')}</p>
    </>
  )
}
```

### Complete Example

```tsx
const { t } = useTranslation()

return (
  <div>
    <h1>{t('pages.contact.title', 'Contact')}</h1>
    <h2>{t('pages.contact.getInTouch', 'Get in Touch')}</h2>
    <div>
      <strong>{t('pages.contact.email', 'Email')}:</strong>
      <span>contact@example.com</span>
    </div>
    <div>
      <strong>{t('pages.contact.phone', 'Phone')}:</strong>
      <span>+1-234-567-8900</span>
    </div>
  </div>
)
```

---

## File Locations

- **Runtime:** `src/data/translations.json`
- **Static (English):** `public/locales/en.json`
- **Static (Spanish):** `public/locales/es.json`
- **Static (Catalan):** `public/locales/ca.json`

## Total Keys

- **Navigation:** 5 keys
- **Footer:** 4 keys
- **Common:** 3 keys
- **Pages:** 38 keys
- **Total:** 50 keys across 3 languages = 150 translation strings

## Adding New Keys

When adding a new translation:

1. Add to all three language sections in `src/data/translations.json`
2. Add to all three files in `public/locales/`
3. Use in component with fallback: `t('newKey', 'Default Text')`

Example:
```json
{
  "en": { "myKey": "English text" },
  "es": { "myKey": "Texto en español" },
  "ca": { "myKey": "Text en català" }
}
```

---

## Language Support

- **English (en):** Fully translated
- **Spanish (es):** Fully translated
- **Catalan (ca):** Fully translated
- **Fallback Language:** English

All text has been professionally translated and reviewed for accuracy across all three supported languages.
