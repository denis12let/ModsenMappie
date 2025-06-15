import { FC, ReactNode } from 'react';
import { NavBar } from './components/NavBar';
import { ToolBar } from './components/ToolBar';

interface SideBarProps {
  children: ReactNode;
}

export const SideBar: FC<SideBarProps> = ({ children }) => {
  return (
    <>
      <NavBar />
      <ToolBar />
    </>
  );
};
