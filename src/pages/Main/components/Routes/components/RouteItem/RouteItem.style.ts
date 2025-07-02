import styled from 'styled-components';
import { FavoriteButton } from '../../../Favorites/components/FavoriteDetailItem/FavoriteDetailItem.style';

export const RouteItemWrapper = styled.div`
  border: ${({ theme }) => `${theme.border.width.md} solid ${theme.colors.gray_light_light}`};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.border.borderRadius.md};
  height: 170px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media ${({ theme }) => theme.media.mob} {
    height: auto;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

export const RouteAdresses = styled.div`
  display: flex;
  flex-grow: 1;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const RouteAdress = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const RouteButton = styled(FavoriteButton)`
  border: ${({ theme }) => theme.border.width.md} solid ${({ theme }) => theme.colors.blue};
  height: 50px;
  & button {
    background-color: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.white};
    justify-content: center;
  }
`;
