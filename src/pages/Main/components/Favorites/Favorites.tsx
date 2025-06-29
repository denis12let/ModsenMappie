import { Input } from '@ui';
import { FC, lazy, ReactNode, useEffect, useState } from 'react';
import { FavoriteDetailItem, FavoritesList } from './components';
import { useAppSelector } from '@hooks/useAppSelector';
import { FavoritesWrapper, SearchIcon, SearchStyled } from './Favorites.style';
import { Icons } from '@assets/icons';
import { useDebounce } from '@hooks/useDebounce';

export const FavoritesAsync = lazy(() => import('./Favorites'));

const Favorites: FC = () => {
  const { place, favorites } = useAppSelector((state) => state.places);

  const [filteredFavorites, setFilteredFavorites] = useState(favorites);
  const [value, setValue] = useState('');

  const debouncedSearch = useDebounce(value, 400);

  useEffect(() => {
    if (debouncedSearch) {
      const searchTerm = debouncedSearch.toLowerCase();
      const filtered = favorites.filter((favorite) => favorite.name.toLowerCase().includes(searchTerm));

      setFilteredFavorites(filtered);
    } else {
      setFilteredFavorites(favorites);
    }
  }, [debouncedSearch, favorites]);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  return (
    <FavoritesWrapper>
      <SearchStyled>
        <Input text={value} setText={setValue} placeholder="Место, адрес.." />
        <SearchIcon>
          <Icons.Search />
        </SearchIcon>
      </SearchStyled>
      {place ? <FavoriteDetailItem place={place} /> : <FavoritesList favorites={filteredFavorites} />}
    </FavoritesWrapper>
  );
};

export default Favorites;
