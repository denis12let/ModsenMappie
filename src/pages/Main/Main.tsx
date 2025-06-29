import { lazy } from 'react';
import { Outlet } from 'react-router-dom';

import { Map, SideBar } from '@components';
import { Controls } from './components';

import { MainStyled } from './Main.style';

export const MainAsync = lazy(() => import('./Main'));

const Main = () => {
  return (
    <MainStyled>
      <SideBar>
        <Outlet />
      </SideBar>
      <Map center={[55.755864, 37.617698]} />
      <Controls />
    </MainStyled>
  );
};

export default Main;
