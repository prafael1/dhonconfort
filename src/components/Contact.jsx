import { WHATSAPP_LINK } from '../config';
import './Contact.css';

export default function Contact() {
  return (
    <section className="contact">
      <div className="strata" aria-hidden="true">
        <span className="l3"></span>
        <span className="l2"></span>
        <span className="l1"></span>
      </div>

      <div className="container contact__inner">
        <h2 className="contact__title">
          Pronto pra dormir melhor essa semana?
        </h2>
        <p className="contact__text">
          Manda uma mensagem agora e a gente te ajuda a escolher a linha
          certa pro seu quarto.
        </p>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary contact__cta"
        >
          Falar no WhatsApp agora
        </a>
      </div>
    </section>
  );
}
