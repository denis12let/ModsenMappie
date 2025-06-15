import { FC, ReactNode } from 'react';
import { FavoriteItemBottom, FavoriteItemIcon, FavoriteItemImg, FavoriteItemTop, FavoriteItemWrapper } from './FavoriteItem.style';
import { Text } from '@ui';
import { Icons } from '@assets/icons';
import { theme } from '@styles/theme';

export const FavoriteItem: FC = () => {
  return (
    <FavoriteItemWrapper>
      <FavoriteItemTop>
        <FavoriteItemImg />
        <Text variation="title">Фантаcмагарический музей им. П.М. Машерова</Text>
      </FavoriteItemTop>
      <Text variation="text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque dolorum unde commodi, fugiat ad earum ipsum tempora quaerat
        consectetur officia consequatur perspiciatis sint asperiores debitis in, culpa ea. Iste, non?
      </Text>
      <FavoriteItemBottom>
        <FavoriteItemIcon>
          <Icons.Favorite color={theme.colors.red} width={'15'} height="20" />
        </FavoriteItemIcon>
        <FavoriteItemIcon>
          <Icons.Arrow />
        </FavoriteItemIcon>
      </FavoriteItemBottom>
    </FavoriteItemWrapper>
  );
};
