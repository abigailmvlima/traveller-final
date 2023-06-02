import CardHome from '../../components/cardHome';
import ControlePagina from '../../components/controlePagina';
import FiltroPesquisaCarousel from '../../components/filtroPesquisaCarousel';
import MenuSuperior from '../../components/menuSuperior';
import TituloPadrao from '../../components/tituloPadrao';
import * as St from './styles';

export default () => {
  return (
    <ControlePagina>
      <MenuSuperior items={[{ label: 'Ajuda' }, { label: 'Cadastre-se' }, { label: 'Entrar' }]} />
      <FiltroPesquisaCarousel />
      <St.Row>
        <TituloPadrao
          title={'O que os hóspedes estão falando sobre as acomodações'}
          subTitle={'Mais de 490.000 avaliações com uma média de 4.8 de 5 estrelas'}
        />
      </St.Row>
      <St.Row>
        <CardHome />
      </St.Row>
      <St.Risco />
      <St.Row>
        <TituloPadrao title={'Reserve no Traveller e viaje com tranquilidade'} />
      </St.Row>
      <St.Row>teste</St.Row>
    </ControlePagina>
  );
};
