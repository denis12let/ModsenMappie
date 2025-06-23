import { FC, ReactNode, useCallback, useEffect, useState } from 'react';
import { Button, Input, Text } from '@ui';
import { ButtonStyled, InputRadius, InputWrapper, SearchBox, SearchIcon, SearchStyled } from './Search.style';
import { SearchList } from './components';
import { useMapContext } from '@context/MapContext';
import { searchWithLeaflet } from '@api/leaflet';
import { Mark } from 'src/types';
import { createMarks, deleteMarks } from '@utils/marks';
import { Icons } from '@assets/icons';
import { theme } from '@styles/theme';
import { useDebounce } from '@hooks/UseDebounce';

interface SearchProps {
  children: ReactNode;
}

const Search: FC<SearchProps> = ({ children }) => {
  const [radius, setRadius] = useState('5');
  const [foundPlaces, setFoundPlaces] = useState<any[]>([]);
  const [value, setValue] = useState('');

  const { mapRef, userPlacemarkRef } = useMapContext();
  const [icons, setIcons] = useState<Mark[]>([]);

  // mapRef.current?.events.add('click', (e) => {
  //   const startPoint = userPlacemarkRef.current?.geometry?.getCoordinates();
  //   const endPoint = e.get('coords');

  //   // Используйте ymaps.route вместо mapRef.current.route
  //   const router = window.ymaps.route([startPoint, endPoint], {
  //     mapStateAutoApply: true, // Автоматическое масштабирование
  //   });

  //   router
  //     .then((route) => {
  //       mapRef.current?.geoObjects.add(route);
  //     })
  //     .catch((error) => {
  //       console.error('Ошибка при создании маршрута:', error);
  //     });
  // });

  const debouncedRadius = useDebounce(radius, 500);

  const handleSearch = useCallback(
    async (currentRadius: number, currentIcons: Mark[], searchValue = '') => {
      const userCoords = userPlacemarkRef.current?.geometry?.getCoordinates() as [number, number];

      if (mapRef) {
        deleteMarks(mapRef);
      }

      if (userCoords) {
        const places = await searchWithLeaflet(userCoords, currentRadius, searchValue ? [] : currentIcons, searchValue);

        setFoundPlaces(places);
        console.log(places);
        if (mapRef) {
          createMarks(places, mapRef);
        }
      }
    },
    [mapRef, userPlacemarkRef]
  );

  useEffect(() => {
    const currentRadius = Number(debouncedRadius);
    if (currentRadius < 0) return;

    const userCoords = userPlacemarkRef.current?.geometry?.getCoordinates() as [number, number];
    if (userCoords) {
      mapRef.current?.radius?.geometry?.setCoordinates(userCoords);
      mapRef.current?.radius?.geometry?.setRadius(currentRadius * 1000);

      handleSearch(currentRadius, icons);
    }
  }, [debouncedRadius, icons, handleSearch, userPlacemarkRef, mapRef]);

  const handleRadiusChange = (value: string) => {
    setRadius(value);
  };

  const search = () => {
    handleSearch(Number(radius), icons, value);
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
        <Button onClick={search}>
          <Icons.Search color={theme.colors.white} />
        </Button>
      </ButtonStyled>
    </>
  );
};

export default Search;
