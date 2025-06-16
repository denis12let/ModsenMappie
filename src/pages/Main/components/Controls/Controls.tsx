import { FC } from 'react';
import { ConstrolsStyled, ControlButton, ControlIcon, ControlItem, Line } from './Controls.style';
import { Icons } from '@assets/icons';
import { useMapContext } from '@context';

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

  // const handleLocateUser = () => {
  //   console.log(1);
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       const userCoordinates: [number, number] = [position.coords.latitude, position.coords.longitude];
  //       if (mapRef.current) {
  //         mapRef.current.setCenter(userCoordinates);
  //         mapRef.current.setZoom(14);
  //       }
  //     });
  //   } else {
  //     console.error('Геолокация не поддерживается этим браузером.');
  //   }
  // };

  const handleLocateUser = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userCoordinates: [number, number] = [position.coords.latitude, position.coords.longitude];

          if (mapRef.current) {
            if (userPlacemarkRef.current) {
              mapRef.current.geoObjects.remove(userPlacemarkRef.current);
            }

            userPlacemarkRef.current = new window.ymaps.Placemark(
              userCoordinates,
              {
                iconCaption: 'Вы здесь',
              },
              {
                preset: 'islands#blueDotIconWithCaption',
              }
            );

            mapRef.current.geoObjects.add(userPlacemarkRef.current);

            mapRef.current.setCenter(userCoordinates);
            setZoom(14);
            mapRef.current.setZoom(14);
          }
        },
        (error) => {
          console.error('Ошибка геолокации:', error);
        }
      );
    }
  };

  return (
    <ConstrolsStyled>
      <ControlItem>
        <ControlButton onClick={handleLocateUser}>
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
