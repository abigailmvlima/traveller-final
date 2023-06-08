import Imge from '../imge';
import * as St from './styles';
import SVG from '../../assets/svg';
import { useHistory } from 'react-router';
import { TLocation } from '../../types/TLocation';

interface propState extends TLocation {}

const CardPesquisa = (props: propState) => {
  const { id, title, distance, summary, photo, convenience, pricePerNight } = props;
  const history = useHistory();
  console.log(11111, props);
  return (
    <St.Container>
      <St.Foto src={photo || ''} />
      <St.BaseText>
        <St.Title>{title}</St.Title>
        <St.Distance>{distance}</St.Distance>
        <St.Icons>
          {convenience && convenience.wifi && (
            <St.Image>
              <Imge src={SVG.iconWifiSVG} alt={''} />
            </St.Image>
          )}
          {convenience && convenience.pool && (
            <St.Image>
              <Imge src={SVG.iconPoolSVG} alt={''} />
            </St.Image>
          )}
          {convenience && convenience.parking && (
            <St.Image>
              <Imge src={SVG.iconParkingSVG} alt={''} />
            </St.Image>
          )}
          {convenience && convenience.airConditioning && (
            <St.Image>
              <Imge src={SVG.iconAirConditioningSVG} alt={''} />
            </St.Image>
          )}
          {convenience && convenience.academy && (
            <St.Image>
              <Imge src={SVG.iconAcademySVG} alt={''} />
            </St.Image>
          )}
        </St.Icons>
        <St.Summary>{summary}</St.Summary>
      </St.BaseText>
      <St.BasePricePerNight>
        <St.PricePerNightTitle>Preço por noite</St.PricePerNightTitle>
        <St.PricePerNight>
          {pricePerNight &&
            pricePerNight.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </St.PricePerNight>
        <St.PricePerNighButton
          onClick={() => {
            history.push('/defalhes', props);
          }}
        >
          Ver detalhes
        </St.PricePerNighButton>
      </St.BasePricePerNight>
    </St.Container>
  );
};

export default CardPesquisa;
