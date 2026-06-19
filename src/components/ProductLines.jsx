import { useState } from 'react';
import { PRODUCT_LINES, WHATSAPP_NUMBER } from '../config';
import Lightbox from './Lightbox';
import './ProductLines.css';

function LineCard({ line, index, onOpenLightbox }) {
  const images = line.images?.filter(Boolean) ?? [];
  const [active, setActive] = useState(0);
  const hasImages = images.length > 0;
  const hasVariants = images.length > 1;

  function goPrev(e) {
    e.stopPropagation();
    setActive((active - 1 + images.length) % images.length);
  }
  function goNext(e) {
    e.stopPropagation();
    setActive((active + 1) % images.length);
  }

  return (
    <article className="line-card">
      <div
        className="line-card__media"
        onClick={() => hasImages && onOpenLightbox(images, active)}
        role={hasImages ? 'button' : undefined}
        tabIndex={hasImages ? 0 : undefined}
        aria-label={hasImages ? `Ampliar foto de ${line.name}` : undefined}
      >
        {hasImages ? (
          <img src={images[active]} alt={line.name} />
        ) : (
          <span className="line-card__placeholder">Foto {index + 1}</span>
        )}

        {hasVariants && (
          <>
            <button
              type="button"
              className="line-card__arrow line-card__arrow--prev"
              onClick={goPrev}
              aria-label={`Foto anterior — ${line.name}`}
            >
              ‹
            </button>
            <button
              type="button"
              className="line-card__arrow line-card__arrow--next"
              onClick={goNext}
              aria-label={`Próxima foto — ${line.name}`}
            >
              ›
            </button>

            <div className="line-card__dots">
              {images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`line-card__dot ${active === i ? 'is-active' : ''}`}
                  onClick={(e) => { e.stopPropagation(); setActive(i); }}
                  aria-label={`Ver foto ${i + 1} de ${line.name}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="line-card__body">
        <h3>{line.name}</h3>
        <p className="line-card__tagline">{line.tagline}</p>
        <p className="line-card__desc">{line.description}</p>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
            `Olá! Quero saber mais sobre a linha ${line.name}.`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="line-card__link"
        >
          Pedir orçamento →
        </a>
      </div>
    </article>
  );
}

export default function ProductLines() {
  const [lightbox, setLightbox] = useState(null); // { images, index } | null

  return (
    <section className="lines" id="linhas">
      <div className="container">
        <p className="eyebrow">Nossas linhas</p>
        <h2 className="lines__title">Conforto em quatro linhas de investimento</h2>

        <div className="lines__grid">
          {PRODUCT_LINES.map((line, i) => (
            <LineCard
              line={line}
              index={i}
              key={line.id}
              onOpenLightbox={(images, index) => setLightbox({ images, index })}
            />
          ))}
        </div>
      </div>

      {lightbox && (
        <Lightbox
          images={lightbox.images}
          index={lightbox.index}
          onClose={() => setLightbox(null)}
          onNavigate={(newIndex) => setLightbox({ ...lightbox, index: newIndex })}
        />
      )}
    </section>
  );
}
