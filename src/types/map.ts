import { multiRouter, Placemark } from 'yandex-maps';

export interface ExtendedMap extends ymaps.Map {
  radius?: ymaps.Circle;
  route?: multiRouter.MultiRoute;
}

export type IMap = React.RefObject<ExtendedMap | null>;
export type IPlaceMark = React.RefObject<Placemark | null>;
