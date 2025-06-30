import { useMapContext } from '@context/MapContext';
import { useGeolocation } from '@hooks/useGeolocation';
import { addCircle, createMap, handleLocateUser, removeControls } from '@utils/map';
import { deleteMarks } from '@utils/marks';
import { useEffect, FC } from 'react';

interface MapProps {
  center: [number, number];
}

const apiKey = import.meta.env.VITE_API_KEY || '';

export const Map: FC<MapProps> = ({ center }) => {
  const { coordinates } = useGeolocation();
  const { mapRef, zoom, userPlacemarkRef } = useMapContext();

  useEffect(() => {
    if (mapRef.current) {
      const mapContainer = document.getElementById('map');
      if (mapContainer && mapRef.current.container) {
        mapContainer.appendChild(mapRef.current.container.getElement());
      }
      return;
    }

    const loadYandexMaps = () => {
      const script = document.createElement('script');
      script.src = `https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=${apiKey}`;
      script.async = true;
      script.onload = () => {
        if (window.ymaps) {
          window.ymaps.ready(initMap);
        }
      };
      document.body.appendChild(script);
    };

    const initMap = () => {
      mapRef.current = createMap(coordinates || center, zoom);

      addCircle(mapRef);
      removeControls(mapRef);

      mapRef.current.events.add('click', (e) => {
        const coords = e.get('coords');
        console.log('Координаты:', coords);
      });

      handleLocateUser(mapRef, userPlacemarkRef);
    };

    loadYandexMaps();

    return () => {
      deleteMarks(mapRef);
    };
  }, []);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setZoom(zoom);
      mapRef.current.setCenter(coordinates || center);
    }
  }, [zoom, coordinates]);

  return <div id="map" style={{ width: '100%', height: '100%' }} />;
};
