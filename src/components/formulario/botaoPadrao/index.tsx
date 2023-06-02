import * as St from "./styles";

type propState = {
  label: string;
};

const BotaoPadrao = ({ label }: propState) => {
  return (
    <St.Container>
      <St.Title>{label}</St.Title>
    </St.Container>
  );
};

export default BotaoPadrao;
