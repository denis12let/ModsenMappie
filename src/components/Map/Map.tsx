import { useMapContext } from '@context/MapContext';
import { useGeolocation } from '@hooks/useGeolocation';
import React, { useEffect, useRef } from 'react';

interface MapProps {
  apiKey: string;
  center: [number, number];
}

export const Map: React.FC<MapProps> = ({ apiKey, center }) => {
  const { coordinates, error } = useGeolocation();
  const { mapRef, zoom, userPlacemarkRef } = useMapContext();

  useEffect(() => {
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
      if (!mapRef.current) {
        mapRef.current = new window.ymaps.Map('map', {
          center: center,
          zoom: zoom,
        });

        if (coordinates) {
          const userPlacemark = new window.ymaps.Placemark(coordinates, {
            balloonContent: 'текущая позиция',
          });

          mapRef.current!.geoObjects.add(userPlacemark);
          mapRef.current!.setCenter(coordinates);
          mapRef.current!.setZoom(14);
        }

        mapRef.current.controls.remove('geolocationControl');
        mapRef.current.controls.remove('searchControl');
        mapRef.current.controls.remove('trafficControl');
        mapRef.current.controls.remove('typeSelector');
        mapRef.current.controls.remove('fullscreenControl');
        mapRef.current.controls.remove('zoomControl');
        mapRef.current.controls.remove('rulerControl');
        mapRef.current.behaviors.disable(['scrollZoom']);

        const placemark = new window.ymaps.Placemark(center, {
          balloonContent: 'point',
        });

        mapRef.current.geoObjects.add(placemark);

        return () => {
          if (mapRef.current) {
            mapRef.current.destroy();
            mapRef.current = null;
            userPlacemarkRef.current = null;
          }
        };
      }
    };

    loadYandexMaps();
  }, [apiKey, center, zoom]);

  return <div id="map" style={{ width: '100%', height: '100%' }} />;
};
