import { Icons } from '@assets/icons';
import { FC, ReactNode } from 'react';

interface LogoProps {
  children: ReactNode;
}

export const Logo: FC<LogoProps> = ({ children }) => {
  return <Icons.Logo />;
};
