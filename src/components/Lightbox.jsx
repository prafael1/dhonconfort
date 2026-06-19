import { useEffect, useCallback } from 'react';
import './Lightbox.css';

export default function Lightbox({ images, index, onClose, onNavigate }) {
  const hasMultiple = images.length > 1;

  const goPrev = useCallback(
    () => onNavigate((index - 1 + images.length) % images.length),
    [index, images.length, onNavigate]
  );
  const goNext = useCallback(
    () => onNavigate((index + 1) % images.length),
    [index, images.length, onNavigate]
  );

  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && hasMultiple) goPrev();
      if (e.key === 'ArrowRight' && hasMultiple) goNext();
    }
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose, goPrev, goNext, hasMultiple]);

  return (
    <div className="lightbox" role="dialog" aria-modal="true" onClick={onClose}>
      <button className="lightbox__close" onClick={onClose} aria-label="Fechar">
        ✕
      </button>

      {hasMultiple && (
        <button
          className="lightbox__arrow lightbox__arrow--prev"
          onClick={(e) => { e.stopPropagation(); goPrev(); }}
          aria-label="Foto anterior"
        >
          ‹
        </button>
      )}

      <img
        src={images[index]}
        alt=""
        className="lightbox__img"
        onClick={(e) => e.stopPropagation()}
      />

      {hasMultiple && (
        <button
          className="lightbox__arrow lightbox__arrow--next"
          onClick={(e) => { e.stopPropagation(); goNext(); }}
          aria-label="Próxima foto"
        >
          ›
        </button>
      )}

      {hasMultiple && (
        <div className="lightbox__dots" onClick={(e) => e.stopPropagation()}>
          {images.map((_, i) => (
            <button
              key={i}
              className={`lightbox__dot ${i === index ? 'is-active' : ''}`}
              onClick={() => onNavigate(i)}
              aria-label={`Ir para foto ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
