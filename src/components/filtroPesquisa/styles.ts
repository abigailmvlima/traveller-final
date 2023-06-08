import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  background-color: #9c0ccf;
  box-shadow: 0px 5px 10px 1px rgba(0, 0, 0, 0.35);
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px 40px 15px 40px;
`;

export const Title = styled.div`
  display: flex;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 34px;
  letter-spacing: 0.04em;
  color: #ffffff;
  margin-bottom: 8px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

interface ColProps {
  width?: number | string;
  margin?: string;
}
export const Col = styled.div<ColProps>`
  display: flex;
  flex-direction: column;
  ${(p) => p.width && `width: ${p.width};`}
  ${(p) => p.margin && `margin: ${p.margin};`}
`;

export const Icon = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1px;
`;

export const Image = styled.div`
  display: flex;
  height: 100px;
  margin-left: 10px;
`;

export const IconText = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

export const Name = styled.div`
  display: flex;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 22px;
  color: #9c0ccf;
`;

export const Description = styled.div`
  display: flex;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: #000000;
`;

export const Botao = styled.div`
  display: flex;
  margin-left: 10px;
`;
