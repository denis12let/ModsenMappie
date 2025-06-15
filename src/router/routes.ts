import { LazyExoticComponent, ComponentType } from 'react';

import { APP_ROUTES_PATH } from '@constants/app';
import { Favorites, Search } from '@pages';

export interface AppRoutesProps {
  path: string;
  element: LazyExoticComponent<ComponentType<any>>;
}

export const routes = {
  [APP_ROUTES_PATH.FAVORITES]: {
    path: APP_ROUTES_PATH.FAVORITES,
    element: Favorites,
  },
  [APP_ROUTES_PATH.SEARCH]: {
    path: APP_ROUTES_PATH.SEARCH,
    element: Search,
  },
  // [APP_ROUTES_PATH.NOT_FOUND]: {
  //   path: APP_ROUTES_PATH.NOT_FOUND,
  //   element: NotFoundPage,
  // },
};
