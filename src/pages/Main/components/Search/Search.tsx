import { FC, ReactNode, useState } from 'react';
import { Input, Text } from '@ui';
import { InputWrapper, SearchBox } from './Search.style';
import { SearchList } from './components';

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
        <Input text={value} setText={setValue}></Input>
        <Text variation="title">км</Text>
      </InputWrapper>
    </>
  );
};
export default Search;
