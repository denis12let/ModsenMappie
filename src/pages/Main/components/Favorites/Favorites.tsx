import { Text } from '@ui';
import { FC, ReactNode, useEffect } from 'react';
import { FavoriteDetailItem, FavoritesList } from './components';
import { useAppSelector } from '@hooks/useAppSelector';
import { useAppDispatch } from '@hooks/useAppDispatch';

interface FavoritesProps {
  children: ReactNode;
}

const Favorites: FC<FavoritesProps> = ({ children }) => {
  const dispatch = useAppDispatch();

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
    <>
      <Text variation="topic">Избранное:</Text>
      {place ? <FavoriteDetailItem place={place} /> : <FavoritesList favorites={favorites} />}
    </>
  );
};

export default Favorites;
