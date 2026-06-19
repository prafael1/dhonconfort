// Edite aqui o telefone, textos e linhas de produto — tudo centralizado.

export const WHATSAPP_NUMBER = '5567999146667'; // 67 99914-6667
export const WHATSAPP_MESSAGE = 'Olá! Vi a página da Dhon Confort e quero saber mais sobre os colchões.';
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const INSTAGRAM_LINK = 'https://www.instagram.com/dhon.confort_colchoes';

export const PRODUCT_LINES = [
  {
    id: 'confort-plus',
    name: 'Confort Plus',
    tagline: 'O equilíbrio entre firmeza e maciez',
    description:
      'Conjunto de cabeceira e cama com espuma de alta densidade, pensado para quem busca o primeiro upgrade de conforto sem abrir mão do bolso.',
    img: null,
  },
  {
    id: 'dubai-premium',
    name: 'Dubai Premium',
    tagline: 'Acabamento de hotel, todo dia',
    description:
      'Estrutura reforçada com camadas premium de espuma e tecido importado — a linha mais procurada para quem renova o quarto todo.',
    img: null,
  },
  {
    id: 'diamante',
    name: 'Diamante 220 M2',
    tagline: 'Molas ensacadas, conforto de elite',
    description:
      'Nosso topo de linha: molas ensacadas individualmente, camadas de espuma viscoelástica e acabamento em tecido nobre.',
    img: null,
  },
];

export const GALLERY_PLACEHOLDER_COUNT = 6;
