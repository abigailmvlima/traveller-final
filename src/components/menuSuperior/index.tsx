import * as St from './styles';
import SVG from '../../assets/svg';
import Imge from '../imge';
import { TMenuItem } from '../../types/TMenuItem';
import { useHistory } from 'react-router';

type propState = {
  items: TMenuItem[];
};

const MenuSuperior = ({ items }: propState) => {
  const history = useHistory();
  return (
    <St.Container>
      <Imge
        src={SVG.logoSVG}
        alt={''}
        onClick={() => {
          history.push('/');
        }}
      />
      <St.Item>
        {items && items.map((item, key) => <St.ItemLabel key={key}>{item.label}</St.ItemLabel>)}
      </St.Item>
    </St.Container>
  );
};

export default MenuSuperior;
