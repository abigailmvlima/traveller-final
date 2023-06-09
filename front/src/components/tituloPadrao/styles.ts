import styled, { css } from 'styled-components';

interface IContainerStyle {
  stripe?: boolean;
}

export const Container = styled.div<IContainerStyle>`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  padding-bottom: 12px;
  ${(p) => p.stripe && `border-bottom: 1px solid rgba(177, 177, 177, 0.5);`}
`;

export const Title = styled.div`
  display: flex;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 29px;
  color: #000000;
`;

export const subTitle = styled.div`
  display: flex;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;

  color: #000000;
  margin-top: 5px;
`;
