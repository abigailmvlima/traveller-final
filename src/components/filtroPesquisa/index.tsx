import Imge from '../imge';

import * as St from './styles';
import { TAssessment } from '../../types/TAssessment';
import { EImageType } from '../../enums/EImage';
import CaixaTextoPadrao from '../formulario/caixaTextoPadrao';
import CaixaDataPadrao from '../formulario/caixaDataPadrao';
import BotaoPadrao from '../formulario/botaoPadrao';
import actions from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import CaixaNumeroPadrao from '../formulario/caixaNumeroPadrao';
import BotaoSearch from '../formulario/botaoSearch';
import { useHistory } from 'react-router';
import { EType } from '../../enum/EType';

type propState = {
  redirectRoute?: boolean;
  type: EType;
};
const FiltroPesquisa = ({ redirectRoute, type }: propState) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [location, setLocation] = useState<string>();
  const [dateEntry, setDateEntry] = useState<string>();
  const [dateDeparture, setDateDeparture] = useState<string>();
  const [adults, setAdults] = useState<string>();
  const [children, setChildren] = useState<string>();

  return (
    <St.Container>
      <St.Contents>
        <St.Row>
          <St.Title>Hospedagem</St.Title>
        </St.Row>
        <St.Row>
          <St.Col margin={'0 8px 0 0'}>
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
          <St.Col margin={'0 8px 0 0'}>
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
          <St.Col margin={'0 8px 0 0'}>
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

          <St.Col margin={'0 8px 0 0'}>
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
          <St.Col>
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
          <St.Botao>
            <BotaoSearch
              label={'Buscar'}
              onClick={() => {
                dispatch(
                  actions.search.execute({
                    type: type,
                    location,
                    dateEntry,
                    dateDeparture,
                    adults,
                    children,
                  })
                );

                if (redirectRoute == true) {
                  history.push('/pesquisa');
                }
              }}
            />
          </St.Botao>
        </St.Row>
      </St.Contents>
    </St.Container>
  );
};

export default FiltroPesquisa;
