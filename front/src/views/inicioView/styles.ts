import styled, { css } from 'styled-components';

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
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
  flex-direction: row;
  flex-wrap: wrap;
  padding-bottom: 15px;
  margin-bottom: 50px;
  border-bottom: 1px solid #e3e3e3;
`;
