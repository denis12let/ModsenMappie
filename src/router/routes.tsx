import { LazyExoticComponent, ComponentType } from 'react';

import { APP_ROUTES_PATH } from '@constants';
import { Auth, Main } from '@pages';

export interface AppRoutesProps {
  path: string;
  element: LazyExoticComponent<ComponentType<any>>;
}

export const routes = {
  [APP_ROUTES_PATH.MAIN]: {
    path: APP_ROUTES_PATH.MAIN + '/*',
    element: Main,
  },
  [APP_ROUTES_PATH.AUTH]: {
    path: APP_ROUTES_PATH.AUTH,
    element: Auth,
  },
  // [APP_ROUTES_PATH.NOT_FOUND]: {
  //   path: APP_ROUTES_PATH.NOT_FOUND,
  //   element: NotFoundPage,
  // },
};

export const mainRoutes = {
  [APP_ROUTES_PATH.FAVORITES]: {
    path: APP_ROUTES_PATH.FAVORITES,
    element: Main,
  },
  [APP_ROUTES_PATH.SEARCH]: {
    path: APP_ROUTES_PATH.SEARCH,
    element: Auth,
  },
};
