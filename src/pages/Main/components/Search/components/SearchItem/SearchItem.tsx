import { FC } from 'react';
import { SearchItemImg, SearchItemStyled } from './SearchItem.style';
import { Text } from '@ui';
import { Mark } from 'src/types';

interface SearchItemProps {
  mark: Mark;
  isActive: boolean;
  toggleIcon: () => void;
}

export const SearchItem: FC<SearchItemProps> = ({ mark, isActive, toggleIcon }) => {
  return (
    <SearchItemStyled onClick={toggleIcon} isactive={isActive.toString()}>
      <SearchItemImg>
        <img src={mark.path} alt="иконка" />
      </SearchItemImg>
      <Text variation="title">{mark.ru}</Text>
    </SearchItemStyled>
  );
};
