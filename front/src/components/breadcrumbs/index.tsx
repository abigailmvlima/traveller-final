import Imge from '../imge';
import SVG from '../../assets/svg';

import * as St from './styles';
import { TBreadcrumbsData } from '../../types/TBreadcrumbs';

type propState = {
  data: TBreadcrumbsData[];
};

const Breadcrumbs = ({ data }: propState) => {
  return (
    <St.Container>
      {data.map((d, key) => {
        const atLast = data.length - 1 == key;
        return (
          <St.Icons key={key}>
            <St.Title atLast={atLast} onClick={d.onClick && d.onClick}>
              {d.title}
            </St.Title>
            {!atLast && (
              <St.Image>
                <Imge src={SVG.iconChevronRightSVG} alt={''} height={15} width={15} />
              </St.Image>
            )}
          </St.Icons>
        );
      })}
    </St.Container>
  );
};

export default Breadcrumbs;
