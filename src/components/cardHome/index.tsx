import Imge from '../imge';
import * as St from './styles';
import SVG from '../../assets/svg';
import { TAssessment } from '../../types/TAssessment';
import CardAssessment from '../CardAssessment';

type propState = {
  title?: string;
  stars: number;
  assessments: TAssessment[];
};

const CardHome = ({ title, stars, assessments }: propState) => {
  const loadStar = () => {
    const comp = [];
    for (let i = 0; i < stars; i++) {
      comp.push(
        <St.StarImage>
          <Imge src={SVG.starSVG} alt={''} />
        </St.StarImage>
      );
    }
    return comp;
  };

  return (
    <St.Container>
      <St.Image>
        <Imge src={SVG.blueMorumbiSVG} alt={''} />
      </St.Image>
      <St.Stars>{loadStar()}</St.Stars>
      <St.Title>{title}</St.Title>
      <St.Assessments>
        {assessments.map((assessment: TAssessment) => (
          <CardAssessment data={assessment} />
        ))}
      </St.Assessments>
    </St.Container>
  );
};

export default CardHome;
