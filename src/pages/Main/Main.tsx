import { FC, ReactNode, useRef } from 'react';

import { SideBar } from '@components';
import { MainRouter } from './MainRouter';
import { Map } from '@components';
import { MainStyled } from './Main.style';
import { Controls } from './components';

interface MainProps {
  children: ReactNode;
}

const Main: FC<MainProps> = ({ children }) => {
  const apiKey = import.meta.env.VITE_API_KEY || '';
  const mapRef = useRef<ymaps.Map>(null!);

  return (
    <MainStyled>
      <SideBar>
        <MainRouter />
      </SideBar>
      <Map apiKey={apiKey} center={[55.751244, 37.618423]} />
      <Controls />
    </MainStyled>
  );
};

export default Main;
