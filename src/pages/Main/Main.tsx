import { FC, ReactNode } from 'react';

import { SideBar } from '@components';
import { MainRouter } from './MainRouter';
import { Map } from '@components';
import { MainStyled } from './Main.style';

interface MainProps {
  children: ReactNode;
}

const Main: FC<MainProps> = ({ children }) => {
  const apiKey = import.meta.env.VITE_API_KEY || '';

  return (
    <MainStyled>
      <SideBar>
        <MainRouter />
      </SideBar>
      <Map apiKey={apiKey} center={[55.751244, 37.618423]} zoom={10} />
    </MainStyled>
  );
};

export default Main;
