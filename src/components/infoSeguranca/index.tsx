import Imge from '../imge';
import SVG from '../../assets/svg';

import TituloPadrao from '../tituloPadrao';
import * as St from './styles';
import { useState } from 'react';

type propIconState = {
  icon: string;
  title: string;
  description: string;
};

const data = [
  {
    icon: SVG.iconeEscudoSVG,
    title: 'Proteção com o Traveller',
    description: 'A proteção mais ampla para estadias. Sempre incluso, sempre gratuito.',
  },
  {
    icon: SVG.iconeFileSVG,
    title: 'Opções de cancelamento flexíveis',
    description:
      'As opções de cancelamento facilitam a remarcação de reservas se seus planos mudarem.',
  },
  {
    icon: SVG.iconePhoneSVG,
    title: 'Atendimento ao cliente 24h',
    description:
      'Fale com nossa equipe de atendimento em qualquer lugar do mundo, a qualquer hora do dia',
  },
];

const IconItem = (props: propIconState) => {
  return (
    <St.Icon>
      <St.Image>
        <Imge src={props.icon} alt={''} height={70} width={70} />
      </St.Image>
      <St.IconText>
        <St.Title>{props.title}</St.Title>
        <St.Description>{props.description}</St.Description>
      </St.IconText>
    </St.Icon>
  );
};

type propState = {};

const InfoSeguranca = ({}: propState) => {
  const [list, setList] = useState(data || []);
  return (
    <St.Container>
      <St.Row>
        <TituloPadrao title={'Reserve no Traveller e viaje com tranquilidade'} />
      </St.Row>
      <St.Contents>
        {list.map((item) => (
          <IconItem icon={item.icon} title={item.title} description={item.description} />
        ))}
      </St.Contents>
    </St.Container>
  );
};

export default InfoSeguranca;
