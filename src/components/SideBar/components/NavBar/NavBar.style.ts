import { THEME } from '@constants';
import styled from 'styled-components';

export interface NavBarItemProps {
  color?: string;
}

export interface ControlThemeProps {
  themeContext: string;
}

export const NavBarWrapper = styled.div<ControlThemeProps>`
  display: flex;
  max-width: 110px;
  width: 100%;
  height: 100%;
  position: relative;
  flex-grow: 1;

  background-color: ${({ theme, themeContext }) => (themeContext === THEME.LIGHT ? theme.colors.white : theme.colors.dark)};

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: ${({ theme }) => theme.border.width.md};
    height: 100%;
    background-color: ${({ theme }) => theme.colors.gray_light_light};
    opacity: 0.5;
  }

  z-index: 100;

  & button {
    max-height: 50px;
  }
  @media ${({ theme }) => theme.media.mob} {
    max-width: 70px;
  }
`;

export const NavBarInner = styled.div`
  padding: ${({ theme }) => `
    ${theme.spacing.xl} 
    ${theme.spacing.lg} 
    ${theme.spacing.xxl}
  `};
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 100%;

  @media ${({ theme }) => theme.media.mob} {
    padding: ${({ theme }) => `
    ${theme.spacing.xl} 
    ${theme.spacing.sm} 
    ${theme.spacing.sm}
  `};
  }
`;

export const NavBarLinks = styled.nav`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  gap: ${({ theme }) => theme.spacing.sm};
  & > :first-child {
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }

  & > :nth-child(1),
  & > :nth-child(2),
  & > :nth-child(3),
  & > :nth-child(4),
  & > :nth-child(5) {
    order: 1;
  }

  & > :nth-child(6) {
    order: 2;
    margin-top: auto;
  }

  img {
    width: 50px;
    height: 50px;
  }

  & button {
    display: flex;
    justify-content: center;
  }
  @media ${({ theme }) => theme.media.mob} {
    & > :nth-child(1) {
      margin-bottom: 0;
    }
    & > :nth-child(1),
    & > :nth-child(6) {
      order: 1;
      margin-top: 0;
    }

    & > :nth-child(2),
    & > :nth-child(3),
    & > :nth-child(4),
    & > :nth-child(5) {
      order: 2;
    }

    & > :nth-child(2) {
      margin-top: auto;
    }

    svg {
      width: 20px;
      height: 20px;
    }

    img {
      width: 35px;
      height: 35px;
    }
  }
`;

export const NavBarAvatar = styled.div``;

export const NavBarItem = styled.div<NavBarItemProps>`
  width: 60px;
  height: 60px;
  background-color: ${({ color, theme }) => color || theme.colors.white};
  border-radius: ${({ theme }) => theme.border.borderRadius.sm};
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${({ color, theme }) => (color === theme.colors.white ? `${theme.border.width.md} solid ${theme.colors.gray_light_light}` : '0')};
  &:hover {
    border: ${({ theme }) => `${theme.border.width.md} solid ${theme.colors.gray_light_light}`};
  }

  @media ${({ theme }) => theme.media.mob} {
    width: 40px;
    height: 40px;
    svg {
      width: 15px;
      height: 15px;
    }
  }
`;
