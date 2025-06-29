import { Input, Text } from '@ui';
import { FC, lazy, ReactNode, useEffect, useState } from 'react';
import { FavoriteDetailItem, FavoritesList } from './components';
import { useAppSelector } from '@hooks/useAppSelector';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useNavigate } from 'react-router-dom';
import { APP_ROUTES_PATH } from '@constants/app';
import { FavoritesTitle, FavoritesWrapper, SearchIcon, SearchStyled } from './Favorites.style';
import { Icons } from '@assets/icons';

interface FavoritesProps {
  children: ReactNode;
}

export const FavoritesAsync = lazy(() => import('./Favorites'));

const Favorites: FC<FavoritesProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  // const { mapRef, userPlacemarkRef } = useMapContext();

  const { place, favorites, isLoading } = useAppSelector((state) => state.places);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  // const { mapRef, userPlacemarkRef } = useMapContext();
  // const [placeInfo, setPlaceInfo] = useState<PlaceData | null>(null);

  // useEffect(() => {
  //   if (!mapRef.current) return;

  //   const clickHandler = async (e: any) => {
  //     const coords = e.get('coords');

  //     try {
  //       const res = await window.ymaps.geocode(coords);
  //       const firstGeoObject = res.geoObjects.get(0);
  //       const data = {
  //         address: firstGeoObject.getAddressLine(),
  //         coordinates: coords,
  //         details: firstGeoObject.properties.getAll(),
  //       };

  //       setPlaceInfo(data);
  //       console.log('Данные места:', data);
  //     } catch (error) {
  //       console.error('Ошибка получения данных:', error);
  //     }
  //   };

  //   mapRef.current.events.add('click', clickHandler);

  //   return () => {
  //     if (mapRef.current) {
  //       mapRef.current.events.remove('click', clickHandler);
  //     }
  //   };
  // }, [mapRef]);

  // if (placeInfo) {
  //   console.log(placeInfo);
  // }

  return (
    <FavoritesWrapper>
      <SearchStyled>
        <Input text={searchQuery} setText={setSearchQuery} placeholder="Место, адрес.." />
        <SearchIcon>
          <Icons.Search />
        </SearchIcon>
      </SearchStyled>
      {place ? <FavoriteDetailItem place={place} /> : <FavoritesList favorites={favorites} />}
    </FavoritesWrapper>
  );
};

export default Favorites;
