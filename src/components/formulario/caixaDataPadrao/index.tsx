import * as St from "./styles";

type propState = {
  label: string;
  placeholder: string;
};

const CaixaDataPadrao = ({ label, placeholder }: propState) => {
  return (
    <St.Container>
      <St.Base>
        <St.Label>{label}</St.Label>
        <St.Input placeholder={placeholder} />
      </St.Base>
    </St.Container>
  );
};

export default CaixaDataPadrao;
