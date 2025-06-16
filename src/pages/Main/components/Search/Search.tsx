import { FC, ReactNode, useState } from 'react';
import { Button, Input, Text } from '@ui';
import { InputRadius, InputWrapper, SearchBox } from './Search.style';
import { SearchList } from './components';
import { Icons } from '@assets/icons';

interface SearchProps {
  children: ReactNode;
}

const Search: FC<SearchProps> = ({ children }) => {
  const [value, setValue] = useState('');
  console.log(value);

  return (
    <>
      <Text variation="topic">Искать:</Text>
      <SearchBox>
        <SearchList />
      </SearchBox>
      <Text variation="topic">В радиусе</Text>
      <InputWrapper>
        <InputRadius>
          <Input text={value} setText={setValue} />
        </InputRadius>
        <Text variation="title">км</Text>
      </InputWrapper>
      {/* <Button>
        <Icons.Search />
      </Button> */}
    </>
  );
};
export default Search;
