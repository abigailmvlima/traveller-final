import * as St from './styles';

type propState = {
  children: any;
};

const ControlePagina = ({ children }: propState) => {
  return (
    <St.Container>
      <St.Contents>{children}</St.Contents>
    </St.Container>
  );
};

export default ControlePagina;
