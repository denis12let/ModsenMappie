import { FC } from 'react';

import { Icons } from '@assets';
import { useAppDispatch, useAppSelector } from '@hooks';
import { placesActions, placeSelectors } from '@store';
import { Button, Text } from '@ui';
import { theme } from '@styles';
import { PlaceResult } from 'src/types';

import { FavoriteItemBottom, FavoriteItemIcon, FavoriteItemImg, FavoriteItemTop, FavoriteItemWrapper } from './FavoriteItem.style';

interface FavoriteItemProps {
  favorite: PlaceResult;
}

export const FavoriteItem: FC<FavoriteItemProps> = ({ favorite }) => {
  const dispatch = useAppDispatch();

  const favorites = useAppSelector(placeSelectors.getFavorites);

  const isInclude = favorites.some((item) => item.id === favorite.id);

  const handleOpenPlace = () => {
    dispatch(placesActions.setPlace(favorite));
  };

  const toggleFavorite = () => {
    console.log(123);
    dispatch(placesActions.toggleFavorite(favorite.id));
  };

  return (
    <FavoriteItemWrapper>
      <FavoriteItemTop>
        <FavoriteItemImg />
        <Text variation="title">{favorite.name}</Text>
      </FavoriteItemTop>
      <Text variation="text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque dolorum unde commodi, fugiat ad earum ipsum tempora quaerat
        consectetur officia consequatur perspiciatis sint asperiores debitis in, culpa ea. Iste, non?
      </Text>
      <FavoriteItemBottom>
        <FavoriteItemIcon onClick={toggleFavorite}>
          <Icons.Favorite
            color={isInclude ? theme.colors.red : theme.colors.white}
            decorColor={theme.colors.red}
            width={'15'}
            height="20"
          />
        </FavoriteItemIcon>
        <FavoriteItemIcon>
          <Button type="button" onClick={handleOpenPlace}>
            <Icons.Arrow />
          </Button>
        </FavoriteItemIcon>
      </FavoriteItemBottom>
    </FavoriteItemWrapper>
  );
};
