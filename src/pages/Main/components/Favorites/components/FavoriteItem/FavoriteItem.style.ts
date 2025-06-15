import styled from 'styled-components';

export const FavoriteItemWrapper = styled.div`
  border: ${({ theme }) => `${theme.border.width.md} solid ${theme.colors.gray_light_light}`};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.border.borderRadius.md};
  height: 230px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const FavoriteItemTop = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const FavoriteItemImg = styled.div`
  max-width: 120px;
  width: 100%;
  max-height: 100px;
  height: 100%;
`;

export const FavoriteItemBottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FavoriteItemIcon = styled.button`
  max-width: 15px;
  max-height: 20px;
  transform: scaleX(-1);
  cursor: pointer;
`;
