import { MouseEventHandler } from 'react';
import * as St from './styles';

type propState = {
  label: string;
  onClick?: MouseEventHandler | undefined;
  size?: number;
};

const BotaoPadrao = ({ label, onClick, size }: propState) => {
  return (
    <St.Container onClick={onClick}>
      <St.Title size={size}>{label}</St.Title>
    </St.Container>
  );
};

export default BotaoPadrao;
