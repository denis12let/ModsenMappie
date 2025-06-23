import { FC, ReactNode, useRef } from 'react';

import { SideBar } from '@components';
import { Map } from '@components';
import { MainStyled } from './Main.style';
import { Controls } from './components';
import { Outlet } from 'react-router-dom';

interface MainProps {
  children: ReactNode;
}
const Main: FC<MainProps> = ({ children }) => {
  const apiKey = import.meta.env.VITE_API_KEY || '';
  const mapRef = useRef<ymaps.Map>(null!);

  return (
    <MainStyled>
      <SideBar>
        <Outlet />
      </SideBar>
      <Map apiKey={apiKey} center={[1, 1]} />
      <Controls />
    </MainStyled>
  );
};

export default Main;
