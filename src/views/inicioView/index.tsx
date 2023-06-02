import CardHome from '../../components/cardHome';
import ControlePagina from '../../components/controlePagina';
import FiltroPesquisaCarousel from '../../components/filtroPesquisaCarousel';
import MenuSuperior from '../../components/menuSuperior';
import TituloPadrao from '../../components/tituloPadrao';
import * as St from './styles';

export default () => {
  const listCards = [
    {
      title: 'Excelente localização e estrutura. Tivemos uma ótima estadia.',
      stars: 5,
    },
    {
      title: 'Recomendo visitar é um lugar lindo.',
      stars: 3,
    },
    {
      title:
        'Lugar incrível, se você nunca veio ao Rio de Janeiro é parada obrigatória. A melhor maneira de ir ao Cristo Redentor é pelo trem porque permite uma vista linda.',
      stars: 5,
    },
  ];

  return (
    <ControlePagina>
      <MenuSuperior items={[{ label: 'Ajuda' }, { label: 'Cadastre-se' }, { label: 'Entrar' }]} />
      <St.FiltroPesquisaCarousel>
        <FiltroPesquisaCarousel />
      </St.FiltroPesquisaCarousel>
      <St.Risco />
      <St.Row>
        <TituloPadrao
          title={'O que os hóspedes estão falando sobre as acomodações'}
          subTitle={'Mais de 490.000 avaliações com uma média de 4.8 de 5 estrelas'}
        />
      </St.Row>
      <St.Cards>
        {listCards.map((card) => (
          <CardHome stars={card.stars} title={card.title} />
        ))}
      </St.Cards>
      <St.Risco />
      <St.Row>
        <TituloPadrao title={'Reserve no Traveller e viaje com tranquilidade'} />
      </St.Row>
      <St.Row>teste</St.Row>
    </ControlePagina>
  );
};
