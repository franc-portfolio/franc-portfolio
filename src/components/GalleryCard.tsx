import { useState } from 'react'
import '../styles/gallery-card.css'

interface GalleryCardProps {
  title: string
  description: string
  url: string
  category: string
}

export default function GalleryCard({
  title,
  description,
  url,
  category,
}: GalleryCardProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="gallery-card">
      <div className="gallery-card-image-container">
        <img
          src={url}
          alt={title}
          className="gallery-card-image"
          onLoad={() => setIsLoading(false)}
        />
        {isLoading && <div className="gallery-card-skeleton" />}
      </div>

      <div className="gallery-card-footer">
        <div className="gallery-card-content">
          <h3 className="gallery-card-title">{title}</h3>
          <p className="gallery-card-description">{description}</p>
          <span className="gallery-card-category">{category}</span>
        </div>
      </div>
    </div>
  )
}
