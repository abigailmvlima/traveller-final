import Imge from "../imge";
import * as St from "./styles";
import SVG from '../../assets/svg'


type propState = {
  title?: string;
  stars: number;

};

const CardHome = ({ title, stars }: propState) => {

  const loadStar = () => {
    const comp = []
    for (let i = 0; i < stars; i++) {
      comp.push(
        <St.StarImage>
          <Imge src={SVG.starSVG} alt={''} />
        </St.StarImage>
      )
    }
    return comp
  }

  return (
    <St.Container>
      <St.Image>
        <Imge src={SVG.blueMorumbiSVG} alt={''} />
      </St.Image>
      <St.Stars>
        {loadStar()}
      </St.Stars>
      <St.Title>{title}</St.Title>
      <St.Assessments>
      </St.Assessments>
    </St.Container>
  );
};

export default CardHome;
