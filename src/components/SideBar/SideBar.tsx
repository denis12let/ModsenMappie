import { FC, ReactNode } from 'react';

import { ToolBar, NavBar } from './components';

import { SideBarStyled } from './SideBar.style';

interface SideBarProps {
  children: ReactNode;
}

export const SideBar: FC<SideBarProps> = ({ children }) => {
  return (
    <SideBarStyled>
      <NavBar />
      <ToolBar>{children}</ToolBar>
    </SideBarStyled>
  );
};
