import { FC } from 'react';
import { RouteAdress, RouteAdresses, RouteButton, RouteItemWrapper } from './RouteItem.style';
import { Button, Text } from '@ui';
import { IRoute } from 'src/types';
import { createRoute } from '@utils';
import { useMapContext, useRouteContext } from '@context';

interface RouteItemProps {
  route: IRoute;
}

export const RouteItem: FC<RouteItemProps> = ({ route }) => {
  const { mapRef } = useMapContext();
  const { setRouteInfo } = useRouteContext();

  const handlerShowRoute = () => {
    createRoute(mapRef, route.startCoord, setRouteInfo, route.endCoord);
  };

  return (
    <RouteItemWrapper>
      <RouteAdresses>
        <RouteAdress>
          <Text variation="text">{route.startAdress}</Text>
          <Text variation="text">{route.startCoord}</Text>
        </RouteAdress>
        <RouteAdress>
          <Text variation="text">{route.endAdress}</Text>
          <Text variation="text">{route.endCoord}</Text>
        </RouteAdress>
      </RouteAdresses>
      <RouteButton>
        <Button type="button" onClick={handlerShowRoute}>
          Показать
        </Button>
      </RouteButton>
    </RouteItemWrapper>
  );
};
