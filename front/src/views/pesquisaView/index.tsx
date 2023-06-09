import CardHome from '../../components/cardHome';
import ControlePagina from '../../components/controlePagina';
import FiltroPesquisaCarousel from '../../components/filtroPesquisaCarousel';
import InfoSeguranca from '../../components/infoSeguranca';
import MenuSuperior from '../../components/menuSuperior';
import Rodape from '../../components/rodape';
import TituloPadrao from '../../components/tituloPadrao';
import * as St from './styles';

import FiltroPesquisa from '../../components/filtroPesquisa';
import CardPesquisa from '../../components/cardPesquisa';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useEffect, useState } from 'react';
import Breadcrumbs from '../../components/breadcrumbs';
import { useHistory } from 'react-router';
import { TLocation } from '../../types/TLocation';
import { TSearchState } from '../../redux/modules/search/types';
import { TNavigateState } from '../../redux/modules/navigate/types';
import { EType } from '../../enum/EType';

export default () => {
  const history = useHistory();
  const searchState: TSearchState = useSelector((s: RootState) => s.search);
  const navigateState: TNavigateState = useSelector((s: RootState) => s.navigate);
  const [listCards, setListCards] = useState<TLocation[]>([]);
  const [type, setType] = useState<EType>();

  useEffect(() => {
    if (searchState.loading) return;
    if (!searchState.loaded) return;
    setListCards(searchState.response?.data || []);
  }, [searchState]);

  useEffect(() => {
    if (!navigateState?.data) return;
    const data: any = navigateState?.data;
    setType(data?.type || 1);
  }, [navigateState]);

  return (
    <ControlePagina>
      <St.FlexGrow>
        <MenuSuperior items={[{ label: 'Ajuda' }, { label: 'Cadastre-se' }, { label: 'Entrar' }]} />
        <FiltroPesquisa type={type || EType.hoteis} />
        <St.Row>
          <Breadcrumbs
            data={[
              {
                title: 'Traveller',
                onClick: () => {
                  history.push('/');
                },
              },
              {
                title: 'Pesquisa',
              },
            ]}
          />
        </St.Row>

        <St.Row>
          <TituloPadrao
            title={'Ofertas de hotéis populares'}
            subTitle={'Mais de 100 resultados para sua busca'}
          />
        </St.Row>

        <St.Cards>
          {listCards.map((card) => (
            <CardPesquisa {...card} />
          ))}
        </St.Cards>
        <St.Buttons>
          <St.Button>Ver mais ofertas</St.Button>
        </St.Buttons>
      </St.FlexGrow>
      <Rodape />
    </ControlePagina>
  );
};
