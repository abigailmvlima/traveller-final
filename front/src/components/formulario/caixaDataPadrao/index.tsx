import * as St from './styles';

type propState = {
  label: string;
  placeholder: string;
  name?: string;
  value?: string;
  onChange?: Function;
};

const CaixaDataPadrao = ({ name, label, placeholder, onChange, value }: propState) => {
  return (
    <St.Container>
      <St.Base>
        <St.Label>{label}</St.Label>
        <St.Input
          name={name}
          id={name}
          type="date"
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

export default CaixaDataPadrao;
