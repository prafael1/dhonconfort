import { WHATSAPP_LINK } from '../config';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#top" className="header__brand">
          <span className="header__brand-mark">D</span>
          <span className="header__brand-name">
            Dhon <em>Confort</em>
          </span>
        </a>

        <nav className="header__nav">
          <a href="#linhas">Linhas</a>
          <a href="#galeria">Galeria</a>
          <a href="#sobre">Sobre</a>
        </nav>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary header__cta"
        >
          Falar no WhatsApp
        </a>
      </div>
    </header>
  );
}
