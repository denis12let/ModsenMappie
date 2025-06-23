import { Text } from '@ui';
import { FC, ReactNode, useEffect, useState } from 'react';
import { FavoritesList } from './components';
import { useMapContext } from '@context/MapContext';

interface FavoritesProps {
  children: ReactNode;
}

const Favorites: FC<FavoritesProps> = ({ children }) => {
  // const { mapRef, userPlacemarkRef } = useMapContext();
  // const [placeInfo, setPlaceInfo] = useState<PlaceData | null>(null);

  // useEffect(() => {
  //   if (!mapRef.current) return;

  //   const clickHandler = async (e: any) => {
  //     const coords = e.get('coords');

  //     try {
  //       // Используем API Яндекс.Карт для обратного геокодирования
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

  //   // Добавляем обработчик
  //   mapRef.current.events.add('click', clickHandler);

  //   // Убираем обработчик при размонтировании
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
      <FavoritesList />
    </>
  );
};

export default Favorites;
