import * as St from './styles';
import SVG from '../../assets/svg';
import Imge from '../imge';
import { TMenuItem } from '../../types/TMenuItem';

type propState = {
  items: TMenuItem[];
};

const MenuSuperior = ({ items }: propState) => {
  return (
    <St.Container>
      <Imge src={SVG.logoSVG} alt={''} />
      <St.Item>
        {items && items.map((item, key) => <St.ItemLabel key={key}>{item.label}</St.ItemLabel>)}
      </St.Item>
    </St.Container>
  );
};

export default MenuSuperior;
