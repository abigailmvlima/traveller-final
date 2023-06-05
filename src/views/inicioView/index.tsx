import CardHome from '../../components/cardHome';
import ControlePagina from '../../components/controlePagina';
import FiltroPesquisaCarousel from '../../components/filtroPesquisaCarousel';
import InfoSeguranca from '../../components/infoSeguranca';
import MenuSuperior from '../../components/menuSuperior';
import Rodape from '../../components/rodape';
import TituloPadrao from '../../components/tituloPadrao';
import { TCardHome } from '../../types/TCardHome';
import * as St from './styles';

export default () => {
  const listCards: TCardHome[] = [
    {
      title: 'Excelente localização e estrutura. Tivemos uma ótima estadia.',
      stars: 5,
      assessments: [
        {
          name: 'Gilberto',
          description: 'Muito bom',
        },
      ],
    },
    {
      title: 'Recomendo visitar é um lugar lindo.',
      stars: 3,
      assessments: [
        {
          name: 'Gilberto',
          description: 'Muito bom',
        },
      ],
    },
    {
      title:
        'Lugar incrível, se você nunca veio ao Rio de Janeiro é parada obrigatória. A melhor maneira de ir ao Cristo Redentor é pelo trem porque permite uma vista linda.',
      stars: 5,
      assessments: [
        {
          name: 'Gilberto',
          description: 'Muito bom',
        },
      ],
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
          <CardHome stars={card.stars} title={card.title} assessments={card.assessments} />
        ))}
      </St.Cards>
      <St.Risco />
      <InfoSeguranca />
      <Rodape />
    </ControlePagina>
  );
};
