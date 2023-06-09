import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  background: #e9affe;
  border-radius: 15px;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 20px 30px;

  :hover {
    background-color: #f3d2ff;
  }

  :active {
    background-color: #934bad;
  }
`;

export const Title = styled.div`
  display: flex;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 28px;
  color: #74089a;
  letter-spacing: 0.04em;
`;

export const Image = styled.div`
  display: flex;
  margin-right: 10px;
`;
