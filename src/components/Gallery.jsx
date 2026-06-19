import { GALLERY_IMAGES, INSTAGRAM_LINK } from '../config';
import './Gallery.css';

export default function Gallery() {
  const items = Array.from({ length: GALLERY_IMAGES });
  const images = Object.values(
  import.meta.glob('../img/*.{jpg,jpeg,png,webp}', {
    eager: true,
    import: 'default',
  })
);

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
          {images.map((src, index) => (
            <div className="gallery__item" key={index}>
              <img
                src={src}
                alt={`Galeria ${index + 1}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
