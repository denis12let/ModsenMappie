import { Text } from '@ui';
import { FC, ReactNode } from 'react';
import { FavoritesList } from './components';

interface FavoritesProps {
  children: ReactNode;
}

const Favorites: FC<FavoritesProps> = ({ children }) => {
  return (
    <>
      <Text variation="topic">Избранное:</Text>
      <FavoritesList />
    </>
  );
};

export default Favorites;
