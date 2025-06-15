import { FC, useState } from 'react';
import {
  ToolbarCloseBlock,
  ToolbarCloseButton,
  ToolbarCloseButtonIcon,
  ToolbarCloseContainer,
  ToolBarInner,
  ToolBarSearch,
  ToolBarSearchIcon,
  ToolBarWrapper,
} from './ToolBar.style';
import { Input } from '@ui';
import { Icons } from '@assets/icons';

export const ToolBar: FC = () => {
  const [value, setValue] = useState('');
  const [isOpen, setIsOpen] = useState(true);

  return (
    <ToolBarWrapper isOpen={isOpen}>
      <ToolBarInner>
        <ToolBarSearch>
          <Input text={value} setText={setValue} placeholder="Место, адрес.." />
          <ToolBarSearchIcon>
            <Icons.Search />
          </ToolBarSearchIcon>
        </ToolBarSearch>
      </ToolBarInner>
      <ToolbarCloseContainer>
        <ToolbarCloseBlock />
        <ToolbarCloseButton onClick={() => setIsOpen(!isOpen)}>
          <ToolbarCloseButtonIcon isOpen={isOpen}>
            <Icons.Arrow />
          </ToolbarCloseButtonIcon>
        </ToolbarCloseButton>
        <ToolbarCloseBlock />
      </ToolbarCloseContainer>
    </ToolBarWrapper>
  );
};
