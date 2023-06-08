import * as St from './styles';

type propState = {
  title?: string;
  subTitle?: string;
  stripe?: boolean;
};

const TituloPadrao = ({ title, subTitle, stripe }: propState) => {
  return (
    <St.Container stripe={stripe}>
      <St.Title>{title}</St.Title>
      <St.subTitle>{subTitle}</St.subTitle>
    </St.Container>
  );
};

export default TituloPadrao;
