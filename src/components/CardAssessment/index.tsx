import Imge from '../imge';

import * as St from './styles';
import { TAssessment } from '../../types/TAssessment';

type propState = {
  data: TAssessment;
};
const CardAssessment = ({ data }: propState) => {
  return (
    <St.Container>
      <St.Icon>
        <Imge src={data.foto} alt={''} />
      </St.Icon>
      <St.Name>{data.name}</St.Name>
      <St.Description>{data.description}</St.Description>
    </St.Container>
  );
};

export default CardAssessment;
