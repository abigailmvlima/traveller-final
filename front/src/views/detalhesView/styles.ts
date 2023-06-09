import styled, { css } from 'styled-components';

type RowStyle = {
  m?: string;
};

export const Row = styled.div<RowStyle>`
  display: flex;
  flex-direction: column;
  ${(p) => p.m && `margin: ${p.m};`}
`;

export const TextBase = styled.div`
  display: flex;
  background: #f8f8f8;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Risco = styled.div`
  display: flex;
  height: 1px;
  background-color: #8d8d8d;
  margin: 50px 10px;
`;

export const FiltroPesquisaCarousel = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #e3e3e3;
  padding-bottom: 50px;
  margin-bottom: 10px;
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;
  margin-bottom: 50px;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Button = styled.div`
  display: flex;
  background: #ffffff;
  border: 1px solid #9c0ccf;
  border-radius: 10px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 15px;
  letter-spacing: 0.04em;
  color: #9c0ccf;
  justify-content: center;
  text-align: center;
  padding: 10px 30px;
`;

export const FlexGrow = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

interface FotoProps {
  src: string;
}
export const Foto = styled.div<FotoProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 450px;
  background-image: url(${(p) => p.src});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;

export const PhotoBase = styled.div`
  display: flex;
  margin: 20px;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0.04em;
  color: #000000;
`;

export const Summary = styled.div`
  display: flex;
`;

export const Gallery = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const PhotoGallery = styled.div<FotoProps>`
  justify-content: center;
  align-items: center;
  width: 24%;
  height: 260px;
  background-image: url(${(p) => p.src});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.35);
  margin-right: 15px;
  margin-bottom: 15px;
`;

export const Butons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 20px;
  margin-right: 20px;
`;

export const Buton = styled.div`
  display: flex;
`;

export const Attributes = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AttributesData = styled.div`
  display: flex;
  flex-direction: column;
  background: #f8f8f8;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding-bottom: 20px;
  margin-bottom: 30px;
  margin: 20px 20px;
`;

export const AttributesDataTitle = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 22px;
  letter-spacing: 0.04em;
  color: #000000;
  margin: 20px 20px 0 20px;
`;

export const AttributesDataItem = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AttributesDataItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 20px 0 20px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0.04em;
  color: #000000;
`;

export const AttributesDataItemBase = styled.div`
  display: flex;
  flex-direction: column;
`;
