import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export interface StyledNavLinkProps {
  color?: string;
  activeColor?: string;
}

export const StyledNavLink = styled(NavLink)<StyledNavLinkProps>`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.gray_light_light};
`;
