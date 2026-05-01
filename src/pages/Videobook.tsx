import { useTranslation } from '../hooks/useTranslation'
import videobookData from '../data/videobook.json'

export default function Videobook() {
  const { t } = useTranslation()

  return (
    <div className="page-container">
      <div className="videobook-grid">
        {videobookData.videos.length > 0 ? (
          videobookData.videos.map((video) => (
            <div key={video.id} className="video-item">
              <div className="video-thumbnail">
                <img src={video.thumbnail} alt={video.title} />
                <div className="play-button">▶</div>
                <div className="duration">{video.duration}</div>
              </div>
              <div className="video-info">
                <h3>{video.title}</h3>
                <p>{video.description}</p>
              </div>
            </div>
          ))
        ) : (
          <p>{t('pages.videobook.empty', 'No videos available')}</p>
        )}
      </div>
    </div>
  )
}
