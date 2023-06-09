import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 32%;
  margin-right: 15px;
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

interface ImageProps {
  src: string;
}
export const Image = styled.div<ImageProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95%;
  height: 300px;
  background-image: url(${(p) => p.src});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  border-radius: 20px;
  margin-bottom: 15px;
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
