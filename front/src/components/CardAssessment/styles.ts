import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0;
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const BaseText = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Icon = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1px;
`;

export const Image = styled.div`
  display: flex;
  height: 100px;
  margin-left: 10px;
`;

export const IconText = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

export const Name = styled.div`
  display: flex;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 22px;
  color: #9c0ccf;
`;

export const Description = styled.div`
  display: flex;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: #000000;
`;
