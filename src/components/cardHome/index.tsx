import * as St from "./styles";

type propState = {
  title?: string;
  subTitle?: string;
};

const CardHome = ({ title, subTitle }: propState) => {
  return (
    <St.Container>
      <St.Title>{title}</St.Title>
      <St.subTitle>{subTitle}</St.subTitle>
    </St.Container>
  );
};

export default CardHome;
