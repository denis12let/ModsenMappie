import { FC } from 'react';

import { Icons } from '@assets';

import { ToolbarCloseBlock, ToolbarCloseButton, ToolbarCloseButtonIcon, ToolbarCloseContainer } from './ToolButton.style';
import { useTheme } from '@context';

interface ToolButtonProps {
  isOpen: boolean;
  setIsOpen: (arg: boolean) => void;
}

export const ToolButton: FC<ToolButtonProps> = ({ isOpen, setIsOpen }) => {
  const { theme: themeContext } = useTheme();

  return (
    <ToolbarCloseContainer>
      <ToolbarCloseBlock themeContext={themeContext} />
      <ToolbarCloseButton onClick={() => setIsOpen(!isOpen)} themeContext={themeContext}>
        <ToolbarCloseButtonIcon isopen={isOpen.toString()}>
          <Icons.Arrow />
        </ToolbarCloseButtonIcon>
      </ToolbarCloseButton>
      <ToolbarCloseBlock themeContext={themeContext} />
    </ToolbarCloseContainer>
  );
};
