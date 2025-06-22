import { FC, ReactNode, useState } from 'react';

import { Input, Text } from '@ui';
import { Icons } from '@assets';

import { ToolBarInner, ToolBarWrapper } from './ToolBar.style';
import { ToolButton } from './components/ToolButton';

export interface ToolBarProps {
  children: ReactNode;
}

export const ToolBar: FC<ToolBarProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <ToolBarWrapper isOpen={isOpen}>
      <ToolBarInner>{children}</ToolBarInner>
      <ToolButton isOpen={isOpen} setIsOpen={setIsOpen} />
    </ToolBarWrapper>
  );
};
