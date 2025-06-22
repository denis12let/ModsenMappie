import { FC } from 'react';
import { SearchItem } from '../SearchItem';
import { SearchListStyled } from './SearchList.style';
import { marks } from '@constants';
import { Mark } from 'src/types';

interface SearchListProps {
  toggleIcon: (item: Mark) => void;
  activeIcons: Mark[];
}

export const SearchList: FC<SearchListProps> = ({ activeIcons, toggleIcon }) => {
  const list = marks.map((item) => (
    <SearchItem
      key={item.name}
      mark={item}
      isActive={activeIcons.some((icon) => icon.name === item.name)}
      toggleIcon={() => toggleIcon(item)}
    />
  ));

  return <SearchListStyled>{list}</SearchListStyled>;
};
