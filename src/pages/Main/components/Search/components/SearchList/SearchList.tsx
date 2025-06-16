import { FC, ReactNode } from 'react';
import { SearchItem } from '../SearchItem';
import { SearchListStyled } from './SearchList.style';

export const SearchList: FC = () => {
  return (
    <SearchListStyled>
      <SearchItem />
      <SearchItem />
      <SearchItem />
      <SearchItem />
    </SearchListStyled>
  );
};
