import { FC, useState } from 'react';
import { ConstrolsStyled, ControlButton, ControlIcon, ControlItem, DistantionStyled, Line } from './Controls.style';
import { Icons } from '@assets/icons';
import { useMapContext, useRouteContext } from '@context';
import { handleLocateUser } from '@utils/map';

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
