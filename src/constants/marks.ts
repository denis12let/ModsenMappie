import { Mark } from 'src/types';
import { SvgIcons } from '@assets';

export const marks: Mark[] = [
  {
    name: 'architecture',
    path: SvgIcons.architectureIcon,
    ru: 'Здания',
    type: 'building',
  },
  {
    name: 'attraction',
    path: SvgIcons.attractionsIcon,
    ru: 'Отдых',
    type: 'tourism',
  },
  {
    name: 'bank',
    path: SvgIcons.bankIcon,
    ru: 'Банки',
    type: 'amenity',
  },
  {
    name: 'hostel',
    path: SvgIcons.bedIcon,
    ru: 'Хостелы',
    type: 'tourism',
  },
  {
    name: 'bicycle_parking',
    path: SvgIcons.bicycleIcon,
    ru: 'Велосипеды',
    type: 'amenity',
  },
  {
    name: 'car',
    path: SvgIcons.carIcon,
    ru: 'Авто',
    type: 'shop',
  },
  {
    name: 'cafe',
    path: SvgIcons.coffeeIcon,
    ru: 'Кафе',
    type: 'amenity',
  },
  {
    name: 'arts_centre',
    path: SvgIcons.cultureIcon,
    ru: 'Культура',
    type: 'amenity',
  },
  {
    name: 'restaurant',
    path: SvgIcons.foodIcon,
    ru: 'Рестораны',
    type: 'amenity',
  },
  {
    name: 'fuel',
    path: SvgIcons.gasIcon,
    ru: 'Заправки',
    type: 'amenity',
  },
  {
    name: 'memorial',
    path: SvgIcons.historyIcon,
    ru: 'История',
    type: 'historic',
  },
  {
    name: 'industrial',
    path: SvgIcons.industrialIcon,
    ru: 'Промзоны',
    type: 'building',
  },
  {
    name: 'park',
    path: SvgIcons.natureIcon,
    ru: 'Парки',
    type: 'leisure',
  },
  {
    name: 'toilets',
    path: SvgIcons.otherIcon,
    ru: 'Разное',
    type: 'amenity',
  },
  {
    name: 'place_of_worship',
    path: SvgIcons.religionIcon,
    ru: 'Религия',
    type: 'amenity',
  },
  {
    name: 'supermarket',
    path: SvgIcons.shopIcon,
    ru: 'Магазины',
    type: 'shop',
  },
  {
    name: 'sports_centre',
    path: SvgIcons.sportIcon,
    ru: 'Спорт',
    type: 'leisure',
  },
];
