/* 

  type: 1 = hotel
  type: 2 = lugares

  lc1 
    Ibis Anhembi
  lc2
  Confort Ibirapuera

  lc3
  Blue Tree Morumbi

  lc4
  Mercure São Paulo Pamplona

  lc5
  Sheraton São Paulo WTC Hotel


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

import lc3f1 from './photos/lc3.f1';
import lc3f2 from './photos/lc3.f2';
import lc3f3 from './photos/lc3.f3';
import lc3f4 from './photos/lc3.f4';
import lc3f5 from './photos/lc3.f5';
import lc3f6 from './photos/lc3.f6';
import lc3f7 from './photos/lc3.f7';
import lc3f8 from './photos/lc3.f8';

import lc4f1 from './photos/lc4.f1';
import lc4f2 from './photos/lc4.f2';
import lc4f3 from './photos/lc4.f3';
import lc4f4 from './photos/lc4.f4';
import lc4f5 from './photos/lc4.f5';
import lc4f6 from './photos/lc4.f6';
import lc4f7 from './photos/lc4.f7';
import lc4f8 from './photos/lc4.f8';

import lc5f1 from './photos/lc5.f1';
import lc5f2 from './photos/lc5.f2';
import lc5f3 from './photos/lc5.f3';
import lc5f4 from './photos/lc5.f4';
import lc5f5 from './photos/lc5.f5';
import lc5f6 from './photos/lc5.f6';
import lc5f7 from './photos/lc5.f7';
import lc5f8 from './photos/lc5.f8';

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

const lc3Photos = shuffle([
  lc3f1.photo,
  lc3f2.photo,
  lc3f3.photo,
  lc3f4.photo,
  lc3f5.photo,
  lc3f6.photo,
  lc3f7.photo,
  lc3f8.photo,
]);

const lc4Photos = shuffle([
  lc4f1.photo,
  lc4f2.photo,
  lc4f3.photo,
  lc4f4.photo,
  lc4f5.photo,
  lc4f6.photo,
  lc4f7.photo,
  lc4f8.photo,
]);

const lc5Photos = shuffle([
  lc5f1.photo,
  lc5f2.photo,
  lc5f3.photo,
  lc5f4.photo,
  lc5f5.photo,
  lc5f6.photo,
  lc5f7.photo,
  lc5f8.photo,
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
        name: 'Kaique',
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
    title: 'Blue Tree Premium Morumbi',
    stars: 5,
    distance: 'A 15 minutos de carro do Transamérica Expo',
    pricePerNight: 886.0,
    summary:
      'Com Wi-Fi grátis e uma localização privilegiada em frente ao Morumbi Shopping, o Blue Tree Premium Morumbi oferece academia, sauna, piscina coberta com deck e piscina ao ar livre com uma área para tomar sol de 20 metros.',
    text: 'Todos os quartos do Morumbi Blue Tree Premium dispõem de ar-condicionado, cofre, TV a cabo, telefone, frigobar, mesa de trabalho e janelas com isolamento acústico. Além disso, um serviço de quarto está disponível 24 horas. <br>O Noah Jonnie Space, o restaurante do hotel, serve diversas especialidades incluindo refeições leves e típicas de várias regiões. Um café da manhã delicioso também é servido diariamente.<br>O Blue Tree Premium Morumbi fica a 15 minutos de carro do Transamérica Expo Center e a 30 minutos de carro do São Paulo Expo. O Consulado dos EUA fica a 1,4 km.',
    convenience: {
      wifi: true,
      pool: true,
      parking: false,
      airConditioning: true,
      academy: false,
    },
    assessments: [
      {
        name: 'Rafaela',
        description: 'Muito bom.',
        photo: '',
      },
    ],
    photo: lc3f1.photo,
    photos: lc3Photos,
  },
  {
    id: 'H04',
    type: 1,
    bookNow: true,
    title: 'Mercure Sao Paulo Pamplona',
    stars: 5,
    distance: 'A 800 metros da Avenida Paulista',
    pricePerNight: 886.0,
    summary:
      'Com uma localização ideal no bairro badalado de Jardins, em São Paulo, o Mercure São Paulo Pamplona fica ao lado da Avenida 9 de Julho e a 800 metros da Avenida Paulista.',
    text: 'Este hotel 4 estrelas dispõe de acomodações espaçosas com ar-condicionado, área de estar e banheiro privativo. <br><br>Um café da manhã variado é servido diariamente no restaurante, onde você também pode desfrutar de pratos internacionais.<br><br>Você ainda pode mergulhar na piscina ao ar livre e relaxar na sauna. Além disso, você pode manter a forma e se exercitar na academia no local.<br><br>Esta é a parte de São Paulo de que os nossos hóspedes mais gostam, de acordo com avaliações independentes.',
    convenience: {
      wifi: true,
      pool: true,
      parking: false,
      airConditioning: true,
      academy: false,
    },
    assessments: [
      {
        name: 'Abigail',
        description: 'Muito bom.',
        photo: '',
      },
    ],
    photo: lc4f1.photo,
    photos: lc4Photos,
  },
  {
    id: 'H05',
    type: 1,
    bookNow: true,
    title: 'Sheraton São Paulo WTC Hotel',
    stars: 5,
    distance: 'A 5,5 km do Estádio do Morumbi.',
    pricePerNight: 886.0,
    summary:
      'Localizado dentro do World Trade Center, o Sheraton São Paulo alia a arquitetura moderna à decoração de luxo. O hotel dispõe de piscina, academia e business center de última geração com salas de reuniões.',
    text: 'Localizado dentro do World Trade Center, o Sheraton São Paulo alia a arquitetura moderna à decoração de luxo. O hotel dispõe de piscina, academia e business center de última geração com salas de reuniões.<br><br>Os quartos deste hotel da rede Sheraton possuem ar-condicionado, Wi-Fi gratuito, TV a cabo, frigobar e banheiro privativo. O serviço de quarto está disponível 24 horas.<br><br>O Sheraton São Paulo WTC Hotel conta com heliporto 24 horas para seu maior conforto.<br><br>O Sheraton WTC Hotel está situado no bairro do Brooklin, em São Paulo, ao lado do Shopping D&D e a 5,5 km do Estádio do Morumbi.',
    convenience: {
      wifi: true,
      pool: true,
      parking: false,
      airConditioning: true,
      academy: false,
    },
    assessments: [
      {
        name: 'Davi',
        description: 'Muito bom.',
        photo: '',
      },
    ],
    photo: lc5f1.photo,
    photos: lc5Photos,
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
      'Com Wi-Fi grátis e uma localização privilegiada em frente ao Morumbi Shopping, o Blue Tree Premium Morumbi oferece academia, sauna, piscina coberta com deck e piscina ao ar livre com uma área para tomar sol de 20 metros.',
    text: 'Todos os quartos do Morumbi Blue Tree Premium dispõem de ar-condicionado, cofre, TV a cabo, telefone, frigobar, mesa de trabalho e janelas com isolamento acústico. Além disso, um serviço de quarto está disponível 24 horas. <br>O Noah Jonnie Space, o restaurante do hotel, serve diversas especialidades incluindo refeições leves e típicas de várias regiões. Um café da manhã delicioso também é servido diariamente.<br>O Blue Tree Premium Morumbi fica a 15 minutos de carro do Transamérica Expo Center e a 30 minutos de carro do São Paulo Expo. O Consulado dos EUA fica a 1,4 km.',
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
