import styled from 'styled-components';

export const FavoritesListStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  max-height: 750px;
  overflow: auto;
  @media ${({ theme }) => theme.media.mob} {
    padding-right: ${({ theme }) => theme.spacing.xxxxs};
    max-height: 700px;
  }
`;
