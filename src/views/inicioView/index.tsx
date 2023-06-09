import CardHome from '../../components/cardHome';
import ControlePagina from '../../components/controlePagina';
import FiltroPesquisaCarousel from '../../components/filtroPesquisaCarousel';
import InfoSeguranca from '../../components/infoSeguranca';
import MenuSuperior from '../../components/menuSuperior';
import Rodape from '../../components/rodape';
import TituloPadrao from '../../components/tituloPadrao';
import * as St from './styles';

import cardsHome from '../../mocks/cardsHome';
import { TLocation } from '../../types/TLocation';

export default () => {
  const listCards: TLocation[] = cardsHome();

  return (
    <ControlePagina>
      <MenuSuperior items={[{ label: 'Ajuda' }, { label: 'Cadastre-se' }, { label: 'Entrar' }]} />
      <St.FiltroPesquisaCarousel>
        <FiltroPesquisaCarousel />
      </St.FiltroPesquisaCarousel>
      <St.Row>
        <TituloPadrao
          title={'O que os hóspedes estão falando sobre as acomodações'}
          subTitle={'Mais de 490.000 avaliações com uma média de 4.8 de 5 estrelas'}
        />
      </St.Row>
      <St.Cards>
        {listCards.map((card) => (
          <CardHome {...card} />
        ))}
      </St.Cards>
      <InfoSeguranca />
      <Rodape />
    </ControlePagina>
  );
};
