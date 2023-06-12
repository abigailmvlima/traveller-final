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
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../redux/actions';
import { TNavigateState } from '../../redux/modules/navigate/types';
import { RootState } from '../../redux/store';
import { TSearchState } from '../../redux/modules/search/types';

export default () => {
  const dispatch = useDispatch();
  const searchState: TSearchState = useSelector((s: RootState) => s.search);
  const [listCards, setListCards] = useState<TLocation[]>([]);

  useEffect(() => {
    dispatch(
      actions.search.execute({
        limit: 3,
      })
    );
  }, []);

  useEffect(() => {
    if (searchState.loading) return;
    if (!searchState.loaded) return;
    setListCards(searchState.response?.data || []);
  }, [searchState]);

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
        {listCards.slice(0, 3).map((card) => (
          <CardHome {...card} />
        ))}
      </St.Cards>
      <InfoSeguranca />
      <Rodape />
    </ControlePagina>
  );
};
