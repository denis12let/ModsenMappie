import { FC, ReactNode } from 'react';
import { StyledNavLink, StyledNavLinkProps } from './NavLink.style';

interface NavLinkProps extends StyledNavLinkProps {
  children: ReactNode;
  to: string;
}

export const NavLink: FC<NavLinkProps> = ({ children, ...props }) => {
  return <StyledNavLink {...props}>{children}</StyledNavLink>;
};
