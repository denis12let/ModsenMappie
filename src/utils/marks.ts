import { marks } from '@constants';
import { ExtendedMap } from '@context';
import { PlaceResult } from 'src/types';

export const createMarks = (places: PlaceResult[], mapRef: React.RefObject<ExtendedMap | null>) => {
  places.forEach((place) => {
    const placemark = new window.ymaps.Placemark(
      place.coordinates,
      {},
      {
        iconLayout: 'default#image',
        iconImageHref: `${marks.find((item) => place.subtype === item.name)?.path}`,
        iconImageSize: [40, 40],
        iconImageOffset: [-20, -20],
      }
    );

    mapRef?.current?.geoObjects.add(placemark);
  });
};

export const deleteMarks = (mapRef: React.RefObject<ExtendedMap | null>) => {
  //наше не удалит и еще 1(2) чего-то

  const geoObjects = mapRef.current?.geoObjects;

  if (geoObjects) {
    const count = geoObjects.getLength();

    for (let i = count - 1; i >= 2; i--) {
      geoObjects.remove(geoObjects.get(i));
    }
  }
};
