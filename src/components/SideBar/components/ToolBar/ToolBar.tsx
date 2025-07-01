import { FC, ReactNode, useState } from 'react';

import { ToolButton } from './components';

import { ToolBarInner, ToolBarWrapper } from './ToolBar.style';
import { useTheme } from '@context';

export interface ToolBarProps {
  children: ReactNode;
}

export const ToolBar: FC<ToolBarProps> = ({ children }) => {
  const { theme: themeContext } = useTheme();
  const [isOpen, setIsOpen] = useState(true);

  return (
    <ToolBarWrapper isopen={isOpen.toString()}>
      <ToolBarInner themeContext={themeContext}>{children}</ToolBarInner>
      <ToolButton isOpen={isOpen} setIsOpen={setIsOpen} />
    </ToolBarWrapper>
  );
};
