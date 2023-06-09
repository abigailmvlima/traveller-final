import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #cdcdcd;
  margin-bottom: 25px;
`;

export const Title = styled.div`
  display: flex;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 34px;
  letter-spacing: 0.04em;
  color: #000000;
  word-wrap: break-word;
`;

export const Summary = styled.div`
  display: flex;
  width: 900px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.04em;
  color: #000000;
  margin: 10px 0;
  text-align: justify;
  white-space: pre-wrap;
`;
export const Distance = styled.div`
  display: flex;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: #5e5e5e;
  margin: 5px 0;
`;

export const BaseText = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 20px;
  flex-grow: 1;
`;

export const Assessments = styled.div`
  display: flex;
`;

export const Stars = styled.div`
  display: flex;
  margin-bottom: 10px;
  margin-left: 5px;
`;

export const StarImage = styled.div`
  display: flex;
`;

export const Icons = styled.div`
  display: flex;
  margin: 15px 0 5px 0;
`;

export const PhotoBase = styled.div`
  display: flex;
`;

interface FotoProps {
  src: string;
}

export const Foto = styled.div<FotoProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 410px;
  height: 250px;
  background-image: url(${(p) => p.src});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;

export const Image = styled.div`
  display: flex;
  margin-right: 10px;
`;

export const BasePricePerNight = styled.div`
  display: flex;
  flex-direction: column;
  width: 310px;
  border-left: 1px solid #cdcdcd;
  align-items: center;
  justify-content: space-evenly;
`;

export const PricePerNightTitle = styled.div`
  display: flex;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.04em;
  color: #000000;
`;

export const PricePerNight = styled.div`
  display: flex;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.04em;
  color: #000000;
`;

export const PricePerNighButton = styled.div`
  display: flex;
  background: #9c0ccf;
  border-radius: 10px;
  width: 60%;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.04em;
  color: #ffffff;

  text-align: center;
  flex-direction: row;
  justify-content: center;
  padding: 5px 0;
`;
