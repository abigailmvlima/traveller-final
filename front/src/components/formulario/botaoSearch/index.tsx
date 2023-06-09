import { MouseEventHandler } from 'react';
import * as St from './styles';
import Imge from '../../imge';
import SVG from '../../../assets/svg';

type propState = {
  label: string;
  onClick?: MouseEventHandler | undefined;
};

const BotaoSearch = ({ label, onClick }: propState) => {
  return (
    <St.Container onClick={onClick}>
      <St.Image>
        <Imge src={SVG.iconSearchSVG} alt={''} />
      </St.Image>
      <St.Title>{label}</St.Title>
    </St.Container>
  );
};

export default BotaoSearch;
