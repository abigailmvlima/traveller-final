import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  background: #9c0ccf;
  border-radius: 15px;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

interface ITitleStyle {
  size?: number;
}

export const Title = styled.div<ITitleStyle>`
  display: flex;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  letter-spacing: 1.5px;

  color: #ffffff;
  padding: 0.6em;
  ${({ size }) => size && `font-size: ${size}px;`}
`;
