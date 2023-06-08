import Imge from '../imge';
import * as St from './styles';
import SVG from '../../assets/svg';
import { TAssessment } from '../../types/TAssessment';
import CardAssessment from '../CardAssessment';
import actions from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { TLocation } from '../../types/TLocation';

interface propState extends TLocation {}

const CardHome = ({ id, title, stars, photo, assessments }: propState) => {
  const history = useHistory();
  const loadStar = () => {
    if (!stars) return <></>;
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
      <St.Image
        src={photo || ''}
        onClick={() => {
          history.push('/defalhes', { id });
        }}
      />
      <St.BaseText>
        <St.Stars>{loadStar()}</St.Stars>
        <St.Title>{title}</St.Title>
      </St.BaseText>
      <St.Assessments>
        {assessments &&
          assessments.map((assessment: TAssessment) => <CardAssessment data={assessment} />)}
      </St.Assessments>
    </St.Container>
  );
};

export default CardHome;
