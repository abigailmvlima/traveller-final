import { useState } from 'react';

import SVG from '../../assets/svg';
import BotaoPadrao from '../formulario/botaoPadrao';
import CaixaDataPadrao from '../formulario/caixaDataPadrao';
import CaixaTextoPadrao from '../formulario/caixaTextoPadrao';

import * as St from './styles';
import Imge from '../imge';

type propState = {};

const enum EMenuActive {
  lugares = 'lugares',
  hoteis = 'hoteis',
}

const FiltroPesquisaCarousel = ({}: propState) => {
  const [menuActive, setMenuActive] = useState<EMenuActive>(EMenuActive.hoteis);
  return (
    <St.Container>
      <St.Base>
        <St.BaseFiltro>
          <St.Menu>
            <St.MenuItem
              active={menuActive == EMenuActive.hoteis}
              onClick={() => {
                setMenuActive(EMenuActive.hoteis);
              }}
            >
              Hotéis
            </St.MenuItem>
            <St.MenuItem
              active={menuActive == EMenuActive.lugares}
              onClick={() => {
                setMenuActive(EMenuActive.lugares);
              }}
            >
              Lugares
            </St.MenuItem>
          </St.Menu>
          <St.Pagina active={menuActive == EMenuActive.hoteis}>
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
          <St.Pagina active={menuActive == EMenuActive.lugares}>
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
            <BotaoPadrao label={'Buscar'} />
          </St.Botao>
        </St.BaseFiltro>
      </St.Base>
      <Imge src={SVG.ponteEstaiadaSVG} alt={''} />
    </St.Container>
  );
};

export default FiltroPesquisaCarousel;
