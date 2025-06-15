// components/PlaceList.tsx
import PlaceCard from '@components/PlaceCard/PlaceCard';
import React from 'react';
import styled from 'styled-components';

const ListContainer = styled.div``;

const PlaceList: React.FC = () => {
  const places = [
    { id: 1, name: 'Фотостудия "Край"', description: 'Краткое описание' },
    { id: 2, name: 'Городской парк', description: 'Краткое описание' },
    // Добавьте больше мест
  ];

  return (
    <ListContainer>
      {places.map((place) => (
        <PlaceCard key={place.id} place={place} />
      ))}
    </ListContainer>
  );
};

export default PlaceList;
