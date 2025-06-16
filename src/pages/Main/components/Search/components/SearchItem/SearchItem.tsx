import { FC, ReactNode } from 'react';
import { SearchItemStyled } from './SearchItem.style';
import { Icons } from '@assets/icons';
import { Text } from '@ui';

export const SearchItem: FC = () => {
  return (
    <SearchItemStyled>
      <Icons.Architecture1 />
      <Text variation="title">Архитектура</Text>
    </SearchItemStyled>
  );
};
