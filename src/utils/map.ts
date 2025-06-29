import { IMap, IPlaceMark } from 'src/types';

export const handleLocateUser = (mapRef: IMap, userPlacemarkRef: IPlaceMark) => {
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

          mapRef.current.radius?.geometry?.setCoordinates(userCoordinates);
        }
      },
      (error) => {
        console.error('Ошибка геолокации:', error);
      }
    );
  }
};

export const removeControls = (mapRef: IMap) => {
  const map = mapRef.current;

  if (!map) {
    return;
  }

  map.controls.remove('geolocationControl');
  map.controls.remove('searchControl');
  map.controls.remove('trafficControl');
  map.controls.remove('typeSelector');
  map.controls.remove('fullscreenControl');
  map.controls.remove('zoomControl');
  map.controls.remove('rulerControl');
  map.behaviors.disable(['scrollZoom']);
};

export const addCircle = (mapRef: IMap) => {
  const circle = new window.ymaps.Circle(
    [[53.9, 27.5667], 5000],
    {},
    {
      draggable: false,
      fillColor: '#5E7BC7',
      fillOpacity: 0.1,
      strokeColor: '#5E7BC7',
      strokeOpacity: 0.2,
      strokeWidth: 3,
      strokeStyle: {
        style: 'dash',
      },
    }
  );

  if (mapRef.current) {
    mapRef.current.radius = circle;
    mapRef.current.geoObjects.add(circle);
  }
};

export const createMap = (center: number[], zoom: number) => {
  const map = new window.ymaps.Map('map', {
    center: center,
    zoom: zoom,
    behaviors: ['default', 'multiTouch', 'scrollZoom', 'drag'],
  });

  return map;
};

export const createRoute = (
  mapRef: IMap,
  userPlacemarkRef: IPlaceMark,
  endCoord: number[],
  setRouteInfo: (distance: string, time: string) => void
) => {
  const startCoord = userPlacemarkRef.current?.geometry?.getCoordinates();

  if (mapRef.current?.route) {
    mapRef.current.geoObjects.remove(mapRef.current.route);
  }

  const multiRoute = new window.ymaps.multiRouter.MultiRoute(
    {
      referencePoints: [startCoord!, endCoord],
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

    if (activeRoute) {
      const time = (activeRoute.properties.get('duration', { text: '' }) as { text: string }).text;
      const distance = (activeRoute.properties.get('distance', { text: '' }) as { text: string }).text;
      setRouteInfo(distance, time);
    }
  });

  mapRef.current?.geoObjects.add(multiRoute);
  mapRef.current!.route = multiRoute;
};
