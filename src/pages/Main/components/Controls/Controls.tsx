import { FC } from 'react';

import { useMapContext, useRouteContext, useTheme } from '@context';
import { handleLocateUser } from '@utils';
import { Icons } from '@assets';

import { ConstrolsStyled, ControlButton, ControlIcon, ControlItem, RouteStyled, Line, RouteRow } from './Controls.style';

export const Controls: FC = () => {
  const { theme: themeContext } = useTheme();

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
      <RouteStyled themeContext={themeContext}>
        <RouteRow>
          <span> {distantion}</span>
          <p>дистанция</p>
        </RouteRow>
        <RouteRow>
          <span> {time}</span>
          <p>время</p>
        </RouteRow>
      </RouteStyled>
      <ControlItem themeContext={themeContext}>
        <ControlButton onClick={() => handleLocateUser(mapRef, userPlacemarkRef)} themeContext={themeContext}>
          <ControlIcon>
            <Icons.Location />
          </ControlIcon>
        </ControlButton>
      </ControlItem>
      <ControlItem themeContext={themeContext}>
        <ControlButton onClick={() => handleZoom(true)} themeContext={themeContext}>
          <ControlIcon>
            <Icons.Plus />
          </ControlIcon>
        </ControlButton>
        <Line />
        <ControlButton onClick={() => handleZoom(false)} themeContext={themeContext}>
          <ControlIcon>
            <Icons.Minus />
          </ControlIcon>
        </ControlButton>
      </ControlItem>
    </ConstrolsStyled>
  );
};
