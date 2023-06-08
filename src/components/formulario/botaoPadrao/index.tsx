import { MouseEventHandler } from 'react';
import * as St from './styles';

type propState = {
  label: string;
  onClick?: MouseEventHandler | undefined;
};

const BotaoPadrao = ({ label, onClick }: propState) => {
  return (
    <St.Container onClick={onClick}>
      <St.Title>{label}</St.Title>
    </St.Container>
  );
};

export default BotaoPadrao;
