import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  background: #ffffff;
  border: 1px solid #c4c4c4;
  border-radius: 12px;
  flex-direction: column;
`;

export const Base = styled.div`
  display: flex;
  margin: 10px;
  flex-direction: column;
`;

export const Label = styled.div`
  display: flex;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: 2px;
  color: #620185;
  text-transform: uppercase;
`;

export const Input = styled.select`
  display: flex;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;

  color: #000;
  border: none;
  outline: none;
  letter-spacing: 1px;
  padding: 5px;

  ::placeholder {
    color: #838383;
    font-weight: 200;
    letter-spacing: 1px;
  }
`;
