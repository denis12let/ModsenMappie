import { createContext, useContext, useState } from 'react';

interface RouteContextType {
  distantion: string;
  time: string;
  setRouteInfo: (distantion: string, time: string) => void;
}

const RouteContext = createContext<RouteContextType | null>(null);

export const RouteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [distantion, setDistantion] = useState('');
  const [time, setTime] = useState('');

  const setRouteInfo = (dist: string, t: string) => {
    setDistantion(dist);
    setTime(t);
  };

  return <RouteContext.Provider value={{ distantion, time, setRouteInfo }}>{children}</RouteContext.Provider>;
};

export const useRouteContext = () => {
  const context = useContext(RouteContext);
  if (!context) throw new Error('error');
  return context;
};
