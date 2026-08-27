import { useState } from "react";
import { photos } from "../lib/gallery";

export default function Gallery() {
  const [active, setActive] = useState(null);

  if (photos.length === 0) {
    return (
      <section className="section">
        <div className="wrap">
          <p className="section-label">Gallery</p>
          <p className="prose-note">Photos coming soon.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="wrap">
        <p className="section-label">Gallery</p>
        <div className="gallery-grid">
          {photos.map((photo) => (
            <button
              key={photo.src}
              type="button"
              className="gallery-item"
              onClick={() => setActive(photo)}
            >
              <img
                src={`${import.meta.env.BASE_URL}${photo.src.replace(/^\//, "")}`}
                alt={photo.caption}
              />
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div className="lightbox" onClick={() => setActive(null)}>
          <img
            src={`${import.meta.env.BASE_URL}${active.src.replace(/^\//, "")}`}
            alt={active.caption}
          />
          {active.caption && <p className="lightbox-caption">{active.caption}</p>}
        </div>
      )}
    </section>
  );
}
