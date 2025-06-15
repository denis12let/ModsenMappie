// components/SideBar.tsx
import { Icons } from '@assets/icons';
import { Logo } from '@ui/Logo/Logo';
import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  background-color: #ffffff;
  padding: 30px 25px 38px;
  color: #000;
`;

const LogoContainer = styled.div`
  width: 32px;
  height: 30px;
  z-index: 1;
`;

export const SideBar: React.FC = () => {
  return (
    <SidebarContainer>
      <LogoContainer>
        <Logo children={undefined} />
        {/* <NavLink to="#">
          <Icons.Logo />
        </NavLink> */}
      </LogoContainer>
      <Icons.Search />
      <Icons.Favorite />
      ewf
    </SidebarContainer>
  );
};
