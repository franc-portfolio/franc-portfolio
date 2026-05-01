import { useTranslation } from '../hooks/useTranslation'
import GalleryCard from '../components/GalleryCard'
import galleryData from '../data/gallery.json'
import '../styles/pages/gallery.css'

export default function Gallery() {
  const { t } = useTranslation()

  return (
    <div className="gallery-page">
      <div className="gallery-grid">
        {galleryData.images.length > 0 ? (
          galleryData.images.map((image) => (
            <GalleryCard
              key={image.id}
              title={image.title}
              description={image.description}
              url={image.url}
              category={image.category}
            />
          ))
        ) : (
          <p>{t('pages.gallery.empty', 'No images available')}</p>
        )}
      </div>
    </div>
  )
}
