import { GALLERY_IMAGES, INSTAGRAM_LINK } from '../config';
import './Gallery.css';

export default function Gallery() {
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
          {GALLERY_IMAGES.map((item, index) => (
            <div className="gallery__item" key={index}>
              {item.img ? (
                <img src={item.img} alt={item.alt} loading="lazy" />
              ) : (
                <div className="gallery__placeholder">Foto em breve</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}