# Quick Start Guide

## Development Commands

```bash
# Start development server (currently running on port 5174)
npm run dev

# Build for production
npm build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## Project URLs

- **Development:** http://localhost:5174/
- **Gallery:** http://localhost:5174/gallery
- **Videobook:** http://localhost:5174/videobook
- **Biography:** http://localhost:5174/biography
- **CV:** http://localhost:5174/cv
- **Contact:** http://localhost:5174/contact

## Customization Guide

### Changing Logo/Title

Edit `src/components/SidebarNav.tsx`:
```tsx
<h1 className="logo">Your Name Here</h1>
```

### Updating Portfolio Data

**Gallery Images:**
- File: `src/data/gallery.json`
- Replace the `url` field with actual image paths
- Add/remove images as needed

**Videos:**
- File: `src/data/videobook.json`
- Update YouTube embed URLs
- Add video duration and thumbnails

**Biography:**
- File: `src/data/biography.json`
- Update name, bio, stats, highlights

**CV:**
- File: `src/data/cv.json`
- Add/update experience, education, skills, languages

**Contact:**
- File: `src/data/contact.json`
- Update email, phone, social links, agency info

### Changing Colors

Edit `src/index.css` CSS variables:
```css
:root {
  --text: #6b6375;
  --bg: #fff;
  --accent: #aa3bff;
  /* ... more variables */
}

@media (prefers-color-scheme: dark) {
  :root {
    --text: #9ca3af;
    --bg: #16171d;
    --accent: #c084fc;
    /* ... more variables */
  }
}
```

### Adding Translations

Edit `src/data/translations.json`:
```json
{
  "en": { "newKey": "English text" },
  "es": { "newKey": "Texto en español" },
  "ca": { "newKey": "Text en català" }
}
```

Then use in components:
```tsx
const { t } = useTranslation()
t('newKey')
```

### Adding Shadcn Components

Install shadcn component:
```bash
npx shadcn-ui@latest add button
```

Use in your component:
```tsx
import { Button } from "@/components/ui/button"

<Button>Click me</Button>
```

## File Structure Quick Reference

- **Components:** `src/components/` - Reusable components
- **Pages:** `src/pages/` - Page components (Gallery, CV, etc.)
- **Data:** `src/data/` - JSON files with content
- **Hooks:** `src/hooks/` - Custom React hooks
- **Styles:** `src/styles/` - CSS modules
- **Lib:** `src/lib/` - Configuration and utilities

## Important Files

- `vite.config.ts` - Vite configuration
- `tailwind.config.ts` - Tailwind CSS configuration  
- `postcss.config.js` - PostCSS configuration
- `tsconfig.json` - TypeScript configuration
- `eslint.config.js` - ESLint configuration

## Debugging Tips

1. **Check Console:** Browser dev tools (F12) for errors
2. **Check Network:** Look for failed image/video loads
3. **Check i18n:** Press `i18next` in console to debug translations
4. **Hot Reload:** Changes save automatically with HMR

## Browser Support

Works on all modern browsers:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers

## Notes

- The project uses Tailwind CSS for styling
- i18n is pre-configured with language detection
- Dark mode is handled via CSS class on `<html>`
- All data is stored in JSON (easy to migrate to CMS later)
- Ready to integrate with Radix UI components anytime
