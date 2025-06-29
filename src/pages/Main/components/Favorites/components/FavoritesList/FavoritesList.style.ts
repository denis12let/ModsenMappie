import styled from 'styled-components';

export const FavoritesListStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  max-height: 750px;
  overflow: auto;
`;
