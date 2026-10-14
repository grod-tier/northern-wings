import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import { getGalleryPhotos, imageUrl } from '../lib/sanity.js';

export default function Gallery() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getGalleryPhotos().then(data => {
      setPhotos(data);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  return (
    <>
      <Navbar />
      <header className="gallery-page-header">
        <div className="gallery-page-header-inner">
          <div className="eyebrow">Northern Wings</div>
          <h1>Gallery</h1>
          <p className="lede">Photos from the waystation — seasons, milkweed, monarchs, and more.</p>
        </div>
      </header>

      <main className="gallery-wrap">
        {loading ? (
          <div className="gallery-loading">Loading photos…</div>
        ) : photos.length === 0 ? (
          <div className="gallery-empty">No photos yet. Check back soon.</div>
        ) : (
          <div className="gallery-grid">
            {photos.map(photo => (
              <figure className="gallery-item" key={photo._id}>
                <img
                  src={imageUrl(photo.image, 600)}
                  alt={photo.caption || ''}
                  loading="lazy"
                />
                {(photo.caption || photo.location) && (
                  <figcaption>
                    {photo.caption}
                    {photo.location && <span className="gallery-location">{photo.location}</span>}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}
