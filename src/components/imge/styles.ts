import styled, { css } from 'styled-components';
import { EImageType } from '../../enums/EImage';

interface IContainer {
  type: EImageType;
}

export const Container = styled.div<IContainer>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${(p) => p.type == EImageType.circle && 'border-radius: 30px;'}
`;

export const Imgs = styled.img<IContainer>`
  ${(p) => p.type == EImageType.circle && 'border-radius: 30px;'}
`;
