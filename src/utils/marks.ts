import { AppDispatch } from './../store/store';
import { marks } from '@constants';
import { ExtendedMap } from '@context';
import { placesActions } from '@store/slices';
import { PlaceResult } from 'src/types';

export const createMarks = (places: PlaceResult[], mapRef: React.RefObject<ExtendedMap | null>, dispatch: AppDispatch) => {
  places.forEach((place) => {
    const placemark = new window.ymaps.Placemark(
      place.coordinates,
      {},
      {
        iconLayout: 'default#image',
        iconImageHref: `${marks.find((item) => place.subtype === item.name)?.path}`,
        iconImageSize: [40, 40],
        iconImageOffset: [-20, -20],
        interactivityModel: 'default#layer',
        hasBalloon: true,
        hasHint: true,
      }
    );
    placemark.events.add('click', async (e) => {
      const clickedPlace = JSON.parse(JSON.stringify(place)) as PlaceResult;

      const address = await reverseGeocode(e.get('coords'));
      if (!clickedPlace.address) {
        clickedPlace.address = address;
      }
      console.log(clickedPlace, address);

      dispatch(placesActions.setPlace(clickedPlace));
    });

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

export const reverseGeocode = (coords: [number, number]): Promise<string> => {
  return new Promise((resolve, reject) => {
    window.ymaps
      .geocode(coords, { results: 1 })
      .then((res: any) => {
        const firstGeoObject = res.geoObjects.get(0);
        if (firstGeoObject) {
          console.log(9);
          const address = firstGeoObject.getAddressLine();
          resolve(address || 'Адрес не найден');
        } else {
          resolve('Адрес не найден');
        }
      })
      .catch((err: Error) => {
        reject('Ошибка геокодирования');
      });
  });
};
