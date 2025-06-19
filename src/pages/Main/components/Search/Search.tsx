import { FC, ReactNode, useState } from 'react';
import { Input, Text } from '@ui';
import { InputRadius, InputWrapper, SearchBox } from './Search.style';
import { SearchList } from './components';
import { useMapContext } from '@context/MapContext';

interface SearchProps {
  children: ReactNode;
}

const Search: FC<SearchProps> = ({ children }) => {
  const [radius, setRadius] = useState('5');
  const { mapRef, userPlacemarkRef } = useMapContext();
  console.log(mapRef.current);

  const handleRadiusChange = (value: string) => {
    const newRadius = Number(value);
    setRadius(String(newRadius));

    const userCoordinates = userPlacemarkRef.current?.geometry?.getCoordinates();

    if (mapRef.current?.radius && userCoordinates) {
      const radiusInMeters = newRadius * 1000;

      mapRef.current.radius.geometry?.setCoordinates(userCoordinates);
      mapRef.current.radius.geometry?.setRadius(radiusInMeters);
    }
  };

  return (
    <>
      <Text variation="topic">Искать:</Text>
      <SearchBox>
        <SearchList />
      </SearchBox>
      <Text variation="topic">В радиусе</Text>
      <InputWrapper>
        <InputRadius>
          <Input text={radius} setText={handleRadiusChange} type="number" />
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
