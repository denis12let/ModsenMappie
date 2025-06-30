import styled from 'styled-components';

export const FavoritesDetailsItemStyled = styled.div`
  height: 100%;
`;

export const FavoritesTop = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: ${({ theme }) => theme.spacing.xxxxs};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  & button {
    max-width: 20px;
  }
`;

export const FavoriteCard = styled.div`
  height: 570px;
  padding: ${({ theme }) => theme.spacing.md};
  padding-bottom: ${({ theme }) => theme.spacing.xxl};
  border-radius: ${({ theme }) => theme.border.borderRadius.md};
  border: ${({ theme }) => theme.border.width.md} solid ${({ theme }) => theme.colors.gray_light_light};
  @media ${({ theme }) => theme.media.mob} {
    max-width: 220px;
  }
`;

export const FavoriteImg = styled.img`
  width: 100%;
  max-height: 300px;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const FavoritesTags = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-bottom: ${({ theme }) => theme.spacing.xxxxs};
  height: 30px;
`;

export const FavoritesTitle = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const FavoritesText = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`;

export const FavoritesButtons = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  @media ${({ theme }) => theme.media.mob} {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.xxxxs};
  }
`;

export const FavoriteButton = styled.div`
  border-radius: ${({ theme }) => theme.border.borderRadius.sm};
  width: 130px;
  height: 100%;

  & button {
    padding: ${({ theme }) => theme.spacing.xxxxs} ${({ theme }) => theme.spacing.sm};

    display: flex;
    gap: ${({ theme }) => theme.spacing.xxxxs};
    align-items: center;

    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }
`;

export const FavoritesButtonLike = styled(FavoriteButton)`
  border: ${({ theme }) => theme.border.width.md} solid ${({ theme }) => theme.colors.gray_light_light};
  & button {
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export const FavoritesButtonRoute = styled(FavoriteButton)`
  border: ${({ theme }) => theme.border.width.md} solid ${({ theme }) => theme.colors.blue};
  & button {
    background-color: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.white};
  }
`;
