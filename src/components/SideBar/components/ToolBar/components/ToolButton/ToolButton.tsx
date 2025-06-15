import { FC } from 'react';

import { Icons } from '@assets';

import { ToolbarCloseBlock, ToolbarCloseButton, ToolbarCloseButtonIcon, ToolbarCloseContainer } from './ToolButton.style';

interface ToolButtonProps {
  isOpen: boolean;
  setIsOpen: (arg: boolean) => void;
}

export const ToolButton: FC<ToolButtonProps> = ({ isOpen, setIsOpen }) => {
  return (
    <ToolbarCloseContainer>
      <ToolbarCloseBlock />
      <ToolbarCloseButton onClick={() => setIsOpen(!isOpen)}>
        <ToolbarCloseButtonIcon isOpen={isOpen}>
          <Icons.Arrow />
        </ToolbarCloseButtonIcon>
      </ToolbarCloseButton>
      <ToolbarCloseBlock />
    </ToolbarCloseContainer>
  );
};
