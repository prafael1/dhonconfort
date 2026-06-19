import { WHATSAPP_LINK } from '../config';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="eyebrow">Cabeceiras &amp; colchões sob medida</p>
          <h1 className="hero__title">
            Conforto que se sente<br />
            <em>antes de encostar.</em>
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
          <div className="strata-stack">
            <div className="strata-stack__layer strata-stack__layer--top">
              <span>Acabamento em tecido nobre</span>
            </div>
            <div className="strata-stack__layer strata-stack__layer--mid">
              <span>Espuma viscoelástica</span>
            </div>
            <div className="strata-stack__layer strata-stack__layer--base">
              <span>Molas ensacadas / núcleo</span>
            </div>
          </div>
        </div>
      </div>

      <div className="strata" aria-hidden="true">
        <span className="l1"></span>
        <span className="l2"></span>
        <span className="l3"></span>
      </div>
    </section>
  );
}
