import { MouseEventHandler } from 'react';
import { EImageType } from '../../enums/EImage';
import * as St from './styles';

interface ImgeProps {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  type?: EImageType;
  onClick?: MouseEventHandler | undefined;
}

const Imge = ({ src, width, height, type, onClick }: ImgeProps) => (
  <St.Container type={type || EImageType.default} onClick={onClick}>
    <St.Imgs src={src} alt={''} width={width} height={height} type={type || EImageType.default} />
  </St.Container>
);

export default Imge;
