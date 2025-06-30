import { FC } from 'react';

import { useMapContext, useRouteContext } from '@context';
import { handleLocateUser } from '@utils';
import { Icons } from '@assets';

import { ConstrolsStyled, ControlButton, ControlIcon, ControlItem, RouteStyled, Line, RouteRow } from './Controls.style';

export const Controls: FC = () => {
  const { mapRef, zoom, setZoom, userPlacemarkRef } = useMapContext();
  const { distantion, time } = useRouteContext();

  const handleZoom = (type: boolean) => {
    const newZoom = type ? zoom + 1 : zoom - 1;
    setZoom(newZoom);
    if (mapRef.current) {
      mapRef.current.setZoom(newZoom);
    }
  };

  return (
    <ConstrolsStyled>
      <RouteStyled>
        <RouteRow>
          <span> {distantion}</span>
          <p>дистанция</p>
        </RouteRow>
        <RouteRow>
          <span> {time}</span>
          <p>время</p>
        </RouteRow>
      </RouteStyled>
      <ControlItem>
        <ControlButton onClick={() => handleLocateUser(mapRef, userPlacemarkRef)}>
          <ControlIcon>
            <Icons.Location />
          </ControlIcon>
        </ControlButton>
      </ControlItem>
      <ControlItem>
        <ControlButton onClick={() => handleZoom(true)}>
          <ControlIcon>
            <Icons.Plus />
          </ControlIcon>
        </ControlButton>
        <Line />
        <ControlButton onClick={() => handleZoom(false)}>
          <ControlIcon>
            <Icons.Minus />
          </ControlIcon>
        </ControlButton>
      </ControlItem>
    </ConstrolsStyled>
  );
};
