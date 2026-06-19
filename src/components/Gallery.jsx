import { GALLERY_PLACEHOLDER_COUNT, INSTAGRAM_LINK } from '../config';
import './Gallery.css';

export default function Gallery() {
  const items = Array.from({ length: GALLERY_PLACEHOLDER_COUNT });

  return (
    <section className="gallery" id="galeria">
      <div className="container">
        <p className="eyebrow">Galeria</p>
        <div className="gallery__head">
          <h2 className="gallery__title">Peças entregues, ambientes reais</h2>
          <a
            href={INSTAGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost gallery__insta"
          >
            Ver mais no Instagram
          </a>
        </div>

        <div className="gallery__grid">
          {items.map((_, i) => (
            <div className="gallery__item" key={i}>
              <span>Foto {i + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
