import { FC, lazy, useEffect, useState } from 'react';

import { Input } from '@ui';
import { useAppSelector, useDebounce } from '@hooks';
import { Icons } from '@assets';

import { FavoriteDetailItem, FavoritesList } from './components';

import { FavoritesWrapper, SearchIcon, SearchStyled } from './Favorites.style';

export const FavoritesAsync = lazy(() => import('./Favorites'));

const Favorites: FC = () => {
  const { place, favorites } = useAppSelector((state) => state.places); //селектор сделать

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
