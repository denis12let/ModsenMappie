import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '@hooks';
import { Button, Text } from '@ui';
import { createRoute, createMarks, deleteMarks } from '@utils';
import { useMapContext, useRouteContext } from '@context';
import { placesActions, placeSelectors } from '@store';
import { Icons } from '@assets';
import { marks } from '@constants';
import { PlaceResult } from 'src/types';

import fav from '@assets/icons/fav-button.svg';
import geo from '@assets/icons/geo-button.svg';

import {
  FavoriteCard,
  FavoriteImg,
  FavoritesButtonLike,
  FavoritesButtonRoute,
  FavoritesButtons,
  FavoritesDetailsItemStyled,
  FavoritesTags,
  FavoritesText,
  FavoritesTitle,
  FavoritesTop,
} from './FavoriteDetailItem.style';

interface FavoriteDetailItemProps {
  place: PlaceResult;
}
export const FavoriteDetailItem: FC<FavoriteDetailItemProps> = ({ place }) => {
  const { mapRef, userPlacemarkRef } = useMapContext();
  const { setRouteInfo } = useRouteContext();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const favorites = useAppSelector(placeSelectors.getFavorites);

  const tags = marks.filter((mark) => mark.name === place.subtype).map((mark) => <img key={mark.path} src={mark.path} alt="tag" />);

  const isInclude = favorites.some((favorite) => favorite.id === place.id);

  useEffect(() => {
    deleteMarks(mapRef);
    createMarks([place], mapRef, dispatch, navigate);

    return () => {
      dispatch(placesActions.clearPlace());
      setRouteInfo('0 км', '0 мин');
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (id: number) => {
    dispatch(placesActions.toggleFavorite(id));
  };

  const handleExit = () => {
    dispatch(placesActions.clearPlace());
  };

  const handleCreateRoute = () => {
    createRoute(mapRef, userPlacemarkRef, place.coordinates, setRouteInfo);
  };

  return (
    <FavoritesDetailsItemStyled>
      <FavoritesTop>
        <Button onClick={handleExit}>
          <Icons.Arrow width={8} height={13} />
        </Button>
        <Text variation="title">Избранное</Text>
      </FavoritesTop>
      <FavoriteCard>
        <FavoriteImg alt="Важная картинка" />
        <FavoritesTags>{tags} </FavoritesTags>
        <FavoritesTitle>
          <Text variation="topic">{place.name}</Text>
        </FavoritesTitle>
        <FavoritesText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium aspernatur iste nulla ducimus! Ut maxime soluta in est,
          aliquid explicabo commodi dolore ab non modi, architecto unde temporibus accusamus impedit.
        </FavoritesText>
        {/* <Text variation="title">Адрес: {place.address || place.subtype}</Text> */}
        <FavoritesButtons>
          <FavoritesButtonLike>
            <Button type="button" onClick={() => toggleFavorite(place.id)}>
              <img src={fav} alt="favorite" />
              <p>{isInclude ? 'Сохранено' : 'Сохранить'}</p>
            </Button>
          </FavoritesButtonLike>
          <FavoritesButtonRoute>
            <Button type="button" onClick={handleCreateRoute}>
              <img src={geo} alt="route" />
              <p>Маршрут</p>
            </Button>
          </FavoritesButtonRoute>
        </FavoritesButtons>
      </FavoriteCard>
    </FavoritesDetailsItemStyled>
  );
};
