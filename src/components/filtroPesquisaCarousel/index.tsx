import { useState } from 'react';

import SVG from '../../assets/svg';
import BotaoPadrao from '../formulario/botaoPadrao';
import CaixaDataPadrao from '../formulario/caixaDataPadrao';
import CaixaTextoPadrao from '../formulario/caixaTextoPadrao';

import * as St from './styles';
import Imge from '../imge';
import { useHistory } from 'react-router';
import { EType } from '../../enum/EType';

type propState = {};

const FiltroPesquisaCarousel = ({}: propState) => {
  const history = useHistory();
  const [menuActive, setMenuActive] = useState<EType>(EType.hoteis);

  return (
    <St.Container>
      <St.Base>
        <St.BaseFiltro>
          <St.Menu>
            <St.MenuItem
              active={menuActive == EType.hoteis}
              onClick={() => {
                setMenuActive(EType.hoteis);
              }}
            >
              Hotéis
            </St.MenuItem>
            <St.MenuItem
              active={menuActive == EType.lugares}
              onClick={() => {
                setMenuActive(EType.lugares);
              }}
            >
              Lugares
            </St.MenuItem>
          </St.Menu>
          <St.Pagina active={menuActive == EType.hoteis}>
            <St.Row>
              <St.Col width={'100%'} margin={'0 0 2% 0'}>
                <CaixaTextoPadrao label="LOCALIZAÇÃO" placeholder="Em qualquer lugar" />
              </St.Col>
              <St.Col width={'48%'} margin={'0 2% 2% 0'}>
                <CaixaDataPadrao label="Entrada" placeholder="00/00/0000" />
              </St.Col>
              <St.Col width={'50%'}>
                <CaixaDataPadrao label="Saída" placeholder="00/00/0000" />
              </St.Col>

              <St.Col width={'48%'} margin={'0 2% 2% 0'}>
                <CaixaTextoPadrao label="ADULTOS" placeholder="" />
              </St.Col>
              <St.Col width={'50%'}>
                <CaixaTextoPadrao label="CRIANÇAS" placeholder="" />
              </St.Col>
            </St.Row>
          </St.Pagina>
          <St.Pagina active={menuActive == EType.lugares}>
            <St.Row>
              <St.Col width={'100%'}>
                <CaixaTextoPadrao label="ESTADO" placeholder="Estado" />
              </St.Col>
              <St.Col width={'100%'}>
                <CaixaDataPadrao label="CIDADE" placeholder="Cidade" />
              </St.Col>
              <St.Col width={'100%'}>
                <CaixaDataPadrao label="PONTO TURÍSTICO " placeholder="Ponto Turístico" />
              </St.Col>
            </St.Row>
          </St.Pagina>
          <St.Botao>
            <BotaoPadrao
              label={'Buscar'}
              onClick={() => {
                history.push('/pesquisa', { type: menuActive });
              }}
            />
          </St.Botao>
        </St.BaseFiltro>
      </St.Base>
      <Imge src={SVG.ponteEstaiadaSVG} alt={''} />
    </St.Container>
  );
};

export default FiltroPesquisaCarousel;
