import React, { useEffect, useRef } from 'react';

interface MapProps {
  apiKey: string;
  center: [number, number];
  zoom: number;
}

export const Map: React.FC<MapProps> = ({ apiKey, center, zoom }) => {
  const mapRef = useRef<ymaps.Map | null>(null);

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

        const placemark = new window.ymaps.Placemark(center, {
          balloonContent: 'point',
        });

        mapRef.current.geoObjects.add(placemark);
      }
    };

    loadYandexMaps();

    return () => {
      const script = document.querySelector(`script[src*="api-maps.yandex.ru"]`);
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, [apiKey, center, zoom]);

  return <div id="map" style={{ width: '100%', height: '100%' }} />;
};
