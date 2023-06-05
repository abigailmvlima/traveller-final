import { EImageType } from '../../enums/EImage';
import * as St from './styles';

interface ImgeProps {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  type?: EImageType;
}

const Imge = ({ src, width, height, type }: ImgeProps) => (
  <St.Container type={type || EImageType.default}>
    <St.Imgs src={src} alt={''} width={width} height={height} type={type || EImageType.default} />
  </St.Container>
);

export default Imge;
