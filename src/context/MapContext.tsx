import React, { createContext, useContext, useRef, useState } from 'react';

export interface ExtendedMap extends ymaps.Map {
  radius?: ymaps.Circle;
}

interface MapContextType {
  mapRef: React.RefObject<ExtendedMap | null>;
  zoom: number;
  setZoom: React.Dispatch<React.SetStateAction<number>>;
  userPlacemarkRef: React.MutableRefObject<ymaps.Placemark | null>;
}

const MapContext = createContext<MapContextType | undefined>(undefined);

export const MapProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const mapRef = useRef<ExtendedMap>(null!);
  const userPlacemarkRef = useRef<ymaps.Placemark | null>(null);

  const [zoom, setZoom] = useState(10);

  return <MapContext.Provider value={{ mapRef, zoom, setZoom, userPlacemarkRef }}>{children}</MapContext.Provider>;
};

export const useMapContext = () => {
  const context = useContext(MapContext);
  if (!context) {
    throw new Error('Error');
  }
  return context;
};
