import { FC, ReactNode, useState } from 'react';

import { Input, Text } from '@ui';
import { Icons } from '@assets';

import { ToolBarInner, ToolBarSearch, ToolBarSearchIcon, ToolBarWrapper } from './ToolBar.style';
import { ToolButton } from './components/ToolButton';

export interface ToolBarProps {
  children: ReactNode;
}

export const ToolBar: FC<ToolBarProps> = ({ children }) => {
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
        {children}
      </ToolBarInner>
      <ToolButton isOpen={isOpen} setIsOpen={setIsOpen} />
    </ToolBarWrapper>
  );
};
