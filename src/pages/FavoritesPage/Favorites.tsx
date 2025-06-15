// components/Favorites.tsx
import PlaceList from '@components/PlaceList/PlaceList';
import React from 'react';
import styled from 'styled-components';

const FavoritesContainer = styled.div``;

const Title = styled.h2`
  margin: 0 0 20px;
  color: black;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Favorites: React.FC = () => {
  return (
    <FavoritesContainer>
      <Title>Избранное</Title>
      <SearchInput type="text" placeholder="Поиск..." />

      <PlaceList />
    </FavoritesContainer>
  );
};

export default Favorites;
