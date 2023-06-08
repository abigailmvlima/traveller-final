import Imge from '../imge';

import * as St from './styles';
import { TAssessment } from '../../types/TAssessment';
import { EImageType } from '../../enums/EImage';

type propState = {
  data: TAssessment;
};
const CardAssessment = ({ data }: propState) => {
  return (
    <St.Container>
      <St.Icon>
        <Imge src={data.photo} alt={''} width={50} height={50} type={EImageType.circle} />
      </St.Icon>
      <St.BaseText>
        <St.Name>{data.name}</St.Name>
        <St.Description>{data.description}</St.Description>
      </St.BaseText>
    </St.Container>
  );
};

export default CardAssessment;
