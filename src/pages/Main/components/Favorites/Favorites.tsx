import { Input, Text } from '@ui';
import { FC, lazy, ReactNode, useEffect, useState } from 'react';
import { FavoriteDetailItem, FavoritesList } from './components';
import { useAppSelector } from '@hooks/useAppSelector';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useNavigate } from 'react-router-dom';
import { APP_ROUTES_PATH } from '@constants/app';
import { FavoritesTitle, FavoritesWrapper, SearchIcon, SearchStyled } from './Favorites.style';
import { Icons } from '@assets/icons';

interface FavoritesProps {
  children: ReactNode;
}

export const FavoritesAsync = lazy(() => import('./Favorites'));

const Favorites: FC<FavoritesProps> = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const { place, favorites, isLoading } = useAppSelector((state) => state.places);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  return (
    <FavoritesWrapper>
      <SearchStyled>
        <Input text={searchQuery} setText={setSearchQuery} placeholder="Место, адрес.." />
        <SearchIcon>
          <Icons.Search />
        </SearchIcon>
      </SearchStyled>
      {place ? <FavoriteDetailItem place={place} /> : <FavoritesList favorites={favorites} />}
    </FavoritesWrapper>
  );
};

export default Favorites;
