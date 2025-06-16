import { APP_ROUTES_PATH } from './app';

import { Icons } from '@assets';
import { Logo } from '@ui';
import { theme } from '@styles';

export const mainLinks = [
  { path: '/', element: Logo, color: undefined },
  { path: APP_ROUTES_PATH.SEARCH, element: Icons.Search, color: theme.colors.blue },
  { path: APP_ROUTES_PATH.FAVORITES, element: Icons.Favorite, color: theme.colors.red },
];
