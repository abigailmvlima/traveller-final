import * as St from './styles';

interface ImgeProps {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
}

const Imge = ({ src, width, height }: ImgeProps) => {
  return (
    <St.Container>
      <img src={src} alt={''} width={width} height={height} />
    </St.Container>
  );
};

export default Imge;
