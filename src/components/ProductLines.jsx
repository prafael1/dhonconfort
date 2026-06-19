import { PRODUCT_LINES, WHATSAPP_NUMBER } from '../config';
import './ProductLines.css';

export default function ProductLines() {
  return (
    <section className="lines" id="linhas">
      <div className="container">
        <p className="eyebrow">Nossas linhas</p>
        <h2 className="lines__title">Conforto em três camadas de investimento</h2>

        <div className="lines__grid">
          {PRODUCT_LINES.map((line, i) => (
            <article className="line-card" key={line.id}>
              <div className="line-card__media">
                {line.img ? (
                  <img src={line.img} alt={line.name} />
                ) : (
                  <span className="line-card__placeholder">Foto {i + 1}</span>
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
          ))}
        </div>
      </div>
    </section>
  );
}
