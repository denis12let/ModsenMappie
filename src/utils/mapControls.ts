import { MutableRefObject } from 'react';
import ymaps, { Placemark } from 'yandex-maps';

export const handleLocateUser = (mapRef: MutableRefObject<ymaps.Map | null>, userPlacemarkRef: MutableRefObject<Placemark | null>) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userCoordinates: [number, number] = [position.coords.latitude, position.coords.longitude];

        if (mapRef.current) {
          if (userPlacemarkRef.current) {
            mapRef.current.geoObjects.remove(userPlacemarkRef.current);
          }

          userPlacemarkRef.current = new window.ymaps.Placemark(
            userCoordinates,
            {
              iconCaption: 'Вы здесь',
            },
            {
              preset: 'islands#blueDotIconWithCaption',
            }
          );

          mapRef.current.geoObjects.add(userPlacemarkRef.current);

          mapRef.current.setCenter(userCoordinates);
        }
      },
      (error) => {
        console.error('Ошибка геолокации:', error);
      }
    );
  }
};
