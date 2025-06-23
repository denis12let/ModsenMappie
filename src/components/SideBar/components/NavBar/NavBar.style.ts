import styled from 'styled-components';

export interface NavBarItemProps {
  color?: string;
}

export const NavBarWrapper = styled.div`
  display: flex;
  max-width: 110px;
  width: 100%;
  height: 100%;
  position: relative;
  flex-grow: 1;

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
  background-color: ${({ theme }) => theme.colors.white};

  & button {
    max-height: 50px;
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
`;

export const NavBarLinks = styled.nav`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  & > :first-child {
    margin-bottom: ${({ theme }) => theme.spacing.sm};
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
`;
