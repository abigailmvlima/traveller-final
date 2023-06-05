import Imge from '../imge';
import SVG from '../../assets/svg';

import * as St from './styles';

type propState = {};

const Rodape = ({}: propState) => {
  return (
    <St.Container>
      <St.Title>© 2022 Traveller, Inc. All rights reserved</St.Title>
      <St.Icons>
        <St.Image>
          <Imge src={SVG.iconeFacebookSVG} alt={''} height={25} width={25} />
        </St.Image>
        <St.Image>
          <Imge src={SVG.iconeIinstagramSVG} alt={''} height={25} width={25} />
        </St.Image>
        <St.Image>
          <Imge src={SVG.iconeTwiterSVG} alt={''} height={25} width={25} />
        </St.Image>
      </St.Icons>
    </St.Container>
  );
};

export default Rodape;
