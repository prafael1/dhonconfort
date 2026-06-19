import './About.css';

const DIFERENCIAIS = [
  {
    title: 'Entrega acompanhada',
    text: 'Montagem feita pela nossa equipe, sem dor de cabeça pra você.',
  },
  {
    title: 'Garantia de fábrica',
    text: 'Cada linha tem garantia clara, informada antes da compra.',
  },
  {
    title: 'Sob medida',
    text: 'Cabeceira e cama combinadas no tamanho e tecido que você escolher.',
  },
];

export default function About() {
  return (
    <section className="about" id="sobre">
      <div className="container about__inner">
        <div className="about__copy">
          <p className="eyebrow">Sobre a Dhon Confort</p>
          <h2 className="about__title">
            Colchões e cabeceiras pensados pra quem leva o sono a sério.
          </h2>
          <p className="about__text">
            Trabalhamos com três linhas — da entrada à premium — pra que cada
            cliente encontre o ponto certo entre conforto e investimento, sem
            abrir mão de acabamento bonito no quarto.
          </p>
        </div>

        <ul className="about__list">
          {DIFERENCIAIS.map((d, i) => (
            <li key={d.title}>
              <span className="about__badge" aria-hidden="true">{i + 1}</span>
              <div>
                <h3>{d.title}</h3>
                <p>{d.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
