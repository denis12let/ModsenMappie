import { useAppDispatch } from '@hooks/useAppDispatch';
import { placesActions } from '@store/slices';
import { Button } from '@ui/Button';
import { Text } from '@ui/Text';
import { FC, useEffect } from 'react';
import { PlaceResult } from 'src/types';

interface FavoriteDetailItemProps {
  place: PlaceResult;
}
export const FavoriteDetailItem: FC<FavoriteDetailItemProps> = ({ place }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    return () => {
      dispatch(placesActions.clearPlace());
    };
  }, []);

  const toggleFavorite = (id: number) => {
    dispatch(placesActions.toggleFavorite(id));
  };

  const handleExit = () => {
    dispatch(placesActions.clearPlace());
  };

  return (
    <>
      <Button onClick={handleExit}>-</Button>
      <Text variation="title">Название: {place.name}</Text>
      <Text variation="title">Адрес: {place.address || place.subtype}</Text>
      <Button onClick={() => toggleFavorite(place.id)}>Избранное</Button>
    </>
  );
};
