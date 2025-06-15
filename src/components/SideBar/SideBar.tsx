import { FC, ReactNode } from 'react';
import { NavBar } from './components/NavBar';
import { ToolBar } from './components/ToolBar';
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
