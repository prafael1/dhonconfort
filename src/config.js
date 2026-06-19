// Edite aqui o telefone, textos e linhas de produto — tudo centralizado.
//
// COMO ADICIONAR FOTOS:
// 1. Salve os arquivos em src/assets/img/
// 2. Importe abaixo, perto dos outros imports de imagem
// 3. Em PRODUCT_LINES, coloque todas as fotos do mesmo produto dentro de "images: [...]"
//    — se tiver várias cores/variantes, é uma foto por variante (aparece carrossel pra navegar).
//    Se for só 1 foto, deixe um item só no array (sem setas/bolinhas).

import confortImg from './assets/img/confort.jpeg';
import confort1Img from './assets/img/confort1.jpeg';
import dubaiImg from './assets/img/dubai.jpeg';
import dubai1Img from './assets/img/dubai1.jpeg';
import dubai2Img from './assets/img/dubai2.jpeg';
import diamanteImg from './assets/img/diamante.jpeg';
import diamante1Img from './assets/img/diamante1.jpeg';
import diamante2Img from './assets/img/diamante2.jpeg';
import diamante3Img from './assets/img/diamante3.jpeg';
import venezaImg from './assets/img/cjVeneza.jpeg';
import veneza2Img from './assets/img/cjVeneza2.jpeg';
import galeria1 from './assets/img/cjVeneza.jpeg';
import galeria2 from './assets/img/confort.jpeg';
import galeria3 from './assets/img/confort1.jpeg';
// import galeria3 from './assets/img/galeria-3.jpg';

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
    images: [confortImg, confort1Img],
  },
  {
    id: 'dubai-premium',
    name: 'Dubai Premium',
    tagline: 'Acabamento de hotel, todo dia',
    description:
      'Estrutura reforçada com camadas premium de espuma e tecido importado — a linha mais procurada para quem renova o quarto todo.',
    images: [dubaiImg, dubai1Img, dubai2Img],
  },
  {
    id: 'diamante',
    name: 'Diamante 220 M2',
    tagline: 'Molas ensacadas, conforto de elite',
    description:
      'Nosso topo de linha: molas ensacadas individualmente, camadas de espuma viscoelástica e acabamento em tecido nobre.',
    images: [diamanteImg, diamante1Img, diamante2Img, diamante3Img],
  },
  {
    id: 'veneza',
    name: 'Conjunto Veneza',
    tagline: 'Edite esta frase — diferencial da linha Veneza',
    description:
      'Edite esta descrição com os detalhes do conjunto Veneza (material, acabamento, o que o diferencia das outras linhas).',
    images: [venezaImg, veneza2Img],
  },
];

// Galeria — cada item pode ter "img: null" (mostra placeholder) ou a imagem importada.
export const GALLERY_IMAGES = [
  { img: confortImg, alt: 'Foto de confort plus' },
  { img: confort1Img, alt: 'Foto de confort plus' },
  { img: dubaiImg, alt: 'Foto de dubai premium' },
  { img: dubai1Img, alt: 'Foto de dubai premium' },
  { img: dubai2Img, alt: 'Foto de dubai premium' },
  { img: diamanteImg, alt: 'Foto de diamante' },
  { img: diamante1Img, alt: 'Foto de diamante' },
  { img: diamante2Img, alt: 'Foto de diamante' },
  { img: diamante3Img, alt: 'Foto de diamante' },
  { img: venezaImg, alt: 'Foto de veneza' },
  { img: veneza2Img, alt: 'Foto de veneza' },
  { img: galeria1, alt: 'Foto de galeria 1' },
  { img: galeria2, alt: 'Foto de galeria 2' },
  { img: galeria3, alt: 'Foto de galeria 3' },
];
