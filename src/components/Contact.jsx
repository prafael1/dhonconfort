import { WHATSAPP_LINK } from '../config';
import Divider from './Divider';
import './Contact.css';

export default function Contact() {
  return (
    <section className="contact">
      <Divider flip />

      <div className="container">
        <div className="contact__card glass-card">
          <h2 className="contact__title">
            Pronto pra dormir melhor <span className="gradient-text">essa semana?</span>
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
      </div>

      <Divider />
    </section>
  );
}
