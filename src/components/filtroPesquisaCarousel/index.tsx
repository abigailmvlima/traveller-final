import { useState } from 'react';

import SVG from '../../assets/svg';
import BotaoPadrao from '../formulario/botaoPadrao';
import CaixaDataPadrao from '../formulario/caixaDataPadrao';
import CaixaTextoPadrao from '../formulario/caixaTextoPadrao';

import * as St from './styles';
import Imge from '../imge';
import { useHistory } from 'react-router';
import { EType } from '../../enum/EType';
import { useDispatch } from 'react-redux';
import CaixaNumeroPadrao from '../formulario/caixaNumeroPadrao';
import actions from '../../redux/actions';

type propState = {};

const FiltroPesquisaCarousel = ({}: propState) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [menuActive, setMenuActive] = useState<EType>(EType.hoteis);

  const [location, setLocation] = useState<string>();
  const [dateEntry, setDateEntry] = useState<string>();
  const [dateDeparture, setDateDeparture] = useState<string>();
  const [adults, setAdults] = useState<string>();
  const [children, setChildren] = useState<string>();

  const [state, setState] = useState<string>();
  const [city, setCity] = useState<string>();

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
                <CaixaTextoPadrao
                  name={'location'}
                  label="LOCALIZAÇÃO"
                  placeholder="Em qualquer lugar"
                  onChange={(data: any) => {
                    setLocation(data.value);
                  }}
                  value={location}
                />
              </St.Col>
              <St.Col width={'48%'} margin={'0 2% 2% 0'}>
                <CaixaDataPadrao
                  name={'dateEntry'}
                  label="Entrada"
                  placeholder="00/00/0000"
                  onChange={(data: any) => {
                    setDateEntry(data.value);
                  }}
                  value={dateEntry}
                />
              </St.Col>
              <St.Col width={'50%'}>
                <CaixaDataPadrao
                  name={'dateDeparture'}
                  label="Saída"
                  placeholder="00/00/0000"
                  onChange={(data: any) => {
                    setDateDeparture(data.value);
                  }}
                  value={dateDeparture}
                />
              </St.Col>

              <St.Col width={'48%'} margin={'0 2% 2% 0'}>
                <CaixaNumeroPadrao
                  name={'adults'}
                  label="ADULTOS"
                  placeholder=""
                  onChange={(data: any) => {
                    setAdults(data.value);
                  }}
                  value={adults}
                />
              </St.Col>
              <St.Col width={'50%'}>
                <CaixaNumeroPadrao
                  name={'children'}
                  label="CRIANÇAS"
                  placeholder=""
                  onChange={(data: any) => {
                    setChildren(data.value);
                  }}
                  value={children}
                />
              </St.Col>
            </St.Row>
          </St.Pagina>
          <St.Pagina active={menuActive == EType.lugares}>
            <St.Row>
              <St.Col width={'100%'} margin={'0 2% 2% 0'}>
                <CaixaTextoPadrao
                  name={'state'}
                  label="ESTADO"
                  placeholder="Estado"
                  onChange={(data: any) => {
                    setState(data.value);
                  }}
                  value={state}
                />
              </St.Col>
              <St.Col width={'100%'} margin={'0 2% 2% 0'}>
                <CaixaTextoPadrao
                  name={'city'}
                  label="Cidade"
                  placeholder="Cidade"
                  onChange={(data: any) => {
                    setCity(data.value);
                  }}
                  value={city}
                />
              </St.Col>
              {/* <St.Col width={'100%'}>
                <CaixaDataPadrao label="PONTO TURÍSTICO " placeholder="Ponto Turístico" />
              </St.Col> */}
            </St.Row>
          </St.Pagina>
          <St.Botao>
            <BotaoPadrao
              label={'Buscar'}
              onClick={() => {
                dispatch(
                  actions.search.execute({
                    type: menuActive,
                    ...(menuActive == EType.hoteis
                      ? {
                          location,
                          dateEntry,
                          dateDeparture,
                          adults,
                          children,
                        }
                      : {
                          state,
                          city,
                        }),
                  })
                );

                history.push('/pesquisa', { type: menuActive });
              }}
            />
          </St.Botao>
        </St.BaseFiltro>
      </St.Base>
      <St.Image src={SVG.ponteEstaiadaSVG} />
    </St.Container>
  );
};

export default FiltroPesquisaCarousel;
