import { FC, ReactNode, useEffect, useState } from 'react';
import { Button, Input, Text } from '@ui';
import { ButtonStyled, InputRadius, InputWrapper, SearchBox, SearchIcon, SearchStyled } from './Search.style';
import { SearchList } from './components';
import { useMapContext } from '@context/MapContext';
import { searchWithLeaflet } from '@api/leaflet';
import { Mark } from 'src/types';
import { createMarks, deleteMarks } from '@utils/marks';
import { Icons } from '@assets/icons';
import { theme } from '@styles/theme';

interface SearchProps {
  children: ReactNode;
}

const Search: FC<SearchProps> = ({ children }) => {
  const [radius, setRadius] = useState('5');
  const [foundPlaces, setFoundPlaces] = useState<any[]>([]);
  const [value, setValue] = useState('');

  const { mapRef, userPlacemarkRef } = useMapContext();
  const [icons, setIcons] = useState<Mark[]>([]);

  useEffect(() => {
    handleRadiusChange(radius);
  }, [icons]);

  const handleRadiusChange = async (value: string) => {
    const newRadius = Number(value);
    setRadius(value);

    const userCoords = userPlacemarkRef.current?.geometry?.getCoordinates() as [number, number];

    mapRef.current?.radius?.geometry?.setCoordinates(userCoords);
    mapRef.current?.radius?.geometry?.setRadius(newRadius * 1000);

    if (mapRef) {
      deleteMarks(mapRef);
    }

    if (userCoords) {
      const places = await searchWithLeaflet(userCoords, newRadius, icons);
      setFoundPlaces(places);
      if (mapRef) {
        createMarks(places, mapRef);
      }
    }
  };

  const toggleIcon = (item: Mark) => {
    setIcons((prev) => (prev.some((icon) => item.name === icon.name) ? prev.filter((icon) => icon.name !== item.name) : [...prev, item]));
  };
  return (
    <>
      <SearchStyled>
        <Input text={value} setText={setValue} placeholder="Место, адрес.." />
        <SearchIcon>
          <Icons.Search />
        </SearchIcon>
      </SearchStyled>
      <Text variation="topic">Искать:</Text>
      <SearchBox>
        <SearchList toggleIcon={toggleIcon} activeIcons={icons} />
      </SearchBox>
      <Text variation="topic">В радиусе</Text>
      <InputWrapper>
        <InputRadius>
          <Input text={radius} setText={handleRadiusChange} type="number" />
        </InputRadius>
        <Text variation="title">км</Text>
      </InputWrapper>
      <ButtonStyled>
        <Button>
          <Icons.Search color={theme.colors.white} />
        </Button>
      </ButtonStyled>
    </>
  );
};

export default Search;
