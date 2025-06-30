import { FC, lazy, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Input, Text } from '@ui';
import { useMapContext } from '@context';
import { createMarks, deleteMarks } from '@utils';
import { theme } from '@styles';
import { useAppDispatch, useAppSelector, useDebounce } from '@hooks';
import { Icons } from '@assets';
import { placesActions, searchPlaces } from '@store';
import { Mark } from 'src/types';

import { SearchList } from './components';

import { ButtonStyled, InputRadius, InputWrapper, SearchBox, SearchIcon, SearchStyled } from './Search.style';

export const SearchAsync = lazy(() => import('./Search'));

const Search: FC = () => {
  const navigate = useNavigate();

  const [radius, setRadius] = useState('5');
  const [searchQuery, setSearchQuery] = useState('');
  const { mapRef, userPlacemarkRef } = useMapContext();
  const [selectedIcons, setSelectedIcons] = useState<Mark[]>([]);
  const dispatch = useAppDispatch();
  const { items: foundPlaces, isLoading } = useAppSelector((state) => state.places);

  const debouncedRadius = useDebounce(radius, 500);

  useEffect(() => {
    handleSearch();
  }, [selectedIcons]);

  const handleSearch = async () => {
    if (!mapRef.current || !userPlacemarkRef.current) return;

    const userCoords = userPlacemarkRef.current.geometry?.getCoordinates() as [number, number];
    const currentRadius = Number(radius);

    dispatch(placesActions.setSearchCenter(userCoords));
    dispatch(placesActions.setSearchRadius(currentRadius));
    deleteMarks(mapRef);
    dispatch(
      searchPlaces({
        center: userCoords,
        radiusKm: currentRadius,
        icons: selectedIcons,
        search: searchQuery,
      })
    );
  };

  useEffect(() => {
    const currentRadius = Number(debouncedRadius);
    if (currentRadius < 0) return;

    if (userPlacemarkRef.current) {
      const userCoords = userPlacemarkRef.current.geometry?.getCoordinates() as [number, number];
      mapRef.current?.radius?.geometry?.setCoordinates(userCoords);
      mapRef.current?.radius?.geometry?.setRadius(currentRadius * 1000);
      handleSearch();
    }
  }, [debouncedRadius, userPlacemarkRef, mapRef]);

  useEffect(() => {
    if (selectedIcons.length && foundPlaces.length > 0 && mapRef.current) {
      createMarks(foundPlaces, mapRef, dispatch, navigate);
    }
  }, [foundPlaces, mapRef]);

  const toggleIcon = (item: Mark) => {
    setSelectedIcons((prev) =>
      prev.some((icon) => item.name === icon.name) ? prev.filter((icon) => icon.name !== item.name) : [...prev, item]
    );
  };

  return (
    <>
      <SearchStyled>
        <Input text={searchQuery} setText={setSearchQuery} placeholder="Место, адрес.." />
        <SearchIcon>
          <Icons.Search />
        </SearchIcon>
      </SearchStyled>
      <Text variation="topic">Искать:</Text>
      <SearchBox>
        <SearchList toggleIcon={toggleIcon} activeIcons={selectedIcons} />
      </SearchBox>
      <Text variation="topic">В радиусе</Text>
      <InputWrapper>
        <InputRadius>
          <Input text={radius} setText={setRadius} type="number" />
        </InputRadius>
        <Text variation="title">км</Text>
      </InputWrapper>
      <ButtonStyled>
        <Button onClick={handleSearch} disabled={isLoading}>
          <Icons.Search color={theme.colors.white} />
        </Button>
      </ButtonStyled>
    </>
  );
};

export default Search;
