import { EType } from '../../../enum/EType';
import * as St from './styles';

type propState = {
  label: string;
  placeholder: string;
  name?: string;
  value?: string;
  onChange?: Function;
};

const CaixaSelecionaTipo = ({ name, label, placeholder, onChange, value }: propState) => {
  return (
    <St.Container>
      <St.Base>
        <St.Label>{label}</St.Label>
        <St.Input
          name={name}
          id={name}
          value={value}
          onChange={(data) => {
            onChange && onChange({ name, old: value, value: data.target.value });
          }}
        >
          <option value={EType.hoteis}>Hotéis</option>
          <option value={EType.lugares}>Lugares</option>
        </St.Input>
      </St.Base>
    </St.Container>
  );
};

export default CaixaSelecionaTipo;
