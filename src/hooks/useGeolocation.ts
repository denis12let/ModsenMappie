import { useEffect, useState } from 'react';

export const useGeolocation = () => {
  const [coordinates, setCoordinates] = useState<[number, number] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userCoordinates: [number, number] = [position.coords.latitude, position.coords.longitude];
          setCoordinates(userCoordinates);
        },
        (error) => {
          setError(error.message);
        }
      );
    }
  }, []);

  return { coordinates, error };
};
