import styled, { css } from 'styled-components';

export const Row = styled.div`
  display: flex;
  flex-direction: column;
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
