import Imge from '../imge';
import SVG from '../../assets/svg';

import TituloPadrao from '../tituloPadrao';
import * as St from './styles';

type propIconState = {
  icon: string;
  title: string;
  description: string;
};

const IconItem = (props: propIconState) => {
  return (
    <St.Icon>
      <St.Image>
        <Imge src={props.icon} alt={''} height={80} width={80} />
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
  return (
    <St.Container>
      <St.Row>
        <TituloPadrao title={'Reserve no Traveller e viaje com tranquilidade'} />
      </St.Row>
      <St.Contents>
        <IconItem
          icon={SVG.iconeEscudoSVG}
          title={'Proteção com o Traveller'}
          description={'A proteção mais ampla para estadias. Sempre incluso, sempre gratuito.'}
        />
        <IconItem
          icon={SVG.iconeFileSVG}
          title={'Opções de cancelamento flexíveis'}
          description={
            'As opções de cancelamento facilitam a remarcação de reservas se seus planos mudarem.'
          }
        />
        <IconItem
          icon={SVG.iconePhoneSVG}
          title={'Atendimento ao cliente 24h'}
          description={
            'Fale com nossa equipe de atendimento em qualquer lugar do mundo, a qualquer hora do dia'
          }
        />
      </St.Contents>
    </St.Container>
  );
};

export default InfoSeguranca;
