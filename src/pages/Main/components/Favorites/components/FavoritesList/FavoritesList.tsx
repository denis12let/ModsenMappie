import { FC, ReactNode } from 'react';
import { FavoriteItem } from '../FavoriteItem';
import { PlaceResult } from 'src/types';

interface FavoritesListProps {
  favorites: PlaceResult[];
}

export const FavoritesList: FC<FavoritesListProps> = ({ favorites }) => {
  console.log(favorites);
  return (
    <>
      <FavoriteItem />
      <FavoriteItem />
    </>
  );
};
