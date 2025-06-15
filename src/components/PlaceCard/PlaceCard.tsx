// components/PlaceCard.tsx
import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const PlaceName = styled.h3`
  margin: 0;
`;

const PlaceDescription = styled.p`
  margin: 5px 0 0;
`;

interface PlaceCardProps {
  place: {
    id: number;
    name: string;
    description: string;
  };
}

const PlaceCard: React.FC<PlaceCardProps> = ({ place }) => {
  return (
    <CardContainer>
      <PlaceName>{place.name}</PlaceName>
      <PlaceDescription>{place.description}</PlaceDescription>
    </CardContainer>
  );
};

export default PlaceCard;
