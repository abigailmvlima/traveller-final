import * as St from './styles';

interface ImgeProps {
  src: string;
  alt: string;
}

const Imge = ({ src }: ImgeProps) => {
  return (
    <St.Container>
      <img src={src} alt={''} />
    </St.Container>
  );
};

export default Imge;
