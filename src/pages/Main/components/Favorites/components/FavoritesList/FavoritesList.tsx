import { FC } from 'react';

import { Text } from '@ui';

import { FavoriteItem } from '../FavoriteItem';
import { PlaceResult } from 'src/types';

import { FavoritesListStyled } from './FavoritesList.style';

interface FavoritesListProps {
  favorites: PlaceResult[];
}

export const FavoritesList: FC<FavoritesListProps> = ({ favorites }) => {
  const favoritesList = favorites.map((favorite) => <FavoriteItem key={favorite.id} favorite={favorite} />);

  return (
    <>
      <Text variation="title">Избранное:</Text>
      <FavoritesListStyled>{favoritesList}</FavoritesListStyled>
    </>
  );
};
