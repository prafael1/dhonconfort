import { INSTAGRAM_LINK, WHATSAPP_LINK } from '../config';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__brand">Dhon Confort Colchões</span>
        <div className="footer__links">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
          <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </div>
        <span className="footer__copy">
          © {new Date().getFullYear()} Dhon Confort. Todos os direitos reservados.
        </span>
      </div>
    </footer>
  );
}
