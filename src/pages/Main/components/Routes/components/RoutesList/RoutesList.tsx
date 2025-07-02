import { Text } from '@ui';
import { FC } from 'react';
import { IRoute } from 'src/types';
import { RouteItem } from '../RouteItem/RouteItem';
import { RoutesListStyled } from './RoutesList.style';

interface RoutesListProps {
  routes: IRoute[];
}

export const RoutesList: FC<RoutesListProps> = ({ routes }) => {
  const routesList = routes.map((route) => <RouteItem key={route.id} route={route} />);
  return (
    <RoutesListStyled>
      <Text variation="title">Маршруты (сыро):</Text>
      {routesList}
    </RoutesListStyled>
  );
};
