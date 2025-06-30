import { FC, ReactNode, useState } from 'react';

import { ToolButton } from './components';

import { ToolBarInner, ToolBarWrapper } from './ToolBar.style';

export interface ToolBarProps {
  children: ReactNode;
}

export const ToolBar: FC<ToolBarProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <ToolBarWrapper isopen={isOpen.toString()}>
      <ToolBarInner>{children}</ToolBarInner>
      <ToolButton isOpen={isOpen} setIsOpen={setIsOpen} />
    </ToolBarWrapper>
  );
};
