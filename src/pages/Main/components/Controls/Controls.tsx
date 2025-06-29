import { FC, useEffect, useState } from 'react';
import { ConstrolsStyled, ControlButton, ControlIcon, ControlItem, DistantionStyled, Line } from './Controls.style';
import { Icons } from '@assets/icons';
import { useMapContext } from '@context';
import { handleLocateUser } from '@utils/map';

export const Controls: FC = () => {
  const { mapRef, zoom, setZoom, userPlacemarkRef } = useMapContext();
  const [distantion, setDistantion] = useState(0);
  const [time, setTime] = useState(0);

  mapRef.current?.events.add('click', (e) => {
    console.log(111);
    const startCoord = userPlacemarkRef.current?.geometry?.getCoordinates();
    const endCoord = e.get('coords');

    if (mapRef.current?.route) {
      mapRef.current.geoObjects.remove(mapRef.current.route);
    }

    const multiRoute = new window.ymaps.multiRouter.MultiRoute(
      {
        referencePoints: [startCoord, endCoord],
        params: {
          routingMode: 'auto',
        },
      },
      {
        boundsAutoApply: true,
        wayPointVisible: false,
        routeActiveStrokeWidth: 10,
        routeActiveStrokeColor: '#000000',
      }
    );

    mapRef.current?.geoObjects.add(multiRoute);
    mapRef.current!.route = multiRoute;

    multiRoute.model.events.add('requestsuccess', function () {
      const activeRoute = multiRoute.getActiveRoute();

      setTime(activeRoute.properties.get('duration').text);
      setDistantion(activeRoute.properties.get('distance').text);
    });

    mapRef.current?.geoObjects.add(multiRoute);
    mapRef.current!.route = multiRoute;
  });

  const handleZoomIn = () => {
    const newZoom = zoom + 1;
    setZoom(newZoom);
    if (mapRef.current) {
      mapRef.current.setZoom(newZoom);
    }
  };

  const handleZoomOut = () => {
    const newZoom = zoom - 1;
    setZoom(newZoom);
    if (mapRef.current) {
      mapRef.current.setZoom(newZoom);
    }
  };

  return (
    <ConstrolsStyled>
      <DistantionStyled>
        <div>Дистанция: {distantion}</div>
        <div>Время: {time}</div>
      </DistantionStyled>
      <ControlItem>
        <ControlButton onClick={() => handleLocateUser(mapRef, userPlacemarkRef)}>
          <ControlIcon>
            <Icons.Location />
          </ControlIcon>
        </ControlButton>
      </ControlItem>
      <ControlItem>
        <ControlButton onClick={handleZoomIn}>
          <ControlIcon>
            <Icons.Plus />
          </ControlIcon>
        </ControlButton>
        <Line />
        <ControlButton onClick={handleZoomOut}>
          <ControlIcon>
            <Icons.Minus />
          </ControlIcon>
        </ControlButton>
      </ControlItem>
    </ConstrolsStyled>
  );
};
