import { FC, ReactNode } from 'react';

import { SideBar } from '@components';
import { MainRouter } from './MainRouter';

interface MainProps {
  children: ReactNode;
}

const Main: FC<MainProps> = ({ children }) => {
  return (
    <SideBar>
      <MainRouter />
    </SideBar>
  );
};

export default Main;
