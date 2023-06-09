import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin: 15px 0;
`;

type TTitleStyle = {
  atLast: boolean;
};

export const Title = styled.div<TTitleStyle>`
  display: flex;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.04em;
  color: #1567b4;
  margin-right: 8px;
  ${(p) => p.atLast == true && 'color: #000;'}
`;

export const Icons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
`;
