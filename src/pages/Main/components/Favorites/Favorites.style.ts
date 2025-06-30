import styled from 'styled-components';

export const FavoritesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  height: 100%;
`;

export const FavoritesTitle = styled.div`
  display: flex;
  gap: 15px;
`;

export const SearchStyled = styled.div`
  position: relative;
  height: 60px;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  & input {
    padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.xxxxs} ${theme.spacing.sm} ${theme.spacing.xxxl}`};
  }
`;

export const SearchIcon = styled.div`
  position: absolute;

  top: ${({ theme }) => theme.spacing.md};
  left: ${({ theme }) => theme.spacing.xl};
`;
