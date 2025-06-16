import { FC, ReactNode } from 'react';
import { Text } from '@ui';
import { SearchBox } from './Search.style';
import { SearchList } from './components';

interface SearchProps {
  children: ReactNode;
}

const Search: FC<SearchProps> = ({ children }) => {
  return (
    <>
      <Text variation="topic">Искать:</Text>
      <SearchBox>
        <SearchList />
      </SearchBox>
      <Text variation="topic">В радиусе</Text>
    </>
  );
};

export default Search;
