import { FC, useEffect } from 'react';
import { ConstrolsStyled, ControlButton, ControlIcon, ControlItem, Line } from './Controls.style';
import { Icons } from '@assets/icons';
import { useMapContext } from '@context';
import { handleLocateUser } from '@utils/mapControls';

export const Controls: FC = () => {
  const { mapRef, zoom, setZoom, userPlacemarkRef } = useMapContext();

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
