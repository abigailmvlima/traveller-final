import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 5px 0 35px 0;
  border-top: 1px solid #d5d5d5;
  margin-top: 50px;
`;

export const Title = styled.div`
  display: flex;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: #000000;
  margin-top: 10px;
`;

export const Icons = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const Image = styled.div`
  display: flex;
  margin: 5px;
`;
