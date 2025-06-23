import { FC, ReactNode, useCallback, useEffect, useState } from 'react';
import { Button, Input, Text } from '@ui';
import { ButtonStyled, InputRadius, InputWrapper, SearchBox, SearchIcon, SearchStyled } from './Search.style';
import { SearchList } from './components';
import { useMapContext } from '@context/MapContext';
import { Mark } from 'src/types';
import { createMarks, deleteMarks } from '@utils/marks';
import { Icons } from '@assets/icons';
import { theme } from '@styles/theme';
import { useDebounce } from '@hooks/UseDebounce';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { placesActions } from '@store/slices';
import { searchPlaces } from '@store/actions';

interface SearchProps {
  children: ReactNode;
}

const Search: FC = () => {
  const [radius, setRadius] = useState('5');
  const [searchQuery, setSearchQuery] = useState('');
  const { mapRef, userPlacemarkRef } = useMapContext();
  const [selectedIcons, setSelectedIcons] = useState<Mark[]>([]);
  const dispatch = useAppDispatch();
  const { items: foundPlaces, isLoading } = useAppSelector((state) => state.places);

  const debouncedRadius = useDebounce(radius, 500);

  mapRef.current?.events.add('click', (e) => {
    const startCoord = userPlacemarkRef.current?.geometry?.getCoordinates();
    const endCoord = e.get('coords');

    if (mapRef.current?.route) {
      mapRef.current.geoObjects.remove(mapRef.current.route);
    }

    const multiRoute = new window.ymaps.multiRouter.MultiRoute(
      {
        referencePoints: [startCoord, endCoord],
        params: {
          routingMode: 'auto',
        },
      },
      {
        boundsAutoApply: true,
        wayPointVisible: false,
        routeActiveStrokeWidth: 10,
        routeActiveStrokeColor: '#000000',
      }
    );

    mapRef.current?.geoObjects.add(multiRoute);
    mapRef.current!.route = multiRoute;

    multiRoute.model.events.add('requestsuccess', function () {
      const activeRoute = multiRoute.getActiveRoute();
      console.log('Длина туда', activeRoute.properties.get('distance').text);
      console.log('Время тоже туда', activeRoute.properties.get('duration').text);
    });

    mapRef.current?.geoObjects.add(multiRoute);
    mapRef.current!.route = multiRoute;
  });

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
    console.log(searchQuery);
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
    if (foundPlaces.length > 0 && mapRef.current) {
      createMarks(foundPlaces, mapRef);
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
          {isLoading ? 'Поиск...' : ''}
        </Button>
      </ButtonStyled>
    </>
  );
};

export default Search;
