# i18n (Internationalization) Setup

## Overview

The portfolio supports three languages:
- **English** (en)
- **Spanish** (es)  
- **Catalan** (ca)

All translations are managed through i18next with fallback support.

## Translation Files

### Location
- **Runtime Translations:** `src/data/translations.json`
- **Static Translations:** `public/locales/{en,es,ca}.json`

Both locations contain identical translation strings for flexibility.

## Usage in Components

### Basic Usage with Fallback

All `t()` function calls include default fallback strings as the second parameter:

```tsx
import { useTranslation } from 'react-i18next'

export default function MyComponent() {
  const { t } = useTranslation()
  
  return (
    <h1>{t('pages.gallery.title', 'Gallery')}</h1>
  )
}
```

**Format:** `t('translation.key', 'Fallback String')`

### Translation Keys Structure

```
pages
├── home
│   ├── title
│   ├── subtitle
│   └── quickNav
├── gallery
│   ├── title
│   ├── description
│   └── empty
├── videobook
│   ├── title
│   ├── description
│   ├── empty
│   └── duration
├── biography
│   ├── title
│   ├── about
│   ├── highlights
│   ├── details
│   ├── name
│   ├── height
│   ├── languages
│   ├── agency
│   └── location
├── cv
│   ├── title
│   ├── experience
│   ├── education
│   ├── skills
│   ├── languages
│   ├── period
│   ├── institution
│   ├── year
│   └── proficiency
└── contact
    ├── title
    ├── getInTouch
    ├── followMe
    ├── agencyInfo
    ├── email
    ├── phone
    ├── location
    ├── agencyName
    ├── agencyEmail
    ├── agencyPhone
    └── empty

nav
├── gallery
├── videobook
├── biography
├── cv
└── contact

footer
├── theme
├── language
├── light
└── dark

common
├── home
├── back
└── close
```

## Language Switching

Users can switch languages using the footer language selector. The language preference is stored in browser storage.

```tsx
import i18next from 'i18next'

// Change language
i18next.changeLanguage('es')  // Switch to Spanish
i18next.changeLanguage('ca')  // Switch to Catalan
i18next.changeLanguage('en')  // Switch to English
```

## Adding New Translations

### Step 1: Update translations.json

```json
{
  "en": {
    "myFeature": {
      "title": "My Feature"
    }
  },
  "es": {
    "myFeature": {
      "title": "Mi Función"
    }
  },
  "ca": {
    "myFeature": {
      "title": "La Meva Funció"
    }
  }
}
```

### Step 2: Update locale files

Update `/public/locales/en.json`, `/public/locales/es.json`, and `/public/locales/ca.json` with the same keys.

### Step 3: Use in component

```tsx
const { t } = useTranslation()
t('myFeature.title', 'My Feature')
```

## Configuration

### i18n Setup File
Location: `src/lib/i18n.ts`

```tsx
import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import translations from '../data/translations.json'

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: translations as any,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  })
```

### Key Points
- **Fallback Language:** English (en)
- **Language Detection:** Automatic browser language detection
- **Interpolation:** HTML escaping disabled for flexibility

## Pages with i18n Support

### ✅ All Pages Implemented

1. **Home** - `src/pages/Home.tsx`
2. **Gallery** - `src/pages/Gallery.tsx`
3. **Videobook** - `src/pages/Videobook.tsx`
4. **Biography** - `src/pages/Biography.tsx`
5. **CV** - `src/pages/CV.tsx`
6. **Contact** - `src/pages/Contact.tsx`

### Components with i18n Support

1. **SidebarNav** - `src/components/SidebarNav.tsx`
2. **Footer** - `src/components/Footer.tsx`

## Fallback Strings

Every `t()` call includes a fallback string (usually in English). This ensures:
- UI displays correctly even if translation key is missing
- Better readability in code
- Easy to see what the UI should display

### Examples

```tsx
// With fallback
t('nav.gallery', 'Gallery')           // Shows "Gallery" if key not found
t('nav.videobook', 'Videobook')       // Shows "Videobook" if key not found
t('pages.cv.title', 'CV')             // Shows "CV" if key not found

// Navigation
t('nav.gallery', 'Gallery')
t('nav.videobook', 'Videobook')
t('nav.biography', 'Biography')
t('nav.cv', 'CV')
t('nav.contact', 'Contact')

// Footer
t('footer.theme', 'Theme')
t('footer.language', 'Language')
t('footer.light', 'Light')
t('footer.dark', 'Dark')
```

## Missing Translations

If a translation key is not found:
1. Fallback string (second parameter) is displayed
2. No error is thrown
3. Browser console may show warning in development

## Language Detection

i18next automatically detects browser language:
1. Checks browser language preference
2. Falls back to English if language not supported
3. User can override with footer language selector

## Best Practices

1. **Always provide fallback strings**
   ```tsx
   // ✅ Good
   t('key', 'Default text')
   
   // ❌ Avoid
   t('key')
   ```

2. **Use nested keys for organization**
   ```tsx
   // ✅ Good
   t('pages.gallery.title', 'Gallery')
   
   // ❌ Avoid
   t('gallery_title', 'Gallery')
   ```

3. **Keep fallback strings in English**
   - Easier to maintain
   - Familiar to all developers
   - Serves as code documentation

4. **Group related translations**
   - Navigation items under `nav`
   - Page content under `pages.pageName`
   - Common text under `common`

## Testing Languages

To test each language:

1. **English:** No changes needed (default)
2. **Spanish:** Click "ES" in footer
3. **Catalan:** Click "CA" in footer

Language preference persists after page reload.

## Troubleshooting

### Language not changing
- Check browser console for errors
- Verify translation key exists in `translations.json`
- Check that all three language objects have the key

### Missing translations
- Verify key path matches exactly
- Check for typos in translation key
- Ensure i18next is initialized before components render

### Fallback not showing
- Ensure second parameter is provided to `t()`
- Check that fallback string is not empty
- Verify i18next config has `fallbackLng: 'en'`

## Future Enhancements

- Add more languages
- Implement pluralization support
- Add translation management UI
- Export/import translations from external service
- Add translation completion tracking
