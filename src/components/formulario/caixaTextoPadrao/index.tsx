import { ChangeEventHandler } from 'react';
import * as St from './styles';

type propState = {
  name?: string;
  label: string;
  placeholder: string;
  value?: string;
  onChange?: Function;
};

const CaixaTextoPadrao = ({ name, label, placeholder, value, onChange }: propState) => {
  return (
    <St.Container>
      <St.Base>
        <St.Label>{label}</St.Label>
        <St.Input
          name={name}
          id={name}
          placeholder={placeholder}
          onChange={(data) => {
            onChange && onChange({ name, old: value, value: data.target.value });
          }}
          value={value}
        />
      </St.Base>
    </St.Container>
  );
};

export default CaixaTextoPadrao;
