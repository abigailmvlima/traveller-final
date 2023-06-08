import pp1 from './photosPeople/f1';

import fh1 from './photos/fh1';
import fh2 from './photos/fh2';
import fh3 from './photos/fh3';
import fh4 from './photos/fh4';
import fh5 from './photos/fh5';
import fh6 from './photos/fh6';
import fh7 from './photos/fh7';
import fh8 from './photos/fh8';

const listPhoto = shuffle([
  fh1.photo,
  fh2.photo,
  fh3.photo,
  fh4.photo,
  fh5.photo,
  fh6.photo,
  fh7.photo,
  fh8.photo,
]);

function shuffle(array: string[]) {
  let currentIndex = array.length;
  let temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

const data = [
  {
    id: 'D00001',
    title: 'Excelente localização e estrutura. Tivemos uma ótima estadia.',
    stars: 5,
    distance: 'A 4,26 km do centro',
    pricePerNight: 886.0,
    summary:
      'O Jatiúca Hotel & Resort possui 62 mil m² e está localizado em Maceió, a 25 minutos de carro do Aeroporto Internacional Zumbi dos Palmares e em frente à praia. Oferece jardim e piscina adulto e infantil.',
    text: 'O Jatiúca Hotel & Resort possui 62 mil m² e está localizado em Maceió, a 25 minutos de carro do Aeroporto Internacional Zumbi dos Palmares e em frente à praia. Oferece jardim e piscina adulto e infantil. <br> Você precisa saber: <br> • O hotel possui quadra de tênis, sala de jogos e serviço de massagem, por um custo extra. O café da manhã é servido diariamente com pães, frutas e bolos, além de café, leite e sucos. O Jatiúca Hotel & Resort também dispõe de 2 restaurantes, sendo que um deles possui vista ao mar. <br><br><b>Conheça os pontos de interesse mais próximos</b><br> • A 3 km do parque comercial de Maceió. <br> • A 5 minutos de carro da placa I Love Maceió. <br>  • A 6 km da catedral metropolitana. <br> O hotel conta com quadra de tênis, sala de jogos e serviço de massagem, por um custo extra.',
    convenience: {
      wifi: true,
      pool: true,
      parking: false,
      airConditioning: true,
      academy: false,
    },
    assessments: [
      {
        name: 'Gilberto',
        description: 'Muito bom.',
        photo: pp1.photo,
      },
    ],
    photo: fh1.photo,
    photos: listPhoto,
  },

  {
    id: 'D00001',
    title: 'Excelente localização e estrutura. Tivemos uma ótima estadia.',
    stars: 5,
    distance: 'A 4,26 km do centro',
    pricePerNight: 886.0,
    summary:
      'O Jatiúca Hotel & Resort possui 62 mil m² e está localizado em Maceió, a 25 minutos de carro do Aeroporto Internacional Zumbi dos Palmares e em frente à praia. Oferece jardim e piscina adulto e infantil.',
    text: 'O Jatiúca Hotel & Resort possui 62 mil m² e está localizado em Maceió, a 25 minutos de carro do Aeroporto Internacional Zumbi dos Palmares e em frente à praia. Oferece jardim e piscina adulto e infantil. <br> Você precisa saber: <br> • O hotel possui quadra de tênis, sala de jogos e serviço de massagem, por um custo extra. O café da manhã é servido diariamente com pães, frutas e bolos, além de café, leite e sucos. O Jatiúca Hotel & Resort também dispõe de 2 restaurantes, sendo que um deles possui vista ao mar. <br><br><b>Conheça os pontos de interesse mais próximos</b><br> • A 3 km do parque comercial de Maceió. <br> • A 5 minutos de carro da placa I Love Maceió. <br>  • A 6 km da catedral metropolitana. <br> O hotel conta com quadra de tênis, sala de jogos e serviço de massagem, por um custo extra.',
    convenience: {
      wifi: true,
      pool: true,
      parking: false,
      airConditioning: true,
      academy: false,
    },
    assessments: [
      {
        name: 'Gilberto',
        description: 'Muito bom.',
        photo: '',
      },
    ],
    photo: '',
    photos: [],
  },

  {
    id: 'D00001',
    title: 'Excelente localização e estrutura. Tivemos uma ótima estadia.',
    stars: 5,
    distance: 'A 4,26 km do centro',
    pricePerNight: 886.0,
    summary:
      'O Jatiúca Hotel & Resort possui 62 mil m² e está localizado em Maceió, a 25 minutos de carro do Aeroporto Internacional Zumbi dos Palmares e em frente à praia. Oferece jardim e piscina adulto e infantil.',
    text: 'O Jatiúca Hotel & Resort possui 62 mil m² e está localizado em Maceió, a 25 minutos de carro do Aeroporto Internacional Zumbi dos Palmares e em frente à praia. Oferece jardim e piscina adulto e infantil. <br> Você precisa saber: <br> • O hotel possui quadra de tênis, sala de jogos e serviço de massagem, por um custo extra. O café da manhã é servido diariamente com pães, frutas e bolos, além de café, leite e sucos. O Jatiúca Hotel & Resort também dispõe de 2 restaurantes, sendo que um deles possui vista ao mar. <br><br><b>Conheça os pontos de interesse mais próximos</b><br> • A 3 km do parque comercial de Maceió. <br> • A 5 minutos de carro da placa I Love Maceió. <br>  • A 6 km da catedral metropolitana. <br> O hotel conta com quadra de tênis, sala de jogos e serviço de massagem, por um custo extra.',
    convenience: {
      wifi: true,
      pool: true,
      parking: false,
      airConditioning: true,
      academy: false,
    },
    assessments: [
      {
        name: 'Gilberto',
        description: 'Muito bom.',
        photo: '',
      },
    ],
    photo: '',
    photos: [],
  },
];

export default data;
