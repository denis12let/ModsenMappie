import { LazyExoticComponent, ComponentType } from 'react';
import { Navigate } from 'react-router-dom';

import { APP_ROUTES_PATH } from '@constants';
import { Auth, Favorites, Main, Search } from '@pages';

export interface AppRoutesProps {
  path: string;
  element: LazyExoticComponent<ComponentType<any>> | ComponentType<any>;
  children?: AppRoutesProps[];
}

export const routes: AppRoutesProps[] = [
  {
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
  {
    path: APP_ROUTES_PATH.AUTH,
    element: Auth,
  },
];
