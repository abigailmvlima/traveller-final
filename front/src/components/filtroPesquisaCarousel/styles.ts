import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BaseFiltro = styled.div`
  display: flex;
  background: #ffffff;
  box-shadow: 0px 15px 25px 8px rgba(0, 0, 0, 0.35);
  flex-direction: column;
  border-radius: 20px;
`;

interface ImageStyle {
  src?: string;
}

export const Image = styled.div<ImageStyle>`
  display: flex;
  flex-grow: 1;
  margin-left: 40px;

  width: 100%;
  height: 750px
  background-image: url(${(p) => p.src});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;

export const Base = styled.div`
  display: flex;
  min-width: 490px;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #c5c5c5;
`;

const cssMenuItemActive = css`
  background: #9c0ccf;
  border: 3px solid #ffffff;
  color: #ffffff;
`;

const cssPaginaActive = css`
  display: flex;
`;

export const Botao = styled.div`
  display: flex;
  padding: 0 40px 25px 40px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

interface ColProps {
  width?: number | string;
  margin?: string;
}
export const Col = styled.div<ColProps>`
  display: flex;
  flex-direction: column;
  ${(p) => p.width && `width: ${p.width};`}
  ${(p) => p.margin && `margin: ${p.margin};`}
`;

interface MenuItemProps {
  active: boolean;
}

export const MenuItem = styled.div<MenuItemProps>`
  display: flex;
  width: 50%;
  height: 80px;
  background-color: #fff;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0.05em;
  color: #b6b6b6;
  ${(p) => p.active && cssMenuItemActive};
`;

interface PaginaProps {
  active: boolean;
}

export const Pagina = styled.div<PaginaProps>`
  display: none;
  flex-grow: 1;
  flex-direction: column;
  margin: 15px 25px;
  ${(p) => p.active && cssPaginaActive}
`;
