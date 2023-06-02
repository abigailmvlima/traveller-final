import styled, { css } from "styled-components";

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
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.05em;
  color: #000000;
`;

export const Input = styled.input`
  display: flex;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  color: #d9d9d9;
  border: none;
  outline: none;
`;
