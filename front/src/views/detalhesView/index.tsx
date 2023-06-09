import CardHome from '../../components/cardHome';
import ControlePagina from '../../components/controlePagina';
import MenuSuperior from '../../components/menuSuperior';
import Rodape from '../../components/rodape';
import TituloPadrao from '../../components/tituloPadrao';
import * as St from './styles';

import FiltroPesquisa from '../../components/filtroPesquisa';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useEffect, useState } from 'react';
import Breadcrumbs from '../../components/breadcrumbs';
import { useHistory } from 'react-router';
import { TNavigateState } from '../../redux/modules/navigate/types';
import { TLocation } from '../../types/TLocation';
import BotaoPadrao from '../../components/formulario/botaoPadrao';
import { EType } from '../../enum/EType';

export default () => {
  const history = useHistory();
  const navigateState: TNavigateState = useSelector((s: RootState) => s.navigate);
  const [item, setItem] = useState<TLocation>();

  function shuffle(array: string[]) {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  useEffect(() => {
    if (!navigateState?.data) return;
    const itemTemp: TLocation = navigateState.data;
    const photos = shuffle(itemTemp?.photos || []);
    setItem({ ...itemTemp, photosRrandom: photos });
  }, [navigateState]);

  return (
    <ControlePagina>
      <St.FlexGrow>
        <MenuSuperior items={[{ label: 'Ajuda' }, { label: 'Cadastre-se' }, { label: 'Entrar' }]} />
        <FiltroPesquisa redirectRoute={true} type={item?.type || EType.hoteis} />
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
                title: 'Detalhes',
              },
            ]}
          />
        </St.Row>

        <St.Row>
          <TituloPadrao title={item?.title} stripe={true} />
        </St.Row>
        <St.Row m={'0 20px 20px 20px '}>
          <St.TextBase>
            <St.PhotoBase>
              <St.Foto src={item?.photo || ''} />
            </St.PhotoBase>
            <St.Text dangerouslySetInnerHTML={{ __html: item?.text || '' }}></St.Text>
          </St.TextBase>
        </St.Row>
        {item?.photosRrandom &&
          Array.isArray(item?.photosRrandom) &&
          item?.photosRrandom.length > 1 && (
            <>
              <St.Row>
                <TituloPadrao title={'Fotos'} stripe={true} />
              </St.Row>
              <St.Row m={'0 0 0 40px '}>
                <St.Gallery>
                  {item?.photosRrandom &&
                    Array.isArray(item?.photosRrandom) &&
                    item?.photosRrandom.length > 1 &&
                    item.photosRrandom.map((m) => <St.PhotoGallery src={m || ''} />)}
                </St.Gallery>
              </St.Row>
            </>
          )}
        {item?.bookNow && (
          <St.Butons>
            <St.Buton>
              <BotaoPadrao
                size={17}
                label={'Reservar já'}
                onClick={() => {
                  history.push('/pesquisa');
                }}
              />
            </St.Buton>
          </St.Butons>
        )}

        <St.Attributes>
          {item?.attributes?.title && (
            <St.Row>
              <TituloPadrao title={item?.attributes?.title} stripe={true} />
            </St.Row>
          )}

          {Array.isArray(item?.attributes?.data) &&
            item?.attributes?.data.map((d) => (
              <St.AttributesData>
                <St.AttributesDataTitle>{d.title}</St.AttributesDataTitle>
                <St.AttributesDataItem>
                  {Array.isArray(d.item) &&
                    d.item.map((it) => (
                      <St.AttributesDataItemBase>
                        <St.AttributesDataTitle>{it.title}</St.AttributesDataTitle>
                        <St.AttributesDataItemDescription
                          dangerouslySetInnerHTML={{ __html: it.description || '' }}
                        />
                      </St.AttributesDataItemBase>
                    ))}
                </St.AttributesDataItem>
              </St.AttributesData>
            ))}
        </St.Attributes>
      </St.FlexGrow>
      <Rodape />
    </ControlePagina>
  );
};
