import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
`;

export const Title = styled.div`
  display: flex;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: #000000;
  margin-left: 5px;
`;

export const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BaseText = styled.div`
  display: flex;
  flex-direction: column;
  height: 110px;
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
