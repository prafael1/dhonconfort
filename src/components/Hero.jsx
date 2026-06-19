import { WHATSAPP_LINK } from '../config';
import Divider from './Divider';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__blob hero__blob--gold" aria-hidden="true"></div>
      <div className="hero__blob hero__blob--rose" aria-hidden="true"></div>

      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="eyebrow">Cabeceiras &amp; colchões sob medida</p>
          <h1 className="hero__title">
            Conforto que se sente<br />
            <em className="gradient-text">antes de encostar.</em>
          </h1>
          <p className="hero__lead">
            Conjuntos de cabeceira e cama com camadas pensadas para cada
            tipo de sono — da firmeza essencial às molas ensacadas do
            nosso topo de linha.
          </p>
          <div className="hero__actions">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Pedir orçamento no WhatsApp
            </a>
            <a href="#linhas" className="btn-ghost">
              Ver linhas de produtos
            </a>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="float-card float-card--back"></div>
          <div className="float-card float-card--mid">
            <span className="float-card__label">Molas ensacadas</span>
            <span className="float-card__big gradient-text">220</span>
            <span className="float-card__sub">unidades / m²</span>
          </div>
          <div className="float-card float-card--front glass-card">
            <span className="float-card__label">Linha mais pedida</span>
            <span className="float-card__name">Dubai Premium</span>
          </div>
        </div>
      </div>

      <Divider />
    </section>
  );
}
