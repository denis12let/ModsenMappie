import { FC, ReactNode } from 'react';

import { SideBar } from '@components';

interface MainProps {
  children: ReactNode;
}

const Main: FC<MainProps> = ({ children }) => {
  return <SideBar>ewfwe</SideBar>;
};

export default Main;
