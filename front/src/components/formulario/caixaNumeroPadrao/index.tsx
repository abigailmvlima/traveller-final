import { ChangeEventHandler } from 'react';
import * as St from './styles';

type propState = {
  name?: string;
  label: string;
  placeholder: string;
  value?: string;
  onChange?: Function;
};

const CaixaNumeroPadrao = ({ name, label, placeholder, value, onChange }: propState) => {
  return (
    <St.Container>
      <St.Base>
        <St.Label>{label}</St.Label>
        <St.Input
          name={name}
          id={name}
          type="number"
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

export default CaixaNumeroPadrao;
