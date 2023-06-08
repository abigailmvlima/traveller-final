/* 

  type: 1 = hotel
  type: 2 = lugares

  lc1 
    Ibis Anhembi
  lc2
  Confort Ibirapuera


*/

import pp1 from './photosPeople/f1';

import lc1f1 from './photos/lc1.f1';
import lc1f2 from './photos/lc1.f2';
import lc1f3 from './photos/lc1.f3';
import lc1f4 from './photos/lc1.f4';
import lc1f5 from './photos/lc1.f5';
import lc1f6 from './photos/lc1.f6';
import lc1f7 from './photos/lc1.f7';
import lc1f8 from './photos/lc1.f8';

import lc2f1 from './photos/lc2.f1';
import lc2f2 from './photos/lc2.f2';
import lc2f3 from './photos/lc2.f3';
import lc2f4 from './photos/lc2.f4';
import lc2f5 from './photos/lc2.f5';
import lc2f6 from './photos/lc2.f6';
import lc2f7 from './photos/lc2.f7';
import lc2f8 from './photos/lc2.f8';

// turismo
import lc6f1 from './photos/lc6.f1';

const lc1Photos = shuffle([
  lc1f1.photo,
  lc1f2.photo,
  lc1f3.photo,
  lc1f4.photo,
  lc1f5.photo,
  lc1f6.photo,
  lc1f7.photo,
  lc1f8.photo,
]);

const lc2Photos = shuffle([
  lc2f1.photo,
  lc2f2.photo,
  lc2f3.photo,
  lc2f4.photo,
  lc2f5.photo,
  lc2f6.photo,
  lc2f7.photo,
  lc2f8.photo,
]);

const lc6Photos = shuffle([lc6f1.photo]);

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
    id: 'H01',
    type: 1,
    bookNow: true,
    title: 'IBIS Styles São Paulo Anhembi.',
    stars: 5,
    distance: 'A 2,4 km do Expo Center Norte',
    pricePerNight: 886.0,
    summary:
      'O Ibis Styles São Paulo Anhembi está localizado no bairro de Santana, em São Paulo. O Wi-Fi é gratuito.',
    text: 'Com decoração temática de aviação, todos os quartos dispõem de ar-condicionado, TV de tela plana e frigobar. <br><br> O Ibis Styles São Paulo Anhembi conta com recepção 24 horas e serviço de lavanderia. <br><br> As crianças podem desfrutar da área de lazer.<br><br> O hotel fica a 1,2 km do Pavilhão de Exposições do Anhembi, a 2,4 km do Expo Center Norte e a 15 km do Aeroporto de Congonhas. Já o Aeroporto Internacional de Guarulhos fica a 23 km da propriedade.',
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
    photo: lc1f1.photo,
    photos: lc1Photos,
  },

  {
    id: 'H02',
    type: 1,
    bookNow: true,
    title: 'Comfort Ibirapuera',
    stars: 5,
    distance: 'A 3,5 km do Aeroporto de Congonhas',
    pricePerNight: 886.0,
    summary:
      'Dispondo de uma localização excelente em frente à estação de metrô Moema e a apenas 1,5 km do Parque Ibirapuera, o Comfort Ibirapuera fica no bairro badalado de Moema, em São Paulo. Uma academia e uma piscina na cobertura estão disponíveis.',
    text: 'O Wi-Fi gratuito está à sua disposição em todas as áreas. Um estacionamento está disponível por um custo adicional.<br> <br>Os quartos são modernos, apresentam decoração em madeira e possuem varanda, ar-condicionado, cofre, TV de tela plana a cabo e frigobar. O banheiro privativo conta com chuveiro.<br><br> Você pode desfrutar de refeições saborosas no restaurante Bomjardim, especializado na culinária internacional. Com uma seleção variada de vinhos, o restaurante também oferece coquetéis nacionais.<br><br>O hotel conta com recepção 24 horas, serviço de lavanderia e instalações para reuniões.<br><br> O Comfort Ibirapuera fica a apenas 5 minutos de carro do Shopping Ibirapuera e a 9 km do São Paulo Expo. <br><br> Você também estará a uma curta caminhada de diversos restaurantes, lojas e cafés elegantes.<br><br>O Aeroporto de São Paulo - Congonhas está situado a 3,5 km do hotel.',
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
    photo: lc2f1.photo,
    photos: lc2Photos,
  },

  {
    id: 'H03',
    type: 1,
    bookNow: true,
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
    id: 'T01',
    type: 2,
    bookNow: false,
    title: 'Catavento Cultural',
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
    photo: lc6f1.photo,
    photos: lc6Photos,
  },
];

export default data;
