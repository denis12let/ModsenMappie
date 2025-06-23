import { LazyExoticComponent, ComponentType } from 'react';

import { APP_ROUTES_PATH } from '@constants';
import { Auth, Favorites, Main, Search } from '@pages';
import { Navigate } from 'react-router-dom';

export interface AppRoutesProps {
  path: string;
  element: LazyExoticComponent<ComponentType<any>>;
  children?: AppRoutesProps[];
}

// export const routes = {
//   [APP_ROUTES_PATH.MAIN]: {
//     path: APP_ROUTES_PATH.MAIN + '*',
//     element: Main,
//   },
//   [APP_ROUTES_PATH.AUTH]: {
//     path: APP_ROUTES_PATH.AUTH,
//     element: Auth,
//   },
// };

// export const mainRoutes = {
//   [APP_ROUTES_PATH.FAVORITES]: {
//     path: APP_ROUTES_PATH.FAVORITES,
//     element: Favorites,
//   },
//   [APP_ROUTES_PATH.SEARCH]: {
//     path: APP_ROUTES_PATH.SEARCH,
//     element: Search,
//   },
// };

export const routes = {
  [APP_ROUTES_PATH.MAIN]: {
    path: APP_ROUTES_PATH.MAIN,
    element: Main,
    children: [
      {
        path: '',
        element: () => <Navigate to={APP_ROUTES_PATH.SEARCH} replace />,
      },
      {
        path: APP_ROUTES_PATH.FAVORITES,
        element: Favorites,
      },
      {
        path: APP_ROUTES_PATH.SEARCH,
        element: Search,
      },
    ],
  },
  [APP_ROUTES_PATH.AUTH]: {
    path: APP_ROUTES_PATH.AUTH,
    element: Auth,
  },
};
